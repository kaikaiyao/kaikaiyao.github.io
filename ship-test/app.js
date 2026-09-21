const ships = {
  relationship: {
    zh: "有承诺的恋人关系",
    en: "Relationship",
    line: "你现在适合被认真选择，也认真选择别人。",
    tags: ["有名有份", "稳定回应", "认真靠近"],
    image: "./assets/relationship.webp",
    description: "你对亲密并不只是心动，而是希望彼此有清晰的位置、稳定的回应和共同的期待。你愿意投入，也希望对方不是只给暧昧和情绪价值，而是真的愿意把你放进生活里。",
    mode: "明确关系、规律沟通、共同规划约会与未来节奏。",
    reminder: "不要因为想要确定，就忽略关系里的实际质量。真正的承诺应该让你更安心，而不是更焦虑。"
  },
  situationship: {
    zh: "未命名的暧昧关系",
    en: "Situationship",
    line: "你适合一点心动、一点自由，还有一点未完成。",
    tags: ["暧昧拉扯", "不急定义", "情绪张力"],
    image: "./assets/situationship.webp",
    description: "你现在可能享受靠近，却还没准备好把一切说得太满。暧昧、试探、若即若离会让你有感觉，但你也需要留意自己是否真的舒服，而不是被不确定性牵着走。",
    mode: "保持轻盈互动，但定期确认彼此期待。",
    reminder: "不定义可以很浪漫，但长期不清楚也会消耗人。别让“顺其自然”变成单方面等待。"
  },
  casualship: {
    zh: "轻松随性的亲密关系",
    en: "Casualship",
    line: "你现在更适合舒服、自由、不被未来绑住的连接。",
    tags: ["低压力", "享受当下", "轻盈靠近"],
    image: "./assets/casualship.webp",
    description: "你并不排斥亲密，只是不想让关系立刻变成责任、计划和压力。你适合享受当下的陪伴、火花和轻松感，但前提是双方都知道这段关系的边界。",
    mode: "低压力约会、即时分享、坦诚说明不承诺长期。",
    reminder: "轻松不等于模糊。越是随性，越需要诚实，避免让别人误会，也避免委屈自己。"
  },
  friendship: {
    zh: "朋友以上的温柔关系",
    en: "Friendship",
    line: "你需要的是懂你的人，而不一定是立刻恋爱的人。",
    tags: ["朋友感", "温柔默契", "慢慢升级"],
    image: "./assets/friendship.webp",
    description: "你现在适合一种有陪伴感、有默契、但不急着升级的关系。它像朋友，却带一点暧昧的柔光；像恋人，却还保留退路和空间。",
    mode: "一起吃饭、聊天、散步、分享日常，但不急于确认身份。",
    reminder: "如果你真的喜欢对方，别永远藏在朋友身份里。温柔也需要勇气。"
  },
  onlineship: {
    zh: "云端式心动关系",
    en: "Onlineship",
    line: "你适合用文字、语音和夜晚讯息慢慢靠近。",
    tags: ["深夜讯息", "屏幕默契", "云端亲密"],
    image: "./assets/onlineship.webp",
    description: "你现在的亲密感不一定需要高频见面。聊天记录、深夜语音、隔着屏幕的默契，反而让你更容易表达真实的自己。你享受一种轻盈又私密的连接。",
    mode: "稳定线上沟通、语音陪伴、偶尔制造线下见面的期待。",
    reminder: "屏幕能放大想象，也能隐藏现实。心动可以从线上开始，但别永远停在云端。"
  },
  transitionship: {
    zh: "疗愈期的过渡陪伴",
    en: "Transitionship",
    line: "你现在需要的不是冲进爱情，而是慢慢回到自己。",
    tags: ["情绪空窗", "温柔陪伴", "慢慢恢复"],
    image: "./assets/transitionship.webp",
    description: "你可能刚经历某种结束、疲惫或情绪空窗。此刻你适合温柔、克制、不催促的陪伴。它未必会成为长期关系，但可以帮你重新感受到被理解、被接住。",
    mode: "慢节奏相处、少承诺、多尊重，允许彼此不急着前进。",
    reminder: "别把疗愈全部交给另一个人。真正让你恢复的，最终还是你重新照顾自己的能力。"
  },
  longtermship: {
    zh: "慢节奏长期陪伴",
    en: "Longtermship",
    line: "你适合细水长流，不急着热烈，但想要稳定。",
    tags: ["细水长流", "稳定生活", "慢热亲密"],
    image: "./assets/longtermship.webp",
    description: "你现在向往的是一种能融入生活的亲密：一起吃早餐、等晚风、过普通日子。你不一定急着谈婚姻或宏大承诺，但你看重持续、可靠和长久的陪伴感。",
    mode: "稳定见面、共同生活习惯、长期但不压迫的规划。",
    reminder: "稳定不是没有激情，而是激情之后依然愿意留下。别把平淡误解成无聊。"
  },
  partnership: {
    zh: "并肩作战的伴侣关系",
    en: "Partnership",
    line: "你适合一个能和你一起生活、一起解决问题的人。",
    tags: ["并肩协作", "现实托底", "平等支持"],
    image: "./assets/partnership.webp",
    description: "你看重的不只是浪漫，还有现实里的配合度。你希望两个人平等、清醒、能沟通，也能在生活压力面前互相支持。对你来说，真正高级的亲密是“我们站在同一边”。",
    mode: "明确分工、共同决策、互相支持事业与生活目标。",
    reminder: "关系不是项目管理。再成熟的伙伴，也需要偶尔不讲效率，只讲爱。"
  },
  distanceship: {
    zh: "异地或跨城关系",
    en: "Distanceship",
    line: "你适合一种隔着距离，却仍然认真经营的连接。",
    tags: ["异地经营", "固定沟通", "想念具体化"],
    image: "./assets/distanceship.webp",
    description: "你并不害怕空间上的分开，甚至可能需要距离来保留自己的生活节奏。只要沟通稳定、期待清楚，你可以在不同城市、不同时间表里维持一段有质量的亲密关系。",
    mode: "固定沟通窗口、提前规划见面、把想念具体化。",
    reminder: "距离本身不是问题，回避沟通才是。别只靠想象维系关系。"
  },
  adventureship: {
    zh: "冒险式浪漫关系",
    en: "Adventureship",
    line: "你适合和某个人一起从熟悉生活里出逃。",
    tags: ["城市出逃", "新鲜体验", "共同故事"],
    image: "./assets/adventureship.webp",
    description: "你现在需要新鲜感、故事感和一点不可预测。你容易被能带你看见新世界的人吸引：一起旅行、探索城市、临时起意、制造只属于你们的夜晚。",
    mode: "探店、旅行、看展、夜游、共同尝试新体验。",
    reminder: "新鲜感很迷人，但不要让刺激替代真正的了解。冒险之后，也要看彼此能不能安静相处。"
  },
  boundaryship: {
    zh: "清醒边界式亲密",
    en: "Boundaryship",
    line: "你适合一段尊重规则、尊重自由、尊重自我的关系。",
    tags: ["清楚规则", "尊重独处", "安全靠近"],
    image: "./assets/boundaryship.webp",
    description: "你现在很清楚：亲密不应该以牺牲自己为代价。你需要的是提前说清期待、边界和底线的关系。它可能不传统，但足够成熟、平等，也足够安全。",
    mode: "先讲规则、再靠近；尊重独处、明确排他性与沟通频率。",
    reminder: "边界是为了让爱更安全，不是为了把所有人挡在门外。可以保护自己，也可以允许被温柔靠近。"
  }
};

