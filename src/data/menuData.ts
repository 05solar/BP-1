/**
 * [데이터 파일] menuData.ts  ⚠️ 자동 생성 — 직접 수정하지 마세요
 * tools/fetchRestaurants.mjs가 카카오 로컬 API로 생성한 전북대학교 주변 실제 식당 데이터입니다.
 * (생성일: 2026-09-21, 헌혈의집 전북대한옥센터 기준 반경 1km, 세부 카테고리당 가까운 순 최대 15곳)
 * 갱신:  KAKAO_REST_KEY=<키> node tools/fetchRestaurants.mjs
 */

export interface Restaurant {
  name: string
  url: string
}

export interface SubCategory {
  name: string
  restaurants: Restaurant[]
}

export interface FoodCategory {
  name: string
  emoji: string
  subCategories: SubCategory[]
}

export const foodCategories: FoodCategory[] = [
  {
    "name": "한식",
    "emoji": "🍚",
    "subCategories": [
      {
        "name": "해물·생선",
        "restaurants": [
          {
            "name": "육회바른연어 전주전북대점",
            "url": "https://place.map.kakao.com/1830537123"
          },
          {
            "name": "달코롬딱새우와연어장",
            "url": "https://place.map.kakao.com/1726747845"
          },
          {
            "name": "만선회센타",
            "url": "https://place.map.kakao.com/8960220"
          },
          {
            "name": "광장수산",
            "url": "https://place.map.kakao.com/898953492"
          },
          {
            "name": "소몽",
            "url": "https://place.map.kakao.com/1425025335"
          },
          {
            "name": "성게향회관",
            "url": "https://place.map.kakao.com/459396108"
          },
          {
            "name": "풍천민물숯불장어",
            "url": "https://place.map.kakao.com/27461390"
          },
          {
            "name": "브라더아구찜 전북대점",
            "url": "https://place.map.kakao.com/2037369886"
          },
          {
            "name": "낙쭈족&한우곱창",
            "url": "https://place.map.kakao.com/1505645659"
          },
          {
            "name": "낙지야낙지야고기사랑",
            "url": "https://place.map.kakao.com/1772523622"
          },
          {
            "name": "금암동태마을",
            "url": "https://place.map.kakao.com/16866957"
          },
          {
            "name": "미담덕장 본점",
            "url": "https://place.map.kakao.com/1892638540"
          },
          {
            "name": "세우고",
            "url": "https://place.map.kakao.com/16779692"
          },
          {
            "name": "육회야문연어 전주덕진점",
            "url": "https://place.map.kakao.com/1074247276"
          }
        ]
      },
      {
        "name": "일반",
        "restaurants": [
          {
            "name": "주저리",
            "url": "https://place.map.kakao.com/789465796"
          },
          {
            "name": "왕건카레 전북대점",
            "url": "https://place.map.kakao.com/52549327"
          },
          {
            "name": "주인테이블 전북대본점",
            "url": "https://place.map.kakao.com/1794168624"
          },
          {
            "name": "찐막",
            "url": "https://place.map.kakao.com/1882717682"
          },
          {
            "name": "우든",
            "url": "https://place.map.kakao.com/2082974344"
          },
          {
            "name": "주한장",
            "url": "https://place.map.kakao.com/1232794683"
          },
          {
            "name": "먹새통 전북대점",
            "url": "https://place.map.kakao.com/1328964747"
          },
          {
            "name": "종종",
            "url": "https://place.map.kakao.com/698387429"
          },
          {
            "name": "광장예촌",
            "url": "https://place.map.kakao.com/1739808333"
          },
          {
            "name": "엄마밥줘",
            "url": "https://place.map.kakao.com/2010969974"
          },
          {
            "name": "행복한식탁",
            "url": "https://place.map.kakao.com/10914151"
          },
          {
            "name": "삼원가든",
            "url": "https://place.map.kakao.com/1292934430"
          },
          {
            "name": "경기장맛나식당",
            "url": "https://place.map.kakao.com/11734723"
          },
          {
            "name": "처가집식당",
            "url": "https://place.map.kakao.com/18716859"
          },
          {
            "name": "밥물관 전북대점",
            "url": "https://place.map.kakao.com/1535958015"
          }
        ]
      },
      {
        "name": "국수",
        "restaurants": [
          {
            "name": "더도리칼국수",
            "url": "https://place.map.kakao.com/11096390"
          },
          {
            "name": "정성국수 전북대점",
            "url": "https://place.map.kakao.com/383332900"
          },
          {
            "name": "온동네협동조합",
            "url": "https://place.map.kakao.com/965536269"
          },
          {
            "name": "국술랭",
            "url": "https://place.map.kakao.com/2093640520"
          },
          {
            "name": "여만국수전문점",
            "url": "https://place.map.kakao.com/15795127"
          },
          {
            "name": "정둔면옥",
            "url": "https://place.map.kakao.com/9934931"
          },
          {
            "name": "정주분식",
            "url": "https://place.map.kakao.com/16810236"
          },
          {
            "name": "백운면",
            "url": "https://place.map.kakao.com/82782463"
          },
          {
            "name": "금암면옥 본점",
            "url": "https://place.map.kakao.com/15331829"
          },
          {
            "name": "세엄마칼국수 금암점",
            "url": "https://place.map.kakao.com/217756304"
          },
          {
            "name": "세기국수",
            "url": "https://place.map.kakao.com/557637053"
          }
        ]
      },
      {
        "name": "국밥",
        "restaurants": [
          {
            "name": "여리국밥 전북대점",
            "url": "https://place.map.kakao.com/1830851738"
          },
          {
            "name": "전주현대옥 덕진광장점",
            "url": "https://place.map.kakao.com/12648404"
          },
          {
            "name": "덕천식당",
            "url": "https://place.map.kakao.com/9784823"
          },
          {
            "name": "국밥백서 전주덕진점",
            "url": "https://place.map.kakao.com/1976243673"
          },
          {
            "name": "남도소머리국밥",
            "url": "https://place.map.kakao.com/15791758"
          },
          {
            "name": "전주현대옥 전주고속버스터미널점",
            "url": "https://place.map.kakao.com/18189730"
          },
          {
            "name": "국면당 금암본점",
            "url": "https://place.map.kakao.com/1116229294"
          },
          {
            "name": "서울전통육개장 전주터미널점",
            "url": "https://place.map.kakao.com/593878609"
          }
        ]
      },
      {
        "name": "육류·고기",
        "restaurants": [
          {
            "name": "오일내등갈비 본점",
            "url": "https://place.map.kakao.com/1623479168"
          },
          {
            "name": "테트리스찜닭 전북대점",
            "url": "https://place.map.kakao.com/1048495397"
          },
          {
            "name": "오늘김해뒷고기 전북대점",
            "url": "https://place.map.kakao.com/1206516520"
          },
          {
            "name": "순정닭발 전북대점",
            "url": "https://place.map.kakao.com/549325241"
          },
          {
            "name": "팬텀팬피그 전북대점",
            "url": "https://place.map.kakao.com/1260586662"
          },
          {
            "name": "고기듬뿍국물두루치기 전주본점",
            "url": "https://place.map.kakao.com/2068371207"
          },
          {
            "name": "청양농장",
            "url": "https://place.map.kakao.com/12352440"
          },
          {
            "name": "마포갈매기",
            "url": "https://place.map.kakao.com/1284885929"
          },
          {
            "name": "신마포갈매기 전북대점",
            "url": "https://place.map.kakao.com/14529888"
          },
          {
            "name": "오양집 전북대점",
            "url": "https://place.map.kakao.com/1029012943"
          },
          {
            "name": "전주숯불닭집 전북대점",
            "url": "https://place.map.kakao.com/1139199720"
          },
          {
            "name": "육연식당",
            "url": "https://place.map.kakao.com/1526489557"
          },
          {
            "name": "우정숯불닭발",
            "url": "https://place.map.kakao.com/284634279"
          },
          {
            "name": "오일내 전북대점",
            "url": "https://place.map.kakao.com/1678583146"
          },
          {
            "name": "고수닭갈비 전북대점",
            "url": "https://place.map.kakao.com/9517318"
          }
        ]
      },
      {
        "name": "감자탕",
        "restaurants": [
          {
            "name": "해이루 전북대본점",
            "url": "https://place.map.kakao.com/12146357"
          },
          {
            "name": "청년감자탕순대국 전북대점",
            "url": "https://place.map.kakao.com/1219896053"
          },
          {
            "name": "이문형감자탕",
            "url": "https://place.map.kakao.com/1574308014"
          },
          {
            "name": "정직한한가득감자탕 덕진광장점",
            "url": "https://place.map.kakao.com/1751969615"
          },
          {
            "name": "다담감자탕",
            "url": "https://place.map.kakao.com/1026340107"
          }
        ]
      },
      {
        "name": "찌개·전골",
        "restaurants": [
          {
            "name": "김치찌개잘하는집",
            "url": "https://place.map.kakao.com/525505620"
          },
          {
            "name": "엄마손김치찌개",
            "url": "https://place.map.kakao.com/16428101"
          },
          {
            "name": "청년식탁사잇길",
            "url": "https://place.map.kakao.com/2106945607"
          },
          {
            "name": "금암동부대찌개 본점",
            "url": "https://place.map.kakao.com/8799057"
          }
        ]
      },
      {
        "name": "설렁탕",
        "restaurants": [
          {
            "name": "서울깍두기 전북대점",
            "url": "https://place.map.kakao.com/1688184233"
          },
          {
            "name": "전주깍두기 본점",
            "url": "https://place.map.kakao.com/1387347730"
          },
          {
            "name": "족보설렁탕",
            "url": "https://place.map.kakao.com/10789588"
          },
          {
            "name": "본설렁탕 전주금암점",
            "url": "https://place.map.kakao.com/484083322"
          }
        ]
      },
      {
        "name": "순대",
        "restaurants": [
          {
            "name": "정남옥 전북대점",
            "url": "https://place.map.kakao.com/808912426"
          },
          {
            "name": "연다라순대",
            "url": "https://place.map.kakao.com/16779605"
          },
          {
            "name": "금암피순대",
            "url": "https://place.map.kakao.com/21291721"
          },
          {
            "name": "큰맘할매순대국 전주1호점",
            "url": "https://place.map.kakao.com/465286765"
          }
        ]
      },
      {
        "name": "해장국",
        "restaurants": [
          {
            "name": "용집",
            "url": "https://place.map.kakao.com/9279323"
          },
          {
            "name": "엄가네시골집24시얼큰한뼈해장국",
            "url": "https://place.map.kakao.com/20016839"
          },
          {
            "name": "우창해장국 전주한옥마을점",
            "url": "https://place.map.kakao.com/264931586"
          }
        ]
      },
      {
        "name": "그 외",
        "restaurants": [
          {
            "name": "바우네나주곰탕 전주본점",
            "url": "https://place.map.kakao.com/44424601"
          },
          {
            "name": "육쌈냉면 전북대점",
            "url": "https://place.map.kakao.com/19978054"
          },
          {
            "name": "줄벼락",
            "url": "https://place.map.kakao.com/1266590183"
          },
          {
            "name": "신밥도둑 덕진점",
            "url": "https://place.map.kakao.com/2131357918"
          },
          {
            "name": "봉구스밥버거 전북대점",
            "url": "https://place.map.kakao.com/19532688"
          },
          {
            "name": "봉구스밥버거 전북대덕진점",
            "url": "https://place.map.kakao.com/831903211"
          },
          {
            "name": "뜰안에밥상",
            "url": "https://place.map.kakao.com/1976845425"
          },
          {
            "name": "밥풀릭스 전북대점",
            "url": "https://place.map.kakao.com/462659121"
          },
          {
            "name": "뜸들이다 전북대점",
            "url": "https://place.map.kakao.com/56185147"
          }
        ]
      }
    ]
  },
  {
    "name": "일식",
    "emoji": "🍣",
    "subCategories": [
      {
        "name": "돈까스·우동",
        "restaurants": [
          {
            "name": "역전우동0410 전북대점",
            "url": "https://place.map.kakao.com/340277878"
          },
          {
            "name": "미소야 전북대점",
            "url": "https://place.map.kakao.com/813281204"
          },
          {
            "name": "더담다 전북대본점",
            "url": "https://place.map.kakao.com/196006365"
          },
          {
            "name": "요요키라멘",
            "url": "https://place.map.kakao.com/1351133602"
          },
          {
            "name": "료카츠",
            "url": "https://place.map.kakao.com/1055494117"
          },
          {
            "name": "완산동까스",
            "url": "https://place.map.kakao.com/1856066390"
          },
          {
            "name": "먹짜 전북대본점",
            "url": "https://place.map.kakao.com/24710017"
          }
        ]
      },
      {
        "name": "일본식라면",
        "restaurants": [
          {
            "name": "산쪼메 전북대점",
            "url": "https://place.map.kakao.com/1946705906"
          },
          {
            "name": "치쿠린 전북대본점",
            "url": "https://place.map.kakao.com/1090775435"
          },
          {
            "name": "멘야케이 본점",
            "url": "https://place.map.kakao.com/1048550547"
          }
        ]
      },
      {
        "name": "일반",
        "restaurants": [
          {
            "name": "에그하우스",
            "url": "https://place.map.kakao.com/949086418"
          },
          {
            "name": "만배식탁 전북대점",
            "url": "https://place.map.kakao.com/30328574"
          },
          {
            "name": "하나요리당고",
            "url": "https://place.map.kakao.com/79828425"
          },
          {
            "name": "카츠호",
            "url": "https://place.map.kakao.com/1730055000"
          },
          {
            "name": "코요",
            "url": "https://place.map.kakao.com/196446335"
          },
          {
            "name": "우마이",
            "url": "https://place.map.kakao.com/440842642"
          },
          {
            "name": "사이코우타코야끼 전북대점",
            "url": "https://place.map.kakao.com/1944703733"
          },
          {
            "name": "코이누",
            "url": "https://place.map.kakao.com/1374472667"
          },
          {
            "name": "금암소바",
            "url": "https://place.map.kakao.com/16779100"
          },
          {
            "name": "모퉁이 전북대점",
            "url": "https://place.map.kakao.com/670538618"
          }
        ]
      },
      {
        "name": "그 외",
        "restaurants": [
          {
            "name": "면식당 전북대점",
            "url": "https://place.map.kakao.com/458606140"
          },
          {
            "name": "도꾸이",
            "url": "https://place.map.kakao.com/579026978"
          },
          {
            "name": "무모한초밥 금암전북대점",
            "url": "https://place.map.kakao.com/655645450"
          },
          {
            "name": "참치일번가 본점",
            "url": "https://place.map.kakao.com/16546389"
          },
          {
            "name": "백소정 전북대점",
            "url": "https://place.map.kakao.com/674270276"
          },
          {
            "name": "치히로 전북대점",
            "url": "https://place.map.kakao.com/2114589876"
          },
          {
            "name": "강담",
            "url": "https://place.map.kakao.com/21064820"
          }
        ]
      }
    ]
  },
  {
    "name": "양식",
    "emoji": "🍝",
    "subCategories": [
      {
        "name": "이탈리안",
        "restaurants": [
          {
            "name": "은하별감파스타 전북대점",
            "url": "https://place.map.kakao.com/1784922237"
          },
          {
            "name": "롤링파스타 전북대점",
            "url": "https://place.map.kakao.com/1237944203"
          },
          {
            "name": "제비파스타 전주전북대점",
            "url": "https://place.map.kakao.com/1059577616"
          },
          {
            "name": "파레스토랑",
            "url": "https://place.map.kakao.com/360454149"
          }
        ]
      },
      {
        "name": "일반",
        "restaurants": [
          {
            "name": "뉴뉴키친",
            "url": "https://place.map.kakao.com/1170089333"
          },
          {
            "name": "언더그라운드",
            "url": "https://place.map.kakao.com/1067202097"
          },
          {
            "name": "브디런",
            "url": "https://place.map.kakao.com/1566668191"
          },
          {
            "name": "팀레스토랑",
            "url": "https://place.map.kakao.com/1591822112"
          },
          {
            "name": "팀 전북대점",
            "url": "https://place.map.kakao.com/21288347"
          },
          {
            "name": "치팅데이 전북대점",
            "url": "https://place.map.kakao.com/452542069"
          },
          {
            "name": "카페트럼펫",
            "url": "https://place.map.kakao.com/21222123"
          },
          {
            "name": "하우스37",
            "url": "https://place.map.kakao.com/1331304674"
          },
          {
            "name": "아르블룸 레스토랑",
            "url": "https://place.map.kakao.com/1037699375"
          },
          {
            "name": "피르다브스",
            "url": "https://place.map.kakao.com/1474178222"
          }
        ]
      },
      {
        "name": "피자",
        "restaurants": [
          {
            "name": "파파존스 전주점",
            "url": "https://place.map.kakao.com/12118513"
          },
          {
            "name": "고피자 전북대점",
            "url": "https://place.map.kakao.com/1775539719"
          },
          {
            "name": "피자마루 전주전북대점",
            "url": "https://place.map.kakao.com/1249373277"
          },
          {
            "name": "50엔드피자",
            "url": "https://place.map.kakao.com/597856560"
          },
          {
            "name": "피자닭터 전주2호점",
            "url": "https://place.map.kakao.com/1674664701"
          },
          {
            "name": "지정환피자 전북대점",
            "url": "https://place.map.kakao.com/8597674"
          },
          {
            "name": "피자의생명은치즈다 임연수점",
            "url": "https://place.map.kakao.com/1664989065"
          }
        ]
      },
      {
        "name": "햄버거",
        "restaurants": [
          {
            "name": "왓더버거 전북대점",
            "url": "https://place.map.kakao.com/1111596515"
          },
          {
            "name": "코지버거",
            "url": "https://place.map.kakao.com/2058333005"
          },
          {
            "name": "버거피아 전북대점",
            "url": "https://place.map.kakao.com/1918691555"
          },
          {
            "name": "필라델피아",
            "url": "https://place.map.kakao.com/1819234118"
          }
        ]
      }
    ]
  },
  {
    "name": "치킨",
    "emoji": "🍗",
    "subCategories": [
      {
        "name": "일반",
        "restaurants": [
          {
            "name": "모쿠모쿠 전북대점",
            "url": "https://place.map.kakao.com/380003507"
          },
          {
            "name": "순정이네찹쌀전기구이통닭 전북대점",
            "url": "https://place.map.kakao.com/565612486"
          },
          {
            "name": "솜리치킨 전북대점",
            "url": "https://place.map.kakao.com/936164594"
          },
          {
            "name": "마이마이치킨 전주본점",
            "url": "https://place.map.kakao.com/26942693"
          },
          {
            "name": "만계치킨 전북대점",
            "url": "https://place.map.kakao.com/100687269"
          },
          {
            "name": "아웃닭 전북대점",
            "url": "https://place.map.kakao.com/803140607"
          },
          {
            "name": "왕초바베큐 전북대점",
            "url": "https://place.map.kakao.com/904151710"
          },
          {
            "name": "노상치킨 전북대점",
            "url": "https://place.map.kakao.com/323399484"
          },
          {
            "name": "가장맛있는치킨 전북대점",
            "url": "https://place.map.kakao.com/1869995141"
          },
          {
            "name": "뉴맥스치킨 체인본점",
            "url": "https://place.map.kakao.com/8851628"
          }
        ]
      },
      {
        "name": "그 외",
        "restaurants": [
          {
            "name": "BBQ 전주덕진점",
            "url": "https://place.map.kakao.com/185004770"
          },
          {
            "name": "BBQ 전북대점",
            "url": "https://place.map.kakao.com/1998611730"
          },
          {
            "name": "기영이숯불두마리치킨 전북대점",
            "url": "https://place.map.kakao.com/642443350"
          },
          {
            "name": "굽네치킨 전주덕진점",
            "url": "https://place.map.kakao.com/415957572"
          },
          {
            "name": "다사랑치킨피자 전북대점",
            "url": "https://place.map.kakao.com/26641149"
          },
          {
            "name": "충만치킨 전주전북대점",
            "url": "https://place.map.kakao.com/24904078"
          },
          {
            "name": "교촌치킨 전북대점",
            "url": "https://place.map.kakao.com/385055859"
          },
          {
            "name": "BHC치킨 전북대점",
            "url": "https://place.map.kakao.com/1359191806"
          },
          {
            "name": "맥시칸치킨 금암점",
            "url": "https://place.map.kakao.com/21347216"
          },
          {
            "name": "네네치킨 덕진전북대점",
            "url": "https://place.map.kakao.com/1870203793"
          },
          {
            "name": "썬더치킨 금암남도점",
            "url": "https://place.map.kakao.com/1888505806"
          },
          {
            "name": "디디치킨 전북대점",
            "url": "https://place.map.kakao.com/19925693"
          },
          {
            "name": "멕시카나치킨 전북대점",
            "url": "https://place.map.kakao.com/1778641320"
          },
          {
            "name": "치킨마루 전북대점",
            "url": "https://place.map.kakao.com/2052277079"
          },
          {
            "name": "지코바 덕진1호점",
            "url": "https://place.map.kakao.com/118870630"
          }
        ]
      }
    ]
  },
  {
    "name": "분식",
    "emoji": "🍢",
    "subCategories": [
      {
        "name": "일반",
        "restaurants": [
          {
            "name": "옛날땡땡이상추튀김 북대1호점",
            "url": "https://place.map.kakao.com/16637069"
          },
          {
            "name": "참맛분식 본점",
            "url": "https://place.map.kakao.com/12283294"
          },
          {
            "name": "정원김밥",
            "url": "https://place.map.kakao.com/677677255"
          },
          {
            "name": "밀스토리컵밥",
            "url": "https://place.map.kakao.com/739218377"
          },
          {
            "name": "해밀",
            "url": "https://place.map.kakao.com/15552072"
          },
          {
            "name": "경기장맛나튀김",
            "url": "https://place.map.kakao.com/21349567"
          },
          {
            "name": "정자네손만두",
            "url": "https://place.map.kakao.com/25118627"
          },
          {
            "name": "또또분식",
            "url": "https://place.map.kakao.com/836163747"
          },
          {
            "name": "강경원 달인만두가 금암본점",
            "url": "https://place.map.kakao.com/1551364560"
          },
          {
            "name": "김밥세상",
            "url": "https://place.map.kakao.com/21499142"
          },
          {
            "name": "얌스 금암점",
            "url": "https://place.map.kakao.com/456264514"
          },
          {
            "name": "에바다떡볶이&튀김",
            "url": "https://place.map.kakao.com/860748765"
          },
          {
            "name": "신김밥천국",
            "url": "https://place.map.kakao.com/16892634"
          }
        ]
      },
      {
        "name": "떡볶이",
        "restaurants": [
          {
            "name": "동대문엽기떡볶이 전북대점",
            "url": "https://place.map.kakao.com/20707743"
          },
          {
            "name": "모두랑즉석떡볶이",
            "url": "https://place.map.kakao.com/17957123"
          },
          {
            "name": "청년다방 전북대점",
            "url": "https://place.map.kakao.com/849812410"
          },
          {
            "name": "신전떡볶이 전북대점",
            "url": "https://place.map.kakao.com/27385205"
          },
          {
            "name": "태리로제떡볶이",
            "url": "https://place.map.kakao.com/508221921"
          },
          {
            "name": "33떡볶이 전주금암점",
            "url": "https://place.map.kakao.com/619190954"
          }
        ]
      }
    ]
  },
  {
    "name": "중식",
    "emoji": "🥟",
    "subCategories": [
      {
        "name": "일반",
        "restaurants": [
          {
            "name": "포차모닥불",
            "url": "https://place.map.kakao.com/2107146372"
          },
          {
            "name": "요히",
            "url": "https://place.map.kakao.com/1062635378"
          },
          {
            "name": "소소",
            "url": "https://place.map.kakao.com/1833970152"
          }
        ]
      },
      {
        "name": "중국요리",
        "restaurants": [
          {
            "name": "중경식객훠궈라화쿵푸 전북대점",
            "url": "https://place.map.kakao.com/976218379"
          },
          {
            "name": "신덕일관",
            "url": "https://place.map.kakao.com/8890282"
          },
          {
            "name": "미미마라 전주본점",
            "url": "https://place.map.kakao.com/1569682693"
          },
          {
            "name": "탕화쿵푸마라탕 전북대점",
            "url": "https://place.map.kakao.com/488882945"
          },
          {
            "name": "도야짬뽕 전북대점",
            "url": "https://place.map.kakao.com/479325364"
          },
          {
            "name": "이런이궈마라탕 전북대점",
            "url": "https://place.map.kakao.com/1183059157"
          },
          {
            "name": "춘리마라탕",
            "url": "https://place.map.kakao.com/622634433"
          },
          {
            "name": "홍콩반점0410 전주전북대점",
            "url": "https://place.map.kakao.com/18562190"
          },
          {
            "name": "귀신반점 전북대점",
            "url": "https://place.map.kakao.com/27304880"
          },
          {
            "name": "홍보성",
            "url": "https://place.map.kakao.com/10977554"
          },
          {
            "name": "짬뽕지존 덕진점",
            "url": "https://place.map.kakao.com/451655072"
          },
          {
            "name": "백리향",
            "url": "https://place.map.kakao.com/7887058"
          },
          {
            "name": "짬뽕명가",
            "url": "https://place.map.kakao.com/9218386"
          },
          {
            "name": "굿모닝",
            "url": "https://place.map.kakao.com/1788969472"
          },
          {
            "name": "진성반점",
            "url": "https://place.map.kakao.com/11298176"
          }
        ]
      }
    ]
  },
  {
    "name": "아시안",
    "emoji": "🍜",
    "subCategories": [
      {
        "name": "동남아음식",
        "restaurants": [
          {
            "name": "미분당 전북대점",
            "url": "https://place.map.kakao.com/875340597"
          },
          {
            "name": "흐엉꾸에하롱베이퍼 전북대본점",
            "url": "https://place.map.kakao.com/444419576"
          },
          {
            "name": "사이공네가게1",
            "url": "https://place.map.kakao.com/1501416259"
          },
          {
            "name": "에머이 전북대점",
            "url": "https://place.map.kakao.com/1181278584"
          },
          {
            "name": "씬짜오",
            "url": "https://place.map.kakao.com/1915946887"
          }
        ]
      },
      {
        "name": "일반",
        "restaurants": [
          {
            "name": "프프프ver.2",
            "url": "https://place.map.kakao.com/1261337603"
          },
          {
            "name": "아라비아나",
            "url": "https://place.map.kakao.com/1778614415"
          },
          {
            "name": "바얀몽골",
            "url": "https://place.map.kakao.com/1123243819"
          },
          {
            "name": "카이사르 카이나르",
            "url": "https://place.map.kakao.com/1829736024"
          },
          {
            "name": "수마야레스토랑",
            "url": "https://place.map.kakao.com/144842351"
          },
          {
            "name": "소담식탁",
            "url": "https://place.map.kakao.com/676094383"
          }
        ]
      },
      {
        "name": "그 외",
        "restaurants": [
          {
            "name": "와우케밥치킨",
            "url": "https://place.map.kakao.com/649846985"
          },
          {
            "name": "레반트",
            "url": "https://place.map.kakao.com/708129703"
          },
          {
            "name": "라라인도네팔레스토랑 전주점",
            "url": "https://place.map.kakao.com/1511768492"
          }
        ]
      }
    ]
  },
  {
    "name": "패스트푸드",
    "emoji": "🍔",
    "subCategories": [
      {
        "name": "샌드위치",
        "restaurants": [
          {
            "name": "유스샌드위치 전주점",
            "url": "https://place.map.kakao.com/1054477438"
          },
          {
            "name": "쌈쌘 전북대본점",
            "url": "https://place.map.kakao.com/1828877835"
          },
          {
            "name": "써브웨이 전주전북대점",
            "url": "https://place.map.kakao.com/1827443017"
          },
          {
            "name": "어반핑거",
            "url": "https://place.map.kakao.com/1422650193"
          },
          {
            "name": "더블치즈",
            "url": "https://place.map.kakao.com/424583359"
          }
        ]
      },
      {
        "name": "그 외",
        "restaurants": [
          {
            "name": "맘스터치 전북대점",
            "url": "https://place.map.kakao.com/22707007"
          },
          {
            "name": "맥도날드 전주덕진DT점",
            "url": "https://place.map.kakao.com/22401534"
          },
          {
            "name": "롯데리아 전북대점",
            "url": "https://place.map.kakao.com/2131250554"
          },
          {
            "name": "버거킹 전북대점",
            "url": "https://place.map.kakao.com/446771385"
          }
        ]
      }
    ]
  },
  {
    "name": "기타",
    "emoji": "🍽️",
    "subCategories": [
      {
        "name": "퓨전요리",
        "restaurants": [
          {
            "name": "본죽&비빔밥cafe 전북대점",
            "url": "https://place.map.kakao.com/1410533829"
          },
          {
            "name": "바인쿡 전북대점",
            "url": "https://place.map.kakao.com/21059421"
          },
          {
            "name": "면면",
            "url": "https://place.map.kakao.com/962564226"
          },
          {
            "name": "밥은화 전북대점",
            "url": "https://place.map.kakao.com/1711078939"
          }
        ]
      },
      {
        "name": "도시락",
        "restaurants": [
          {
            "name": "한솥도시락 전북대정문점",
            "url": "https://place.map.kakao.com/18248997"
          },
          {
            "name": "지지고 전주전북대점",
            "url": "https://place.map.kakao.com/738043261"
          },
          {
            "name": "동백도시락 전북대점",
            "url": "https://place.map.kakao.com/174096443"
          },
          {
            "name": "한솥도시락 전북대후문앞점",
            "url": "https://place.map.kakao.com/11635329"
          },
          {
            "name": "하나로도시락전문점",
            "url": "https://place.map.kakao.com/1510162598"
          },
          {
            "name": "소망도시락",
            "url": "https://place.map.kakao.com/207530105"
          }
        ]
      },
      {
        "name": "샐러드",
        "restaurants": [
          {
            "name": "이너프샐러드",
            "url": "https://place.map.kakao.com/1990962840"
          },
          {
            "name": "해브어굿샐",
            "url": "https://place.map.kakao.com/1378749342"
          },
          {
            "name": "카페율민",
            "url": "https://place.map.kakao.com/1151136855"
          }
        ]
      }
    ]
  }
]

/** 모든 세부 카테고리 이름 목록 (릴 회전 연출용) */
export const allSubCategoryNames: string[] = foodCategories.flatMap((c) =>
  c.subCategories.map((s) => s.name),
)

/** 모든 식당 목록 (릴 회전 연출용) */
export const allRestaurants: Restaurant[] = foodCategories.flatMap((c) =>
  c.subCategories.flatMap((s) => s.restaurants),
)

/** 모든 식당 이름 목록 (릴 회전 연출용) */
export const allRestaurantNames: string[] = allRestaurants.map((r) => r.name)
