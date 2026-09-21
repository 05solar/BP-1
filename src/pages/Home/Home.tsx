/**
 * [페이지] Home.tsx
 * 메인 페이지입니다. 슬롯머신(SlotMachine 컴포넌트)을 배치합니다.
 * 전북대학교 근처 점심 메뉴를 슬롯머신으로 추천받는 화면입니다.
 */
import SlotMachine from '../../components/SlotMachine/SlotMachine'
import './Home.css'

export default function Home() {
  return (
    <main className="home">
      <SlotMachine />
    </main>
  )
}