const questions = [
  {
    text: "结束一周后，你最想把自己放在哪里？",
    options: [
      { text: "一家安静的酒吧角落，和熟悉的人慢慢说话", weights: { longtermship: 2, relationship: 1 }, main: "longtermship" },
      { text: "临时决定去看展、听 live，想让今晚有点未知感", weights: { adventureship: 2, casualship: 1 }, main: "adventureship" },
      { text: "回家洗澡、点香薰，不想解释太多，只想恢复能量", weights: { boundaryship: 2, transitionship: 1 }, main: "boundaryship" },
      { text: "开着视频或语音，哪怕不见面，也想和某个人保持连接", weights: { onlineship: 2, distanceship: 1 }, main: "onlineship" }
    ]
  },
  {
    text: "你最近最舒服的沟通频率是？",
    options: [
      { text: "每天都有自然的分享，不用很多，但彼此稳定在线", weights: { relationship: 2, longtermship: 1 }, main: "relationship" },
      { text: "有事说事，没事各忙，见面时再好好靠近", weights: { partnership: 2, boundaryship: 1 }, main: "partnership" },
      { text: "想聊就聊，不想聊也不用交代，轻松最重要", weights: { casualship: 2, situationship: 1 }, main: "casualship" },
      { text: "文字、语音、表情包都可以，距离不影响亲密感", weights: { onlineship: 2, distanceship: 1 }, main: "onlineship" }
    ]
  },
  {
    text: "如果一段关系突然变近，你第一反应是？",
    options: [
      { text: "开心，但也会想确认彼此是不是认真", weights: { relationship: 2, longtermship: 1 }, main: "relationship" },
      { text: "有点心动，但暂时不想把它说死", weights: { situationship: 2, casualship: 1 }, main: "situationship" },
      { text: "会先观察对方是否尊重我的节奏和边界", weights: { boundaryship: 2, partnership: 1 }, main: "boundaryship" },
      { text: "会害怕太快投入，因为自己还在整理上一段情绪", weights: { transitionship: 2, friendship: 1 }, main: "transitionship" }
    ]
  },
  {
    text: "你现在最需要别人怎样陪你？",
    options: [
      { text: "稳稳在身边，能一起吃饭、散步、过日子", weights: { longtermship: 2, relationship: 1 }, main: "longtermship" },
      { text: "像队友一样，一起处理现实问题，也互相托底", weights: { partnership: 2, relationship: 1 }, main: "partnership" },
      { text: "不逼问、不催促，给我一点温柔但不过界的陪伴", weights: { friendship: 2, transitionship: 1 }, main: "friendship" },
      { text: "带我从惯性生活里跳出来，去新的地方、新的体验", weights: { adventureship: 2, casualship: 1 }, main: "adventureship" }
    ]
  },
  {
    text: "面对未来计划，你更接近哪种状态？",
    options: [
      { text: "我愿意谈未来，但希望它是自然长出来的", weights: { longtermship: 2, relationship: 1 }, main: "longtermship" },
      { text: "我可以承诺，但前提是双方规则清楚、期待对齐", weights: { boundaryship: 2, partnership: 1 }, main: "boundaryship" },
      { text: "我现在不太想谈远方，先享受当下的舒服", weights: { casualship: 2, situationship: 1 }, main: "casualship" },
      { text: "我们不一定在同一个城市，但可以认真经营连接", weights: { distanceship: 2, onlineship: 1 }, main: "distanceship" }
    ]
  },
  {
    text: "你最容易被哪种人吸引？",
    options: [
      { text: "情绪稳定、表达清楚，让人觉得安心", weights: { relationship: 2, longtermship: 1 }, main: "relationship" },
      { text: "有生活能力，也愿意并肩解决问题", weights: { partnership: 2, boundaryship: 1 }, main: "partnership" },
      { text: "有点神秘、暧昧、若即若离，让人想靠近", weights: { situationship: 2, onlineship: 1 }, main: "situationship" },
      { text: "朋友感很强，懂你笑点，也懂你的狼狈", weights: { friendship: 2, transitionship: 1 }, main: "friendship" }
    ]
  },
  {
    text: "如果关系里出现分歧，你更希望怎么处理？",
    options: [
      { text: "坐下来认真聊，确认彼此还想继续", weights: { relationship: 2, partnership: 1 }, main: "relationship" },
      { text: "先冷静，各自消化，再用清楚的边界重新谈", weights: { boundaryship: 2, longtermship: 1 }, main: "boundaryship" },
      { text: "不想把轻松的关系变成压力，合适就继续，不合适就松开", weights: { casualship: 2, adventureship: 1 }, main: "casualship" },
      { text: "用文字慢慢讲清楚，距离反而让我更容易表达", weights: { distanceship: 2, onlineship: 1 }, main: "distanceship" }
    ]
  },
  {
    text: "这一刻，你最想要的亲密感是什么？",
    options: [
      { text: "有名有份、互相选择，也愿意认真靠近", weights: { relationship: 2, longtermship: 1 }, main: "relationship" },
      { text: "介于朋友和恋人之间，温柔暧昧，但不用马上定义", weights: { situationship: 2, friendship: 1 }, main: "situationship" },
      { text: "一起经历新鲜事，创造故事，比确定关系更重要", weights: { adventureship: 2, casualship: 1 }, main: "adventureship" },
      { text: "安全、清楚、尊重彼此生活，不用互相占有", weights: { boundaryship: 2, partnership: 1 }, main: "boundaryship" }
    ]
  }
];

