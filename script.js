const QUESTIONS = {
  en: [
    { q: "You find yourself in an unfamiliar city. What do you do first?", a: ["Observe the streets quietly.", "Ask someone for directions.", "Follow the most interesting sound.", "Look for a place where people gather."] },
    { q: "A friend asks for urgent help. You usually…", a: ["Make a quick plan.", "Show up first, think later.", "Calm them down and listen.", "Find who else should join."] },
    { q: "In team projects, people know you as the one who…", a: ["Keeps structure and deadlines.", "Pushes action when others hesitate.", "Finds creative alternatives.", "Connects people and mood."] },
    { q: "When you fail unexpectedly, your first reaction is…", a: ["Review what went wrong.", "Try again immediately.", "Take a short reset walk.", "Talk it through with someone."] },
    { q: "Which environment gives you the most energy?", a: ["A quiet library.", "A lively market.", "A mountain trail.", "A studio or workshop."] },
    { q: "What kind of praise feels most meaningful?", a: ["You are thoughtful.", "You are brave.", "You are warm.", "You are original."] },
    { q: "When conflict happens, you tend to…", a: ["Analyze both sides.", "Step in directly.", "Ease tension first.", "Reframe the story."] },
    { q: "What do you protect most?", a: ["Principles.", "People.", "Possibility.", "Reputation."] },
    { q: "Your hidden strength is closest to…", a: ["Pattern recognition.", "Timing under pressure.", "Emotional intuition.", "Narrative sense."] },
    { q: "Which risk scares you most?", a: ["Being misunderstood.", "Losing control.", "Hurting people you care about.", "Living without impact."] },
    { q: "How do you make major decisions?", a: ["Collect evidence.", "Trust instinct.", "Read the room.", "Imagine long-term ripple effects."] },
    { q: "What legacy do you want to leave?", a: ["A system that lasts.", "A crisis survived.", "People healed.", "A story remembered."] },
  ],
  ko: [
    { q: "낯선 도시에 혼자 도착했다. 당신이 가장 먼저 할 일은?", a: ["조용히 거리를 관찰한다.", "사람들에게 길을 묻는다.", "가장 흥미로운 소리가 나는 곳으로 간다.", "사람들이 모여 있는 곳을 찾는다."] },
    { q: "친구가 급하게 도움을 요청했다. 보통 당신은…", a: ["빠르게 계획을 세운다.", "일단 달려가고 나중에 생각한다.", "먼저 진정시키고 이야기를 듣는다.", "함께할 사람을 연결한다."] },
    { q: "팀 프로젝트에서 당신은 주로…", a: ["구조와 마감을 챙긴다.", "머뭇거릴 때 실행을 밀어준다.", "창의적인 대안을 만든다.", "사람과 분위기를 잇는다."] },
    { q: "예상치 못한 실패를 겪으면 첫 반응은?", a: ["원인을 분석한다.", "즉시 다시 시도한다.", "짧게 정리할 시간을 갖는다.", "누군가와 대화하며 정리한다."] },
    { q: "어떤 공간에서 가장 에너지가 생기나?", a: ["조용한 서고.", "활기찬 장터.", "산길과 자연.", "공방·작업실."] },
    { q: "어떤 칭찬이 가장 기분 좋은가?", a: ["신중하고 깊다.", "대담하고 용감하다.", "따뜻하고 배려 깊다.", "독창적이고 감각적이다."] },
    { q: "갈등이 생기면 당신은…", a: ["양쪽 논리를 분석한다.", "직접 개입한다.", "긴장을 먼저 낮춘다.", "이야기의 틀을 바꾼다."] },
    { q: "당신이 가장 지키고 싶은 것은?", a: ["원칙.", "사람.", "가능성.", "명예."] },
    { q: "숨겨진 강점에 가장 가까운 것은?", a: ["패턴을 읽는 힘.", "압박 속 타이밍.", "감정 직관.", "스토리 감각."] },
    { q: "당신이 가장 두려운 위험은?", a: ["오해받는 것.", "통제력을 잃는 것.", "소중한 사람을 다치게 하는 것.", "의미 없이 사는 것."] },
    { q: "중대한 결정을 내릴 때 당신은…", a: ["증거를 모은다.", "직감을 믿는다.", "분위기와 맥락을 읽는다.", "장기적 파급을 본다."] },
    { q: "남기고 싶은 유산은?", a: ["오래 가는 시스템.", "위기에서 지켜낸 결과.", "치유된 사람들.", "오래 기억될 이야기."] },
  ],
};

