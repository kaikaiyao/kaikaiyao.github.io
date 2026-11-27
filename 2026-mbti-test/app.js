const pairs = [
  { a: "E", b: "I", title: "能量来源", left: "互动点亮", right: "独处回充" },
  { a: "S", b: "N", title: "信息入口", left: "事实细节", right: "趋势联想" },
  { a: "T", b: "F", title: "判断方式", left: "原则逻辑", right: "关系价值" },
  { a: "J", b: "P", title: "行动节奏", left: "明确推进", right: "弹性探索" }
];

const opposite = {
  E: "I",
  I: "E",
  S: "N",
  N: "S",
  T: "F",
  F: "T",
  J: "P",
  P: "J"
};

const dimensionNames = {
  E: "外向能量",
  I: "内向能量",
  S: "实感信息",
  N: "直觉信息",
  T: "理性判断",
  F: "情感判断",
  J: "秩序推进",
  P: "流动探索"
};

const rolePalettes = {
  analyst: {
    name: "分析家",
    types: ["INTJ", "INTP", "ENTJ", "ENTP"],
    colors: ["#88619a", "#b58ad0"],
    accent: "#88619a"
  },
  diplomat: {
    name: "外交家",
    types: ["INFJ", "INFP", "ENFJ", "ENFP"],
    colors: ["#33a474", "#8ed7b5"],
    accent: "#33a474"
  },
  sentinel: {
    name: "守护者",
    types: ["ISTJ", "ISFJ", "ESTJ", "ESFJ"],
    colors: ["#4298b4", "#92d4e6"],
    accent: "#4298b4"
  },
  explorer: {
    name: "探险家",
    types: ["ISTP", "ISFP", "ESTP", "ESFP"],
    colors: ["#e4ae3a", "#f3d87b"],
    accent: "#e4ae3a"
  }
};

function getRole(type) {
  return Object.values(rolePalettes).find((role) => role.types.includes(type)) || rolePalettes.analyst;
}

