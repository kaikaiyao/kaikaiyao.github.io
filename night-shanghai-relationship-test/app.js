const ships = {
  soulmate: {
    zh: "灵魂伴侣",
    en: "Soulmate",
    image: "./assets/soulmate.webp",
    accent: "#f0c982",
    line: "你现在适合被真正看见，也愿意把真心交给一个对的人。",
    tags: ["深度共鸣", "稳定选择", "价值观同频"],
    description: "你并不是只想要热闹的心动。你更在意一个人能不能听懂你的停顿、尊重你的节奏，并在关键时刻给出清楚的选择。对你来说，浪漫不是一整晚的烟花，而是夜色散了之后，彼此还愿意认真留下。",
    mode: "慢慢确认、稳定回应、把脆弱和计划都放进同一个桌面。",
    reminder: "不要把“懂我”想象成读心术。真正的灵魂伴侣，也需要被你明确告知边界、期待和害怕。"
  },
  weekend: {
    zh: "周末恋人",
    en: "Weekend Lover",
    image: "./assets/weekend.webp",
    accent: "#d7b46b",
    line: "你现在适合轻盈、漂亮、不过度索取的周末心动。",
    tags: ["低压力", "高质感约会", "享受当下"],
    description: "你的生活已经有自己的秩序，爱情最好像周末夜的一杯酒，刚好点亮情绪，而不是把你整周的日程重新拆掉。你需要的是会挑餐厅、会接话、会把见面变成奖励的人，不急着把所有未来都说满。",
    mode: "固定但不窒息的约会频率，见面时投入，分开后各自好好生活。",
    reminder: "轻松不是含糊。越是低压力的关系，越要提前说清楚期待，别让体面变成误会。"
  },
  sapio: {
    zh: "智性恋搭子",
    en: "Sapiosexual Partner",
    image: "./assets/sapio.webp",
    accent: "#8dd7e7",
    line: "你会先被一个人的脑内风景吸引，然后才决定要不要靠近。",
    tags: ["深夜长谈", "审美共振", "精神刺激"],
    description: "你需要的浪漫有一点智识密度。一个人的表达、判断力、阅读口味、看世界的角度，都会比普通甜言蜜语更让你心动。你不是冷淡，只是很难被空泛的热情打动；你的心门常常开在一场好对话之后。",
    mode: "一起看展、读书、争论、散步，把聊天聊到彼此的真实结构里。",
    reminder: "别把聪明误认为可靠。认知吸引很迷人，但关系最终还要落到诚实、温柔和行动。"
  },
  parallel: {
    zh: "平行线",
    en: "Parallel Lines",
    image: "./assets/parallel.webp",
    accent: "#a786ff",
    line: "你们可以互相欣赏，但此刻不必强行并轨。",
    tags: ["保持距离", "节奏不同", "清醒欣赏"],
    description: "你现在很适合一种有分寸的心动：知道对方好，也知道彼此未必适合进入同一套生活。它不是失败，而是一种成熟的识别。你可以保留那份欣赏，不必把每一次动心都推进成关系。",
    mode: "保持礼貌、清晰、不过度投射，把好感留在不伤人的距离里。",
    reminder: "别用“以后也许”长期悬挂自己。真正的浪漫有时是承认不合适，然后把路让出来。"
  },
  firework: {
    zh: "烟火情人",
    en: "Firework Lover",
    image: "./assets/afterglow.webp",
    accent: "#f0649f",
    line: "你现在需要一点被点燃的感觉，但不要把火花误认成归宿。",
    tags: ["强吸引", "高张力", "瞬间心动"],
    description: "你身上有一种想从惯性里逃出来的能量。你会被直接、漂亮、带一点危险感的人吸引，也愿意让夜晚变得不那么可预测。这类关系很有电影感，但它最考验的是你能不能在心跳之后，看清对方真实的轮廓。",
    mode: "大胆约会、制造共同记忆，但保留观察期，不急着交出全部生活。",
    reminder: "烟火值得看，但别站得太近。激情可以是入口，不应该是唯一证据。"
  },
  ally: {
    zh: "都市盟友",
    en: "Urban Ally",
    image: "./assets/ally.webp",
    accent: "#72d0bd",
    line: "你适合成年人式的浪漫：站在同一边，也各自发光。",
    tags: ["现实互助", "并肩作战", "目标一致"],
    description: "你很清楚，好的亲密不只是情绪价值，还要有生活里的配合度。你会被靠谱、能沟通、能一起处理现实的人吸引。对你来说，最有安全感的告白不是夸张承诺，而是“这件事我们一起想办法”。",
    mode: "共同决策、互相托底、尊重事业与生活节奏，浪漫和现实都不缺席。",
    reminder: "关系不是合伙协议。再会解决问题的人，也需要偶尔放下效率，只讲一点笨拙的喜欢。"
  },
  harbor: {
    zh: "治愈港湾",
    en: "Safe Harbor",
    image: "./assets/healing.webp",
    accent: "#84c9bc",
    line: "你现在最需要的是安稳的回声，而不是更大的风浪。",
    tags: ["慢热安全", "温柔照料", "情绪复位"],
    description: "你并非不想爱，只是此刻更需要被温柔地接住。你适合一段不催促、不审判、不用强烈证明自己的关系。它像雨夜里亮着灯的窗，让你可以把疲惫放下，再慢慢恢复对亲密的信任。",
    mode: "低噪音陪伴、稳定见面、少一点试探，多一点可预期的温柔。",
    reminder: "被照顾很重要，但别把修复自己的全部任务交给别人。真正的港湾，也允许你重新出发。"
  },
  free: {
    zh: "自由行星",
    en: "Free Planet",
    image: "./assets/signal.webp",
    accent: "#7da6ff",
    line: "你适合有引力但不占有的亲密，靠近，也保留自己的轨道。",
    tags: ["边界清晰", "独立节奏", "不被吞没"],
    description: "你不是害怕亲密，而是不想被亲密改写成另一个人。你需要的是尊重独处、尊重空间、尊重人生节奏的关系。对你来说，好的爱不是时时绑定，而是在各自完整的前提下，仍然选择相互靠近。",
    mode: "先讲清边界和沟通频率，再享受稳定但不窒息的连接。",
    reminder: "边界不是冰墙。你可以保护自由，也可以允许某个人在合适的位置持续靠近。"
  }
};

