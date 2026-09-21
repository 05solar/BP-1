/**
 * [데이터 수집 스크립트] fetchRestaurants.mjs
 * 카카오 로컬 API로 전북대학교 주변 식당을 수집해 src/data/menuData.ts를 생성합니다.
 *
 * 사용법:  KAKAO_REST_KEY=<REST API 키> node tools/fetchRestaurants.mjs
 * (API 키는 절대 저장소에 커밋하지 않습니다 — 환경변수로만 전달)
 *
 * 원리:
 *  - 카카오 카테고리 검색(FD6=음식점)은 쿼리당 최대 45개만 반환하므로,
 *    전북대 주변 영역을 사각형(rect)으로 잡고 45개를 넘으면 4분할하며 재귀 수집
 *  - 카카오 카테고리("음식점 > 한식 > 국밥")를 1릴(음식 종류)/2릴(세부)로 매핑
 *  - 캠퍼스 중심에서 가까운 순으로 세부 카테고리당 최대 15곳 유지
 */

const KEY = process.env.KAKAO_REST_KEY
if (!KEY) {
  console.error('KAKAO_REST_KEY 환경변수가 필요합니다.')
  process.exit(1)
}

// 전북대 전주캠퍼스 중심 좌표. 반경 RADIUS_M 이내의 식당만 사용
const CENTER = { x: 127.1292, y: 35.8467 }
const RADIUS_M = 2000
// 수집 영역: 중심 기준 2km를 덮는 사각형 (경도 1도≈90.2km, 위도 1도≈111.3km)
const RECT = { minX: 127.1069, minY: 35.8287, maxX: 127.1515, maxY: 35.8647 }

const API = 'https://dapi.kakao.com/v2/local/search/category.json'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function kakao(params) {
  const url = new URL(API)
  url.searchParams.set('category_group_code', 'FD6')
  url.searchParams.set('size', '15')
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, String(v))
  for (let attempt = 0; attempt < 5; attempt++) {
    const res = await fetch(url, { headers: { Authorization: `KakaoAK ${KEY}` } })
    if (res.status === 429) {
      await sleep(500 * (attempt + 1))
      continue
    }
    if (!res.ok) throw new Error(`Kakao API ${res.status}: ${await res.text()}`)
    return res.json()
  }
  throw new Error('Kakao API 재시도 초과 (429)')
}

const found = new Map() // id -> document

async function collectRect(rect, depth = 0) {
  const rectStr = `${rect.minX},${rect.minY},${rect.maxX},${rect.maxY}`
  const first = await kakao({ rect: rectStr, page: 1 })
  const total = first.meta.total_count

  if (total > 45 && depth < 10) {
    const midX = (rect.minX + rect.maxX) / 2
    const midY = (rect.minY + rect.maxY) / 2
    await collectRect({ minX: rect.minX, minY: rect.minY, maxX: midX, maxY: midY }, depth + 1)
    await collectRect({ minX: midX, minY: rect.minY, maxX: rect.maxX, maxY: midY }, depth + 1)
    await collectRect({ minX: rect.minX, minY: midY, maxX: midX, maxY: rect.maxY }, depth + 1)
    await collectRect({ minX: midX, minY: midY, maxX: rect.maxX, maxY: rect.maxY }, depth + 1)
    return
  }

  first.documents.forEach((d) => found.set(d.id, d))
  let page = 1
  let isEnd = first.meta.is_end
  while (!isEnd && page < 3) {
    page += 1
    const next = await kakao({ rect: rectStr, page })
    next.documents.forEach((d) => found.set(d.id, d))
    isEnd = next.meta.is_end
    await sleep(60)
  }
}

function haversineM(x1, y1, x2, y2) {
  const R = 6371000
  const toRad = (d) => (d * Math.PI) / 180
  const dLat = toRad(y2 - y1)
  const dLon = toRad(x2 - x1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(y1)) * Math.cos(toRad(y2)) * Math.sin(dLon / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(a))
}

// 카카오 상위 카테고리 → 릴 1(음식 종류) 매핑
const TOP_MAP = {
  한식: { name: '한식', emoji: '🍚' },
  중식: { name: '중식', emoji: '🥟' },
  일식: { name: '일식', emoji: '🍣' },
  양식: { name: '양식', emoji: '🍝' },
  아시아음식: { name: '아시안', emoji: '🍜' },
  분식: { name: '분식', emoji: '🍢' },
  치킨: { name: '치킨', emoji: '🍗' },
  패스트푸드: { name: '패스트푸드', emoji: '🍔' },
}
// 점심 메뉴가 아니거나(술집·간식=빵집·디저트류) 분류 불명(기타)인 상위 카테고리는 제외
const EXCLUDE_TOP = new Set(['술집', '간식', '기타'])
const MAX_PER_SUB = 15
const MIN_PER_SUB = 3

