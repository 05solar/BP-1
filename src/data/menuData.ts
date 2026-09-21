/**
 * [데이터 파일] menuData.ts  ⚠️ 자동 생성 — 직접 수정하지 마세요
 * tools/fetchRestaurants.mjs가 카카오 로컬 API로 생성한 전북대학교 주변 실제 식당 데이터입니다.
 * (생성일: 2026-09-21, 캠퍼스 중심 반경 2km, 세부 카테고리당 가까운 순 최대 15곳)
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
            "name": "달코롬딱새우와연어장",
            "url": "https://place.map.kakao.com/1726747845"
          },
          {
            "name": "육회바른연어 전주전북대점",
            "url": "https://place.map.kakao.com/1830537123"
          },
          {
            "name": "광장수산",
            "url": "https://place.map.kakao.com/898953492"
          },
          {
            "name": "만선회센타",
            "url": "https://place.map.kakao.com/8960220"
          },
          {
            "name": "브라더아구찜 전북대점",
            "url": "https://place.map.kakao.com/2037369886"
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
            "name": "낙쭈족&한우곱창",
            "url": "https://place.map.kakao.com/1505645659"
          },
          {
            "name": "군산아구탕아구찜",
            "url": "https://place.map.kakao.com/16529831"
          },
          {
            "name": "낙지야낙지야고기사랑",
            "url": "https://place.map.kakao.com/1772523622"
          },
          {
            "name": "인생아구찜 송천금암점",
            "url": "https://place.map.kakao.com/704001838"
          },
          {
            "name": "어청도",
            "url": "https://place.map.kakao.com/10580037"
          },
          {
            "name": "덕호수산 2호점",
            "url": "https://place.map.kakao.com/889998757"
          },
          {
            "name": "남원동촌추어탕",
            "url": "https://place.map.kakao.com/14518796"
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
            "name": "가장맛있는족발 전북대점",
            "url": "https://place.map.kakao.com/1961129229"
          },
          {
            "name": "우정숯불닭발",
            "url": "https://place.map.kakao.com/284634279"
          },
          {
            "name": "순정닭발 전북대점",
            "url": "https://place.map.kakao.com/549325241"
          },
          {
            "name": "오양집 전북대점",
            "url": "https://place.map.kakao.com/1029012943"
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
            "name": "마포갈매기",
            "url": "https://place.map.kakao.com/1284885929"
          },
          {
            "name": "신마포갈매기 전북대점",
            "url": "https://place.map.kakao.com/14529888"
          },
          {
            "name": "청양농장",
            "url": "https://place.map.kakao.com/12352440"
          },
          {
            "name": "오일내 전북대점",
            "url": "https://place.map.kakao.com/1678583146"
          },
          {
            "name": "고수닭갈비 전북대점",
            "url": "https://place.map.kakao.com/9517318"
          },
          {
            "name": "서래갈매기 전북대점",
            "url": "https://place.map.kakao.com/18896527"
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
          },
          {
            "name": "태진순대국밥",
            "url": "https://place.map.kakao.com/1435918011"
          },
          {
            "name": "엄마손순대",
            "url": "https://place.map.kakao.com/1453970380"
          },
          {
            "name": "원평시골피순대 하가지구점",
            "url": "https://place.map.kakao.com/1887541840"
          },
          {
            "name": "하가사골피순대",
            "url": "https://place.map.kakao.com/429728872"
          },
          {
            "name": "강변순대",
            "url": "https://place.map.kakao.com/18576481"
          },
          {
            "name": "서호순대촌",
            "url": "https://place.map.kakao.com/1156477869"
          },
          {
            "name": "울어매순대나라",
            "url": "https://place.map.kakao.com/16921266"
          },
          {
            "name": "번암순대",
            "url": "https://place.map.kakao.com/1543050127"
          },
          {
            "name": "으뜸순대",
            "url": "https://place.map.kakao.com/20223909"
          },
          {
            "name": "원조맛고을순대",
            "url": "https://place.map.kakao.com/12400232"
          }
        ]
      },
      {
        "name": "국수",
        "restaurants": [
          {
            "name": "정성국수 전북대점",
            "url": "https://place.map.kakao.com/383332900"
          },
          {
            "name": "더도리칼국수",
            "url": "https://place.map.kakao.com/11096390"
          },
          {
            "name": "국술랭",
            "url": "https://place.map.kakao.com/2093640520"
          },
          {
            "name": "온동네협동조합",
            "url": "https://place.map.kakao.com/965536269"
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
            "name": "여만국수전문점",
            "url": "https://place.map.kakao.com/15795127"
          },
          {
            "name": "세기국수",
            "url": "https://place.map.kakao.com/557637053"
          },
          {
            "name": "금암면옥 본점",
            "url": "https://place.map.kakao.com/15331829"
          },
          {
            "name": "백운면",
            "url": "https://place.map.kakao.com/82782463"
          },
          {
            "name": "세엄마칼국수 금암점",
            "url": "https://place.map.kakao.com/217756304"
          },
          {
            "name": "국수명가",
            "url": "https://place.map.kakao.com/16892697"
          },
          {
            "name": "메르밀진미집 금암직영점",
            "url": "https://place.map.kakao.com/20809810"
          },
          {
            "name": "신일국수",
            "url": "https://place.map.kakao.com/1597882253"
          },
          {
            "name": "건지국수",
            "url": "https://place.map.kakao.com/481041033"
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
          },
          {
            "name": "진리국밥 덕진점",
            "url": "https://place.map.kakao.com/112850029"
          },
          {
            "name": "전주제일옥",
            "url": "https://place.map.kakao.com/14105608"
          },
          {
            "name": "홍익궁중전통육개장 서신점",
            "url": "https://place.map.kakao.com/1281265097"
          },
          {
            "name": "본가옥",
            "url": "https://place.map.kakao.com/1875531900"
          },
          {
            "name": "미남국밥 본점",
            "url": "https://place.map.kakao.com/467963509"
          },
          {
            "name": "콩나루콩나물국밥 송천점",
            "url": "https://place.map.kakao.com/27101213"
          },
          {
            "name": "콩각시굴신랑",
            "url": "https://place.map.kakao.com/8556912"
          }
        ]
      },
      {
        "name": "일반",
        "restaurants": [
          {
            "name": "주인테이블 전북대본점",
            "url": "https://place.map.kakao.com/1794168624"
          },
          {
            "name": "왕건카레 전북대점",
            "url": "https://place.map.kakao.com/52549327"
          },
          {
            "name": "주저리",
            "url": "https://place.map.kakao.com/789465796"
          },
          {
            "name": "찐막",
            "url": "https://place.map.kakao.com/1882717682"
          },
          {
            "name": "먹새통 전북대점",
            "url": "https://place.map.kakao.com/1328964747"
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
            "name": "밥물관 전북대점",
            "url": "https://place.map.kakao.com/1535958015"
          },
          {
            "name": "세모식당",
            "url": "https://place.map.kakao.com/8379298"
          },
          {
            "name": "옛날옴팡집",
            "url": "https://place.map.kakao.com/17427818"
          }
        ]
      },
      {
        "name": "찌개·전골",
        "restaurants": [
          {
            "name": "엄마손김치찌개",
            "url": "https://place.map.kakao.com/16428101"
          },
          {
            "name": "김치찌개잘하는집",
            "url": "https://place.map.kakao.com/525505620"
          },
          {
            "name": "청년식탁사잇길",
            "url": "https://place.map.kakao.com/2106945607"
          },
          {
            "name": "금암동부대찌개 본점",
            "url": "https://place.map.kakao.com/8799057"
          },
          {
            "name": "일등병부대찌개 전주점",
            "url": "https://place.map.kakao.com/11288782"
          },
          {
            "name": "놀부부대찌개 전주고속터미널점",
            "url": "https://place.map.kakao.com/1159143099"
          },
          {
            "name": "미소네김치찌개",
            "url": "https://place.map.kakao.com/1627914752"
          },
          {
            "name": "다미",
            "url": "https://place.map.kakao.com/11912646"
          },
          {
            "name": "땅스부대찌개 전주송천점",
            "url": "https://place.map.kakao.com/1425868517"
          },
          {
            "name": "오늘도김치찜김치찌개",
            "url": "https://place.map.kakao.com/1357776489"
          },
          {
            "name": "놀부부대찌개 전주덕진점",
            "url": "https://place.map.kakao.com/203470160"
          },
          {
            "name": "찌개주막",
            "url": "https://place.map.kakao.com/1672823839"
          },
          {
            "name": "신대화",
            "url": "https://place.map.kakao.com/16346320"
          }
        ]
      },
      {
        "name": "두부전문점",
        "restaurants": [
          {
            "name": "원조1958생두부",
            "url": "https://place.map.kakao.com/9921205"
          },
          {
            "name": "북창동순두부 전주서신점",
            "url": "https://place.map.kakao.com/11782283"
          },
          {
            "name": "맷돌순두부",
            "url": "https://place.map.kakao.com/1842384517"
          },
          {
            "name": "멧돌순두부식당",
            "url": "https://place.map.kakao.com/11257672"
          }
        ]
      },
      {
        "name": "곰탕",
        "restaurants": [
          {
            "name": "바우네나주곰탕 전주본점",
            "url": "https://place.map.kakao.com/44424601"
          },
          {
            "name": "다하누곰탕",
            "url": "https://place.map.kakao.com/1557779279"
          },
          {
            "name": "금암우족탕",
            "url": "https://place.map.kakao.com/16780482"
          },
          {
            "name": "옥수회관",
            "url": "https://place.map.kakao.com/16808668"
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
          },
          {
            "name": "울엄마시래기해장국",
            "url": "https://place.map.kakao.com/1241334279"
          },
          {
            "name": "자연정가 양평해장국 대학병원점",
            "url": "https://place.map.kakao.com/26355980"
          },
          {
            "name": "자연정가 양평해장국 서호점",
            "url": "https://place.map.kakao.com/2076030992"
          }
        ]
      },
      {
        "name": "냉면",
        "restaurants": [
          {
            "name": "육쌈냉면 전북대점",
            "url": "https://place.map.kakao.com/19978054"
          },
          {
            "name": "줄벼락",
            "url": "https://place.map.kakao.com/1266590183"
          },
          {
            "name": "정가네냉면",
            "url": "https://place.map.kakao.com/664238048"
          },
          {
            "name": "미르밀옥류관 인후점",
            "url": "https://place.map.kakao.com/25705224"
          },
          {
            "name": "냉면쟁이고기꾼 송천점",
            "url": "https://place.map.kakao.com/2039917209"
          },
          {
            "name": "평양면옥",
            "url": "https://place.map.kakao.com/9505038"
          },
          {
            "name": "금성칡냉면",
            "url": "https://place.map.kakao.com/1491386352"
          },
          {
            "name": "오장면옥숯불갈비",
            "url": "https://place.map.kakao.com/842530618"
          },
          {
            "name": "솔내냉면황태찜",
            "url": "https://place.map.kakao.com/1303353652"
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
            "name": "족보설렁탕",
            "url": "https://place.map.kakao.com/10789588"
          },
          {
            "name": "전주깍두기 본점",
            "url": "https://place.map.kakao.com/1387347730"
          },
          {
            "name": "본설렁탕 전주금암점",
            "url": "https://place.map.kakao.com/484083322"
          },
          {
            "name": "내고향전통설렁탕",
            "url": "https://place.map.kakao.com/24694113"
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
          },
          {
            "name": "향감자탕",
            "url": "https://place.map.kakao.com/1888230525"
          },
          {
            "name": "하가감자탕",
            "url": "https://place.map.kakao.com/19401998"
          },
          {
            "name": "본한방감자탕",
            "url": "https://place.map.kakao.com/15662441"
          },
          {
            "name": "노을감자탕",
            "url": "https://place.map.kakao.com/15096365"
          }
        ]
      },
      {
        "name": "주먹밥",
        "restaurants": [
          {
            "name": "봉구스밥버거 전북대점",
            "url": "https://place.map.kakao.com/19532688"
          },
          {
            "name": "봉구스밥버거 전북대덕진점",
            "url": "https://place.map.kakao.com/831903211"
          },
          {
            "name": "봉구스밥버거 진북인후점",
            "url": "https://place.map.kakao.com/1710648814"
          }
        ]
      },
      {
        "name": "그 외",
        "restaurants": [
          {
            "name": "전통웰빙팥죽",
            "url": "https://place.map.kakao.com/19644583"
          },
          {
            "name": "모래내팥죽집",
            "url": "https://place.map.kakao.com/26069758"
          },
          {
            "name": "전주정든쌈밥",
            "url": "https://place.map.kakao.com/1760828599"
          },
          {
            "name": "러빙헛 서신점",
            "url": "https://place.map.kakao.com/424564744"
          },
          {
            "name": "신밥도둑 덕진점",
            "url": "https://place.map.kakao.com/2131357918"
          },
          {
            "name": "밥풀릭스 전북대점",
            "url": "https://place.map.kakao.com/462659121"
          },
          {
            "name": "밥풀릭스 모래내점",
            "url": "https://place.map.kakao.com/736958551"
          },
          {
            "name": "뜰안에밥상",
            "url": "https://place.map.kakao.com/1976845425"
          },
          {
            "name": "무궁화한정식",
            "url": "https://place.map.kakao.com/8978777"
          },
          {
            "name": "문가네분식",
            "url": "https://place.map.kakao.com/25960437"
          },
          {
            "name": "뜸들이다 전북대점",
            "url": "https://place.map.kakao.com/56185147"
          },
          {
            "name": "마고가든",
            "url": "https://place.map.kakao.com/10354681"
          },
          {
            "name": "가마골흑염소전문점",
            "url": "https://place.map.kakao.com/16465631"
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
        "name": "BHC치킨",
        "restaurants": [
          {
            "name": "BHC치킨 전북대점",
            "url": "https://place.map.kakao.com/1359191806"
          },
          {
            "name": "BHC치킨 전주금암진북점",
            "url": "https://place.map.kakao.com/26909655"
          },
          {
            "name": "BHC치킨 덕진하가점",
            "url": "https://place.map.kakao.com/1259855576"
          },
          {
            "name": "BHC치킨 전주송천2호점",
            "url": "https://place.map.kakao.com/27515484"
          },
          {
            "name": "BHC치킨 전주서신점",
            "url": "https://place.map.kakao.com/92050670"
          }
        ]
      },
      {
        "name": "푸라닭치킨",
        "restaurants": [
          {
            "name": "푸라닭치킨 전주전북대점",
            "url": "https://place.map.kakao.com/151356817"
          },
          {
            "name": "푸라닭치킨 전주송천점",
            "url": "https://place.map.kakao.com/537211721"
          },
          {
            "name": "푸라닭치킨 전주서곡하가점",
            "url": "https://place.map.kakao.com/181167671"
          }
        ]
      },
      {
        "name": "일반",
        "restaurants": [
          {
            "name": "솜리치킨 전북대점",
            "url": "https://place.map.kakao.com/936164594"
          },
          {
            "name": "순정이네찹쌀전기구이통닭 전북대점",
            "url": "https://place.map.kakao.com/565612486"
          },
          {
            "name": "모쿠모쿠 전북대점",
            "url": "https://place.map.kakao.com/380003507"
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
            "name": "노상치킨 전북대점",
            "url": "https://place.map.kakao.com/323399484"
          },
          {
            "name": "왕초바베큐 전북대점",
            "url": "https://place.map.kakao.com/904151710"
          },
          {
            "name": "가장맛있는치킨 전북대점",
            "url": "https://place.map.kakao.com/1869995141"
          },
          {
            "name": "뉴맥스치킨 체인본점",
            "url": "https://place.map.kakao.com/8851628"
          },
          {
            "name": "시골양념통닭",
            "url": "https://place.map.kakao.com/9219910"
          },
          {
            "name": "OTA 옛날통닭",
            "url": "https://place.map.kakao.com/304634400"
          },
          {
            "name": "황금정원",
            "url": "https://place.map.kakao.com/177639938"
          },
          {
            "name": "김종구식맛치킨 송천센트럴점",
            "url": "https://place.map.kakao.com/624849544"
          },
          {
            "name": "뉴맥스양념통닭",
            "url": "https://place.map.kakao.com/8215147"
          }
        ]
      },
      {
        "name": "BBQ",
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
            "name": "BBQ 전주하가지구점",
            "url": "https://place.map.kakao.com/240452907"
          },
          {
            "name": "BBQ 전주송천솔내점",
            "url": "https://place.map.kakao.com/1802457368"
          },
          {
            "name": "BBQ 전주백제대로점",
            "url": "https://place.map.kakao.com/744095295"
          }
        ]
      },
      {
        "name": "멕시카나치킨",
        "restaurants": [
          {
            "name": "멕시카나치킨 전북대점",
            "url": "https://place.map.kakao.com/1778641320"
          },
          {
            "name": "멕시카나치킨 금암점",
            "url": "https://place.map.kakao.com/7871934"
          },
          {
            "name": "멕시카나치킨 송천에코점",
            "url": "https://place.map.kakao.com/382476189"
          },
          {
            "name": "멕시카나치킨 덕진하가점",
            "url": "https://place.map.kakao.com/1856035228"
          }
        ]
      },
      {
        "name": "충만치킨",
        "restaurants": [
          {
            "name": "충만치킨 전주전북대점",
            "url": "https://place.map.kakao.com/24904078"
          },
          {
            "name": "충만치킨 진북점",
            "url": "https://place.map.kakao.com/1340805240"
          },
          {
            "name": "충만치킨 전주하가점",
            "url": "https://place.map.kakao.com/26313051"
          }
        ]
      },
      {
        "name": "교촌치킨",
        "restaurants": [
          {
            "name": "교촌치킨 전북대점",
            "url": "https://place.map.kakao.com/385055859"
          },
          {
            "name": "교촌치킨 솔내점",
            "url": "https://place.map.kakao.com/479574813"
          },
          {
            "name": "교촌치킨 하가덕진점",
            "url": "https://place.map.kakao.com/22965432"
          }
        ]
      },
      {
        "name": "굽네치킨",
        "restaurants": [
          {
            "name": "굽네치킨 전주덕진점",
            "url": "https://place.map.kakao.com/415957572"
          },
          {
            "name": "굽네치킨 덕진금암점",
            "url": "https://place.map.kakao.com/8213547"
          },
          {
            "name": "굽네치킨 전주진북점",
            "url": "https://place.map.kakao.com/12578842"
          }
        ]
      },
      {
        "name": "그 외",
        "restaurants": [
          {
            "name": "다사랑치킨피자 전북대점",
            "url": "https://place.map.kakao.com/26641149"
          },
          {
            "name": "다사랑치킨피자 서신점",
            "url": "https://place.map.kakao.com/26083274"
          },
          {
            "name": "불로만치킨바베큐 서신점",
            "url": "https://place.map.kakao.com/7903721"
          },
          {
            "name": "누구나홀딱반한닭 전주서신점",
            "url": "https://place.map.kakao.com/72055449"
          },
          {
            "name": "보드람치킨 전주서신점",
            "url": "https://place.map.kakao.com/1659336688"
          },
          {
            "name": "가마치통닭 송천1호점",
            "url": "https://place.map.kakao.com/450052261"
          },
          {
            "name": "가마치통닭 전주하가점",
            "url": "https://place.map.kakao.com/209221237"
          },
          {
            "name": "기영이숯불두마리치킨 전북대점",
            "url": "https://place.map.kakao.com/642443350"
          },
          {
            "name": "치킨마루 전북대점",
            "url": "https://place.map.kakao.com/2052277079"
          },
          {
            "name": "지코바 덕진1호점",
            "url": "https://place.map.kakao.com/118870630"
          },
          {
            "name": "맥시칸치킨 금암점",
            "url": "https://place.map.kakao.com/21347216"
          },
          {
            "name": "맥시칸치킨 진북점",
            "url": "https://place.map.kakao.com/17693444"
          },
          {
            "name": "호식이두마리치킨 전북대점",
            "url": "https://place.map.kakao.com/11664024"
          },
          {
            "name": "호식이두마리치킨 전주진북점",
            "url": "https://place.map.kakao.com/13640953"
          },
          {
            "name": "또봉이통닭 전북전주진북점",
            "url": "https://place.map.kakao.com/26396159"
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
        "name": "참치회",
        "restaurants": [
          {
            "name": "참치일번가 본점",
            "url": "https://place.map.kakao.com/16546389"
          },
          {
            "name": "붉은참치",
            "url": "https://place.map.kakao.com/1656348862"
          },
          {
            "name": "본참치 송천에코점",
            "url": "https://place.map.kakao.com/1139459900"
          },
          {
            "name": "달빛참치 본점",
            "url": "https://place.map.kakao.com/1267477350"
          },
          {
            "name": "하가본참치",
            "url": "https://place.map.kakao.com/2106518929"
          },
          {
            "name": "본참치",
            "url": "https://place.map.kakao.com/911266217"
          }
        ]
      },
      {
        "name": "초밥·롤",
        "restaurants": [
          {
            "name": "도꾸이",
            "url": "https://place.map.kakao.com/579026978"
          },
          {
            "name": "무모한초밥 금암전북대점",
            "url": "https://place.map.kakao.com/655645450"
          },
          {
            "name": "롤리볼리 롯데백화점전주점",
            "url": "https://place.map.kakao.com/1282389722"
          },
          {
            "name": "준스시",
            "url": "https://place.map.kakao.com/1619535271"
          },
          {
            "name": "본스시",
            "url": "https://place.map.kakao.com/813544876"
          },
          {
            "name": "정직유부 전주송천점",
            "url": "https://place.map.kakao.com/1809066112"
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
            "name": "하나요리당고",
            "url": "https://place.map.kakao.com/79828425"
          },
          {
            "name": "만배식탁 전북대점",
            "url": "https://place.map.kakao.com/30328574"
          },
          {
            "name": "카츠호",
            "url": "https://place.map.kakao.com/1730055000"
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
            "name": "코요",
            "url": "https://place.map.kakao.com/196446335"
          },
          {
            "name": "코이누",
            "url": "https://place.map.kakao.com/1374472667"
          },
          {
            "name": "모퉁이 전북대점",
            "url": "https://place.map.kakao.com/670538618"
          },
          {
            "name": "금암소바",
            "url": "https://place.map.kakao.com/16779100"
          },
          {
            "name": "오늘도사시미 송천점",
            "url": "https://place.map.kakao.com/1594764767"
          },
          {
            "name": "더봉반 롯데백화점 전주점",
            "url": "https://place.map.kakao.com/1478262628"
          },
          {
            "name": "마시루",
            "url": "https://place.map.kakao.com/1927935160"
          }
        ]
      },
      {
        "name": "돈까스·우동",
        "restaurants": [
          {
            "name": "더담다 전북대본점",
            "url": "https://place.map.kakao.com/196006365"
          },
          {
            "name": "미소야 전북대점",
            "url": "https://place.map.kakao.com/813281204"
          },
          {
            "name": "역전우동0410 전북대점",
            "url": "https://place.map.kakao.com/340277878"
          },
          {
            "name": "먹짜 전북대본점",
            "url": "https://place.map.kakao.com/24710017"
          },
          {
            "name": "완산동까스",
            "url": "https://place.map.kakao.com/1856066390"
          },
          {
            "name": "료카츠",
            "url": "https://place.map.kakao.com/1055494117"
          },
          {
            "name": "요요키라멘",
            "url": "https://place.map.kakao.com/1351133602"
          },
          {
            "name": "제주쾅쾅돈가스 전주송천점",
            "url": "https://place.map.kakao.com/1800725728"
          },
          {
            "name": "미스카츠 롯데백화점전주점",
            "url": "https://place.map.kakao.com/166206953"
          },
          {
            "name": "돈까스짱 송천점",
            "url": "https://place.map.kakao.com/615592562"
          },
          {
            "name": "정성카츠 전주덕진점",
            "url": "https://place.map.kakao.com/1217433810"
          },
          {
            "name": "홍대돈까스",
            "url": "https://place.map.kakao.com/26322749"
          },
          {
            "name": "하루하루",
            "url": "https://place.map.kakao.com/1587857119"
          },
          {
            "name": "바삭한식탁",
            "url": "https://place.map.kakao.com/836407824"
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
          },
          {
            "name": "히노아지 전주하가점",
            "url": "https://place.map.kakao.com/1500650027"
          }
        ]
      },
      {
        "name": "일식집",
        "restaurants": [
          {
            "name": "치히로 전북대점",
            "url": "https://place.map.kakao.com/2114589876"
          },
          {
            "name": "강담",
            "url": "https://place.map.kakao.com/21064820"
          },
          {
            "name": "옥천일식",
            "url": "https://place.map.kakao.com/16665396"
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
        "name": "일반",
        "restaurants": [
          {
            "name": "뉴뉴키친",
            "url": "https://place.map.kakao.com/1170089333"
          },
          {
            "name": "팀 전북대점",
            "url": "https://place.map.kakao.com/21288347"
          },
          {
            "name": "팀레스토랑",
            "url": "https://place.map.kakao.com/1591822112"
          },
          {
            "name": "브디런",
            "url": "https://place.map.kakao.com/1566668191"
          },
          {
            "name": "언더그라운드",
            "url": "https://place.map.kakao.com/1067202097"
          },
          {
            "name": "카페트럼펫",
            "url": "https://place.map.kakao.com/21222123"
          },
          {
            "name": "치팅데이 전북대점",
            "url": "https://place.map.kakao.com/452542069"
          },
          {
            "name": "피르다브스",
            "url": "https://place.map.kakao.com/1474178222"
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
            "name": "한끼 1인피자",
            "url": "https://place.map.kakao.com/1389685050"
          },
          {
            "name": "만강식당",
            "url": "https://place.map.kakao.com/21502545"
          },
          {
            "name": "맛있는음식",
            "url": "https://place.map.kakao.com/35040157"
          },
          {
            "name": "블랙팬다이너",
            "url": "https://place.map.kakao.com/1789591805"
          },
          {
            "name": "부부파스타",
            "url": "https://place.map.kakao.com/27403406"
          }
        ]
      },
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
          },
          {
            "name": "청춘파스타",
            "url": "https://place.map.kakao.com/1815138855"
          }
        ]
      },
      {
        "name": "피자",
        "restaurants": [
          {
            "name": "고피자 전북대점",
            "url": "https://place.map.kakao.com/1775539719"
          },
          {
            "name": "파파존스 전주점",
            "url": "https://place.map.kakao.com/12118513"
          },
          {
            "name": "지정환피자 전북대점",
            "url": "https://place.map.kakao.com/8597674"
          },
          {
            "name": "피자마루 전주전북대점",
            "url": "https://place.map.kakao.com/1249373277"
          },
          {
            "name": "피자닭터 전주2호점",
            "url": "https://place.map.kakao.com/1674664701"
          },
          {
            "name": "50엔드피자",
            "url": "https://place.map.kakao.com/597856560"
          },
          {
            "name": "피자의생명은치즈다 임연수점",
            "url": "https://place.map.kakao.com/1664989065"
          },
          {
            "name": "피자스쿨 전북대점",
            "url": "https://place.map.kakao.com/17371971"
          },
          {
            "name": "피자알볼로 전북대점",
            "url": "https://place.map.kakao.com/18121252"
          },
          {
            "name": "피나치공 전주금암점",
            "url": "https://place.map.kakao.com/1053477916"
          },
          {
            "name": "토핑몬스터피자 덕진점",
            "url": "https://place.map.kakao.com/284517227"
          },
          {
            "name": "투떠블피자 덕진금암점",
            "url": "https://place.map.kakao.com/330867703"
          },
          {
            "name": "도미노피자 전주금암점",
            "url": "https://place.map.kakao.com/7832578"
          },
          {
            "name": "맘스피자 전주시외버스터미널점",
            "url": "https://place.map.kakao.com/1053888286"
          },
          {
            "name": "피자먹다 덕진점",
            "url": "https://place.map.kakao.com/579040232"
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
          },
          {
            "name": "프랭크버거 송천점",
            "url": "https://place.map.kakao.com/682752089"
          },
          {
            "name": "BT버거앤타코 전주송천점",
            "url": "https://place.map.kakao.com/565681282"
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
            "name": "정자네손만두",
            "url": "https://place.map.kakao.com/25118627"
          },
          {
            "name": "또또분식",
            "url": "https://place.map.kakao.com/836163747"
          },
          {
            "name": "경기장맛나튀김",
            "url": "https://place.map.kakao.com/21349567"
          },
          {
            "name": "신김밥천국",
            "url": "https://place.map.kakao.com/16892634"
          },
          {
            "name": "원호네상추튀김",
            "url": "https://place.map.kakao.com/10688849"
          },
          {
            "name": "김밥세상",
            "url": "https://place.map.kakao.com/21499142"
          },
          {
            "name": "강경원 달인만두가 금암본점",
            "url": "https://place.map.kakao.com/1551364560"
          },
          {
            "name": "얌스 금암점",
            "url": "https://place.map.kakao.com/456264514"
          },
          {
            "name": "미스터호떡&떡볶이",
            "url": "https://place.map.kakao.com/470529058"
          },
          {
            "name": "곰곰김밥",
            "url": "https://place.map.kakao.com/63541830"
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
          },
          {
            "name": "비비떡볶이 금암HQ",
            "url": "https://place.map.kakao.com/2088335059"
          },
          {
            "name": "감탄떡볶이 송천3호점",
            "url": "https://place.map.kakao.com/355333363"
          },
          {
            "name": "배떡 송천점",
            "url": "https://place.map.kakao.com/297877699"
          },
          {
            "name": "33떡볶이 전주하가점",
            "url": "https://place.map.kakao.com/571478888"
          },
          {
            "name": "곱떡치떡 전주서신점",
            "url": "https://place.map.kakao.com/153313884"
          },
          {
            "name": "우리할매떡볶이 전주송천점",
            "url": "https://place.map.kakao.com/1855722960"
          }
        ]
      },
      {
        "name": "그 외",
        "restaurants": [
          {
            "name": "신포우리만두 전주터미널점",
            "url": "https://place.map.kakao.com/26833354"
          },
          {
            "name": "신포우리만두 더즌점",
            "url": "https://place.map.kakao.com/11961874"
          },
          {
            "name": "얌샘김밥 전북대점",
            "url": "https://place.map.kakao.com/1725324046"
          },
          {
            "name": "북촌손만두 전주터미널점",
            "url": "https://place.map.kakao.com/983242639"
          },
          {
            "name": "배터지는생동까스 송천점",
            "url": "https://place.map.kakao.com/776325372"
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
          },
          {
            "name": "황소반점 하가점",
            "url": "https://place.map.kakao.com/1093448808"
          },
          {
            "name": "달밤중화포차",
            "url": "https://place.map.kakao.com/1176483290"
          }
        ]
      },
      {
        "name": "중국요리",
        "restaurants": [
          {
            "name": "신덕일관",
            "url": "https://place.map.kakao.com/8890282"
          },
          {
            "name": "중경식객훠궈라화쿵푸 전북대점",
            "url": "https://place.map.kakao.com/976218379"
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
            "name": "춘리마라탕",
            "url": "https://place.map.kakao.com/622634433"
          },
          {
            "name": "이런이궈마라탕 전북대점",
            "url": "https://place.map.kakao.com/1183059157"
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
            "name": "굿모닝",
            "url": "https://place.map.kakao.com/1788969472"
          },
          {
            "name": "짬뽕명가",
            "url": "https://place.map.kakao.com/9218386"
          },
          {
            "name": "W마라시대 전북대점",
            "url": "https://place.map.kakao.com/68686347"
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
        "name": "롯데리아",
        "restaurants": [
          {
            "name": "롯데리아 전북대점",
            "url": "https://place.map.kakao.com/2131250554"
          },
          {
            "name": "롯데리아 전주하가D/I점",
            "url": "https://place.map.kakao.com/164443395"
          },
          {
            "name": "롯데리아 전주서신점",
            "url": "https://place.map.kakao.com/8359104"
          }
        ]
      },
      {
        "name": "샌드위치",
        "restaurants": [
          {
            "name": "유스샌드위치 전주점",
            "url": "https://place.map.kakao.com/1054477438"
          },
          {
            "name": "어반핑거",
            "url": "https://place.map.kakao.com/1422650193"
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
            "name": "더블치즈",
            "url": "https://place.map.kakao.com/424583359"
          },
          {
            "name": "뚱땡이 샌드위치",
            "url": "https://place.map.kakao.com/1504071465"
          },
          {
            "name": "오샌드",
            "url": "https://place.map.kakao.com/212255791"
          },
          {
            "name": "에그2000 전주송천점",
            "url": "https://place.map.kakao.com/1051118070"
          }
        ]
      },
      {
        "name": "맘스터치",
        "restaurants": [
          {
            "name": "맘스터치 전북대점",
            "url": "https://place.map.kakao.com/22707007"
          },
          {
            "name": "맘스터치 전주금암점",
            "url": "https://place.map.kakao.com/13312355"
          },
          {
            "name": "맘스터치 전주시외버스터미널점",
            "url": "https://place.map.kakao.com/1285058025"
          }
        ]
      },
      {
        "name": "그 외",
        "restaurants": [
          {
            "name": "명랑핫도그 전주송천점",
            "url": "https://place.map.kakao.com/2051392258"
          },
          {
            "name": "명랑핫도그 전주하가점",
            "url": "https://place.map.kakao.com/865909079"
          },
          {
            "name": "맥도날드 전주덕진DT점",
            "url": "https://place.map.kakao.com/22401534"
          },
          {
            "name": "맥도날드 전주인후DT점",
            "url": "https://place.map.kakao.com/22272689"
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
          },
          {
            "name": "999타이",
            "url": "https://place.map.kakao.com/64075052"
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
            "name": "카이사르 카이나르",
            "url": "https://place.map.kakao.com/1829736024"
          },
          {
            "name": "바얀몽골",
            "url": "https://place.map.kakao.com/1123243819"
          },
          {
            "name": "아라비아나",
            "url": "https://place.map.kakao.com/1778614415"
          },
          {
            "name": "수마야레스토랑",
            "url": "https://place.map.kakao.com/144842351"
          },
          {
            "name": "소담식탁",
            "url": "https://place.map.kakao.com/676094383"
          },
          {
            "name": "소담137 송천점",
            "url": "https://place.map.kakao.com/1241441556"
          },
          {
            "name": "월남쌈이맛있는아라쌈 송천에코점",
            "url": "https://place.map.kakao.com/1247612408"
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
          },
          {
            "name": "칸첸중가",
            "url": "https://place.map.kakao.com/1422255618"
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
        "name": "샤브샤브",
        "restaurants": [
          {
            "name": "샤브온당 전북대점",
            "url": "https://place.map.kakao.com/1211247686"
          },
          {
            "name": "하루샤브",
            "url": "https://place.map.kakao.com/1827252627"
          },
          {
            "name": "일공공샤브&편백찜 전주송천점",
            "url": "https://place.map.kakao.com/2072555611"
          },
          {
            "name": "채선당PLUS 전주서신점",
            "url": "https://place.map.kakao.com/25813616"
          }
        ]
      },
      {
        "name": "구내식당",
        "restaurants": [
          {
            "name": "전북대학교 진수원식당",
            "url": "https://place.map.kakao.com/18647920"
          },
          {
            "name": "전북대학교 의과대학 학생식당",
            "url": "https://place.map.kakao.com/1377388589"
          },
          {
            "name": "본우리집밥 이마트전주점",
            "url": "https://place.map.kakao.com/1757115363"
          },
          {
            "name": "전주고용복지플러스센터 구내식당",
            "url": "https://place.map.kakao.com/1852662676"
          }
        ]
      },
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
          },
          {
            "name": "본죽&비빔밥cafe 전주금암점",
            "url": "https://place.map.kakao.com/1399473014"
          },
          {
            "name": "하루 본점",
            "url": "https://place.map.kakao.com/746397015"
          },
          {
            "name": "돼지게티 전주송천에코점",
            "url": "https://place.map.kakao.com/1156899190"
          },
          {
            "name": "돼지게티 송천에코점",
            "url": "https://place.map.kakao.com/1221858171"
          },
          {
            "name": "본죽&비빔밥cafe 전주롯데점",
            "url": "https://place.map.kakao.com/22299243"
          },
          {
            "name": "본죽&비빔밥cafe 전주송천점",
            "url": "https://place.map.kakao.com/22733780"
          },
          {
            "name": "본죽&비빔밥cafe 전주하가점",
            "url": "https://place.map.kakao.com/18622170"
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
            "name": "동백도시락 전북대점",
            "url": "https://place.map.kakao.com/174096443"
          },
          {
            "name": "지지고 전주전북대점",
            "url": "https://place.map.kakao.com/738043261"
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
            "name": "본도시락 전북대점",
            "url": "https://place.map.kakao.com/295307301"
          },
          {
            "name": "상군집 덕진점",
            "url": "https://place.map.kakao.com/1760732393"
          },
          {
            "name": "그녀의도시락",
            "url": "https://place.map.kakao.com/809865429"
          },
          {
            "name": "소망도시락",
            "url": "https://place.map.kakao.com/207530105"
          },
          {
            "name": "담은한끼",
            "url": "https://place.map.kakao.com/755910826"
          },
          {
            "name": "주디키친",
            "url": "https://place.map.kakao.com/1937524626"
          },
          {
            "name": "푸드박스 전주점",
            "url": "https://place.map.kakao.com/105114757"
          },
          {
            "name": "오우리",
            "url": "https://place.map.kakao.com/468886487"
          },
          {
            "name": "온밥 전주점",
            "url": "https://place.map.kakao.com/257068532"
          },
          {
            "name": "한솥도시락 전주송천점",
            "url": "https://place.map.kakao.com/27207937"
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
          },
          {
            "name": "샐럽스프 전북대학교병원점",
            "url": "https://place.map.kakao.com/2134732846"
          },
          {
            "name": "그린데이샐러드",
            "url": "https://place.map.kakao.com/1207755905"
          },
          {
            "name": "잇모닝",
            "url": "https://place.map.kakao.com/611722469"
          }
        ]
      },
      {
        "name": "뷔페",
        "restaurants": [
          {
            "name": "에비뉴한식뷔페",
            "url": "https://place.map.kakao.com/429071622"
          },
          {
            "name": "솔솔회관",
            "url": "https://place.map.kakao.com/1864216553"
          },
          {
            "name": "하가뷔페",
            "url": "https://place.map.kakao.com/27400717"
          },
          {
            "name": "성락한식뷔페",
            "url": "https://place.map.kakao.com/115433679"
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