const results = {
  INTJ: {
    title: "冷静架构师",
    line: "你像一套安静运行的长期系统，外表克制，内里一直在重排世界的结构。",
    tags: ["长期主义", "结构感", "独立判断", "低噪音野心"],
    description: "你擅长把复杂问题拆成框架、路径和杠杆点。你不太容易被表面热闹带走，更在意一件事是否有长期价值、逻辑是否自洽、资源是否值得投入。别人看到的是冷静，你自己知道那是一种高度聚焦。",
    strength: "制定策略、识别低效、把混乱议题整理成可执行系统。",
    watch: "别把所有不够精确的表达都当成无效信息。有时情绪和犹豫本身，也是一种需要被纳入模型的现实。",
    quote: "我不是慢热，我只是不想把判断交给噪音。",
    colors: []
  },
  INTP: {
    title: "概念解谜者",
    line: "你会在别人急着下结论的时候，悄悄打开问题背后的隐藏房间。",
    tags: ["模型感", "好奇心", "反套路", "脑内宇宙"],
    description: "你对逻辑、假设和可能性很敏感，喜欢把事情想透，而不是快速交出一个漂亮但粗糙的答案。你常常能看见规则里的漏洞，也能从一个小问题延伸出一整套新解释。",
    strength: "抽象建模、发现矛盾、提出新角度、把旧问题重新命名。",
    watch: "灵感值得保护，但也需要偶尔落到地面。不是每个想法都要完美，先交出一个版本，世界才有机会回应你。",
    quote: "我不是走神，我是在给现实换一个解释器。",
    colors: []
  },
  ENTJ: {
    title: "高压推进者",
    line: "你不只是看到目标，还会下意识开始调动资源、压缩路径、推进局面。",
    tags: ["决策力", "组织资源", "目标感", "高压清醒"],
    description: "你习惯在复杂场面里抓住关键问题，并把松散的人、事、资源组织到同一个方向上。你不怕直面冲突，也不太迷恋无效安慰。对你来说，真正的尊重常常意味着把问题说清楚，然后一起解决。",
    strength: "做关键决策、拉齐目标、推动团队穿过模糊和拖延。",
    watch: "效率不是唯一的抵达方式。给他人一点情绪缓冲，很多合作会更稳，也更愿意长期跟随你。",
    quote: "可以有情绪，但方向不能丢。",
    colors: []
  },
  ENTP: {
    title: "灵感辩手",
    line: "你像一块会点火的燧石，越碰撞，越容易擦出新版本的人生。",
    tags: ["反应快", "新点子", "观点碰撞", "高弹性"],
    description: "你喜欢新鲜、变化和有智识密度的对话。你能快速搅活一个局面，也能把别人习以为常的规则问到重新松动。你并不只是爱争论，你是在通过碰撞测试世界还能变成什么样。",
    strength: "头脑风暴、破局、表达、把僵硬问题打开新的入口。",
    watch: "不要让兴趣转移太快。真正让灵感变贵的，不是第一个点子，而是你愿意把它推进到成形。",
    quote: "如果只有一种答案，那这个问题还不够好玩。",
    colors: []
  },
  INFJ: {
    title: "深层洞察者",
    line: "你很会读懂未说出口的东西，也很在意一件事最终通向哪里。",
    tags: ["洞察", "共情", "长期意义", "安静坚定"],
    description: "你对人的动机、关系的暗流和事情的长期意义都很敏感。你不一定高调，却常常能指出大家真正绕不开的问题。你的温柔并不软弱，它更像一种有方向感的理解。",
    strength: "理解复杂关系、捕捉隐含信息、把混乱体验整理成有意义的叙事。",
    watch: "不要把所有人的情绪都放进自己的责任范围。你可以理解别人，但不必替所有人完成成长。",
    quote: "我想听见的，不只是你说了什么，还有你为什么这样说。",
    colors: []
  },
  INFP: {
    title: "理想收藏家",
    line: "你把世界放进心里筛选，留下那些真诚、漂亮、值得相信的部分。",
    tags: ["真诚感", "内在价值", "细腻审美", "柔软边界"],
    description: "你很重视自我一致，也很难对违背内心价值的事情长期妥协。你对文字、氛围、人的脆弱和微妙情绪有天然感知。你的理想不是天真，而是你仍然愿意认真对待那些珍贵的东西。",
    strength: "共情、审美表达、价值判断、在细节里发现真实。",
    watch: "感受需要被尊重，也需要被转化成行动。把想守护的东西具体化，你的温柔会更有力量。",
    quote: "我不是想太多，我只是不想错过真正重要的东西。",
    colors: []
  },
  ENFJ: {
    title: "氛围引导者",
    line: "你能读懂场上的温度，也知道怎样让一群人朝同一个方向亮起来。",
    tags: ["感染力", "组织关系", "价值驱动", "群体雷达"],
    description: "你擅长理解人的状态、调动共同目标，并让不同的人愿意进入同一段叙事。你不是只会热场，而是能把情绪、愿景和行动连接起来。很多人会因为你而更愿意相信一件事可以发生。",
    strength: "凝聚团队、沟通愿景、照顾关系张力、推动共同目标。",
    watch: "不要过度承担大家的期待。你也可以有不想照顾场面的时刻，边界不会削弱你的魅力。",
    quote: "好的关系不是控制方向，而是让每个人都愿意往前。",
    colors: []
  },
  ENFP: {
    title: "可能性发电机",
    line: "你对新故事、新关系和新路线有天生雷达，像随身带着一扇窗。",
    tags: ["热情", "想象力", "连接感", "自由创造"],
    description: "你很容易发现隐藏机会，也很会把一个普通瞬间变成有生命力的故事。你喜欢真实的人、变化的场景和可以自由生长的计划。你不是没有方向，只是你的方向常常需要在探索中被点亮。",
    strength: "创意发散、关系连接、发现机会、把沉闷局面重新点亮。",
    watch: "自由不等于永远不收尾。给重要的事情留一个稳定容器，你的可能性会变得更有回声。",
    quote: "我想知道，如果换一条路，会不会遇见更大的世界。",
    colors: []
  },
  ISTJ: {
    title: "稳定执行者",
    line: "你相信承诺、事实和持续推进，靠谱不是人设，是你的默认设置。",
    tags: ["责任感", "细节可靠", "经验判断", "稳定推进"],
    description: "你擅长把事情放回现实条件里判断：资源够不够、路径稳不稳、细节有没有遗漏。你不喜欢虚浮承诺，也不轻易被概念营销打动。你的安全感来自可验证的事实和长期积累。",
    strength: "流程执行、风险识别、守住标准、把复杂任务稳稳落地。",
    watch: "变化不一定等于失控。偶尔允许计划之外的机会进来，可能会打开更省力的路线。",
    quote: "把事情做到位，本身就是一种态度。",
    colors: []
  },
  ISFJ: {
    title: "温柔守护者",
    line: "你记得很多别人忘掉的小事，也常常把可靠藏在安静的行动里。",
    tags: ["照顾细节", "踏实", "温柔责任", "现实支持"],
    description: "你对人的需要和现实里的小细节很敏感，擅长用具体行动表达在意。你不一定把情绪说得很大声，但会把重要的人和事稳稳放在心上。你的温柔有很强的执行力。",
    strength: "照顾现场、维持稳定、记住细节、让别人感到被认真对待。",
    watch: "别把“我来吧”说得太快。你可以照顾别人，也要把自己的疲惫和期待说出来。",
    quote: "真正的在意，常常落在没人注意的小地方。",
    colors: []
  },
  ESTJ: {
    title: "秩序管理者",
    line: "你能在混乱里迅速看见规则、责任和下一步应该由谁完成。",
    tags: ["效率", "规则感", "现实判断", "执行管理"],
    description: "你重视清晰、效率和结果，擅长把含糊的局面变成具体安排。你对责任和标准有很强感知，不喜欢大家绕来绕去却不解决问题。你的直接常常是为了让事情真的前进。",
    strength: "管理流程、明确责任、稳定交付、让团队从混乱进入秩序。",
    watch: "不是所有迟疑都是偷懒。有些人需要先理解意义，才会真正进入状态。",
    quote: "先把规则说清楚，事情就解决了一半。",
    colors: []
  },
  ESFJ: {
    title: "关系组织者",
    line: "你很会感知场合、照顾关系，也知道怎样让一群人舒服地聚在一起。",
    tags: ["人情练达", "场合感", "照顾氛围", "现实热心"],
    description: "你对他人的需求、关系的礼节和现场气氛很敏锐。你擅长把分散的人连接起来，让事情既有人情味，也能顺利推进。你的社交能力不是浮夸，而是一种现实里的组织力。",
    strength: "维护关系网络、安排现场、协调需求、让别人感到被照应。",
    watch: "外界反馈很重要，但不是你的全部坐标。不要为了维持气氛，长期压低自己的真实想法。",
    quote: "让大家都被照顾到，也是一种很高级的能力。",
    colors: []
  },
  ISTP: {
    title: "冷静实操派",
    line: "你喜欢直接观察、拆解、上手，不太需要把每一步都解释成情绪。",
    tags: ["实操", "冷静", "反应快", "低废话"],
    description: "你擅长面对真实问题：哪里卡住、哪个部件失效、怎样最短路径修好。你不喜欢过多铺垫，也不迷恋宏大叙事。你相信手感、反馈和现场判断。",
    strength: "现场解决问题、拆解系统、快速反应、在压力下保持清醒。",
    watch: "不是每个人都能从你的行动里自动读懂在意。适度解释，会减少很多无谓误会。",
    quote: "别先讲大道理，让我看看问题到底在哪。",
    colors: []
  },
  ISFP: {
    title: "感官美学家",
    line: "你对质感、氛围和个人感受很敏锐，温和外表下有自己的审美标准。",
    tags: ["审美雷达", "自由感", "细腻", "真实体验"],
    description: "你很容易被颜色、声音、空间、触感和当下的真实状态影响。你不一定喜欢被催促定义自己，更愿意通过体验慢慢确认什么适合。你温和，但并不没有立场。",
    strength: "审美表达、体验判断、捕捉细节、让日常变得更有质感。",
    watch: "不要把回避冲突当成保护感受。真正重要的标准，值得被清楚说出来。",
    quote: "我不一定解释得出，但我知道什么感觉是对的。",
    colors: []
  },
  ESTP: {
    title: "现场玩家",
    line: "你对真实反馈和机会窗口很敏感，局面越活，你越能进入状态。",
    tags: ["行动力", "现场判断", "机会感", "高能反应"],
    description: "你擅长在变化中快速判断，抓住眼前的机会并立刻试出结果。你不喜欢一直停留在理论层面，更信任现实反馈。别人还在犹豫时，你可能已经试完第一轮了。",
    strength: "即时决策、谈判、现场应变、把机会从空气里抓出来。",
    watch: "眼前收益很刺激，但长期代价也会追上来。给冲动留三秒钟，往往能赢得更多。",
    quote: "先动起来，答案会在现场出现。",
    colors: []
  },
  ESFP: {
    title: "高光体验家",
    line: "你能把当下变亮，也很会让人记住一个瞬间的温度。",
    tags: ["感染力", "体验感", "当下能量", "社交光泽"],
    description: "你重视真实体验、人和人之间的快乐连接，以及一个场景是否足够鲜活。你有让气氛自然升温的能力，也容易把生活过成有画面的片段。你不是只会快乐，你是在认真捕捉活着的感觉。",
    strength: "表达、带动氛围、审美体验、让关系变得轻盈有生命力。",
    watch: "高光时刻很珍贵，但长期关系和长期目标也需要稳定节奏。别让热闹替你做所有决定。",
    quote: "人生需要一点即时的漂亮，不然也太可惜了。",
    colors: []
  }
};

Object.keys(results).forEach((type) => {
  results[type].role = getRole(type).name;
  results[type].colors = getRole(type).colors;
});

const scaleOptions = [
  { label: "完全不像", value: -2 },
  { label: "有点不像", value: -1 },
  { label: "看情况", value: 0 },
  { label: "有点像", value: 1 },
  { label: "非常像", value: 2 }
];

