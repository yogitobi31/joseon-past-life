const QUESTIONS = [
  {
    question: "새로운 동네에 도착했다. 가장 먼저 하는 일은?",
    answers: [
      { text: "시장부터 훑어보고 흐름을 파악한다.", types: ["merchant", "craftsman"] },
      { text: "사람들 성정부터 살핀 뒤 말문을 연다.", types: ["scholar", "shaman"] },
      { text: "주변 지형을 익히며 안전한 동선을 먼저 만든다.", types: ["guard", "hunter"] },
    ],
  },
  {
    question: "아침 루틴에서 가장 중요한 것은?",
    answers: [
      { text: "기록 정리와 계획 세우기", types: ["clerk", "scholar"] },
      { text: "몸을 단련하며 감각 깨우기", types: ["guard", "hunter"] },
      { text: "차 한 잔으로 마음을 고요히 하기", types: ["painter", "monk"] },
    ],
  },
  {
    question: "팀 과제가 생겼을 때 내 역할은?",
    answers: [
      { text: "판을 짜고 마감까지 밀어붙인다.", types: ["commander", "clerk"] },
      { text: "갈등을 조정하고 분위기를 다독인다.", types: ["physician", "shaman"] },
      { text: "손이 많이 가는 실무를 묵묵히 맡는다.", types: ["craftsman", "farmer"] },
    ],
  },
  {
    question: "가장 끌리는 장소는 어디인가?",
    answers: [
      { text: "책 냄새가 도는 조용한 서고", types: ["scholar", "clerk"] },
      { text: "사람 소리 가득한 장터와 골목", types: ["merchant", "storyteller"] },
      { text: "바람 소리만 들리는 산과 숲", types: ["hunter", "monk"] },
    ],
  },
  {
    question: "예상 밖의 실패를 겪으면?",
    answers: [
      { text: "원인을 분석하고 다시 설계한다.", types: ["clerk", "scholar"] },
      { text: "즉시 현장 대응으로 피해를 줄인다.", types: ["guard", "commander"] },
      { text: "감정을 추슬러 주변 사람부터 챙긴다.", types: ["physician", "farmer"] },
    ],
  },
  {
    question: "주변에서 자주 듣는 말은?",
    answers: [
      { text: "네가 있으면 이상하게 마음이 놓여.", types: ["physician", "monk"] },
      { text: "어떻게 그런 아이디어를 내?", types: ["painter", "storyteller"] },
      { text: "진짜 실행력은 너를 못 이긴다.", types: ["commander", "merchant"] },
    ],
  },
  {
    question: "휴식이 필요할 때 택하는 방식은?",
    answers: [
      { text: "사람들과 어울리며 에너지를 얻는다.", types: ["merchant", "storyteller"] },
      { text: "혼자 손으로 무언가를 만든다.", types: ["craftsman", "painter"] },
      { text: "자연 속을 걸으며 생각을 정리한다.", types: ["hunter", "monk"] },
    ],
  },
  {
    question: "소중한 것을 지키기 위해 필요한 것은?",
    answers: [
      { text: "원칙과 기록, 냉정한 판단", types: ["clerk", "scholar"] },
      { text: "담대한 결단과 행동", types: ["guard", "commander"] },
      { text: "관계와 신뢰를 쌓는 시간", types: ["farmer", "physician"] },
    ],
  },
  {
    question: "내가 가장 자신 있는 재능은?",
    answers: [
      { text: "말과 글로 마음을 움직이는 힘", types: ["storyteller", "scholar"] },
      { text: "손끝 감각으로 완성도를 높이는 힘", types: ["craftsman", "painter"] },
      { text: "상황을 읽고 기회를 잡는 힘", types: ["merchant", "commander"] },
    ],
  },
  {
    question: "나를 화나게 하는 상황은?",
    answers: [
      { text: "약한 사람을 이용하는 모습", types: ["guard", "physician"] },
      { text: "약속 없는 무책임과 뒷말", types: ["clerk", "farmer"] },
      { text: "틀에 가둬 창의를 막는 분위기", types: ["painter", "storyteller"] },
    ],
  },
  {
    question: "중요한 선택 직전, 나는?",
    answers: [
      { text: "가능한 시나리오를 끝까지 계산한다.", types: ["scholar", "merchant"] },
      { text: "마음이 가는 쪽을 빠르게 붙잡는다.", types: ["commander", "hunter"] },
      { text: "주변의 기운과 흐름을 천천히 느낀다.", types: ["shaman", "monk"] },
    ],
  },
  {
    question: "당신이 남기고 싶은 한 줄은?",
    answers: [
      { text: "나는 시대를 기록하고 다음 길을 비췄다.", types: ["clerk", "scholar"] },
      { text: "나는 사람의 삶을 직접 바꾸어냈다.", types: ["physician", "commander"] },
      { text: "나는 감정과 기억을 이야기로 남겼다.", types: ["storyteller", "painter"] },
    ],
  },
];

