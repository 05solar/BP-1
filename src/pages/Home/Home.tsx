/**
 * [페이지] Home.tsx
 * 메인 페이지입니다. 타이틀과 슬롯머신(SlotMachine 컴포넌트)을 배치합니다.
 * 전북대학교 근처 점심 메뉴를 슬롯머신으로 추천받는 화면입니다.
 */
import SlotMachine from '../../components/SlotMachine/SlotMachine'
import './Home.css'

export default function Home() {
  return (
    <main className="home">
      <header className="home__header">
        <h1 className="home__title">오늘 점심 뭐 먹지?</h1>
        <p className="home__subtitle">전북대학교 근처 점심 메뉴 추천 슬롯머신</p>
      </header>

      <SlotMachine />

      <footer className="home__footer">
        식당 목록은 <code>src/data/menuData.ts</code>에서 자유롭게 수정할 수 있어요.
      </footer>
    </main>
  )
}