const ARCHETYPES = [
  { en: "The Fallen Noble Strategist", ko: "몰락한 양반가의 책사", roleEn: "Political strategist", roleKo: "전략가" },
  { en: "The Wandering Scholar of Hanyang", ko: "한양을 떠도는 괴짜 선비", roleEn: "Scholar", roleKo: "선비" },
  { en: "The Royal Archivist Who Knew Too Much", ko: "왕의 비밀을 아는 궁중 기록관", roleEn: "Archivist", roleKo: "기록관" },
  { en: "The Joseon Warrior Who Walked Through Fire", ko: "불길을 건넌 조선 무관", roleEn: "Warrior", roleKo: "무관" },
  { en: "The Merchant’s Daughter Who Feared No Sea", ko: "바다를 두려워하지 않은 상단의 딸", roleEn: "Merchant", roleKo: "상인" },
  { en: "The Marketplace Storyteller", ko: "장터의 이야기꾼", roleEn: "Storyteller", roleKo: "이야기꾼" },
  { en: "The Mountain Herbalist", ko: "산속 약초꾼", roleEn: "Herbalist", roleKo: "약초꾼" },
  { en: "The Court Painter of Forgotten Faces", ko: "잊힌 얼굴을 그린 궁중 화원", roleEn: "Court painter", roleKo: "화원" },
  { en: "The Palace Woman Who Wrote Letters at Night", ko: "밤마다 편지를 쓰던 궁녀", roleEn: "Palace writer", roleKo: "궁중 서기" },
  { en: "The Local Official Who Defied Powerful Families", ko: "세도가문에 맞선 지방 관리", roleEn: "Local official", roleKo: "향리" },
  { en: "The Shaman Who Refused to Obey Fate", ko: "운명을 거스른 무녀", roleEn: "Shaman", roleKo: "무녀" },
  { en: "The Nameless Hero of the People", ko: "이름 없는 백성의 영웅", roleEn: "Protector", roleKo: "민초 수호자" },
];

const POOLS = {
  era: { en: ["Early Joseon", "Mid-Joseon", "Late Joseon", "A turbulent winter in Joseon", "The final years of a forgotten reign"], ko: ["조선 전기", "조선 중기", "조선 후기", "혼란스러운 겨울의 조선", "잊힌 왕조의 끝자락"] },
  region: { en: ["Hanyang", "Gaeseong", "Jeonju", "Dongnae", "Gangneung", "a small village near the Han River", "a mountain village in Gangwon", "a port town in the south", "a quiet scholar’s town"], ko: ["한양", "개성", "전주", "동래", "강릉", "한강 근처의 작은 마을", "강원도의 산골 마을", "남쪽의 포구 마을", "조용한 선비의 고을"] },
  object: { en: ["an ink-stained brush", "a folded letter", "a worn map", "a small jade ornament", "a medicine pouch", "a red seal", "a cracked compass", "a hand-copied book", "a silk ribbon", "a wooden hairpin", "a traveler’s straw hat", "an old bronze mirror"], ko: ["먹물 묻은 붓", "접힌 편지", "낡은 지도", "작은 옥 장식", "약초 주머니", "붉은 낙관", "금이 간 나침반", "손으로 베껴 쓴 책", "비단 리본", "나무 비녀", "나그네의 삿갓", "오래된 청동 거울"] },
  talent: { en: ["reading hidden motives", "memorizing tiny details", "turning conflict into agreement", "finding opportunities in chaos"], ko: ["숨은 의도를 읽는 힘", "작은 디테일을 기억하는 힘", "갈등을 합의로 바꾸는 능력", "혼란 속 기회를 잡는 감각"] },
  fear: { en: ["betraying your own values", "being forgotten by history", "failing to protect your people", "silence after speaking the truth"], ko: ["스스로의 가치를 배신하는 것", "역사에서 잊히는 것", "사람들을 지키지 못하는 것", "진실을 말한 뒤 찾아오는 침묵"] },
};

