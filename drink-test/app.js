const drinks = {
  peachJasmine: {
    code: "D01",
    zh: "白桃茉莉云顶茶",
    en: "White Peach Jasmine Cloud Tea",
    line: "温柔但有主见，清透得很有分寸。",
    tags: ["清透", "体面", "松弛"],
    image: "./assets/peach-jasmine.webp",
    accent: "#f2ad9f",
    description: "你给人的感觉是干净、舒服、很会照顾场面。你不一定抢话，但总能让气氛变得顺。你喜欢美好的东西，也有自己的判断，不会因为别人热闹就轻易改变节奏。",
    scene: "周末下午的独处、轻约会、刚完成一件事后的奖励。",
    reminder: "别总是先照顾所有人的感受，你自己的偏好也值得被放在第一位。",
    formula: [["果感", 86], ["茶感", 72], ["松弛感", 88]]
  },
  lycheeMilk: {
    code: "D02",
    zh: "海盐荔枝牛乳冰",
    en: "Sea Salt Lychee Milk Frost",
    line: "甜美外表，清醒内核，反差感很会赢。",
    tags: ["精致", "反差", "社交感"],
    image: "./assets/lychee-milk.webp",
    accent: "#f0bbc2",
    description: "你有很强的社交适应力，能可爱、能专业，也能在关键时刻很有分寸。别人可能先看到你的亲和力，但熟悉之后会发现你其实很清醒，知道什么值得投入。",
    scene: "朋友聚会、城市白天出门、需要一点漂亮能量的时候。",
    reminder: "不必每次都表现得很好相处，适度冷一点，也是一种自我保护。",
    formula: [["奶感", 82], ["社交能量", 90], ["清醒度", 76]]
  },
  limeBasil: {
    code: "D03",
    zh: "青柠罗勒气泡茶",
    en: "Lime Basil Sparkling Tea",
    line: "永远在更新人生版本，开盖就是新地图。",
    tags: ["明快", "冒险", "自由"],
    image: "./assets/lime-basil.webp",
    accent: "#b9d978",
    description: "你对新鲜感有天然敏感度，不喜欢被固定标签框住。你行动快、反馈快，愿意试错，也常常比别人更早察觉趋势和机会。",
    scene: "旅行路上、新项目开始、想换个心情的午后。",
    reminder: "冒险很迷人，但别把每一次不安都误判成“我需要改变”。",
    formula: [["气泡感", 94], ["行动力", 89], ["稳定度", 38]]
  },
  osmanthusOolong: {
    code: "D04",
    zh: "桂花乌龙轻乳",
    en: "Osmanthus Oolong Light Latte",
    line: "稳定、克制，越品越深。",
    tags: ["克制", "成熟", "东方感"],
    image: "./assets/osmanthus-oolong.webp",
    accent: "#e4bd69",
    description: "你不喜欢夸张表达，更相信长期积累。你做事讲究质感和节奏，不会轻易被短期情绪带跑。你的吸引力不是第一眼的冲击，而是越相处越让人放心。",
    scene: "认真工作后的傍晚、安静会面、需要恢复秩序感的时候。",
    reminder: "你可以偶尔不用那么懂事，真正亲近的人也会接住你的失控。",
    formula: [["茶感", 88], ["奶感", 52], ["秩序感", 91]]
  },
  blackberryYogurt: {
    code: "D05",
    zh: "黑莓紫苏酸奶昔",
    en: "Blackberry Shiso Yogurt Blend",
    line: "敏感而有审美雷达，细节就是你的风味层。",
    tags: ["艺术感", "细腻", "独处"],
    image: "./assets/blackberry-yogurt.webp",
    accent: "#b99ac7",
    description: "你观察世界的方式很细，有时别人还没说出口，你已经感受到了气氛变化。你对颜色、质地、语气、空间都有自己的判断，适合慢慢被理解。",
    scene: "展览之后、深夜写东西、需要一点私人空间时。",
    reminder: "敏感不是负担，但你不需要为所有细节负责。",
    formula: [["酸奶感", 82], ["审美雷达", 96], ["社交电量", 42]]
  },
  pandanColdbrew: {
    code: "D06",
    zh: "椰乳斑斓冷萃",
    en: "Pandan Coconut Cold Brew",
    line: "外松内卷，清爽包装里藏着高效率系统。",
    tags: ["清醒", "效率", "都市"],
    image: "./assets/pandan-coldbrew.webp",
    accent: "#9fc28f",
    description: "你看起来轻松，实际上对效率、结果和自我要求都很高。你喜欢聪明的工作方式，不爱无效消耗。你追求质感，因为好的系统会让生活更顺。",
    scene: "早高峰、深度工作前、需要快速进入状态时。",
    reminder: "效率不是唯一价值，有些慢下来的时刻不是浪费。",
    formula: [["咖啡感", 76], ["效率值", 95], ["松弛感", 58]]
  },
  camelliaGrape: {
    code: "D07",
    zh: "山茶花白葡萄气泡",
    en: "Camellia White Grape Fizz",
    line: "轻盈、漂亮、不被定义，自带上新感。",
    tags: ["亮眼", "灵动", "氛围感"],
    image: "./assets/camellia-grape.webp",
    accent: "#bfdc91",
    description: "你自带一种明亮感，不一定高调，但容易被注意到。你喜欢有设计感、有呼吸感的生活，也懂得给关系和自己都留空间。",
    scene: "晴天出门、拍照散步、和朋友临时起意的小聚。",
    reminder: "轻盈不代表你必须永远开心，偶尔沉下来也没关系。",
    formula: [["果感", 90], ["气泡感", 84], ["自由度", 87]]
  },
  puerOat: {
    code: "D08",
    zh: "陈皮普洱燕麦乳",
    en: "Aged Tangerine Puer Oat Latte",
    line: "历练感很强的定海神针，越稳越高级。",
    tags: ["稳重", "边界", "可靠"],
    image: "./assets/puer-oat.webp",
    accent: "#d28b57",
    description: "你很有边界，也很懂责任。面对复杂局面时，你通常不是最吵的那个，却是最能稳住局面的人。你不轻易许诺，但答应了就会认真完成。",
    scene: "重要会议前、长谈时、需要做决定的晚上。",
    reminder: "不是所有事情都需要你来兜底，适当把责任还给别人。",
    formula: [["茶感", 86], ["边界感", 96], ["甜度", 28]]
  },
  figRose: {
    code: "D09",
    zh: "无花果玫瑰酸奶",
    en: "Fig Rose Yogurt Cream",
    line: "浪漫，但不失分寸，柔软也有结构。",
    tags: ["柔软", "审美", "治愈"],
    image: "./assets/fig-rose.webp",
    accent: "#d7a0ac",
    description: "你重视关系里的细节，也愿意为喜欢的人和事投入心力。你有柔软的一面，但并不盲目。你的浪漫不是悬浮的，而是落在日常里的。",
    scene: "纪念日、睡前放松、需要被温柔包裹的时候。",
    reminder: "别因为害怕失望，就把期待藏得太深。",
    formula: [["酸奶感", 88], ["浪漫值", 93], ["分寸感", 78]]
  },
  pearHerbal: {
    code: "D10",
    zh: "雪梨竹蔗草本茶",
    en: "Pear Cane Herbal Infusion",
    line: "安静地照顾自己，温润但很有恢复力。",
    tags: ["温润", "低调", "恢复力"],
    image: "./assets/pear-herbal.webp",
    accent: "#d9c783",
    description: "你不追求强刺激，更在意身体和情绪是否真正舒服。你有恢复力，也有自己的慢节奏。比起被人群推着走，你更愿意听见自己的状态。",
    scene: "加班后、换季时、想把自己慢慢找回来时。",
    reminder: "休息不是退后，是为了让你重新拥有自己。",
    formula: [["草本感", 88], ["恢复力", 97], ["刺激度", 22]]
  }
};