const standardQuestions = [
  {
    type: "scale",
    mode: "观影瞬间",
    title: "看到一部评分两极分化的新电影，我更容易被“它到底想表达什么”吸引，而不是先判断它好不好看。",
    help: "按第一反应选择，不需要想得太正确。",
    plus: "N"
  },
  {
    type: "scale",
    mode: "新手任务",
    title: "做一件没做过的事之前，我会先找几个靠谱案例，确认大致路径再开始。",
    help: "想象你手上刚拿到一个陌生但重要的小任务。",
    plus: "S"
  },
  {
    type: "scale",
    mode: "计划变动",
    title: "当一个计划临时被打乱，我通常会先快速重排优先级，而不是马上换一种玩法。",
    help: "不用按理想状态选，按真实反应选。",
    plus: "J"
  },
  {
    type: "scale",
    mode: "观点讨论",
    title: "和人讨论问题时，我更在意“这个说法是否站得住”，即使气氛会稍微变冷。",
    help: "想象这是一次重要讨论，不是轻松闲聊。",
    plus: "T"
  },
  {
    type: "scale",
    mode: "朋友消息",
    title: "如果朋友讲一件烦心事，我会先接住他的情绪，再一起想下一步怎么办。",
    help: "看你默认先处理哪一层信息。",
    plus: "F"
  },
  {
    type: "scale",
    mode: "城市旅行",
    title: "在陌生城市旅行时，我更喜欢留出一些空白时间，让当天的状态决定去哪。",
    help: "想象你已经订好住宿，其余安排还没定。",
    plus: "P"
  },
  {
    type: "scale",
    mode: "恢复时间",
    title: "一个安静但信息量很大的下午，常常比热闹但碎片化的一天更让我恢复清晰度。",
    help: "想象这是你连续忙了几天之后的半天空档。",
    plus: "I"
  },
  {
    type: "scale",
    mode: "灵感出现",
    title: "当我遇到一个有趣想法，会很自然地想找人聊一聊，看它会被碰撞成什么样。",
    help: "按你最自然的反应选择。",
    plus: "E"
  },
  {
    type: "choice",
    mode: "临时邀请",
    title: "一个朋友突然发来一句：“今晚有个很特别的局，你要不要来？”你最可能先想到什么？",
    help: "选最接近你脑内弹出的第一行字幕。",
    options: [
      { text: "那里是什么人、什么场、我需要准备到什么程度？", sub: "先读现场条件", scores: { S: 1.6, J: 1.2 } },
      { text: "特别在哪里？如果能听到新故事，也许值得去。", sub: "先看可能性", scores: { N: 1.7, E: 0.8 } },
      { text: "我今晚的状态适合被打断吗？不想为了热闹消耗自己。", sub: "先听身体和边界", scores: { I: 1.4, P: 0.8 } },
      { text: "如果值得，我可以马上切换路线，别浪费这个窗口。", sub: "先抓机会窗口", scores: { E: 1.2, P: 1.2 } }
    ]
  },
  {
    type: "scale",
    mode: "细节联想",
    title: "我经常从一些很小的细节联想到更大的趋势、关系或隐含意义。",
    help: "例如一句话的措辞、一个品牌的变化、一个人的沉默。",
    plus: "N"
  },
  {
    type: "scale",
    mode: "意见分歧",
    title: "如果团队里意见分裂，我会倾向于先把分歧定义清楚：我们到底在争什么。",
    help: "想象这是一场需要继续推进的讨论。",
    plus: "T"
  },
  {
    type: "scale",
    mode: "意见分歧",
    title: "如果团队里意见分裂，我会倾向于先降低对立感，让大家愿意继续说下去。",
    help: "想象这个分歧已经影响到彼此的状态。",
    plus: "F"
  },
  {
    type: "scale",
    mode: "一周安排",
    title: "面对一周内要完成的多件事，我会比较舒服地把它们拆成节点和顺序。",
    help: "想象这些事都要完成，但可以自己安排节奏。",
    plus: "J"
  },
  {
    type: "scale",
    mode: "一周安排",
    title: "面对一周内要完成的多件事，我更喜欢先抓住最有感觉的一件，边做边调整节奏。",
    help: "想象这些事都重要，但并非每件都紧急。",
    plus: "P"
  },
  {
    type: "scale",
    mode: "进入新场合",
    title: "在一个新环境里，我通常会先观察氛围和规则，再决定自己怎么参与。",
    help: "想象你第一次进入一个新的小组或活动现场。",
    plus: "I"
  },
  {
    type: "scale",
    mode: "进入新场合",
    title: "在一个新环境里，只要有合适的入口，我通常能比较快地进入互动状态。",
    help: "这里的互动可以是工作、聊天、游戏或共同任务。",
    plus: "E"
  },
  {
    type: "slider",
    mode: "作品评价",
    title: "评价一个作品时，你更容易先被哪一侧拉动？",
    help: "拖到更像你的那一端。",
    leftLabel: "它是否真诚、动人、让我产生共鸣",
    rightLabel: "它是否清楚、自洽、完成度站得住",
    left: "F",
    right: "T"
  },
  {
    type: "slider",
    mode: "新消息",
    title: "一条新信息出现时，你更自然的处理方式是？",
    help: "不用极端，停在你的真实位置。",
    leftLabel: "先问事实、来源、细节和当前条件",
    rightLabel: "先看它暗示的趋势、结构和下一种可能",
    left: "S",
    right: "N"
  },
  {
    type: "slider",
    mode: "想法成形",
    title: "一个想法还没成形时，你通常怎样把它弄清楚？",
    help: "两端都可以很聪明，只是路径不同。",
    leftLabel: "先一个人想完整，再拿出去讨论",
    rightLabel: "边表达边成形，靠反馈把它磨出来",
    left: "I",
    right: "E"
  },
  {
    type: "slider",
    mode: "复杂时刻",
    title: "当事情变复杂，你最想先拥有哪一种安全感？",
    help: "拖到你更想要的那种安全感。",
    leftLabel: "选项还开着，随时能换路线",
    rightLabel: "节点已确定，下一步很清楚",
    left: "P",
    right: "J"
  },
  {
    type: "choice",
    mode: "讨论卡住",
    title: "小组讨论卡住了，大家都觉得自己有道理。你最想做的动作是？",
    help: "选择你会最先启动的那个动作。",
    options: [
      { text: "把论点写出来，逐条看证据和漏洞。", sub: "先整理判断标准", scores: { T: 1.8, J: 0.8 } },
      { text: "先确认每个人真正担心什么，别让话题变成站队。", sub: "先降低关系阻抗", scores: { F: 1.8, E: 0.6 } },
      { text: "做一个小实验，别继续空转，看看现实反馈。", sub: "先让局面动起来", scores: { S: 1.1, P: 1.2 } },
      { text: "换一个框架：也许我们问错问题了。", sub: "先重构题目", scores: { N: 1.7, P: 0.7 } }
    ]
  },
  {
    type: "choice",
    mode: "新项目",
    title: "拿到一个开放度很高的新项目，你会更想先做哪件事？",
    help: "选择你最想先启动的动作。",
    options: [
      { text: "找几个真实案例和限制条件，先别飘。", sub: "用现实校准", scores: { S: 1.7, J: 0.8 } },
      { text: "画一张可能性地图，先把边界打开。", sub: "用想象扩容", scores: { N: 1.8, P: 0.7 } },
      { text: "定义成功标准，不然大家会各做各的。", sub: "用标准对齐", scores: { T: 1.4, J: 1.1 } },
      { text: "先聊清楚它为什么值得做，以及谁会被它影响。", sub: "用价值聚焦", scores: { F: 1.4, E: 0.8 } }
    ]
  },
  {
    type: "multi",
    mode: "本周保留",
    title: "如果这周只能保留两样东西，你最不想失去哪两样？",
    help: "请选择两个最舍不得放掉的。",
    max: 2,
    options: [
      { text: "一整块没人打断的深度时间", sub: "完整地把脑内线索整理完", scores: { I: 1.6, J: 0.4 } },
      { text: "和聪明/有趣的人即时互相点亮", sub: "想法在对话里变得更活", scores: { E: 1.5, N: 0.5 } },
      { text: "清楚的节点、边界和交付标准", sub: "知道自己做到哪一步算完成", scores: { J: 1.6, T: 0.4 } },
      { text: "临时发现的机会和可改路线", sub: "不想太早被锁死", scores: { P: 1.6, N: 0.4 } },
      { text: "看得见摸得着的材料和细节", sub: "真实质地比概念更能说服我", scores: { S: 1.6, T: 0.3 } },
      { text: "能让人被理解和被照顾的温度", sub: "好的体验不能只剩效率", scores: { F: 1.6, S: 0.2 } }
    ]
  },
  {
    type: "multi",
    mode: "体验升级",
    title: "如果为体验多花一点钱，你更愿意买单的是哪两种？",
    help: "请选择两个。不要选“应该”，选真的会让你心动的。",
    max: 2,
    options: [
      { text: "设计概念很新，能打开一种没见过的生活想象", sub: "为可能性付费", scores: { N: 1.5, P: 0.5 } },
      { text: "材质、工艺、参数都扎实，用起来确实稳", sub: "为可验证质量付费", scores: { S: 1.6, J: 0.4 } },
      { text: "节省大量时间和沟通成本，让事情变清爽", sub: "为效率付费", scores: { T: 1.5, J: 0.5 } },
      { text: "让同行的人很开心，之后会变成共同记忆", sub: "为关系温度付费", scores: { F: 1.5, E: 0.5 } },
      { text: "行程保留弹性，现场可以随时切换版本", sub: "为自由度付费", scores: { P: 1.5, E: 0.3 } },
      { text: "不被打扰、节奏安静、能把自己重新找回来", sub: "为恢复感付费", scores: { I: 1.5, F: 0.3 } }
    ]
  },
  {
    type: "scale",
    mode: "做决定",
    title: "做决定时，我经常会问自己：这件事放到半年后、一年后还意味着什么？",
    help: "想象这个决定对你来说有一点分量。",
    plus: "N"
  },
  {
    type: "scale",
    mode: "做决定",
    title: "做决定时，我经常会问自己：现在手里有什么资源、限制和确定信息？",
    help: "想象这个决定对你来说有一点分量。",
    plus: "S"
  },
  {
    type: "choice",
    mode: "长消息",
    title: "朋友发来一大段情绪很满的消息，你最可能先做什么？",
    help: "不用选最完美的回答，选最像你会先做的。",
    options: [
      { text: "先复述他的感受，确认自己没有误会。", sub: "先接住人", scores: { F: 1.8, I: 0.4 } },
      { text: "先抓出问题结构：发生了什么，卡点在哪里。", sub: "先拆问题", scores: { T: 1.8, S: 0.4 } },
      { text: "如果关系足够近，会直接打电话，文字太慢。", sub: "先建立互动", scores: { E: 1.5, F: 0.5 } },
      { text: "会先停一下，等自己想清楚再回，不想草率回应。", sub: "先把思路理顺", scores: { I: 1.5, T: 0.3 } }
    ]
  },
  {
    type: "slider",
    mode: "压力上来",
    title: "压力上来时，你更想先把哪件事做出来？",
    help: "拖到更能让你恢复掌控的一侧。",
    leftLabel: "把空间留活，先别过早承诺唯一方案",
    rightLabel: "把房间、文件、待办或时间表恢复秩序",
    left: "P",
    right: "J"
  }
];

