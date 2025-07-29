/*
  [최종 수정] '모니터링' 항목의 색상을 눈에 띄는 색으로 변경했습니다.
  이 파일의 모든 내용을 기존 script.js 파일에 덮어쓰기 하세요.
*/
document.addEventListener('DOMContentLoaded', () => {
    const hospitalData = {
      "main": {
        "headerTitle": "💖 치과 특화 금호동물병원 💖",
        "headerSubtitle": "🦷 우리 아이들의 건강한 미소를 지켜주는 곳 🦷",
        "contact": {
          "address": "광주광역시 서구 금호동<br>금화로54 거북빌딩 1층 110호",
          "phone": "062-383-7572"
        },
        "hours": [
          { "day": "평일", "time": "오전 9:30 ~ 오후 6:00" },
          { "day": "토요일", "time": "오전 9:30 ~ 오후 3:00" },
          { "day": "점심시간", "time": "오후 12:30 ~ 2:00 (평일, 토요일 동일)", "highlight": true },
          { "day": "휴무", "time": "빨간날은 쉬어요! (공휴일 휴무)", "isHoliday": true }
        ],
        "parking": {
          "morning": "널널해요! 😊",
          "afternoon": "자리가 없을 수도 있어요 😥",
          "tip": "주차타워는 거의 항상 비어있어요! (다들 귀찮아서 주차를 안해요... 속닥속닥)"
        },
        "pride": {
          "title": "✨ 고양이 치과, 왜 금호동물병원일까요? 🐈‍⬛",
          "points": [
            {
              "title": "최신 전문 장비 완비! 빵빵해요! 🚀",
              "items": [
                "📸 치아 전용 X-ray (최신 덴츠플라이 센서)",
                "💎 브러쉬리스 모터 덴탈 유닛 (정교한 치료!)",
                "💧 피에조톰 수술기 (뼈 손상 최소화!)",
                "🌬️ 최신 호흡마취기 (안전한 장시간 마취 OK!)",
                "🔥 수의용 베어허거 (마취 중 체온 유지!)"
              ]
            },
            {
              "title": "고양이 치과 진료, 경험치 MAX! 💪",
              "items": [
                "❤️‍🩹 고양이 전발치 & 만성 구내염 치료",
                "💔 고양이 치아흡수 병변(FORL) 치료",
                "🦷 신경치료 & 치주치료 & VPT(신경보존)"
              ]
            }
          ]
        },
        "notice": {
          "title": "🦷 꼭 읽어주세요! 안전한 치과 수술을 위한 안내 🦷",
          "items": [
            "<strong>비용 변동 가능성에 대해 미리 알려드려요.</strong><br>치과 치료는 겉으로 보는 것만으로는 정확한 진단이 어려워요. <strong>마취 후 진행되는 치과 엑스레이 및 정밀 탐침 검사, 스케일링이 모두 끝나야</strong> 아이의 정확한 상태를 알 수 있습니다. 따라서 상담 시 안내드린 예상 비용과 실제 치료 후 청구되는 비용에 차이가 발생할 수 있는 점, 너그러이 양해 부탁드립니다.",
            "<strong>보호자님의 치료 의사를 미리 알려주세요.</strong><br>겉으로는 멀쩡해 보여도 검사 후에 치료가 필요한 치아가 발견될 수 있습니다. 만약 이런 치아가 발견되었을 때, <strong>보호자님께 연락하여 동의를 구한 후 치료를 할지, 혹은 즉시 필요한 치료를 진행할지</strong>를 마취 전에 꼭 저희에게 알려주셔야 합니다. 아이를 위한 최선의 결정을 함께 할 수 있도록 미리 소통해주세요!",
            "<strong>장시간 마취의 위험성을 이해해주세요.</strong><br>치과 치료는 정교함을 요하는 작업이라 생각보다 시간이 오래 걸립니다. 기본적인 엑스레이 검사와 스케일링만으로도 중성화 수술과 비슷한 시간이 소요되며, 발치나 신경치료 등 추가 시술이 들어가면 마취 시간은 더 길어질 수밖에 없습니다. 치과 시술 자체는 위험성이 낮지만, <strong>마취 시간이 길어지는 만큼 일반 수술보다 마취의 부담이나 위험은 더 높을 수 있습니다.</strong>",
            "<strong>안전을 위해, 수술 전 병원 방문은 필수예요.</strong><br>위와 같은 이유로, 아이의 안전을 위해 <strong>마취 전 검사는 선택이 아닌 필수</strong>입니다. 전화상으로 바로 수술 예약을 잡을 수는 없으며, 반드시 병원에 먼저 내원하시어 구강 상태 평가 및 건강검진(마취 전 검사)을 받아야 합니다. 검사 결과를 바탕으로 마취 위험성을 평가하고, 보호자님과 충분히 상의한 후에 안전하게 수술 날짜를 잡고 있습니다.",
            {
              "main": "<strong>부득이한 경우, 타병원 검사 결과도 인정해드려요.</strong><br>시간이나 거리 문제로 본원에서 검사가 힘든 경우, 타병원에서 검사를 진행하고 결과를 보내주셔도 좋습니다. 단, 아래 항목이 반드시 포함된 <strong>1개월 이내의 검사 결과</strong>여야만 수술 가능 여부를 판단할 수 있습니다.",
              "sublist": [
                "심장병 이상 유무 (proBNP 키트 검사 등)",
                "간과 신장 기능 수치 (혈액화학검사)",
                "안전한 기관 삽관을 위한 기관 사이즈 평가",
                "혈압 이상 유무",
                "고양이 백혈병/에이즈(FeLV/FIV) 키트 검사 결과"
              ]
            }
          ]
        },
        "footer": {
          "title": "🚀 빠른 상담 & 예약 🚀",
          "kakaoLink": "https://pf.kakao.com/_jiICK/chat",
          "telLink": "tel:062-383-7572"
        }
      },
      "healthCheck": {
        "headerTitle": "🩺✨ 우리 냥이 맞춤! 안심 건강검진 ✨🩺",
        "headerSubtitle": "💖 안전한 마취를 위한 첫걸음! 🌈 연령별 맞춤 플랜을 확인하세요! 💖",
        "packages": [
          {
            "borderColor": "#4db6ac", "titleColor": "#00796b", "title": "🍼 아깽이 기본 플랜 🍼",
            "items": [ "🩸 (1) 혈구검사 <small>빈혈, 염증, 혈소판 체크</small>", "🧪 (2) 혈액 화학 검사 <small>(7종) 간, 콩팥, 혈당 등 기본 기능</small>", "⚡️ (3) 전해질 검사 <small>몸 속 수분 밸런스 체크</small>", "🩻 (4) 흉부 X-RAY (3컷) <small>심장, 폐 모양 확인</small>", "🩺 (5) 혈압 체크 <small>기본 순환기 상태 평가</small>" ],
            "originalPrice": 209000, "discountPrice": 160000
          },
          {
            "borderColor": "#ffd54f", "titleColor": "#f9a825", "title": "💖 아깽이 안심+ 플랜 💖",
            "items": [ "🩸 (1) 혈구검사 <small>빈혈, 염증, 혈소판 체크</small>", "🧪 (2) 혈액 화학 검사 <small>(7종) 간, 콩팥, 혈당 등 기본 기능</small>", "⚡️ (3) 전해질 검사 <small>몸 속 수분 밸런스 체크</small>", "🩻 (4) 흉부 X-RAY (3컷) <small>심장, 폐 모양 확인</small>", "🩺 (5) 혈압 체크 <small>기본 순환기 상태 평가</small>", "❤️ (6) proBNP <small>숨어있는 심장병 조기 진단!</small>" ],
            "originalPrice": 264000, "discountPrice": 199000
          },
          {
            "borderColor": "#ff8a65", "titleColor": "#d84315", "title": "💪 7세 미만 으른냥 플랜 💪",
            "items": [ "🩸 (1) 혈구검사 & 화학검사 (12종)", "🔥 (2) SAA <small>몸 속 급성 염증 정밀 체크</small>", "🩻 (3) X-RAY (흉부3+복부2)", "🩺 (4) 혈압 & proBNP 심장 체크", "🦠 (5) 전염병 키트 <small>심장사상충+백혈병+면역결핍</small>" ],
            "originalPrice": 414000, "discountPrice": 299000
          },
          {
            "borderColor": "#ba68c8", "titleColor": "#7b1fa2", "title": "👑 7세+ 어르신냥 VIP 플랜 👑",
            "items": [ "🩸 (1) 혈구검사 & 화학검사 (12종)", "🔥 (2) SAA & proBNP & 혈압", "🩻 (3) X-RAY (흉부3+복부2)", "🦠 (4) 전염병 키트", "🦋 (5) SDMA/T4 <small>신장/갑상선 기능 정밀 평가</small>", "🐾 (6) fPL 검사 <small>췌장염 수치 체크</small>" ],
            "originalPrice": 569000, "discountPrice": 449000
          }
        ],
        "explanation": {
          "title": "💡 마취 전 건강검진, 왜 꼭 필요할까요? 💡",
          "content": [
            "전신 마취는 마치 <strong>'비행기 여행 ✈️'</strong>과 같아요. 여행 전에 <strong>날씨를 꼭! 체크 🌤️</strong>하는 것처럼, 마취 전 건강검진은 우리 아이의 몸 상태를 미리 확인해서 가장 안전한 여행(마취) 계획을 세우는 과정이랍니다.",
            "겉으로는 보이지 않는 장기의 이상이나 숨겨진 질병을 미리 발견해서, 마취 중 발생할 수 있는 위험을 최소화하고 <strong>우리 냥이에게 가장 안전한 방법을 찾기 위한 💖사랑의 과정💖</strong>이에요."
          ]
        }
      },
      "scaling": {
        "headerTitle": "🦷✨ 우리 냥냥이 반짝반짝 스케일링 ✨🦷",
        "headerSubtitle": "💖 사랑과 정성을 담아! 🌈 화려한 혜택가로 안내합니다! 💖",
        "packages": [
          {
            "borderColor": "#ff7eb9", "titleColor": "#ff7eb9", "title": "🐱 5kg 미만 아깽이 🐱",
            "items": [ "💧 술 전 수액 처치", "💉 술 전 주사 마취", "😴 호흡 마취 <small>(기본 1시간)</small>", "📸 전체 치과 X-ray <small>(수술 전/후 10장 이상 꼼꼼 촬영!)</small>", "🧼 스케일링", "💎 폴리싱 <small>(반짝반짝 광택 마무리!)</small>" ],
            "originalPrice": 329000, "discountPrice": 239000
          },
          {
            "borderColor": "#ffc107", "titleColor": "#ffc107", "title": "🐈 5kg ~ 10kg 미만 냥이 🐈",
            "items": [ "💧 술 전 수액 처치", "💉 술 전 주사 마취", "😴 호흡 마취 <small>(기본 1시간)</small>", "📸 전체 치과 X-ray <small>(수술 전/후 10장 이상 꼼꼼 촬영!)</small>", "🧼 스케일링", "💎 폴리싱 <small>(반짝반짝 광택 마무리!)</small>" ],
            "originalPrice": 389000, "discountPrice": 299000
          },
          {
            "borderColor": "#20c997", "titleColor": "#20c997", "title": "🐈‍⬛ 10kg ~ 15kg 미만 뚱냥이 🐈‍⬛",
            "items": [ "💧 술 전 수액 처치", "💉 술 전 주사 마취", "😴 호흡 마취 <small>(기본 1시간)</small>", "📸 전체 치과 X-ray <small>(수술 전/후 10장 이상 꼼꼼 촬영!)</small>", "🧼 스케일링", "💎 폴리싱 <small>(반짝반짝 광택 마무리!)</small>" ],
            "originalPrice": 459000, "discountPrice": 389000
          }
        ],
        "explanation": {
          "title": "💡 필독! 혜택 적용 비용 안내 💡",
          "content": [
            "저희 금호동물병원에서는 아이의 <strong>안전을 💖최우선💖</strong>으로 생각해요. 그래서 최근 <strong>✅ 저희 병원에서 직접 마취 전 혈액검사</strong>를 진행해서, 아이의 건강 상태를 저희 의료진이 완벽하게 파악하고 있는 경우! 감사의 마음을 담아 <strong>👑혜택가👑</strong>를 적용해 드리고 있답니다.",
            "다른 병원에서 검사를 받으셨거나 사정상 검사를 못 하셨어도 괜찮아요! 물론 안전한 치과 치료가 가능합니다. 다만, 외부 데이터를 다시 검토하고 저희 시스템에 맞게 적용하는 과정이 필요해서 정상 비용으로 진행되는 점, 보호자님의 너른 양해를 부탁드려요. 🙏",
            "<strong>🚨 잠깐!</strong> 안내된 비용은 스케일링과 기본 처치 비용이에요. 아이의 구강 상태에 따라 발치, 신경치료, 약 처방 등 추가 치료가 필요할 수 있어요. 이 경우, 꼭! <strong>보호자님과 충분히 상의 후 진행</strong>하니 걱정 마세요! 😉"
          ]
        }
      },
      "extraction": {
        "headerTitle": "🦷😿 우리 냥이 아픈 치아 치료 😿🦷",
        "headerSubtitle": "❤️ 아이의 고통을 덜어주는 발치 비용을 투명하게 안내해요 ❤️",
        "costs": [
          { "id": "card-root1", "title": "🦷 뿌리 1개 발치 (앞니 등)", "description": "<strong>일반 쏙!:</strong> 많이 흔들리는 치아<br><strong>수술 샥!:</strong> 잇몸 절개&봉합 포함", "prices": [{ "label": "일반 발치", "value": 22000 }, { "label": "수술 발치", "value": 44000 }] },
          { "id": "card-root2", "title": "🦷🦷 뿌리 2개 발치 (어금니)", "description": "<strong>일반 쏙! :</strong> 많이 흔들리는 치아<br><strong>수술 샥! :</strong> 잇몸 절개&봉합 포함", "prices": [{ "label": "일반 발치", "value": 66000 }, { "label": "수술 발치", "value": 120000 }] },
          { "id": "card-root3", "title": "🦷🦷🦷 뿌리 3개 발치 (큰 어금니)", "description": "<strong>일반 쏙! :</strong> 많이 흔들리는 치아<br><strong>수술 샥! :</strong> 잇몸 절개&봉합 포함", "prices": [{ "label": "일반 발치", "value": 88000 }, { "label": "수술 발치", "value": 220000 }] },
          { "id": "card-canine", "title": "💪 튼튼한 송곳니 수술 발치", "description": "길고 튼튼한 송곳니 뿌리! 정교한 수술로 안전하게 제거해요. 턱 구조에 따라 난이도가 달라요.", "prices": [{ "label": "위턱 송곳니", "value": 220000 }, { "label": "아래턱 송곳니", "value": 270000 }] },
          { "id": "card-molar", "title": "💥 아래턱 큰 어금니 발치", "description": "가장 큰 아래 어금니(M1)를 발치해요!<br><strong>일반 쏙! / 수술 샥!</strong> 선택 가능!", "prices": [{ "label": "일반 발치", "value": 77000 }, { "label": "수술 발치", "value": 165000 }] },
          { "id": "card-forl", "title": "💔 치아흡수병변 발치", "description": "치아가 녹아내리는 슬픈 병이에요. 잇몸뼈와 붙은 뿌리는 남기거나, 뿌리까지 모두 제거해요.", "prices": [{ "label": "치관 절제술", "value": 77000 }, { "label": "전체 발치", "value": 160000 }] },
          { "id": "card-remains", "title": "🔍 숨어있는 뿌리 찾기!", "description": "과거에 남겨진 아픈 뿌리를 찾아 제거하는 수술이에요. 위치와 개수에 따라 비용이 달라져요.", "prices": [{ "label": "뿌리 1개", "value": 77000 }, { "label": "송곳니 뿌리 등", "value": "12만~30만원" }] }
        ],
        "explanation": {
          "title": "💡 꼭! 확인해주세요! '일반' vs '수술' 발치 💡",
          "content": [
            "<strong>일반 발치 (쏙!) 😿</strong><br>잇몸병으로 치아가 이미 <strong>많이많이 흔들릴 때!</strong> 잇몸 절개 없이 쏙~ 뽑아요. (봉합이 필요하면 비용이 추가될 수 있어요!)",
            "<strong>수술 발치 (샥!) 💪</strong><br>치아 뿌리가 아직 <strong>잇몸뼈에 단단히 박혀있을 때!</strong> 잇몸을 열고 안전하게 조각내어 제거한 뒤, 꼼꼼하게 봉합까지 하는 전문적인 과정이에요."
          ]
        }
      },
      "addons": {
        "headerTitle": "💊 우리 냥이 회복을 돕는 케어 비용 💊",
        "headerSubtitle": "💖 아프지 않게, 더 빨리 나을 수 있도록! 사랑의 추가 처치 안내 💖",
        "costs": [
          { "borderColor": "#f06292", "titleColor": "#c2185b", "title": "🪄 통증아 날아가라 뿅!", "description": "수술 직후부터 집에 가서까지, 우리 냥이가 아프지 않도록 통증을 효과적으로 관리해주는 마법 같은 처치들이에요.", "prices": [{ "label": "진통 주사", "value": "20,000원 ~<small>(체중별)</small>" }, { "label": "국소 마취", "value": "10,000원 ~<small>(부위/체중별)</small>" }, { "label": "진통 패치", "value": "40,000원 ~<small>(용량별)</small>" }] },
          { "borderColor": "#4dd0e1", "titleColor": "#00838f", "title": "🚀 회복 부스터 뿜뿜!", "description": "감염 예방, 염증 완화, 세포 재생 촉진! 우리 냥이가 에너지를 되찾고 빨리 일상으로 돌아가도록 돕는 부스터 처치예요.", "prices": [{ "label": "항생/소염 주사", "value": "11,000원 ~<small>(종류/체중별)</small>" }, { "label": "레이저 치료", "value": "20,000원 ~<small>(부위별)</small>" }, { "label": "불소 도포", "value": "35,000원 ~<small>(체중별)</small>" }] },
          { "borderColor": "#9575cd", "titleColor": "#512da8", "title": "🏡 집에서도 계속되는 사랑!", "description": "집에 가서도 집사님의 사랑으로 케어할 수 있도록! 안전과 회복을 위한 필수 아이템들이에요.", "prices": [{ "label": "넥카라", "value": "10,000원 ~<small>(사이즈별)</small>" }, { "label": "구강 유산균", "value": 50000 }, { "label": "구강 스프레이", "value": "10,000원 ~" }, { "label": "항생/소염 연고", "value": 15000 }] },
          { "borderColor": "#fff176", "titleColor": "#f9a825", "title": "⏰ 기타 항목 안내", "description": "수술이 길어질 때 안전한 마취를 유지하고, 퇴원 후 집에서 먹을 약을 처방받는 비용이에요.", "prices": [{ "label": "마취 시간 연장 (5kg 이하)", "value": "45,000원<small>(30분당)</small>" }, { "label": "마취 시간 연장 (10kg 이하)", "value": "50,000원<small>(30분당)</small>" }, { "label": "내복약/진통제", "value": "별도 문의<small>(체중/기간별)</small>" }] }
        ],
        "explanation": {
          "title": "💡 추가 처치는 왜 필요할까요? 🤔",
          "content": [
            "우리 냥이들은 <strong>\"나 아파요😿\" 라고 말을 못하고 꾹~ 참는 습성</strong>이 있어요. 그래서 미리 통증을 관리해주는 건 아이의 고통을 덜어주는 <strong>가장 큰 사랑이자 배려</strong>랍니다.💖",
            "또, 항생제나 레이저, 소독 용품들은 수술 후 생길 수 있는 <strong>나쁜 균들을 막아주고 🦠 회복 속도를 높여서⚡️</strong> 아이가 빨리 캣타워로 점프! 할 수 있게 도와줘요!",
            "저희 병원은 아이의 상태를 꼼꼼히 살펴, <strong>정말 꼭! 필요한 처치만 골라서 보호자님과 상의</strong>드릴 것을 약속해요.🤙"
          ]
        }
      },
      "nerve": {
        "headerTitle": "❤️‍🩹 우리 냥이 치아 살리기 대작전! ❤️‍🩹",
        "headerSubtitle": "무조건 뽑지 않아요! 💪 소중한 치아를 지켜주는 치료 비용 안내",
        "costs": [
          {
            "borderColor": "#ffc078", "titleColor": "#f76707", "title": "✨ 살아있는 신경 살리기! (VPT)",
            "description": "<strong>⏳ 48시간 골든타임! ⏳</strong><br>치아가 부러진 직후, 아직 신경이 살아있을 때만 가능해요! 오염된 신경만 살짝 걷어내고 🩹 특수 보호 약품으로 코팅해서 치아의 생명력을 지켜준답니다.<span style=\"display:block;font-size:.9em;color:#e64980;font-weight:700;margin-top:10px;text-align:center\">🚨 레진 충전 비용은 별도예요!</span>",
            "price": 270000, "priceStyle": "single"
          },
          {
            "borderColor": "#ff87c2", "titleColor": "#c2255c", "title": "💔 아픈 신경 치료하기 (신경치료)",
            "description": "이미 신경이 죽었거나 🦠 세균에 감염되어 아야! 할 때 필요해요. 감염된 신경을 싹~ 제거하고 깨끗하게 소독한 뒤, 특수 재료로 채워서 통증의 원인을 없애고 치아는 보존해요.<span style=\"display:block;font-size:.9em;color:#e64980;font-weight:700;margin-top:10px;text-align:center\">🚨 레진 충전 비용은 별도예요!</span>",
            "price": 770000, "priceNote": "(송곳니 기준)", "priceStyle": "single"
          },
          {
            "borderColor": "#4dabf7", "titleColor": "#1c7ed6", "title": "🎨 예쁘게 때워주기 (레진 치료)",
            "description": "충치나 마모, 살짝 깨진 부위를 치아 색과 비슷한 예쁜 재료로 메워서, 원래 모양과 기능을 되찾아주는 치료예요! 손상 범위와 치아에 따라 비용이 달라져요.",
            "prices": [
              { "label": "쪼꼬만 손상", "value": 55000 },
              { "label": "송곳니", "value": 110000 },
              { "label": "어금니", "value": 132000 }
            ],
            "priceStyle": "list"
          }
        ],
        "explanation": {
          "title": "💡 '신경 살리기' vs '신경 치료', 차이점이 뭐예요? 🧐",
          "content": [
            "<strong>VPT (신경 살리기) 🩹 :</strong> 살아있는 신경을 <strong>'보호'</strong>하는 거예요. 작은 상처에 연고 바르고 밴드 붙여서 새살이 돋게 하는 것과 같아요! 🥰",
            "<strong>신경치료 🧹 :</strong> 이미 아픈 신경을 <strong>'제거'</strong>하는 거예요. 썩은 부분을 깨끗이 파내고, 튼튼한 재료로 채워서 치아 기둥을 지키는 것과 같답니다! 💪",
            "<strong>따라서 치아가 부러졌다면, ⏳48시간 골든타임⏳ 안에 병원에 와주시는게 치아를 살릴 최고의 방법이에요! 😻</strong>"
          ]
        }
      }
    };

    // --- 1. 정보 패널 채우기 ---
    try {
        populateContent(hospitalData);
    } catch (error) {
        console.error('데이터 처리 중 오류 발생:', error);
        alert('콘텐츠를 처리하는 데 실패했습니다. 코드에 문제가 없는지 확인해주세요.');
    }

    // --- 2. 계산기 및 페이지 기능 초기화 ---
    initCalculator();
    setupPageNavigation();
});