const questions = [
  {
    text: "你的日常节奏更像哪一种？",
    layer: "Base Tea",
    options: [
      { text: "事情很多，但你会努力维持一个好看的秩序。", main: "pandanColdbrew", support: "osmanthusOolong" },
      { text: "不喜欢被排太满，最好能留出一点自由呼吸的时间。", main: "pearHerbal", support: "peachJasmine" },
      { text: "越有变化越来劲，临时计划也能让你兴奋。", main: "limeBasil", support: "camelliaGrape" },
      { text: "喜欢稳定推进，慢一点没关系，但要可控。", main: "puerOat", support: "osmanthusOolong" }
    ]
  },
  {
    text: "在社交场合里，你通常是？",
    layer: "Social Foam",
    options: [
      { text: "能自然接话，也会照顾气氛，不让场子冷掉。", main: "lycheeMilk", support: "peachJasmine" },
      { text: "更喜欢一对一深聊，人太多会消耗你。", main: "blackberryYogurt", support: "figRose" },
      { text: "看心情，状态好时很闪，状态低时想隐身。", main: "camelliaGrape", support: "blackberryYogurt" },
      { text: "不主动热场，但大家遇到事会来问你意见。", main: "puerOat", support: "pandanColdbrew" }
    ]
  },
  {
    text: "面对工作或任务，你更接近？",
    layer: "Work Ice",
    options: [
      { text: "先搭框架，再把细节一层层补齐。", main: "osmanthusOolong", support: "puerOat" },
      { text: "快速开始，边做边修正，先让事情流动起来。", main: "limeBasil", support: "pandanColdbrew" },
      { text: "很在意完成度和质感，不喜欢交出粗糙的东西。", main: "blackberryYogurt", support: "figRose" },
      { text: "追求高效清爽，能自动化或简化就不想硬耗。", main: "pandanColdbrew", support: "puerOat" }
    ]
  },
  {
    text: "最近你的情绪底色更像？",
    layer: "Mood Jelly",
    options: [
      { text: "表面稳定，内心其实一直在处理很多事。", main: "osmanthusOolong", support: "pearHerbal" },
      { text: "有点想逃离重复生活，需要新鲜空气。", main: "limeBasil", support: "camelliaGrape" },
      { text: "想被温柔对待，也想慢慢恢复能量。", main: "figRose", support: "pearHerbal" },
      { text: "状态不错，甚至有点想漂亮地出场。", main: "camelliaGrape", support: "lycheeMilk" }
    ]
  },
  {
    text: "你偏好的消费审美是？",
    layer: "Design Note",
    options: [
      { text: "低调但有质感，不需要 logo 很大。", main: "osmanthusOolong", support: "puerOat" },
      { text: "设计要特别一点，颜色、包装、名字都要有记忆点。", main: "blackberryYogurt", support: "camelliaGrape" },
      { text: "好看很重要，也要适合拍照和分享。", main: "lycheeMilk", support: "camelliaGrape" },
      { text: "成分、体验、实际舒适度比噱头更重要。", main: "pearHerbal", support: "pandanColdbrew" }
    ]
  },
  {
    text: "对新东西的态度，你更像？",
    layer: "Fresh Drop",
    options: [
      { text: "很愿意尝试，只要有一点心动就想点。", main: "limeBasil", support: "lycheeMilk" },
      { text: "会尝试，但希望它不是完全失控的味道。", main: "camelliaGrape", support: "peachJasmine" },
      { text: "偏好经典组合，偶尔加一点小变化就够了。", main: "osmanthusOolong", support: "peachJasmine" },
      { text: "除非真的被说服，否则不会轻易跟风。", main: "puerOat", support: "pearHerbal" }
    ]
  },
  {
    text: "你的边界感通常是？",
    layer: "Cup Sleeve",
    options: [
      { text: "很清楚，但表达会尽量温和。", main: "peachJasmine", support: "osmanthusOolong" },
      { text: "一开始很好说话，但越界之后会迅速冷掉。", main: "lycheeMilk", support: "puerOat" },
      { text: "边界很强，不喜欢别人随便安排你。", main: "puerOat", support: "pandanColdbrew" },
      { text: "有时会心软，需要练习把“不”说得更直接。", main: "figRose", support: "pearHerbal" }
    ]
  },
  {
    text: "如果把理想的一天做成一杯饮品，它应该有？",
    layer: "Final Topping",
    options: [
      { text: "清透花香、一点果味，轻盈但不寡淡。", main: "peachJasmine", support: "camelliaGrape" },
      { text: "奶感、咸甜反差，入口有被奖励的感觉。", main: "lycheeMilk", support: "figRose" },
      { text: "气泡、草本、酸感，像刚打开新的地图。", main: "limeBasil", support: "blackberryYogurt" },
      { text: "茶感、谷物或草本，喝完觉得整个人被安顿好。", main: "pearHerbal", support: "puerOat" }
    ]
  }
];

