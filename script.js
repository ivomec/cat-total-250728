document.addEventListener('DOMContentLoaded', () => {
    const hospitalData = {
      "main": {
        "headerTitle": "💖 치과 특화 금호동물병원 💖",
        "headerSubtitle": "🦷 우리 아이들의 건강한 미소를 지켜주는 곳 🦷",
        "contact": { "phone": "062-383-7572" },
        "hours": {
          "title": "⏰ 진료시간 & 수술 안내",
          "surgeryNotice": "* 우리 아이들의 치과 수술에 최선을 다하고 회복에 힘쓰기 위해서 치과 수술은 매일 평일 오전 9시30분 한 아이씩만 진행됨을 양해 부탁 드립니다.",
          "times": [
            { "day": "평일", "time": "오전 9:30 ~ 오후 6:00" },
            { "day": "토요일", "time": "오전 9:30 ~ 오후 3:00" },
            { "day": "점심시간", "time": "오후 12:30 ~ 2:00 (평일, 토요일 동일)", "highlight": true },
            { "day": "휴무", "time": "빨간날은 쉬어요! (공휴일 휴무)", "isHoliday": true }
          ]
        },
        "parking": {
          "title": "🅿️ 주차 안내 (무료!)",
          "content": [
            { "label": "오전", "desc": "널널해요! 😊" },
            { "label": "오후", "desc": "자리가 없을 수도 있어요 😥" },
            { "label": "꿀팁🍯", "desc": "주차타워는 거의 항상 비어있어요! (다들 귀찮아서 주차를 안해요... 속닥속닥)", "highlight": true }
          ]
        },
        "pride": {
          "title": "✨ 고양이 치과, 왜 금호동물병원일까요? 🐈‍⬛",
          "points": [
            { "title": "최신 전문 장비 완비! 빵빵해요! 🚀", "items": [ "📸 <strong>치아 전용 X-ray (최신 덴츠플라이 센서):</strong> 최상의 화질을 자랑하는 최신 덴츠플라이 센서로 정확하게 진단해요.", "💎 <strong>브러쉬리스 모터 덴탈 유닛:</strong> 속도 조절이 가능해서 훨씬 정교하고 섬세한 치료가 가능해요.", "💧 <strong>피에조톰 수술기:</strong> 사람 성형외과 & 치과 대학병원에서 쓰는 장비로, 뼈 손상을 최소화하여 안전한 수술을 진행해요.", "🌬️ <strong>최신 호흡마취기:</strong> Ai가 아이의 호흡을 자동으로 감지하고 관리해 무호흡 상태를 방지하며 안전한 마취를 도와줘요.", "❤️‍🩹 <strong>최신호흡마취기와 연동되는 페이션트 모니터:</strong> 혈압, 심전도, 체온 등 모든 활력 징후를 마취기와 연동하여 실시간으로 감시하며 안전하게 수술해요.", "🔥 <strong>수의용 베어허거:</strong> 저온화상의 위험 없이 마취 중 아이의 체온을 가장 안전하게 유지하는 최신 체온 조절 장치예요.", "📡 <strong>광주 전남 최초 동물용 치과 CT 검사기 도입 예정:</strong> 더욱 정밀한 진단과 치료를 위해, 곧 만나요!" ] },
            { "title": "고양이 치과 진료, 경험치 MAX! 💪", "items": [ "❤️‍🩹 고양이 전발치 & 만성 구내염 치료", "💔 고양이 치아흡수 병변(FORL) 치료", "🦷 신경치료 & 치주치료 & VPT(신경보존)", "<br>이처럼 다양한 고난도 치료 케이스들은 <a href='https://blog.naver.com/kumhoanimal' target='_blank' style='color:#0277bd; font-weight:bold;'>병원 블로그</a>에서 직접 확인하실 수 있어요!" ] }
          ]
        },
        "notice": {
          "title": "🦷 꼭 읽어주세요! 안전한 치과 수술을 위한 안내 🦷",
          "items": [
            { "type": "text", "content": "<strong>치과 치료(수술)비는 예측이 힘들어요.</strong><br>사람과 달리 아이들은 입 안을 자세히 보여주지 않아요. 겉으로 보이는 것만으로는 치아 뿌리의 상태나 숨겨진 질병을 정확히 알 수 없습니다. 안전하게 마취한 후 치과 전용 엑스레이를 찍고 정밀 탐침 검사까지 마쳐야 비로소 아이의 구강 상태를 100% 파악할 수 있답니다. 따라서, 정확한 예상비용을 알려드릴 수 없는점, 너그러이 양해 부탁드립니다." },
            { "type": "text", "content": "<strong>장시간 마취의 위험성을 이해해주세요.</strong><br>치과 치료는 정교함을 요하는 작업이라 생각보다 시간이 오래 걸립니다. 기본적인 엑스레이 검사와 스케일링만으로도 중성화 수술과 비슷한 시간이 소요되며, 발치나 신경치료 등 추가 시술이 들어가면 마취 시간은 더 길어질 수밖에 없습니다. 치과 시술 자체는 위험성이 낮지만, 마취 시간이 길어지는 만큼 일반 수술보다 마취의 부담이나 위험은 더 높을 수 있습니다." },
            { "type": "text", "content": "<strong>안전을 위해, 수술 전 병원 방문은 필수예요.</strong><br>위와 같은 이유로, 아이의 안전을 위해 마취 전 검사는 선택이 아닌 필수입니다. 전화상으로 바로 수술 예약을 잡을 수는 없으며, 반드시 병원에 먼저 내원하시어 구강 상태 평가 및 건강검진(마취 전 검사)을 받아야 합니다. 검사 결과를 바탕으로 마취 위험성을 평가하고, 보호자님과 충분히 상의한 후에 안전하게 수술 날짜를 잡고 있습니다." },
            { "type": "sublist", "main": "<strong>부득이한 경우, 타병원 검사 결과도 인정해드려요.</strong><br>시간이나 거리 문제로 본원에서 검사가 힘든 경우, 타병원에서 검사를 진행하고 결과를 보내주셔도 좋습니다. 될수 있으면 아래 항목이 포함된 1개월 이내의 검사 결과여야만 수술 가능 여부를 판단에 도움이 됩니다.", "sublist": [ "간과 신장 기능 수치 (혈액화학검사)", "안전한 기관 삽관을 위한 기관 사이즈 평가", "혈압 이상 유무", "흉부 엑스레이 검사", "키트검사 : proBNP 키트검사(심장병) & FeLV(백혈병) & FIV(면역부전) 바이러스 검사" ] },
            { "type": "text", "content": "<strong>보호자님의 치료 의사를 미리 알려주세요.</strong><br>겉으로는 멀쩡해 보여도 검사 후에 치료가 필요한 치아가 발견될 수 있습니다. 만약 이런 치아가 발견되었을 때, 보호자님께 연락하여 동의를 구한 후 치료를 할지, 혹은 즉시 필요한 치료를 진행할지, 아니면 그냥 스케일링 만을 진행할지 를 마취 전에 꼭 저희에게 알려주셔야 합니다. 아이를 위한 최선의 결정을 함께 할 수 있도록 미리 소통해주세요!" }
          ]
        },
        "footer": { "title": "🚀 빠른 상담 & 예약 🚀", "kakaoLink": "https://pf.kakao.com/_jiICK/chat", "telLink": "tel:062-383-7572" }
      },
      "procedure": [
          { "step": "1", "title": "입원 및 수액 처치", "content": "<strong>🏥 안전한 마취와 빠른 회복 준비</strong><br>수술 전 충분한 수액을 맞으며 몸의 수분과 전해질 균형을 맞추고, 산소방에서 편안하게 산소를 공급받으며 최상의 컨디션으로 수술을 준비합니다." },
          { "step": "2", "title": "마취 및 치과 검사", "content": "<strong>😴 안전한 호흡마취</strong><br>아이의 상태에 맞는 마취 프로토콜을 적용하여 안전하게 마취를 유도하고, 가장 안정적인 호흡마취로 전환합니다. 수술 내내 최신 모니터링 장비로 모든 활력 징후를 1:1로 집중 감시합니다.<br><br><strong>📸 전체 치과 방사선 검사</strong><br>눈으로 보이지 않는 치아 뿌리, 잇몸뼈(치조골)의 숨겨진 질병까지 정확히 진단하기 위해 모든 치아에 대한 방사선 촬영을 진행합니다." },
          { "step": "3", "title": "정밀 구강 검사 및 치료", "content": "<strong>🔎 치주 탐침 검사 (프로빙)</strong><br>방사선 사진을 바탕으로 치아 하나하나의 치주낭 깊이, 출혈, 흔들림 등을 정밀하게 검사하여 치료 계획을 최종 확정합니다.<br><br><strong>🦷 맞춤형 치과 치료</strong><br>스케일링과 폴리싱을 기본으로, 검사 결과에 따라 발치, 신경치료, 잇몸치료 등 보호자님과 상의된 맞춤 치료를 진행합니다." },
          { "step": "4", "title": "회복 및 퇴원", "content": "<strong>💖 세심한 회복 케어</strong><br>모든 치료가 끝나면, 전담 스텝이 아이가 완전히 의식을 회복하고 안정될 때까지 곁에서 세심하게 돌봅니다.<br><br><strong>🏡 귀가 및 홈케어 안내</strong><br>아이가 충분히 회복되면 보호자님께 연락을 드립니다. 퇴원 시 수술 후 주의사항과 홈케어 방법을 자세히 안내해 드립니다." },
          { "step": "5", "title": "수술 후 검진 (리체크)", "content": "<strong>👩‍⚕️ 예후 확인</strong><br>발치나 잇몸 수술을 한 경우, 보통 1~2주 뒤에 내원하여 수술 부위가 잘 아물고 있는지 확인하는 검진(리체크)을 받게 됩니다. 건강한 구강 상태를 오래 유지하기 위한 마지막 단계입니다." }
      ],
      "healthCheck": { "headerTitle": "🩺✨ 우리 냥이 맞춤! 안심 건강검진 ✨🩺", "headerSubtitle": "💖 안전한 마취를 위한 첫걸음! 🌈 연령별 맞춤 플랜을 확인하세요! 💖", "youtubeLink": "https://www.youtube.com/watch?v=-EjT1oZrvJA", "preNotice": { "title": "병원 방문 전, 보호자님 필독! 📢", "content": "혹시 우리 아이가 많이 예민하거나 긴장을 많이 하나요? 😿 그렇다면 내원하시기 전에 미리 병원에 연락주셔서 **안정제(가바펜틴 등)를 처방**받아 방문 2~3시간 전에 복용하고 오시는 것을 강력히 추천드려요! 아이의 스트레스를 크게 줄여줄 수 있어, 아이와 의료진 모두에게 훨씬 편안하고 안전한 검사 환경이 만들어진답니다. **특히 예민하거나 사나운 성격의 고양이라면 선택이 아닌 필수**라는 점, 꼭 기억해주세요! 🙏" }, "packages": [ { "borderColor": "#4db6ac", "titleColor": "#00796b", "title": "🍼 아깽이 기본 플랜 🍼", "items": [ "🩸 혈구검사 <small>빈혈, 염증, 혈소판</small>", "🧪 혈액 화학 검사 (7종) <small>간, 콩팥, 혈당 등</small>", "⚡️ 전해질 검사 <small>몸 속 수분 밸런스</small>", "🩻 흉부 X-RAY (3컷) <small>심장, 폐 모양</small>", "🩺 혈압 체크 <small>기본 순환기 상태</small>" ], "originalPrice": 244600, "discountPrice": 160000 }, { "borderColor": "#ffd54f", "titleColor": "#f9a825", "title": "💖 아깽이 안심+ 플랜 💖", "items": [ "🩸 혈구검사", "🧪 혈액 화학 검사 (7종)", "⚡️ 전해질 검사", "🩻 흉부 X-RAY (3컷)", "🩺 혈압 체크", "❤️ proBNP 키트 <small>숨어있는 심장병 조기 진단!</small>" ], "originalPrice": 299600, "discountPrice": 199000 }, { "borderColor": "#ff8a65", "titleColor": "#d84315", "title": "💪 7세 미만 으른냥 플랜 💪", "items": [ "🩸 혈구 & 화학검사 (12종)", "🔥 SAA <small>몸 속 급성 염증 정밀 체크</small>", "🩻 X-RAY (흉부3+복부2)", "🩺 혈압 체크", "❤️ proBNP 키트", "🦠 전염병 키트 <small>사상충+백혈병+면역결핍</small>" ], "originalPrice": 428600, "discountPrice": 299000 }, { "borderColor": "#ba68c8", "titleColor": "#7b1fa2", "title": "👑 7세+ 어르신냥 VIP 플랜 👑", "items": [ "🩸 혈구 & 화학검사 (12종)", "🔥 SAA", "🩺 혈압 체크", "❤️ proBNP 키트", "🦠 전염병 키트", "🦋 SDMA & T4 <small>신장/갑상선 정밀 평가</small>", "🐾 fPL 키트 <small>췌장염 수치 체크</small>", "🩻 X-RAY (흉부3+복부2)" ], "originalPrice": 583600, "discountPrice": 449000 } ], "explanation": { "title": "💡 마취 전 건강검진, 왜 꼭 필요할까요? 💡", "content": [ "전신 마취는 마치 <strong>'비행기 여행 ✈️'</strong>과 같아요. 여행 전에 <strong>날씨를 꼭! 체크 🌤️</strong>하는 것처럼, 마취 전 건강검진은 우리 아이의 몸 상태를 미리 확인해서 가장 안전한 여행(마취) 계획을 세우는 과정이랍니다.", "겉으로는 보이지 않는 장기의 이상이나 숨겨진 질병을 미리 발견해서, 마취 중 발생할 수 있는 위험을 최소화하고 <strong>우리 냥이에게 가장 안전한 방법을 찾기 위한 💖사랑의 과정💖</strong>이에요.", "<br>🚨 <strong>심장 관련 추가 검사 안내</strong><br>만약 검사 중 proBNP 키트에서 양성 반응이 나오거나, 심잡음이 들리거나, 엑스레이에서 심장 크기가 커 보이는 등 심장병이 의심되는 소견이 있을 경우, 보다 정밀한 심근 손상 수치 확인을 위해 <strong>TNI 검사(비용: 55,000원)</strong>가 추가될 수 있습니다. 이는 더 안전한 마취를 위한 필수 과정이오니 보호자님의 깊은 양해를 부탁드립니다." ] } },
      "scaling": { 
          "headerTitle": "🦷✨ 우리 냥냥이 반짝반짝 스케일링 ✨🦷", 
          "headerSubtitle": "💖 사랑과 정성을 담아! 🌈 화려한 혜택가로 안내합니다! 💖", 
          "preNotice": { "title": "더 안전한 마취를 위한 꿀팁! 🍯", "content": "수술 당일, 아이가 병원으로 이동하고 낯선 환경에 적응하는 동안 불안감을 느끼면 스트레스 호르몬이 분비될 수 있어요. 😥 이 스트레스는 마취에 영향을 줄 수 있답니다. 만약 내원 전에 미리 **안정제를 처방받아 먹이고 오시면, 아이의 긴장이 완화되어 더 적은 용량의 마취제로도 안정적인 마취가 가능**해져요. 이는 곧 우리 아이의 마취가 한층 더 안전해진다는 의미! ✨ 더 편안하고 안전한 치료를 위한 작은 배려, 함께해요! 🥰" }, 
          "packages": [ 
              { "borderColor": "#ff7eb9", "titleColor": "#ff7eb9", "title": "🐱 5kg 미만 냥이 🐱", "items": [ "💧 술 전 산소 처치", "💧 술 전 수액 처치", "💉 도입 마취(프로포폴)", "😴 호흡 마취 Isoflurane <small>(마무리까지)</small>", "📸 전체 치과 X-ray <small>(10장 이상 꼼꼼 촬영!)</small>", "🧼 스케일링", "💎 폴리싱 – Airflow 시술 <small>(반짝반짝 광택 마무리!)" ], "originalPrice": 512000, "discountPrice": 239000 }, 
              { "borderColor": "#ffc107", "titleColor": "#ffc107", "title": "🐈 5kg ~ 10kg 미만 냥이 🐈", "items": [ "💧 술 전 산소 처치", "💧 술 전 수액 처치", "💉 도입 마취(프로포폴)", "😴 호흡 마취 Isoflurane <small>(마무리까지)</small>", "📸 전체 치과 X-ray <small>(10장 이상 꼼꼼 촬영!)</small>", "🧼 스케일링", "💎 폴리싱 – Airflow 시술 <small>(반짝반짝 광택 마무리!)" ], "originalPrice": 603000, "discountPrice": 299000 }, 
              { "borderColor": "#20c997", "titleColor": "#20c997", "title": "🐈‍⬛ 10kg ~ 15kg 미만 냥이 🐈‍⬛", "items": [ "💧 술 전 산소 처치", "💧 술 전 수액 처치", "💉 도입 마취(프로포폴)", "😴 호흡 마취 Isoflurane <small>(마무리까지)</small>", "📸 전체 치과 X-ray <small>(10장 이상 꼼꼼 촬영!)</small>", "🧼 스케일링", "💎 폴리싱 – Airflow 시술 <small>(반짝반짝 광택 마무리!)" ], "originalPrice": 704000, "discountPrice": 389000 } 
          ],
          "anesthesiaOnlyPackages": {
            "title": "🦷 마취 & X-ray ONLY 패키지 🦷 (스케일링/폴리싱 미포함)",
            "packages": [
                { "borderColor": "#81c7f5", "titleColor": "#1976d2", "title": "👩‍⚕️ 5kg 미만 냥이", "items": ["산소처치", "수액처치", "도입마취(프로포폴)", "호흡마취(Isoflurane)", "전체 치아 엑스레이"], "price": 189000 },
                { "borderColor": "#a092ed", "titleColor": "#5e35b1", "title": "🧑‍⚕️ 5kg ~ 10kg 미만 냥이", "items": ["산소처치", "수액처치", "도입마취(프로포폴)", "호흡마취(Isoflurane)", "전체 치아 엑스레이"], "price": 239000 },
                { "borderColor": "#66a6ff", "titleColor": "#0d47a1", "title": "👨‍⚕️ 10kg ~ 15kg 미만 냥이", "items": ["산소처치", "수액처치", "도입마취(프로포폴)", "호흡마취(Isoflurane)", "전체 치아 엑스레이"], "price": 319000 }
            ]
          },
          "explanation": { "title": "💡 필독! 혜택 적용 비용 안내 💡", "content": [ "저희 금호동물병원에서는 아이의 <strong>안전을 💖최우선💖</strong>으로 생각해요. 그래서 최근 <strong>✅ 저희 병원에서 직접 마취 전 혈액검사</strong>를 진행해서, 아이의 건강 상태를 저희 의료진이 완벽하게 파악하고 있는 경우! 감사의 마음을 담아 <strong>👑혜택가👑</strong>를 적용해 드리고 있답니다.", "다른 병원에서 검사를 받으셨거나 사정상 검사를 못 하셨어도 괜찮아요! 물론 안전한 치과 치료가 가능합니다. 다만, 외부 데이터를 다시 검토하고 저희 시스템에 맞게 적용하는 과정이 필요해서 정상 비용으로 진행되는 점(타병원 검사 시 10만원 추가), 보호자님의 너른 양해를 부탁드려요. 🙏", "<strong>🚨 잠깐!</strong> 안내된 비용은 스케일링과 기본 처치 비용이에요. 아이의 구강 상태에 따라 발치, 신경치료, 약 처방 등 추가 치료가 필요할 수 있어요. 이 경우, 꼭! <strong>보호자님과 충분히 상의 후 진행</strong>하니 걱정 마세요! 😉" ] } 
      },
      "surgery": { "headerTitle": "🦷😿 우리 냥이 아픈 치아 수술 비용 😿🦷", "headerSubtitle": "❤️ 아이의 고통을 덜어주는 치료 비용을 투명하게 안내해요 ❤️", "costs": [ { "id": "card-basic-extraction", "borderColor": "#a5d8ff", "titleColor": "#1971c2", "title": "🦷 기본 발치", "description": "잇몸병으로 인해 이미 많이 흔들리는 치아를 잇몸 절개 없이 제거합니다.", "prices": [{ "label": "🦷 뿌리 1개", "value": 22000 }, { "label": "🦷 뿌리 2개", "value": 66000 }, { "label": "🦷 고양이 대구치(M1)", "value": 88000 }] }, { "id": "card-surgical-extraction", "borderColor": "#ffc078", "titleColor": "#d9480f", "title": "💪 수술 발치", "description": "아직 단단히 박혀있는 치아를 잇몸 절개 및 봉합을 통해 안전하게 제거하는 전문적인 수술입니다.", "prices": [{ "label": "🔪 뿌리 1개", "value": 44000 }, { "label": "🔪 뿌리 2개", "value": 120000 }, { "label": "🔪 고양이 대구치(M1)", "value": 165000 }, { "label": "🔪 열육치(PM4)", "value": 220000 }] }, { "id": "card-canine-extraction", "borderColor": "#4dd0e1", "titleColor": "#00838f", "title": "😼 송곳니 수술 발치", "description": "길고 튼튼한 송곳니는 정교한 수술적 접근이 필요합니다. 턱 구조에 따라 난이도가 달라집니다.", "prices": [{ "label": "😼 상악 (위턱) 송곳니", "value": 220000 }, { "label": "😼 하악 (아래턱) 송곳니", "value": 270000 }] }, { "id": "card-deciduous-extraction", "borderColor": "#b39ddb", "titleColor": "#512da8", "title": "🍼 유치 발치", "description": "제때 빠지지 않고 남아 문제를 일으키는 유치를 제거합니다.", "prices": [{ "label": "🍼 일반 유치", "value": 22000 }, { "label": "🍼 유치 송곳니 (X-ray 포함)", "value": 33000 }, { "label": "🍼 유치 송곳니 (수술 발치)", "value": 66000 }] }, { "id": "card-forl-extraction", "borderColor": "#f06292", "titleColor": "#c2185b", "title": "💔 치아흡수병변(FORL) 발치", "description": "치아가 녹아내리는 병변으로, 상태에 따라 치관만 제거하거나 뿌리까지 모두 제거합니다.", "prices": [{ "label": "💔 치관 절제술", "value": 44000 }, { "label": "💔 흡수치근 제거 (1개)", "value": 88000 }, { "label": "💔 흡수치근 제거 (2개)", "value": 140000 }] }, { "id": "card-root-remains-extraction", "borderColor": "#9ccc65", "titleColor": "#558b2f", "title": "🔍 잔존치근 제거", "description": "과거 발치 후 남겨졌거나 부러진 치아의 뿌리를 찾아 제거하는 정밀한 수술입니다.", "prices": [{ "label": "🔍 뿌리 1개", "value": 77000 }, { "label": "🔍 뿌리 2개", "value": 120000 }, { "label": "🔍 송곳니 잔존치근", "value": "25~30만원" }] }, { "id": "card-etc-surgery", "borderColor": "#78909c", "titleColor": "#37474f", "title": "🛠️ 기타 수술 및 처치", "description": "잇몸 종양이나 낭종 제거, 조직검사 등 추가적인 외과적 처치입니다.", "prices": [{ "label": "🍑 잇몸 종양 제거 (<1cm)", "value": 110000 }, { "label": " cysts 제거술", "value": 280000 }, { "label": "🔬 조직검사 (1 site)", "value": 170000 }] } ], "explanation": { "title": "💡 꼭! 확인해주세요! '기본' vs '수술' 발치 💡", "content": [ "<strong>기본 발치 (쏙!) 😿</strong><br>잇몸병으로 치아가 이미 <strong>많이많이 흔들릴 때!</strong> 잇몸 절개 없이 쏙~ 뽑아요. (봉합이 필요하면 비용이 추가될 수 있어요!)", "<strong>수술 발치 (샥!) 💪</strong><br>치아 뿌리가 아직 <strong>잇몸뼈에 단단히 박혀있을 때!</strong> 잇몸을 열고 안전하게 조각내어 제거한 뒤, 꼼꼼하게 봉합까지 하는 전문적인 과정이에요." ] } },
      "addons": { "headerTitle": "💊 우리 냥이 회복을 돕는 케어 비용 💊", "headerSubtitle": "💖 아프지 않게, 더 빨리 나을 수 있도록! 사랑의 추가 처치 안내 💖", "costs": [ { "borderColor": "#ffa726", "titleColor": "#f57c00", "title": "😴 마취 관련 처치", "description": "수술이 길어지거나, 아이 상태에 따라 더 안전한 마취를 유지하기 위한 추가적인 관리 비용입니다.", "prices": [{ "label": "⏰ 마취 시간 연장 (30분당)", "value": "45,000원~" }, { "label": "📍 국소 마취 (부위당)", "value": "10,000원~" }, { "label": "💉 알팍산 도입마취 변경", "value": "33,000원~" }] }, { "borderColor": "#ef5350", "titleColor": "#c62828", "title": "🪄 통증 관리 처치", "description": "수술 직후부터 집에 가서까지, 우리 냥이가 아프지 않도록 통증을 효과적으로 관리해주는 마법 같은 처치들이에요.", "prices": [{ "label": "❤️‍🩹 마약성 진통 주사", "value": "20,000원~" }, { "label": "🕒 24시간 지속 진통 주사", "value": "15,000원~" }, { "label": "🩹 마약성 진통 패치", "value": "40,000원~" }] }, { "borderColor": "#66bb6a", "titleColor": "#2e7d32", "title": "🚀 빠른 회복 부스터", "description": "감염 예방, 염증 완화, 세포 재생 촉진! 우리 냥이가 에너지를 되찾고 빨리 일상으로 돌아가도록 돕는 부스터 처치예요.", "prices": [{ "label": "💉 항생/소염 주사 (일반)", "value": "11,000원~" }, { "label": "🗓️ 항생 주사 (1주 지속)", "value": "15,000원~" }, { "label": "⚡️ 레이저 치료 (부위당)", "value": "20,000원~" }, { "label": "✨ 불소 도포", "value": "35,000원~" }] }, { "borderColor": "#26c6da", "titleColor": "#00838f", "title": "🏡 홈케어 용품", "description": "집에 가서도 집사님의 사랑으로 케어할 수 있도록! 안전과 회복을 위한 필수 아이템들이에요.", "prices": [{ "label": "💊 내복약 (3일분)", "value": 9900 }, { "label": "💊 내복약 (3일분/캡슐)", "value": 13200 }, { "label": "💊 내복약 (7일분)", "value": 23100 }, { "label": "💊 내복약 (7일분/캡슐)", "value": 28600 }, { "label": "💧 액상 진통제(1ml 당)", "value": "8,000원~" }, { "label": "칙- 구강 소독 스프레이", "value": 10000 }, { "label": "🧴 구강 항생/소염 연고", "value": 15000 }, {"label": "🌿 파라돈 겔", "value": 25000}, { "label": "🦠 구강 유산균", "value": 50000 }, { "label": "👑 넥카라", "value": "8,000원~" }] } ], "explanation": { "title": "💡 추가 처치는 왜 필요할까요? 🤔", "content": [ "우리 냥이들은 <strong>\"나 아파요😿\" 라고 말을 못하고 꾹~ 참는 습성</strong>이 있어요. 그래서 미리 통증을 관리해주는 건 아이의 고통을 덜어주는 <strong>가장 큰 사랑이자 배려</strong>랍니다.💖", "또, 항생제나 레이저, 소독 용품들은 수술 후 생길 수 있는 <strong>나쁜 균들을 막아주고 🦠 회복 속도를 높여서⚡️</strong> 아이가 빨리 캣타워로 점프! 할 수 있게 도와줘요!", "저희 병원은 아이의 상태를 꼼꼼히 살펴, <strong>정말 꼭! 필요한 처치만 골라서 보호자님과 상의</strong>드릴 것을 약속해요.🤙" ] } },
      "nerve": { "headerTitle": "❤️‍🩹 신경 및 보존 치료 ❤️‍🩹", "headerSubtitle": "무조건 뽑지 않아요! 💪 소중한 치아를 지켜주는 다양한 치료 안내", "costs": [ { "borderColor": "#ffc078", "titleColor": "#f76707", "title": "✨ 살아있는 신경 살리기! (VPT)", "description": "<strong>⏳ 48시간 골든타임! ⏳</strong><br>치아가 부러진 직후, 아직 신경이 살아있을 때만 가능해요! 오염된 신경만 살짝 걷어내고 🩹 특수 보호 약품으로 코팅해서 치아의 생명력을 지켜준답니다.<span style=\"display:block;font-size:.9em;color:#e64980;font-weight:700;margin-top:10px;text-align:center\">🚨 레진 충전 비용은 별도예요!</span>", "prices": [{ "label": "🦷 송곳니 기준", "value": 450000 }] }, { "borderColor": "#ff87c2", "titleColor": "#c2255c", "title": "💔 아픈 신경 치료하기 (신경치료)", "description": "이미 신경이 죽었거나 🦠 세균에 감염되어 아야! 할 때 필요해요. 감염된 신경을 싹~ 제거하고 깨끗하게 소독한 뒤, 특수 재료로 채워서 통증의 원인을 없애고 치아는 보존해요.<span style=\"display:block;font-size:.9em;color:#e64980;font-weight:700;margin-top:10px;text-align:center\">🚨 레진 충전 비용은 별도예요!</span>", "prices": [{ "label": "🦷 송곳니 기준", "value": 770000 }] }, { "borderColor": "#4dabf7", "titleColor": "#1c7ed6", "title": "🎨 예쁘게 때워주기 (레진 치료)", "description": "충치나 마모, 살짝 깨진 부위를 치아 색과 비슷한 예쁜 재료로 메워서, 원래 모양과 기능을 되찾아주는 치료예요! 손상 범위와 치아에 따라 비용이 달라져요.", "prices": [ { "label": "✨ 쪼꼬만 손상", "value": 55000 }, { "label": "🦷 송곳니", "value": 110000 } ] }, { "borderColor": "#8ce99a", "titleColor": "#2f9e44", "title": "🌿 튼튼한 잇몸 만들기 (치주 치료)", "description": "잇몸병의 원인이 되는 세균막과 치석을 잇몸 속 깊은 곳까지 깨끗하게 제거하고, 잇몸 재생을 유도하는 전문적인 잇몸 관리입니다. (치아당 비용)", "prices": [{ "label": "💊 미노클린 연고", "value": 22000 }, { "label": "🛠️ 치근활택술", "value": 45000 }, { "label": "🦴 인공뼈 이식 등", "value": "별도문의" }] } ], "explanation": { "title": "💡 '신경치료' vs '치주치료', 뭐가 다른가요? 🧐", "content": [ "보호자님들께서 가장 헷갈려하시는 두 가지 치료! 알기 쉽게 설명해 드릴게요. 😉", "<br><strong>❤️‍🩹 신경치료 (Endodontics)</strong><br>이것은 **'치아 🦷 내부'**의 문제예요. 치아가 부러지거나 깊은 충치가 생겨 치아 속 신경(치수)이 감염되고 죽었을 때, 이 감염된 신경을 제거하고 그 공간을 생체 친화적인 재료로 채워넣는 치료랍니다. 즉, **'치아 자체를 살리는'** 치료라고 할 수 있죠. 나무의 썩은 속을 파내고 튼튼하게 보강하는 것과 비슷해요! 💪", "<br><strong>🌿 치주치료 (Periodontics)</strong><br>이것은 **'치아 주변 🌳'**의 문제예요. 치아를 지지하는 잇몸과 잇몸뼈에 염증이 생긴 것(치주염)을 치료하는 거예요. 치아와 잇몸 사이 깊숙한 곳의 치석을 제거하고(치근활택술), 염증 조직을 긁어내고, 심한 경우 뼈이식을 통해 무너진 잇몸뼈를 재건하기도 합니다. **'치아의 기반을 튼튼하게 다지는'** 치료라고 생각하시면 돼요. 집의 약해진 땅을 단단하게 보강하는 공사와 같답니다! 🏠" ] } }
    };

    try {
        populateAllTabs(hospitalData);
        initCalculator();
    } catch (error) {
        console.error('전체 탭 콘텐츠 처리 중 오류 발생:', error);
        alert('콘텐츠를 처리하는 데 실패했습니다. 코드에 문제가 없는지 확인해주세요.');
    }

    setupPageNavigation();
    addExportListeners('#Calculator-Page');
    addExportListeners('#Estimate-Page');
    addExportListeners('#GuardianReport-Page');
});

