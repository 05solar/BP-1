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

      <footer className="home__footer">
        식당 목록은 <code>src/data/menuData.ts</code>에서 자유롭게 수정할 수 있어요.
      </footer>
    </main>
  )
}
