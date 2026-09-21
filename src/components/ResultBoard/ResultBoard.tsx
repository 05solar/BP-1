/**
 * [컴포넌트] ResultBoard.tsx
 * 세 릴이 모두 멈춘 뒤 최종 추천 결과(음식 종류 ▸ 세부 카테고리 ▸ 식당)를
 * 축하 색종이(confetti)와 함께 보여주는 결과판입니다.
 * 식당 이름을 클릭하면 카카오맵 검색 결과(위치)가 새 탭으로 열립니다.
 */
import './ResultBoard.css'

interface ResultBoardProps {
  /** 세 릴이 모두 멈췄는지 여부 */
  visible: boolean
  category: string
  emoji: string
  subCategory: string
  restaurant: string
}

const CONFETTI_COLORS = ['#ff5d5d', '#ffd447', '#5dd6ff', '#7dff8a', '#d98cff', '#ff9d47']

export default function ResultBoard({
  visible,
  category,
  emoji,
  subCategory,
  restaurant,
}: ResultBoardProps) {
  if (!visible) return null

  return (
    <div className="result-board">
      <div className="result-board__confetti" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="result-board__piece"
            style={{
              left: `${(i * 53) % 100}%`,
              background: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
              animationDelay: `${(i % 6) * 0.12}s`,
              animationDuration: `${1.6 + (i % 4) * 0.35}s`,
            }}
          />
        ))}
      </div>
      <div className="result-board__path">
        {emoji} {category} <span className="result-board__arrow">▸</span> {subCategory}
      </div>
      <a
        className="result-board__restaurant"
        href={`https://map.kakao.com/link/search/${encodeURIComponent(`전주 ${restaurant}`)}`}
        target="_blank"
        rel="noreferrer"
        title="카카오맵에서 위치 보기"
      >
        {restaurant}
        <span className="result-board__map-badge">📍 지도</span>
      </a>
      <div className="result-board__caption">
        오늘 점심은 여기 어때요? 🥢 (이름을 누르면 카카오맵으로 이동)
      </div>
    </div>
  )
}