const quickQuestions = [
  {
    type: "choice",
    mode: "周五夜晚",
    title: "周五晚上突然空出来，你更想怎么安排？",
    help: "选最自然、最不用说服自己的那个。",
    options: [
      { text: "约两三个熟人吃饭，顺便看看有没有临时活动", sub: "让夜晚自己长出下一站", scores: { E: 2, P: 1 } },
      { text: "回家充电，点喜欢的东西，做点自己的事", sub: "把时间收回到自己手里", scores: { I: 2, J: 1 } },
      { text: "先不定死，有人喊就去，没人喊也舒服", sub: "保留一点随时切换的空间", scores: { P: 2, I: 0.5 } },
      { text: "提前定个小计划，把这晚过得有质感", sub: "给空档一个漂亮形状", scores: { J: 2, S: 0.5 } }
    ]
  },
  {
    type: "slider",
    mode: "朋友灵感",
    title: "朋友兴奋地讲一个新想法时，你的注意力更容易先落在哪边？",
    help: "拖到更像你第一反应的那一侧。",
    leftLabel: "它现在能不能落地，哪里可能卡住",
    rightLabel: "它之后能延伸到哪里，会打开什么新可能",
    left: "S",
    right: "N"
  },
  {
    type: "multi",
    mode: "餐厅选择",
    title: "挑一家餐厅时，下面哪些信息最能打动你？",
    help: "请选择两个。",
    max: 2,
    options: [
      { text: "菜单清楚、评价稳定、踩雷概率低", sub: "安心比惊喜更重要", scores: { S: 2, J: 1 } },
      { text: "氛围特别、有新鲜感，适合留下记忆点", sub: "希望这一餐不只是吃饭", scores: { N: 2, P: 1 } },
      { text: "同行的人都方便，大家坐着舒服", sub: "体验要照顾到具体的人", scores: { F: 2, S: 0.4 } },
      { text: "价格、位置、排队时间综合最划算", sub: "性价比和效率不能太离谱", scores: { T: 2, J: 0.4 } }
    ]
  },
  {
    type: "slider",
    mode: "旅行准备",
    title: "旅行前的准备程度，你更靠近哪边？",
    help: "代入一次三四天的城市旅行。",
    leftLabel: "路线、住宿、备选方案都先定好",
    rightLabel: "先定大方向，到了当地再看感觉",
    left: "J",
    right: "P"
  },
  {
    type: "choice",
    mode: "群聊分歧",
    title: "群聊里大家意见不一致，你最可能怎么接话？",
    help: "想象这是一个需要推进事情的群。",
    options: [
      { text: "先把分歧点列出来，看看哪个方案成本最低", sub: "把混乱压成可比较的选项", scores: { T: 2, J: 1 } },
      { text: "先照顾一下大家情绪，避免场面变僵", sub: "让对话继续流动", scores: { F: 2, E: 1 } },
      { text: "提出一个折中方案试试看，边走边调整", sub: "先跑一个可改版本", scores: { P: 2, F: 0.8 } },
      { text: "私下问关键的人怎么想，再决定怎么说", sub: "先看清水面下的部分", scores: { I: 2, F: 0.8 } }
    ]
  },
  {
    type: "slider",
    mode: "贵价选择",
    title: "买一件贵一点的东西前，你更常被哪边说服？",
    help: "电子产品、衣服、家具或课程都可以代入。",
    leftLabel: "参数、测评、价格都能证明它值得",
    rightLabel: "它让我喜欢，也适合我现在的生活感受",
    left: "T",
    right: "F"
  },
  {
    type: "choice",
    mode: "压力上来",
    title: "工作或学习压力突然变大时，你通常先做什么？",
    help: "选最接近你自动反应的选项。",
    options: [
      { text: "拆任务、排优先级，先把可控部分抓住", sub: "先恢复秩序", scores: { J: 2, T: 1 } },
      { text: "找人聊聊，把情绪和思路顺一顺", sub: "靠交流重新点亮", scores: { E: 2, F: 1 } },
      { text: "一个人安静下来，慢慢恢复判断力", sub: "先把噪音降下来", scores: { I: 2, T: 1 } },
      { text: "换个环境或做点别的，等脑子重新动起来", sub: "给自己留出流动感", scores: { P: 2, N: 1 } }
    ]
  },
  {
    type: "multi",
    mode: "内容吸引",
    title: "你更容易被哪种内容吸引？",
    help: "请选择两个。",
    max: 2,
    options: [
      { text: "真实案例、操作步骤、实用清单", sub: "看完就能拿来用", scores: { S: 2, J: 1 } },
      { text: "趋势判断、概念解释、未来可能性", sub: "像打开一张新地图", scores: { N: 2, P: 1 } },
      { text: "人物关系、情绪转折、价值选择", sub: "人为什么这样做很重要", scores: { F: 2, I: 0.3 } },
      { text: "逻辑推演、反常识分析、观点交锋", sub: "看它怎么被论证出来", scores: { T: 2, E: 0.3 } }
    ]
  },
  {
    type: "slider",
    mode: "认识新人",
    title: "认识新朋友时，你更像哪种节奏？",
    help: "没有好坏，只看你舒服的方式。",
    leftLabel: "很快进入聊天状态，边聊边熟",
    rightLabel: "先观察一阵，确认合拍再慢慢靠近",
    left: "E",
    right: "I"
  },
  {
    type: "choice",
    mode: "计划变化",
    title: "如果一个计划临时被打乱，你最像下面哪种反应？",
    help: "代入一次约会、出行、项目安排都可以。",
    options: [
      { text: "马上重新排顺序，尽量把损失降到最低", sub: "先止损和重组", scores: { J: 2, T: 1 } },
      { text: "看看有没有新的可能，说不定会更有意思", sub: "把意外当作入口", scores: { P: 2, N: 1 } },
      { text: "先确认相关的人有没有不舒服或被影响", sub: "先照看人的状态", scores: { F: 2, E: 1 } },
      { text: "先弄清楚到底哪里变了，再决定下一步", sub: "先收集确定信息", scores: { S: 2, I: 1 } }
    ]
  }
];

