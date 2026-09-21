/**
 * [컴포넌트] Lever.tsx
 * 슬롯머신 오른쪽에 달린 레버입니다.
 * 클릭(또는 Enter/Space)하면 당겨지는 애니메이션과 함께 onPull 콜백을 호출합니다.
 */
import { useState } from 'react'
import './Lever.css'

interface LeverProps {
  /** 회전 중이면 true — 레버 비활성화 */
  disabled: boolean
  /** 레버를 당겼을 때 호출 */
  onPull: () => void
  /** 첫 스핀 전에만 true — PUSH! 안내 힌트 표시 */
  showHint?: boolean
}

export default function Lever({ disabled, onPull, showHint = false }: LeverProps) {
  const [pulled, setPulled] = useState(false)

  const pull = () => {
    if (disabled || pulled) return
    setPulled(true)
    onPull()
    setTimeout(() => setPulled(false), 800)
  }

  return (
    <button
      type="button"
      className={`lever ${pulled ? 'is-pulled' : ''} ${disabled ? 'is-disabled' : ''}`}
      onClick={pull}
      disabled={disabled}
      aria-label="슬롯머신 레버 당기기"
    >
      {showHint && (
        <span className="lever__hint" aria-hidden="true">
          <span className="lever__hint-text">PUSH!</span>
          <span className="lever__hint-arrows">
            <span>❮</span>
            <span>❮</span>
            <span>❮</span>
          </span>
        </span>
      )}
      <span className="lever__slot-track" />
      <span className="lever__arm">
        <span className="lever__stick" />
        <span className="lever__ball" />
      </span>
      <span className="lever__base" />
    </button>
  )
}
