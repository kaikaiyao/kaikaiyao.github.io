const traitMeta = {
  social: { label: "社交热度", low: "低频入场", high: "主动靠近" },
  spark: { label: "现场火花", low: "安静观察", high: "一秒点亮" },
  order: { label: "路线秩序", low: "即兴漂移", high: "心里有图" },
  warmth: { label: "情绪承接", low: "边界清楚", high: "会把人接住" },
  style: { label: "审美浓度", low: "舒服实用", high: "画面优先" },
  energy: { label: "行动电量", low: "节能散步", high: "一直有劲" },
  independence: { label: "自我风向", low: "愿意配合", high: "主见很稳" },
  mischief: { label: "支线雷达", low: "稳稳落地", high: "越走越偏" }
};

const traitKeys = Object.keys(traitMeta);

const dogs = [
  {
    id: "akaShiba",
    breed: "赤柴",
    name: "日系街头主理柴",
    line: "看起来没在用力，其实每一步都有自己的节奏。",
    tags: ["有边界", "外冷内热", "轻微傲娇", "懂得拒绝"],
    description: "你像一只从艺术馆门口慢慢走出来的赤柴，不急着营业，也不随便被牵着走。你可以合群，但需要先确认这群人和这件事值得投入。越熟的人越知道，你的冷静里面其实藏着很稳的在意。",
    friend: "朋友会觉得你不太抢话，但一旦站队就很可靠。你不是故作神秘，只是不喜欢把所有反应都交出去。",
    route: "适合从滨江美术馆外慢走到江边栏杆。社交补丁：今天可以少解释，选择本身就很清楚。",
    shareTitle: "今天的我：日系街头主理柴，礼貌营业但不随便被牵走。",
    outfit: "黑色尼龙背心、冰美式、红色短牵引绳",
    bg: "#f6c16d",
    accent: "#f05a42",
    profile: { social: -0.8, spark: -0.2, order: 0.8, warmth: 0.4, style: 0.8, energy: 0.3, independence: 1.8, mischief: 0.5 },
    art: { fur: "#d88a3d", fur2: "#ffe5bd", ears: "pointy", mark: "shiba", accessory: "coffee", prop: "leash" }
  },
  {
    id: "shiroShiba",
    breed: "白柴",
    name: "滨江白月光",
    line: "看起来很乖，其实有自己的风向。",
    tags: ["清爽克制", "低噪音审美", "温和疏离", "干净感"],
    description: "你像一只刚从滨江风里走出来的白柴，干净、克制，带一点不解释也很合理的距离感。你不急着热闹，但只要出现，画面就会自动变高级。",
    friend: "朋友会说你不怎么抢话，但每次发言都像把滤镜调对了。你很少用力表现，却很容易被记住。",
    route: "沿江步道慢走到美术馆外。社交补丁：遇到熟人点头微笑即可，不必硬聊。",
    shareTitle: "今天的我：白柴模式，白得很有主见。",
    outfit: "银色牵引绳、淡蓝风衣、极简墨镜",
    bg: "#dbe9ea",
    accent: "#3b8ea5",
    profile: { social: -1.0, spark: -0.7, order: 1.0, warmth: 0.5, style: 1.5, energy: -0.3, independence: 1.7, mischief: -0.5 },
    art: { fur: "#fff7e2", fur2: "#f1d8be", ears: "pointy", mark: "shiba", accessory: "shades", prop: "sparkle" }
  },
  {
    id: "kuroShiba",
    breed: "黑柴",
    name: "夜跑酷酷狗",
    line: "不合群，但很有场。",
    tags: ["酷感", "护短", "主见强", "少说多看"],
    description: "你不是冷淡，是自带夜色质感。别人还在想怎么入场，你已经站在灯光下面，像一条短片的主角犬。你越不解释，越有吸引力。",
    friend: "朋友会觉得你看着不太好接近，但熟了以后超级护短。你不轻易热情，所以热情很值钱。",
    route: "傍晚沿滨江跑道走一圈，最后在灯光最漂亮的地方停两分钟。社交补丁：少说话，多用眼神营业。",
    shareTitle: "今天的我：黑柴上线，但不营业太多。",
    outfit: "反光项圈、银色耳机、黑色运动外套",
    bg: "#d8d5d0",
    accent: "#20201d",
    profile: { social: -1.3, spark: -0.8, order: 1.2, warmth: -0.1, style: 1.6, energy: 0.5, independence: 2.0, mischief: 0.3 },
    art: { fur: "#20201d", fur2: "#c47a45", ears: "pointy", mark: "brow", accessory: "headphones", prop: "moon" }
  },
  {
    id: "labrador",
    breed: "拉布拉多",
    name: "滨江太阳能",
    line: "你一出现，气氛就开始回血。",
    tags: ["友好可靠", "低攻击性", "会暖场", "行动力足"],
    description: "你像一只拉布拉多，不是单纯热情，而是会把人从阴天里领出来。你擅长把尴尬变成玩笑，把普通散步变成集体出逃。",
    friend: "朋友会觉得只要你在，就不怕冷场。你会主动问别人要不要一起走一段，而且问得很自然。",
    route: "从滨江草坪一路走到咖啡外摆区，适合随机偶遇。社交补丁：今天主动发起约局，成功率很高。",
    shareTitle: "今日滨江，快乐由我牵引。",
    outfit: "黄色牵引绳、网球、冰美式、帆布包",
    bg: "#f4d57e",
    accent: "#f05a42",
    profile: { social: 2.0, spark: 1.0, order: 0.5, warmth: 1.7, style: -0.2, energy: 1.1, independence: -0.9, mischief: 0.2 },
    art: { fur: "#d99b45", fur2: "#f8dca3", ears: "floppy", mark: "plain", accessory: "ball", prop: "coffee" }
  },
  {
    id: "golden",
    breed: "金毛",
    name: "温柔大型充电宝",
    line: "你不是没脾气，是选择把人接住。",
    tags: ["温柔有重量", "情绪稳定", "陪伴型", "安全感"],
    description: "你像金毛，温柔得很有重量。你会照顾大家的节奏，也会在关键时刻把人从情绪里牵出来，像江边一盏不刺眼的灯。",
    friend: "朋友会说你在的时候，大家比较敢说真话。你不一定最吵，但你常常是局面变稳的原因。",
    route: "适合和老朋友走一条长线，从黄昏走到天色暗下来。社交补丁：今天可以约一个很久没见的人。",
    shareTitle: "被滨江晚风温柔接住，是我的金毛时刻。",
    outfit: "奶油围巾、暖黄色路灯、双人背影",
    bg: "#efd09b",
    accent: "#8aa66a",
    profile: { social: 1.3, spark: 0.5, order: 0.4, warmth: 2.0, style: 0.2, energy: 0.5, independence: -0.6, mischief: -0.2 },
    art: { fur: "#e3ac4f", fur2: "#ffe2a8", ears: "floppy", mark: "plain", accessory: "scarf", prop: "heart" }
  },
  {
    id: "corgi",
    breed: "柯基",
    name: "短腿社交王",
    line: "腿短不是问题，存在感很长。",
    tags: ["会来事", "移动派对", "小步快跑", "快乐显眼"],
    description: "你像柯基，明明很可爱，却不是软乎乎那种。你会用小步快跑闯进大家视线，把日常过成一场移动派对。",
    friend: "朋友会觉得你一来，大家就开始笑。你很会把普通局面处理成有记忆点的小片段。",
    route: "适合去人多但不拥挤的滨江步道，走走停停收集夸夸。社交补丁：今天可以大胆穿亮色，越显眼越对味。",
    shareTitle: "低重心，高人气。我是滨江短腿社交王。",
    outfit: "彩色牵引绳、小鸭舌帽、滑板贴纸",
    bg: "#f3bf74",
    accent: "#3b8ea5",
    profile: { social: 1.4, spark: 1.8, order: 0.2, warmth: 0.9, style: 0.7, energy: 1.0, independence: 0.2, mischief: 1.1 },
    art: { fur: "#d98238", fur2: "#fff1cf", ears: "pointy", mark: "corgi", accessory: "cap", prop: "skate" }
  },
  {
    id: "borderCollie",
    breed: "边境牧羊犬",
    name: "路线规划师",
    line: "看似随性，其实全场最清醒。",
    tags: ["聪明", "有备用方案", "高效率", "观察动线"],
    description: "你像边牧，脑子转得比江边骑行的人还快。别人是来遛弯，你是来观察动线、风向、排队长度和社交机会的。",
    friend: "朋友会觉得跟你出门很安心，连迷路都像被安排好的体验。你不是控制欲强，你只是提前看到了下一个转角。",
    route: "先看展，再沿江散步，最后精准抵达不排队的咖啡点。社交补丁：今天别把所有事情都排满，留一点随机。",
    shareTitle: "滨江散步，但我有备用方案。",
    outfit: "小地图、计时器、蓝绿色牵引扣",
    bg: "#cdded7",
    accent: "#3b8ea5",
    profile: { social: 0.0, spark: -0.2, order: 2.0, warmth: 0.1, style: 0.4, energy: 1.4, independence: 0.8, mischief: 0.0 },
    art: { fur: "#20201d", fur2: "#f7f0dc", ears: "semi", mark: "mask", accessory: "map", prop: "arrow" }
  },
  {
    id: "poodle",
    breed: "贵宾犬",
    name: "精致变装玩家",
    line: "今天的风格，明天不负责。",
    tags: ["审美灵活", "社交聪明", "状态可调", "有小心机"],
    description: "你像贵宾犬，审美灵活，状态可调。你可以甜，可以酷，可以突然换一身让朋友怀疑你是不是偷偷更新了系统。",
    friend: "朋友会觉得你每次出现都像带了新皮肤。你不只是爱漂亮，你很会让风格服务当下的场合。",
    route: "适合去艺术空间附近走一圈，让穿搭有背景。社交补丁：今天可以主动拍别人，也会自然得到回拍。",
    shareTitle: "今日造型：滨江限定版贵宾。",
    outfit: "丝巾、彩色发夹、镜面自拍、展览票根",
    bg: "#efd5df",
    accent: "#f05a42",
    profile: { social: 1.1, spark: 1.1, order: 0.6, warmth: 0.5, style: 2.0, energy: 0.4, independence: 0.4, mischief: 0.3 },
    art: { fur: "#efe1cd", fur2: "#e6b7a8", ears: "round", mark: "poodle", accessory: "bow", prop: "ticket" }
  },
  {
    id: "samoyed",
    breed: "萨摩耶",
    name: "云朵开朗官",
    line: "你不是甜，是有治愈能力。",
    tags: ["明亮", "治愈", "开心写脸上", "云朵能量"],
    description: "你像一只萨摩耶，笑起来像把滨江的风都晒软了。你不是没有烦恼，只是很会把生活折成一朵蓬松的云。",
    friend: "朋友会说你一笑，事情就还能再撑一下。你会让疲惫的局面突然变轻。",
    route: "午后去开阔草坪，适合拍大笑照和背影照。社交补丁：少解释近况，多分享一张好看的天空。",
    shareTitle: "今天也是一朵会散步的云。",
    outfit: "奶油围巾、湖蓝天空、阳光光斑",
    bg: "#d8edf0",
    accent: "#f4c95d",
    profile: { social: 1.8, spark: 2.0, order: -0.1, warmth: 1.8, style: 0.7, energy: 1.0, independence: -0.3, mischief: 0.5 },
    art: { fur: "#fff9e8", fur2: "#f1d8be", ears: "pointy", mark: "fluffy", accessory: "scarf", prop: "cloud" }
  },
  {
    id: "doberman",
    breed: "杜宾",
    name: "江边黑金保镖",
    line: "不制造压迫感，但自带不可乱来的边界。",
    tags: ["清醒", "效率", "边界感", "判断快"],
    description: "你像杜宾，克制、干净、非常知道什么该靠近，什么该保持距离。你不是难相处，而是对含糊和低效没有太多耐心。",
    friend: "朋友会觉得你说不的时候很直接，但关键时刻最能稳住局面。你给人的安全感来自清楚的标准。",
    route: "适合傍晚走人少的江边线，步速稳定，目的明确。社交补丁：今天可以把温柔说出口一点。",
    shareTitle: "我的小狗人格：江边黑金保镖，边界清楚，路线清楚。",
    outfit: "黑金项圈、短夹克、极简路线卡",
    bg: "#dad7d2",
    accent: "#20201d",
    profile: { social: -0.9, spark: -1.0, order: 2.0, warmth: -0.3, style: 1.3, energy: 1.1, independence: 1.5, mischief: -0.7 },
    art: { fur: "#211f1d", fur2: "#a45d34", ears: "sharp", mark: "brow", accessory: "collar", prop: "route" }
  },
  {
    id: "husky",
    breed: "哈士奇",
    name: "支线剧情导演",
    line: "计划是用来参考的，人生是用来乱逛的。",
    tags: ["即兴", "反骨", "戏剧感", "不怕偏航"],
    description: "你像哈士奇，越是普通的一天，越想给它加一点支线。你不是故意捣乱，你只是很难接受生活只剩一条正确路线。",
    friend: "朋友会觉得你有时离谱，但离谱得很有生命力。跟你出门，基本不会只发生原计划那件事。",
    route: "适合从江边一路走到没想过的小巷，再假装这就是原计划。社交补丁：今天记得给同行的人一点预告。",
    shareTitle: "来都来了，不如当一只支线剧情哈士奇。",
    outfit: "蓝色眼神、反光牵引绳、临时路线涂鸦",
    bg: "#d9e5eb",
    accent: "#3b8ea5",
    profile: { social: 0.7, spark: 1.5, order: -1.8, warmth: 0.6, style: 0.3, energy: 2.0, independence: 0.8, mischief: 2.0 },
    art: { fur: "#7c8b96", fur2: "#f5f1e8", ears: "pointy", mark: "mask", accessory: "moon", prop: "bolt" }
  },
  {
    id: "frenchie",
    breed: "法国斗牛犬",
    name: "松弛感总监",
    line: "不赶路，只负责有态度。",
    tags: ["节能", "会享受", "小众潮", "舒服优先"],
    description: "你像法斗，步伐不快，但气场很稳。你不需要证明自己很忙，坐在江边吹风这件事，在你这里也是一种生活立场。",
    friend: "朋友会觉得你很会享受，而且享受得特别有说服力。你慢下来时，大家也会跟着松一口气。",
    route: "找一段能坐下来的滨江路线，散步五分钟，休息十分钟。社交补丁：今天拒绝无效赶场，慢一点反而更有魅力。",
    shareTitle: "不赶时间的人，先赢一半。我是法斗松弛感总监。",
    outfit: "棒球帽、气泡水、懒人椅、金属项圈",
    bg: "#ddd2c8",
    accent: "#8aa66a",
    profile: { social: 0.4, spark: 0.5, order: -0.5, warmth: 0.4, style: 1.1, energy: -1.7, independence: 0.8, mischief: 0.4 },
    art: { fur: "#b99578", fur2: "#efd8c0", ears: "bat", mark: "plain", accessory: "cap", prop: "chair" }
  },
  {
    id: "beagle",
    breed: "比格",
    name: "城市小侦探",
    line: "你的好奇心，比导航更会带路。",
    tags: ["好奇", "嗅觉型探索", "热闹", "会发现"],
    description: "你像比格，灵敏、贪玩，带一点可爱的侦探气质。你会注意到别人错过的橱窗、展墙、狗狗项圈和新开的小店。",
    friend: "朋友会觉得你嘴上说随便，最后总能挖出一个好玩的去处。你不是走神，你是在收集线索。",
    route: "沿着滨江小店和展览外墙慢慢探路。社交补丁：今天适合做发现者，把好看的角落分享给朋友。",
    shareTitle: "今日侦查：滨江有新鲜事。我是比格小侦探。",
    outfit: "复古相机、路牌贴纸、三色牵引绳",
    bg: "#f1d7ae",
    accent: "#f05a42",
    profile: { social: 1.3, spark: 1.0, order: -0.6, warmth: 0.7, style: -0.2, energy: 1.5, independence: 0.2, mischief: 1.4 },
    art: { fur: "#c0783e", fur2: "#fff2d3", ears: "long", mark: "patch", accessory: "camera", prop: "sign" }
  },
  {
    id: "afghan",
    breed: "阿富汗猎犬",
    name: "滨江风感模特",
    line: "你不是高冷，是太会留白。",
    tags: ["优雅疏离", "审美强", "不费力", "自成一派"],
    description: "你像阿富汗猎犬，轻、漂亮、有一点不属于人群的留白。你不需要把情绪全摊开，距离感反而让人想靠近。",
    friend: "朋友会觉得你很有品，而且是不费力的那种。你不会为了热闹牺牲质感，也不会为了合群放弃自己的画面。",
    route: "适合傍晚江边逆风走，衣摆和耳朵都要有动态。社交补丁：今天少发文字，多发氛围。",
    shareTitle: "风经过滨江，也经过我。我是阿富汗猎犬风感模特。",
    outfit: "银灰风衣、江边栏杆、留白构图",
    bg: "#d9d9d4",
    accent: "#b8bcc2",
    profile: { social: -0.9, spark: -0.5, order: 0.2, warmth: -0.1, style: 2.0, energy: 0.2, independence: 1.8, mischief: -0.2 },
    art: { fur: "#d6b48d", fur2: "#f4dcc0", ears: "afghan", mark: "hair", accessory: "shades", prop: "wind" }
  }
];