const SURNAMES = [{ en: "Kim", ko: "김" }, { en: "Lee", ko: "이" }, { en: "Park", ko: "박" }, { en: "Choi", ko: "최" }, { en: "Jung", ko: "정" }, { en: "Kang", ko: "강" }, { en: "Yoon", ko: "윤" }, { en: "Jang", ko: "장" }, { en: "Han", ko: "한" }, { en: "Lim", ko: "임" }, { en: "Seo", ko: "서" }, { en: "Song", ko: "송" }, { en: "Shin", ko: "신" }, { en: "Oh", ko: "오" }, { en: "Hong", ko: "홍" }, { en: "Ryu", ko: "류" }, { en: "Moon", ko: "문" }, { en: "Baek", ko: "백" }, { en: "Nam", ko: "남" }, { en: "Heo", ko: "허" }];
const FIRST = [{ en: "Seo", ko: "서" }, { en: "Yeon", ko: "연" }, { en: "Hwa", ko: "화" }, { en: "Ji", ko: "지" }, { en: "Eun", ko: "은" }, { en: "Ha", ko: "하" }, { en: "Yul", ko: "율" }, { en: "Min", ko: "민" }, { en: "Do", ko: "도" }, { en: "Rin", ko: "린" }, { en: "Jae", ko: "재" }, { en: "Hwan", ko: "환" }, { en: "Gyeom", ko: "겸" }, { en: "Won", ko: "원" }, { en: "Bin", ko: "빈" }, { en: "Sol", ko: "솔" }, { en: "Yeo", ko: "여" }, { en: "Dam", ko: "담" }, { en: "I", ko: "이" }, { en: "Hae", ko: "해" }];
const LAST = [{ en: "Yun", ko: "윤" }, { en: "Hwa", ko: "화" }, { en: "Rin", ko: "린" }, { en: "Gyeom", ko: "겸" }, { en: "Woo", ko: "우" }, { en: "Jin", ko: "진" }, { en: "Seo", ko: "서" }, { en: "Dam", ko: "담" }, { en: "Yeon", ko: "연" }, { en: "Ha", ko: "하" }, { en: "Won", ko: "원" }, { en: "Bin", ko: "빈" }, { en: "Sol", ko: "솔" }, { en: "Hyun", ko: "현" }, { en: "Rok", ko: "록" }, { en: "I", ko: "이" }, { en: "Wol", ko: "월" }, { en: "Gyeong", ko: "경" }, { en: "An", ko: "안" }, { en: "Hee", ko: "희" }];

const startBtn = document.getElementById("start-btn");
if (!startBtn) {
  document.addEventListener("languageChanged", (e) => applyStaticPageText(e.detail.lang));
} else {
  initTestPage();
}

function applyStaticPageText(lang) {
  const map = window.i18n.translations[lang].pages[document.body.dataset.page];
  if (!map) return;
  document.querySelectorAll("[data-page-i18n]").forEach((el) => {
    el.textContent = map[el.dataset.pageI18n] || el.textContent;
  });
}

