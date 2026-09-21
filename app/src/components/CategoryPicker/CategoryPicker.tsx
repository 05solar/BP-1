/**
 * [컴포넌트] CategoryPicker.tsx
 * 음식 종류(1번 릴)를 사용자가 직접 고를 수 있는 선택 버튼 줄입니다.
 * 여러 종류를 동시에 선택(토글)할 수 있으며, 선택된 종류들 중에서 추첨합니다.
 * "완전 랜덤"을 누르면 선택이 모두 해제되고 전체에서 무작위로 뽑습니다.
 */
import type { FoodCategory } from '../../data/menuData'
import './CategoryPicker.css'

interface CategoryPickerProps {
  categories: FoodCategory[]
  /** 선택된 음식 종류 이름 목록 (빈 배열 = 완전 랜덤) */
  selected: string[]
  /** 릴이 도는 동안 비활성화 */
  disabled: boolean
  /** 특정 종류 선택/해제 토글 */
  onToggle: (name: string) => void
  /** 완전 랜덤(전체 해제) */
  onClear: () => void
}

export default function CategoryPicker({
  categories,
  selected,
  disabled,
  onToggle,
  onClear,
}: CategoryPickerProps) {
  return (
    <div className="category-picker" role="group" aria-label="음식 종류 선택 (복수 선택 가능)">
      <button
        type="button"
        className={`category-picker__chip ${selected.length === 0 ? 'is-active' : ''}`}
        disabled={disabled}
        onClick={onClear}
      >
        🎲 완전 랜덤
      </button>
      {categories.map((c) => (
        <button
          key={c.name}
          type="button"
          className={`category-picker__chip ${selected.includes(c.name) ? 'is-active' : ''}`}
          disabled={disabled}
          aria-pressed={selected.includes(c.name)}
          onClick={() => onToggle(c.name)}
        >
          {c.emoji} {c.name}
        </button>
      ))}
    </div>
  )
}
