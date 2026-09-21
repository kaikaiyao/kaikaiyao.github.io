const axes = {
  a: "冷感精确",
  b: "深度余韵",
  c: "感官甜度",
  d: "冒险热度",
  e: "留白松弛"
};

const results = {
  absolutTomorrowland: {
    code: "L01",
    title: "Absolut Tomorrowland 2026",
    subtitle: "你不是爱热闹，你是会把混乱调成好看的节拍。",
    tags: ["闪现社交", "低废话", "上新雷达"],
    vector: { a: 2.1, b: 0.4, c: 1.2, d: 3, e: 0.5 },
    colors: ["#9be7ff", "#ff4f6d", "#b7f36b"],
    sourceName: "Absolut Tomorrowland 2026 Limited Edition",
    sourceUrl: "https://www.absolut.com/en/blog/vodka-and-spirits/absolut-tomorrowland-2026-a-new-limited-edition-bottle-collection/",
    image: "./assets/absolut-tomorrowland-2026.avif",
    canvasImage: "./assets/absolut-tomorrowland-2026.avif",
    imageStyle: "cover",
    description: "你对场面有一种很灵的判断：什么时候该出现、什么时候该消失、什么时候只需要一句话让气氛亮起来。你不太吃沉重叙事，更相信现场感和第一眼的能量。",
    bottle: "官方 Tomorrowland 2026 限量瓶三色同框，像把音乐节主舞台压进透明伏特加瓶。",
    scene: "临时 afterparty、三个人知道的 rooftop、刚剪完头发的周五。",
    twist: "看起来很会玩，其实你最讨厌无效热闹。"
  },
  royalHarris: {
    code: "L02",
    title: "Royal Salute Harris Reed Edition II",
    subtitle: "你慢热，但一旦入场，连沉默都有造型。",
    tags: ["戏剧留白", "复古新剪裁", "高质感"],
    vector: { a: 1.3, b: 3, c: 1.2, d: 0.9, e: 0.8 },
    colors: ["#d7d7dd", "#211824", "#ff4f6d"],
    sourceName: "Royal Salute Harris Reed Edition II",
    sourceUrl: "https://www.royalsalute.com/en/whisky/the-harris-reed-edition-2/",
    image: "./assets/royal-salute-harris-reed.png",
    canvasImage: "./assets/royal-salute-harris-reed.png",
    imageStyle: "contain",
    description: "你喜欢有历史、有层次、有一点舞台感的东西。别人以为你难懂，其实你只是需要足够好的语境。你对审美很挑，但不是为了显得高级，而是因为粗糙会让你分心。",
    bottle: "真实酒款是 Royal Salute 与时装设计师 Harris Reed 的第二款合作，瓶身搭配皇冠式蕾丝造型。",
    scene: "深夜展览散场、复古影院、只给懂的人看的庆祝。",
    twist: "你不是冷场，你是在等一个值得开场的人。"
  },
  glenmorangieIceCream: {
    code: "L03",
    title: "Glenmorangie A Tale of Ice Cream",
    subtitle: "你会宠自己，也会把快乐做得很有品。",
    tags: ["甜而不软", "治愈感", "漂亮奖励"],
    vector: { a: 0.7, b: 1.1, c: 3, d: 0.9, e: 1.4 },
    colors: ["#ffd84d", "#ffb6cc", "#9be7ff"],
    sourceName: "Glenmorangie A Tale of Ice Cream",
    sourceUrl: "https://www.glenmorangie.com/pages/a-tale-of-ice-cream",
    image: "./assets/glenmorangie-ice-cream.png",
    canvasImage: "./assets/glenmorangie-ice-cream.png",
    imageStyle: "contain",
    description: "你很懂得用小东西救心情：一块好看的甜点、一束颜色准确的花、一段刚好不用解释的关系。你的甜感不是讨好，而是有选择地把柔软留给值得的人。",
    bottle: "真实酒款是 Glenmorangie 的 A Tale Of 系列限量版，官方以冰淇淋甜点灵感和高香草桶风味来讲述它。",
    scene: "完成一件难事后的奖励、午后散步、朋友说今天需要一点好消息的时候。",
    twist: "你看起来好哄，其实很清楚谁值得你的甜。"
  },
  monkeyFleur: {
    code: "L04",
    title: "Monkey 47 Distiller's Cut 2025",
    subtitle: "你的挑剔不是难搞，是味觉和边界都很清醒。",
    tags: ["冷幽默", "植物调", "精准控"],
    vector: { a: 2.5, b: 0.9, c: 0.4, d: 1.1, e: 2.5 },
    colors: ["#b7f36b", "#9be7ff", "#d7d7dd"],
    sourceName: "Monkey 47 Distiller's Cut 2025 Fleur de Sel",
    sourceUrl: "https://us.monkey47.com/distillers-cut",
    image: "./assets/monkey47-distillers-cut-2025.png",
    canvasImage: "./assets/monkey47-distillers-cut-2025.png",
    imageStyle: "contain",
    description: "你会被细节打动，也会被细节劝退。你喜欢干净、聪明、有一点怪的东西，不需要所有人喜欢。关系里你看重边界和分寸，但遇到有趣的人会突然变得很会接话。",
    bottle: "真实酒款是 Monkey 47 每年一度的 Distiller's Cut，2025 版以法国 Camargue 海盐 Fleur de Sel 作为第 48 种成分。",
    scene: "安静酒吧角落、低噪音晚餐、和聪明朋友互相讲冷笑话。",
    twist: "你不是没有情绪，你只是会先把情绪过滤一遍。"
  },
  elTesoroYamazaki: {
    code: "L05",
    title: "El Tesoro Mundial Yamazaki Edition",
    subtitle: "你会精心挑选风险，然后优雅地跳进去。",
    tags: ["跨界感", "行动派", "热度克制"],
    vector: { a: 1.5, b: 1.7, c: 0.7, d: 2.7, e: 1.1 },
    colors: ["#ff8f3d", "#d7d7dd", "#9be7ff"],
    sourceName: "El Tesoro Mundial: Yamazaki Edition",
    sourceUrl: "https://www.suntoryglobalspirits.com/news/el-tesoror-tequila-announces-el-tesoror-mundial-yamazakir-edition",
    image: "./assets/el-tesoro-yamazaki.webp",
    canvasImage: "./assets/el-tesoro-yamazaki.webp",
    imageStyle: "cover",
    description: "你对未知有兴趣，但不是莽撞。你会看工艺、看时机、看对方有没有真本事，然后才决定要不要让生活出现一次漂亮偏航。你适合把不同世界接在一起。",
    bottle: "真实酒款是 El Tesoro Mundial Collection 的 Yamazaki Edition，使用曾盛放山崎 12 年日本威士忌的雪莉和葡萄酒桶熟成。",
    scene: "旅行最后一晚、跨城见朋友、一个计划突然变成更好的计划。",
    twist: "你最迷人的地方，是冲动之前已经想过三步。"
  },
  garrisonLadyBird: {
    code: "L06",
    title: "Garrison Brothers Lady Bird 2026",
    subtitle: "你有阳光味道，也有能把人安顿下来的底气。",
    tags: ["温热可靠", "自然派", "甜中有骨"],
    vector: { a: 0.6, b: 2, c: 2.4, d: 0.8, e: 1.8 },
    colors: ["#ffd84d", "#ff4f6d", "#b7f36b"],
    sourceName: "Garrison Brothers 2026 Lady Bird Bourbon",
    sourceUrl: "https://www.garrisonbros.com/press/press-releases/garrison-brothers-distillery-unveils-2026-lady-bird-texas-honey-infused-cognac-finished-bourbon-returns-supporting-wildflower-conservation-with-additional-limited-cask-strength-edition/",
    image: "./assets/garrison-lady-bird.jpg",
    canvasImage: "./assets/garrison-lady-bird.jpg",
    imageStyle: "cover",
    description: "你给人的亲近感很真实，不是社交技巧，而是你愿意认真照顾重要的人和事。你喜欢自然、热度、可持续的东西，也不害怕把温柔表现得大方一点。",
    bottle: "真实酒款是蜂蜜浸润、干邑桶收尾的德州波本，2026 年版延续对野花保护项目的捐赠设定。",
    scene: "朋友来家里吃饭、周末公园、给低落的人递一盏暖灯。",
    twist: "你看起来柔软，但原则感比很多人都硬。"
  },
  dalmoreLunar: {
    code: "L07",
    title: "The Dalmore Lunar New Year 2026",
    subtitle: "你的贵气不是张扬，是所有细节终于合上拍。",
    tags: ["仪式感", "稳定审美", "礼物体质"],
    vector: { a: 1, b: 2.8, c: 1.3, d: 0.5, e: 1.7 },
    colors: ["#ff4f6d", "#ffd84d", "#211824"],
    sourceName: "The Dalmore King Alexander III Lunar New Year 2026 Edition",
    sourceUrl: "https://www.thedalmore.com/en-gb/our-collections/limited-editions/king-alexander-iii-lunar-new-year-2026-edition/",
    image: "./assets/dalmore-lunar-2026.jpg",
    canvasImage: "./assets/dalmore-lunar-2026.jpg",
    imageStyle: "contain",
    description: "你重视场合，也重视事情背后的秩序。你不是非要隆重，但该隆重的时候绝不敷衍。你适合做那个把礼物、话语和时机都安排得刚刚好的人。",
    bottle: "真实酒款是 The Dalmore King Alexander III 的 2026 农历新年限定礼盒，官方强调六种桶型交织出的节庆感。",
    scene: "重要节日、正式但不僵硬的晚餐、想把心意送得漂亮一点的时候。",
    twist: "你不是物质，你只是受不了没有心意的随便。"
  },
  bardstownCascadia: {
    code: "L08",
    title: "Bardstown Cascadia Garryana Finish",
    subtitle: "你喜欢边界被推开，但前提是推得有技术。",
    tags: ["实验桶", "结构感", "辛香路线"],
    vector: { a: 1.7, b: 2.1, c: 0.5, d: 2.4, e: 0.7 },
    colors: ["#b66f3c", "#b7f36b", "#d7d7dd"],
    sourceName: "Bardstown Cascadia Garryana Oak Barrel Finish",
    sourceUrl: "https://www.bardstownbourbon.com/products/cascadia/",
    image: "./assets/bardstown-cascadia.png",
    canvasImage: "./assets/bardstown-cascadia.png",
    imageStyle: "contain",
    description: "你不怕尝试新东西，但讨厌空洞噱头。你会问：它到底新在哪里？有没有方法？有没有结果？你对创新的爱不是跟风，是想看到世界出现真正不同的结构。",
    bottle: "真实酒款是 Bardstown Distillery Reserve 系列的 Cascadia Garryana Finish，使用稀有 Pacific Northwest Oregon White Oak 桶收尾。",
    scene: "新项目启动、独立买手店、和懂行的人认真争论一个小细节。",
    twist: "你不是叛逆，你只是对平庸过敏。"
  }
};