const drinkOrder = [
  "peachJasmine",
  "lycheeMilk",
  "limeBasil",
  "osmanthusOolong",
  "blackberryYogurt",
  "pandanColdbrew",
  "camelliaGrape",
  "puerOat",
  "figRose",
  "pearHerbal"
];

const questionInfluence = [10, 11, 12, 15, 13, 12, 16, 17];
const rarePrimaryBonus = { 1: 16, 2: 9, 3: 4, 4: 1, 5: 0 };
const primaryCounts = questions.reduce((counts, question) => {
  question.options.forEach((option) => {
    counts[option.main] = (counts[option.main] || 0) + 1;
  });
  return counts;
}, {});
const optionColors = ["#f4b9a8", "#cce8dc", "#f7d26f", "#c4a0c9"];
const letters = ["A", "B", "C", "D"];
const state = { current: 0, answers: [], resultKey: null };

const screens = {
  intro: document.querySelector('[data-screen="intro"]'),
  quiz: document.querySelector('[data-screen="quiz"]'),
  mixing: document.querySelector('[data-screen="mixing"]'),
  result: document.querySelector('[data-screen="result"]')
};

const els = {
  start: document.querySelector("[data-start]"),
  back: document.querySelector("[data-back]"),
  stepLabel: document.querySelector("[data-step-label]"),
  layerLabel: document.querySelector("[data-layer-label]"),
  progressFill: document.querySelector("[data-progress-fill]"),
  questionKicker: document.querySelector("[data-question-kicker]"),
  questionTitle: document.querySelector("[data-question-title]"),
  options: document.querySelector("[data-options]"),
  mixingName: document.querySelector("[data-mixing-name]"),
  resultImage: document.querySelector("[data-result-image]"),
  resultCode: document.querySelector("[data-result-code]"),
  resultTitle: document.querySelector("[data-result-title]"),
  resultEnglish: document.querySelector("[data-result-english]"),
  resultLine: document.querySelector("[data-result-line]"),
  resultTags: document.querySelector("[data-result-tags]"),
  resultDescription: document.querySelector("[data-result-description]"),
  resultScene: document.querySelector("[data-result-scene]"),
  resultReminder: document.querySelector("[data-result-reminder]"),
  formula: document.querySelector("[data-formula]"),
  share: document.querySelector("[data-share]"),
  restart: document.querySelector("[data-restart]"),
  toggleGallery: document.querySelector("[data-toggle-gallery]"),
  gallery: document.querySelector("[data-gallery]"),
  shareCanvas: document.querySelector("[data-share-canvas]")
};

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("is-active"));
  screens[name].classList.add("is-active");
  window.scrollTo(0, 0);
}