// HELPER: 가격 포맷 지정
const formatPrice = (price) => {
    if (typeof price === 'number') {
        return `💸 ${price.toLocaleString('ko-KR')}원`;
    }
    return `💸 ${price}`;
};

/**
 * 데이터 객체로 정보 안내 패널들을 채웁니다.
 * @param {object} data - 로드된 데이터
 */
function populateContent(data) {
    if (!data) return;
    if (data.main) {
        document.getElementById('main-header-title').innerHTML = data.main.headerTitle;
        document.getElementById('main-header-subtitle').innerHTML = data.main.headerSubtitle;
        document.getElementById('main-address').innerHTML = data.main.contact.address;
        document.getElementById('main-phone').textContent = data.main.contact.phone;
        
        const hoursList = document.getElementById('main-hours');
        hoursList.innerHTML = data.main.hours.map(h => {
            let style = '';
            if (h.highlight) style = 'color:#d81b60;font-weight:bold';
            if (h.isHoliday) style = 'color:red';
            return `<li><strong style="${style}">${h.day}:</strong> ${h.time}</li>`;
        }).join('');

        const parkingList = document.getElementById('main-parking');
        parkingList.innerHTML = `
            <li><strong>오전:</strong> ${data.main.parking.morning}</li>
            <li><strong>오후:</strong> ${data.main.parking.afternoon}</li>
            <li><strong style="color:#d81b60;font-weight:bold">꿀팁🍯:</strong> ${data.main.parking.tip}</li>`;
        
        const prideSection = document.getElementById('main-pride');
        prideSection.innerHTML = `<h2 style="color:#0277bd">${data.main.pride.title}</h2>` +
        data.main.pride.points.map(p => `
            <ul>
                <li><strong>${p.title}</strong>
                    <ul>${p.items.map(i => `<li>${i}</li>`).join('')}</ul>
                </li>
            </ul>`).join('<br>');

        document.getElementById('main-notice-title').innerHTML = data.main.notice.title;
        const noticeList = document.getElementById('main-notice-list');
        noticeList.innerHTML = data.main.notice.items.map(item => {
            if (typeof item === 'string') {
                return `<li>${item}</li>`;
            } else {
                return `<li>${item.main}<ul class="sub-list">${item.sublist.map(sub => `<li>${sub}</li>`).join('')}</ul></li>`;
            }
        }).join('');
        
        const footer = document.getElementById('main-footer');
        footer.innerHTML = `<h2>${data.main.footer.title}</h2>
            <a href="${data.main.footer.kakaoLink}" target="_blank" class="action-button kakao-btn">💬 카카오톡 채널로 상담하기</a>
            <a href="${data.main.footer.telLink}" class="action-button tel-btn">📞 ${data.main.contact.phone}</a>`;
    }

    if (data.healthCheck) {
        document.getElementById('healthcheck-header-title').innerHTML = data.healthCheck.headerTitle;
        document.getElementById('healthcheck-header-subtitle').innerHTML = data.healthCheck.headerSubtitle;
        
        const healthPackages = document.getElementById('healthcheck-packages');
        healthPackages.innerHTML = data.healthCheck.packages.map(pkg => `
            <div class="package-card" style="border-top-color:${pkg.borderColor}">
                <h3 style="color:${pkg.titleColor}">${pkg.title}</h3>
                <ul>${(pkg.items || []).map(item => `<li>${item}</li>`).join('')}</ul>
                <div class="price-wrapper">
                    <span class="original-price">${formatPrice(pkg.originalPrice)}</span>
                    <span class="discount-price heartbeat">❤️ ${pkg.discountPrice.toLocaleString('ko-KR')}원</span>
                </div>
            </div>
        `).join('');

        document.getElementById('healthcheck-explanation-title').innerHTML = data.healthCheck.explanation.title;
        const healthExplanation = document.getElementById('healthcheck-explanation-content');
        healthExplanation.innerHTML = (data.healthCheck.explanation.content || []).map(p => `<p>${p}</p>`).join('');
    }

    if (data.scaling) {
        document.getElementById('scaling-header-title').innerHTML = data.scaling.headerTitle;
        document.getElementById('scaling-header-subtitle').innerHTML = data.scaling.headerSubtitle;

        const scalingPackages = document.getElementById('scaling-packages');
        scalingPackages.innerHTML = data.scaling.packages.map(pkg => `
            <div class="package-card" style="border-top-color:${pkg.borderColor}">
                <h3 style="color:${pkg.titleColor}">${pkg.title}</h3>
                <ul>${(pkg.items || []).map(item => `<li>${item}</li>`).join('')}</ul>
                <div class="price-wrapper">
                    <span class="original-price">${formatPrice(pkg.originalPrice)}</span>
                    <span class="discount-price pulse">👑 ${pkg.discountPrice.toLocaleString('ko-KR')}원</span>
                </div>
            </div>
        `).join('');
        
        document.getElementById('scaling-explanation-title').innerHTML = data.scaling.explanation.title;
        const scalingExplanation = document.getElementById('scaling-explanation-content');
        scalingExplanation.innerHTML = (data.scaling.explanation.content || []).map(p => `<p>${p}</p>`).join('');
    }

    if(data.extraction) {
        document.getElementById('extraction-header-title').innerHTML = data.extraction.headerTitle;
        document.getElementById('extraction-header-subtitle').innerHTML = data.extraction.headerSubtitle;

        const extractionCosts = document.getElementById('extraction-costs');
        extractionCosts.innerHTML = data.extraction.costs.map(cost => `
            <div class="cost-card" id="${cost.id}">
                <h3>${cost.title}</h3>
                <div class="description" style="flex-grow:1;">${cost.description}</div>
                <div class="price-wrapper" style="text-align: right;">
                    ${(cost.prices || []).map(p => `<div class="price-item"><span class="price-label">${p.label}</span> <span class="price-value">${formatPrice(p.value)}</span></div>`).join('')}
                </div>
            </div>
        `).join('');

        document.getElementById('extraction-explanation-title').innerHTML = data.extraction.explanation.title;
        const extractionExplanation = document.getElementById('extraction-explanation-content');
        extractionExplanation.innerHTML = (data.extraction.explanation.content || []).map(p => `<p>${p}</p>`).join('');
    }
  
    if(data.addons) {
        document.getElementById('addons-header-title').innerHTML = data.addons.headerTitle;
        document.getElementById('addons-header-subtitle').innerHTML = data.addons.headerSubtitle;

        const addonsCosts = document.getElementById('addons-costs');
        addonsCosts.innerHTML = data.addons.costs.map(cost => `
            <div class="cost-card" style="border-top-color:${cost.borderColor}">
                <h3 style="color:${cost.titleColor}">${cost.title}</h3>
                <div class="description" style="flex-grow:1;">${cost.description}</div>
                <div class="price-wrapper" style="text-align: right;">
                    ${(cost.prices || []).map(p => `<div class="price-item"><span class="price-label">${p.label}</span> <span class="price-value">${typeof p.value === 'number' ? p.value.toLocaleString('ko-KR')+'원' : p.value}</span></div>`).join('')}
                </div>
            </div>
        `).join('');

        document.getElementById('addons-explanation-title').innerHTML = data.addons.explanation.title;
        const addonsExplanation = document.getElementById('addons-explanation-content');
        addonsExplanation.innerHTML = (data.addons.explanation.content || []).map(p => `<p>${p}</p>`).join('');
    }
  
    if(data.nerve) {
        document.getElementById('nerve-header-title').innerHTML = data.nerve.headerTitle;
        document.getElementById('nerve-header-subtitle').innerHTML = data.nerve.headerSubtitle;
        
        const nerveCosts = document.getElementById('nerve-costs');
        nerveCosts.innerHTML = data.nerve.costs.map(cost => `
            <div class="cost-card" style="border-top-color:${cost.borderColor}">
                <h3 style="color:${cost.titleColor}">${cost.title}</h3>
                <div class="description" style="flex-grow:1;">${cost.description}</div>
                <div class="price-wrapper" style="${cost.priceStyle === 'single' ? 'text-align:center' : 'text-align:right'}">
                    ${cost.priceStyle === 'single' ? 
                      `<span class="discount-price pulse" style="font-size:2.5em;color:#fa5252">👑 ${cost.price.toLocaleString('ko-KR')}원<small style="font-size:.5em;font-weight:400;color:#666;display:block">${cost.priceNote || ''}</small></span>` :
                      (cost.prices || []).map(p => `<div class="price-item"><span class="price-label">${p.label}</span> <span class="price-value" style="color:#fa5252;font-size:1.3em">${formatPrice(p.value)}</span></div>`).join('')
                    }
                </div>
            </div>
        `).join('');

        document.getElementById('nerve-explanation-title').innerHTML = data.nerve.explanation.title;
        const nerveExplanation = document.getElementById('nerve-explanation-content');
        nerveExplanation.innerHTML = (data.nerve.explanation.content || []).map(p => `<p>${p}</p>`).join('');
    }
}


