# process.md — 진행 상황

> 이 문서는 명령을 하나 수행할 때마다 리뉴얼하여 갱신합니다.

## 현재 상태: 슬롯머신 v1 완성 ✅

- 최종 갱신: 2026-09-21

## 완료된 작업

### 1. 저장소 연결 (2026-09-21)

- 로컬 `BP-01` 폴더를 `https://github.com/05solar/BP-1.git` 원격 저장소와 연결
- 원격이 빈 저장소여서 로컬 `main` 브랜치만 준비된 상태였음

### 2. 점심 메뉴 슬롯머신 v1 구현 (2026-09-21)

- **프로젝트 스캐폴딩**: React 18 + TypeScript + Vite, Tailwind 미사용
- **데이터** (`src/data/menuData.ts`): 음식종류(6종) → 세부 카테고리 → 전북대 근처 식당(예시) 3단계 구조
- **컴포넌트** (각각 폴더 + tsx/css 분리):
  - `SlotMachine` — 본체. 결과를 미리 뽑고 세 릴을 돌린 뒤 2.4s/3.6s/4.8s 순차 정지
  - `SlotReel` — 릴 회전: strip 이어붙이기 + translateY + 오버슈트 베지어 감속/바운스 + 모션블러 + 정지 플래시
  - `Lever` — 당김 애니메이션이 있는 레버 (스핀 트리거)
  - `ResultBoard` — 색종이 축하 효과가 있는 결과판
- **페이지**: `pages/Home` — 타이틀 + 슬롯머신 배치
- **문서**: README.md(파일 구조 명시), agent.md(작업 규칙), process.md(본 문서)
- **배포 세팅**: `vite.config.ts` base=`/BP-1/`, `.github/workflows/deploy.yml`로 GitHub Pages 자동 배포
- 빌드 검증 후 GitHub에 push

## 다음에 할 수 있는 것 (아이디어)

- 실제 식당 데이터 교체 (카카오 로컬 API 수집 스크립트)
- 효과음 (릴 회전음, 잭팟 사운드)
- "다시 뽑기" 히스토리 / 오늘 뽑은 메뉴 기록
- 식당 카카오맵 링크 연결
