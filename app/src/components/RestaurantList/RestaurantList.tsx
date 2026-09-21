/**
 * [컴포넌트] RestaurantList.tsx
 * 화면 오른쪽에서 토글로 열리는 전체 식당 목록 패널(사이드 드로어)입니다.
 * 카테고리 → 세부 카테고리별로 접었다 펼 수 있고,
 * 식당 이름을 누르면 카카오맵 상세 페이지가 새 탭으로 열립니다.
 */
import { useState } from 'react'
import { foodCategories, allRestaurantNames } from '../../data/menuData'
import './RestaurantList.css'

export default function RestaurantList() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* 오른쪽 가장자리 토글 버튼 */}
      <button
        type="button"
        className={`restaurant-list__toggle ${open ? 'is-open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="restaurant-list-panel"
      >
        {open ? '✕ 닫기' : `📋 식당 목록 (${allRestaurantNames.length})`}
      </button>

      {/* 드로어 패널 */}
      <aside
        id="restaurant-list-panel"
        className={`restaurant-list ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
      >
        <h2 className="restaurant-list__title">
          전체 식당 목록 <span>{allRestaurantNames.length}곳</span>
        </h2>
        <div className="restaurant-list__scroll">
          {foodCategories.map((cat) => (
            <details key={cat.name} className="restaurant-list__category">
              <summary>
                {cat.emoji} {cat.name}
                <span className="restaurant-list__count">
                  {cat.subCategories.reduce((n, s) => n + s.restaurants.length, 0)}
                </span>
              </summary>
              {cat.subCategories.map((sub) => (
                <div key={sub.name} className="restaurant-list__sub">
                  <h3 className="restaurant-list__sub-name">{sub.name}</h3>
                  <ul className="restaurant-list__items">
                    {sub.restaurants.map((r) => (
                      <li key={r.url}>
                        <a href={r.url} target="_blank" rel="noreferrer">
                          {r.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </details>
          ))}
        </div>
      </aside>
    </>
  )
}