const dogMap = Object.fromEntries(dogs.map((dog) => [dog.id, dog]));

dogs.forEach((dog) => {
  dog.image = `./assets/dogs/${dog.id}.jpg`;
});

const questions = [
  {
    type: "single",
    mode: "滨江开场",
    title: "刚到滨江，朋友还没来，你先做哪件小事？",
    help: "不要选最正确的，选最像你下意识会做的。",
    options: [
      {
        label: "先看路线和排队情况，判断哪里最顺",
        note: "心里先铺一张小地图",
        traits: { order: 1.4, independence: 0.4 },
        boosts: { borderCollie: 1.5, doberman: 1.0, kuroShiba: 0.6 }
      },
      {
        label: "找江边光最好看的位置，先拍一张空镜",
        note: "人还没到，画面已经到了",
        traits: { style: 1.5, independence: 0.6, spark: -0.2 },
        boosts: { afghan: 1.5, shiroShiba: 1.0, poodle: 0.8 }
      },
      {
        label: "顺手买两杯冰美式，等人来直接递过去",
        note: "不说太多，但照顾得很具体",
        traits: { warmth: 1.5, social: 0.9, order: 0.2 },
        boosts: { labrador: 1.3, golden: 1.3, samoyed: 0.7 }
      },
      {
        label: "被一只路过小狗带偏，跟着走到另一边",
        note: "计划之外才有支线剧情",
        traits: { energy: 1.2, mischief: 1.5, order: -1.0 },
        boosts: { husky: 1.5, beagle: 1.2, corgi: 0.9 }
      },
      {
        label: "找个舒服座位，消息回完再加入世界",
        note: "先把电量调到可出门模式",
        traits: { energy: -1.3, social: -0.7, warmth: 0.2 },
        boosts: { frenchie: 1.4, shiroShiba: 0.8, golden: 0.5 }
      }
    ]
  },
  {
    type: "single",
    mode: "今日穿搭",
    title: "今天只按直觉穿一套出门，你会选？",
    help: "不是问你衣柜里有没有，是问你想成为哪种画面。",
    options: [
      {
        label: "白色、浅灰、线条简单，越清爽越好",
        note: "低噪音，但很有存在感",
        traits: { style: 1.1, order: 0.5, independence: 0.6, spark: -0.4 },
        boosts: { shiroShiba: 1.7, samoyed: 0.8, afghan: 0.6 }
      },
      {
        label: "黑色、深色、有一点锋利感",
        note: "路过也像在拍片",
        traits: { style: 1.3, independence: 1.1, warmth: -0.3 },
        boosts: { kuroShiba: 1.7, doberman: 1.2, afghan: 0.7 }
      },
      {
        label: "亮色卫衣或有趣图案，看起来心情很好",
        note: "穿搭自带开场白",
        traits: { spark: 1.5, social: 0.9, mischief: 0.6 },
        boosts: { corgi: 1.4, samoyed: 1.1, beagle: 0.7 }
      },
      {
        label: "舒服最重要，宽松、柔软、好走路",
        note: "可以时髦，但不可以受罪",
        traits: { energy: -1.0, warmth: 0.4, style: -0.3 },
        boosts: { frenchie: 1.4, labrador: 0.9, golden: 0.8 }
      },
      {
        label: "有配饰、有层次，最好让朋友问链接",
        note: "今天也要有一点小心机",
        traits: { style: 1.8, social: 0.6, spark: 0.6 },
        boosts: { poodle: 1.6, afghan: 1.0, shiroShiba: 0.5 }
      }
    ]
  },
  {
    type: "scale",
    mode: "临时转场",
    title: "临时转场这件事在我这里不是事故，更像城市支线剧情。",
    help: "从最不像到最像，按真实反应滑一下。",
    left: "完全不想",
    right: "很想跟上",
    traits: { energy: 1.0, mischief: 1.1, order: -0.9, spark: 0.6 },
    highBoosts: { husky: 1.2, beagle: 0.9, corgi: 0.8 },
    lowBoosts: { doberman: 1.0, borderCollie: 0.8, shiroShiba: 0.6, frenchie: 0.5 }
  },
  {
    type: "multi",
    mode: "群聊沉默",
    title: "群聊突然安静下来，你最可能丢哪两种东西？",
    help: "最多选两个。这个题没有标准答案，只有社交肌肉的用法。",
    max: 2,
    options: [
      {
        label: "一个准确到没朋友的集合时间",
        note: "先把现实问题解决",
        traits: { order: 1.3, spark: -0.2 },
        boosts: { borderCollie: 1.2, doberman: 0.9, labrador: 0.5 }
      },
      {
        label: "一张离谱但刚好好笑的表情包",
        note: "不解释，发出去再说",
        traits: { spark: 1.2, mischief: 1.0, social: 0.6 },
        boosts: { corgi: 1.2, husky: 1.0, beagle: 0.6 }
      },
      {
        label: "一句“有人想喝什么，我顺路带”",
        note: "把关心放进动作里",
        traits: { warmth: 1.4, social: 0.8 },
        boosts: { golden: 1.2, labrador: 1.0, samoyed: 0.7 }
      },
      {
        label: "先潜水观察，必要时再出声",
        note: "没有必要每个空白都填满",
        traits: { independence: 1.2, social: -0.8, spark: -0.6 },
        boosts: { akaShiba: 1.1, kuroShiba: 0.9, shiroShiba: 0.8 }
      },
      {
        label: "一段刚拍的光影小视频",
        note: "用氛围把话题救回来",
        traits: { style: 1.4, spark: 0.4 },
        boosts: { poodle: 1.0, afghan: 1.0, shiroShiba: 0.5 }
      }
    ]
  },
  {
    type: "single",
    mode: "陌生小店",
    title: "进一家没去过的小店，你最先注意到的是？",
    help: "这题测的是你的入口，不是消费习惯。",
    options: [
      {
        label: "出口、动线、菜单和排队速度",
        note: "一眼判断系统能不能跑",
        traits: { order: 1.5, independence: 0.4 },
        boosts: { borderCollie: 1.4, doberman: 1.0, akaShiba: 0.5 }
      },
      {
        label: "店员和熟客之间的互动",
        note: "先读现场温度",
        traits: { social: 1.2, warmth: 1.1 },
        boosts: { labrador: 1.2, golden: 1.0, samoyed: 0.8 }
      },
      {
        label: "杯子、灯光、音乐是不是顺眼",
        note: "不对味就很难放松",
        traits: { style: 1.7, independence: 0.3 },
        boosts: { poodle: 1.3, afghan: 1.3, shiroShiba: 0.8 }
      },
      {
        label: "有没有奇怪新品或隐藏菜单",
        note: "来都来了，得闻闻线索",
        traits: { mischief: 1.2, energy: 0.8, order: -0.5 },
        boosts: { beagle: 1.4, husky: 1.0, corgi: 0.8 }
      },
      {
        label: "靠窗、不被打扰、能坐久的位置",
        note: "舒服的边界很重要",
        traits: { energy: -1.0, social: -0.5, independence: 0.8 },
        boosts: { frenchie: 1.2, shiroShiba: 0.9, akaShiba: 0.6 }
      }
    ]
  },
  {
    type: "scale",
    mode: "记忆碎片",
    title: "我很容易记住别人随口提过的小偏好。",
    help: "比如少冰、靠窗、怕冷、哪种玩笑不能开。",
    left: "没这回事",
    right: "确实会记",
    traits: { warmth: 1.3, social: 0.5, order: 0.2 },
    highBoosts: { golden: 1.2, labrador: 0.9, samoyed: 0.7 },
    lowBoosts: { kuroShiba: 0.8, afghan: 0.8, doberman: 0.6 }
  },
  {
    type: "single",
    mode: "雨天路线",
    title: "走到一半突然下雨，你更像哪个反应？",
    help: "滨江的雨不一定扫兴，也可能只是换一张滤镜。",
    options: [
      {
        label: "快速找雨棚和新路线，别把全队淋散",
        note: "先稳定场面",
        traits: { order: 1.5, warmth: 0.3, energy: 0.2 },
        boosts: { borderCollie: 1.3, doberman: 1.0, labrador: 0.7 }
      },
      {
        label: "把外套借给最冷的人，自己再想办法",
        note: "先接住别人",
        traits: { warmth: 1.6, social: 0.4 },
        boosts: { golden: 1.4, labrador: 1.0, samoyed: 0.6 }
      },
      {
        label: "觉得湿掉也可以拍出新图",
        note: "天气也是造型的一部分",
        traits: { style: 1.5, spark: 0.5, energy: 0.3 },
        boosts: { afghan: 1.2, poodle: 1.0, shiroShiba: 0.6 }
      },
      {
        label: "找家店坐着，不赶路，雨停再说",
        note: "松弛感是有纪律的",
        traits: { energy: -1.3, order: -0.3, style: 0.4 },
        boosts: { frenchie: 1.5, golden: 0.6, shiroShiba: 0.5 }
      },
      {
        label: "起哄说这是雨天限定支线",
        note: "越临时越来劲",
        traits: { energy: 1.2, mischief: 1.4, spark: 1.0, order: -0.8 },
        boosts: { husky: 1.4, corgi: 1.0, beagle: 0.9 }
      }
    ]
  },
  {
    type: "matrix",
    mode: "周末片段",
    title: "下面这些周末片段，让你有多想点头？",
    help: "每条都可以单独打分。越右边越像你。",
    left: "还好",
    right: "很可以",
    items: [
      {
        id: "checklist",
        label: "早起、咖啡、清单，把该做的事漂亮收尾",
        traits: { order: 1.2, energy: 0.4 },
        highBoosts: { borderCollie: 1.0, doberman: 0.8, labrador: 0.5 },
        lowBoosts: { husky: 0.5, frenchie: 0.5 }
      },
      {
        id: "wander",
        label: "天气好就随机出门，看到哪里顺眼就往哪里走",
        traits: { energy: 1.0, mischief: 0.9, order: -0.5 },
        highBoosts: { beagle: 1.0, husky: 0.9, corgi: 0.6 },
        lowBoosts: { doberman: 0.4 }
      },
      {
        id: "gallery",
        label: "安静看展、拍一点光影，不急着解释给别人听",
        traits: { style: 1.2, independence: 0.8, social: -0.4 },
        highBoosts: { afghan: 1.0, shiroShiba: 0.9, akaShiba: 0.5 },
        lowBoosts: { labrador: 0.3 }
      },
      {
        id: "dinner",
        label: "热闹饭局，把陌生人也慢慢带熟",
        traits: { social: 1.2, warmth: 0.9, spark: 0.5 },
        highBoosts: { labrador: 1.0, samoyed: 0.9, poodle: 0.7 },
        lowBoosts: { kuroShiba: 0.5, afghan: 0.4 }
      }
    ]
  },
  {
    type: "scale",
    mode: "边界按钮",
    title: "我可以很配合，但前提是不要把我的边界踩得太自然。",
    help: "这不是冷漠，是牵引绳长度管理。",
    left: "不太在意",
    right: "非常在意",
    traits: { independence: 1.3, order: 0.5, warmth: -0.4 },
    highBoosts: { akaShiba: 1.0, kuroShiba: 1.0, doberman: 0.9, afghan: 0.8 },
    lowBoosts: { labrador: 0.8, golden: 0.7, samoyed: 0.5 }
  },
  {
    type: "single",
    mode: "默认按钮",
    title: "今晚出门，你心里最像哪句默认按钮？",
    help: "最后一题，凭直觉收束。",
    options: [
      {
        label: "先看看情况。",
        note: "不急着表态，但一直在读现场",
        traits: { independence: 0.9, spark: -0.4, order: 0.3 },
        boosts: { akaShiba: 1.2, shiroShiba: 0.8, golden: 0.4 }
      },
      {
        label: "来都来了。",
        note: "不一定知道去哪，但可以开始",
        traits: { mischief: 1.3, energy: 1.0, order: -0.8 },
        boosts: { husky: 1.3, beagle: 1.0, corgi: 0.8 }
      },
      {
        label: "这事最好有个流程。",
        note: "把模糊变清楚，世界会舒服很多",
        traits: { order: 1.6, energy: 0.3 },
        boosts: { borderCollie: 1.3, doberman: 1.1, labrador: 0.5 }
      },
      {
        label: "舒服一点最重要。",
        note: "不是摆烂，是不跟自己较劲",
        traits: { energy: -1.3, warmth: 0.4, style: 0.1 },
        boosts: { frenchie: 1.4, golden: 0.8, labrador: 0.5 }
      },
      {
        label: "可以普通，但不能没品。",
        note: "质感是底线，不是加分项",
        traits: { style: 1.7, independence: 0.8 },
        boosts: { afghan: 1.3, poodle: 1.1, shiroShiba: 0.8 }
      },
      {
        label: "我可以把大家带起来。",
        note: "场子冷了，我来加一点风",
        traits: { social: 1.3, spark: 1.3, warmth: 0.7 },
        boosts: { samoyed: 1.2, corgi: 1.0, labrador: 0.9, poodle: 0.7 }
      }
    ]
  }
];