const deepExtraQuestions = [
  {
    type: "scale",
    mode: "书店偶遇",
    title: "在书店随手翻到一本陌生书，我会先被目录背后的问题意识吸引，而不只是看它讲了什么内容。",
    help: "想象你只有十分钟决定要不要继续读。",
    plus: "N"
  },
  {
    type: "scale",
    mode: "书店偶遇",
    title: "在书店随手翻到一本陌生书，我会先看作者、目录、案例和写法是否可靠。",
    help: "想象你只有十分钟决定要不要继续读。",
    plus: "S"
  },
  {
    type: "scale",
    mode: "语音消息",
    title: "遇到一段有点复杂的语音消息，我常常要先自己消化一下，再决定怎么回应。",
    help: "代入一次需要认真回复的聊天。",
    plus: "I"
  },
  {
    type: "scale",
    mode: "语音消息",
    title: "遇到一段有点复杂的语音消息，我会更想立刻接上对话，在交流中把事情理清。",
    help: "代入一次需要认真回复的聊天。",
    plus: "E"
  },
  {
    type: "scale",
    mode: "漂亮方案",
    title: "一个方案很有氛围但关键逻辑含糊时，我很难只因为它好看就完全买账。",
    help: "想象你要为它投入时间或预算。",
    plus: "T"
  },
  {
    type: "scale",
    mode: "漂亮方案",
    title: "一个方案不够完美但很真诚、很照顾人时，我会愿意给它更多空间。",
    help: "想象你要和相关的人继续合作。",
    plus: "F"
  },
  {
    type: "scale",
    mode: "周末前夜",
    title: "周末开始前，我会更舒服地把重要安排先落下来，剩下的时间才真正放松。",
    help: "想象这周你已经有点累。",
    plus: "J"
  },
  {
    type: "scale",
    mode: "周末前夜",
    title: "周末开始前，我更想保留不被安排满的余地，让当天状态决定走向。",
    help: "想象这周你已经有点累。",
    plus: "P"
  },
  {
    type: "choice",
    mode: "展览出口",
    title: "看完一个展走到出口，你最可能记住什么？",
    help: "选那个最容易在脑子里留下回声的部分。",
    options: [
      { text: "某件作品的材料、光线和摆放方式", sub: "具体质感还在脑内停留", scores: { S: 1.8, I: 0.4 } },
      { text: "整场展想讲的时代情绪或隐藏主题", sub: "更大的线索浮出来", scores: { N: 1.8, F: 0.4 } },
      { text: "策展逻辑是否成立，叙事有没有断裂", sub: "结构比氛围更难忽略", scores: { T: 1.7, J: 0.5 } },
      { text: "同行的人在哪一刻被打动或沉默", sub: "人的反应很有信息量", scores: { F: 1.7, E: 0.5 } }
    ]
  },
  {
    type: "choice",
    mode: "临时合作",
    title: "临时被拉进一个小合作，你最想先确认什么？",
    help: "这个合作不大，但会占用你接下来几天。",
    options: [
      { text: "谁负责什么，截止点和交付标准是什么", sub: "先把边界钉住", scores: { J: 1.8, T: 0.8 } },
      { text: "现有材料有哪些，缺口和风险在哪里", sub: "先摸清现实地形", scores: { S: 1.8, T: 0.5 } },
      { text: "这件事为什么值得做，最终希望给谁带来什么", sub: "先找到意义中心", scores: { N: 1.4, F: 1.0 } },
      { text: "能不能先试一个小版本，别一开始就锁死", sub: "先给方案留弹性", scores: { P: 1.8, E: 0.4 } }
    ]
  },
  {
    type: "choice",
    mode: "朋友迟到",
    title: "朋友迟到二十分钟，你更接近哪种状态？",
    help: "假设对方不是故意的，但没有提前说清楚。",
    options: [
      { text: "我会先调整自己的安排，别让后面全部乱掉", sub: "先保住节奏", scores: { J: 1.7, S: 0.7 } },
      { text: "我会想知道发生了什么，具体情况比猜测重要", sub: "先确认事实", scores: { S: 1.7, I: 0.4 } },
      { text: "如果对方很抱歉，我更在意之后别让气氛坏掉", sub: "先修复体验", scores: { F: 1.7, E: 0.5 } },
      { text: "我会把空出来的二十分钟顺手变成自己的时间", sub: "先顺势改道", scores: { P: 1.7, I: 0.5 } }
    ]
  },
  {
    type: "choice",
    mode: "夜间灵感",
    title: "半夜突然想到一个想做的小项目，你最可能怎么处理？",
    help: "想象这个想法真的让你有点兴奋。",
    options: [
      { text: "先写下目标、步骤和明天第一件小事", sub: "让灵感有落点", scores: { J: 1.7, N: 0.6 } },
      { text: "顺着它继续发散，看看还能连到哪些可能", sub: "先把边界打开", scores: { N: 1.8, P: 0.8 } },
      { text: "查有没有人做过，现实里大概需要什么资源", sub: "先摸清路径", scores: { S: 1.7, T: 0.6 } },
      { text: "立刻找一个懂的人聊两句，听听反应", sub: "用反馈点火", scores: { E: 1.7, P: 0.5 } }
    ]
  },
  {
    type: "slider",
    mode: "语言风格",
    title: "别人给你建议时，你更希望它靠近哪一侧？",
    help: "代入一件你真的在意的事。",
    leftLabel: "直接指出问题，不绕弯也没关系",
    rightLabel: "先理解处境，再一起看怎么调整",
    left: "T",
    right: "F"
  },
  {
    type: "slider",
    mode: "新工具",
    title: "拿到一个新工具时，你更像哪种打开方式？",
    help: "比如软件、相机、厨房机器或学习方法。",
    leftLabel: "先看说明和示例，知道基本规则再上手",
    rightLabel: "先点点看、试试看，靠反馈熟悉它",
    left: "J",
    right: "P"
  },
  {
    type: "slider",
    mode: "关系靠近",
    title: "一段关系开始变近时，你更希望它怎样发生？",
    help: "可以代入友情、暧昧或合作关系。",
    leftLabel: "自然多见面多交流，熟悉感在互动里长出来",
    rightLabel: "先保留一点空间，确认舒服再慢慢靠近",
    left: "E",
    right: "I"
  },
  {
    type: "slider",
    mode: "路线选择",
    title: "面对两个都不错的机会，你更容易被哪边拉动？",
    help: "想象它们都需要你投入半年。",
    leftLabel: "路径清楚、有参照、知道怎么一步步做",
    rightLabel: "空间更大、未知更多、也许会长出新版本",
    left: "S",
    right: "N"
  },
  {
    type: "multi",
    mode: "理想工作台",
    title: "如果给自己搭一个理想工作台，你最想保留哪两样？",
    help: "请选择两个。",
    max: 2,
    options: [
      { text: "整洁的文件、清楚的待办和计时器", sub: "随时知道下一步", scores: { J: 1.8, S: 0.5 } },
      { text: "白板、便签和可以随手改的草图", sub: "让想法保持流动", scores: { N: 1.4, P: 1.0 } },
      { text: "一副好耳机和不被打扰的时间", sub: "进入自己的深水区", scores: { I: 1.7, T: 0.3 } },
      { text: "能随时找人对一下想法的入口", sub: "让思路被碰撞激活", scores: { E: 1.7, N: 0.4 } },
      { text: "真实样品、参考图和可验证的数据", sub: "不让东西飘在空中", scores: { S: 1.7, T: 0.5 } },
      { text: "一张能提醒我为什么做这件事的图或句子", sub: "让投入有情感锚点", scores: { F: 1.7, N: 0.4 } }
    ]
  },
  {
    type: "choice",
    mode: "收尾时刻",
    title: "一个项目快结束时，你最想补上的是什么？",
    help: "想象它已经基本完成，但还没交出去。",
    options: [
      { text: "检查细节、错漏和交付格式", sub: "别在最后一步掉链子", scores: { S: 1.7, J: 0.9 } },
      { text: "再看一遍整体叙事，确认它真的有说服力", sub: "让结构更完整", scores: { N: 1.4, T: 0.8 } },
      { text: "确认相关的人是否理解、接受、愿意继续推进", sub: "让结果被真正接住", scores: { F: 1.7, E: 0.6 } },
      { text: "留一点后续可扩展的入口，不把它封死", sub: "给未来留下空间", scores: { P: 1.7, N: 0.6 } }
    ]
  }
];

