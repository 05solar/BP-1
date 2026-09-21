/**
 * [컴포넌트] SlotMachine.tsx
 * 슬롯머신 본체입니다. 전체 스핀 로직을 지휘합니다.
 * - 레버를 당기면 (음식 종류 → 세부 카테고리 → 식당) 순서로 결과를 미리 뽑고
 *   세 릴을 동시에 돌린 뒤 왼쪽부터 순차적으로 멈춥니다.
 * - 프레임 둘레의 전구는 평소엔 교차 점멸, 당첨 시 빠르게 반짝입니다.
 */
import { useRef, useState } from 'react'
import SlotReel from '../SlotReel/SlotReel'
import Lever from '../Lever/Lever'
import ResultBoard from '../ResultBoard/ResultBoard'
import CategoryPicker from '../CategoryPicker/CategoryPicker'
import {
  foodCategories,
  allSubCategoryNames,
  allRestaurantNames,
  type Restaurant,
} from '../../data/menuData'
import './SlotMachine.css'

type Phase = 'idle' | 'spinning' | 'done'

interface Picks {
  category: string
  emoji: string
  subCategory: string
  restaurant: Restaurant
}

const REEL_DURATIONS = [2400, 3600, 4800]
const BULB_COUNT = 14

function randomOf<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export default function SlotMachine() {
  const [phase, setPhase] = useState<Phase>('idle')
  const [spinId, setSpinId] = useState(0)
  const [picks, setPicks] = useState<Picks | null>(null)
  /** 사용자가 고른 음식 종류 (null = 완전 랜덤) */
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const stoppedCount = useRef(0)

  const categoryNames = foodCategories.map((c) => c.name)

  const spin = () => {
    if (phase === 'spinning') return
    const category =
      foodCategories.find((c) => c.name === selectedCategory) ?? randomOf(foodCategories)
    const sub = randomOf(category.subCategories)
    const restaurant = randomOf(sub.restaurants)
    setPicks({
      category: category.name,
      emoji: category.emoji,
      subCategory: sub.name,
      restaurant,
    })
    stoppedCount.current = 0
    setPhase('spinning')
    setSpinId((n) => n + 1)
  }

  const handleReelStop = () => {
    stoppedCount.current += 1
    if (stoppedCount.current === 3) setPhase('done')
  }

  return (
    <div className={`slot-machine ${phase === 'done' ? 'is-win' : ''}`}>
      {/* 상단 간판 + 전구 */}
      <div className="slot-machine__sign">
        <div className="slot-machine__bulbs">
          {Array.from({ length: BULB_COUNT }).map((_, i) => (
            <span key={i} className={`slot-machine__bulb ${i % 2 ? 'odd' : 'even'}`} />
          ))}
        </div>
        <h2 className="slot-machine__title">🎰 LUNCH JACKPOT 🎰</h2>
      </div>

      {/* 음식 종류 선택 (완전 랜덤 / 직접 선택) */}
      <CategoryPicker
        categories={foodCategories}
        selected={selectedCategory}
        disabled={phase === 'spinning'}
        onSelect={setSelectedCategory}
      />

      {/* 릴 + 레버 */}
      <div className="slot-machine__body">
        <div className="slot-machine__reels">
          <SlotReel
            label="음식 종류"
            items={categoryNames}
            target={picks?.category ?? categoryNames[0]}
            spinId={spinId}
            duration={REEL_DURATIONS[0]}
            onStop={handleReelStop}
          />
          <SlotReel
            label="세부 카테고리"
            items={allSubCategoryNames}
            target={picks?.subCategory ?? allSubCategoryNames[0]}
            spinId={spinId}
            duration={REEL_DURATIONS[1]}
            onStop={handleReelStop}
          />
          <SlotReel
            label="식당"
            items={allRestaurantNames}
            target={picks?.restaurant.name ?? allRestaurantNames[0]}
            spinId={spinId}
            duration={REEL_DURATIONS[2]}
            onStop={handleReelStop}
          />
          {/* 당첨 줄 표시 */}
          <div className="slot-machine__payline" aria-hidden="true">
            <span className="slot-machine__payline-arrow left">▶</span>
            <span className="slot-machine__payline-arrow right">◀</span>
          </div>
        </div>
        <Lever disabled={phase === 'spinning'} onPull={spin} />
      </div>

      <p className="slot-machine__hint">
        {phase === 'spinning' ? '두구두구두구... 🥁' : '레버를 당겨 오늘의 점심을 뽑아보세요!'}
      </p>

      {picks && (
        <ResultBoard
          visible={phase === 'done'}
          category={picks.category}
          emoji={picks.emoji}
          subCategory={picks.subCategory}
          restaurant={picks.restaurant.name}
          restaurantUrl={picks.restaurant.url}
        />
      )}
    </div>
  )
}