const resultOrder = Object.keys(results);

const questions = [
  {
    type: "single",
    mode: "single pour",
    text: "临时收到一张今晚的私密派对邀请，你第一反应是？",
    note: "选那个最接近你真实手速的。",
    options: [
      { text: "先看地点和 dress code，再决定值不值得出门。", scores: { a: 2, e: 1 } },
      { text: "问一句“谁会在”，人对了就去。", scores: { c: 1, d: 1 } },
      { text: "本来不想去，但突然想给今晚一点剧情。", scores: { d: 2 } },
      { text: "先放着，不急着回复，看看自己的状态。", scores: { e: 2 } },
      { text: "去，但会比别人晚一点到。", scores: { b: 2 } }
    ]
  },
  {
    type: "multi",
    max: 2,
    mode: "double label",
    text: "哪种包装会让你多看两秒？",
    note: "最多选两个，不用装理性。",
    options: [
      { text: "磨砂透明瓶，标签极简，几乎没有废话。", scores: { a: 2 } },
      { text: "深色玻璃，烫银或蕾丝纹路，像旧电影道具。", scores: { b: 2 } },
      { text: "亮色撞色，拿在手里很有存在感。", scores: { d: 2 } },
      { text: "花果插画，细节很多但不俗气。", scores: { c: 2 } },
      { text: "留白很多，像一件安静的小物。", scores: { e: 2 } }
    ]
  },
  {
    type: "single",
    mode: "waiting room",
    text: "朋友迟到 20 分钟，你会怎么消化这段空档？",
    note: "",
    options: [
      { text: "找一家看起来顺眼的店，自己先坐下。", scores: { a: 1, e: 1 } },
      { text: "顺手拍几张街景，等会儿可以发给 ta 吐槽。", scores: { c: 1, d: 1 } },
      { text: "不催，但心里已经重新评估这个人。", scores: { a: 2 } },
      { text: "点一杯东西，慢慢进入自己的频道。", scores: { b: 1, e: 1 } },
      { text: "直接换个地方，让今晚重新开始。", scores: { d: 2 } }
    ]
  },
  {
    type: "single",
    mode: "price tag",
    text: "下面哪种“贵”最能说服你？",
    note: "这里不测预算，只测你被什么打动。",
    options: [
      { text: "材料稀有，但不大声宣传。", scores: { b: 2 } },
      { text: "设计精准，每个细节都刚好。", scores: { a: 2 } },
      { text: "限量编号，错过就没有。", scores: { d: 2 } },
      { text: "香气漂亮，打开那一刻就开心。", scores: { c: 2 } },
      { text: "产季短，只在某个时间出现。", scores: { e: 2 } }
    ]
  },
  {
    type: "scale",
    mode: "volume knob",
    text: "给你的周五夜晚调一个音量：你更想要“安静但漂亮”的场景吗？",
    note: "",
    low: "越热闹越好",
    high: "安静本身就是奢侈品",
    scaleScores: {
      1: { d: 2 },
      2: { d: 1, c: 1 },
      3: { b: 1 },
      4: { a: 1, e: 1 },
      5: { e: 2 }
    }
  },
  {
    type: "single",
    mode: "room object",
    text: "如果选一个房间里的主角物件，你会选？",
    note: "",
    options: [
      { text: "一盏光线很准的金属落地灯。", scores: { a: 2 } },
      { text: "一张有使用痕迹的皮质单椅。", scores: { b: 2 } },
      { text: "一束颜色很妙的花。", scores: { c: 2 } },
      { text: "一面可以乱写乱贴的墙。", scores: { d: 2 } },
      { text: "一只浅色陶瓷花瓶，里面什么都不插。", scores: { e: 2 } }
    ]
  },
  {
    type: "single",
    mode: "anti-cringe",
    text: "你最受不了哪种“用力”？",
    note: "",
    options: [
      { text: "每件事都要解释得很满。", scores: { e: 2 } },
      { text: "把普通东西包装成传奇。", scores: { a: 2 } },
      { text: "氛围很冷，却假装很亲密。", scores: { c: 2 } },
      { text: "明明想赢，却说自己随便玩玩。", scores: { d: 2 } },
      { text: "太新、太亮、没有时间感。", scores: { b: 2 } }
    ]
  },
  {
    type: "single",
    mode: "almost romance",
    text: "一段关系刚开始有点暧昧，你更像？",
    note: "不用选最好看的，选最像你的。",
    options: [
      { text: "不急，先看对方审美和边界感。", scores: { a: 1, e: 1 } },
      { text: "会靠近，但保留一点神秘。", scores: { b: 2 } },
      { text: "喜欢就会明显一点，不想猜太久。", scores: { d: 2 } },
      { text: "用小细节表达，比如记住对方喜欢什么。", scores: { c: 2 } },
      { text: "让它自然发生，太设计反而没意思。", scores: { e: 2 } }
    ]
  },
  {
    type: "multi",
    max: 2,
    mode: "collab drop",
    text: "你会为哪种限定联名买单？",
    note: "最多选两个，选你会真的点进去看的。",
    options: [
      { text: "香水品牌 × 酒款。", scores: { a: 1, c: 1 } },
      { text: "独立音乐人 × 酒款。", scores: { b: 1, d: 1 } },
      { text: "美术馆 × 酒款。", scores: { a: 1, b: 1 } },
      { text: "海边民宿 × 酒款。", scores: { e: 2 } },
      { text: "潮流买手店 × 酒款。", scores: { c: 1, d: 1 } }
    ]
  },
  {
    type: "single",
    mode: "final caption",
    text: "选一句你可能会发在朋友圈里的话。",
    note: "",
    options: [
      { text: "今晚不复杂，但刚好。", scores: { a: 1, e: 1 } },
      { text: "有些东西要慢一点才有味道。", scores: { b: 2 } },
      { text: "漂亮东西就是能救命。", scores: { c: 2 } },
      { text: "临时起意，通常比较好玩。", scores: { d: 2 } },
      { text: "保持清醒，也保持一点柔软。", scores: { a: 1, c: 1 } }
    ]
  }
];