const quizModes = {
  10: {
    label: "10题速测",
    countText: "10 个场景",
    timeText: "约 1 分钟",
    copy: "用十个生活瞬间快速生成你的今日人格切片，适合想先轻巧试一下的时候。",
    questions: quickQuestions
  },
  28: {
    label: "28题标准版",
    countText: "28 个场景",
    timeText: "约 3 分钟",
    copy: "从电影、旅行、工作、关系和审美里的微小选择出发，生成一份属于你的 2026 人格光谱。",
    questions: standardQuestions
  },
  46: {
    label: "46题深测版",
    countText: "46 个场景",
    timeText: "约 5 分钟",
    copy: "用更完整的生活切片展开你的判断、节奏、关系和信息处理方式，生成更细的人格光谱。",
    questions: [...standardQuestions, ...deepExtraQuestions]
  }
};

let questions = quizModes["28"].questions;

const state = {
  current: 0,
  answers: [],
  result: null,
  shared: false,
  mode: "28"
};

const screens = {
  intro: document.querySelector('[data-screen="intro"]'),
  quiz: document.querySelector('[data-screen="quiz"]'),
  reveal: document.querySelector('[data-screen="reveal"]'),
  result: document.querySelector('[data-screen="result"]')
};

const els = {
  start: document.querySelector("[data-start]"),
  introCopy: document.querySelector("[data-intro-copy]"),
  introCount: document.querySelector("[data-intro-count]"),
  introTime: document.querySelector("[data-intro-time]"),
  versionButtons: [...document.querySelectorAll("[data-version]")],
  back: document.querySelector("[data-back]"),
  step: document.querySelector("[data-step]"),
  mode: document.querySelector("[data-mode]"),
  progress: document.querySelector("[data-progress]"),
  kicker: document.querySelector("[data-question-kicker]"),
  title: document.querySelector("[data-question-title]"),
  help: document.querySelector("[data-question-help]"),
  options: document.querySelector("[data-options]"),
  next: document.querySelector("[data-next]"),
  revealType: document.querySelector("[data-reveal-type]"),
  resultHero: document.querySelector("[data-result-hero]"),
  roleChip: document.querySelector("[data-role-chip]"),
  resultType: document.querySelector("[data-result-type]"),
  resultTitle: document.querySelector("[data-result-title]"),
  resultLine: document.querySelector("[data-result-line]"),
  resultTags: document.querySelector("[data-result-tags]"),
  dimensions: document.querySelector("[data-dimensions]"),
  confidence: document.querySelector("[data-confidence]"),
  description: document.querySelector("[data-result-description]"),
  strength: document.querySelector("[data-result-strength]"),
  watch: document.querySelector("[data-result-watch]"),
  quote: document.querySelector("[data-result-quote]"),
  save: document.querySelector("[data-save]"),
  share: document.querySelector("[data-share]"),
  restart: document.querySelector("[data-restart]"),
  galleryToggle: document.querySelector("[data-gallery-toggle]"),
  gallery: document.querySelector("[data-gallery]"),
  canvas: document.querySelector("[data-canvas]")
};

function selectQuizMode(mode) {
  const nextMode = quizModes[mode] ? String(mode) : "28";
  state.mode = nextMode;
  questions = quizModes[nextMode].questions;
  els.introCopy.textContent = quizModes[nextMode].copy;
  els.introCount.textContent = quizModes[nextMode].countText;
  els.introTime.textContent = quizModes[nextMode].timeText;
  els.versionButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.version === nextMode);
  });
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("is-active"));
  screens[name].classList.add("is-active");
  document.querySelector(".phone").scrollTo(0, 0);
}

function startQuiz() {
  selectQuizMode(state.mode);
  state.current = 0;
  state.answers = [];
  state.result = null;
  state.shared = false;
  renderQuestion();
  showScreen("quiz");
  const url = new URL(location.href);
  url.search = "";
  url.searchParams.set("mode", state.mode);
  history.replaceState(null, "", url);
}