let currentIndex = 0;
let answers = Array(questions.length).fill(null);
let currentOutcome = null;

const screens = {
  intro: document.querySelector('[data-screen="intro"]'),
  quiz: document.querySelector('[data-screen="quiz"]'),
  reveal: document.querySelector('[data-screen="reveal"]'),
  result: document.querySelector('[data-screen="result"]')
};

const els = {
  start: document.querySelector("[data-start]"),
  back: document.querySelector("[data-back]"),
  next: document.querySelector("[data-next]"),
  step: document.querySelector("[data-step]"),
  mode: document.querySelector("[data-mode]"),
  progress: document.querySelector("[data-progress]"),
  kicker: document.querySelector("[data-question-kicker]"),
  title: document.querySelector("[data-question-title]"),
  help: document.querySelector("[data-question-help]"),
  options: document.querySelector("[data-options]"),
  revealTitle: document.querySelector("[data-reveal-title]"),
  resultArt: document.querySelector("[data-result-art]"),
  resultName: document.querySelector("[data-result-name]"),
  resultLine: document.querySelector("[data-result-line]"),
  resultTags: document.querySelector("[data-result-tags]"),
  resultDescription: document.querySelector("[data-result-description]"),
  resultFriend: document.querySelector("[data-result-friend]"),
  resultRoute: document.querySelector("[data-result-route]"),
  resultShareTitle: document.querySelector("[data-result-share-title]"),
  traits: document.querySelector("[data-traits]"),
  matchScore: document.querySelector("[data-match-score]"),
  save: document.querySelector("[data-save]"),
  share: document.querySelector("[data-share]"),
  restart: document.querySelector("[data-restart]"),
  galleryToggle: document.querySelector("[data-gallery-toggle]"),
  gallery: document.querySelector("[data-gallery]"),
  canvas: document.querySelector("[data-canvas]")
};