const letters = ["A", "B", "C", "D", "E"];
const optionColors = ["#9be7ff", "#b7f36b", "#ffd84d", "#ff9fb2", "#d7d7dd"];
const state = {
  current: 0,
  answers: [],
  resultKey: null,
  axes: null
};

const screens = {
  intro: document.querySelector('[data-screen="intro"]'),
  quiz: document.querySelector('[data-screen="quiz"]'),
  mixing: document.querySelector('[data-screen="mixing"]'),
  result: document.querySelector('[data-screen="result"]')
};

const els = {
  start: document.querySelector("[data-start]"),
  back: document.querySelector("[data-back]"),
  next: document.querySelector("[data-next]"),
  stepLabel: document.querySelector("[data-step-label]"),
  modeLabel: document.querySelector("[data-mode-label]"),
  progressFill: document.querySelector("[data-progress-fill]"),
  questionKicker: document.querySelector("[data-question-kicker]"),
  questionTitle: document.querySelector("[data-question-title]"),
  questionNote: document.querySelector("[data-question-note]"),
  answerZone: document.querySelector("[data-answer-zone]"),
  mixingName: document.querySelector("[data-mixing-name]"),
  resultArt: document.querySelector("[data-result-art]"),
  resultTitle: document.querySelector("[data-result-title]"),
  resultSubtitle: document.querySelector("[data-result-subtitle]"),
  resultTags: document.querySelector("[data-result-tags]"),
  resultDescription: document.querySelector("[data-result-description]"),
  resultBottle: document.querySelector("[data-result-bottle]"),
  resultScene: document.querySelector("[data-result-scene]"),
  resultTwist: document.querySelector("[data-result-twist]"),
  resultSource: document.querySelector("[data-result-source]"),
  axisPanel: document.querySelector("[data-axis-panel]"),
  share: document.querySelector("[data-share]"),
  save: document.querySelector("[data-save]"),
  restart: document.querySelector("[data-restart]"),
  gallery: document.querySelector("[data-gallery]"),
  toggleGallery: document.querySelector("[data-toggle-gallery]"),
  shareCanvas: document.querySelector("[data-share-canvas]")
};

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("is-active"));
  screens[name].classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "instant" });
}

