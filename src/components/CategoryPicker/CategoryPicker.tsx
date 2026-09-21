/**
 * [컴포넌트] CategoryPicker.tsx
 * 음식 종류(1번 릴)를 사용자가 직접 고를 수 있는 선택 버튼 줄입니다.
 * "완전 랜덤"(기본)을 누르면 전체에서 무작위, 특정 종류를 누르면
 * 그 종류 안에서만 세부 카테고리·식당이 뽑힙니다.
 */
import type { FoodCategory } from '../../data/menuData'
import './CategoryPicker.css'

interface CategoryPickerProps {
  categories: FoodCategory[]
  /** 선택된 음식 종류 이름 (null = 완전 랜덤) */
  selected: string | null
  /** 릴이 도는 동안 비활성화 */
  disabled: boolean
  onSelect: (name: string | null) => void
}

export default function CategoryPicker({
  categories,
  selected,
  disabled,
  onSelect,
}: CategoryPickerProps) {
  return (
    <div className="category-picker" role="group" aria-label="음식 종류 선택">
      <button
        type="button"
        className={`category-picker__chip ${selected === null ? 'is-active' : ''}`}
        disabled={disabled}
        onClick={() => onSelect(null)}
      >
        🎲 완전 랜덤
      </button>
      {categories.map((c) => (
        <button
          key={c.name}
          type="button"
          className={`category-picker__chip ${selected === c.name ? 'is-active' : ''}`}
          disabled={disabled}
          onClick={() => onSelect(c.name)}
        >
          {c.emoji} {c.name}
        </button>
      ))}
    </div>
  )
}