const RESULTS = {
  scholar: {
    title: "규장각의 별빛 서고지기",
    pastName: "이도윤",
    era: "정조 연간(18세기 후반)",
    place: "한성부 창덕궁 인근",
    job: "규장각 검서관",
    keywords: "분석, 통찰, 성실, 절제",
    stats: { 지략: 96, 공감: 63, 추진력: 71, 예술감각: 58, 생존력: 52 },
    description:
      "당신은 밤이 깊을수록 더 또렷해지는 사람이었습니다. 시대의 어지러운 소문 속에서도 기록의 힘을 믿었고, 사소한 문장 하나에서 큰 흐름을 읽어냈죠. 사람들은 당신을 조용하다고 여겼지만, 사실 당신은 미래를 가장 멀리 보던 전략가였습니다.",
    ending:
      "차가운 새벽, 등잔불 아래 마지막 교정지를 덮던 당신. ‘다음 세대는 덜 흔들리길’이라는 메모가 책장 사이에 남았습니다.",
  },
  commander: {
    title: "북방을 지킨 결단의 장수",
    pastName: "최무강",
    era: "숙종 연간(17세기 말)",
    place: "함경도 경성진",
    job: "변방 수군·육군 지휘관",
    keywords: "결단, 책임, 카리스마, 담대함",
    stats: { 지략: 78, 공감: 61, 추진력: 98, 예술감각: 34, 생존력: 92 },
    description:
      "당신은 망설임보다 책임을 먼저 선택하던 인물입니다. 위기 앞에서 흔들리지 않았고, 자신의 선택이 누군가의 일상을 지킨다는 사실을 누구보다 잘 알았습니다. 거친 성정으로 오해받아도 결국 당신 곁엔 신뢰가 모였습니다.",
    ending:
      "눈보라 속 봉수대, 끝까지 깃발을 내리지 않던 순간. 당신의 결단 덕분에 성문은 새벽까지 버텨냈습니다.",
  },
  physician: {
    title: "골목의 맥을 짚는 심의",
    pastName: "윤가온",
    era: "영조 연간(18세기 중반)",
    place: "한성부 종로",
    job: "의원 겸 약재 조제인",
    keywords: "치유, 배려, 관찰, 인내",
    stats: { 지략: 74, 공감: 97, 추진력: 67, 예술감각: 48, 생존력: 73 },
    description:
      "당신은 사람의 말보다 맥박, 표정, 침묵을 먼저 읽었습니다. 누구도 주목하지 않던 작은 통증을 놓치지 않았고, 가장 약한 사람의 편에 서는 것을 당연한 일로 여겼죠. 당신이 지나간 자리엔 안도의 숨이 남았습니다.",
    ending:
      "장마 끝 습한 밤, 마지막 탕약을 내어주며 미소 짓던 당신. ‘내일은 분명 조금 나아질 것’이라는 말이 골목에 오래 남았습니다.",
  },
  merchant: {
    title: "한양 장시의 판을 읽는 거상",
    pastName: "강서율",
    era: "순조 연간(19세기 초)",
    place: "한성부 육의전 거리",
    job: "포목전 상인",
    keywords: "기민함, 협상, 감각, 실리",
    stats: { 지략: 85, 공감: 69, 추진력: 91, 예술감각: 57, 생존력: 84 },
    description:
      "당신은 숫자와 사람의 마음을 동시에 읽어내는 재능이 있었습니다. 손익 계산은 냉정했지만, 중요한 순간에는 의리를 택할 줄 알았죠. 덕분에 당신의 이름은 거래처를 넘어 동네 신뢰의 기준이 되었습니다.",
    ending:
      "해 질 녘 가게 문을 닫으며 오늘 장부를 덮던 손끝. 마지막 줄엔 ‘사람이 남는 장사’라는 문장이 적혀 있었습니다.",
  },
  painter: {
    title: "먹빛으로 계절을 붙잡은 화원",
    pastName: "신하린",
    era: "헌종 연간(19세기 중반)",
    place: "도화서 인근 화방",
    job: "도화서 화원",
    keywords: "감수성, 창의, 집중, 섬세함",
    stats: { 지략: 68, 공감: 83, 추진력: 58, 예술감각: 99, 생존력: 49 },
    description:
      "당신은 말을 아껴도 화면 위에서는 누구보다 선명했습니다. 한 번 스친 빛, 한 사람의 표정, 비 오는 처마 끝의 떨림까지 기억해 냈죠. 세상은 당신의 그림을 통해 자기 마음을 다시 들여다보았습니다.",
    ending:
      "봄비 내리던 날, 마른 붓 끝으로 마지막 점을 찍은 뒤 당신은 창밖 매화를 오래 바라보았습니다.",
  },
  shaman: {
    title: "달빛 굿판의 길잡이 무녀",
    pastName: "해온",
    era: "인조 연간(17세기 초)",
    place: "경기도 광주 산자락",
    job: "마을 무녀",
    keywords: "직관, 위로, 신비, 연결",
    stats: { 지략: 62, 공감: 94, 추진력: 65, 예술감각: 81, 생존력: 64 },
    description:
      "당신은 설명하기 어려운 기류를 누구보다 빨리 느끼는 사람이었습니다. 불안한 마음이 모이는 곳에서 중심을 잡아주었고, 공동체가 다시 숨 쉬게 만드는 의식을 이끌었죠. 당신의 언어는 늘 사람을 살리는 쪽이었습니다.",
    ending:
      "보름달 아래 북소리가 멎고, 마지막 향 연기가 하늘로 오르던 순간. 사람들의 표정이 처음으로 평온해졌습니다.",
  },
  hunter: {
    title: "산길을 읽는 고요한 포수",
    pastName: "박연우",
    era: "광해군 연간(17세기 초)",
    place: "강원도 산간 마을",
    job: "포수 겸 산림 길잡이",
    keywords: "집중, 민첩, 침착, 독립",
    stats: { 지략: 73, 공감: 56, 추진력: 82, 예술감각: 42, 생존력: 97 },
    description:
      "당신은 소란보다 정적 속에서 빛났습니다. 발자국의 깊이, 바람의 방향, 새의 움직임 같은 작은 단서를 조합해 누구도 보지 못한 길을 찾아냈죠. 필요할 때 한 번에 움직이는 타입, 바로 당신입니다.",
    ending:
      "안개 낀 능선 위, 동료들을 먼저 내려보낸 뒤 마지막으로 산길을 정리하던 발걸음이 천천히 사라졌습니다.",
  },
  monk: {
    title: "산사의 새벽종을 울리던 수행자",
    pastName: "청명",
    era: "세조 연간(15세기 중반)",
    place: "지리산 자락 산사",
    job: "승려 겸 서책 필사자",
    keywords: "평정, 성찰, 절제, 자비",
    stats: { 지략: 79, 공감: 88, 추진력: 45, 예술감각: 67, 생존력: 70 },
    description:
      "당신은 빠른 답보다 깊은 질문을 택하는 사람이었습니다. 눈앞의 이익보다 긴 호흡을 믿었고, 분주한 사람들에게 잠시 멈추는 법을 알려주었죠. 당신 곁에 있으면 이상하게도 마음이 정돈되었습니다.",
    ending:
      "동트기 전 범종을 세 번 울린 뒤, 새로 필사한 경전을 조심히 말아 올리던 손길. 고요가 산사를 채웠습니다.",
  },
  craftsman: {
    title: "불꽃을 다루는 장인의 손",
    pastName: "오진혁",
    era: "중종 연간(16세기 초)",
    place: "전주 공방 거리",
    job: "금속 공예 장인",
    keywords: "집요함, 완성도, 실용, 근성",
    stats: { 지략: 71, 공감: 58, 추진력: 80, 예술감각: 76, 생존력: 79 },
    description:
      "당신은 결과물로 말하는 사람이었습니다. 수십 번의 실패를 견디며 끝내 균형을 맞췄고, 보이지 않는 부분까지 정직하게 완성했죠. 당신의 작품은 오래 쓰일수록 진가가 드러났습니다.",
    ending:
      "가마의 열기가 사그라들 무렵, 마지막 칼집 문양을 다듬던 순간. 당신은 만족스러운 숨을 길게 내쉬었습니다.",
  },
  storyteller: {
    title: "달밤 마당의 이야기꾼",
    pastName: "남도하",
    era: "철종 연간(19세기 중반)",
    place: "평안도 장터 마당",
    job: "전기수(이야기 낭독가)",
    keywords: "표현력, 유머, 공감, 매력",
    stats: { 지략: 77, 공감: 86, 추진력: 72, 예술감각: 88, 생존력: 60 },
    description:
      "당신은 이야기로 사람의 하루를 바꾸는 재능이 있었습니다. 웃게 만들고, 울게 만들고, 다시 일어나게 하는 문장을 알았죠. 당신이 입을 열면 낯선 이들도 어느새 같은 장면을 바라보았습니다.",
    ending:
      "초여름 밤, 마지막 대목을 마친 뒤 조용히 부채를 접은 당신. 박수 소리 사이로 누군가의 훌쩍임이 들렸습니다.",
  },
  guard: {
    title: "도성을 누빈 그림자 포도군관",
    pastName: "한유건",
    era: "성종 연간(15세기 후반)",
    place: "한성부 포도청",
    job: "포도군관",
    keywords: "정의감, 신속함, 냉정, 충성",
    stats: { 지략: 75, 공감: 60, 추진력: 93, 예술감각: 31, 생존력: 88 },
    description:
      "당신은 위급한 순간에 가장 먼저 움직이는 사람이었습니다. 원칙은 단단했고 행동은 빨랐죠. 모두가 한발 물러설 때도 당신은 책임의 선을 넘지 않았고, 그래서 사람들은 당신을 마지막 안전장치로 여겼습니다.",
    ending:
      "한밤중 골목 추격 끝, 새벽 종이 울리자 당신은 칼집을 닫고 조용히 하늘을 올려다보았습니다.",
  },
  farmer: {
    title: "계절을 키운 들녘의 버팀목",
    pastName: "김다온",
    era: "세종 연간(15세기 전반)",
    place: "충청도 평야 마을",
    job: "대농 겸 향약 운영자",
    keywords: "근면, 협력, 책임감, 꾸준함",
    stats: { 지략: 69, 공감: 82, 추진력: 74, 예술감각: 40, 생존력: 90 },
    description:
      "당신은 느리지만 확실하게 공동체를 지탱하는 사람이었습니다. 풍년과 흉년을 모두 겪으며 포기보다 대비를 택했고, 내 몫보다 우리 몫을 먼저 계산했죠. 당신 덕분에 마을은 여러 번의 위기를 견뎠습니다.",
    ending:
      "가을 볕 아래 마지막 볏단을 세워두고, 들판 끝에서 한참을 바라보던 눈빛. 안도와 다음 계절의 다짐이 함께 있었습니다.",
  },
};

