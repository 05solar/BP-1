# 🎰 전북대 점심 슬롯머신 (Lunch Jackpot)

전북대학교 근처에서 "오늘 점심 뭐 먹지?"를 해결해주는 슬롯머신 웹앱입니다.
레버를 당기면 세 개의 릴이 진짜 슬롯머신처럼 돌아가며 순서대로 멈춥니다.

- **1번 릴** — 음식 종류 (한식 / 중식 / 일식 / 양식 / 아시안 / 야식·분식 / 카페·브런치)
- **2번 릴** — 세부 카테고리 (국밥·탕, 마라탕, 라멘·우동, 파스타·피자 …)
- **3번 릴** — 실제 식당 (카카오 로컬 API로 수집한 전북대 주변 실제 식당 367곳)

결과판의 식당 이름을 클릭하면 **카카오맵 검색 결과(위치)** 가 새 탭으로 열립니다.

> 🔗 배포 주소: https://05solar.github.io/BP-1/

## 실행 방법

```bash
npm install   # 의존성 설치
npm run dev   # 개발 서버 (http://localhost:5173)
npm run build # 프로덕션 빌드 (dist/)
```

## 기술 스택

- React 18 + TypeScript + Vite
- 순수 CSS (Tailwind 미사용) — 컴포넌트/페이지별 CSS 파일 분리
- GitHub Actions로 GitHub Pages 자동 배포 (`main` 브랜치 push 시)

## 파일 구조

```
BP-01/
├── index.html                        # HTML 진입점 (폰트 로드, #root)
├── vite.config.ts                    # Vite 설정 (GitHub Pages base: /BP-1/)
├── tsconfig.json                     # TypeScript 설정
├── package.json                      # 의존성·스크립트 정의
├── agent.md                          # 프로젝트 작업 규칙 (에이전트용 지침)
├── process.md                        # 진행 상황 기록 (명령마다 갱신)
├── tools/
│   └── fetchRestaurants.mjs          # 카카오 로컬 API로 식당 데이터 수집·menuData.ts 생성
├── .github/workflows/deploy.yml      # GitHub Pages 자동 배포 워크플로
└── src/
    ├── main.tsx                      # React 앱 마운트 진입점
    ├── index.css                     # 전역 스타일 (리셋·폰트·배경)
    ├── App.tsx                       # 루트 컴포넌트 (Home 페이지 렌더링)
    ├── data/
    │   └── menuData.ts               # 음식종류→세부카테고리→식당 3단계 데이터
    ├── pages/
    │   └── Home/
    │       ├── Home.tsx              # 메인 페이지 (타이틀 + 슬롯머신 배치)
    │       └── Home.css              # 메인 페이지 스타일
    └── components/
        ├── SlotMachine/
        │   ├── SlotMachine.tsx       # 슬롯머신 본체 (스핀 로직·순차 정지 지휘)
        │   └── SlotMachine.css       # 프레임·간판·전구·당첨줄 스타일
        ├── SlotReel/
        │   ├── SlotReel.tsx          # 릴 1개 (회전·감속·바운스·모션블러)
        │   └── SlotReel.css          # 릴 창·유리 반사·플래시 스타일
        ├── Lever/
        │   ├── Lever.tsx             # 레버 (당김 애니메이션 + 스핀 트리거)
        │   └── Lever.css             # 레버 막대·손잡이·받침 스타일
        └── ResultBoard/
            ├── ResultBoard.tsx       # 최종 결과판 (색종이 축하 효과)
            └── ResultBoard.css       # 결과판 등장·confetti 스타일
```

## 애니메이션 구현 포인트

- **릴 회전**: 아이템을 길게 이어붙인 띠(strip)를 `translateY`로 이동시키고,
  `cubic-bezier(0.16, 0.6, 0.14, 1.035)` 오버슈트 곡선으로 감속 후 살짝 튕기며 정지
- **모션 블러**: 회전 중 `filter: blur()` 적용, 감속 구간(68% 지점)에서 해제
- **순차 정지**: 릴별 회전 시간을 2.4s / 3.6s / 4.8s로 다르게 주어 왼쪽부터 차례로 멈춤
- **디테일**: 릴 창 위아래 음영(원통 드럼 느낌), 유리 반사광, 정지 순간 플래시,
  전구 교차 점멸(당첨 시 고속 점멸), 결과판 색종이 낙하

## 데이터 갱신

[`src/data/menuData.ts`](src/data/menuData.ts)는 **자동 생성 파일**입니다.
카카오 로컬 API(카테고리 검색, FD6)로 전북대 캠퍼스 주변을 격자 분할 수집한
실제 식당 데이터이며, 각 식당은 카카오맵 상세 페이지(`place.map.kakao.com/...`)로 연결됩니다.

```bash
# 카카오 developers에서 발급한 REST API 키를 환경변수로 전달 (키는 절대 커밋 금지)
KAKAO_REST_KEY=<REST_API_키> node tools/fetchRestaurants.mjs
```

## 배포 (GitHub Pages)

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 자동으로 빌드해서
GitHub Pages에 배포합니다. 저장소 **Settings → Pages → Source**를
**GitHub Actions**로 설정해야 합니다 (최초 1회).