function setScreen(name) {
  Object.entries(screens).forEach(([screenName, node]) => {
    node.classList.toggle("is-active", screenName === name);
  });
  window.scrollTo({ top: 0, behavior: "instant" });
}

function formatStep(index) {
  return `${String(index + 1).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}`;
}

function startQuiz() {
  currentIndex = 0;
  renderQuestion();
  setScreen("quiz");
}

function renderQuestion() {
  const question = questions[currentIndex];
  els.step.textContent = formatStep(currentIndex);
  els.mode.textContent = question.mode;
  els.progress.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
  els.kicker.textContent = `Question ${String(currentIndex + 1).padStart(2, "0")}`;
  els.title.textContent = question.title;
  els.help.textContent = question.help || "";
  els.options.innerHTML = "";
  els.next.hidden = false;
  els.next.disabled = !hasAnswer(currentIndex);

  if (question.type === "single") {
    renderSingle(question);
  } else if (question.type === "multi") {
    renderMulti(question);
  } else if (question.type === "scale") {
    renderScale(question);
  } else if (question.type === "matrix") {
    renderMatrix(question);
  }
}

function renderSingle(question) {
  const stored = answers[currentIndex]?.value;
  els.next.disabled = stored === undefined;
  question.options.forEach((option, optionIndex) => {
    const button = optionButton(option, optionIndex, stored === optionIndex);
    button.addEventListener("click", () => {
      answers[currentIndex] = { type: "single", value: optionIndex };
      els.options.querySelectorAll(".option-button").forEach((node) => node.classList.remove("is-selected"));
      button.classList.add("is-selected");
      els.next.disabled = false;
    });
    els.options.appendChild(button);
  });
}