async function main() {
  console.log('수집 시작…')
  await collectRect(RECT)
  console.log(`총 ${found.size}곳 수집 완료`)

  // { 카테고리 → { 세부 → [식당] } } 구조로 집계
  const tree = new Map()
  for (const d of found.values()) {
    const dist = haversineM(CENTER.x, CENTER.y, Number(d.x), Number(d.y))
    if (dist > RADIUS_M) continue

    const parts = d.category_name.split(' > ').map((s) => s.trim())
    const top = parts[1] ?? '기타'
    if (EXCLUDE_TOP.has(top)) continue

    let catName, subName
    if (TOP_MAP[top]) {
      catName = TOP_MAP[top].name
      subName = (parts[2] ?? '일반').replace(/,/g, '·')
    } else {
      catName = '기타'
      subName = top.replace(/,/g, '·')
    }

    if (!tree.has(catName)) tree.set(catName, new Map())
    const subs = tree.get(catName)
    if (!subs.has(subName)) subs.set(subName, [])
    subs.get(subName).push({
      name: d.place_name,
      url: d.place_url.replace(/^http:/, 'https:'),
      dist,
    })
  }

  // 정리: 가까운 순 정렬 + 상한 적용, 너무 작은 세부는 '기타'로 병합
  const emojiOf = (cat) =>
    Object.values(TOP_MAP).find((v) => v.name === cat)?.emoji ?? '🍽️'

  const categories = []
  for (const [catName, subs] of tree) {
    const subList = []
    const misc = []
    for (const [subName, list] of subs) {
      list.sort((a, b) => a.dist - b.dist)
      const trimmed = list.slice(0, MAX_PER_SUB).map(({ name, url }) => ({ name, url }))
      if (trimmed.length >= MIN_PER_SUB) subList.push({ name: subName, restaurants: trimmed })
      else misc.push(...trimmed)
    }
    // '기타' 카테고리의 잔여 묶음은 분류 불명 가게가 섞이므로 버린다
    if (misc.length >= MIN_PER_SUB && catName !== '기타')
      subList.push({ name: '그 외', restaurants: misc.slice(0, MAX_PER_SUB) })
    if (subList.length > 0)
      categories.push({ name: catName, emoji: emojiOf(catName), subCategories: subList })
  }

  // 식당 수 많은 카테고리 순으로 정렬하되 '기타'는 맨 뒤로
  const count = (c) => c.subCategories.reduce((n, s) => n + s.restaurants.length, 0)
  categories.sort((a, b) =>
    a.name === '기타' ? 1 : b.name === '기타' ? -1 : count(b) - count(a),
  )

  const totalOut = categories.reduce((n, c) => n + count(c), 0)
  console.log(
    `생성: 카테고리 ${categories.length}종 / 식당 ${totalOut}곳`,
    categories.map((c) => `${c.name}(${count(c)})`).join(', '),
  )

  const today = new Date().toISOString().slice(0, 10)
  const ts = `/**
 * [데이터 파일] menuData.ts  ⚠️ 자동 생성 — 직접 수정하지 마세요
 * tools/fetchRestaurants.mjs가 카카오 로컬 API로 생성한 전북대학교 주변 실제 식당 데이터입니다.
 * (생성일: ${today}, 캠퍼스 중심 반경 ${RADIUS_M / 1000}km, 세부 카테고리당 가까운 순 최대 ${MAX_PER_SUB}곳)
 * 갱신:  KAKAO_REST_KEY=<키> node tools/fetchRestaurants.mjs
 */

export interface Restaurant {
  name: string
  url: string
}

export interface SubCategory {
  name: string
  restaurants: Restaurant[]
}

export interface FoodCategory {
  name: string
  emoji: string
  subCategories: SubCategory[]
}

export const foodCategories: FoodCategory[] = ${JSON.stringify(categories, null, 2)}

/** 모든 세부 카테고리 이름 목록 (릴 회전 연출용) */
export const allSubCategoryNames: string[] = foodCategories.flatMap((c) =>
  c.subCategories.map((s) => s.name),
)

/** 모든 식당 목록 (릴 회전 연출용) */
export const allRestaurants: Restaurant[] = foodCategories.flatMap((c) =>
  c.subCategories.flatMap((s) => s.restaurants),
)

/** 모든 식당 이름 목록 (릴 회전 연출용) */
export const allRestaurantNames: string[] = allRestaurants.map((r) => r.name)
`

  const { writeFile } = await import('node:fs/promises')
  await writeFile(new URL('../src/data/menuData.ts', import.meta.url), ts, 'utf8')
  console.log('src/data/menuData.ts 생성 완료')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