function initTestPage() {
  let currentIndex = 0;
  let answers = [];
  let currentLang = localStorage.getItem("joseon-lang") || "en";

  const startScreen = document.getElementById("start-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const resultScreen = document.getElementById("result-screen");
  const retryBtn = document.getElementById("retry-btn");
  const shareBtn = document.getElementById("share-btn");
  const saveCardBtn = document.getElementById("save-card-btn");
  const saveCardStatus = document.getElementById("save-card-status");

  const questionTitle = document.getElementById("question-title");
  const answerList = document.getElementById("answer-list");
  const progressText = document.getElementById("progress-text");
  const progressFill = document.getElementById("progress-fill");

  function showScreen(screen) {
    [startScreen, quizScreen, resultScreen].forEach((el) => {
      const on = el === screen;
      el.classList.toggle("active", on);
      el.setAttribute("aria-hidden", String(!on));
    });
  }

  function hashFromAnswers(extra = 0) {
    let h = answers.reduce((acc, v, i) => (acc * 31 + (v + 1) * (i + 7)) % 2147483647, 17);
    h = (h + extra * 1013) % 2147483647;
    return h;
  }

  function pick(arr, seed, step) {
    return arr[(seed + step * 97) % arr.length];
  }

  function buildResult() {
    const seed = hashFromAnswers(Number(localStorage.getItem("joseon-retake") || 0));
    const archetype = ARCHETYPES[seed % ARCHETYPES.length];
    const name = {
      surname: pick(SURNAMES, seed, 1),
      first: pick(FIRST, seed, 2),
      last: pick(LAST, seed, 3),
    };
    const role = currentLang === "ko" ? archetype.roleKo : archetype.roleEn;
    const result = {
      key: seed % ARCHETYPES.length,
      title: currentLang === "ko" ? archetype.ko : archetype.en,
      oppositeTitle: currentLang === "ko" ? archetype.en : archetype.ko,
      nameEn: `${name.surname.en} ${name.first.en}-${name.last.en}`,
      nameKo: `${name.surname.ko}${name.first.ko}${name.last.ko}`,
      era: pick(POOLS.era[currentLang], seed, 4),
      region: pick(POOLS.region[currentLang], seed, 5),
      role,
      object: pick(POOLS.object[currentLang], seed, 6),
      talent: pick(POOLS.talent[currentLang], seed, 7),
      fear: pick(POOLS.fear[currentLang], seed, 8),
      keywords: currentLang === "ko" ? "관찰, 통찰, 책임, 상상력" : "Observation, strategy, empathy, resilience",
      motto: currentLang === "ko" ? "이름보다 선택이 오래 남는다." : "Your choices outlive your name.",
      power: currentLang === "ko" ? "권력에 가까웠지만, 권력보다 사람을 먼저 보았습니다." : "You stood near power, but chose people over status.",
      summary: currentLang === "ko" ? "당신의 전생은 요란하지 않았지만 결코 의미 없지 않았습니다." : "Your past life in Joseon was never loud, but never meaningless.",
      description: currentLang === "ko" ? "당신은 남들이 놓치는 작은 신호를 읽던 사람이었습니다. 누군가는 칼과 직함으로 세상을 바꾸려 했지만, 당신은 표정과 문장, 침묵 속에서 방향을 찾아냈습니다.\n\n공식 기록 한 줄에 이름이 남지 않아도, 누군가의 운명을 조용히 바꿔 놓았을 가능성이 큽니다." : "You were the kind of person who noticed what others ignored. While others chased rank and display, you read patterns in speech, silence, and hesitation.\n\nYou may not have stood in the center of official records, but your judgment likely changed the fate of people more powerful than you.",
      why: currentLang === "ko" ? "당신의 답변은 직접 충돌보다 관찰, 전략, 분위기 조율을 중시하는 경향을 보여줍니다." : "Your choices suggest you value observation, strategy, and subtle influence over loud confrontation.",
      ending: currentLang === "ko" ? "눈 내리던 밤, 당신은 나무 마루 밑에 마지막 메모를 숨겼습니다. 이름은 사라졌지만 그 문장 덕분에 누군가는 살아남았습니다." : "On a snowy night, you left one final note beneath a wooden floorboard. Your name faded, but someone survived because of your words.",
      today: currentLang === "ko" ? "지금 다시 태어난다면, 누구보다 먼저 상황의 공기를 읽고 팀의 방향을 잡는 사람일 것입니다." : "If you lived today, you would be the one who reads the room first and quietly redirects outcomes.",
      stats: {
        [currentLang === "ko" ? "지략" : "Strategy"]: 60 + (seed % 36),
        [currentLang === "ko" ? "공감" : "Empathy"]: 60 + ((seed >> 2) % 36),
        [currentLang === "ko" ? "실행력" : "Action"]: 60 + ((seed >> 4) % 36),
        [currentLang === "ko" ? "예술감각" : "Artistry"]: 60 + ((seed >> 6) % 36),
        [currentLang === "ko" ? "생존력" : "Survival"]: 60 + ((seed >> 8) % 36),
      },
    };
    localStorage.setItem("joseon-last-result", JSON.stringify({ answers, result, lang: currentLang }));
    return result;
  }

  function renderQuestion() {
    const q = QUESTIONS[currentLang][currentIndex];
    questionTitle.textContent = q.q;
    progressText.textContent = `${currentIndex + 1} / ${QUESTIONS[currentLang].length}`;
    progressFill.style.width = `${((currentIndex + 1) / QUESTIONS[currentLang].length) * 100}%`;
    answerList.innerHTML = "";
    q.a.forEach((text, idx) => {
      const b = document.createElement("button");
      b.className = "answer-btn";
      b.textContent = text;
      b.addEventListener("click", () => onAnswer(idx));
      answerList.appendChild(b);
    });
  }

  function renderStats(stats) {
    const statsList = document.getElementById("stats-list");
    statsList.innerHTML = "";
    Object.entries(stats).forEach(([name, value]) => {
      const row = document.createElement("div");
      row.className = "stat-row";
      row.innerHTML = `<div class="stat-meta"><span>${name}</span><strong>${value}</strong></div><div class="stat-track"><div class="stat-fill" style="width:${value}%"></div></div>`;
      statsList.appendChild(row);
    });
  }

  function toSummaryForCard(result) {
    const base = [result.summary, result.why].filter(Boolean).join(" ");
    const compact = base.replace(/\s+/g, " ").trim();
    return compact.length > 220 ? `${compact.slice(0, 217).trimEnd()}…` : compact;
  }

  function splitKeywords(result) {
    return result.keywords
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean)
      .slice(0, 3);
  }

  function renderShareCard(result) {
    const t = window.i18n.translations[currentLang];
    const cardTitle = document.getElementById("share-title");
    const titleLength = result.title.length;
    cardTitle.classList.toggle("long", titleLength > 38 && titleLength <= 54);
    cardTitle.classList.toggle("very-long", titleLength > 54);
    cardTitle.textContent = result.title;

    document.getElementById("share-brand").textContent = currentLang === "ko" ? "내가 전생에 조선인이었다니" : "My Past Life in Joseon";
    document.getElementById("share-name").textContent = currentLang === "ko" ? result.nameKo : result.nameEn;
    document.getElementById("share-summary-label").textContent = t.result.summary;
    document.getElementById("share-summary").textContent = toSummaryForCard(result);
    document.getElementById("share-keywords-label").textContent = t.result.keywords;
    document.getElementById("share-object-label").textContent = t.result.object;
    document.getElementById("share-object").textContent = result.object;
    document.getElementById("share-motto-label").textContent = t.result.motto;
    document.getElementById("share-motto").textContent = result.motto;
    document.getElementById("share-stats-label").textContent = t.result.stats;
    const footerLine = document.getElementById("share-footer-line");
    footerLine.className = "share-footer-line";
    footerLine.textContent = t.result.cardFooter;

    const meta = document.getElementById("share-meta");
    meta.innerHTML = "";
    [
      [t.result.era, result.era],
      [t.result.region, result.region],
      [t.result.role, result.role],
    ].forEach(([label, value]) => {
      const item = document.createElement("div");
      item.className = "share-meta-item";
      item.innerHTML = `<h4>${label}</h4><p>${value}</p>`;
      meta.appendChild(item);
    });

    const keywords = document.getElementById("share-keywords");
    keywords.innerHTML = "";
    splitKeywords(result).forEach((keyword) => {
      const pill = document.createElement("span");
      pill.className = "share-keyword-pill";
      pill.textContent = keyword;
      keywords.appendChild(pill);
    });

    const stats = document.getElementById("share-stats");
    stats.innerHTML = "";
    Object.entries(result.stats).slice(0, 5).forEach(([name, value]) => {
      const row = document.createElement("div");
      row.className = "share-stat-row";
      row.innerHTML = `<strong>${name}</strong><div class="share-stat-track"><div class="share-stat-fill" style="width:${value}%"></div></div><span class="share-stat-value">${value}</span>`;
      stats.appendChild(row);
    });
  }

  function renderResult(result) {
    document.getElementById("result-title").textContent = result.title;
    document.getElementById("result-identity").textContent = currentLang === "ko" ? `Archetype: ${result.oppositeTitle}` : `한국어 결과명: ${result.oppositeTitle}`;
    document.getElementById("result-name").textContent = currentLang === "ko" ? result.nameKo : result.nameEn;
    document.getElementById("result-era").textContent = result.era;
    document.getElementById("result-place").textContent = result.region;
    document.getElementById("result-job").textContent = result.role;
    document.getElementById("result-object").textContent = result.object;
    document.getElementById("result-keywords").textContent = result.keywords;
    document.getElementById("result-talent").textContent = result.talent;
    document.getElementById("result-fear").textContent = result.fear;
    document.getElementById("result-motto").textContent = result.motto;
    document.getElementById("result-power").textContent = result.power;
    document.getElementById("result-summary").textContent = result.summary;
    document.getElementById("result-description").textContent = result.description;
    document.getElementById("result-why").textContent = result.why;
    document.getElementById("result-ending").textContent = result.ending;
    document.getElementById("result-today").textContent = result.today;
    renderStats(result.stats);
    renderShareCard(result);
  }

  function onAnswer(idx) {
    answers.push(idx);
    currentIndex += 1;
    if (currentIndex < QUESTIONS[currentLang].length) return renderQuestion();
    renderResult(buildResult());
    showScreen(resultScreen);
  }

  function startQuiz() {
    currentIndex = 0;
    answers = [];
    showScreen(quizScreen);
    renderQuestion();
  }

  function restartQuiz() {
    localStorage.setItem("joseon-retake", String((Number(localStorage.getItem("joseon-retake") || 0) + 1) % 9999));
    showScreen(startScreen);
  }

  async function shareResult() {
    const saved = JSON.parse(localStorage.getItem("joseon-last-result") || "{}").result;
    if (!saved) return;
    const text = currentLang === "ko" ? `나는 전생에 ${saved.title}이었다… 너는 조선에서 누구였을까? (${saved.nameKo})` : `I discovered my past life in Joseon: ${saved.title}. Who were you in Joseon? (${saved.nameEn})`;
    const payload = `${text}\n${location.href}`;
    if (navigator.share) {
      try { await navigator.share({ title: document.title, text: payload }); return; } catch (e) {}
    }
    try { await navigator.clipboard.writeText(payload); alert(window.i18n.translations[currentLang].result.copied); } catch (e) { alert(window.i18n.translations[currentLang].result.copiedFail); }
  }

  async function saveCard() {
    const saved = JSON.parse(localStorage.getItem("joseon-last-result") || "{}").result;
    if (!saved) return;
    const t = window.i18n.translations[currentLang].result;
    try {
      renderShareCard(saved);
      saveCardBtn.disabled = true;
      saveCardBtn.classList.add("is-loading");
      saveCardStatus.textContent = t.preparing;
      if (document.fonts?.ready) await document.fonts.ready;
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      const card = document.getElementById("share-card");
      const rect = card.getBoundingClientRect();
      const canvas = await html2canvas(card, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#f4ecdd",
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        scrollX: 0,
        scrollY: 0,
        windowWidth: Math.round(rect.width),
        windowHeight: Math.round(rect.height),
      });
      const a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = "joseon-past-life-result.png";
      a.click();
      saveCardStatus.textContent = t.saved;
    } catch (e) {
      saveCardStatus.textContent = t.saveFail;
    } finally {
      saveCardBtn.disabled = false;
      saveCardBtn.classList.remove("is-loading");
      setTimeout(() => {
        saveCardStatus.textContent = "";
      }, 2600);
    }
  }

  document.addEventListener("languageChanged", (e) => {
    currentLang = e.detail.lang;
    if (quizScreen.classList.contains("active")) renderQuestion();
    if (resultScreen.classList.contains("active") && answers.length === QUESTIONS[currentLang].length) {
      renderResult(buildResult());
    }
  });

  startBtn.addEventListener("click", startQuiz);
  retryBtn.addEventListener("click", restartQuiz);
  shareBtn.addEventListener("click", shareResult);
  saveCardBtn.addEventListener("click", saveCard);

  const saved = JSON.parse(localStorage.getItem("joseon-last-result") || "{}");
  if (saved.result) {
    answers = saved.answers || [];
    currentLang = localStorage.getItem("joseon-lang") || saved.lang || "en";
    renderResult(saved.result);
    showScreen(resultScreen);
  }
  if (new URLSearchParams(location.search).get("start") === "1" && !saved.result) startQuiz();
}
