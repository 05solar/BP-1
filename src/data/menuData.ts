/**
 * [데이터 파일] menuData.ts
 * 슬롯머신에 사용되는 3단계 메뉴 데이터입니다.
 *   1단계: 음식 종류(한식, 중식, 일식, 양식, 아시안, 야식·분식)
 *   2단계: 세부 카테고리
 *   3단계: 전북대학교 근처 실제 식당 (예시 데이터 — 자유롭게 수정하세요)
 */

export interface SubCategory {
  name: string
  restaurants: string[]
}

export interface FoodCategory {
  name: string
  emoji: string
  subCategories: SubCategory[]
}

export const foodCategories: FoodCategory[] = [
  {
    name: '한식',
    emoji: '🍚',
    subCategories: [
      {
        name: '국밥·탕',
        restaurants: ['현대옥 전북대점', '온누리 장터국밥', '덕진 콩나물국밥'],
      },
      {
        name: '백반·찌개',
        restaurants: ['시골밥상', '큰길집 김치찌개', '구정문 백반집'],
      },
      {
        name: '고기·구이',
        restaurants: ['삼겹싸롱', '화로상회 전북대점', '명륜진사갈비 전주점'],
      },
      {
        name: '비빔밥·전주식',
        restaurants: ['하숙영 가마솥비빔밥', '고궁 전주본점', '전주비빔밥집'],
      },
    ],
  },
  {
    name: '중식',
    emoji: '🥟',
    subCategories: [
      {
        name: '짜장·짬뽕',
        restaurants: ['홍콩반점0410 전북대점', '만리장성', '교동짬뽕'],
      },
      {
        name: '마라탕·마라샹궈',
        restaurants: ['라화쿵부 전북대점', '마라공방', '탕화쿵푸 전주점'],
      },
      {
        name: '양꼬치·중화요리',
        restaurants: ['아방궁 양꼬치', '천리향', '구정문 양꼬치'],
      },
    ],
  },
  {
    name: '일식',
    emoji: '🍣',
    subCategories: [
      {
        name: '라멘·우동',
        restaurants: ['역전우동0410 전북대점', '멘야 라멘', '우마이도 전주점'],
      },
      {
        name: '돈까스·카레',
        restaurants: ['홍익돈까스 전북대점', '카츠요시', '코코로 카레'],
      },
      {
        name: '초밥·덮밥',
        restaurants: ['미카도 스시', '스시히로바 전주점', '연어덮밥집 구정문'],
      },
    ],
  },
  {
    name: '양식',
    emoji: '🍝',
    subCategories: [
      {
        name: '파스타·피자',
        restaurants: ['롤링파스타 전북대점', '청춘파스타', '피자알볼로 덕진점'],
      },
      {
        name: '버거',
        restaurants: ['프랭크버거 전북대점', '맘스터치 구정문점', '버거킹 전북대점'],
      },
      {
        name: '스테이크·경양식',
        restaurants: ['어니언스 키친', '비스트로 구정문', '더 스테이크 하우스'],
      },
    ],
  },
  {
    name: '아시안',
    emoji: '🍜',
    subCategories: [
      {
        name: '쌀국수·베트남',
        restaurants: ['미분당 전북대점', '포메인 전주점', '하노이별'],
      },
      {
        name: '커리·인도',
        restaurants: ['델리 인디아', '나마스떼 전주점', '커리포트'],
      },
      {
        name: '태국·기타',
        restaurants: ['방콕야시장', '팟타이집 구정문', '사와디캅 전주'],
      },
    ],
  },
  {
    name: '야식·분식',
    emoji: '🍗',
    subCategories: [
      {
        name: '치킨',
        restaurants: ['지코바 전북대점', '60계치킨 덕진점', '푸라닭 전북대점'],
      },
      {
        name: '떡볶이·분식',
        restaurants: ['신전떡볶이 전북대점', '청년다방 구정문점', '엽기떡볶이 덕진점'],
      },
      {
        name: '찜닭·족발',
        restaurants: ['봉추찜닭 전북대점', '족발야시장 덕진점', '구정문 왕족발'],
      },
    ],
  },
]

/** 모든 세부 카테고리 이름 목록 (릴 회전 연출용) */
export const allSubCategoryNames: string[] = foodCategories.flatMap((c) =>
  c.subCategories.map((s) => s.name),
)

/** 모든 식당 이름 목록 (릴 회전 연출용) */
export const allRestaurantNames: string[] = foodCategories.flatMap((c) =>
  c.subCategories.flatMap((s) => s.restaurants),
)