const shipOrder = [
  "relationship",
  "situationship",
  "casualship",
  "friendship",
  "onlineship",
  "transitionship",
  "longtermship",
  "partnership",
  "distanceship",
  "adventureship",
  "boundaryship"
];

const questionInfluence = [9, 10, 11, 15, 13, 14, 12, 16];
const anchorInfluence = [0, 1, 2, 5, 3, 5, 2, 6];
const rarePrimaryBonus = {
  1: 26,
  2: 14,
  3: 7,
  4: 3,
  5: 0
};
const primaryCounts = questions.reduce((counts, question) => {
  question.options.forEach((option) => {
    counts[option.main] = (counts[option.main] || 0) + 1;
  });
  return counts;
}, {});
const tieBreakQuestions = [3, 5, 7];
const letters = ["A", "B", "C", "D"];
const state = {
  current: 0,
  answers: [],
  resultKey: null
};

const screens = {
  intro: document.querySelector('[data-screen="intro"]'),
  quiz: document.querySelector('[data-screen="quiz"]'),
  reveal: document.querySelector('[data-screen="reveal"]'),
  result: document.querySelector('[data-screen="result"]')
};

const els = {
  start: document.querySelector("[data-start]"),
  back: document.querySelector("[data-back]"),
  stepLabel: document.querySelector("[data-step-label]"),
  progressFill: document.querySelector("[data-progress-fill]"),
  questionKicker: document.querySelector("[data-question-kicker]"),
  questionTitle: document.querySelector("[data-question-title]"),
  options: document.querySelector("[data-options]"),
  revealName: document.querySelector("[data-reveal-name]"),
  resultImage: document.querySelector("[data-result-image]"),
  resultTitle: document.querySelector("[data-result-title]"),
  resultEnglish: document.querySelector("[data-result-english]"),
  resultLine: document.querySelector("[data-result-line]"),
  resultTags: document.querySelector("[data-result-tags]"),
  resultDescription: document.querySelector("[data-result-description]"),
  resultMode: document.querySelector("[data-result-mode]"),
  resultReminder: document.querySelector("[data-result-reminder]"),
  topSignals: document.querySelector("[data-top-signals]"),
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
  els.progressFill.style.width = `${(currentNumber / questions.length) * 100}%`;
  els.questionKicker.textContent = `Question ${String(currentNumber).padStart(2, "0")}`;
  els.questionTitle.textContent = question.text;
  els.back.disabled = state.current === 0;
  els.options.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.dataset.letter = letters[index];
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
  }, 240);
}