function renderMulti(question) {
  const selected = new Set(answers[currentIndex]?.values || []);
  els.next.disabled = selected.size === 0;

  question.options.forEach((option, optionIndex) => {
    const button = optionButton(option, optionIndex, selected.has(optionIndex), "multi-button");
    button.addEventListener("click", () => {
      if (selected.has(optionIndex)) {
        selected.delete(optionIndex);
      } else if (selected.size < question.max) {
        selected.add(optionIndex);
      }
      answers[currentIndex] = { type: "multi", values: [...selected] };
      renderQuestion();
    });
    els.options.appendChild(button);
  });
}

function renderScale(question) {
  const stored = answers[currentIndex]?.value ?? 2;
  answers[currentIndex] = { type: "scale", value: stored };
  els.next.disabled = false;
  const wrap = document.createElement("div");
  wrap.className = "scale-wrap";
  wrap.innerHTML = `
    <div class="scale-labels"><span>${question.left}</span><span>${question.right}</span></div>
    <input class="range-line" type="range" min="0" max="4" step="1" value="${stored}" aria-label="选择程度">
  `;
  const input = wrap.querySelector("input");
  input.addEventListener("input", () => {
    const nextValue = Number(input.value);
    answers[currentIndex] = { type: "scale", value: nextValue };
  });
  els.options.appendChild(wrap);
}

function renderMatrix(question) {
  const stored = answers[currentIndex]?.values || {};
  const values = {};
  question.items.forEach((item) => {
    values[item.id] = stored[item.id] ?? 2;
  });
  answers[currentIndex] = { type: "matrix", values };
  els.next.disabled = false;

  const wrap = document.createElement("div");
  wrap.className = "matrix-wrap";
  question.items.forEach((item) => {
    const row = document.createElement("div");
    row.className = "matrix-item";
    row.innerHTML = `
      <p class="matrix-title">${item.label}</p>
      <div class="scale-labels"><span>${question.left}</span><span>${question.right}</span></div>
      <input class="range-line" type="range" min="0" max="4" step="1" value="${values[item.id]}" aria-label="${item.label}">
    `;
    const input = row.querySelector("input");
    input.addEventListener("input", () => {
      values[item.id] = Number(input.value);
      answers[currentIndex] = { type: "matrix", values: { ...values } };
    });
    wrap.appendChild(row);
  });
  els.options.appendChild(wrap);
}

function optionButton(option, optionIndex, selected, className = "option-button") {
  const button = document.createElement("button");
  button.className = `${className}${selected ? " is-selected" : ""}`;
  button.type = "button";
  button.innerHTML = `
    <span class="option-mark">${String.fromCharCode(65 + optionIndex)}</span>
    <span class="option-text">
      <strong>${option.label}</strong>
      <span>${option.note}</span>
    </span>
    <span class="option-tick" aria-hidden="true"></span>
  `;
  return button;
}

function goNext() {
  if (!hasAnswer(currentIndex)) return;
  if (currentIndex < questions.length - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    revealResult();
  }
}

function hasAnswer(index) {
  const answer = answers[index];
  if (!answer) return false;
  if (answer.type === "single") return Number.isInteger(answer.value);
  if (answer.type === "multi") return Array.isArray(answer.values) && answer.values.length > 0;
  if (answer.type === "scale") return Number.isInteger(answer.value);
  if (answer.type === "matrix") return answer.values && Object.keys(answer.values).length > 0;
  return false;
}

function goBack() {
  if (currentIndex === 0) {
    setScreen("intro");
    return;
  }
  currentIndex -= 1;
  renderQuestion();
}

function revealResult() {
  currentOutcome = calculateOutcome();
  const dog = dogMap[currentOutcome.id];
  els.revealTitle.textContent = dog.breed;
  setScreen("reveal");
  setTimeout(() => showResult(currentOutcome), 900);
}

function calculateOutcome() {
  const traitScores = Object.fromEntries(traitKeys.map((key) => [key, 0]));
  const breedScores = Object.fromEntries(dogs.map((dog) => [dog.id, 0]));

  answers.forEach((answer, questionIndex) => {
    if (!answer) return;
    const question = questions[questionIndex];
    if (question.type === "single") {
      applyOption(question.options[answer.value], traitScores, breedScores);
    }
    if (question.type === "multi") {
      answer.values.forEach((optionIndex) => applyOption(question.options[optionIndex], traitScores, breedScores, 0.92));
    }
    if (question.type === "scale") {
      applyScaled(question, answer.value - 2, traitScores, breedScores);
    }
    if (question.type === "matrix") {
      question.items.forEach((item) => {
        applyScaled(item, (answer.values[item.id] ?? 2) - 2, traitScores, breedScores, 0.86);
      });
    }
  });

  const userProfile = Object.fromEntries(
    traitKeys.map((key) => [key, clamp(traitScores[key] / 3.8, -2, 2)])
  );

  const scored = dogs.map((dog) => {
    let profileScore = breedScores[dog.id] || 0;
    traitKeys.forEach((key) => {
      profileScore += userProfile[key] * dog.profile[key] * 0.92;
    });
    return { id: dog.id, score: profileScore };
  }).sort((a, b) => b.score - a.score);

  const top = scored[0];
  const second = scored[1];
  const gap = Math.max(0, top.score - second.score);
  const match = Math.round(clamp(78 + gap * 4.2 + Math.max(0, top.score) * 1.1, 82, 98));
  return { id: top.id, match, profile: userProfile, allScores: scored };
}

function applyOption(option, traitScores, breedScores, factor = 1) {
  if (!option) return;
  addTraits(traitScores, option.traits, factor);
  addBoosts(breedScores, option.boosts, factor);
}

function applyScaled(source, normalized, traitScores, breedScores, factor = 1) {
  addTraits(traitScores, source.traits, normalized * factor);
  if (normalized > 0) addBoosts(breedScores, source.highBoosts, normalized * factor);
  if (normalized < 0) addBoosts(breedScores, source.lowBoosts, Math.abs(normalized) * factor);
}

function addTraits(target, traits = {}, factor = 1) {
  Object.entries(traits).forEach(([key, value]) => {
    target[key] += value * factor;
  });
}

function addBoosts(target, boosts = {}, factor = 1) {
  Object.entries(boosts).forEach(([key, value]) => {
    target[key] += value * factor;
  });
}