function renderQuestion() {
  const question = questions[state.current];
  const questionNumber = state.current + 1;
  const saved = state.answers[state.current];

  els.step.textContent = `${String(questionNumber).padStart(2, "0")} / ${questions.length}`;
  els.mode.textContent = question.mode;
  els.progress.style.width = `${(questionNumber / questions.length) * 100}%`;
  els.kicker.textContent = `Question ${String(questionNumber).padStart(2, "0")}`;
  els.title.textContent = question.title;
  els.help.textContent = question.help || "";
  els.back.disabled = state.current === 0;
  els.options.innerHTML = "";
  els.options.className = "options";
  els.next.hidden = false;
  els.next.disabled = true;
  els.next.onclick = () => {
    if (canAdvance(question, state.answers[state.current])) advance();
  };

  if (question.type === "scale") {
    els.options.classList.add("scale-grid");
    scaleOptions.forEach((option, index) => {
      const button = createOptionButton({
        letter: String(index + 1),
        text: option.label,
        selected: saved && saved.value === option.value
      });
      button.addEventListener("click", () => selectAnswer({ type: "scale", value: option.value }));
      els.options.appendChild(button);
    });
    els.next.disabled = !saved;
  }

  if (question.type === "choice") {
    question.options.forEach((option, index) => {
      const button = createOptionButton({
        letter: String.fromCharCode(65 + index),
        text: option.text,
        sub: option.sub,
        selected: saved && saved.index === index
      });
      button.addEventListener("click", () => selectAnswer({ type: "choice", index }));
      els.options.appendChild(button);
    });
    els.next.disabled = !saved;
  }

  if (question.type === "multi") {
    const hint = document.createElement("p");
    hint.className = "multi-hint";
    hint.textContent = `已选 ${saved ? saved.indexes.length : 0} / ${question.max}`;
    els.options.appendChild(hint);
    let selected = saved ? [...saved.indexes] : [];

    question.options.forEach((option, index) => {
      const button = createOptionButton({
        letter: String.fromCharCode(65 + index),
        text: option.text,
        sub: option.sub,
        selected: selected.includes(index)
      });
      button.addEventListener("click", () => {
        if (selected.includes(index)) {
          selected = selected.filter((item) => item !== index);
        } else if (selected.length < question.max) {
          selected = [...selected, index];
        }
        state.answers[state.current] = { type: "multi", indexes: selected };
        renderQuestion();
      });
      els.options.appendChild(button);
    });

    els.next.hidden = false;
    els.next.disabled = selected.length !== question.max;
  }

  if (question.type === "slider") {
    const value = saved ? saved.value : 50;
    const wrap = document.createElement("div");
    wrap.className = "slider-wrap";
    wrap.innerHTML = `
      <div class="slider-labels">
        <span>${question.leftLabel}</span>
        <span>${question.rightLabel}</span>
      </div>
      <input class="range-input" type="range" min="0" max="100" step="1" value="${value}" aria-label="选择更接近你的那一侧">
      <div class="slider-meter">
        <span>偏左</span>
        <span>中间</span>
        <span>偏右</span>
      </div>
    `;
    const input = wrap.querySelector("input");
    input.addEventListener("input", () => {
      state.answers[state.current] = { type: "slider", value: Number(input.value) };
      els.next.disabled = false;
    });
    els.options.appendChild(wrap);
    state.answers[state.current] = saved || { type: "slider", value };
    els.next.hidden = false;
    els.next.disabled = false;
  }
}

function createOptionButton({ letter, text, sub, selected }) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `option-card${selected ? " is-selected" : ""}`;
  button.innerHTML = `
    <span class="option-letter">${letter}</span>
    <span>
      <span class="option-main">${text}</span>
      ${sub ? `<span class="option-sub">${sub}</span>` : ""}
    </span>
  `;
  return button;
}

function canAdvance(question, answer) {
  if (!answer) return false;
  if (question.type === "multi") return Array.isArray(answer.indexes) && answer.indexes.length === question.max;
  return true;
}

function selectAnswer(answer) {
  state.answers[state.current] = answer;
  renderQuestion();
}

function advance() {
  if (state.current < questions.length - 1) {
    state.current += 1;
    renderQuestion();
    return;
  }
  finishQuiz();
}

function goBack() {
  if (state.current === 0) return;
  state.current -= 1;
  renderQuestion();
}

function finishQuiz() {
  const computed = computeResult(state.answers);
  state.result = computed;
  els.revealType.textContent = computed.type;
  showScreen("reveal");
  setTimeout(() => {
    renderResult(computed);
    showScreen("result");
    const url = new URL(location.href);
    url.searchParams.set("type", computed.type);
    url.searchParams.set("mode", state.mode);
    history.replaceState(null, "", url);
  }, 980);
}

function computeResult(answers) {
  const scores = Object.fromEntries(Object.keys(dimensionNames).map((key) => [key, 0]));
  const tiebreak = {};

  function add(letter, value) {
    if (!letter || !Number.isFinite(value) || value === 0) return;
    scores[letter] += value;
    scores[opposite[letter]] -= value;
    const pair = pairKey(letter);
    tiebreak[pair] = value > 0 ? letter : opposite[letter];
  }

  answers.forEach((answer, index) => {
    const question = questions[index];
    if (!answer || !question) return;

    if (question.type === "scale") {
      add(question.plus, answer.value);
    }

    if (question.type === "choice") {
      applyScores(question.options[answer.index].scores, add);
    }

    if (question.type === "multi") {
      answer.indexes.forEach((optionIndex) => applyScores(question.options[optionIndex].scores, add));
    }

    if (question.type === "slider") {
      const normalized = (answer.value - 50) / 25;
      add(question.right, normalized);
    }
  });

  const type = pairs.map((pair) => pickLetter(pair, scores, tiebreak)).join("");
  const dimensions = buildDimensions(scores, type);
  const avgStrength = Math.round(dimensions.reduce((sum, item) => sum + item.percent, 0) / dimensions.length);
  return { type, scores, dimensions, avgStrength };
}

function applyScores(scoreObject, add) {
  Object.entries(scoreObject).forEach(([letter, value]) => add(letter, value));
}

function pairKey(letter) {
  const pair = pairs.find((item) => item.a === letter || item.b === letter);
  return `${pair.a}${pair.b}`;
}

function pickLetter(pair, scores, tiebreak) {
  const diff = scores[pair.a] - scores[pair.b];
  if (diff > 0) return pair.a;
  if (diff < 0) return pair.b;
  return tiebreak[`${pair.a}${pair.b}`] || pair.a;
}

function buildDimensions(scores, type) {
  return pairs.map((pair, index) => {
    const diff = scores[pair.a] - scores[pair.b];
    const selected = type[index] || (diff >= 0 ? pair.a : pair.b);
    const percent = clamp(Math.round(50 + Math.abs(diff) * 3.2), 52, 96);
    const isRight = selected === pair.b;
    return {
      pair: `${pair.a}/${pair.b}`,
      a: pair.a,
      b: pair.b,
      title: pair.title,
      left: pair.left,
      right: pair.right,
      selected,
      percent,
      marker: `${isRight ? percent : 100 - percent}%`,
      fillWidth: `${Math.abs((isRight ? percent : 100 - percent) - 50)}%`,
      fillX: `${Math.min(50, isRight ? percent : 100 - percent)}%`
    };
  });
}

function dimensionsFromType(type) {
  return pairs.map((pair, index) => {
    const selected = type[index];
    const percent = 68;
    const isRight = selected === pair.b;
    return {
      pair: `${pair.a}/${pair.b}`,
      a: pair.a,
      b: pair.b,
      title: pair.title,
      left: pair.left,
      right: pair.right,
      selected,
      percent,
      marker: `${isRight ? percent : 100 - percent}%`,
      fillWidth: `${Math.abs((isRight ? percent : 100 - percent) - 50)}%`,
      fillX: `${Math.min(50, isRight ? percent : 100 - percent)}%`
    };
  });
}

