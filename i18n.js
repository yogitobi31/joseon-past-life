const translations = {
  en: {
    meta: {
      title: "My Past Life in Joseon - Korean Past Life Personality Test",
      description: "Discover who you might have been in the Joseon Dynasty through a Korean-inspired personality test.",
    },
    menu: { test: "Test", stories: "Joseon Stories", about: "About", privacy: "Privacy", contact: "Contact" },
    footer: { note: "This site is a personality entertainment experience inspired by Joseon-era storytelling." },
    test: {
      badge: "Korean-inspired personality test",
      title: "My Past Life in Joseon",
      subtitle: "Answer a few questions and discover who you might have been in the Joseon Dynasty.",
      startButton: "Start the Test",
      resultLead: "Your past life in Joseon was…",
      retake: "Retake Test",
      saveCard: "Save Result Card",
      share: "Share with Friends",
    },
    result: {
      name: "Joseon Name", era: "Era", region: "Region", role: "Social Role", object: "Symbolic Object", keywords: "Keywords", talent: "Hidden Talent", fear: "Greatest Fear", motto: "Life Motto", power: "Relationship with Power", stats: "Stats", summary: "Summary", why: "Why this result fits you", finalScene: "Your final scene in Joseon", today: "If you lived today",
      copied: "Copied to clipboard!", copiedFail: "Could not copy. Please copy the link manually.", saved: "Result card saved.",
    },
    pages: {
      history: {
        badge: "Joseon Stories", title: "Joseon Stories for Global Readers",
        a1t: "1. What Was Daily Life Like in the Joseon Dynasty?",
        a1p1: "Daily life in Joseon was shaped by social class, season, and location. Farmers followed the rhythm of weather and fields, while people in cities moved around official offices, workshops, and markets.",
        a1p2: "Most people began work at sunrise and wrapped up around sunset. Evening hours were often for family talks, sewing, copying texts, or preparing for the next day.",
        a2t: "2. Were Joseon Scholars Really Just Bookworms?",
        a2p1: "Scholars did study deeply, but many also served as teachers, local advisors, and mediators in community issues. Their education often connected directly to governance and ethics.",
        a2p2: "So, a scholar was not simply a reader of books. In many regions, scholars were expected to help maintain social order and public responsibility.",
        a3t: "3. Markets and Peddlers: How People and Goods Traveled",
        a3p1: "Markets were central public spaces where goods, news, and emotions circulated together. Traveling merchants helped move fabrics, medicine ingredients, tools, and stories from one region to another.",
        a3p2: "Understanding markets helps us understand everyday Joseon life: what people worried about, what they hoped for, and what trends were spreading.",
        a4t: "4. Royal Records, Palace Secrets, and the People Who Wrote Them",
        a4p1: "The palace was not just ceremonial. It operated through detailed writing and process. Record keepers, clerks, and assistants maintained texts that influenced administration.",
        a4p2: "Behind official language, there were tensions and private choices. That is why palace history is also social history.",
        a5t: "5. Joseon Names: What Did They Mean?",
        a5p1: "Names in Joseon could include formal given names, courtesy names, and pen names depending on era and status. A name often reflected values, aspiration, or identity.",
        a5p2: "Not everyone followed the same naming culture, but names still worked as a meaningful social signal—much like today.",
      },
      about: {
        badge: "About",
        title: "About This Service",
        p1: "This is a personality-based entertainment test inspired by the Joseon Dynasty.",
        p2: "It does not claim to reveal a real past life.",
        p3: "It uses fictional storytelling, historical atmosphere, and user choices to create a personalized result.",
        p4: "It is designed for global users who are curious about Korean culture.",
        cta: "Start the Test",
      },
      privacy: {
        badge: "Privacy",
        title: "Privacy Policy",
        p1: "This site does not require personal data such as your name, phone number, or email to use the test.",
        p2: "Answers are processed in your browser for entertainment results and are not sent to a server.",
        p3: "Language preference and last result can be stored in localStorage for convenience.",
        p4: "If ad services are added later, this page will be updated with cookie-related disclosures.",
      },
      contact: {
        badge: "Contact",
        title: "Contact",
        p1: "You can send feedback, bug reports, content suggestions, or collaboration inquiries.",
        p2: "Contact email:",
      },
    },
  },
  ko: {
    meta: {
      title: "내가 전생에 조선인이었다니 - 조선시대 전생 성향 테스트",
      description: "지금의 선택으로 조선시대의 전생 캐릭터를 확인해보세요.",
    },
    menu: { test: "테스트", stories: "조선 이야기", about: "소개", privacy: "개인정보처리방침", contact: "문의" },
    footer: { note: "이 사이트는 조선시대 분위기에서 영감을 받은 성향 기반 엔터테인먼트 테스트입니다." },
    test: {
      badge: "한국 문화 영감 성향 테스트",
      title: "내가 전생에 조선인이었다니",
      subtitle: "지금의 선택으로 조선시대의 전생 캐릭터를 확인해보세요.",
      startButton: "전생 확인하기",
      resultLead: "당신의 조선 전생은…",
      retake: "다시하기",
      saveCard: "결과 카드 저장하기",
      share: "친구에게 공유하기",
    },
    result: {
      name: "전생 이름", era: "시대", region: "거주지", role: "역할", object: "상징 물건", keywords: "성향 키워드", talent: "숨겨진 재능", fear: "가장 큰 두려움", motto: "좌우명", power: "권력과의 관계", stats: "능력치", summary: "요약", why: "왜 이 결과가 나왔을까?", finalScene: "전생의 마지막 장면", today: "현대에 다시 태어난다면",
      copied: "클립보드에 복사했어요!", copiedFail: "복사에 실패했어요. 링크를 직접 복사해 주세요.", saved: "결과 카드를 저장했어요.",
    },
    pages: {
      history: {
        badge: "조선 이야기", title: "외국인도 이해하기 쉬운 조선 이야기",
        a1t: "1. 조선시대 사람들은 하루를 어떻게 보냈을까?",
        a1p1: "조선시대의 일상은 신분과 계절, 지역에 따라 크게 달랐습니다. 농촌은 날씨와 농사 일정이 중심이었고, 도시는 관청·시장·공방의 흐름으로 움직였습니다.",
        a1p2: "대부분 해가 뜨면 일을 시작하고 해가 지면 마무리했습니다. 저녁에는 가족 대화, 바느질, 필사처럼 조용한 활동이 이어졌습니다.",
        a2t: "2. 조선의 선비는 정말 책만 읽었을까?",
        a2p1: "선비는 학문을 중시했지만 지역 사회의 조정자나 교육자 역할도 자주 맡았습니다. 글과 현실 행정이 연결되는 경우가 많았습니다.",
        a2p2: "그래서 선비를 단순한 독서가로 보기보다 지식과 사회적 책임을 함께 고민한 집단으로 보는 편이 자연스럽습니다.",
        a3t: "3. 장터와 보부상: 조선의 사람과 물건이 오가던 길",
        a3p1: "장터는 물건뿐 아니라 소식과 감정이 오가는 공공 공간이었습니다. 보부상은 지역 사이를 이동하며 상품과 정보를 함께 전달했습니다.",
        a3p2: "장터를 보면 당시 사람들의 불안, 기대, 유행을 함께 읽을 수 있어 생활사를 이해하는 데 큰 도움이 됩니다.",
        a4t: "4. 궁궐의 기록과 비밀스러운 사람들",
        a4p1: "궁궐은 화려함만 있는 공간이 아니라 기록과 절차로 움직이는 조직이었습니다. 기록관과 서리 같은 실무자들의 역할이 매우 중요했습니다.",
        a4p2: "공식 기록 뒤에는 늘 인간관계와 긴장이 있었고, 그래서 궁궐사는 정치사이면서 생활사이기도 합니다.",
        a5t: "5. 조선시대 이름과 호에는 어떤 의미가 있었을까?",
        a5p1: "조선에서는 본명 외에도 자·호를 쓰는 문화가 있었습니다. 이름에는 가치관, 이상, 정체성이 담기곤 했습니다.",
        a5p2: "모든 사람이 같은 방식으로 쓰지는 않았지만, 이름이 자신을 어떻게 보여줄지 고민하는 문화는 지금과도 닮아 있습니다.",
      },
      about: {
        badge: "소개",
        title: "서비스 소개",
        p1: "이 사이트는 조선시대 분위기에서 영감을 받은 성향 기반 엔터테인먼트 테스트입니다.",
        p2: "실제 전생을 단정하는 서비스가 아닙니다.",
        p3: "사용자의 선택을 바탕으로 허구적 스토리텔링 결과를 제공합니다.",
        p4: "한국 문화에 관심 있는 전 세계 사용자를 위한 콘텐츠입니다.",
        cta: "전생 확인하기",
      },
      privacy: {
        badge: "개인정보처리방침",
        title: "개인정보처리방침",
        p1: "이 사이트는 테스트 이용 과정에서 이름, 전화번호, 이메일 같은 개인정보를 요구하지 않습니다.",
        p2: "답변 데이터는 브라우저 안에서 결과 생성용으로만 처리되며 서버로 전송되지 않습니다.",
        p3: "편의를 위해 언어 설정과 마지막 결과를 localStorage에 저장할 수 있습니다.",
        p4: "향후 광고 서비스가 도입되면 쿠키 안내를 이 페이지에 업데이트하겠습니다.",
      },
      contact: {
        badge: "문의",
        title: "문의",
        p1: "오류 제보, 개선 제안, 협업 문의를 보내실 수 있습니다.",
        p2: "문의 이메일:",
      },
    },
  },
};

function getText(obj, path) {
  return path.split(".").reduce((acc, k) => (acc ? acc[k] : undefined), obj);
}

function applyLanguage(lang) {
  const safeLang = translations[lang] ? lang : "en";
  localStorage.setItem("joseon-lang", safeLang);
  document.documentElement.lang = safeLang;

  const t = translations[safeLang];
  document.title = t.meta.title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", t.meta.description);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogTitle) ogTitle.setAttribute("content", t.meta.title);
  if (ogDesc) ogDesc.setAttribute("content", t.meta.description);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = getText(t, el.dataset.i18n);
    if (typeof text === "string") el.textContent = text;
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === safeLang);
  });

  document.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang: safeLang, t } }));
}

window.i18n = { translations, applyLanguage };

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("joseon-lang") || "en";
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
  applyLanguage(lang);
});