function startQuiz() {
  state.current = 0;
  state.answers = [];
  state.resultKey = null;
  renderQuestion();
  showScreen("quiz");
}

function renderQuestion() {
  const question = questions[state.current];
  const currentNumber = state.current + 1;
  els.stepLabel.textContent = `${String(currentNumber).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}`;
  els.layerLabel.textContent = question.layer;
  els.progressFill.style.width = `${(currentNumber / questions.length) * 100}%`;
  els.questionKicker.textContent = `Flavor ${String(currentNumber).padStart(2, "0")}`;
  els.questionTitle.textContent = question.text;
  els.back.disabled = state.current === 0;
  els.options.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.dataset.letter = letters[index];
    button.style.setProperty("--option-color", optionColors[index]);
    button.textContent = option.text;
    button.addEventListener("click", () => chooseOption(index, button));
    els.options.appendChild(button);
  });
}

function chooseOption(index, button) {
  if (button.classList.contains("is-selected")) return;
  button.classList.add("is-selected");
  state.answers[state.current] = index;

  window.setTimeout(() => {
    if (state.current < questions.length - 1) {
      state.current += 1;
      renderQuestion();
    } else {
      revealResult();
    }
  }, 220);
}

function goBack() {
  if (state.current === 0) return;
  state.answers.splice(state.current - 1, 1);
  state.current -= 1;
  renderQuestion();
}

function getScores() {
  const scores = Object.fromEntries(drinkOrder.map((key) => [key, 0]));
  const mainCounts = Object.fromEntries(drinkOrder.map((key) => [key, 0]));
  const supportCounts = Object.fromEntries(drinkOrder.map((key) => [key, 0]));

  state.answers.forEach((answerIndex, questionIndex) => {
    const option = questions[questionIndex].options[answerIndex];
    const questionPower = questionInfluence[questionIndex] || 10;
    const primaryCount = primaryCounts[option.main] || 1;
    const mainValue = questionPower + (rarePrimaryBonus[primaryCount] || 0) + (questionIndex + 1) * 0.17 + (answerIndex + 1) * 0.09;
    const supportValue = Math.max(3, Math.round(questionPower * 0.36));
    scores[option.main] += mainValue;
    scores[option.support] += supportValue;
    mainCounts[option.main] += 1;
    supportCounts[option.support] += 1;
  });

  drinkOrder.forEach((drink) => {
    if (mainCounts[drink] > 1) {
      scores[drink] += mainCounts[drink] * mainCounts[drink] * 3.2;
    }
    if (mainCounts[drink] && supportCounts[drink]) {
      scores[drink] += Math.min(7, supportCounts[drink] * 2);
    }
  });

  return scores;
}

function pickResult(scores) {
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}

function revealResult() {
  const scores = getScores();
  const resultKey = pickResult(scores);
  state.resultKey = resultKey;
  els.mixingName.textContent = drinks[resultKey].zh;
  showScreen("mixing");
  window.setTimeout(() => renderResult(resultKey), 920);
}