const questions = [
  {
    text: "深夜在复兴中路的酒吧，你第一杯会点什么？",
    options: [
      {
        text: "一杯干净的经典马天尼，适合和熟悉的人慢慢说真话",
        scores: { soulmate: 3, harbor: 1 }
      },
      {
        text: "香槟或起泡酒，今晚只负责漂亮、轻松、不要太沉重",
        scores: { weekend: 3, firework: 1 }
      },
      {
        text: "酒单上最有故事的一杯，想听调酒师讲清楚它的来路",
        scores: { sapio: 3, ally: 1 }
      },
      {
        text: "无酒精特调，清醒一点，等会儿还想一个人走一段路",
        scores: { free: 3, parallel: 1 }
      }
    ]
  },
  {
    text: "周末下大雨，你更想如何度过？",
    options: [
      {
        text: "窝在家里煮热饮，看一部旧电影，不需要太多社交",
        scores: { harbor: 3, soulmate: 1 }
      },
      {
        text: "订一家有窗景的小餐厅，把坏天气变成好看的约会",
        scores: { weekend: 3, firework: 1 }
      },
      {
        text: "一起整理房间、做饭、处理积压事项，雨天也有秩序",
        scores: { ally: 3, harbor: 1 }
      },
      {
        text: "各自安排，晚上互相发张照片就好，不必强行见面",
        scores: { parallel: 3, free: 1 }
      }
    ]
  },
  {
    text: "一个很有好感的人突然靠近，你的第一反应是？",
    options: [
      {
        text: "开心，但会想确认这份靠近是不是认真、稳定、可持续",
        scores: { soulmate: 3, ally: 1 }
      },
      {
        text: "心跳加速，想顺着这个氛围往前走，看今晚会发生什么",
        scores: { firework: 3, weekend: 1 }
      },
      {
        text: "会先看对方是否尊重我的速度，不想被热情推着走",
        scores: { free: 3, parallel: 1 }
      },
      {
        text: "有点想靠近，也有点想退后，希望对方足够温柔",
        scores: { harbor: 3, soulmate: 1 }
      }
    ]
  },
  {
    text: "凌晨一点还没睡，你最容易和人聊到哪里？",
    options: [
      {
        text: "聊最近读到的观点、看过的展、某个概念为什么迷人",
        scores: { sapio: 3, soulmate: 1 }
      },
      {
        text: "聊今天哪里累了，谁没有被好好理解，如何慢慢恢复",
        scores: { harbor: 3, ally: 1 }
      },
      {
        text: "聊明天去哪吃、哪家新店值得试，别把夜晚聊得太重",
        scores: { weekend: 3, free: 1 }
      },
      {
        text: "聊到一半突然沉默也没关系，有些话不必被追问到底",
        scores: { parallel: 3, harbor: 1 }
      }
    ]
  },
  {
    text: "你最容易被哪一种浪漫打动？",
    options: [
      {
        text: "对方记得现实里的小事，能和你一起把生活稳住",
        scores: { ally: 3, harbor: 1 }
      },
      {
        text: "一句话刚好说中你没说出口的部分，像暗号终于被接住",
        scores: { soulmate: 3, sapio: 1 }
      },
      {
        text: "彼此都有完整生活，不查岗、不捆绑，但心里有位置",
        scores: { free: 3, parallel: 1 }
      },
      {
        text: "临时起意的夜游、拥抱、眼神，明知道危险也很难拒绝",
        scores: { firework: 3, weekend: 1 }
      }
    ]
  },
  {
    text: "工作日临时被改约，你更接近哪种处理方式？",
    options: [
      {
        text: "理解，但会立刻把今晚收回给自己，不继续等消息",
        scores: { parallel: 3, free: 1 }
      },
      {
        text: "可以调整，但希望对方给出清楚解释和新的安排",
        scores: { ally: 3, soulmate: 1 }
      },
      {
        text: "如果对方讲得真诚有趣，改成深夜电话也不是不行",
        scores: { sapio: 3, weekend: 1 }
      },
      {
        text: "不太介意，反正轻松一点最好，改天见也有期待",
        scores: { weekend: 3, free: 1 }
      }
    ]
  },
  {
    text: "外滩散步时，两个人突然都安静了。你会怎么感受？",
    options: [
      {
        text: "如果沉默是舒服的，我反而会觉得很安心",
        scores: { harbor: 3, soulmate: 1 }
      },
      {
        text: "想抛出一个问题，看对方的脑子里到底住着什么风景",
        scores: { sapio: 3, firework: 1 }
      },
      {
        text: "会想制造一点小意外，换条路、去江边、让夜晚活起来",
        scores: { firework: 3, weekend: 1 }
      },
      {
        text: "沉默很好。一起走着，但各自保留一块安静的地方",
        scores: { free: 3, parallel: 1 }
      }
    ]
  },
  {
    text: "这一阶段，你在关系里最重要的底线是什么？",
    options: [
      {
        text: "要被认真选择，而不是被放在暧昧的备选栏里",
        scores: { soulmate: 3, harbor: 1 }
      },
      {
        text: "要能沟通现实问题，不能只会制造情绪和浪漫",
        scores: { ally: 3, sapio: 1 }
      },
      {
        text: "如果人生节奏不一致，就体面承认，不互相消耗",
        scores: { parallel: 3, free: 1 }
      },
      {
        text: "不能太平、太钝、太像任务表；我仍然需要被点燃",
        scores: { firework: 3, sapio: 1 }
      }
    ]
  }
];