function renderResult(result) {
  const profile = results[result.type];
  const dimensions = result.dimensions || dimensionsFromType(result.type);
  const colors = profile.colors;
  document.documentElement.style.setProperty("--type-a", colors[0]);
  document.documentElement.style.setProperty("--type-b", colors[1]);
  document.documentElement.style.setProperty("--accent", colors[0]);
  els.resultHero.style.setProperty("--type-a", colors[0]);
  els.resultHero.style.setProperty("--type-b", colors[1]);
  els.roleChip.textContent = `${profile.role}组 · 2026 Result`;
  els.resultType.textContent = result.type;
  els.resultTitle.textContent = profile.title;
  els.resultLine.textContent = profile.line;
  els.resultTags.innerHTML = profile.tags.map((tag) => `<span>${tag}</span>`).join("");
  els.confidence.textContent = result.avgStrength ? `结果强度 ${result.avgStrength}%` : `${profile.role}组`;
  els.description.textContent = profile.description;
  els.strength.textContent = profile.strength;
  els.watch.textContent = profile.watch;
  els.quote.textContent = `“${profile.quote}”`;
  els.dimensions.innerHTML = dimensions.map((item) => `
    <div class="dimension-row">
      <div class="axis-head">
        <span>${item.a}/${item.b}</span>
        <strong>${item.title}</strong>
        <em>${item.percent}%</em>
      </div>
      <div class="axis-bar" style="--pos: ${item.marker}; --w: ${item.fillWidth}; --x: ${item.fillX};">
        <i></i>
        <b>${item.selected}</b>
        <span></span>
      </div>
      <div class="axis-foot">
        <span>${item.left}</span>
        <span>${item.right}</span>
      </div>
    </div>
  `).join("");
  renderGallery(result.type);
}

function renderGallery(activeType) {
  els.gallery.innerHTML = Object.entries(results).map(([type, profile]) => `
    <div class="gallery-card">
      <div class="gallery-code" style="--ga:${profile.colors[0]}; --gb:${profile.colors[1]}">${type}</div>
      <div>
        <strong>${type} ${profile.title}${type === activeType ? " · 你的结果" : ""}</strong>
        <span>${profile.tags.slice(0, 3).join(" / ")}</span>
      </div>
    </div>
  `).join("");
}

function toggleGallery() {
  const hidden = els.gallery.hidden;
  els.gallery.hidden = !hidden;
  els.galleryToggle.textContent = hidden ? "收起 16 型图鉴" : "查看 16 型图鉴";
}

async function shareResult() {
  const type = state.result ? state.result.type : "INFJ";
  const url = new URL(location.href);
  url.searchParams.set("type", type);
  url.searchParams.set("mode", state.mode);
  const shareData = {
    title: "2026 最新版 MBTI 测试",
    text: `我的 ${quizModes[state.mode].label}结果是 ${type} ${results[type].title}，你也来测一下。`,
    url: url.toString()
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(shareData.url);
      flashButton(els.share, "链接已复制");
    }
  } catch (error) {
    try {
      await navigator.clipboard.writeText(shareData.url);
      flashButton(els.share, "链接已复制");
    } catch (copyError) {
      flashButton(els.share, "可复制地址栏链接");
    }
  }
}

function saveCard() {
  if (!state.result) return;
  const canvas = els.canvas;
  const ctx = canvas.getContext("2d");
  const profile = results[state.result.type];
  const colors = profile.colors;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const bg = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  bg.addColorStop(0, "#121218");
  bg.addColorStop(0.36, colors[0]);
  bg.addColorStop(0.68, colors[1]);
  bg.addColorStop(1, "#101116");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(16, 17, 22, 0.72)";
  roundRect(ctx, 70, 90, 940, 1740, 34);
  ctx.fill();
  ctx.strokeStyle = "rgba(255, 248, 236, 0.2)";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = "#fff8ec";
  ctx.font = "700 42px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillText("2026 MBTI TEST", 110, 170);

  ctx.font = "900 178px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillText(state.result.type, 110, 385);

  ctx.font = "800 76px -apple-system, BlinkMacSystemFont, sans-serif";
  wrapText(ctx, profile.title, 110, 500, 820, 88);

  ctx.fillStyle = "rgba(255, 248, 236, 0.78)";
  ctx.font = "400 36px -apple-system, BlinkMacSystemFont, sans-serif";
  wrapText(ctx, profile.line, 110, 650, 820, 54);

  ctx.fillStyle = "rgba(255, 248, 236, 0.95)";
  ctx.font = "700 34px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillText(profile.tags.join("  /  "), 110, 850);

  ctx.fillStyle = "rgba(255, 248, 236, 0.76)";
  ctx.font = "400 34px -apple-system, BlinkMacSystemFont, sans-serif";
  wrapText(ctx, profile.description, 110, 960, 840, 52);

  ctx.fillStyle = "#fff8ec";
  ctx.font = "800 40px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillText("你的光谱分布", 110, 1330);

  state.result.dimensions.forEach((item, index) => {
    const y = 1405 + index * 82;
    ctx.fillStyle = "rgba(255, 248, 236, 0.74)";
    ctx.font = "700 30px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText(`${item.pair}  ${item.title}  ${item.percent}%`, 110, y);
    ctx.fillStyle = "rgba(255, 248, 236, 0.16)";
    roundRect(ctx, 110, y + 18, 820, 20, 10);
    ctx.fill();
    const marker = 110 + 820 * (parseFloat(item.marker) / 100);
    const x = Math.min(110 + 410, marker);
    const width = Math.abs(marker - (110 + 410));
    const bar = ctx.createLinearGradient(x, y + 18, x + Math.max(width, 1), y + 18);
    bar.addColorStop(0, colors[0]);
    bar.addColorStop(1, colors[1]);
    ctx.fillStyle = bar;
    roundRect(ctx, x, y + 18, width, 20, 10);
    ctx.fill();
    ctx.fillStyle = "#fff8ec";
    ctx.beginPath();
    ctx.arc(marker, y + 28, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#141018";
    ctx.font = "900 26px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(item.selected, marker, y + 37);
    ctx.textAlign = "left";
  });

  ctx.fillStyle = "rgba(255, 248, 236, 0.66)";
  ctx.font = "400 28px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillText("kaikaiyao.github.io/2026-mbti-test", 110, 1760);

  const link = document.createElement("a");
  link.download = `2026-mbti-${state.result.type}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
  flashButton(els.save, "结果图已生成");
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const chars = [...text];
  let line = "";
  let currentY = y;
  chars.forEach((char) => {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, currentY);
      line = char;
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  });
  if (line) ctx.fillText(line, x, currentY);
}

function flashButton(button, text) {
  const original = button.textContent;
  button.textContent = text;
  setTimeout(() => {
    button.textContent = original;
  }, 1500);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function loadSharedResult() {
  const params = new URLSearchParams(location.search);
  const mode = params.get("mode");
  if (mode && quizModes[mode]) {
    selectQuizMode(mode);
  } else {
    selectQuizMode(state.mode);
  }
  const type = (params.get("type") || "").toUpperCase();
  if (!results[type]) return false;
  state.shared = true;
  state.result = {
    type,
    dimensions: dimensionsFromType(type),
    avgStrength: null
  };
  renderResult(state.result);
  showScreen("result");
  return true;
}

els.versionButtons.forEach((button) => {
  button.addEventListener("click", () => selectQuizMode(button.dataset.version));
});
els.start.addEventListener("click", startQuiz);
els.back.addEventListener("click", goBack);
els.share.addEventListener("click", shareResult);
els.save.addEventListener("click", saveCard);
els.restart.addEventListener("click", startQuiz);
els.galleryToggle.addEventListener("click", toggleGallery);

loadSharedResult();