function renderResult(resultKey) {
  const result = drinks[resultKey];
  document.documentElement.style.setProperty("--accent", result.accent);
  els.resultImage.src = result.image;
  els.resultImage.alt = `${result.zh}饮品插画`;
  els.resultCode.textContent = result.code;
  els.resultTitle.textContent = result.zh;
  els.resultEnglish.textContent = result.en;
  els.resultLine.textContent = result.line;
  els.resultTags.innerHTML = result.tags.map((tag) => `<span>${tag}</span>`).join("");
  els.resultDescription.textContent = result.description;
  els.resultScene.textContent = result.scene;
  els.resultReminder.textContent = result.reminder;
  els.formula.innerHTML = result.formula.map(([name, value]) => `
    <div class="formula-row">
      <span>${name}</span>
      <div class="formula-bar"><i style="width:${value}%"></i></div>
      <span>${value}%</span>
    </div>
  `).join("");
  renderGallery(resultKey);
  history.replaceState(null, "", `${location.pathname}#${result.code.toLowerCase()}`);
  showScreen("result");
}

function renderGallery(activeKey) {
  els.gallery.innerHTML = drinkOrder.map((key) => {
    const drink = drinks[key];
    const marker = key === activeKey ? " · 你的饮品" : "";
    return `
      <article class="drink-item">
        <img src="${drink.image}" alt="${drink.zh}">
        <div>
          <h3>${drink.zh}${marker}</h3>
          <p>${drink.line}</p>
        </div>
      </article>
    `;
  }).join("");
  els.gallery.hidden = true;
  els.toggleGallery.textContent = "查看全部饮品";
}

function toggleGallery() {
  const isHidden = els.gallery.hidden;
  els.gallery.hidden = !isHidden;
  els.toggleGallery.textContent = isHidden ? "收起全部饮品" : "查看全部饮品";
}

async function shareResult() {
  const result = drinks[state.resultKey];
  const cleanUrl = `${location.origin}${location.pathname}`;
  const shareData = {
    title: "测测你是哪杯都市轻奢饮品",
    text: `我调出来是「${result.zh}」：${result.line}`,
    url: cleanUrl
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }

  try {
    await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
    els.share.textContent = "已复制";
    window.setTimeout(() => {
      els.share.textContent = "分享饮品卡";
    }, 1400);
  } catch {
    downloadShareCard(result);
  }
}

function downloadShareCard(result) {
  const canvas = els.shareCanvas;
  const ctx = canvas.getContext("2d");
  const image = new Image();
  image.crossOrigin = "anonymous";
  image.onload = () => {
    ctx.fillStyle = "#fbf8f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = result.accent;
    ctx.beginPath();
    ctx.arc(920, 170, 180, 0, Math.PI * 2);
    ctx.fill();
    coverImage(ctx, image, 70, 170, 940, 740);
    ctx.fillStyle = "#352f2a";
    ctx.font = "bold 78px -apple-system, BlinkMacSystemFont, sans-serif";
    wrapCanvasText(ctx, result.zh, 74, 1040, 920, 92);
    ctx.fillStyle = "rgba(53,47,42,0.66)";
    ctx.font = "38px -apple-system, BlinkMacSystemFont, sans-serif";
    wrapCanvasText(ctx, result.line, 74, 1228, 920, 58);
    ctx.fillStyle = result.accent;
    ctx.roundRect(74, 1434, 230, 70, 35);
    ctx.fill();
    ctx.fillStyle = "#352f2a";
    ctx.font = "bold 32px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText(result.code, 112, 1480);
    ctx.fillStyle = "rgba(53,47,42,0.62)";
    ctx.font = "30px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("kaikaiyao.github.io/drink-test", 74, 1812);
    const link = document.createElement("a");
    link.download = `my-${result.code.toLowerCase()}-drink-card.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };
  image.src = result.image;
}

function coverImage(ctx, image, x, y, width, height) {
  const imageRatio = image.width / image.height;
  const targetRatio = width / height;
  let drawWidth = width;
  let drawHeight = height;
  let offsetX = 0;
  let offsetY = 0;
  if (imageRatio > targetRatio) {
    drawHeight = height;
    drawWidth = height * imageRatio;
    offsetX = (width - drawWidth) / 2;
  } else {
    drawWidth = width;
    drawHeight = width / imageRatio;
    offsetY = (height - drawHeight) / 2;
  }
  ctx.drawImage(image, x + offsetX, y + offsetY, drawWidth, drawHeight);
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
els.restart.addEventListener("click", startQuiz);
els.share.addEventListener("click", shareResult);
els.toggleGallery.addEventListener("click", toggleGallery);