function startQuiz() {
  state.current = 0;
  state.answers = [];
  state.resultKey = null;
  state.axes = null;
  history.replaceState(null, "", location.pathname);
  renderQuestion();
  showScreen("quiz");
}

function renderQuestion() {
  const question = questions[state.current];
  const currentNumber = state.current + 1;
  els.stepLabel.textContent = `${String(currentNumber).padStart(2, "0")} / ${questions.length}`;
  els.modeLabel.textContent = question.mode;
  els.progressFill.style.width = `${(currentNumber / questions.length) * 100}%`;
  els.questionKicker.textContent = `Label ${String(currentNumber).padStart(2, "0")}`;
  els.questionTitle.textContent = question.text;
  els.questionNote.textContent = question.note || "";
  els.back.disabled = state.current === 0;
  els.next.textContent = state.current === questions.length - 1 ? "生成我的限量款" : "封存这一口";
  els.answerZone.innerHTML = "";
  els.answerZone.dataset.layout = question.type === "scale" ? "single" : "grid";

  if (question.type === "scale") {
    renderScale(question);
  } else {
    renderOptions(question);
  }

  updateNextState();
}

function renderOptions(question) {
  const selected = state.answers[state.current] || [];
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.dataset.letter = letters[index];
    button.style.setProperty("--option-color", optionColors[index]);
    button.textContent = option.text;
    if (selected.includes(index)) button.classList.add("is-selected");
    button.addEventListener("click", () => toggleOption(index));
    els.answerZone.appendChild(button);
  });
}