const shipOrder = ["soulmate", "weekend", "sapio", "parallel", "firework", "ally", "harbor", "free"];
const tieBreakQuestions = [7, 4, 2];
const expressiveTiePriority = ["parallel", "free", "firework", "sapio", "harbor", "ally", "weekend", "soulmate"];
const letters = ["A", "B", "C", "D"];

const state = {
  current: 0,
  answers: [],
  resultKey: null,
  scores: null
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
  step: document.querySelector("[data-step]"),
  progress: document.querySelector("[data-progress]"),
  kicker: document.querySelector("[data-question-kicker]"),
  title: document.querySelector("[data-question-title]"),
  options: document.querySelector("[data-options]"),
  revealTitle: document.querySelector("[data-reveal-title]"),
  resultImage: document.querySelector("[data-result-image]"),
  resultTitle: document.querySelector("[data-result-title]"),
  resultEn: document.querySelector("[data-result-en]"),
  resultLine: document.querySelector("[data-result-line]"),
  resultTags: document.querySelector("[data-result-tags]"),
  resultDescription: document.querySelector("[data-result-description]"),
  resultMode: document.querySelector("[data-result-mode]"),
  resultReminder: document.querySelector("[data-result-reminder]"),
  signals: document.querySelector("[data-signals]"),
  save: document.querySelector("[data-save]"),
  share: document.querySelector("[data-share]"),
  restart: document.querySelector("[data-restart]"),
  canvas: document.querySelector("[data-canvas]")
};

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("is-active"));
  screens[name].classList.add("is-active");
  document.querySelector(".phone").scrollTop = 0;
}

