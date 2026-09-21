/**
 * [컴포넌트] SlotReel.tsx
 * 슬롯머신의 릴(회전 원통) 하나를 담당하는 컴포넌트입니다.
 * - spinId가 바뀔 때마다 긴 아이템 띠(strip)를 새로 만들어 위에서 아래로 회전시킵니다.
 * - cubic-bezier 오버슈트 곡선으로 실제 슬롯처럼 감속 후 살짝 튕기며 멈춥니다.
 * - 회전 중에는 모션 블러, 멈추는 순간 플래시 효과를 줍니다.
 */
import { useEffect, useRef, useState } from 'react'
import './SlotReel.css'

interface SlotReelProps {
  /** 릴 상단에 표시되는 라벨 (예: 음식 종류) */
  label: string
  /** 회전 중 지나가는 아이템 풀 */
  items: string[]
  /** 최종적으로 멈출 아이템 */
  target: string
  /** 스핀 트리거 (증가할 때마다 회전 시작) */
  spinId: number
  /** 회전 시간(ms) — 릴마다 다르게 주면 순차 정지 연출이 됩니다 */
  duration: number
  /** 릴이 완전히 멈췄을 때 호출 */
  onStop: () => void
}

/** 배열을 섞어서 새 배열로 반환 */
function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

/** 회전용 긴 띠를 만들고 target이 놓인 인덱스를 반환 */
function buildStrip(items: string[], target: string) {
  const strip: string[] = []
  const loops = Math.max(4, Math.ceil(40 / items.length))
  for (let i = 0; i < loops; i++) strip.push(...shuffle(items))
  strip.push(target)
  const targetIndex = strip.length - 1
  strip.push(...shuffle(items).slice(0, 3)) // 바운스 때 보일 꼬리 아이템
  return { strip, targetIndex }
}

export default function SlotReel({
  label,
  items,
  target,
  spinId,
  duration,
  onStop,
}: SlotReelProps) {
  const windowRef = useRef<HTMLDivElement>(null)
  const [strip, setStrip] = useState<string[]>(() => shuffle(items))
  const [offset, setOffset] = useState(0)
  const [transition, setTransition] = useState('none')
  const [spinning, setSpinning] = useState(false)
  const [blurred, setBlurred] = useState(false)
  const [landed, setLanded] = useState(false)
  const onStopRef = useRef(onStop)

  useEffect(() => {
    onStopRef.current = onStop
  }, [onStop])

  useEffect(() => {
    if (spinId === 0) return

    const winH = windowRef.current?.offsetHeight ?? 270
    const itemH = winH / 3
    const { strip: newStrip, targetIndex } = buildStrip(items, target)

    setStrip(newStrip)
    setLanded(false)
    setSpinning(true)
    setTransition('none')
    setOffset(0)
    setBlurred(true)

    // 브라우저가 초기 위치를 그린 다음 프레임에 목표 위치로 전환 시작
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTransition(`transform ${duration}ms cubic-bezier(0.16, 0.6, 0.14, 1.035)`)
        setOffset((targetIndex - 1) * itemH)
      })
    })

    // 감속 구간에 들어서면 블러 제거 → 글자가 또렷해지며 멈추는 느낌
    const blurTimer = setTimeout(() => setBlurred(false), duration * 0.68)
    const endTimer = setTimeout(() => {
      setSpinning(false)
      setLanded(true)
      onStopRef.current()
    }, duration + 80)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(blurTimer)
      clearTimeout(endTimer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spinId])

  return (
    <div className={`slot-reel ${spinning ? 'is-spinning' : ''} ${landed ? 'is-landed' : ''}`}>
      <div className="slot-reel__label">{label}</div>
      <div className="slot-reel__window" ref={windowRef}>
        <div
          className={`slot-reel__strip ${blurred ? 'is-blurred' : ''}`}
          style={{ transform: `translateY(-${offset}px)`, transition }}
        >
          {strip.map((item, i) => (
            <div className="slot-reel__item" key={`${i}-${item}`}>
              {item}
            </div>
          ))}
        </div>
        <div className="slot-reel__shade" />
        <div className="slot-reel__glass" />
        <div className="slot-reel__flash" />
      </div>
    </div>
  )
}