function renderScale(question) {
  const answer = state.answers[state.current] || { value: 3 };
  state.answers[state.current] = answer;
  const wrapper = document.createElement("div");
  wrapper.className = "scale-wrap";
  wrapper.innerHTML = `
    <div class="scale-value" data-scale-value>${answer.value}</div>
    <input type="range" min="1" max="5" step="1" value="${answer.value}" aria-label="${question.text}">
    <div class="scale-labels"><span>${question.low}</span><span>${question.high}</span></div>
  `;
  const input = wrapper.querySelector("input");
  const value = wrapper.querySelector("[data-scale-value]");
  input.addEventListener("input", () => {
    state.answers[state.current] = { value: Number(input.value) };
    value.textContent = input.value;
    updateNextState();
  });
  els.answerZone.appendChild(wrapper);
}

function toggleOption(index) {
  const question = questions[state.current];
  const current = state.answers[state.current] || [];

  if (question.type === "single") {
    state.answers[state.current] = [index];
  } else if (current.includes(index)) {
    state.answers[state.current] = current.filter((item) => item !== index);
  } else {
    state.answers[state.current] = [...current, index].slice(-question.max);
  }

  renderQuestion();
}

function updateNextState() {
  const question = questions[state.current];
  const answer = state.answers[state.current];
  if (question.type === "scale") {
    els.next.disabled = !answer;
    return;
  }
  els.next.disabled = !answer || answer.length === 0;
}