function startQuiz() {
  state.current = 0;
  state.answers = [];
  state.resultKey = null;
  state.scores = null;
  renderQuestion();
  showScreen("quiz");
}

function renderQuestion() {
  const question = questions[state.current];
  const number = state.current + 1;
  els.step.textContent = `${String(number).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}`;
  els.progress.style.width = `${(number / questions.length) * 100}%`;
  els.kicker.textContent = `Question ${String(number).padStart(2, "0")}`;
  els.title.textContent = question.text;
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
      return;
    }

    revealResult();
  }, 260);
}

function goBack() {
  if (state.current === 0) return;
  state.answers.splice(state.current - 1, 1);
  state.current -= 1;
  renderQuestion();
}

function calculateScores() {
  const scores = Object.fromEntries(shipOrder.map((key) => [key, 0]));

  state.answers.forEach((answerIndex, questionIndex) => {
    const option = questions[questionIndex].options[answerIndex];
    Object.entries(option.scores).forEach(([ship, value]) => {
      scores[ship] += value;
    });
  });

  return scores;
}

function primaryShip(questionIndex) {
  const answerIndex = state.answers[questionIndex];
  const option = questions[questionIndex]?.options[answerIndex];
  if (!option) return null;
  return Object.entries(option.scores).sort((a, b) => b[1] - a[1])[0][0];
}

function pickResult(scores) {
  const highScore = Math.max(...Object.values(scores));
  const tied = shipOrder.filter((key) => scores[key] === highScore);
  if (tied.length === 1) return tied[0];

  for (const questionIndex of tieBreakQuestions) {
    const main = primaryShip(questionIndex);
    if (tied.includes(main)) return main;
  }

  return expressiveTiePriority.find((key) => tied.includes(key)) || tied[0];
}

function revealResult() {
  const scores = calculateScores();
  const resultKey = pickResult(scores);
  state.scores = scores;
  state.resultKey = resultKey;
  els.revealTitle.textContent = ships[resultKey].en;
  showScreen("reveal");
  window.setTimeout(() => renderResult(), 900);
}

function renderResult() {
  const result = ships[state.resultKey];
  document.documentElement.style.setProperty("--accent", result.accent);
  els.resultImage.src = result.image;
  els.resultImage.alt = `${result.zh}关系结果图`;
  els.resultTitle.textContent = result.zh;
  els.resultEn.textContent = result.en;
  els.resultLine.textContent = result.line;
  els.resultTags.innerHTML = result.tags.map((tag) => `<span>${tag}</span>`).join("");
  els.resultDescription.textContent = result.description;
  els.resultMode.textContent = result.mode;
  els.resultReminder.textContent = result.reminder;
  renderSignals();
  history.replaceState(null, "", `${location.pathname}#${slugify(result.en)}`);
  showScreen("result");
}