// ===================================================================================
// ============================= 탭 콘텐츠 생성 함수 =================================
// ===================================================================================
const formatPrice = (price, prefix = '💸 ') => {
    if (typeof price === 'number') { return `${prefix}${price.toLocaleString('ko-KR')}원`; }
    return `${price}`;
};

function populateAllTabs(data) {
    if (!data) return;
    // 1. 병원소개 탭
    if (data.main) {
        document.getElementById('main-header-title').innerHTML = data.main.headerTitle;
        document.getElementById('main-header-subtitle').innerHTML = data.main.headerSubtitle;
        const mainContent = document.getElementById('main-content-area');
        if (mainContent) {
            const hoursItemsHTML = data.main.hours.times.map(h => `<li style="${h.highlight ? 'color:#d81b60;font-weight:bold' : ''}${h.isHoliday ? 'color:red' : ''}"><strong>${h.day}:</strong> ${h.time}</li>`).join('');
            const prideItemsHTML = data.main.pride.points.map(p => `<div style="margin-bottom: 20px;"><strong style="font-size: 1.2em; color: #0277bd;">${p.title}</strong><ul style="list-style-type: '✔️ '; padding-left: 20px; margin-top: 10px;">${p.items.map(i => `<li style="margin-bottom: 8px;">${i}</li>`).join('')}</ul></div>`).join('');
            const noticeItemsHTML = data.main.notice.items.map(item => {
                if (item.type === 'text') return `<li>${item.content}</li>`;
                if (item.type === 'sublist') return `<li>${item.main}<ul class="sub-list">${item.sublist.map(subItem => `<li>${subItem}</li>`).join('')}</ul></li>`;
                return '';
            }).join('');
            const parkingItemsHTML = data.main.parking.content.map(p => `<li><strong ${p.highlight ? 'style="color:#d81b60;font-weight:bold"' : ''}>${p.label}:</strong> ${p.desc}</li>`).join('');
            mainContent.innerHTML = `<section class="info-section"><h2>🏥 병원 안내 🏥</h2><div class="info-grid"><div class="info-card" style="grid-column:1/-1; border-top:none;"><h3>${data.main.hours.title}</h3><p style="color:#d81b60; font-weight:bold; text-align:center;">${data.main.hours.surgeryNotice}</p><ul>${hoursItemsHTML}</ul></div></div></section><section class="pride-section" style="background:#e3f2fd; padding: 25px; border-radius: 20px; margin-top: 30px;"><h2 style="color:#0277bd">${data.main.pride.title}</h2>${prideItemsHTML}</section><section class="important-notice" style="margin-top: 30px;"><h2>${data.main.notice.title}</h2><ol>${noticeItemsHTML}</ol></section><section class="info-section" style="margin-top: 30px;"><div class="info-grid"><div class="info-card" style="grid-column:1/-1; border-top:none;"><h3>${data.main.parking.title}</h3><ul>${parkingItemsHTML}</ul><img src="https://raw.githubusercontent.com/ivomec/image/main/parking.png?raw=true" alt="주차장 안내" style="width: 100%; max-width: 800px; margin: 15px auto 0; display: block; border-radius: 10px;"></div></div></section><section class="info-section" style="margin-top: 30px;"><div class="info-grid"><div class="info-card" style="grid-column:1/-1; border-top:none; padding: 10px;"><h3>🗺️ 병원 오시는 길 🗺️</h3><p style="text-align:center; font-size:1.1em; font-weight:bold; margin-bottom:15px;">광주 서구 운천로 100, 1층 금호동물병원</p><img src="https://raw.githubusercontent.com/ivomec/image/main/map.jpg?raw=true" alt="병원 지도" style="width: 100%; border-radius: 15px;"></div></div></section>`;
            document.getElementById('main-footer').innerHTML = `<h2>${data.main.footer.title}</h2><a href="${data.main.footer.kakaoLink}" target="_blank" class="action-button kakao-btn">💬 카카오톡 채널로 상담하기</a><a href="${data.main.footer.telLink}" class="action-button tel-btn">📞 ${data.main.contact.phone}</a>`;
        }
    }
    // [수정됨] 2. 수술과정 탭 - 신규 UI 로직 적용
    if (data.procedure) {
        const timelineContainer = document.querySelector('#content-procedure .procedure-timeline');
        if (timelineContainer) {
            timelineContainer.innerHTML = data.procedure.map(item => `
                <div class="timeline-item" data-step="${item.step}">
                    <h3>${item.title}</h3>
                    <div class="timeline-content">${item.content}</div>
                </div>
            `).join('');
        }
    }
    // 3. 건강검진 탭
    if (data.healthCheck) {
        const d = data.healthCheck;
        document.getElementById('healthcheck-header-title').innerHTML = d.headerTitle;
        document.getElementById('healthcheck-header-subtitle').innerHTML = d.headerSubtitle;
        const healthCheckContent = document.getElementById('healthcheck-content-area');
        let contentHTML = `<a href="${d.youtubeLink}" target="_blank" class="action-button" style="background-color: #FF0000; margin-bottom: 25px;">🎥 마취 전 검사, 왜 중요할까?</a>`;
        if(d.preNotice) { contentHTML += `<div class="important-notice" id="healthcheck-pre-notice" style="border-left-color:#81d4fa; background:#e1f5fe; margin-top:30px;"><h2>${d.preNotice.title}</h2><p>${d.preNotice.content}</p></div>`; }
        if(d.packages) {
            contentHTML += `<div class="package-grid" id="healthcheck-packages" style="margin-top: 30px;">${d.packages.map(pkg => `<div class="package-card" style="border-top-color: ${pkg.borderColor};"><h3 style="color: ${pkg.titleColor};">${pkg.title}</h3><ul>${pkg.items.map(item => `<li>${item}</li>`).join('')}</ul><div class="price-wrapper"><span class="original-price">${formatPrice(pkg.originalPrice, '')}</span><span class="discount-price heartbeat">${formatPrice(pkg.discountPrice)}</span></div></div>`).join('')}</div>`;
        }
        healthCheckContent.innerHTML = contentHTML;
        document.getElementById('healthcheck-explanation-title').innerHTML = d.explanation.title;
        document.getElementById('healthcheck-explanation-content').innerHTML = d.explanation.content.map(p => `<p>${p}</p>`).join('');
    }
    // 4. 스케일링 탭
    if (data.scaling) {
        const d = data.scaling;
        document.getElementById('scaling-header-title').innerHTML = d.headerTitle;
        document.getElementById('scaling-header-subtitle').innerHTML = d.headerSubtitle;
        document.getElementById('scaling-pre-notice').innerHTML = `<h2>${d.preNotice.title}</h2><p>${d.preNotice.content}</p>`;
        document.getElementById('scaling-packages').innerHTML = d.packages.map(pkg => `<div class="package-card" style="border-top-color: ${pkg.borderColor};"><h3 style="color: ${pkg.titleColor};">${pkg.title}</h3><ul>${pkg.items.map(item => `<li>${item}</li>`).join('')}</ul><div class="price-wrapper"><span class="original-price">${formatPrice(pkg.originalPrice, '')}</span><span class="discount-price pulse">${formatPrice(pkg.discountPrice)}</span></div></div>`).join('');
        
        const scalingContainer = document.querySelector('#content-scaling .container');
        if (d.anesthesiaOnlyPackages && scalingContainer) {
            const anesthesiaSectionHTML = `
                <div class="info-section" style="margin-top: 40px; margin-bottom: 40px;">
                    <h2 style="font-size: 1.8em; font-weight: 700; margin-bottom: 25px; text-align: center; color: #555;">${d.anesthesiaOnlyPackages.title}</h2>
                    <div class="package-grid">
                        ${d.anesthesiaOnlyPackages.packages.map(pkg => `
                            <div class="package-card" style="border-top-color: ${pkg.borderColor};">
                                <h3 style="color: ${pkg.titleColor};">${pkg.title}</h3>
                                <ul>${pkg.items.map(item => `<li>✔️ ${item}</li>`).join('')}</ul>
                                <div class="price-wrapper">
                                    <span class="discount-price" style="font-size: 2.2em; color: #1976d2; animation: none;">${formatPrice(pkg.price)}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            const explanationBox = scalingContainer.querySelector('.explanation-box');
            if (explanationBox) {
                explanationBox.insertAdjacentHTML('beforebegin', anesthesiaSectionHTML);
            } else {
                scalingContainer.innerHTML += anesthesiaSectionHTML;
            }
        }

        document.getElementById('scaling-explanation-title').innerHTML = d.explanation.title;
        document.getElementById('scaling-explanation-content').innerHTML = d.explanation.content.map(p => `<p>${p}</p>`).join('');
    }
    // 5. 비용 카드 생성 함수 (수술, 추가처치, 신경치료 공용)
    const createCostCard = (d, content) => {
        const headerTitle = document.getElementById(`${content}-header-title`);
        const headerSubtitle = document.getElementById(`${content}-header-subtitle`);
        const costsContainer = document.getElementById(`${content}-costs`);
        const explanationTitle = document.getElementById(`${content}-explanation-title`);
        const explanationContent = document.getElementById(`${content}-explanation-content`);
        if(headerTitle) headerTitle.innerHTML = d.headerTitle;
        if(headerSubtitle) headerSubtitle.innerHTML = d.headerSubtitle;
        if(costsContainer) {
            costsContainer.innerHTML = d.costs.map(card => `<div class="cost-card" style="border-top-color: ${card.borderColor};"><h3 style="color: ${card.titleColor};">${card.title}</h3><p style="flex-grow:1; text-align: left; line-height:1.6;">${card.description || ''}</p><div class="price-wrapper" style="padding-top: 15px; margin-top: 15px;">${card.prices.map(p => `<div class="price-item"><span class="price-label">${p.label}</span><span class="price-value">${formatPrice(p.value, ' ')}</span></div>`).join('')}</div></div>`).join('');
        }
        if(explanationTitle && d.explanation) explanationTitle.innerHTML = d.explanation.title;
        if(explanationContent && d.explanation) explanationContent.innerHTML = d.explanation.content.map(p => `<p>${p}</p>`).join('');
    };
    if (data.surgery) createCostCard(data.surgery, 'surgery');
    if (data.addons) createCostCard(data.addons, 'addons');
    if (data.nerve) createCostCard(data.nerve, 'nerve');
}