function goNext() {
  if (els.next.disabled) return;
  if (state.current < questions.length - 1) {
    state.current += 1;
    renderQuestion();
    return;
  }
  revealResult();
}

function goBack() {
  if (state.current === 0) return;
  state.current -= 1;
  renderQuestion();
}

function addScores(target, source, multiplier = 1) {
  Object.entries(source || {}).forEach(([key, value]) => {
    target[key] += value * multiplier;
  });
}

function getAxisScores() {
  const score = { a: 0, b: 0, c: 0, d: 0, e: 0 };
  state.answers.forEach((answer, index) => {
    const question = questions[index];
    if (question.type === "scale") {
      addScores(score, question.scaleScores[answer.value]);
      return;
    }
    answer.forEach((optionIndex) => {
      const multiplier = question.type === "multi" ? 0.92 : 1;
      addScores(score, question.options[optionIndex].scores, multiplier);
    });
  });
  return score;
}

function dotProduct(axisScores, vector) {
  return Object.keys(axisScores).reduce((sum, key) => sum + axisScores[key] * (vector[key] || 0), 0);
}

function pickResult(axisScores) {
  const ranked = resultOrder
    .map((key) => [key, dotProduct(axisScores, results[key].vector)])
    .sort((left, right) => right[1] - left[1]);

  const [firstKey, firstScore] = ranked[0];
  const [secondKey, secondScore] = ranked[1];
  if (firstScore - secondScore > 1.2) return firstKey;

  const strongestAxis = Object.entries(axisScores).sort((left, right) => right[1] - left[1])[0][0];
  const axisTieBreak = {
    a: ["monkeyFleur", "absolutTomorrowland", "bardstownCascadia"],
    b: ["royalHarris", "dalmoreLunar", "bardstownCascadia"],
    c: ["glenmorangieIceCream", "garrisonLadyBird", "absolutTomorrowland"],
    d: ["elTesoroYamazaki", "absolutTomorrowland", "bardstownCascadia"],
    e: ["monkeyFleur", "garrisonLadyBird", "dalmoreLunar"]
  };
  return axisTieBreak[strongestAxis].find((key) => key === firstKey || key === secondKey) || firstKey;
}

function revealResult() {
  const axisScores = getAxisScores();
  const resultKey = pickResult(axisScores);
  state.resultKey = resultKey;
  state.axes = axisScores;
  sessionStorage.setItem(`limited-spirit:${resultKey}`, JSON.stringify(axisScores));
  els.mixingName.textContent = results[resultKey].title;
  showScreen("mixing");
  window.setTimeout(() => renderResult(resultKey, axisScores), 760);
}