function renderSignals() {
  const top = Object.entries(state.scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
  const max = Math.max(top[0]?.[1] || 1, 1);

  els.signals.innerHTML = top.map(([key, score]) => {
    const width = Math.max(18, Math.round((score / max) * 100));
    return `
      <div class="signal-row">
        <span>${ships[key].en}</span>
        <i><b style="width: ${width}%"></b></i>
        <em>${score}</em>
      </div>
    `;
  }).join("");
}

async function shareTest() {
  const result = ships[state.resultKey];
  const url = `${location.origin}${location.pathname}`;
  const shareData = {
    title: "夜上海关系测试",
    text: `我测出来是「${result.zh}」：${result.line}`,
    url
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }

  await copyFallback(`${shareData.text}\n${shareData.url}`);
}

async function copyFallback(text) {
  try {
    await navigator.clipboard.writeText(text);
    els.share.textContent = "已复制链接";
  } catch {
    els.share.textContent = "请保存结果图";
  }

  window.setTimeout(() => {
    els.share.textContent = "分享测试";
  }, 1500);
}

function saveResultCard() {
  const result = ships[state.resultKey];
  const canvas = els.canvas;
  const ctx = canvas.getContext("2d");
  const image = new Image();
  image.onload = () => {
    drawShareCard(ctx, canvas, image, result);
    const link = document.createElement("a");
    link.download = `night-shanghai-${slugify(result.en)}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    flashButton(els.save, "已生成图片", "保存结果图");
  };
  image.onerror = () => flashButton(els.save, "请稍后重试", "保存结果图");
  image.src = result.image;
}

function flashButton(button, nextText, originalText) {
  button.textContent = nextText;
  window.setTimeout(() => {
    button.textContent = originalText;
  }, 1500);
}

function drawShareCard(ctx, canvas, image, result) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#09090f";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  coverImage(ctx, image, 0, 0, canvas.width, 1250);

  const gradient = ctx.createLinearGradient(0, 650, 0, 1320);
  gradient.addColorStop(0, "rgba(9,9,15,0)");
  gradient.addColorStop(0.72, "rgba(9,9,15,0.92)");
  gradient.addColorStop(1, "#09090f");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 650, canvas.width, 720);

  ctx.strokeStyle = "rgba(240,201,130,0.48)";
  ctx.lineWidth = 3;
  ctx.strokeRect(60, 78, canvas.width - 120, canvas.height - 156);

  ctx.fillStyle = result.accent;
  ctx.font = "42px -apple-system, BlinkMacSystemFont, PingFang SC, sans-serif";
  ctx.fillText("Shanghai Midnight Ship Test", 86, 1280);

  ctx.fillStyle = "#f7efe4";
  ctx.font = "700 92px -apple-system, BlinkMacSystemFont, PingFang SC, sans-serif";
  wrapCanvasText(ctx, result.zh, 86, 1400, 900, 104);

  ctx.fillStyle = "rgba(247,239,228,0.72)";
  ctx.font = "40px -apple-system, BlinkMacSystemFont, PingFang SC, sans-serif";
  wrapCanvasText(ctx, result.line, 86, 1560, 880, 58);

  ctx.fillStyle = "rgba(247,239,228,0.58)";
  ctx.font = "30px -apple-system, BlinkMacSystemFont, PingFang SC, sans-serif";
  ctx.fillText("kaikaiyao.github.io/night-shanghai-relationship-test", 86, 1804);
}

function coverImage(ctx, image, x, y, width, height) {
  const imageRatio = image.width / image.height;
  const boxRatio = width / height;
  let drawWidth = width;
  let drawHeight = height;
  let offsetX = 0;
  let offsetY = 0;

  if (imageRatio > boxRatio) {
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
    const nextLine = line + char;
    if (ctx.measureText(nextLine).width > maxWidth && line) {
      ctx.fillText(line, x, cursorY);
      line = char;
      cursorY += lineHeight;
      return;
    }
    line = nextLine;
  });
  ctx.fillText(line, x, cursorY);
}

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

els.start.addEventListener("click", startQuiz);
els.back.addEventListener("click", goBack);
els.restart.addEventListener("click", startQuiz);
els.share.addEventListener("click", shareTest);
els.save.addEventListener("click", saveResultCard);