/**
 * 페이지 네비게이션(탭) 기능을 설정합니다.
 */
function setupPageNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const contentPanels = document.querySelectorAll('.content-panel');

    function showContent(targetId) {
        contentPanels.forEach(panel => panel.classList.remove('active'));
        navTabs.forEach(tab => tab.classList.remove('active'));
        
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.add('active');
        }
        
        const activeTab = document.querySelector(`.nav-tab[data-target="${targetId}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }
    }

    navTabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = tab.dataset.target;
            if (targetId === 'content-estimate' || targetId === 'content-guardian-report') {
                copyCalculatorDataTo(targetId);
            }
            showContent(targetId);
        });
    });

    // 초기 페이지 로드 시 '병원소개' 탭 활성화
    showContent('content-main');
}


// ===================================================================================
// 계산기 관련 모든 기능
// ===================================================================================

function initCalculator() {
    const page = document.querySelector('#Calculator-Page');
    if (!page) return;

    // --- 계산기 상수 및 상태 ---
    const CURRENT_VERSION = "3.0-cat"; // 버전 업데이트
    let isChartDirty = false;
    window.jsPDF = window.jspdf.jsPDF;

    const toothData = {
        'table-upper-right': [ { id: '101', type: '앞이빨', roots: 'root1', group: 3 }, { id: '102', type: '', roots: 'root1' }, { id: '103', type: '', roots: 'root1' }, { id: '104', type: '송곳니', roots: 'canineUpper', group: 1 }, { id: '106', type: '앞쪽<br>어금니', roots: 'root1', group: 3 }, { id: '107', type: '', roots: 'root2' }, { id: '108', type: '', roots: 'root3' }, { id: '109', type: '작은<br>어금니', roots: 'root1', group: 1 } ],
        'table-lower-right': [ { id: '401', type: '앞이빨', roots: 'root1', group: 3 }, { id: '402', type: '', roots: 'root1' }, { id: '403', type: '', roots: 'root1' }, { id: '404', type: '송곳니', roots: 'canineLower', group: 1 }, { id: '407', type: '앞쪽<br>어금니', roots: 'root2', group: 2 }, { id: '408', type: '', roots: 'root2' }, { id: '409', type: '어금니', roots: 'molar', group: 1 } ],
        'table-upper-left': [ { id: '201', type: '앞이빨', roots: 'root1', group: 3 }, { id: '202', type: '', roots: 'root1' }, { id: '203', type: '', roots: 'root1' }, { id: '204', type: '송곳니', roots: 'canineUpper', group: 1 }, { id: '206', type: '앞쪽<br>어금니', roots: 'root1', group: 3 }, { id: '207', type: '', roots: 'root2' }, { id: '208', type: '', roots: 'root3' }, { id: '209', type: '작은<br>어금니', roots: 'root1', group: 1 } ],
        'table-lower-left': [ { id: '301', type: '앞이빨', roots: 'root1', group: 3 }, { id: '302', type: '', roots: 'root1' }, { id: '303', type: '', roots: 'root1' }, { id: '304', type: '송곳니', roots: 'canineLower', group: 1 }, { id: '307', type: '앞쪽<br>어금니', roots: 'root2', group: 2 }, { id: '308', type: '', roots: 'root2' }, { id: '309', type: '어금니', roots: 'molar', group: 1 } ]
    };
    const toothMappings = {};
    Object.values(toothData).flat().forEach(tooth => {
        toothMappings[tooth.id] = tooth.roots;
    });
    
    function addOption(select, text, value, category = '') {
        const opt = new Option(text, value);
        if (value === 'disabled') {
            opt.disabled = true;
        } else {
            opt.dataset.category = category;
        }
        select.add(opt);
    }
    
    function populateProcedureSelect(select, permanentId) {
        select.innerHTML = '';
        const toothType = toothMappings[permanentId];

        const categories = {
            extraction: '발치/제거',
            forl: '치아흡수병변',
            periodontal: '치주 치료',
            restorative: '신경/보존 치료',
            monitoring: '기타 (모니터링)'
        };

        addOption(select, '--', 0);
        
        addOption(select, '▼ 발치 / 제거', 'disabled');
        if (toothType === 'root1') { addOption(select, '뿌리 1개 일반', 22000, categories.extraction); addOption(select, '뿌리 1개 수술', 44000, categories.extraction); addOption(select, '잔존치근-뿌리1', 77000, categories.extraction); }
        if (toothType === 'root2') { addOption(select, '뿌리 2개 일반', 66000, categories.extraction); addOption(select, '뿌리 2개 수술', 120000, categories.extraction); addOption(select, '잔존치근-뿌리2', 120000, categories.extraction); }
        if (toothType === 'root3') { addOption(select, '뿌리 3개 일반', 88000, categories.extraction); addOption(select, '뿌리 3개 수술', 220000, categories.extraction); addOption(select, '잔존치근-뿌리1', 77000, categories.extraction); addOption(select, '잔존치근-뿌리2', 120000, categories.extraction); addOption(select, '잔존치근-구개측', 160000, categories.extraction); }
        if (toothType === 'canineUpper') { addOption(select, '견치 수술 - 상악', 220000, categories.extraction); addOption(select, '잔존치근-상악송곳니', 250000, categories.extraction); }
        if (toothType === 'canineLower') { addOption(select, '견치 수술 - 하악', 270000, categories.extraction); addOption(select, '잔존치근-하악송곳니', 300000, categories.extraction); }
        if (toothType === 'molar') { addOption(select, '대구치 일반', 77000, categories.extraction); addOption(select, '대구치 수술', 165000, categories.extraction); }
        if (!toothMappings[permanentId] || toothMappings[permanentId] !== 'molar') { addOption(select, '유치 발치(일반)', 22000, categories.extraction); addOption(select, '유치 발치(수술)', 44000, categories.extraction); }

        addOption(select, '▼ 치아흡수병변 (FORL)', 'disabled');
        addOption(select, '흡수-제거및치조골성형', 160000, categories.forl);
        addOption(select, '흡수-치조골성형', 77000, categories.forl);
        
        addOption(select, '▼ 치주 치료', 'disabled');
        addOption(select, '치근활택술(Mino)', 45000, categories.periodontal);
        addOption(select, '치근활택술(Emdo)', 110000, categories.periodontal);
        addOption(select, '개방치근활택술1', 165000, categories.periodontal);
        addOption(select, '개방치근활택술2', 600000, categories.periodontal);
        addOption(select, 'GTR-Membrane', 88000, categories.periodontal);
        addOption(select, '인공뼈 이식', 220000, categories.periodontal);
        addOption(select, '엠도게인-All', 440000, categories.periodontal);
        addOption(select, '엠도게인-Part(1/4)', 110000, categories.periodontal);
        addOption(select, '잇몸성형(Gingivoplasty)', 50000, categories.periodontal);
        
        addOption(select, '▼ 신경/보존 치료', 'disabled');
        if (toothType && toothType.includes('canine')) {
             addOption(select, '생활치수절단술(VPT)', 270000, categories.restorative);
             addOption(select, '송곳니 신경치료', 770000, categories.restorative);
             addOption(select, '레진-3mm이하', 55000, categories.restorative);
             addOption(select, '레진-송곳니', 110000, categories.restorative);
        }
        if (toothType === 'molar') { addOption(select, '레진-어금니', 132000, categories.restorative); }
        addOption(select, '충치 치료', 77000, categories.restorative);
        addOption(select, 'Crown Reduction', 99000, categories.restorative);
        
        addOption(select, '▼ 기타', 'disabled');
        addOption(select, '미노클린 처치', 22000, categories.monitoring);
        addOption(select, '모니터링', 0, categories.monitoring);
    }
    
    function createMainRow(tooth, notes = '', procedures = []) {
        const row = document.createElement('tr');
        row.dataset.permanentId = tooth.id;
        let typeCell = (tooth.group) ? `<td rowspan="${tooth.group}" class="tooth-type">${tooth.type}</td>` : '';
        row.innerHTML = `${typeCell}<td class="tooth-id-cell">${tooth.id}</td><td><input type="text" class="notes" placeholder="특이사항 입력" value="${notes}"></td><td><select class="procedure-select"></select></td><td class="cost" data-cost="0">₩0</td><td><button class="add-btn">+</button></td>`;
        const mainSelect = row.querySelector('.procedure-select');
        populateProcedureSelect(mainSelect, tooth.id);
        if (procedures.length > 0) mainSelect.value = procedures[0] || 0;
        return row;
    }
    
    function createSubRow(mainRowId, value = '0') {
        const newRow = document.createElement('tr');
        newRow.className = 'procedure-sub-row';
        newRow.dataset.permanentId = mainRowId;
        newRow.innerHTML = `<td class="tooth-id-cell"></td><td><input type="text" class="notes" placeholder="특이사항 입력"></td><td><select class="procedure-select"></select></td><td class="cost" data-cost="0">₩0</td><td><button class="remove-btn">-</button></td>`;
        const subSelect = newRow.querySelector('.procedure-select');
        populateProcedureSelect(subSelect, mainRowId);
        subSelect.value = value || 0;
        return newRow;
    }

    function updateAllTypeCellHighlights() {
        if (!page) return;
        page.querySelectorAll('td.tooth-type').forEach(typeCell => {
            const rowsToCheck = typeCell.rowSpan;
            let currentRow = typeCell.parentElement;
            let isAnyRowInGroupHighlighted = false;

            for (let i = 0; i < rowsToCheck; i++) {
                if (!currentRow) break;
                if (currentRow.classList.contains('row-highlight')) {
                    isAnyRowInGroupHighlighted = true;
                    break;
                }
                currentRow = currentRow.nextElementSibling;
            }

            if (isAnyRowInGroupHighlighted) {
                typeCell.style.backgroundColor = '#f0f0f0';
            } else {
                typeCell.style.backgroundColor = '';
            }
        });
    }

    function updateRowHighlight(row) {
        if (!row) return;
        const notes = row.querySelector('.notes');
        const select = row.querySelector('select');
        let isHighlighted = false;
        if (notes) isHighlighted = isHighlighted || notes.value.trim() !== '';
        if (select) isHighlighted = isHighlighted || (select.value !== '0' && select.value !== 'disabled');
        
        row.classList.toggle('row-highlight', isHighlighted);

        const idCell = row.querySelector('.tooth-id-cell');
        if (idCell) {
            idCell.style.backgroundColor = '';
            idCell.style.color = '';
            idCell.style.fontWeight = '';

            if (isHighlighted && select && select.value !== '0' && select.value !== 'disabled') {
                const selectedOption = select.options[select.selectedIndex];
                const category = selectedOption?.dataset.category;

                switch (category) {
                    case '발치/제거':
                        idCell.style.backgroundColor = '#ffcdd2'; // 연한 빨강
                        break;
                    case '치아흡수병변':
                        idCell.style.backgroundColor = '#ffe0b2'; // 연한 주황
                        break;
                    case '치주 치료':
                        idCell.style.backgroundColor = '#c5cae9'; // 연한 파랑
                        break;
                    case '신경/보존 치료':
                        idCell.style.backgroundColor = '#b2dfdb'; // 연한 청록
                        break;
                    case '기타 (모니터링)':
                        idCell.style.backgroundColor = '#f50057'; // 강조하는 핫핑크
                        idCell.style.color = 'white';
                        idCell.style.fontWeight = 'bold';
                        break;
                    default:
                        break;
                }
            }
        }
        updateAllTypeCellHighlights();
    }

    function handleSelectionChange(target) {
        const row = target.closest('tr');
        if (!row) return;
        const costCell = row.querySelector('.cost');
        if (!costCell) return;
        let cost = 0;
        if (target.matches('select')) {
            cost = parseInt(target.value, 10) || 0;
            const idCell = row.querySelector('.tooth-id-cell');
            if (idCell && row.classList.contains('procedure-sub-row')) {
                const selectedText = target.options[target.selectedIndex].text;
                const permanentId = row.dataset.permanentId;
                const p = {'1':'5', '2':'6', '3':'7', '4':'8'}[permanentId[0]];
                if (selectedText.includes('유치')) {
                    idCell.textContent = p + permanentId.substring(1);
                } else {
                    idCell.textContent = '';
                }
            }
        }
        costCell.textContent = '₩' + cost.toLocaleString('ko-KR');
        costCell.dataset.cost = cost;
        updateRowHighlight(row); 
        updateTotalCost();
        isChartDirty = true;
    }

    function populateAdditionalTreatments() {
        const tbody = page.querySelector('.additional-tbody');
        tbody.innerHTML = '';
        const treatments = [
            { id: 'scaling-package', name: '💧 스케일링/마취 패키지' },
            { id: 'iv-analgesic', name: '마약성 진통 정맥주사' },
            { id: 'anesthesia', name: '국소마취' },
            { id: 'injection', name: '항생/소염 주사' },
            { id: 'anesthesia-ext', name: '마취 시간 연장' },
            { id: 'patch', name: '마약성 진통패취' },
            { id: 'serenia', name: '추가 진통제(세레니아)'},
            { id: 'medication', name: '내복약' },
            { id: 'laser', name: '레이저' },
            { id: 'liquid-analgesic', name: '액상 진통제(멜록시캄)'},
            { id: 'neck-collar', name: '넥카라' },
            { id: 'fluoride', name: '불소 도포' }
        ];

        treatments.forEach(item => {
            const row = tbody.insertRow();
            row.insertCell().textContent = item.name;
            const selectionCell = row.insertCell();
            const control = document.createElement('select');
            control.dataset.itemId = item.id;
            selectionCell.append(control);
            row.insertCell().className = 'cost';
        });
    }

    function updateAdditionalOptions() {
         const weight = parseFloat(page.querySelector('#patient-weight-calc').value) || 0;
         page.querySelectorAll('.additional-tbody select[data-item-id]').forEach(control => {
            const itemId = control.dataset.itemId;
            const savedValue = control.value;

            control.innerHTML = '';
            addOption(control, '선택안함', 0);
            
            if (itemId === 'scaling-package') {
                if (weight > 0 && weight < 5) { addOption(control, '스케일링(~5kg, 할인가)', 239000); addOption(control, '마취만(~5kg)', 189000); }
                else if (weight >= 5 && weight < 10) { addOption(control, '스케일링(5-10kg, 할인가)', 299000); addOption(control, '마취만(~10kg)', 239000); }
                else if (weight >= 10) { addOption(control, '스케일링(10kg~, 할인가)', 389000); addOption(control, '마취만(~15kg)', 289000); }
            }
            if (itemId === 'iv-analgesic') { if (weight > 5) { addOption(control, '처방(5kg~)', 25000); } else { addOption(control, '처방(~5kg)', 20000); } }
            if (itemId === 'anesthesia') { if (weight > 5) { addOption(control, '1site(5kg~)', 12000); addOption(control, '2site(5kg~)', 17000); addOption(control, '3site(5kg~)', 20000); addOption(control, '4site(5kg~)', 22000); } else { addOption(control, '1site(~5kg)', 10000); addOption(control, '2site(~5kg)', 15000); addOption(control, '3site(~5kg)', 18000); addOption(control, '4site(~5kg)', 20000); } }
            if (itemId === 'injection') { if (weight > 5) { addOption(control, '1주 지속(5kg~)', 30000); addOption(control, '일반(5kg~)', 13000); } else { addOption(control, '1주 지속(~5kg)', 25000); addOption(control, '일반(~5kg)', 11000); } }
            if (itemId === 'anesthesia-ext') { addOption(control, '30분당', weight <= 5 ? 45000 : 50000); }
            if (itemId === 'patch') { addOption(control, '5ug', 40000); addOption(control, '10ug', 50000); addOption(control, '20ug', 60000); }
            if (itemId === 'serenia') { if (weight > 5) { addOption(control, '세레니아(~10kg)', 20000); } else { addOption(control, '세레니아(~5kg)', 15000); } }
            if (itemId === 'medication') { if (weight > 5) { addOption(control, '내복약 1일', 3800); addOption(control, '내복약 3일', 11400); addOption(control, '내복약 7일', 26600); } else { addOption(control, '내복약 1일', 3300); addOption(control, '내복약 3일', 9900); addOption(control, '내복약 7일', 23100); } }
            if (itemId === 'laser') { addOption(control, '국소', 20000); addOption(control, '전체', 25000); }
            if (itemId === 'liquid-analgesic') { for (let i = 1; i <= 14; i++) addOption(control, `${i}일분`, i * (weight*0.1*8000)); } // Simplified cost
            if (itemId === 'neck-collar') { addOption(control, '10cm', 10000); addOption(control, '13cm', 12000); addOption(control, '15cm', 15000); }
            if (itemId === 'fluoride') { if (weight > 5) { addOption(control, '불소도포(~10kg)', 44000); } else { addOption(control, '불소도포(~5kg)', 35000); } }

            if (Array.from(control.options).some(opt => opt.value === savedValue)) {
               control.value = savedValue;
            } else {
               control.value = 0;
            }
            handleSelectionChange(control);
         });
    }
    
    function updateTotalCost() {
        let dentalSurgeryCost = 0;
        page.querySelectorAll('.main-container .cost').forEach(cell => dentalSurgeryCost += parseInt(cell.dataset.cost, 10) || 0);

        let additionalTreatmentCost = 0;
        page.querySelectorAll('.additional-tbody .cost').forEach(cell => additionalTreatmentCost += parseInt(cell.dataset.cost, 10) || 0);
        
        page.querySelector('.dental-surgery-cost-display').textContent = '₩' + dentalSurgeryCost.toLocaleString('ko-KR');
        page.querySelector('.additional-treatment-cost-display').textContent = '₩' + additionalTreatmentCost.toLocaleString('ko-KR');
        page.querySelector('.total-cost-display').textContent = '₩' + (dentalSurgeryCost + additionalTreatmentCost).toLocaleString('ko-KR');
        updateTreatmentSummary();
    }
    
    function updateTreatmentSummary() {
        const summarySection = page.querySelector('.treatment-summary-section');
        if (!summarySection) return;

        const patientName = page.querySelector('#patient-name-calc').value || '고양이';
        summarySection.querySelector('.summary-patient-name').textContent = patientName;
        const extractionCategories = { '발치/제거': 0, '치아흡수병변': 0 };
        const treatmentCategories = { '치주 치료': 0, '신경/보존 치료': 0, '기타 (모니터링)': 0 };

        page.querySelectorAll('.procedure-select').forEach(select => {
            const selectedOption = select.options[select.selectedIndex];
            if (!selectedOption || select.value === '0' || select.value === 'disabled') return;
            
            const category = selectedOption?.dataset.category;
            if (category) {
                if (extractionCategories.hasOwnProperty(category)) {
                    extractionCategories[category]++;
                } else if (treatmentCategories.hasOwnProperty(category)) {
                    treatmentCategories[category]++;
                }
            }
        });

        const extractionTbody = summarySection.querySelector('.extraction-summary-table tbody');
        extractionTbody.innerHTML = '';
        let totalExtractions = 0;
        for (const [key, value] of Object.entries(extractionCategories)) {
            if (value > 0) {
                extractionTbody.innerHTML += `<tr><td class="summary-item">${key}</td><td class="summary-count">${value} 개</td></tr>`;
                totalExtractions += value;
            }
        }
        if (totalExtractions > 0) extractionTbody.innerHTML += `<tr class="summary-total"><td>총 발치 개수</td><td class="summary-count">${totalExtractions} 개</td></tr>`;
        else extractionTbody.innerHTML = '<tr><td colspan="2" style="text-align:center;">해당 내역 없음</td></tr>';
        
        const treatmentTbody = summarySection.querySelector('.treatment-summary-table tbody');
        treatmentTbody.innerHTML = '';
        let totalTreatments = 0;
        for (const [key, value] of Object.entries(treatmentCategories)) {
            if (value > 0) {
                treatmentTbody.innerHTML += `<tr><td class="summary-item">${key}</td><td class="summary-count">${value} 개</td></tr>`;
                totalTreatments += value;
            }
        }
        if (totalTreatments > 0) treatmentTbody.innerHTML += `<tr class="summary-total"><td>총 치료 개수</td><td class="summary-count">${totalTreatments} 개</td></tr>`;
        else treatmentTbody.innerHTML = '<tr><td colspan="2" style="text-align:center;">해당 내역 없음</td></tr>';
    }
    
    function findGoverningTypeCell(row) {
        let current = row;
        do {
            const cell = current.querySelector('td.tooth-type');
            if (cell) return cell;
            current = current.previousElementSibling;
        } while (current);
        return null;
    }

    function updateDynamicTitle() {
        const nameInput = page.querySelector('#patient-name-calc');
        const dateInput = page.querySelector('#visit-date-calc');
        const titleEl = page.querySelector('.dynamic-chart-title');
        const patientName = nameInput.value || '고양이';
        
        try {
            const visitDate = new Date(dateInput.value);
            if (isNaN(visitDate.getTime())) throw new Error("Invalid Date");
            const formattedDate = `${visitDate.getFullYear()}년 ${visitDate.getMonth() + 1}월 ${visitDate.getDate()}일`;
            titleEl.textContent = `🗓️ ${formattedDate} ${patientName}의 치과 차트`;
        } catch(e) {
            titleEl.textContent = `🦷 ${patientName}의 치과 차트`;
        }
    }
    
    function saveData() {
        const chartData = { appVersion: CURRENT_VERSION, patientName: page.querySelector('#patient-name-calc').value, visitDate: page.querySelector('#visit-date-calc').value, patientWeight: page.querySelector('#patient-weight-calc').value, dentalProcedures: {}, additionalTreatments: {} };
        const procedureGroups = {};
        page.querySelectorAll('.main-container tr[data-permanent-id]').forEach(row => {
            const id = row.dataset.permanentId;
            if (!procedureGroups[id]) procedureGroups[id] = [];
            procedureGroups[id].push({ procedure: row.querySelector('.procedure-select').value, notes: row.querySelector('.notes').value });
        });

        for (const [id, procedures] of Object.entries(procedureGroups)) {
            const validProcedures = procedures.filter(p => (p.procedure && p.procedure !== '0' && p.procedure !== 'disabled') || p.notes.trim() !== '');
            if (validProcedures.length > 0) chartData.dentalProcedures[id] = validProcedures;
        }

        page.querySelectorAll('.additional-tbody select').forEach(control => {
            const id = control.dataset.itemId;
            const value = control.value;
            if (value && value !== '0') {
                chartData.additionalTreatments[id] = value;
            }
        });

        const blob = new Blob([JSON.stringify(chartData, null, 2)], { type: 'application/json' });
        const link = document.createElement('a');
        const patientName = chartData.patientName || '환자';
        const visitDate = chartData.visitDate || new Date().toISOString().split('T')[0];
        link.download = `${patientName}_${visitDate}_고양이_치과차트.json`;
        link.href = URL.createObjectURL(blob);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
        isChartDirty = false; 
    }

    function loadData(event) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                let chartData = JSON.parse(e.target.result);
                
                page.querySelector('#patient-name-calc').value = chartData.patientName || '';
                page.querySelector('#visit-date-calc').value = chartData.visitDate || new Date().toISOString().split('T')[0];
                page.querySelector('#patient-weight-calc').value = chartData.patientWeight || '';
                
                updateAdditionalOptions();

                if (chartData.additionalTreatments) {
                    for (const [id, value] of Object.entries(chartData.additionalTreatments)) {
                        const control = page.querySelector(`[data-item-id="${id}"]`);
                        if (control) {
                             control.value = value;
                             handleSelectionChange(control);
                        }
                    }
                }

                page.querySelectorAll('.main-container tbody').forEach(tbody => tbody.innerHTML = '');
                for (const [tableId, teeth] of Object.entries(toothData)) { 
                    const tableBody = page.querySelector(`.${tableId} tbody`);
                    teeth.forEach(tooth => {
                        const proceduresForTooth = chartData.dentalProcedures[tooth.id] || [];
                        const firstEntry = proceduresForTooth.length > 0 ? proceduresForTooth[0] : { procedure: '0', notes: '' };
                        const mainRow = createMainRow(tooth, firstEntry.notes, [firstEntry.procedure]);
                        tableBody.appendChild(mainRow);
                        
                        if (proceduresForTooth.length > 1) {
                            let lastRow = mainRow;
                            for (let i = 1; i < proceduresForTooth.length; i++) {
                                const entry = proceduresForTooth[i];
                                const newSubRow = createSubRow(tooth.id, entry.procedure);
                                newSubRow.querySelector('.notes').value = entry.notes;
                                const typeCell = findGoverningTypeCell(lastRow);
                                if (typeCell) typeCell.rowSpan += 1;
                                lastRow.insertAdjacentElement('afterend', newSubRow);
                                lastRow = newSubRow;
                            }
                        }
                    });
                }
                
                updateAdditionalOptions();
                updateDynamicTitle();
                page.querySelectorAll('.main-container tr').forEach(row => {
                    const select = row.querySelector('select');
                    if(select) handleSelectionChange(select);
                });
                isChartDirty = false;

            } catch (err) {
                alert('차트 파일을 불러오는 데 실패했습니다. 파일 형식을 확인해 주세요.');
                console.error("Error loading or parsing JSON file:", err);
            }
        };
        reader.readAsText(file);
    }
    
    // --- 이벤트 리스너 부착 ---
    page.addEventListener('change', (e) => {
        const target = e.target;
        if (target.matches('.procedure-select, .additional-tbody select')) {
            handleSelectionChange(target);
        }
    });

    page.addEventListener('input', (e) => {
        const target = e.target;
        isChartDirty = true;
        if (target.matches('.notes')) {
            updateRowHighlight(target.closest('tr'));
        }
        if (target.matches('#patient-weight-calc')) {
            updateAdditionalOptions();
        }
        if (target.matches('#patient-name-calc, #visit-date-calc')) {
            updateDynamicTitle();
        }
    });

    page.addEventListener('click', (e) => {
        const target = e.target;
        if (target.matches('.add-btn')) {
            const mainRow = target.closest('tr');
            if (!mainRow) return;
            const typeCell = findGoverningTypeCell(mainRow);
            if (typeCell) typeCell.rowSpan += 1;
            let insertAfterRow = mainRow;
            while(insertAfterRow.nextElementSibling && insertAfterRow.nextElementSibling.dataset.permanentId === mainRow.dataset.permanentId) { 
                insertAfterRow = insertAfterRow.nextElementSibling; 
            }
            const newSubRow = createSubRow(mainRow.dataset.permanentId);
            insertAfterRow.insertAdjacentElement('afterend', newSubRow);
            isChartDirty = true;
        } 
        if (target.matches('.remove-btn')) { 
            const rowToRemove = target.closest('tr');
            if (!rowToRemove) return;
            const typeCell = findGoverningTypeCell(rowToRemove);
            if (typeCell && typeCell.rowSpan > 1) typeCell.rowSpan -= 1;
            rowToRemove.remove(); 
            updateTotalCost();
            isChartDirty = true;
        }
    });

    // --- 초기화 실행 ---
    page.querySelector('#visit-date-calc').valueAsDate = new Date();
    for (const [tableId, teeth] of Object.entries(toothData)) { 
        const tableBody = page.querySelector(`.${tableId} tbody`); 
        teeth.forEach(tooth => tableBody.appendChild(createMainRow(tooth))); 
    }
    populateAdditionalTreatments();
    updateAdditionalOptions();
    updateDynamicTitle();

    const btnContainer = page.closest('.content-panel').querySelector('.export-container');
    btnContainer.querySelector('.save-data-btn')?.addEventListener('click', saveData);
    btnContainer.querySelector('.load-data-btn')?.addEventListener('click', () => btnContainer.querySelector('.load-data-input').click());
    btnContainer.querySelector('.load-data-input')?.addEventListener('change', loadData);
    
    window.addEventListener('beforeunload', (event) => {
        if (isChartDirty) {
            event.preventDefault();
            event.returnValue = '';
        }
    });
}

function copyCalculatorDataTo(targetId) {
    const calculatorCaptureArea = document.querySelector('#Calculator-Page .capture-area');
    const targetPanel = document.getElementById(targetId);
    if (!targetPanel) return;
    const targetCaptureArea = targetPanel.querySelector('.capture-area');
    if (!targetCaptureArea) return;

    const clonedArea = calculatorCaptureArea.cloneNode(true);

    const sourceElements = calculatorCaptureArea.querySelectorAll('input, select');
    const clonedElements = clonedArea.querySelectorAll('input, select');
    sourceElements.forEach((sourceEl, index) => {
        const clonedEl = clonedElements[index];
        if (clonedEl) {
            if (sourceEl.tagName === 'SELECT') clonedEl.selectedIndex = sourceEl.selectedIndex;
            else if (sourceEl.type === 'checkbox' || sourceEl.type === 'radio') clonedEl.checked = sourceEl.checked;
            else clonedEl.value = sourceEl.value;
        }
    });
    
    const patientName = document.querySelector('#patient-name-calc').value || '고양이';
    const visitDateRaw = document.querySelector('#visit-date-calc').value;
    const visitDate = new Date(visitDateRaw);
    const formattedDate = visitDateRaw && !isNaN(visitDate.getTime()) ? `${visitDate.getFullYear()}년 ${visitDate.getMonth() + 1}월 ${visitDate.getDate()}일` : "오늘";

    if (targetId === 'content-estimate') {
        clonedArea.querySelector('.dynamic-chart-title').textContent = `📄 ${patientName}의 치과수술 예상 비용`;
        const totalCostContainer = clonedArea.querySelector('.total-cost-container');
        if (totalCostContainer) {
            totalCostContainer.querySelector('h2').textContent = '💰 전체 예상 비용 내역';
            totalCostContainer.querySelector('.total-row td:first-child').textContent = '총 예상 비용';
        }
        
        const summarySection = clonedArea.querySelector('.treatment-summary-section');
        if(summarySection) {
            const summaryTitle = summarySection.querySelector('.summary-title');
            if(summaryTitle) summaryTitle.innerHTML = `📊 ${patientName}의 예상 치료 요약 📊`;
        }

        clonedArea.querySelector('.patient-info-inputs')?.remove();
        
        targetCaptureArea.innerHTML = '';
        targetCaptureArea.appendChild(clonedArea);
        targetCaptureArea.insertAdjacentHTML('beforeend', `<div class="disclaimer-box"><h3>⚠️ 비용 안내 ⚠️</h3><p>본 예상 비용은 현재 상태를 바탕으로 한 추정치입니다.<br>치과 수술의 특성상, 마취 후 구강 전체에 대한 정밀 검사(치과 X-ray 및 탐침)를 통해 숨겨진 병변이 추가로 발견될 수 있습니다.<br>이 경우, 보호자와의 상담을 통해 치료 계획 및 비용이 조정될 수 있음을 미리 안내해 드립니다. 아이의 건강을 위한 최선의 결정을 함께하겠습니다.</p></div>`);
    } else if (targetId === 'content-guardian-report') {
        clonedArea.querySelector('.dynamic-chart-title').textContent = `❤️ ${formattedDate} 우리 ${patientName}의 치과 치료 기록 ❤️`;
        clonedArea.querySelector('.patient-info-inputs')?.remove();
        targetCaptureArea.innerHTML = '';
        targetCaptureArea.appendChild(clonedArea);
        targetCaptureArea.insertAdjacentHTML('beforeend', generateGuardianComments(clonedArea));
    }
}

function generateGuardianComments(clonedArea) {
    const careAdviceCategories = new Set();
    const careAdviceMap = {
        'GENERAL': '오늘 수술은 잘 마무리되었습니다! 마취에서 완전히 회복하고 편안해질 때까지 아이를 잘 지켜봐 주시고, 궁금한 점은 언제든 병원으로 문의해주세요.',
        'EXTRACTION': '발치 수술 부위가 잘 아물 때까지 약 2주간 딱딱한 간식이나 장난감은 피해주시고, 부드러운 음식 위주로 급여해 주시는 것이 좋습니다.',
        'PERIODONTAL': '잇몸 치료를 받은 부위는 앞으로 꾸준한 양치 관리가 재발 방지에 매우 중요합니다. 병원에서 안내드린 시점부터 부드럽게 칫솔질을 시작해주세요.',
        'RESIN': '레진으로 때운 부위는 완전히 굳는 데 시간이 걸립니다. 약 1주일간 단단한 것을 씹지 않도록 주의가 필요하며, 이후부터 해당 부위를 꼼꼼히 닦아주시면 오래 유지됩니다.',
        'MEDICATION': '처방된 내복약은 통증을 줄이고 감염을 예방하는 데 중요하므로, 정해진 시간과 용량을 꼭 지켜서 모두 복용시켜 주세요.',
        'RECHECK': '양치질 시작 시점과 다음 검진(리첵) 일정은 병원에서 별도로 안내해 드릴 예정입니다. 아이의 빠른 회복과 구강 건강 유지를 위해 꼭 지켜주시길 바랍니다.'
    };
    
    clonedArea.querySelectorAll('.procedure-select').forEach(select => {
        if(!select || select.value === '0' || select.value === 'disabled') return;
        const selectedOption = select.options[select.selectedIndex];
        const category = selectedOption?.dataset.category;
        
        if (category === '발치/제거' || category === '치아흡수병변') careAdviceCategories.add('EXTRACTION');
        if (category === '신경/보존 치료') careAdviceCategories.add('RESIN');
        if (category === '치주 치료') careAdviceCategories.add('PERIODONTAL');
    });
    
    const medicationSelect = clonedArea.querySelector('[data-item-id="medication"]');
    if (medicationSelect && medicationSelect.value !== '0') {
        careAdviceCategories.add('MEDICATION');
    }

    let careAdviceHTML = `<li>${careAdviceMap['GENERAL']}</li>`;
    if (careAdviceCategories.has('EXTRACTION')) careAdviceHTML += `<li>${careAdviceMap['EXTRACTION']}</li>`;
    if (careAdviceCategories.has('PERIODONTAL')) careAdviceHTML += `<li>${careAdviceMap['PERIODONTAL']}</li>`;
    if (careAdviceCategories.has('RESIN')) careAdviceHTML += `<li>${careAdviceMap['RESIN']}</li>`;
    if (careAdviceCategories.has('MEDICATION')) careAdviceHTML += `<li>${careAdviceMap['MEDICATION']}</li>`;
    careAdviceHTML += `<li>${careAdviceMap['RECHECK']}</li>`;

    return `<div class="guardian-comment-section"><h2>⭐ 우리 아이, 이렇게 관리해주세요! ⭐</h2><div class="comment-box"><h3>- 🩺 앞으로의 관리 안내</h3><ul>${careAdviceHTML}</ul></div><p class="thank-you-message">소중한 아이의 치과 수술을 저희 금호동물병원에 믿고 맡겨주셔서 다시 한번 진심으로 감사드립니다.</p></div>`;
}

function addExportListeners(pageSelector, type) {
    const page = document.querySelector(pageSelector);
    if (!page) return;
    const btnContainer = page.querySelector('.export-container');
    if (!btnContainer) return;

    const exportHandler = (exportFunc) => {
        const captureArea = page.querySelector('.capture-area');
        const patientInfoInputs = document.querySelector('#Calculator-Page .patient-info-inputs');
        if (patientInfoInputs) patientInfoInputs.style.display = 'none';
        
        html2canvas(captureArea, { scale: 2, windowWidth: captureArea.scrollWidth, windowHeight: captureArea.scrollHeight, useCORS: true }).then(canvas => {
            const patientName = document.querySelector('#patient-name-calc').value || '환자';
            const date = document.querySelector('#visit-date-calc').value || new Date().toISOString().split('T')[0];
            const fileName = `${patientName}_${date}_${type}`;
            exportFunc(canvas, fileName);
        }).finally(() => {
            if (patientInfoInputs) patientInfoInputs.style.display = 'flex';
        });
    };

    btnContainer.querySelector('.export-png-btn')?.addEventListener('click', () => {
        exportHandler((canvas, fileName) => {
            const link = document.createElement('a');
            link.download = fileName + '.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });

    btnContainer.querySelector('.export-pdf-btn')?.addEventListener('click', () => {
        exportHandler((canvas, fileName) => {
            const { jsPDF } = window.jspdf;
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const canvasAspectRatio = canvasWidth / canvasHeight;
            
            let renderWidth = pdfWidth;
            let renderHeight = pdfWidth / canvasAspectRatio;

            let heightLeft = renderHeight;
            let position = 0;

            if (renderHeight > pdfHeight) {
                pdf.addImage(imgData, 'PNG', 0, position, renderWidth, renderHeight);
                heightLeft -= pdfHeight;
                while (heightLeft > 0) {
                    position -= pdfHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, 'PNG', 0, position, renderWidth, renderHeight);
                    heightLeft -= pdfHeight;
                }
            } else {
                pdf.addImage(imgData, 'PNG', 0, 0, renderWidth, renderHeight);
            }
            
            pdf.save(fileName + '.pdf');
        });
    });
}

// --- 최종 애플리케이션 실행 ---
initCalculator();
setupPageNavigation();
addExportListeners('#Calculator-Page', '치과차트');
addExportListeners('#Estimate-Page', '예상비용');
addExportListeners('#GuardianReport-Page', '보호자용_치료내역');