const RESULT_KEYS = Object.keys(RESULTS);
const scores = Object.fromEntries(RESULT_KEYS.map((key) => [key, 0]));

let currentIndex = 0;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const retryBtn = document.getElementById("retry-btn");
const shareBtn = document.getElementById("share-btn");

const questionTitle = document.getElementById("question-title");
const answerList = document.getElementById("answer-list");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");

function showScreen(screen) {
  [startScreen, quizScreen, resultScreen].forEach((el) => {
    const isCurrent = el === screen;
    el.classList.toggle("active", isCurrent);
    el.setAttribute("aria-hidden", String(!isCurrent));
  });
}

function resetScores() {
  RESULT_KEYS.forEach((key) => {
    scores[key] = 0;
  });
}

function renderQuestion() {
  const q = QUESTIONS[currentIndex];
  questionTitle.textContent = q.question;
  progressText.textContent = `${currentIndex + 1} / ${QUESTIONS.length}`;
  progressFill.style.width = `${((currentIndex + 1) / QUESTIONS.length) * 100}%`;

  answerList.innerHTML = "";
  q.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-btn";
    button.textContent = answer.text;
    button.addEventListener("click", () => onAnswer(answer.types));
    answerList.appendChild(button);
  });
}

function onAnswer(types) {
  types.forEach((type, idx) => {
    scores[type] += idx === 0 ? 3 : 2;
  });

  currentIndex += 1;
  if (currentIndex < QUESTIONS.length) {
    renderQuestion();
    return;
  }

  const result = calculateResult();
  renderResult(result);
  showScreen(resultScreen);
}