/**
 * [수정됨] 페이지 네비게이션(탭) 기능을 설정합니다.
 * 데스크톱(상단)과 모바일(하단) 탭 메뉴를 모두 제어하며,
 * 하나의 탭을 클릭하면 다른 쪽 탭도 함께 활성화 상태가 동기화됩니다.
 * 계산기 관련 탭을 클릭했을 때 데이터 복사 로직을 포함합니다.
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

        const activeTabs = document.querySelectorAll(`.nav-tab[data-target="${targetId}"]`);
        activeTabs.forEach(tab => tab.classList.add('active'));
    }

    navTabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = tab.dataset.target;

            if (targetId === 'content-estimate' || targetId === 'content-guardian-report') {
                copyCalculatorDataTo(targetId);
            }
            
            showContent(targetId);
            window.scrollTo(0, 0);
        });
    });
    
    showContent('content-main');
}

// ===================================================================================
// ============================= 치료비 계산기 로직 (고양이용) ========================
// ===================================================================================
function initCalculator() {
    const page = document.querySelector('#Calculator-Page');
    if (!page) return;
    if (page.dataset.initialized === 'true') return;

    const CURRENT_VERSION = "3.2-cat-final";
    let isChartDirty = false;

    const toothData = {
        'table-upper-right': [ { id: '101', type: '앞니', group: 3 }, { id: '102', type: '' }, { id: '103', type: '' }, { id: '104', type: '송곳니', group: 1 }, { id: '106', type: '작은<br>어금니', group: 3 }, { id: '107', type: '' }, { id: '108', type: '열육치' }, { id: '109', type: '큰<br>어금니', group: 1 } ],
        'table-lower-right': [ { id: '401', type: '앞니', group: 3 }, { id: '402', type: '' }, { id: '403', type: '' }, { id: '404', type: '송곳니', group: 1 }, { id: '407', type: '작은<br>어금니', group: 2 }, { id: '408', type: '' }, { id: '409', type: '대구치', group: 1 } ],
        'table-upper-left': [ { id: '201', type: '앞니', group: 3 }, { id: '202', type: '' }, { id: '203', type: '' }, { id: '204', type: '송곳니', group: 1 }, { id: '206', type: '작은<br>어금니', group: 3 }, { id: '207', type: '' }, { id: '208', type: '열육치' }, { id: '209', type: '큰<br>어금니', group: 1 } ],
        'table-lower-left': [ { id: '301', type: '앞니', group: 3 }, { id: '302', type: '' }, { id: '303', type: '' }, { id: '304', type: '송곳니', group: 1 }, { id: '307', type: '작은<br>어금니', group: 2 }, { id: '308', type: '' }, { id: '309', type: '대구치', group: 1 } ]
    };
    const rootMapping = { '101':1,'102':1,'103':1,'104':1,'106':1,'107':2,'108':3,'109':1, '201':1,'202':1,'203':1,'204':1,'206':1,'207':2,'208':3,'209':1, '301':1,'302':1,'303':1,'304':1,'307':2,'308':2,'309':2, '401':1,'402':1,'403':1,'404':1,'407':2,'408':2,'409':2 };

    const procedureList = {
        '발치': { cat: '발치/제거', items: [
            { l: '기본-뿌리1', v: 22000, r: [1] }, { l: '기본-뿌리2', v: 66000, r: [2] }, { l: '기본-대구치/열육치', v: 88000, t: ['108', '208', '309', '409'] },
            { l: '수술-뿌리1', v: 44000, r: [1] }, { l: '수술-뿌리2', v: 120000, r: [2] }, { l: '수술-대구치(M1)', v: 165000, t: ['309', '409'] }, { l: '수술-열육치(PM4)', v: 220000, t: ['108', '208'] },
            { l: '수술-상악송곳니', v: 220000, t: ['104', '204'] }, { l: '수술-하악송곳니', v: 270000, t: ['304', '404'] },
            { l: '유치-일반', v: 22000, tag: 'deciduous' }, { l: '유치-송곳니(X-ray)', v: 33000, t: ['104', '204', '304', '404'], tag: 'deciduous' }, { l: '유치-송곳니(수술)', v: 66000, t: ['104', '204', '304', '404'], tag: 'deciduous' }
        ]},
        'FORL/기타': { cat: '발치/제거', items: [
            { l: 'FORL-치관절제술', v: 44000 }, { l: 'FORL-흡수치근제거(1)', v: 88000, r: [1] }, { l: 'FORL-흡수치근제거(2)', v: 140000, r: [2, 3] },
            { l: '잔존치근(1)', v: 77000, r: [1] }, { l: '잔존치근(2)', v: 120000, r: [2, 3] }, { l: '잔존치근(상악송곳니)', v: 250000, t: ['104', '204'] }, { l: '잔존치근(하악송곳니)', v: 300000, t: ['304', '404'] },
            { l: '잇몸종양(<1cm)', v: 110000 }, { l: '잇몸종양(>1cm)', v: 220000 }, { l: '조직검사', v: 170000 }, { l: '함치성낭제거', v: 220000 }
        ]},
        '보존/치주': { cat: '신경/보존 치료', items: [
            { l: 'VPT(송곳니)', v: 450000, t: ['104', '204', '304', '404'] }, { l: '신경치료(송곳니)', v: 770000, t: ['104', '204', '304', '404'] },
            { l: '레진(Small)', v: 55000 }, { l: '레진(송곳니)', v: 110000, t: ['104', '204', '304', '404'] }, { l: '미노클린', v: 22000 }, { l: '치근활택술', v: 45000 }
        ]},
        '모니터링': { cat: '모니터링', items: [{ l: '집중관리 요망', v: 0 }] }
    };
    
    function addOption(select, text, value, category = '', tag = '') {
        const opt = new Option(text, value);
        if (value === 'disabled') opt.disabled = true;
        else { opt.dataset.category = category; if (tag) opt.dataset.tag = tag; }
        select.add(opt);
    }
    
    function populateProcedureSelect(select, toothId) {
        select.innerHTML = '';
        const roots = rootMapping[toothId] || 1;
        addOption(select, '시술을 선택하세요', '0');
        for (const [title, data] of Object.entries(procedureList)) {
            addOption(select, `▼ ${title}`, 'disabled');
            data.items.forEach(item => {
                const rootMatch = !item.r || item.r.includes(roots);
                const toothMatch = !item.t || item.t.includes(toothId);
                if (rootMatch && toothMatch) {
                    addOption(select, item.l, item.v, data.cat, item.tag || '');
                }
            });
        }
    }
    
    function createMainRow(tooth, notes = '', procedures = []) {
        const row = document.createElement('tr');
        row.dataset.permanentId = tooth.id;
        let typeCell = (tooth.group) ? `<td rowspan="${tooth.group}" class="tooth-type">${tooth.type}</td>` : '';
        row.innerHTML = `${typeCell}<td class="tooth-id-cell">${tooth.id}</td><td><input type="text" class="notes" placeholder="특이사항 입력" value="${notes}"></td><td><select class="procedure-select"></select></td><td class="cost" data-cost="0">₩0</td><td><button class="add-btn">+</button></td>`;
        const mainSelect = row.querySelector('.procedure-select');
        populateProcedureSelect(mainSelect, tooth.id);
        mainSelect.value = procedures.length > 0 ? (procedures[0] || '0') : '0';
        return row;
    }
    
    function createSubRow(mainRowId, value = '0') {
        const newRow = document.createElement('tr');
        newRow.className = 'procedure-sub-row';
        newRow.dataset.permanentId = mainRowId;
        newRow.style.backgroundColor = '#FFFFE0'; // 연한 노란색 배경 적용
        newRow.innerHTML = `<td class="tooth-id-cell"></td><td><input type="text" class="notes" placeholder="특이사항 입력"></td><td><select class="procedure-select"></select></td><td class="cost" data-cost="0">₩0</td><td><button class="remove-btn">-</button></td>`;
        const subSelect = newRow.querySelector('.procedure-select');
        populateProcedureSelect(subSelect, mainRowId);
        subSelect.value = value || '0';
        return newRow;
    }
    
    function updateRowHighlight(row) {
        if (!row) return;
        const notes = row.querySelector('.notes');
        const select = row.querySelector('select');
        const selectedOption = select ? select.options[select.selectedIndex] : null;
        let isHighlighted = (notes && notes.value.trim() !== '') || (select && select.value !== '0' && select.value !== 'disabled');
        row.classList.toggle('row-highlight', isHighlighted);
        
        const idCell = row.querySelector('.tooth-id-cell');
        if (idCell) {
            idCell.style.backgroundColor = '';
            idCell.style.color = '';
            idCell.style.fontWeight = 'bold';
            if (isHighlighted && selectedOption) {
                const category = selectedOption.dataset.category;
                switch (category) {
                    case '발치/제거': idCell.style.backgroundColor = '#ffcdd2'; break;
                    case '신경/보존 치료': idCell.style.backgroundColor = '#b2dfdb'; break;
                    case '모니터링': 
                        idCell.style.backgroundColor = '#faff00';
                        idCell.style.color = '#333';
                        break;
                }
            }
        }
    }

    function handleSelectionChange(target) {
        const row = target.closest('tr');
        if (!row) return;
    
        let cost = 0;
        let selectedOption = null;

        if (target.matches('select')) {
            const value = target.value;
            cost = parseInt(value.split('|').pop(), 10) || 0;
            selectedOption = target.options[target.selectedIndex];

            target.style.color = '';
            target.style.fontWeight = '';
            if (selectedOption && selectedOption.dataset.category === '모니터링') {
                target.style.color = 'red';
                target.style.fontWeight = 'bold';
            }
        }
    
        if (row.classList.contains('additional-row')) {
            row.classList.toggle('selected-row', target.value !== '선택안함|0');
            const costCell = row.querySelector('.cost');
            if (costCell) {
                costCell.textContent = '₩' + cost.toLocaleString('ko-KR');
                costCell.dataset.cost = cost;
            }
        } else {
            const costCell = row.querySelector('.cost');
            if (costCell) {
                costCell.textContent = '₩' + cost.toLocaleString('ko-KR');
                costCell.dataset.cost = cost;
            }
            const idCell = row.querySelector('.tooth-id-cell');
            if (idCell) {
                const permanentId = row.dataset.permanentId;
                if (selectedOption && selectedOption.dataset.tag === 'deciduous') {
                    const firstDigit = permanentId[0];
                    const newFirstDigit = {'1':'5', '2':'6', '3':'7', '4':'8'}[firstDigit];
                    idCell.textContent = newFirstDigit + permanentId.substring(1);
                } else {
                    if (!row.classList.contains('procedure-sub-row')) {
                        idCell.textContent = permanentId;
                    }
                }
            }
        }
        updateRowHighlight(row);
        updateTotalCost();
        isChartDirty = true;
    }

    function findGoverningTypeCell(row) {
        let current = row;
        while (current) {
            const cell = current.querySelector('td.tooth-type');
            if (cell) return cell;
            current = current.previousElementSibling;
        }
        return null;
    }

    function populateAdditionalTreatments() {
        const leftContainer = document.getElementById('additional-treatments-left');
        const rightContainer = document.getElementById('additional-treatments-right');
        leftContainer.innerHTML = ''; rightContainer.innerHTML = '';

        const treatmentsByCategory = [
             { category: '🩺 기본/수액', items: [ { id: 'health-check', name: '🩺 건강검진' }, { id: 'scaling-package', name: '🦷 스케일링' }, { id: 'iv_additives', name: '💧 수액첨가제' } ], side: 'left' },
             { category: '💉 마취', items: [ { id: 'anesthesia_pre', name: '💉 도입마취 변경' }, { id: 'anesthesia_ext', name: '⏰ 마취 시간 연장' }, { id: 'local_anesthesia', name: '📍 국소마취' } ], side: 'left' },
             { category: '🩹 통증 관리', items: [ { id: 'pain_opioid_iv', name: '❤️‍🩹 마약성 진통 혈관주사' }, { id: 'pain_24hr_injection', name: '🕒 24시간 지속 진통 주사' }, { id: 'pain_cri', name: '😊 무통 주사' }, { id: 'pain_patch', name: '🩹 마약성 진통패치' } ], side: 'left' },
             { category: '🚀 회복 촉진', items: [ { id: 'recovery_injection', name: '💉 항생/소염 주사' }, { id: 'laser_therapy', name: '⚡️ 레이저 치료' }, { id: 'fluoride', name: '✨ 불소 도포' } ], side: 'right' },
             { category: '🏡 홈케어', items: [ { id: 'medication', name: '💊 내복약' }, { id: 'liquid_analgesic_nsaid', name: '💧 액상 진통제(NSID)'}, { id: 'hexidine_spray', name: '칙- 헥시딘 스프레이'}, { id: 'steroid_ointment', name: '🧴 구강항생 스테로이드연고'}, { id: 'coating_spray', name: '🛡️ 구강점막코팅스프레이'}, { id: 'paradont_gel', name: '🌿 파라돈 겔'}, { id: 'probiotics', name: '🦠 구강 유산균'}, { id: 'neck_collar', name: '👑 넥카라' } ], side: 'right' }
        ];

        const createTableForSide = (container) => {
            const table = document.createElement('table');
            table.innerHTML = `<colgroup><col style="width: 35%;"><col style="width: 45%;"><col style="width: 20%;"></colgroup><thead><tr><th>항목</th><th>선택</th><th>비용</th></tr></thead><tbody></tbody>`;
            container.appendChild(table);
            return table.querySelector('tbody');
        };

        const leftTbody = createTableForSide(leftContainer);
        const rightTbody = createTableForSide(rightContainer);
        
        treatmentsByCategory.forEach(categoryData => {
            const targetTbody = categoryData.side === 'left' ? leftTbody : rightTbody;
            const headerRow = targetTbody.insertRow();
            headerRow.innerHTML = `<td colspan="3" style="background-color: #f8f9fa; font-weight: bold;">${categoryData.category}</td>`;
            categoryData.items.forEach(item => {
                const row = targetTbody.insertRow();
                row.className = 'additional-row';
                row.innerHTML = `<td>${item.name}</td><td><select data-item-id="${item.id}"></select></td><td class="cost" data-cost="0">₩0</td>`;
            });
        });
        updateAdditionalOptions();
    }
    
    function updateAdditionalOptions() {
         const weight = parseFloat(page.querySelector('#patient-weight-calc').value) || 0;
         page.querySelectorAll('.additional-treatments-container select').forEach(control => {
            const itemId = control.dataset.itemId;
            const savedValue = control.value;
            control.innerHTML = '';
            addOption(control, '선택안함', '선택안함|0');
            const add = (label, value) => control.add(new Option(label, `${label}|${value}`));

            if (itemId === 'health-check' && weight > 0) { add('아깽이 기본 플랜', 160000); add('아깽이 안심+ 플랜', 199000); add('7세미만 으른냥 플랜', 299000); add('7세이상 어르신냥 VIP', 449000); }
            if (itemId === 'scaling-package' && weight > 0) {
                 let price = (weight < 5) ? 239000 : (weight < 10) ? 299000 : 389000; 
                 add(`스케일링 패키지`, price); 
                 add(`스케일링(타병원검사)`, price + 100000);
                 
                 let anesthesiaPrice = 0;
                 if (weight < 5) { anesthesiaPrice = 189000; } 
                 else if (weight >= 5 && weight < 10) { anesthesiaPrice = 239000; } 
                 else if (weight >= 10 && weight < 15) { anesthesiaPrice = 319000; }
                 if (anesthesiaPrice > 0) { add('치과마취 ONLY', anesthesiaPrice); }
            }
            if(itemId === 'iv_additives'){ add('수액첨가제(간기능 회복제)', 11000); }
            if (itemId === 'anesthesia_pre' && weight > 0) { let p = (weight<5)?33000:44000; add('도입마취 변경(알팍산)', p); }
            if (itemId === 'anesthesia_ext' && weight > 0) { let p = (weight<5)?45000:55000; for(let i=1; i<=8; i++) add(`마취연장(${i*30}분)`, p*i); }
            if(itemId === 'local_anesthesia' && weight > 0) { let p = [10000, 15000, 18000, 20000]; for(let i=1; i<=4; i++) add(`국소마취(${i}부위)`, p[i-1]); }
            if (itemId === 'pain_opioid_iv' && weight > 0) { add('마약성 진통 혈관주사', (weight<5)?20000:25000); }
            if (itemId === 'pain_24hr_injection' && weight > 0) { add('24시간 지속 진통 주사', (weight<5)?15000:20000); }
            if (itemId === 'pain_cri' && weight > 0) { add('무통 주사(CRI)', (weight<5)?40000:45000); }
            if(itemId === 'pain_patch'){ add('진통패치(5ug)', 40000); add('진통패치(10ug)', 50000); add('진통패치(20ug)', 60000); }
            if (itemId === 'recovery_injection' && weight > 0) { add('항생/소염 주사', 11000); add('1주 지속 항생 주사', 15000); }
            if (itemId === 'laser_therapy' && weight > 0) { add('레이저(국소)', 20000); add('레이저(전체)', 25000); }
            if(itemId === 'fluoride' && weight > 0) { add('불소 도포', 35000); }
            if (itemId === 'medication' && weight > 0) { let p=3300; add('3일분', p*3); add('3일분(캡슐)', p*3 + 3300); add('7일분', p*7); add('7일분(캡슐)', p*7 + 5500); }
            if(itemId === 'liquid_analgesic_nsaid' && weight > 0) { const pricePerMl = 8000; for(let d=1; d<=7; d++) { let totalMl = (weight * 0.2) + (d > 1 ? (d - 1) * weight * 0.1 : 0); let roundedMl = Math.ceil(totalMl * 10) / 10; let cost = roundedMl * pricePerMl; let roundedCost = Math.ceil(cost / 100) * 100; add(`${d}일 (${roundedMl}ml)`, roundedCost); } }
            if (itemId === 'hexidine_spray') add('헥시딘 스프레이', 10000);
            if (itemId === 'steroid_ointment') add('스테로이드 연고', 15000);
            if (itemId === 'coating_spray') add('구강점막코팅 스프레이', 33000);
            if (itemId === 'paradont_gel') add('파라돈 겔', 25000);
            if (itemId === 'probiotics') add('구강 유산균', 50000);
            if (itemId === 'neck_collar') { const collars = [ {s:8,p:8000}, {s:10,p:10000}, {s:13,p:12000}, {s:15,p:15000}, {s:17,p:17000}]; collars.forEach(c => add(`넥카라 ${c.s}cm`, c.p)); }
            
            if (Array.from(control.options).some(opt => opt.value === savedValue)) { control.value = savedValue; } 
            else { control.value = '선택안함|0'; }
            handleSelectionChange(control);
         });
    }

    function updateTotalCost() {
        let dentalSurgeryCost = 0;
        page.querySelectorAll('.main-container .cost').forEach(cell => dentalSurgeryCost += parseInt(cell.dataset.cost, 10) || 0);
        
        let healthCheckCost = 0;
        let scalingCost = 0;
        let additionalTreatmentCost = 0;

        page.querySelectorAll('.additional-treatments-container .cost').forEach(cell => {
            const row = cell.closest('tr');
            if (row && row.classList.contains('selected-row')) {
                const cost = parseInt(cell.dataset.cost, 10) || 0;
                const select = row.querySelector('select[data-item-id]');
                const itemId = select ? select.dataset.itemId : null;

                if (itemId === 'health-check') {
                    healthCheckCost += cost;
                } else if (itemId === 'scaling-package') {
                    scalingCost += cost;
                } else {
                    additionalTreatmentCost += cost;
                }
            }
        });

        const summaryTableBody = page.querySelector('.cost-summary-table tbody');
        const additionalCostRow = summaryTableBody.querySelector('tr:has(.additional-treatment-cost-display)');

        let healthCheckRow = summaryTableBody.querySelector('#health-check-cost-row');
        if (healthCheckCost > 0) {
            if (!healthCheckRow) {
                healthCheckRow = document.createElement('tr');
                healthCheckRow.id = 'health-check-cost-row';
                healthCheckRow.innerHTML = `<td>🩺 건강검진 비용</td><td class="health-check-cost-display"></td>`;
                summaryTableBody.insertBefore(healthCheckRow, additionalCostRow);
            }
            healthCheckRow.style.display = '';
            healthCheckRow.querySelector('.health-check-cost-display').textContent = '₩' + healthCheckCost.toLocaleString('ko-KR');
        } else if (healthCheckRow) {
            healthCheckRow.style.display = 'none';
        }

        let scalingRow = summaryTableBody.querySelector('#scaling-cost-row');
        if (scalingCost > 0) {
            if (!scalingRow) {
                scalingRow = document.createElement('tr');
                scalingRow.id = 'scaling-cost-row';
                scalingRow.innerHTML = `<td>🦷 스케일링 비용</td><td class="scaling-cost-display"></td>`;
                summaryTableBody.insertBefore(scalingRow, additionalCostRow);
            }
            scalingRow.style.display = '';
            scalingRow.querySelector('.scaling-cost-display').textContent = '₩' + scalingCost.toLocaleString('ko-KR');
        } else if (scalingRow) {
            scalingRow.style.display = 'none';
        }

        page.querySelector('.dental-surgery-cost-display').textContent = '₩' + dentalSurgeryCost.toLocaleString('ko-KR');
        page.querySelector('.additional-treatment-cost-display').textContent = '₩' + additionalTreatmentCost.toLocaleString('ko-KR');
        
        const totalCost = dentalSurgeryCost + healthCheckCost + scalingCost + additionalTreatmentCost;
        page.querySelector('.total-cost-display').textContent = '₩' + totalCost.toLocaleString('ko-KR');

        updateTreatmentSummary();
    }
    
    function updateTreatmentSummary() {
        const summarySection = page.querySelector('.treatment-summary-section');
        if (!summarySection) return;
        const patientName = page.querySelector('#patient-name-calc').value || '냥이';
        summarySection.querySelector('.summary-patient-name').textContent = patientName;
        const categories = { '발치/제거': 0, '신경/보존 치료': 0, '모니터링': 0 };
        page.querySelectorAll('.main-container .procedure-select').forEach(select => {
            const selectedOption = select.options[select.selectedIndex];
            if (!selectedOption || select.value === '0' || selectedOption.disabled) return;
            const category = selectedOption.dataset.category;
            if (category && categories.hasOwnProperty(category)) categories[category]++;
        });

        const extractionTbody = summarySection.querySelector('.extraction-summary-table tbody');
        extractionTbody.innerHTML = '<tr><td colspan="2" style="text-align:center;">해당 내역 없음</td></tr>';
        if (categories['발치/제거'] > 0) {
            extractionTbody.innerHTML = `<tr><td class="summary-item">발치/수술</td><td class="summary-count">${categories['발치/제거']} 개</td></tr>
                                         <tr class="summary-total"><td>총 개수</td><td class="summary-count">${categories['발치/제거']} 개</td></tr>`;
        }
        
        const treatmentTbody = summarySection.querySelector('.treatment-summary-table tbody');
        treatmentTbody.innerHTML = '<tr><td colspan="2" style="text-align:center;">해당 내역 없음</td></tr>';
        let totalTreatments = categories['신경/보존 치료'] + categories['모니터링'];
        if (totalTreatments > 0) {
            let treatmentHTML = '';
            if(categories['신경/보존 치료'] > 0) treatmentHTML += `<tr><td class="summary-item">보존/치주</td><td class="summary-count">${categories['신경/보존 치료']} 개</td></tr>`;
            if(categories['모니터링'] > 0) treatmentHTML += `<tr><td class="summary-item">모니터링</td><td class="summary-count">${categories['모니터링']} 개</td></tr>`;
            treatmentHTML += `<tr class="summary-total"><td>총 치료 개수</td><td class="summary-count">${totalTreatments} 개</td></tr>`;
            treatmentTbody.innerHTML = treatmentHTML;
        }
    }
    
    page.querySelector('#visit-date-calc').valueAsDate = new Date();
    for (const [tableId, teeth] of Object.entries(toothData)) {
        const tableBody = page.querySelector(`.${tableId} tbody`);
        teeth.forEach(tooth => tableBody.appendChild(createMainRow(tooth)));
    }
    
    populateAdditionalTreatments();
    updateTotalCost();

    page.addEventListener('change', (e) => { if (e.target.matches('.procedure-select, .additional-treatments-container select')) handleSelectionChange(e.target); });
    page.addEventListener('input', (e) => { isChartDirty = true; if (e.target.matches('.notes')) updateRowHighlight(e.target.closest('tr')); if (e.target.matches('#patient-weight-calc')) { updateAdditionalOptions(); updateTotalCost(); } if (e.target.matches('#patient-name-calc, #visit-date-calc')) page.querySelector('.dynamic-chart-title').textContent = `${page.querySelector('#visit-date-calc').value} ${page.querySelector('#patient-name-calc').value || '환자'}의 치과 차트`; });
    page.addEventListener('click', (e) => { 
        if (e.target.matches('.add-btn')) { 
            isChartDirty = true; 
            const mainRow = e.target.closest('tr');
            if(!mainRow) return;
            let insertAfterRow = mainRow;
            while(insertAfterRow.nextElementSibling && insertAfterRow.nextElementSibling.classList.contains('procedure-sub-row') && insertAfterRow.nextElementSibling.dataset.permanentId === mainRow.dataset.permanentId) {
                insertAfterRow = insertAfterRow.nextElementSibling;
            }
            const typeCell = findGoverningTypeCell(insertAfterRow); 
            if (typeCell) typeCell.rowSpan += 1; 
            const newSubRow = createSubRow(mainRow.dataset.permanentId); 
            insertAfterRow.insertAdjacentElement('afterend', newSubRow);
        } 
        if (e.target.matches('.remove-btn')) { 
            isChartDirty = true; 
            const rowToRemove = e.target.closest('tr');
            if (!rowToRemove) return;
            const typeCell = findGoverningTypeCell(rowToRemove); 
            if (typeCell && typeCell.rowSpan > 1) typeCell.rowSpan -= 1; 
            rowToRemove.remove(); 
            updateTotalCost(); 
        } 
    });
    
    const btnContainer = page.closest('.content-panel').querySelector('.export-container');

    window.addEventListener('beforeunload', (e) => {
        if (isChartDirty) { 
            e.preventDefault(); 
            e.returnValue = '변경사항이 저장되지 않을 수 있습니다.'; 
        }
    });

    page.dataset.initialized = 'true';
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
            if (sourceEl.tagName === 'SELECT') {
                clonedEl.selectedIndex = sourceEl.selectedIndex;
                if (sourceEl.style.color) {
                    clonedEl.style.color = sourceEl.style.color;
                    clonedEl.style.fontWeight = sourceEl.style.fontWeight;
                }
            }
            else if (sourceEl.type === 'checkbox' || sourceEl.type === 'radio') clonedEl.checked = sourceEl.checked;
            else clonedEl.value = sourceEl.value;
        }
    });

    clonedArea.querySelectorAll('.additional-treatments-container tr.additional-row').forEach(row => {
        const select = row.querySelector('select');
        if (select && select.value === '선택안함|0') {
            row.style.display = 'none';
        }
    });

    clonedArea.querySelectorAll('.additional-treatments-container td[colspan="3"]').forEach(header => {
        let allHidden = true;
        let currentRow = header.parentElement.nextElementSibling;
        while (currentRow && !currentRow.querySelector('td[colspan="3"]')) {
            if (currentRow.style.display !== 'none') {
                allHidden = false;
                break;
            }
            currentRow = currentRow.nextElementSibling;
        }
        if (allHidden) {
            header.parentElement.style.display = 'none';
        }
    });
    
    clonedArea.querySelectorAll('.main-container tr').forEach(row => {
        const select = row.querySelector('.procedure-select');
        const notes = row.querySelector('.notes');
        if (select && select.value === '0' && notes && notes.value.trim() === '') {
            row.style.display = 'none';
        }
    });
    
    targetCaptureArea.innerHTML = '';
    const toothFormulaImage = document.createElement('img');
    toothFormulaImage.src = "https://github.com/ivomec/image/blob/main/%EC%B9%98%EC%8B%9D.jpg?raw=true";
    toothFormulaImage.alt = "고양이 치아 모식도";
    toothFormulaImage.style.cssText = "width: 100%; max-width: 800px; margin: 0 auto 25px; display: block; border-radius: 15px;";
    targetCaptureArea.appendChild(toothFormulaImage);

    const patientName = document.querySelector('#patient-name-calc').value || '냥이';
    const visitDateRaw = document.querySelector('#visit-date-calc').value;
    const visitDate = new Date(visitDateRaw);
    const formattedDate = !isNaN(visitDate.getTime()) ? `${visitDate.getFullYear()}년 ${visitDate.getMonth() + 1}월 ${visitDate.getDate()}일` : "오늘";

    if (targetId === 'content-estimate') {
        clonedArea.querySelector('.dynamic-chart-title').textContent = `📄 ${patientName}의 치과수술 예상 비용`;
        const totalCostContainer = clonedArea.querySelector('.total-cost-container');
        if (totalCostContainer) { totalCostContainer.querySelector('h2').textContent = '💰 전체 예상 비용 내역'; totalCostContainer.querySelector('.total-row td:first-child').textContent = '총 예상 비용'; }
        clonedArea.querySelector('.treatment-summary-section .summary-title').innerHTML = `📊 ${patientName}의 예상 치료 요약 📊`;
        clonedArea.querySelector('.patient-info-inputs')?.remove();
        targetCaptureArea.appendChild(clonedArea);
        targetCaptureArea.insertAdjacentHTML('beforeend', `<div class="disclaimer-box"><h3>⚠️ 비용 안내 ⚠️</h3><p>본 예상 비용은 현재 상태를 바탕으로 한 추정치입니다.<br>치과 수술의 특성상, 마취 후 구강 전체에 대한 정밀 검사(치과 X-ray 및 탐침)를 통해 숨겨진 병변이 추가로 발견될 수 있습니다.<br>이 경우, 보호자와의 상담을 통해 치료 계획 및 비용이 조정될 수 있음을 미리 안내해 드립니다. 아이의 건강을 위한 최선의 결정을 함께하겠습니다.</p></div>`);
    } else if (targetId === 'content-guardian-report') {
        clonedArea.querySelector('.dynamic-chart-title').textContent = `❤️ ${formattedDate} 우리 ${patientName}의 치과 치료 기록 ❤️`;
        clonedArea.querySelector('.patient-info-inputs')?.remove();
        targetCaptureArea.appendChild(clonedArea);
        targetCaptureArea.insertAdjacentHTML('beforeend', generateGuardianComments(clonedArea));
    }
}


function generateGuardianComments(clonedArea) {
    const careAdviceCategories = new Set();
    const careAdviceMap = {
        'GENERAL': '오늘 수술은 잘 마무리되었습니다! 마취에서 완전히 회복하고 편안해질 때까지 아이를 잘 지켜봐 주시고, 궁금한 점은 언제든 병원으로 문의해주세요.',
        'EXTRACTION': '발치 수술 부위가 잘 아물 때까지 약 2주간 딱딱한 간식이나 장난감은 피해주시고, 부드러운 음식 위주로 급여해 주시는 것이 좋습니다.',
        'RESIN': '레진으로 때운 부위는 완전히 굳는 데 시간이 걸립니다. 약 1주일간 단단한 것을 씹지 않도록 주의가 필요하며, 이후부터 해당 부위를 꼼꼼히 닦아주시면 오래 유지됩니다.',
        'MEDICATION': '처방된 내복약은 통증을 줄이고 감염을 예방하는 데 중요하므로, 정해진 시간과 용량을 꼭 지켜서 모두 복용시켜 주세요.',
        'RECHECK': '양치질 시작 시점과 다음 검진(리첵) 일정은 병원에서 별도로 안내해 드릴 예정입니다. 아이의 빠른 회복과 구강 건강 유지를 위해 꼭 지켜주시길 바랍니다.'
    };
    
    clonedArea.querySelectorAll('.procedure-select').forEach(select => {
        if(!select || select.value === '0' || select.value === 'disabled') return;
        const selectedOption = select.options[select.selectedIndex];
        const category = selectedOption?.dataset.category;
        
        if (category === '발치/제거') careAdviceCategories.add('EXTRACTION');
        if (category === '신경/보존 치료') careAdviceCategories.add('RESIN');
    });
    
    clonedArea.querySelectorAll('.additional-treatments-container select').forEach(select => {
        const itemId = select.dataset.itemId;
        if(select.value !== '선택안함|0' && (itemId === 'medication' || itemId === 'liquid_analgesic_nsaid')) {
            careAdviceCategories.add('MEDICATION');
        }
    });

    let careAdviceHTML = `<li>${careAdviceMap['GENERAL']}</li>`;
    if (careAdviceCategories.has('EXTRACTION')) careAdviceHTML += `<li>${careAdviceMap['EXTRACTION']}</li>`;
    if (careAdviceCategories.has('RESIN')) careAdviceHTML += `<li>${careAdviceMap['RESIN']}</li>`;
    if (careAdviceCategories.has('MEDICATION')) careAdviceHTML += `<li>${careAdviceMap['MEDICATION']}</li>`;
    careAdviceHTML += `<li>${careAdviceMap['RECHECK']}</li>`;
    
    return `<div class="guardian-comment-section"><h2>⭐ 우리 아이, 이렇게 관리해주세요! ⭐</h2><div class="comment-box"><h3>- 🩺 앞으로의 관리 안내</h3><ul>${careAdviceHTML}</ul></div><p class="thank-you-message">소중한 아이의 치과 수술을 저희 금호동물병원에 믿고 맡겨주셔서 다시 한번 진심으로 감사드립니다.</p></div>`;
}

function addExportListeners(pageSelector) {
    const page = document.querySelector(pageSelector);
    if (!page) return;
    const btnContainer = page.querySelector('.export-container');
    if (!btnContainer) return;

    const exportHandler = (exportFunc, type) => {
        const captureArea = page.querySelector('.capture-area');
        
        html2canvas(captureArea, { scale: 2, windowWidth: captureArea.scrollWidth, windowHeight: captureArea.scrollHeight, useCORS: true }).then(canvas => {
            const patientName = document.querySelector('#patient-name-calc').value || '환자';
            const date = document.querySelector('#visit-date-calc').value || new Date().toISOString().split('T')[0];
            const fileName = `${patientName}_${date}_${type}`;
            exportFunc(canvas, fileName);
        });
    };

    btnContainer.querySelector('.export-png-btn')?.addEventListener('click', () => {
        exportHandler((canvas, fileName) => {
            const link = document.createElement('a');
            link.download = fileName + '.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        }, pageSelector.includes('Estimate') ? '예상비용' : '치료내역');
    });

    btnContainer.querySelector('.export-pdf-btn')?.addEventListener('click', () => {
        exportHandler((canvas, fileName) => {
            const { jsPDF } = window.jspdf;
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const canvasAspectRatio = canvas.width / canvas.height;
            const renderHeight = pdfWidth / canvasAspectRatio;
            let position = 0;
            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, renderHeight);
            let heightLeft = renderHeight - pdf.internal.pageSize.getHeight();
            while (heightLeft > 0) {
                position -= pdf.internal.pageSize.getHeight();
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, renderHeight);
                heightLeft -= pdf.internal.pageSize.getHeight();
            }
            pdf.save(fileName + '.pdf');
        }, pageSelector.includes('Estimate') ? '예상비용' : '치료내역');
    });
}