function goBack() {
  if (state.current === 0) return;
  state.answers.splice(state.current - 1, 1);
  state.current -= 1;
  renderQuestion();
}

function getScores() {
  const scores = Object.fromEntries(shipOrder.map((key) => [key, 0]));
  const mainCounts = Object.fromEntries(shipOrder.map((key) => [key, 0]));
  const supportCounts = Object.fromEntries(shipOrder.map((key) => [key, 0]));

  state.answers.forEach((answerIndex, questionIndex) => {
    const option = questions[questionIndex].options[answerIndex];
    const questionPower = questionInfluence[questionIndex] || 10;

    Object.keys(option.weights).forEach((ship) => {
      const isMainSignal = ship === option.main;
      const primaryCount = primaryCounts[ship] || 1;
      const rarityBonus = isMainSignal ? rarePrimaryBonus[primaryCount] || 0 : 0;
      const anchorBonus = isMainSignal ? anchorInfluence[questionIndex] || 0 : 0;
      const supportWeight = 0.27 + Math.max(0, 4 - primaryCount) * 0.06;
      const supportValue = Math.max(3, Math.round(questionPower * supportWeight));
      const fineSignal = isMainSignal ? (questionIndex + 1) * 0.13 + (answerIndex + 1) * 0.07 : 0;
      const value = isMainSignal
        ? questionPower + anchorBonus + rarityBonus + fineSignal
        : supportValue;

      scores[ship] += value;
      if (isMainSignal) {
        mainCounts[ship] += 1;
      } else {
        supportCounts[ship] += 1;
      }
    });
  });

  shipOrder.forEach((ship) => {
    if (mainCounts[ship] > 1) {
      scores[ship] += mainCounts[ship] * mainCounts[ship] * 3;
    }

    if (mainCounts[ship] > 0 && supportCounts[ship] > 0) {
      scores[ship] += Math.min(7, supportCounts[ship] * 2);
    }
  });

  return scores;
}