function renderResult(key, axisScores) {
  const result = results[key];
  document.documentElement.style.setProperty("--accent", result.colors[0]);
  document.documentElement.style.setProperty("--accent-two", result.colors[1]);
  els.resultArt.innerHTML = productMarkup(result);
  els.resultTitle.textContent = result.title;
  els.resultSubtitle.textContent = result.subtitle;
  els.resultTags.innerHTML = result.tags.map((tag) => `<span>${tag}</span>`).join("");
  els.resultDescription.textContent = result.description;
  els.resultBottle.textContent = result.bottle;
  els.resultScene.textContent = result.scene;
  els.resultTwist.textContent = result.twist;
  els.resultSource.textContent = result.sourceName;
  els.resultSource.href = result.sourceUrl;
  els.axisPanel.innerHTML = axisMarkup(axisScores);
  renderGallery(key);
  history.replaceState(null, "", `${location.pathname}#${key}`);
  showScreen("result");
}

function productMarkup(result) {
  const [one, two, three] = result.colors;
  return `
    <figure class="product-frame" style="--product-one:${one};--product-two:${two};--product-three:${three}">
      <div class="product-image-wrap">
        <img class="product-image product-image--${result.imageStyle || "contain"}" src="${result.image}" alt="${result.sourceName} 官方酒款图片">
      </div>
      <figcaption>
        <strong>${result.sourceName}</strong>
        <span>${result.code} / real bottle reference</span>
      </figcaption>
    </figure>
  `;
}

function axisMarkup(axisScores) {
  const max = Math.max(...Object.values(axisScores), 1);
  return Object.entries(axes).map(([key, label]) => {
    const value = Math.round((axisScores[key] / max) * 100);
    return `
      <div class="axis-row">
        <span>${label}</span>
        <div class="axis-track"><i style="width:${value}%"></i></div>
        <span>${value}</span>
      </div>
    `;
  }).join("");
}

function renderGallery(activeKey) {
  els.gallery.innerHTML = resultOrder.map((key) => {
    const result = results[key];
    const marker = key === activeKey ? " / 你的款" : "";
    return `
      <article>
        <img class="mini-product" src="${result.image}" alt="${result.sourceName}">
        <div>
          <h3>${result.title}${marker}</h3>
          <p>${result.subtitle}</p>
        </div>
      </article>
    `;
  }).join("");
  els.gallery.hidden = true;
  els.toggleGallery.textContent = "查看全部限量款";
}

function toggleGallery() {
  const nextHidden = !els.gallery.hidden;
  els.gallery.hidden = nextHidden;
  els.toggleGallery.textContent = nextHidden ? "查看全部限量款" : "收起全部限量款";
}

async function shareQuiz() {
  const quizUrl = `${location.origin}${location.pathname}`;
  const text = state.resultKey
    ? `我测出来是「${results[state.resultKey].title}」。来测测你是哪种限量款烈酒：${quizUrl}`
    : `来测测你是哪种限量款烈酒：${quizUrl}`;
  try {
    await navigator.clipboard.writeText(text);
    els.share.textContent = "已复制";
    window.setTimeout(() => {
      els.share.textContent = "复制测试链接";
    }, 1400);
  } catch {
    window.prompt("复制这个链接发给朋友", quizUrl);
  }
}

function saveCard() {
  if (!state.resultKey) return;
  const result = results[state.resultKey];
  if (result.canvasImage) {
    const image = new Image();
    image.onload = () => downloadCard(result, image);
    image.onerror = () => downloadCard(result);
    image.src = result.canvasImage;
    return;
  }
  downloadCard(result);
}