function showResult(outcome) {
  const dog = dogMap[outcome.id];
  els.resultArt.innerHTML = resultImageMarkup(dog);
  els.resultArt.style.setProperty("--result-bg", dog.bg);
  els.resultName.textContent = `${dog.breed}｜${dog.name}`;
  els.resultLine.textContent = dog.line;
  els.resultTags.innerHTML = dog.tags.map((tag) => `<span>${tag}</span>`).join("");
  els.resultDescription.textContent = dog.description;
  els.resultFriend.textContent = dog.friend;
  els.resultRoute.textContent = dog.route;
  els.resultShareTitle.textContent = dog.shareTitle;
  els.matchScore.textContent = `匹配度 ${outcome.match}%`;
  renderSignalCards(outcome);
  setScreen("result");
}

function renderSignalCards(outcome) {
  const dog = dogMap[outcome.id];
  const profile = outcome.profile;
  const cards = [
    {
      title: "出门方式",
      body: outingCopy(profile, dog)
    },
    {
      title: "社交开关",
      body: socialCopy(profile, dog)
    },
    {
      title: "审美偏好",
      body: styleCopy(profile, dog)
    },
    {
      title: "相处提示",
      body: careCopy(profile, dog)
    }
  ];

  els.traits.innerHTML = `
    <p class="signal-intro">不是性格诊断，是这次答案里最明显的四个小习惯。</p>
    <div class="signal-grid">
      ${cards.map((card) => `
        <article class="signal-card">
          <strong>${card.title}</strong>
          <p>${card.body}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function outingCopy(profile, dog) {
  if (profile.mischief > 0.9) return "你很容易被临时路线、小店和奇怪角落吸走。跟你出门，原计划通常只是开场白。";
  if (profile.order > 0.9) return "你会先把路线、时间和风险放进脑子里。不是扫兴，是想让大家玩得更顺。";
  if (profile.energy < -0.8) return "你不爱无效赶场，更适合慢慢走、坐一下、把舒服感留住。";
  if (profile.style > 1) return "你会先找画面好看的那条路。散步对你来说，也要有光线和构图。";
  return `你的节奏接近${dog.breed}：能配合，也会保留一点自己的小路线。`;
}

function socialCopy(profile) {
  if (profile.social > 1) return "你是会主动把场子带热的人。冷场时，你通常愿意先递出一个话题。";
  if (profile.social < -0.8) return "你更像慢热观察型。熟起来以后很稳定，但不喜欢一上来就被迫营业。";
  if (profile.spark > 1) return "你不一定一直外放，但很会在关键时刻丢出一个让大家笑出来的瞬间。";
  return "你看现场气氛决定要不要靠近。舒服的人和舒服的局，你会自然多说几句。";
}

function styleCopy(profile) {
  if (profile.style > 1.1) return "你很吃氛围和质感。杯子、灯光、衣服、照片背景，不对味就很难完全放松。";
  if (profile.independence > 1.1) return "你不太跟风，喜欢自己判断什么适合。别人夸不夸，不是最重要的事。";
  if (profile.energy < -0.8) return "你偏向舒服耐看的选择。好看可以，但不能让自己受罪。";
  return "你的审美不端着，重点是自然、顺眼、能让当下更轻松。";
}

function careCopy(profile) {
  if (profile.warmth > 1) return "你会把关心放进具体动作里：顺路带东西、记住偏好、照顾掉队的人。";
  if (profile.independence > 1) return "你需要清楚边界。你可以配合，但不喜欢别人把你的让步当默认。";
  if (profile.order > 1) return "你最怕含糊拖拉。把话说清楚、把安排讲明白，你会立刻好相处很多。";
  if (profile.mischief > 1) return "你适合和能接住你即兴感的人一起玩。提前说一声，会让同行的人更安心。";
  return "你喜欢轻松、自然、不太用力的相处方式。别太审问你，边走边聊最好。";
}

function renderGallery() {
  els.gallery.innerHTML = dogs.map((dog) => `
    <div class="gallery-item">
      <img src="${dog.image}" alt="${dog.breed}" loading="lazy">
      <strong>${dog.breed}｜${dog.name}</strong>
      <span>${dog.line}</span>
    </div>
  `).join("");
}

function resultImageMarkup(dog) {
  return `
    <img class="result-dog-image" src="${dog.image}" alt="${dog.breed}｜${dog.name}">
    <div class="result-image-chip">${dog.breed}</div>
  `;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function dogSvg(dog, size = "large") {
  const art = dog.art;
  const compact = size === "small";
  const bodyScale = dog.id === "corgi" ? 1.18 : dog.id === "afghan" ? 0.92 : 1;
  const legY = dog.id === "corgi" ? 318 : 304;
  const bodyY = dog.id === "corgi" ? 238 : 218;
  const bodyH = dog.id === "corgi" ? 76 : 108;
  const headY = dog.id === "frenchie" ? 126 : 116;
  const faceExtra = faceMark(art, dog);

  return `
    <svg viewBox="0 0 520 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${dog.breed} illustration">
      <defs>
        <linearGradient id="river-${dog.id}" x1="0" x2="1">
          <stop offset="0" stop-color="#bcd9de"/>
          <stop offset="1" stop-color="#8fc3c9"/>
        </linearGradient>
        <filter id="shadow-${dog.id}" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#20201d" flood-opacity=".18"/>
        </filter>
      </defs>
      <rect width="520" height="420" rx="${compact ? 0 : 26}" fill="${dog.bg}"/>
      <path d="M0 116c80 24 150 18 246-4s180-12 274 22v94H0Z" fill="url(#river-${dog.id})" opacity=".72"/>
      <path d="M0 206c124 26 224 28 328 4s150-12 192 8v202H0Z" fill="#f6f3ec"/>
      <g opacity=".5" fill="none" stroke="#20201d" stroke-linecap="round">
        <path d="M44 284c102-22 208-24 318 0s134 18 156 4" stroke-width="3"/>
        <path d="M34 344c126-20 222-18 334 4s126 10 142-6" stroke-width="2"/>
      </g>
      <g transform="translate(0 ${compact ? 18 : 0})" filter="url(#shadow-${dog.id})">
        <ellipse cx="260" cy="356" rx="150" ry="36" fill="#c7c5b8"/>
        <g transform="translate(260 0) scale(${bodyScale} 1) translate(-260 0)">
          <rect x="148" y="${bodyY}" width="224" height="${bodyH}" rx="${bodyH / 2}" fill="${art.fur}"/>
          <ellipse cx="218" cy="${bodyY + bodyH * 0.5}" rx="58" ry="${bodyH * 0.46}" fill="${art.fur2}" opacity="${art.mark === "plain" ? 0.34 : 0.9}"/>
          <path d="M358 ${bodyY + 42}c56-34 88-8 76 28-12 34-64 28-74 2" fill="none" stroke="${art.fur}" stroke-width="24" stroke-linecap="round"/>
          <path d="M176 ${legY}h34M310 ${legY}h34" stroke="#20201d" stroke-width="15" stroke-linecap="round"/>
        </g>
        ${earSvg(art, headY)}
        <circle cx="260" cy="${headY + 74}" r="${dog.id === "frenchie" ? 76 : 72}" fill="${art.fur}"/>
        ${faceExtra}
        <ellipse cx="260" cy="${headY + 96}" rx="46" ry="31" fill="${art.fur2}" opacity=".96"/>
        <circle cx="234" cy="${headY + 64}" r="9" fill="#20201d"/>
        <circle cx="286" cy="${headY + 64}" r="9" fill="#20201d"/>
        <path d="M242 ${headY + 108}c15 13 36 13 51 0" fill="none" stroke="#20201d" stroke-width="8" stroke-linecap="round"/>
        ${accessorySvg(art, dog)}
      </g>
      ${propSvg(art, dog)}
      <g transform="translate(28 34)">
        <rect width="184" height="42" rx="21" fill="#20201d" opacity=".92"/>
        <text x="20" y="27" fill="#f6f3ec" font-family="-apple-system,BlinkMacSystemFont,'PingFang SC',sans-serif" font-size="17" font-weight="800">${dog.breed}</text>
      </g>
    </svg>
  `;
}

function earSvg(art, headY) {
  if (art.ears === "floppy") {
    return `<ellipse cx="190" cy="${headY + 82}" rx="30" ry="62" fill="${art.fur}" transform="rotate(18 190 ${headY + 82})"/><ellipse cx="330" cy="${headY + 82}" rx="30" ry="62" fill="${art.fur}" transform="rotate(-18 330 ${headY + 82})"/>`;
  }
  if (art.ears === "long") {
    return `<ellipse cx="190" cy="${headY + 95}" rx="34" ry="82" fill="#7a4b2f" transform="rotate(12 190 ${headY + 95})"/><ellipse cx="330" cy="${headY + 95}" rx="34" ry="82" fill="#7a4b2f" transform="rotate(-12 330 ${headY + 95})"/>`;
  }
  if (art.ears === "bat") {
    return `<path d="M198 ${headY + 34} 154 ${headY - 46} 238 ${headY + 28}Z" fill="${art.fur}"/><path d="M322 ${headY + 34} 366 ${headY - 46} 282 ${headY + 28}Z" fill="${art.fur}"/>`;
  }
  if (art.ears === "round") {
    return `<circle cx="196" cy="${headY + 26}" r="38" fill="${art.fur}"/><circle cx="324" cy="${headY + 26}" r="38" fill="${art.fur}"/>`;
  }
  if (art.ears === "semi") {
    return `<path d="M204 ${headY + 36} 176 ${headY - 38} 244 ${headY + 12}Z" fill="${art.fur}"/><path d="M316 ${headY + 36} 344 ${headY - 38} 276 ${headY + 12}Z" fill="${art.fur2}"/>`;
  }
  if (art.ears === "sharp") {
    return `<path d="M204 ${headY + 30} 190 ${headY - 58} 244 ${headY + 22}Z" fill="${art.fur}"/><path d="M316 ${headY + 30} 330 ${headY - 58} 276 ${headY + 22}Z" fill="${art.fur}"/>`;
  }
  if (art.ears === "afghan") {
    return `<path d="M190 ${headY + 24}c-44 40-50 132-10 174 26-54 46-110 40-174Z" fill="${art.fur2}"/><path d="M330 ${headY + 24}c44 40 50 132 10 174-26-54-46-110-40-174Z" fill="${art.fur2}"/>`;
  }
  return `<path d="M206 ${headY + 36} 172 ${headY - 40} 246 ${headY + 16}Z" fill="${art.fur}"/><path d="M314 ${headY + 36} 348 ${headY - 40} 274 ${headY + 16}Z" fill="${art.fur}"/>`;
}

function faceMark(art, dog) {
  if (art.mark === "mask") {
    return `<path d="M204 176c30-44 82-48 114 0-28-18-86-18-114 0Z" fill="${art.fur2}" opacity=".95"/>`;
  }
  if (art.mark === "brow") {
    return `<ellipse cx="232" cy="178" rx="18" ry="9" fill="${art.fur2}"/><ellipse cx="288" cy="178" rx="18" ry="9" fill="${art.fur2}"/>`;
  }
  if (art.mark === "poodle" || art.mark === "fluffy") {
    return `
      <circle cx="214" cy="148" r="24" fill="${art.fur}"/>
      <circle cx="246" cy="126" r="26" fill="${art.fur}"/>
      <circle cx="282" cy="126" r="26" fill="${art.fur}"/>
      <circle cx="314" cy="148" r="24" fill="${art.fur}"/>
    `;
  }
  if (art.mark === "hair") {
    return `<path d="M222 118c36-40 92-16 90 48-30-20-58-24-92-8 22-24 10-32 2-40Z" fill="${art.fur2}" opacity=".9"/>`;
  }
  if (art.mark === "corgi") {
    return `<path d="M218 162c24-28 60-28 84 0-16 10-68 10-84 0Z" fill="${art.fur2}" opacity=".95"/>`;
  }
  if (art.mark === "patch") {
    return `<path d="M196 160c22-36 64-38 84-2-28-8-52-6-84 2Z" fill="#5f3a26" opacity=".7"/>`;
  }
  if (art.mark === "shiba") {
    return `<path d="M214 166c24-20 70-20 94 0-20 16-74 16-94 0Z" fill="${art.fur2}" opacity=".9"/>`;
  }
  return "";
}

function accessorySvg(art, dog) {
  const y = dog.id === "frenchie" ? 184 : 174;
  if (art.accessory === "shades") {
    return `<path d="M214 ${y}h38v20h-38Zm54 0h38v20h-38Zm-16 8h16" fill="#20201d"/><path d="M202 ${y - 2}c20-10 96-10 116 0" fill="none" stroke="#20201d" stroke-width="6" stroke-linecap="round"/>`;
  }
  if (art.accessory === "headphones") {
    return `<path d="M198 ${y - 24}c12-52 112-52 124 0" fill="none" stroke="#b8bcc2" stroke-width="10" stroke-linecap="round"/><rect x="178" y="${y - 16}" width="26" height="52" rx="12" fill="#b8bcc2"/><rect x="316" y="${y - 16}" width="26" height="52" rx="12" fill="#b8bcc2"/>`;
  }
  if (art.accessory === "cap") {
    return `<path d="M202 ${y - 64}c34-30 86-30 120 0v20H202Z" fill="${dog.accent}"/><path d="M306 ${y - 48}h62c-12 22-42 30-68 20Z" fill="${dog.accent}"/>`;
  }
  if (art.accessory === "bow") {
    return `<path d="M226 ${y + 78} 180 ${y + 54} 180 ${y + 102}Z" fill="${dog.accent}"/><path d="M294 ${y + 78} 340 ${y + 54} 340 ${y + 102}Z" fill="${dog.accent}"/><circle cx="260" cy="${y + 78}" r="15" fill="#20201d"/>`;
  }
  if (art.accessory === "scarf") {
    return `<path d="M190 ${y + 78}c44 24 96 24 140 0" fill="none" stroke="${dog.accent}" stroke-width="16" stroke-linecap="round"/><path d="M302 ${y + 84}l36 44" stroke="${dog.accent}" stroke-width="15" stroke-linecap="round"/>`;
  }
  if (art.accessory === "map") {
    return `<rect x="180" y="${y + 92}" width="68" height="48" rx="6" fill="#fffaf0" stroke="#20201d" stroke-width="4"/><path d="M194 ${y + 108}h38M194 ${y + 124}h26" stroke="#3b8ea5" stroke-width="4" stroke-linecap="round"/>`;
  }
  if (art.accessory === "collar") {
    return `<path d="M194 ${y + 78}c42 22 90 22 132 0" fill="none" stroke="#d6a84a" stroke-width="14" stroke-linecap="round"/><circle cx="260" cy="${y + 88}" r="9" fill="#d6a84a"/>`;
  }
  if (art.accessory === "camera") {
    return `<rect x="218" y="${y + 92}" width="84" height="54" rx="10" fill="#20201d"/><circle cx="260" cy="${y + 119}" r="17" fill="#b8bcc2"/><rect x="232" y="${y + 78}" width="42" height="18" rx="6" fill="#20201d"/>`;
  }
  if (art.accessory === "ball") {
    return `<circle cx="346" cy="${y + 142}" r="22" fill="#f4c95d"/><path d="M332 ${y + 130}c12 12 20 26 22 40" fill="none" stroke="#fffaf0" stroke-width="4"/>`;
  }
  if (art.accessory === "moon") {
    return `<path d="M342 ${y - 42}a26 26 0 1 0 20 42 30 30 0 1 1-20-42Z" fill="#fffaf0" opacity=".9"/>`;
  }
  return `<path d="M194 ${y + 78}c42 22 90 22 132 0" fill="none" stroke="${dog.accent}" stroke-width="12" stroke-linecap="round"/>`;
}

function propSvg(art, dog) {
  const base = `fill="${dog.accent}" opacity=".95"`;
  if (art.prop === "coffee") {
    return `<g transform="translate(394 270)"><rect width="52" height="70" rx="10" ${base}/><path d="M10 16h32" stroke="#fffaf0" stroke-width="5" stroke-linecap="round"/><path d="M42 24h12c16 0 16 26 0 26H42" fill="none" stroke="#20201d" stroke-width="5"/></g>`;
  }
  if (art.prop === "skate") {
    return `<g transform="translate(340 338)"><rect width="116" height="18" rx="9" ${base}/><circle cx="28" cy="28" r="10" fill="#20201d"/><circle cx="88" cy="28" r="10" fill="#20201d"/></g>`;
  }
  if (art.prop === "cloud") {
    return `<g transform="translate(372 70)" fill="#fffaf0" opacity=".82"><circle cx="28" cy="36" r="24"/><circle cx="58" cy="26" r="28"/><circle cx="90" cy="38" r="22"/><rect x="24" y="36" width="72" height="22" rx="11"/></g>`;
  }
  if (art.prop === "route") {
    return `<g transform="translate(56 270)" fill="none" stroke="#20201d" stroke-width="6" stroke-linecap="round"><path d="M0 60c34-60 78 44 118-20s74 2 98-34"/><circle cx="0" cy="60" r="8" fill="${dog.accent}" stroke="none"/><circle cx="216" cy="6" r="8" fill="${dog.accent}" stroke="none"/></g>`;
  }
  if (art.prop === "bolt") {
    return `<path d="M404 88 372 174h42l-34 92 86-124h-44l30-54Z" ${base}/>`;
  }
  if (art.prop === "chair") {
    return `<g transform="translate(56 304)" stroke="#20201d" stroke-width="6" stroke-linecap="round"><path d="M0 0h106l-20 54H20Z" fill="${dog.accent}"/><path d="M28 54v36M84 54v36"/></g>`;
  }
  if (art.prop === "sign") {
    return `<g transform="translate(58 250)"><path d="M36 0h100l24 28-24 28H36Z" ${base}/><path d="M36 56v96" stroke="#20201d" stroke-width="8"/><path d="M64 28h58" stroke="#fffaf0" stroke-width="6" stroke-linecap="round"/></g>`;
  }
  if (art.prop === "wind") {
    return `<g transform="translate(54 96)" fill="none" stroke="#20201d" stroke-width="6" stroke-linecap="round" opacity=".5"><path d="M0 20h122c36 0 34-38 0-38"/><path d="M40 72h154c42 0 42-44 0-44"/><path d="M10 124h92"/></g>`;
  }
  if (art.prop === "heart") {
    return `<path d="M414 124c-34-36-86 8-42 54l42 42 42-42c44-46-8-90-42-54Z" ${base}/>`;
  }
  if (art.prop === "sparkle") {
    return `<g fill="${dog.accent}"><path d="M410 94 426 132l38 16-38 16-16 38-16-38-38-16 38-16Z"/><circle cx="88" cy="158" r="12"/></g>`;
  }
  if (art.prop === "arrow") {
    return `<path d="M386 92h80v-28l54 54-54 54v-28h-80Z" ${base}/>`;
  }
  if (art.prop === "leash") {
    return `<path d="M76 292c86-38 180-34 284-8" fill="none" stroke="${dog.accent}" stroke-width="8" stroke-linecap="round"/><circle cx="76" cy="292" r="16" fill="none" stroke="#20201d" stroke-width="6"/>`;
  }
  if (art.prop === "ticket") {
    return `<g transform="translate(48 112) rotate(-8)"><rect width="112" height="64" rx="10" fill="#fffaf0" stroke="#20201d" stroke-width="5"/><path d="M22 22h68M22 42h42" stroke="${dog.accent}" stroke-width="6" stroke-linecap="round"/></g>`;
  }
  return "";
}

async function saveResultImage() {
  if (!currentOutcome) return;
  const dataUrl = await buildShareImage(currentOutcome);
  const dog = dogMap[currentOutcome.id];
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = `river-dog-${dog.id}.png`;
  link.click();
}

async function buildShareImage(outcome) {
  const dog = dogMap[outcome.id];
  const canvas = els.canvas;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const gradient = ctx.createLinearGradient(0, 0, 1080, 1920);
  gradient.addColorStop(0, dog.bg);
  gradient.addColorStop(0.58, "#f6f3ec");
  gradient.addColorStop(1, "#fffaf0");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 1920);

  ctx.fillStyle = "rgba(32,32,29,0.08)";
  for (let x = 0; x < 1080; x += 72) {
    ctx.fillRect(x, 0, 2, 1920);
  }
  for (let y = 0; y < 1920; y += 72) {
    ctx.fillRect(0, y, 1080, 2);
  }

  const image = await loadImage(dog.image);
  drawImageCover(ctx, image, 80, 120, 920, 745);

  ctx.fillStyle = "#20201d";
  ctx.font = "800 46px -apple-system, BlinkMacSystemFont, PingFang SC, sans-serif";
  ctx.fillText("RIVER DOG TEST", 80, 930);

  ctx.font = "900 96px -apple-system, BlinkMacSystemFont, PingFang SC, sans-serif";
  wrapCanvasText(ctx, `${dog.breed}｜${dog.name}`, 80, 1048, 920, 112);

  ctx.fillStyle = "rgba(32,32,29,0.72)";
  ctx.font = "500 42px -apple-system, BlinkMacSystemFont, PingFang SC, sans-serif";
  wrapCanvasText(ctx, dog.line, 80, 1300, 920, 62);

  ctx.fillStyle = "#20201d";
  ctx.font = "700 34px -apple-system, BlinkMacSystemFont, PingFang SC, sans-serif";
  wrapCanvasText(ctx, `今日穿搭：${dog.outfit}`, 80, 1490, 920, 54);

  ctx.fillStyle = dog.accent;
  roundRect(ctx, 80, 1660, 520, 88, 44);
  ctx.fill();
  ctx.fillStyle = "#fffaf0";
  ctx.font = "800 34px -apple-system, BlinkMacSystemFont, PingFang SC, sans-serif";
  ctx.fillText(`匹配度 ${outcome.match}%`, 118, 1718);

  ctx.fillStyle = "rgba(32,32,29,0.58)";
  ctx.font = "500 30px -apple-system, BlinkMacSystemFont, PingFang SC, sans-serif";
  ctx.fillText("kaikaiyao.github.io/river-dog-test", 80, 1838);

  return canvas.toDataURL("image/png");
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function drawImageCover(ctx, image, x, y, width, height) {
  const imageRatio = image.width / image.height;
  const boxRatio = width / height;
  let sourceWidth = image.width;
  let sourceHeight = image.height;
  let sourceX = 0;
  let sourceY = 0;

  if (imageRatio > boxRatio) {
    sourceWidth = image.height * boxRatio;
    sourceX = (image.width - sourceWidth) / 2;
  } else {
    sourceHeight = image.width / boxRatio;
    sourceY = (image.height - sourceHeight) / 2;
  }

  ctx.save();
  roundRect(ctx, x, y, width, height, 34);
  ctx.clip();
  ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height);
  ctx.restore();
}

function svgImage(svgText) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgText)}`;
  });
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  let line = "";
  Array.from(text).forEach((char) => {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = char;
      y += lineHeight;
    } else {
      line = testLine;
    }
  });
  ctx.fillText(line, x, y);
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

async function shareTest() {
  const dog = currentOutcome ? dogMap[currentOutcome.id] : null;
  const shareUrl = `${window.location.origin}${window.location.pathname}`;
  const text = dog ? dog.shareTitle : "测测你是哪只滨江时髦小狗。";
  if (navigator.share) {
    try {
      await navigator.share({
        title: "滨江小狗人格测试",
        text,
        url: shareUrl
      });
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  await navigator.clipboard.writeText(`${text}\n${shareUrl}`);
  const oldText = els.share.textContent;
  els.share.textContent = "链接已复制";
  setTimeout(() => {
    els.share.textContent = oldText;
  }, 1400);
}

els.start.addEventListener("click", startQuiz);
els.back.addEventListener("click", goBack);
els.next.addEventListener("click", goNext);
els.restart.addEventListener("click", () => {
  answers = Array(questions.length).fill(null);
  currentOutcome = null;
  startQuiz();
});
els.galleryToggle.addEventListener("click", () => {
  if (!els.gallery.innerHTML.trim()) renderGallery();
  const isHidden = els.gallery.hidden;
  els.gallery.hidden = !isHidden;
  els.galleryToggle.textContent = isHidden ? "收起全部小狗图鉴" : "查看全部小狗图鉴";
});
els.save.addEventListener("click", saveResultImage);
els.share.addEventListener("click", shareTest);