function pickResult(scores) {
  const max = Math.max(...Object.values(scores));
  const tied = shipOrder.filter((key) => scores[key] === max);
  if (tied.length === 1) return tied[0];

  for (const questionIndex of tieBreakQuestions) {
    const answerIndex = state.answers[questionIndex];
    const main = questions[questionIndex].options[answerIndex]?.main;
    if (tied.includes(main)) return main;
  }

  return tied[0];
}

function revealResult() {
  const scores = getScores();
  const resultKey = pickResult(scores);
  state.resultKey = resultKey;
  els.revealName.textContent = ships[resultKey].en;
  showScreen("reveal");
  window.setTimeout(() => renderResult(scores, resultKey), 950);
}

function renderResult(scores, resultKey) {
  const result = ships[resultKey];
  document.documentElement.style.setProperty("--accent", result.accent || "#c8a96a");
  els.resultImage.src = result.image;
  els.resultImage.alt = `${result.zh}结果插画`;
  els.resultTitle.textContent = result.zh;
  els.resultEnglish.textContent = result.en;
  els.resultLine.textContent = result.line;
  els.resultTags.innerHTML = result.tags.map((tag) => `<span>${tag}</span>`).join("");
  els.resultDescription.textContent = result.description;
  els.resultMode.textContent = result.mode;
  els.resultReminder.textContent = result.reminder;
  renderTopSignals(scores);
  renderGallery(resultKey);
  history.replaceState(null, "", `${location.pathname}#${result.en.toLowerCase()}`);
  showScreen("result");
}

function formatSignalScore(score) {
  return score.toFixed(1).replace(".0", "");
}

function renderTopSignals(scores) {
  const top = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
  const topScore = Math.max(top[0]?.[1] || 1, 1);

  els.topSignals.innerHTML = top.map(([key, score]) => {
    const percent = Math.max(16, Math.round((score / topScore) * 100));
    return `
      <div class="signal-row">
        <span>${ships[key].en}</span>
        <div class="signal-bar"><i style="width:${percent}%"></i></div>
        <span>${formatSignalScore(score)}</span>
      </div>
    `;
  }).join("");
}

function renderGallery(activeKey) {
  els.gallery.innerHTML = shipOrder.map((key) => {
    const ship = ships[key];
    const marker = key === activeKey ? " · 你的结果" : "";
    return `
      <article class="ship-card">
        <img src="${ship.image}" alt="${ship.zh}">
        <div>
          <h3>${ship.en}${marker}</h3>
          <p>${ship.zh}：${ship.line}</p>
        </div>
      </article>
    `;
  }).join("");
  els.gallery.hidden = true;
  els.toggleGallery.textContent = "查看全部 ship";
}

function toggleGallery() {
  const isHidden = els.gallery.hidden;
  els.gallery.hidden = !isHidden;
  els.toggleGallery.textContent = isHidden ? "收起全部 ship" : "查看全部 ship";
}

async function shareResult() {
  const result = ships[state.resultKey];
  const cleanUrl = `${location.origin}${location.pathname}`;
  const shareData = {
    title: "今夜的你，适合哪一种 Ship？",
    text: `我测出来是「${result.zh}」：${result.line}`,
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
      els.share.textContent = "分享结果";
    }, 1500);
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
    ctx.fillStyle = "#111315";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    coverImage(ctx, image, 0, 0, canvas.width, 1160);
    const gradient = ctx.createLinearGradient(0, 500, 0, 1260);
    gradient.addColorStop(0, "rgba(17,19,21,0)");
    gradient.addColorStop(1, "rgba(17,19,21,1)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 500, canvas.width, 780);
    ctx.fillStyle = "#c8a96a";
    ctx.font = "42px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("Tonight's Ship", 72, 1230);
    ctx.fillStyle = "#f4efe6";
    ctx.font = "bold 76px -apple-system, BlinkMacSystemFont, sans-serif";
    wrapCanvasText(ctx, result.zh, 72, 1330, 920, 92);
    ctx.fillStyle = "rgba(244,239,230,0.78)";
    ctx.font = "40px -apple-system, BlinkMacSystemFont, sans-serif";
    wrapCanvasText(ctx, result.line, 72, 1510, 920, 58);
    ctx.fillStyle = "rgba(244,239,230,0.58)";
    ctx.font = "30px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("kaikaiyao.github.io/ship-test", 72, 1802);

    const link = document.createElement("a");
    link.download = `my-${result.en.toLowerCase()}-ticket.png`;
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