function downloadCard(result, image) {
  const canvas = els.shareCanvas;
  const ctx = canvas.getContext("2d");
  const [one, two, three] = result.colors;

  ctx.fillStyle = "#fff7f0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = one;
  ctx.fillRect(58, 58, 964, 1484);
  ctx.strokeStyle = "#211824";
  ctx.lineWidth = 8;
  ctx.strokeRect(58, 58, 964, 1484);
  ctx.fillStyle = "#fffdf8";
  ctx.fillRect(92, 92, 896, 1416);
  ctx.strokeRect(92, 92, 896, 1416);

  if (image) {
    drawCanvasProduct(ctx, image, 126, 150, 828, 560, one, two);
  } else {
    drawCanvasBottle(ctx, result, 340, 190, one, two, three);
  }

  ctx.fillStyle = "#ff4f6d";
  ctx.font = "bold 34px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillText("LIMITED SPIRIT PERSONALITY", 126, 770);

  ctx.fillStyle = "#211824";
  ctx.font = "bold 76px -apple-system, BlinkMacSystemFont, sans-serif";
  wrapCanvasText(ctx, result.title, 126, 880, 828, 88);

  ctx.font = "bold 38px -apple-system, BlinkMacSystemFont, sans-serif";
  wrapCanvasText(ctx, result.subtitle, 126, 1078, 828, 54);

  ctx.fillStyle = "rgba(33,24,36,0.68)";
  ctx.font = "30px -apple-system, BlinkMacSystemFont, sans-serif";
  wrapCanvasText(ctx, result.twist, 126, 1260, 828, 46);

  ctx.fillStyle = two;
  roundRect(ctx, 126, 1382, 350, 62, 31);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#211824";
  ctx.font = "bold 28px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillText(`${result.code} / ${result.tags.join(" · ")}`, 154, 1423);

  const link = document.createElement("a");
  link.download = `limited-spirit-${result.code}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function drawCanvasProduct(ctx, image, x, y, width, height, one, two) {
  ctx.save();
  const gradient = ctx.createLinearGradient(x, y, x + width, y + height);
  gradient.addColorStop(0, one);
  gradient.addColorStop(1, two);
  ctx.fillStyle = gradient;
  roundRect(ctx, x, y, width, height, 42);
  ctx.fill();
  ctx.strokeStyle = "#211824";
  ctx.lineWidth = 8;
  ctx.stroke();
  containImage(ctx, image, x + 42, y + 34, width - 84, height - 68);
  ctx.restore();
}

function containImage(ctx, image, x, y, width, height) {
  const imageRatio = image.width / image.height;
  const targetRatio = width / height;
  let drawWidth = width;
  let drawHeight = height;
  let offsetX = 0;
  let offsetY = 0;
  if (imageRatio > targetRatio) {
    drawHeight = width / imageRatio;
    offsetY = (height - drawHeight) / 2;
  } else {
    drawWidth = height * imageRatio;
    offsetX = (width - drawWidth) / 2;
  }
  ctx.drawImage(image, x + offsetX, y + offsetY, drawWidth, drawHeight);
}

function drawCanvasBottle(ctx, result, x, y, one, two, three) {
  ctx.save();
  ctx.translate(x, y);
  ctx.strokeStyle = "#211824";
  ctx.lineWidth = 8;
  roundRect(ctx, 88, 0, 96, 128, 30);
  ctx.fillStyle = three;
  ctx.fill();
  ctx.stroke();
  roundRect(ctx, 20, 100, 232, 470, 48);
  const gradient = ctx.createLinearGradient(20, 100, 252, 570);
  gradient.addColorStop(0, one);
  gradient.addColorStop(1, two);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#fffdf8";
  roundRect(ctx, 48, 250, 176, 170, 10);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#211824";
  ctx.font = "bold 32px -apple-system, BlinkMacSystemFont, sans-serif";
  wrapCanvasText(ctx, result.title, 68, 314, 136, 38);
  ctx.font = "bold 22px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillText(result.code, 104, 395);
  ctx.restore();
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  let line = "";
  let cursorY = y;
  Array.from(text).forEach((char) => {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, cursorY);
      line = char;
      cursorY += lineHeight;
    } else {
      line = testLine;
    }
  });
  ctx.fillText(line, x, cursorY);
}

els.start.addEventListener("click", startQuiz);
els.back.addEventListener("click", goBack);
els.next.addEventListener("click", goNext);
els.share.addEventListener("click", shareQuiz);
els.save.addEventListener("click", saveCard);
els.restart.addEventListener("click", startQuiz);
els.toggleGallery.addEventListener("click", toggleGallery);

function restoreResultFromHash() {
  const hashKey = location.hash.replace("#", "");
  if (!results[hashKey]) return false;
  state.resultKey = hashKey;
  const savedAxes = sessionStorage.getItem(`limited-spirit:${hashKey}`);
  state.axes = savedAxes ? JSON.parse(savedAxes) : results[hashKey].vector;
  renderResult(hashKey, state.axes);
  return true;
}

window.addEventListener("hashchange", restoreResultFromHash);
restoreResultFromHash();