function calculateResult() {
  return RESULT_KEYS.reduce((best, key) => {
    if (scores[key] > scores[best]) return key;
    return best;
  }, RESULT_KEYS[0]);
}

function renderStats(stats) {
  const statsList = document.getElementById("stats-list");
  statsList.innerHTML = "";

  Object.entries(stats).forEach(([name, value]) => {
    const row = document.createElement("div");
    row.className = "stat-row";
    row.innerHTML = `
      <div class="stat-meta"><span>${name}</span><strong>${value}</strong></div>
      <div class="stat-track"><div class="stat-fill" style="width:${value}%"></div></div>
    `;
    statsList.appendChild(row);
  });
}

function renderResult(resultKey) {
  const result = RESULTS[resultKey];

  document.getElementById("result-title").textContent = result.title;
  document.getElementById("result-identity").textContent = `전생 이름: ${result.pastName}`;
  document.getElementById("result-era").textContent = result.era;
  document.getElementById("result-place").textContent = result.place;
  document.getElementById("result-job").textContent = result.job;
  document.getElementById("result-keywords").textContent = result.keywords;
  document.getElementById("result-description").textContent = result.description;
  document.getElementById("result-ending").textContent = result.ending;
  renderStats(result.stats);

  shareBtn.dataset.result = `${result.title} | 전생 이름 ${result.pastName}`;
}

function restartQuiz() {
  currentIndex = 0;
  resetScores();
  showScreen(startScreen);
}

async function shareResult() {
  const text = `🕯️ 나의 조선 전생 결과: ${shareBtn.dataset.result}\n${location.href}`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: "내가 전생에 조선인이었다니",
        text,
      });
      return;
    } catch (error) {
      // 사용자가 공유를 취소한 경우 등: 아래 복사로 폴백
    }
  }

  try {
    await navigator.clipboard.writeText(text);
    alert("결과가 클립보드에 복사되었어요!");
  } catch (error) {
    alert("공유 기능을 사용할 수 없어 링크를 직접 복사해 주세요.");
  }
}

startBtn.addEventListener("click", () => {
  currentIndex = 0;
  resetScores();
  showScreen(quizScreen);
  renderQuestion();
});

retryBtn.addEventListener("click", restartQuiz);
shareBtn.addEventListener("click", shareResult);
