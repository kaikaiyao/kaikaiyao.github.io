import * as THREE from "https://esm.sh/three@0.165.0";
import { RoundedBoxGeometry } from "https://esm.sh/three@0.165.0/examples/jsm/geometries/RoundedBoxGeometry.js";

const filters = [
  { id: "light", label: "清淡", hint: "低负担", tone: "#72cf9b" },
  { id: "bold", label: "重口", hint: "强存在", tone: "#ff5a3d" },
  { id: "hot", label: "热汤", hint: "有温度", tone: "#ffb24d" },
  { id: "sweet", label: "甜", hint: "情绪价值", tone: "#ffc7e7" },
  { id: "budget", label: "省钱", hint: "不破费", tone: "#9ee6ff" },
  { id: "late", label: "深夜", hint: "夜宵友好", tone: "#9a68ff" },
  { id: "group", label: "多人", hint: "能分享", tone: "#ffd1e0" },
  { id: "convenience", label: "便利", hint: "快拿快走", tone: "#b9f1d2" },
  { id: "veggie", label: "素食", hint: "蔬菜也行", tone: "#c7ec77" },
  { id: "comfort", label: "脑累", hint: "少思考", tone: "#ffd84d" }
];

const categoryTone = {
  中餐: "#ffd84d",
  日餐: "#ffb24d",
  韩餐: "#ff8d7a",
  东南亚: "#72cf9b",
  西式快餐: "#9ee6ff",
  轻食: "#b9f1d2",
  甜品: "#ffc7e7",
  深夜小吃: "#9a68ff",
  便利店: "#c7ecff",
  素食友好: "#c7ec77",
  世界风味: "#d6c2ff",
  隐藏饭签: "#171615"
};

const cuisineOptions = [
  { id: "chinese", label: "中", fullLabel: "中餐", tone: "#ffd84d" },
  { id: "japanese", label: "日", fullLabel: "日餐", tone: "#ffb24d" },
  { id: "korean", label: "韩", fullLabel: "韩餐", tone: "#ff8d7a" },
  { id: "seasia", label: "东南亚", fullLabel: "东南亚", tone: "#72cf9b" },
  { id: "western", label: "西式", fullLabel: "西式", tone: "#9ee6ff" },
  { id: "world", label: "世界", fullLabel: "世界风味", tone: "#d6c2ff" }
];

const cuisineById = new Map(cuisineOptions.map((option) => [option.id, option]));

const foods = [
  item("beef-noodle", "兰州牛肉面", "中餐", "清汤、牛肉、萝卜、辣油，稳妥又有满足感。", "今天适合一碗热汤面，把思考交给汤底。", ["热汤", "稳妥", "午餐"], "想吃热汤面、工作日午餐", "中等", "快", ["hot", "comfort", "budget", "solo"], ["拉面", "乌冬面"], "加一点辣油，今天就会顺一点。"),
  item("dumpling", "饺子", "中餐", "煎、煮、蒸都可以，荤素选择多。", "这是一种不会太隆重、但会认真填饱你的答案。", ["主食", "温和", "可多人"], "一个人、家庭餐、想吃主食", "省钱", "中速", ["comfort", "budget", "group", "veggie"], ["小笼包", "煎饼卷物"], "蘸料别省，醋和辣椒都算今日仪式。"),
  item("malatang", "麻辣烫", "中餐", "自选菜品，辣度可控，选择感很强。", "你不是想做决定，你只是想把所有想吃的都放进碗里。", ["自选", "重口", "热闹"], "想吃很多种东西但不想认真点菜", "中等", "快", ["hot", "bold", "late", "comfort", "solo"], ["火锅", "关东煮"], "多拿一份青菜，骰子也会假装你很均衡。"),
  item("congee", "粥配小菜", "中餐", "温和、清淡、容易消化。", "今天不必证明食欲，舒服就很够了。", ["清淡", "温和", "早餐"], "胃口一般、早餐、晚归后", "省钱", "快", ["light", "hot", "budget", "comfort"], ["蔬菜汤面", "汤和面包"], "加个蛋，温柔但不空。"),
  item("rice-bowl", "盖浇饭", "中餐", "米饭加一份热菜，简单直接。", "不搞复杂，今天需要一份明确、有碳水支撑的饭。", ["米饭", "效率", "稳"], "工作日午餐、赶时间", "省钱", "快", ["budget", "comfort", "quick", "solo"], ["炒饭", "韩式拌饭"], "选一个你最熟的浇头，别和自己较劲。"),
  item("fried-rice", "炒饭", "中餐", "一盘解决主食和配料，接受度高。", "今天的答案是热锅气和一口一口的确定感。", ["锅气", "快", "主食"], "快速饱腹、这顿懒得想", "省钱", "快", ["budget", "comfort", "solo"], ["盖浇饭", "番茄意面"], "加蛋是底线，加虾仁是奖励。"),
  item("hotpot", "火锅", "中餐", "食材自由度极高，社交属性强。", "所有人都说随便的时候，火锅负责结束会议。", ["多人", "热闹", "重口"], "朋友聚餐、冷天、选择困难终结者", "偏高", "慢", ["hot", "bold", "group", "comfort"], ["烤鱼", "部队锅"], "先点锅底，再让每个人交出一个必点菜。"),
  item("claypot-rice", "煲仔饭", "中餐", "米饭带锅巴，酱油香和肉汁很突出。", "今天需要一点锅巴声，一点热气，一点被照顾的错觉。", ["锅巴", "米饭", "治愈"], "想吃米饭但要有仪式感", "中等", "中速", ["hot", "comfort", "solo"], ["盖浇饭", "亲子丼"], "等两分钟再拌，锅巴会替你认真收尾。"),
  item("xiaolongbao", "小笼包", "中餐", "汤汁丰富，一笼一笼很有节奏。", "把这一餐拆成一笼一笼，选择困难也会变小。", ["蒸笼", "轻量", "经典"], "早午餐、轻量正餐", "中等", "中速", ["comfort", "group", "budget"], ["饺子", "饭团"], "别急着咬，今日幸运藏在第一口汤里。"),
  item("grilled-fish", "烤鱼", "中餐", "香辣或酱香，适合多人分享。", "这是“今天不想平淡”的明确投票。", ["重口", "多人", "鱼"], "聚餐、想吃重口味", "偏高", "慢", ["bold", "group", "hot"], ["火锅", "烤肉拼盘"], "多点配菜，鱼只是这场饭局的主持人。"),

  item("sushi", "寿司拼盘", "日餐", "清爽、整洁、选择多。", "今天适合一个清爽但不敷衍的答案。", ["清爽", "拼盘", "漂亮"], "想吃不太油的正餐", "中等", "快", ["light", "solo", "group"], ["饭团", "沙拉碗"], "如果犹豫，就从三文鱼和玉子开始。"),
  item("ramen", "拉面", "日餐", "浓汤、叉烧、溏心蛋，满足感强。", "热汤面会替你把今天的噪音压低一点。", ["热汤", "治愈", "浓郁"], "下班后、雨天、想喝热汤", "中等", "快", ["hot", "bold", "comfort", "solo"], ["乌冬面", "兰州牛肉面"], "溏心蛋不是配料，是这一餐的心理支点。"),
  item("curry-rice", "咖喱饭", "日餐", "微甜浓郁，鸡排、猪排、蔬菜都能搭。", "今天适合被一盘咖喱稳稳接住。", ["米饭", "浓郁", "安慰"], "想吃安慰型米饭", "中等", "快", ["comfort", "budget", "solo"], ["素咖喱饭", "盖浇饭"], "想奖励自己就加炸物，想轻一点就加蔬菜。"),
  item("oyakodon", "亲子丼", "日餐", "鸡肉、鸡蛋和米饭组合，温柔不刺激。", "温柔的饭也能很有存在感。", ["温柔", "米饭", "鸡蛋"], "午餐、想吃热乎但不重口", "中等", "快", ["light", "comfort", "solo"], ["煲仔饭", "韩式拌饭"], "半熟蛋是它的光环，别让它太孤单。"),
  item("udon", "乌冬面", "日餐", "面条厚实，汤底清淡或咖喱风味。", "今天适合一碗厚实但不吵闹的面。", ["清淡", "热汤", "面"], "胃口一般、想吃面但不辣", "中等", "快", ["hot", "light", "comfort"], ["蔬菜汤面", "拉面"], "选热汤款，今天别让胃继续加班。"),
  item("tempura", "天妇罗定食", "日餐", "炸物轻脆，通常配米饭和味噌汤。", "想吃炸物，但仍然想保持一点体面。", ["炸物", "定食", "脆"], "想吃炸物但不想太随便", "中等", "中速", ["comfort", "treat", "solo"], ["蔬菜天妇罗", "炸鸡套餐"], "先吃最脆的那块，别等它软掉。"),
  item("unagi", "烤鳗鱼饭", "日餐", "酱香浓郁，米饭杀手。", "这不是随便吃吃，这是给今天盖章。", ["犒劳", "酱香", "米饭"], "想奖励自己、正式一点的午餐", "偏高", "中速", ["treat", "comfort", "solo"], ["牛排饭", "咖喱饭"], "今天值得多花一点点，不必解释。"),
  item("oden", "关东煮", "日餐", "热汤、小份、多选择。", "冷夜和路过便利店时，它就是温柔的短暂停靠。", ["热汤", "小份", "便利店"], "冷夜、便利店路过、轻夜宵", "省钱", "快", ["hot", "light", "late", "convenience", "budget"], ["粥配小菜", "饭团"], "萝卜和鸡蛋先拿，别问为什么。"),

  item("bibimbap", "韩式拌饭", "韩餐", "米饭、蔬菜、肉和辣酱混合，营养均衡。", "把复杂心情拌匀，今天就有方向。", ["拌饭", "均衡", "微辣"], "想吃一碗完整的饭", "中等", "快", ["comfort", "light", "solo"], ["盖浇饭", "谷物碗"], "辣酱可以分两次加，人生也是。"),
  item("army-stew", "部队锅", "韩餐", "泡面、香肠、芝士、泡菜，热闹又重口。", "这一餐不适合清心寡欲，适合热闹地冒泡。", ["热锅", "重口", "多人"], "深夜、朋友一起吃", "中等", "慢", ["hot", "bold", "late", "group"], ["火锅", "麻辣烫"], "泡面最后放，期待感要留到后半场。"),
  item("korean-chicken", "韩式炸鸡", "韩餐", "外脆内嫩，甜辣、蒜香、酱油口味都可。", "今天需要一点脆响，把低电量敲醒。", ["炸鸡", "甜辣", "放纵"], "看剧、周末、想放纵", "中等", "中速", ["bold", "late", "group", "comfort"], ["炸鸡套餐", "披萨"], "半半口味是成年人最后的体面。"),
  item("kimchi-tofu", "泡菜豆腐汤", "韩餐", "酸辣开胃，适合配米饭。", "热、酸、辣，专治不知道饿不饿。", ["酸辣", "热汤", "开胃"], "冷天、想喝汤、胃口被唤醒", "中等", "快", ["hot", "bold", "comfort", "solo"], ["叻沙", "麻辣烫"], "米饭必须在场，它是汤的翻译。"),
  item("tteokbokki", "炒年糕", "韩餐", "甜辣黏糯，存在感很强。", "如果今天想吃点有情绪的东西，就是它。", ["甜辣", "黏糯", "夜宵"], "韩式夜宵、想吃小吃", "中等", "快", ["bold", "late", "budget", "sweet"], ["炸串", "韩式炸鸡"], "加芝士会更快乐，也更没有回头路。"),

  item("pho", "越南粉", "东南亚", "清汤、香草、牛肉或鸡肉，清爽但够饱。", "你需要热汤，但不需要油腻的负担。", ["清爽", "热汤", "香草"], "想吃热汤但不油腻", "中等", "快", ["hot", "light", "budget", "comfort"], ["乌冬面", "蔬菜汤面"], "青柠挤下去，像给今天重启。"),
  item("pad-thai", "泰式炒河粉", "东南亚", "酸甜咸香，花生碎和青柠很提神。", "今天适合换一个明亮的频道。", ["酸甜", "河粉", "提神"], "想换口味、午餐", "中等", "快", ["bold", "late", "group", "sweet", "comfort", "solo"], ["越南粉", "番茄意面"], "青柠和花生碎别漏，它们是灵魂开关。"),
  item("hainan-chicken", "海南鸡饭", "东南亚", "鸡肉嫩、米饭香，酱料是灵魂。", "清爽肉类正餐，稳到没有戏剧冲突。", ["清爽", "鸡饭", "酱料"], "想吃清爽肉类正餐", "中等", "快", ["light", "budget", "comfort", "solo"], ["亲子丼", "鸡胸肉饭"], "三种酱轮流来，今天就很完整。"),
  item("laksa", "叻沙", "东南亚", "椰奶咖喱汤底，浓郁辛香。", "浓郁热汤会让这一餐有一点异国假期感。", ["椰香", "热汤", "辛香"], "想吃不普通的热汤面", "中等", "快", ["hot", "bold", "comfort"], ["绿咖喱饭", "泡菜豆腐汤"], "纸巾备好，它很热情。"),
  item("green-curry", "绿咖喱饭", "东南亚", "香草和椰奶味明显，适合配鸡肉或蔬菜。", "今天不想平，但也不想太冒险。", ["椰奶", "下饭", "香草"], "想吃下饭又不普通的东西", "中等", "快", ["bold", "comfort", "veggie"], ["素咖喱饭", "叻沙"], "配米饭，别假装自己只想浅尝。"),

  item("burger-fries", "汉堡薯条", "西式快餐", "经典快餐组合，决策成本低。", "脑子累的时候，熟悉味道就是一条捷径。", ["快餐", "稳定", "薯条"], "赶时间、想吃熟悉味道", "中等", "很快", ["hot", "comfort", "quick", "budget", "solo"], ["炸鸡套餐", "三明治"], "薯条趁热吃，拖延会扣快乐分。"),
  item("fried-chicken-set", "炸鸡套餐", "西式快餐", "酥脆、热量快乐，适合分享。", "今天需要热量快乐，不需要太多解释。", ["酥脆", "快餐", "放松"], "想吃重口、看比赛或电影", "中等", "快", ["bold", "comfort", "group", "late"], ["韩式炸鸡", "汉堡薯条"], "点一份酸甜蘸酱，给快乐加边框。"),
  item("pizza", "披萨", "西式快餐", "口味多，适合多人分食。", "当每个人都想法模糊，披萨会自动变成圆桌会议。", ["芝士", "多人", "分享"], "聚会、加班、懒得分别点餐", "中等", "中速", ["group", "comfort", "bold"], ["炸鸡套餐", "意大利面"], "一半经典一半新口味，别让圆形变无聊。"),
  item("sandwich", "三明治", "西式快餐", "冷热皆可，搭配灵活。", "轻、快、有秩序，适合继续赶路。", ["轻午餐", "便携", "快"], "早餐、轻午餐、路上吃", "省钱", "很快", ["light", "veggie", "quick", "budget", "convenience"], ["饭团", "沙拉碗"], "加咖啡就是标准都市补丁。"),
  item("burrito", "墨西哥卷饼", "西式快餐", "肉、豆、米饭、蔬菜卷在一起。", "所有元素被卷好，像今天终于有人替你整理。", ["卷饼", "丰富", "便携"], "想吃方便但比汉堡更丰富", "中等", "快", ["comfort", "quick", "solo"], ["沙威玛", "煎饼卷物"], "要一点辣酱，整体会更有脾气。"),
  item("golden-arches", "麦当劳风格快餐", "西式快餐", "全球常见、稳定、无需冒险。", "今天可以不探索世界，稳定也是一种美德。", ["稳定", "快", "熟悉"], "脑子很累，只想闭眼点", "中等", "很快", ["comfort", "quick", "budget"], ["汉堡薯条", "炸鸡套餐"], "固定套餐就好，别在小选择里消耗大人生。"),

  item("salad-bowl", "沙拉碗", "轻食", "蔬菜、蛋白质和酱汁组合，清爽可控。", "今天要清爽一点，但不是空虚一点。", ["清爽", "轻食", "可控"], "想吃轻一点、运动后", "中等", "快", ["light", "veggie", "solo"], ["谷物碗", "三明治"], "酱汁分开放，主动权在你手里。"),
  item("grain-bowl", "谷物碗", "轻食", "米饭、藜麦、鸡肉、蔬菜搭配。", "健康不必像惩罚，它也可以很有颜色。", ["均衡", "轻食", "饱"], "想健康但要吃饱", "中等", "快", ["light", "veggie", "group", "comfort"], ["沙拉碗", "韩式拌饭"], "选一个有香料感的酱，别让健康太严肃。"),
  item("chicken-rice", "鸡胸肉饭", "轻食", "高蛋白、低负担，味道靠酱汁救场。", "今天适合把身体放回主线。", ["高蛋白", "低负担", "工作日"], "健身期、工作日午餐", "中等", "快", ["light", "solo", "quick"], ["海南鸡饭", "谷物碗"], "酱汁别全免，不然人生太硬。"),
  item("soup-bread", "汤和面包", "轻食", "温和、简单，有一点欧洲午餐感。", "你需要的是温度，不是大战一场。", ["温和", "轻食", "暖"], "不太饿、下午轻食", "中等", "快", ["hot", "light", "comfort"], ["粥配小菜", "蔬菜汤面"], "面包蘸汤，一切会变得有秩序。"),
  item("yogurt-fruit", "酸奶水果杯", "轻食", "清爽甜口，适合小饿。", "小饿不用上升成大工程。", ["清爽", "甜", "小食"], "早餐、下午茶、饭后补一点", "省钱", "很快", ["light", "sweet", "budget", "convenience"], ["酸奶加坚果", "冰淇淋"], "加坚果会更像一顿正经事。"),

  item("milk-tea-snack", "奶茶加小吃", "甜品", "快乐浓度高，正餐替代性一般但情绪价值强。", "你不是饿，你是需要一点甜的掌声。", ["甜", "情绪价值", "散步"], "下午低电量、和朋友散步", "中等", "快", ["hot", "late", "sweet", "comfort", "group"], ["蛋糕切片", "可丽饼"], "三分糖也算快乐，别被甜度绑架。"),
  item("crepe", "可丽饼", "甜品", "水果、奶油、巧克力组合，拍照友好。", "今天适合让甜品承担一点漂亮任务。", ["甜", "拍照", "逛街"], "逛街、想吃甜的", "中等", "快", ["sweet", "treat", "group"], ["冰淇淋", "蛋糕切片"], "选水果款，清爽会把甜拉回来。"),
  item("ice-cream", "冰淇淋", "甜品", "简单直接的甜品答案。", "不是每一餐都要严肃，今天可以融化一点。", ["甜", "清凉", "轻松"], "天热、饭后、心情需要修复", "省钱", "很快", ["sweet", "budget", "comfort"], ["酸奶水果杯", "甜甜圈"], "选一个没吃过的口味，冒险半径刚刚好。"),
  item("cake-slice", "蛋糕切片", "甜品", "小小庆祝感，不一定要有理由。", "今天值得一块小小的庆祝，不用等节日批准。", ["甜", "奖励", "下午茶"], "下午茶、奖励自己", "中等", "快", ["sweet", "treat", "comfort"], ["奶茶加小吃", "甜甜圈"], "配无糖饮料，快乐会更耐吃。"),
  item("donut", "甜甜圈", "甜品", "轻松、便携、适合配咖啡。", "圆形甜食会把今天的棱角磨圆一点。", ["甜", "咖啡", "便携"], "早晨、加班前补能量", "省钱", "很快", ["sweet", "budget", "convenience"], ["蛋糕切片", "酸奶水果杯"], "挑一个有颜色的，今天需要一点视觉糖分。"),

  item("skewers", "烧烤串", "深夜小吃", "烟火气强，肉串蔬菜都能点。", "深夜的答案不用太精致，要有烟火气。", ["夜宵", "重口", "聊天"], "深夜、朋友局、想聊天", "中等", "慢", ["late", "bold", "group"], ["炸串", "烤肉饭"], "点一串蔬菜，给夜宵一点台阶下。"),
  item("fried-skewers", "炸串", "深夜小吃", "选择多、酱料重、很有夜市感。", "这一餐适合脆的、热的、带一点不讲道理的。", ["夜市", "脆", "重口"], "想吃脆的、夜宵", "省钱", "快", ["late", "bold", "budget"], ["烧烤串", "炒年糕"], "酱料刷薄一点，快乐会更持久。"),
  item("instant-noodle-egg", "泡面加蛋", "深夜小吃", "最低门槛的深夜仪式。", "太晚了，别让选择困难继续坐镇厨房。", ["深夜", "省事", "热汤"], "太晚了、不想出门", "省钱", "很快", ["late", "budget", "hot", "convenience", "comfort"], ["关东煮", "粥配小菜"], "加蛋加青菜，生活还能被拯救一下。"),
  item("jianbing-wrap", "煎饼卷物", "深夜小吃", "主食感强，热乎方便。", "热乎、能拿着走，是赶路型快乐。", ["热乎", "便携", "主食"], "夜宵、赶路、想边走边吃", "省钱", "快", ["late", "budget", "quick"], ["墨西哥卷饼", "三明治"], "薄脆是灵魂，别轻易删。"),

  item("onigiri", "饭团", "便利店", "便宜、便携、口味多。", "最小体积的饭，最大限度地救场。", ["便携", "便利店", "省钱"], "通勤、轻午餐、赶车前", "省钱", "很快", ["convenience", "budget", "quick", "light"], ["三明治", "关东煮"], "拿两个不同口味，像给自己开盲盒。"),
  item("bento", "便当", "便利店", "米饭、主菜、小菜一次解决。", "无需排队，不用寒暄，微波炉负责最后一公里。", ["便利店", "完整", "快"], "办公室午饭、不想等餐", "中等", "很快", ["hot", "group", "convenience", "quick", "comfort"], ["盖浇饭", "海南鸡饭"], "选有蔬菜格的，看起来就更像生活。"),
  item("sandwich-coffee", "三明治加咖啡", "便利店", "稳定早餐组合。", "一手咖啡，一手三明治，城市模式启动。", ["早餐", "咖啡", "快"], "早晨、开会前", "省钱", "很快", ["convenience", "budget", "quick", "light"], ["饭团", "甜甜圈"], "热咖啡会让组合更完整。"),
  item("salad-egg", "沙拉加鸡蛋", "便利店", "轻量但不至于空虚。", "今天想少吃点，也想真的吃到东西。", ["轻食", "便利店", "鸡蛋"], "这一餐想少吃点", "省钱", "很快", ["convenience", "light", "veggie", "budget"], ["沙拉碗", "酸奶加坚果"], "加一份主食也不丢人，骰子不会举报。"),
  item("hotdog-sausage", "热狗或烤肠", "便利店", "快速、咸香、拿了就走。", "小饿不必动用宏大叙事。", ["快", "咸香", "路上"], "小饿、赶时间", "省钱", "很快", ["hot", "bold", "late", "convenience", "budget", "quick"], ["三明治", "饭团"], "配无糖茶，比想象中稳。"),
  item("yogurt-nuts", "酸奶加坚果", "便利店", "不像正餐，但很适合垫肚子。", "现在先把电量托住，等会儿再谈理想正餐。", ["垫肚", "清爽", "快"], "下午、夜里不想吃太重", "省钱", "很快", ["convenience", "budget", "light", "sweet"], ["酸奶水果杯", "沙拉加鸡蛋"], "选原味酸奶，坚果负责有趣。"),

  item("veggie-curry", "素咖喱饭", "素食友好", "蔬菜和咖喱很搭，不靠肉也有满足感。", "蔬菜也可以很下饭，今天不必靠肉撑场面。", ["素食", "米饭", "浓郁"], "素食日、想吃米饭", "中等", "快", ["bold", "veggie", "comfort"], ["咖喱饭", "绿咖喱饭"], "南瓜或土豆会让它更温柔。"),
  item("veggie-tempura", "蔬菜天妇罗", "素食友好", "炸蔬菜也可以很快乐。", "今天吃素，但不必吃得像检讨。", ["素食", "炸物", "脆"], "想吃素但不想太清淡", "中等", "中速", ["group", "veggie", "comfort", "treat"], ["天妇罗定食", "沙拉碗"], "南瓜、茄子、蘑菇，快乐三件套。"),
  item("tomato-pasta", "番茄意面", "世界风味", "酸甜开胃，全球接受度高。", "不想太油，也不想太素，番茄会负责平衡。", ["酸甜", "意面", "稳"], "想吃西式但不想太油", "中等", "快", ["budget", "light", "veggie", "comfort"], ["泰式炒河粉", "披萨"], "加一点芝士，故事会更圆。"),
  item("tofu-rice", "豆腐饭", "素食友好", "温和、高蛋白、搭配空间大。", "今天适合温和地补一补，不用大张旗鼓。", ["素食", "蛋白", "米饭"], "想吃轻一点又有营养", "省钱", "快", ["veggie", "light", "budget", "comfort"], ["蔬菜汤面", "韩式拌饭"], "酱汁是关键，别让豆腐独自努力。"),
  item("veg-noodle", "蔬菜汤面", "素食友好", "热汤、蔬菜、面条，简单舒服。", "把胃和心情都放进一碗热汤里。", ["素食", "热汤", "清淡"], "冷天、胃口一般", "省钱", "快", ["veggie", "hot", "late", "light", "budget"], ["乌冬面", "粥配小菜"], "多放菌菇，汤会更有深度。"),

  item("pasta", "意大利面", "世界风味", "奶油、番茄、青酱都可选。", "今天想吃得像一顿有计划的饭。", ["意面", "约饭", "稳定"], "约会、工作日正餐", "中等", "中速", ["hot", "comfort", "solo", "group"], ["番茄意面", "披萨"], "番茄醒神，奶油安慰，青酱显得会生活。"),
  item("grill-plate", "烤肉拼盘", "世界风味", "肉类主导，搭配沙拉或米饭。", "很饿的时候，答案需要有力量感。", ["烤肉", "蛋白", "多人"], "很饿、想补蛋白", "偏高", "慢", ["bold", "group", "treat"], ["烤鱼", "牛排饭"], "点一份沙拉，给肉一个清爽出口。"),
  item("shawarma", "中东烤肉卷", "世界风味", "烤肉、蔬菜、酸奶酱，香料感强。", "想换口味，但还想保持便携和饱腹。", ["香料", "卷饼", "便携"], "想吃新鲜口味", "中等", "快", ["late", "convenience", "comfort", "quick", "bold"], ["墨西哥卷饼", "煎饼卷物"], "酸奶酱会把香料拉得更顺。"),
  item("fish-chips", "鱼薯", "世界风味", "炸鱼加薯条，简单粗暴。", "今天不想拐弯，炸物就是直线答案。", ["炸物", "薯条", "英式"], "想吃英式快餐", "中等", "快", ["bold", "comfort", "group"], ["炸鸡套餐", "天妇罗定食"], "挤一点柠檬，脆感会更干净。"),
  item("steak-rice", "牛排饭或牛排盘", "世界风味", "更正式一点的肉类选择。", "今天不是随便吃，是犒劳自己。", ["犒劳", "肉", "正式"], "犒劳自己、约饭", "偏高", "中速", ["treat", "comfort", "solo", "group"], ["烤鳗鱼饭", "烤肉拼盘"], "熟度别乱猜，按自己真的喜欢来。")
];

const specialFoods = [
  item("yesterday-wish", "昨天想吃但没吃成的", "隐藏饭签", "骰子决定尊重你的遗憾。", "你反复想起的东西，可能早就替你做完决定了。", ["隐藏", "回忆", "反悔"], "选择困难反复发作", "看昨天", "看距离", ["comfort"], ["再投一次", "让朋友选"], "去翻聊天记录，那里有答案。"),
  item("friend-picks", "让同行的人选", "隐藏饭签", "你负责优雅地甩锅。", "两个人都说随便的时候，今天允许把命运外包。", ["隐藏", "多人", "甩锅"], "两个人都说随便", "友谊价", "很快", ["group", "comfort"], ["火锅", "披萨"], "规定对方 10 秒内回答，超时就开骰。"),
  item("nearest-hot-soup", "离你最近的热汤", "隐藏饭签", "距离优先，温度优先，脑力清零。", "今天别为了完美答案走太远，一碗近处的热汤就够。", ["隐藏", "热汤", "省力"], "很累、很冷、很饿", "中等", "很快", ["hot", "comfort", "budget"], ["关东煮", "蔬菜汤面"], "地图打开后，选最近那个。"),
  item("breakfast-meal", "早餐型正餐", "隐藏饭签", "煎蛋、吐司、粥、饭团都算。", "正餐不一定要像正餐，舒服才是今天的规则。", ["隐藏", "轻松", "反常规"], "没胃口但想舒服", "省钱", "快", ["light", "comfort", "budget"], ["三明治加咖啡", "粥配小菜"], "加一杯热饮，今天就收得很好。")
];

const funnyFoods = [
  jokeItem("dont-eat-water", "别吃了，先喝水", "清淡和重口同时亮灯，骰子选择先报警。", "你这不是点餐，是人格分裂的味觉会议。先喝口水，三分钟后再决定。", ["隐藏", "吐槽", "冷静"], "同时想清淡又想重口", "零元", "立刻", ["light", "bold"], ["白粥", "麻辣烫"], "如果三分钟后还纠结，就交给最近那家。"),
  jokeItem("turn-right-anything", "出门右转有啥吃啥", "偏好太多时，机器会把复杂人生交还给街角。", "你已经选到系统怀疑这不是晚饭，是项目需求文档。出门右转，第一家能吃的就是答案。", ["隐藏", "随缘", "省脑"], "选择过载", "看缘分", "很快", ["comfort", "budget"], ["便利店便当", "离你最近的热汤"], "不要再打开第三个外卖软件了。"),
  jokeItem("hot-milk-tea-soup", "热奶茶也算汤", "想热汤又想甜，机器决定尊重这个漏洞。", "从营养学角度可能不严谨，但从快乐学角度非常成立。", ["隐藏", "甜汤", "歪理"], "又想热乎又想甜", "中等", "很快", ["hot", "sweet"], ["奶茶加小吃", "汤和面包"], "珍珠可以当主食，至少今天先这样骗自己。"),
  jokeItem("wellness-punk", "养生朋克套餐", "又清淡、又深夜、又重口的时候出现。", "一半在养胃，一半在叛逆。建议点一份看起来健康、吃起来快乐的东西。", ["隐藏", "养生", "叛逆"], "深夜还想自律但不完全自律", "中等", "快", ["late", "light", "bold"], ["谷物碗", "炸串"], "加青菜不是投降，是给快乐贴保修。"),
  jokeItem("committee-dinner", "让群聊投票，输的买单", "多人、预算、便利店同时出现时触发。", "这顿饭已经不是食物问题，是组织管理问题。发起投票，票少的那个负责下单。", ["隐藏", "群聊", "甩锅"], "人多又想省事", "看群友", "很快", ["group", "budget", "convenience"], ["披萨", "便当"], "民主可能很慢，但甩锅很快。")
];

const allFoods = [...foods, ...specialFoods, ...funnyFoods];

const foodCuisineOverrides = {
  "milk-tea-snack": ["chinese", "world"],
  crepe: ["western", "world"],
  "ice-cream": ["western", "world"],
  "cake-slice": ["western", "world"],
  donut: ["western", "world"],
  skewers: "chinese",
  "fried-skewers": "chinese",
  "instant-noodle-egg": ["chinese", "world"],
  "jianbing-wrap": "chinese",
  onigiri: "japanese",
  bento: "japanese",
  "sandwich-coffee": "western",
  "salad-egg": "western",
  "hotdog-sausage": "western",
  "yogurt-nuts": ["western", "world"],
  "veggie-curry": "japanese",
  "veggie-tempura": "japanese",
  "tofu-rice": "chinese",
  "veg-noodle": "chinese",
  "tomato-pasta": ["western", "world"],
  pasta: ["western", "world"],
  "fish-chips": ["western", "world"],
  "steak-rice": ["western", "world"]
};

const state = {
  selectedFilters: new Set(),
  selectedCategories: new Set(),
  current: null,
  rollCount: 0,
  isRolling: false,
  toastTimer: null,
  tuningTimer: null
};

const dom = {
  sceneCanvas: document.querySelector("[data-scene-canvas]"),
  sceneShell: document.querySelector(".scene-shell"),
  machineStage: document.querySelector("[data-machine-stage]"),
  machineArt: document.querySelector("[data-machine-art]"),
  machineCanvas: document.querySelector("[data-machine-3d-canvas]"),
  tokenCloud: document.querySelector("[data-token-cloud]"),
  domDice: document.querySelector("[data-dom-dice]"),
  domDiceFaces: document.querySelectorAll("[data-dice-face]"),
  filterGrid: document.querySelector("[data-filter-grid]"),
  activeFilters: document.querySelector("[data-active-filters]"),
  sceneHit: document.querySelector("[data-roll]"),
  rollTriggers: document.querySelectorAll("[data-roll], [data-roll-main]"),
  rollAgain: document.querySelector("[data-roll-again]"),
  machineStatus: document.querySelector("[data-machine-status]"),
  resultSheet: document.querySelector("[data-result-sheet]"),
  sheetGrabber: document.querySelector("[data-sheet-grabber]"),
  sheetHandle: document.querySelector("[data-sheet-handle]"),
  sheetHint: document.querySelector("[data-sheet-hint]"),
  closeResult: document.querySelectorAll("[data-close-result]"),
  resultPanel: document.querySelector("[data-result-panel]"),
  category: document.querySelector("[data-category]"),
  rollCount: document.querySelector("[data-roll-count]"),
  resultPhoto: document.querySelector("[data-result-photo]"),
  resultImage: document.querySelector("[data-result-image]"),
  title: document.querySelector("[data-result-title]"),
  line: document.querySelector("[data-result-line]"),
  cues: document.querySelector("[data-result-cues]"),
  backup: document.querySelector("[data-result-backup]"),
  share: document.querySelector("[data-share]"),
  nudgeRow: document.querySelector("[data-nudge-row]"),
  categoryRail: document.querySelector("[data-category-rail]"),
  toast: document.querySelector("[data-toast]"),
  canvas: document.querySelector("[data-share-canvas]")
};

const categories = cuisineOptions.filter((option) => foods.some((food) => foodCuisines(food).includes(option.id)));
const rollDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 700 : 2700;
const diceGlyphs = [1, 6, 2, 5, 3, 4];
let sceneKit = null;

function item(id, name, category, description, line, tags, scene, budget, speed, moods, backups, addOn) {
  return {
    id,
    name,
    category,
    description,
    line,
    tags,
    scene,
    budget,
    speed,
    moods,
    backups,
    addOn
  };
}

function jokeItem(id, name, description, line, tags, scene, budget, speed, moods, backups, addOn, imageId) {
  return {
    ...item(id, name, "隐藏饭签", description, line, tags, scene, budget, speed, moods, backups, addOn),
    imageId,
    isJoke: true
  };
}

function boot() {
  initAssetScene();
  bindMachineViewportFit();
  renderFilters();
  renderActiveFilters();
  renderCategories();
  renderPreferenceTokens();
  bindEvents();
  applyMachineTheme();
  const dishId = new URLSearchParams(window.location.search).get("dish");
  const sharedDish = allFoods.find((food) => food.id === dishId);
  if (sharedDish) {
    state.current = sharedDish;
    state.rollCount = 1;
    renderResult(sharedDish);
    dom.rollCount.textContent = "朋友分享";
    setAssetDiceResult(sharedDish);
  }
}

function bindMachineViewportFit() {
  queueMachineViewportFit();
  window.addEventListener("resize", queueMachineViewportFit, { passive: true });
  window.visualViewport?.addEventListener("resize", queueMachineViewportFit, { passive: true });
  window.visualViewport?.addEventListener("scroll", queueMachineViewportFit, { passive: true });
}

function queueMachineViewportFit() {
  window.requestAnimationFrame(() => {
    fitMachineToVisibleStage();
    resizeGlassToyScene();
  });
}

function fitMachineToVisibleStage() {
  if (!dom.sceneShell || !dom.machineArt) return;
  const shellRect = dom.sceneShell.getBoundingClientRect();
  if (!shellRect.width || !shellRect.height) return;
  const isMobile = shellRect.width < 700;
  const aspect = 816 / 1425;
  const reserve = isMobile ? 18 : 28;
  const widthLimit = isMobile
    ? Math.min(shellRect.width * 0.6, 272)
    : Math.min(shellRect.width * 0.48, 356);
  const heightLimit = Math.max(158, (shellRect.height - reserve) * aspect);
  const fittedWidth = Math.round(Math.max(158, Math.min(widthLimit, heightLimit)));
  dom.machineArt.style.setProperty("--machine-fit-width", `${fittedWidth}px`);
}

function renderFilters() {
  dom.filterGrid.innerHTML = filters.map((filter) => (
    `<button class="filter-chip choice-chip" type="button" data-filter="${filter.id}" aria-pressed="false" style="--tone:${filter.tone}">
      <span>${filter.label}</span>
    </button>`
  )).join("");
}

function renderActiveFilters() {
  const selected = filters
    .filter((filter) => state.selectedFilters.has(filter.id))
    .map((filter) => filter.label);
  const categoryLabels = [...state.selectedCategories].map((category) => cuisineLabel(category));
  const labels = [...categoryLabels, ...selected];
  dom.activeFilters.innerHTML = labels.length
    ? labels.map((label) => `<span>${label}</span>`).join("")
    : "";
  if (!state.isRolling) updateMachineStatus();
}

function renderCategories() {
  dom.categoryRail.innerHTML = categories.map((category) => `
    <button class="category-pill choice-chip" type="button" data-category-filter="${category.id}" aria-pressed="false" title="${category.fullLabel}" style="--tone:${category.tone}">
      <span>${category.label}</span>
    </button>
  `).join("");
}

function bindEvents() {
  dom.filterGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button || state.isRolling) return;
    toggleSetValue(state.selectedFilters, button.dataset.filter);
    syncFilters();
    renderActiveFilters();
    renderPreferenceTokens();
    applyMachineTheme(true);
  });

  dom.categoryRail.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category-filter]");
    if (!button || state.isRolling) return;
    toggleSetValue(state.selectedCategories, button.dataset.categoryFilter);
    syncCategories();
    renderActiveFilters();
    renderPreferenceTokens();
    applyMachineTheme(true);
  });

  dom.rollTriggers.forEach((button) => {
    button.addEventListener("click", () => {
      if (button === dom.sceneHit && state.current && dom.resultSheet.classList.contains("is-open")) {
        closeResultSheet();
        return;
      }
      rollFood();
    });
  });
  dom.rollAgain.addEventListener("click", rollFood);
  dom.share.addEventListener("click", shareResult);
  dom.closeResult.forEach((button) => button.addEventListener("click", closeResultSheet));
  bindResultSheetDrag();

  document.querySelectorAll("[data-quick-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.isRolling) return;
      state.selectedFilters.clear();
      state.selectedCategories.clear();
      state.selectedFilters.add(button.dataset.quickFilter);
      syncFilters();
      syncCategories();
      renderActiveFilters();
      renderPreferenceTokens();
      applyMachineTheme(true);
      rollFood();
    });
  });
}

function syncFilters() {
  dom.filterGrid.querySelectorAll("[data-filter]").forEach((button) => {
    button.setAttribute("aria-pressed", String(state.selectedFilters.has(button.dataset.filter)));
  });
}

function syncCategories() {
  dom.categoryRail.querySelectorAll("[data-category-filter]").forEach((button) => {
    button.setAttribute("aria-pressed", String(state.selectedCategories.has(button.dataset.categoryFilter)));
  });
}

const tokenSlots = [
  { x: -68, y: -38, z: -18, s: 0.92, r: -10 },
  { x: 62, y: -30, z: -4, s: 0.84, r: 12 },
  { x: -84, y: 8, z: 14, s: 0.72, r: 8 },
  { x: 76, y: 18, z: 20, s: 0.78, r: -18 },
  { x: -42, y: 52, z: -8, s: 0.66, r: 16 },
  { x: 42, y: 56, z: 10, s: 0.68, r: -8 },
  { x: -16, y: -70, z: 12, s: 0.62, r: 20 },
  { x: 18, y: 78, z: -12, s: 0.58, r: -14 },
  { x: -104, y: -18, z: -22, s: 0.54, r: 6 },
  { x: 98, y: -2, z: -18, s: 0.54, r: -6 }
];

function renderPreferenceTokens() {
  if (!dom.tokenCloud) return;
  const categoryTokens = [...state.selectedCategories].map((category) => ({
    type: "category",
    label: cuisineLabel(category),
    tone: cuisineTone(category)
  }));
  const moodTokens = filters
    .filter((filter) => state.selectedFilters.has(filter.id))
    .map((filter) => ({
      type: "mood",
      label: filter.label,
      tone: filter.tone
    }));
  const tokens = [...categoryTokens, ...moodTokens].slice(0, tokenSlots.length);
  dom.tokenCloud.innerHTML = tokens.map((token, index) => {
    const slot = tokenSlots[index % tokenSlots.length];
    const style = [
      `--token-tone:${token.tone}`,
      `--x:${slot.x}px`,
      `--y:${slot.y}px`,
      `--z:${slot.z}px`,
      `--s:${slot.s}`,
      `--r:${slot.r}deg`,
      `--d:${index * -0.42}s`
    ].join(";");
    return `<span class="machine-token is-${token.type}" style="${style}" title="${escapeHtml(token.label)}"><i aria-hidden="true"></i></span>`;
  }).join("");
  dom.sceneShell?.classList.toggle("has-tokens", tokens.length > 0);
  syncGlassPreferenceTokens();
}

function rollFood() {
  if (state.isRolling) return;
  state.isRolling = true;
  state.rollCount += 1;
  const result = pickFood();
  state.current = result;
  renderActiveFilters();
  setControlsDisabled(true);
  setMachineStatus("");
  dom.resultSheet.classList.remove("is-open");
  if (navigator.vibrate) navigator.vibrate([16, 45, 22]);
  startAssetSceneRoll(result, rollDuration);

  window.setTimeout(() => {
    renderResult(result);
    dropConfetti();
    setControlsDisabled(false);
    setMachineStatus("");
    state.isRolling = false;
  }, rollDuration);
}

function pickFood() {
  const joke = pickFunnyFood();
  if (joke) return joke;
  const useSpecial = state.rollCount > 1 && state.selectedFilters.size <= 1 && state.selectedCategories.size === 0 && Math.random() < 0.055;
  const selected = [...state.selectedFilters];
  const selectedCategories = [...state.selectedCategories];
  const pool = useSpecial ? specialFoods : selectionPool(selected, selectedCategories);
  const scored = pool.map((food) => {
    let score = 1;
    selected.forEach((filter) => {
      if (food.moods.includes(filter)) score += 4;
      if (filter === "light" && food.moods.includes("bold")) score -= 2;
      if (filter === "bold" && food.moods.includes("light")) score -= 1;
      if (filter === "veggie" && !food.moods.includes("veggie")) score -= 3;
      if (filter === "convenience" && !food.moods.includes("convenience")) score -= 2;
    });
    if (selectedCategories.length) {
      score += foodMatchesSelectedCuisine(food, selectedCategories) ? 7 : -2.5;
    }
    return { food, score: Math.max(0.1, score) };
  });
  const total = scored.reduce((sum, entry) => sum + entry.score, 0);
  let cursor = Math.random() * total;
  for (const entry of scored) {
    cursor -= entry.score;
    if (cursor <= 0) return entry.food;
  }
  return scored[scored.length - 1].food;
}

function selectionPool(selected, selectedCategories) {
  if (!selectedCategories.length && !selected.length) return foods;
  const inCategory = selectedCategories.length
    ? foods.filter((food) => foodMatchesSelectedCuisine(food, selectedCategories))
    : foods;
  if (!selected.length) return inCategory;

  const matchesAll = (food) => selected.every((filter) => filterCompatible(food, filter));
  const matchesAny = (food) => selected.some((filter) => filterCompatible(food, filter));
  const exactCategoryPool = inCategory.filter(matchesAll);
  if (exactCategoryPool.length) return exactCategoryPool;
  const hardFilters = selected.filter((filter) => ["veggie", "convenience"].includes(filter));
  if (selectedCategories.length && hardFilters.length) {
    const hardGlobalPool = foods.filter((food) => hardFilters.every((filter) => filterCompatible(food, filter)));
    if (hardGlobalPool.length) return hardGlobalPool;
  }
  const partialCategoryPool = inCategory.filter(matchesAny);
  if (partialCategoryPool.length) return partialCategoryPool;
  const exactGlobalPool = foods.filter(matchesAll);
  if (exactGlobalPool.length) return exactGlobalPool;
  if (selectedCategories.length) return inCategory;
  const partialGlobalPool = foods.filter(matchesAny);
  return partialGlobalPool.length ? partialGlobalPool : inCategory;
}

function foodCuisines(food) {
  const override = foodCuisineOverrides[food.id];
  if (override) return Array.isArray(override) ? override : [override];
  const categoryMap = {
    中餐: "chinese",
    日餐: "japanese",
    韩餐: "korean",
    东南亚: "seasia",
    西式快餐: "western",
    轻食: "western",
    甜品: "world",
    深夜小吃: "chinese",
    便利店: "western",
    素食友好: "world",
    世界风味: "world"
  };
  return [categoryMap[food.category] || "world"];
}

function foodMatchesSelectedCuisine(food, selectedCuisines) {
  const cuisines = foodCuisines(food);
  return selectedCuisines.some((cuisine) => cuisines.includes(cuisine));
}

function cuisineLabel(id) {
  return cuisineById.get(id)?.label || id;
}

function cuisineTone(id) {
  return cuisineById.get(id)?.tone || "#ffd84d";
}

function filterCompatible(food, filter) {
  if (filter === "light") return food.moods.includes("light") && !food.moods.includes("bold");
  if (filter === "bold") return food.moods.includes("bold");
  if (filter === "hot") return food.moods.includes("hot");
  if (filter === "sweet") return food.moods.includes("sweet");
  if (filter === "veggie") return food.moods.includes("veggie");
  if (filter === "convenience") return food.moods.includes("convenience");
  if (filter === "budget") return food.moods.includes("budget");
  if (filter === "late") return food.moods.includes("late");
  if (filter === "group") return food.moods.includes("group");
  if (filter === "comfort") return food.moods.includes("comfort");
  return food.moods.includes(filter);
}

function pickFunnyFood() {
  const selected = state.selectedFilters;
  const selectedCategories = state.selectedCategories;
  const candidates = [];
  const add = (id) => {
    const food = funnyFoods.find((entry) => entry.id === id);
    if (food && !candidates.includes(food)) candidates.push(food);
  };

  if (selected.has("light") && selected.has("bold")) add("dont-eat-water");
  if (selected.has("late") && selected.has("light") && selected.has("bold")) add("wellness-punk");
  if (selected.has("hot") && selected.has("sweet")) add("hot-milk-tea-soup");
  if (selected.has("group") && selected.has("budget") && selected.has("convenience")) add("committee-dinner");
  if (selected.size >= 4 || selectedCategories.size >= 3 || selected.size + selectedCategories.size >= 6) add("turn-right-anything");

  if (!candidates.length) return null;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function renderResult(food) {
  const tone = resultTone(food);
  const card = foodCardFor(food);
  dom.resultPhoto.hidden = false;
  dom.resultImage.src = card.src;
  dom.resultImage.alt = `${food.name} 的食物卡片`;
  dom.resultSheet.classList.add("has-result");
  dom.category.textContent = displayCategory(food);
  dom.rollCount.textContent = `已摇 ${state.rollCount} 次`;
  dom.title.textContent = food.name;
  dom.line.textContent = buildLine(food);
  dom.backup.textContent = food.backups.join(" / ");
  dom.cues.innerHTML = buildCues(food, tone);
  dom.nudgeRow.hidden = state.rollCount < 2;
  openResultSheet();
}

function buildLine(food) {
  if (state.rollCount >= 4) {
    return `${food.line} 已经重摇几次了，这个大概就是方向。`;
  }
  return food.line;
}

function buildCues(food, tone) {
  const primaryTag = food.tags.find((tag) => tag !== "隐藏") || displayCategory(food);
  const cues = [
    { label: primaryTag, bg: tone },
    { label: food.budget, bg: "rgba(255, 255, 255, 0.72)" },
    { label: food.speed, bg: "rgba(255, 255, 255, 0.72)" }
  ].filter((cue) => cue.label);
  return cues.map((cue) => (
    `<span style="--cue-bg:${cue.bg}">${cue.label}</span>`
  )).join("");
}

function displayCategory(food) {
  return food.category === "隐藏饭签" ? "惊喜选项" : food.category;
}

function resultTone(food) {
  return food.category === "隐藏饭签" ? "#ffd84d" : (categoryTone[food.category] || "#ffd84d");
}

function activePalette() {
  const categoryColors = [...state.selectedCategories]
    .map((category) => cuisineTone(category))
    .filter(Boolean);
  const moodColors = filters
    .filter((filter) => state.selectedFilters.has(filter.id))
    .map((filter) => filter.tone);
  const palette = [...categoryColors, ...moodColors];
  return palette.length ? palette.slice(0, 5) : ["#ffd84d", "#ff5a3d", "#72cf9b"];
}

function activePreferenceTone() {
  return activePalette()[0] || "#ffd84d";
}

function mixedTone(colors) {
  const source = colors.length ? colors : ["#ffd84d"];
  const rgb = source.reduce((sum, color) => {
    const clean = color.replace("#", "");
    const value = Number.parseInt(clean.length === 3
      ? clean.split("").map((char) => char + char).join("")
      : clean, 16);
    sum.r += (value >> 16) & 255;
    sum.g += (value >> 8) & 255;
    sum.b += value & 255;
    return sum;
  }, { r: 0, g: 0, b: 0 });
  const count = source.length;
  const toHex = (value) => Math.round(value / count).toString(16).padStart(2, "0");
  return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
}

function preferredPool() {
  const selectedCategories = [...state.selectedCategories];
  if (!selectedCategories.length) return foods;
  return foods.filter((food) => foodMatchesSelectedCuisine(food, selectedCategories));
}

function defaultDiceIcons() {
  return [...diceGlyphs];
}

function updateMachineStatus() {
  if (state.isRolling) return;
  setMachineStatus("");
}

function applyMachineTheme(pulse = false) {
  const hasPreference = state.selectedCategories.size > 0 || state.selectedFilters.size > 0;
  const palette = activePalette();
  const tone = palette[0] || "#ffd84d";
  const toneTwo = palette[1] || tone;
  const toneThree = palette[2] || mixedTone(palette);
  const blend = hasPreference ? mixedTone(palette) : "#ffd84d";
  dom.sceneShell?.style.setProperty("--machine-tone", tone);
  dom.sceneShell?.style.setProperty("--machine-tone-2", toneTwo);
  dom.sceneShell?.style.setProperty("--machine-tone-3", toneThree);
  dom.sceneShell?.classList.toggle("has-preference", hasPreference);
  dom.sceneShell?.classList.toggle("is-multitone", palette.length > 1 && hasPreference);
  renderPreferenceTokens();
  if (sceneKit) {
    sceneKit.ringMaterial?.color.set(tone);
    sceneKit.capMaterial?.color.set(toneTwo);
    sceneKit.buttonMaterial?.color.set(toneThree);
    sceneKit.baseMaterial?.color.set(blend);
    if (sceneKit.accentLight) {
      sceneKit.accentLight.color.set(blend);
      sceneKit.accentLight.intensity = hasPreference ? 1.8 : 1.05;
    }
    sceneKit.auraMaterials?.forEach((material, index) => {
      material.color.set(palette[index % palette.length]);
      material.opacity = hasPreference ? 0.16 + index * 0.035 : 0.075 + index * 0.018;
    });
    sceneKit.glassRimMaterials?.forEach((material, index) => {
      material.color.set(palette[index % palette.length]);
      material.opacity = hasPreference ? 0.22 : 0.12;
    });
    sceneKit.baseLightMaterials?.forEach((material, index) => {
      material.color.set(palette[index % palette.length]);
      material.opacity = hasPreference ? 0.86 : 0.68;
    });
    sceneKit.bubbles?.forEach((bubble, index) => {
      bubble.userData.bodyMaterial?.color.set(palette[index % palette.length]);
      if (bubble.userData.bodyMaterial) bubble.userData.bodyMaterial.opacity = hasPreference ? 0.74 : 0.56;
    });
    if (!state.current && !state.isRolling) setAssetDiceFaces(defaultDiceIcons());
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[char]));
}

function foodCardFor(food) {
  return {
    src: `./assets/food-items/${food.imageId || food.id}.jpg`
  };
}

async function shareResult() {
  if (!state.current) {
    showToast("先开出一餐，MEAL POP 才能分享。");
    return;
  }

  const url = `${window.location.origin}${window.location.pathname}?dish=${encodeURIComponent(state.current.id)}`;
  const text = `我把这一餐交给 MEAL POP，它开出：${state.current.name}。${state.current.line}`;
  const payload = {
    title: "MEAL POP",
    text,
    url
  };

  try {
    if (navigator.share) {
      await navigator.share(payload);
      return;
    }
  } catch (error) {
    if (error && error.name === "AbortError") return;
  }

  try {
    await navigator.clipboard.writeText(`${text}\n${url}`);
    showToast("结果已复制，可以直接发给朋友。");
  } catch {
    downloadShareCard();
    showToast("已生成分享图，适合截图或保存。");
  }
}

function downloadShareCard() {
  const canvas = dom.canvas;
  const ctx = canvas.getContext("2d");
  const food = state.current;
  const tone = categoryTone[food.category] || "#ffd84d";
  ctx.fillStyle = "#fff8e8";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = tone;
  ctx.fillRect(70, 90, 940, 220);
  ctx.fillStyle = "#263b5d";
  ctx.font = "900 58px sans-serif";
  ctx.fillText("MEAL POP", 112, 180);
  ctx.font = "900 106px sans-serif";
  wrapText(ctx, `${foodIcon(food)} ${food.name}`, 112, 455, 850, 122);
  ctx.font = "500 38px sans-serif";
  wrapText(ctx, food.line, 112, 705, 850, 56);
  ctx.strokeStyle = "#263b5d";
  ctx.lineWidth = 8;
  ctx.strokeRect(70, 70, 940, 1300);
  ctx.fillStyle = "#263b5d";
  ctx.font = "800 34px sans-serif";
  ctx.fillText(`适合：${food.scene}`, 112, 1030);
  ctx.fillText(`附近没有：${food.backups.join(" / ")}`, 112, 1090);
  ctx.fillText("kaikaiyao.github.io/food-dice", 112, 1285);
  const link = document.createElement("a");
  link.download = `food-dice-${food.id}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const chars = [...text];
  let line = "";
  chars.forEach((char) => {
    const test = line + char;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = char;
      y += lineHeight;
    } else {
      line = test;
    }
  });
  if (line) ctx.fillText(line, x, y);
}

function dropConfetti() {
  const colors = ["#ff5a3d", "#ffd84d", "#72cf9b", "#2f7df5", "#9a68ff"];
  for (let i = 0; i < 26; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[i % colors.length];
    piece.style.setProperty("--drift", `${(Math.random() - 0.5) * 220}px`);
    piece.style.animationDelay = `${Math.random() * 140}ms`;
    document.body.append(piece);
    window.setTimeout(() => piece.remove(), 1100);
  }
}

function initThreeSceneLegacy() {
  const canvas = dom.sceneCanvas;
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0.2, 8.2);

  const root = new THREE.Group();
  scene.add(root);

  const ambient = new THREE.AmbientLight(0xffffff, 2.6);
  scene.add(ambient);
  const key = new THREE.DirectionalLight(0xffffff, 2.8);
  key.position.set(3.5, 5, 5);
  scene.add(key);
  const side = new THREE.DirectionalLight(0x7bd7ff, 1.2);
  side.position.set(-4, 2, 2);
  scene.add(side);
  const accentLight = new THREE.PointLight(0xffd84d, 1.05, 8);
  accentLight.position.set(-1.7, 1.5, 2.1);
  scene.add(accentLight);

  const machine = new THREE.Group();
  root.add(machine);

  const auraGroup = new THREE.Group();
  auraGroup.position.set(0, 0.08, -0.38);
  machine.add(auraGroup);
  const auraMaterials = [0xffd84d, 0xff5a3d, 0x72cf9b].map((color, index) => new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.075 + index * 0.018,
    depthWrite: false,
    side: THREE.DoubleSide
  }));
  [2.38, 2.66, 2.92].forEach((radius, index) => {
    const halo = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.012 + index * 0.002, 10, 144), auraMaterials[index]);
    halo.rotation.z = index * 0.34;
    auraGroup.add(halo);
  });

  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    roughness: 0.05,
    metalness: 0,
    transparent: true,
    opacity: 0.27,
    transmission: 0.72,
    thickness: 0.65,
    clearcoat: 1
  });
  const globe = new THREE.Mesh(new THREE.SphereGeometry(2.08, 64, 32), glassMaterial);
  globe.position.y = 0.18;
  machine.add(globe);

  const glassRimGroup = new THREE.Group();
  glassRimGroup.position.y = 0.18;
  machine.add(glassRimGroup);
  const glassRimMaterials = [0xffd84d, 0x72cf9b, 0x9ee6ff].map((color) => new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.12,
    depthWrite: false
  }));
  [
    { radius: 2.14, tube: 0.016, rotation: [Math.PI / 2, 0, 0] },
    { radius: 1.92, tube: 0.012, rotation: [0.22, Math.PI / 2, 0.18] },
    { radius: 1.76, tube: 0.01, rotation: [Math.PI / 2.8, 0.25, Math.PI / 2] }
  ].forEach((spec, index) => {
    const orbit = new THREE.Mesh(
      new THREE.TorusGeometry(spec.radius, spec.tube, 10, 144),
      glassRimMaterials[index]
    );
    orbit.rotation.set(...spec.rotation);
    glassRimGroup.add(orbit);
  });

  const ringMaterial = new THREE.MeshStandardMaterial({
    color: 0xff5a3d,
    roughness: 0.26,
    metalness: 0.16,
    emissive: 0x1a0804,
    emissiveIntensity: 0.08
  });
  const capMaterial = ringMaterial.clone();
  const ring = new THREE.Mesh(new THREE.TorusGeometry(2.09, 0.075, 18, 96), ringMaterial);
  ring.position.y = -1.72;
  ring.rotation.x = Math.PI / 2;
  machine.add(ring);

  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.78, 0.96, 0.38, 64), capMaterial);
  cap.position.y = 2.14;
  machine.add(cap);

  const capBand = new THREE.Mesh(new THREE.TorusGeometry(0.89, 0.035, 12, 80), capMaterial);
  capBand.position.y = 1.94;
  capBand.rotation.x = Math.PI / 2;
  machine.add(capBand);

  const crown = new THREE.Mesh(
    new THREE.CylinderGeometry(0.34, 0.48, 0.16, 48),
    new THREE.MeshStandardMaterial({ color: 0x171615, roughness: 0.2, metalness: 0.22 })
  );
  crown.position.y = 2.42;
  machine.add(crown);

  const baseMaterial = new THREE.MeshStandardMaterial({
    color: 0xffd84d,
    roughness: 0.24,
    metalness: 0.14,
    emissive: 0x1a1200,
    emissiveIntensity: 0.05
  });
  const base = new THREE.Mesh(new THREE.CylinderGeometry(1.92, 2.24, 0.86, 64), baseMaterial);
  base.position.y = -2.22;
  machine.add(base);

  const baseLip = new THREE.Mesh(new THREE.TorusGeometry(2.08, 0.07, 14, 96), ringMaterial);
  baseLip.position.y = -1.79;
  baseLip.rotation.x = Math.PI / 2;
  machine.add(baseLip);

  const bottomLip = new THREE.Mesh(new THREE.TorusGeometry(2.18, 0.06, 14, 96), capMaterial);
  bottomLip.position.y = -2.65;
  bottomLip.rotation.x = Math.PI / 2;
  machine.add(bottomLip);

  const footMaterial = new THREE.MeshStandardMaterial({ color: 0x171615, roughness: 0.32, metalness: 0.22 });
  const foot = new THREE.Mesh(new THREE.CylinderGeometry(2.14, 2.32, 0.18, 64), footMaterial);
  foot.position.y = -2.73;
  machine.add(foot);

  const slot = new THREE.Mesh(
    new THREE.BoxGeometry(1.04, 0.18, 0.08),
    new THREE.MeshStandardMaterial({ color: 0x171615, roughness: 0.4 })
  );
  slot.position.set(0, -2.12, 1.83);
  machine.add(slot);

  const plaque = new THREE.Mesh(
    new THREE.PlaneGeometry(1.22, 0.38),
    new THREE.MeshBasicMaterial({
      map: makePlaqueTexture(),
      transparent: true,
      toneMapped: false,
      depthWrite: false
    })
  );
  plaque.position.set(0, -2.04, 2.08);
  machine.add(plaque);

  const baseLightMaterials = Array.from({ length: 7 }, (_, index) => new THREE.MeshBasicMaterial({
    color: [0xffd84d, 0x72cf9b, 0x9ee6ff, 0xff8d7a, 0xd6c2ff, 0xffc7e7, 0xc7ec77][index],
    transparent: true,
    opacity: 0.76,
    depthWrite: false
  }));
  baseLightMaterials.forEach((material, index) => {
    const lightDot = new THREE.Mesh(new THREE.SphereGeometry(0.035, 16, 10), material);
    lightDot.position.set(-0.72 + index * 0.24, -1.86, 1.9);
    machine.add(lightDot);
  });

  const buttonMaterial = new THREE.MeshStandardMaterial({
    color: 0xff5a3d,
    roughness: 0.18,
    metalness: 0.08,
    emissive: 0x210904,
    emissiveIntensity: 0.08
  });
  const button = new THREE.Mesh(
    new THREE.CylinderGeometry(0.42, 0.42, 0.18, 48),
    buttonMaterial
  );
  button.position.set(0, -2.42, 1.82);
  button.rotation.x = Math.PI / 2;
  machine.add(button);

  const buttonGlow = new THREE.Mesh(
    new THREE.TorusGeometry(0.52, 0.018, 12, 64),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.28, depthWrite: false })
  );
  buttonGlow.position.set(0, -2.42, 1.83);
  buttonGlow.rotation.x = Math.PI / 2;
  machine.add(buttonGlow);

  const diceGroup = new THREE.Group();
  diceGroup.position.set(0, 0.06, 0);
  machine.add(diceGroup);
  const diceOutline = new THREE.Mesh(
    new RoundedBoxGeometry(1.62, 1.62, 1.62, 8, 0.22),
    new THREE.MeshBasicMaterial({ color: 0x171615, side: THREE.BackSide })
  );
  diceOutline.scale.setScalar(1.035);
  diceGroup.add(diceOutline);
  const dice = new THREE.Mesh(
    new RoundedBoxGeometry(1.56, 1.56, 1.56, 10, 0.24),
    new THREE.MeshPhysicalMaterial({
      color: 0x24211f,
      roughness: 0.18,
      metalness: 0.08,
      clearcoat: 1,
      clearcoatRoughness: 0.16
    })
  );
  diceGroup.add(dice);

  const faceMeshes = [];
  const faceSpecs = [
    { glyph: "今", position: [0, 0, 0.845], rotation: [0, 0, 0] },
    { glyph: "天", position: [0, 0, -0.845], rotation: [0, Math.PI, 0] },
    { glyph: "到", position: [0.845, 0, 0], rotation: [0, Math.PI / 2, 0] },
    { glyph: "底", position: [-0.845, 0, 0], rotation: [0, -Math.PI / 2, 0] },
    { glyph: "吃", position: [0, 0.845, 0], rotation: [-Math.PI / 2, 0, 0] },
    { glyph: "啥", position: [0, -0.845, 0], rotation: [Math.PI / 2, 0, 0] }
  ];
  faceSpecs.forEach((spec, index) => {
    const face = makeFace(spec.glyph, index);
    face.position.set(...spec.position);
    face.rotation.set(...spec.rotation);
    face.renderOrder = 10 + index;
    diceGroup.add(face);
    faceMeshes.push(face);
  });

  const bubbleGroup = new THREE.Group();
  machine.add(bubbleGroup);
  const bubbles = Array.from({ length: 18 }, (_, index) => {
    const capsule = makeCapsule(index);
    capsule.userData.baseAngle = (Math.PI * 2 * index) / 18;
    capsule.userData.radius = 1.05 + (index % 4) * 0.18;
    capsule.userData.height = -0.78 + (index % 6) * 0.29;
    capsule.userData.speed = 0.3 + (index % 5) * 0.045;
    capsule.userData.spin = 0.7 + (index % 4) * 0.22;
    bubbleGroup.add(capsule);
    return capsule;
  });

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(2.7, 64),
    new THREE.MeshBasicMaterial({ color: 0x171615, transparent: true, opacity: 0.08 })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -2.72;
  root.add(shadow);

  sceneKit = {
    renderer,
    scene,
    camera,
    root,
    machine,
    auraGroup,
    auraMaterials,
    glassRimGroup,
    glassRimMaterials,
    baseLightMaterials,
    ringMaterial,
    capMaterial,
    baseMaterial,
    buttonMaterial,
    accentLight,
    diceGroup,
    faceMeshes,
    bubbleGroup,
    bubbles,
    rolling: null,
    lastTime: performance.now()
  };

  resizeScene();
  window.addEventListener("resize", resizeScene);
  requestAnimationFrame(animateScene);
}

function resizeScene() {
  if (!sceneKit) return;
  const rect = dom.sceneCanvas.getBoundingClientRect();
  const width = Math.max(1, rect.width);
  const height = Math.max(1, rect.height);
  const isMobileScene = width < 520;
  sceneKit.renderer.setSize(width, height, false);
  sceneKit.camera.aspect = width / height;
  sceneKit.camera.position.z = isMobileScene ? 9.65 : 7.6;
  sceneKit.camera.position.y = isMobileScene ? 0.2 : 0.22;
  sceneKit.camera.updateProjectionMatrix();
  sceneKit.machine.scale.setScalar(isMobileScene ? 0.76 : 1);
  sceneKit.machine.position.y = isMobileScene ? 0.36 : 0;
}

function animateScene(now) {
  if (!sceneKit) return;
  const delta = Math.min(0.035, (now - sceneKit.lastTime) / 1000);
  sceneKit.lastTime = now;
  const t = now / 1000;
  const rolling = sceneKit.rolling;

  if (rolling) {
    const progress = Math.min(1, (now - rolling.start) / rolling.duration);
    const energy = Math.pow(1 - progress, 0.38);
    sceneKit.diceGroup.rotation.x += delta * (10 + energy * 28);
    sceneKit.diceGroup.rotation.y += delta * (13 + energy * 34);
    sceneKit.diceGroup.rotation.z += delta * (8 + energy * 22);
    sceneKit.diceGroup.position.x = Math.sin(t * 17) * 0.52 * energy;
    sceneKit.diceGroup.position.y = 0.08 + Math.abs(Math.sin(t * 21)) * 0.56 * energy;
    sceneKit.diceGroup.position.z = Math.cos(t * 15) * 0.38 * energy;
    sceneKit.bubbleGroup.rotation.y += delta * (0.7 + energy * 2.6);
    sceneKit.machine.rotation.z = Math.sin(t * 19) * 0.035 * energy;
    sceneKit.bubbles.forEach((bubble, index) => {
      const angle = bubble.userData.baseAngle + t * (bubble.userData.speed + energy * 2.1) + index * 0.1;
      const radius = bubble.userData.radius + Math.sin(t * 5 + index) * 0.07 * energy;
      bubble.position.set(
        Math.cos(angle) * radius,
        bubble.userData.height + Math.sin(t * 8 + index) * 0.2 * energy,
        Math.sin(angle) * radius
      );
      bubble.rotation.set(t * bubble.userData.spin, angle + Math.PI / 2, Math.sin(t + index) * 0.7);
      bubble.scale.setScalar(1 + Math.sin(t * 4 + index) * 0.08);
    });

    if (progress >= 1) {
      sceneKit.rolling = null;
      settleDice(rolling.food);
    }
  } else {
    sceneKit.machine.rotation.y = Math.sin(t * 0.58) * 0.08;
    sceneKit.diceGroup.rotation.x += delta * 0.34;
    sceneKit.diceGroup.rotation.y += delta * 0.48;
    sceneKit.diceGroup.position.y = 0.12 + Math.sin(t * 1.8) * 0.06;
    sceneKit.bubbles.forEach((bubble, index) => {
      const angle = bubble.userData.baseAngle + t * bubble.userData.speed;
      bubble.position.set(
        Math.cos(angle) * bubble.userData.radius,
        bubble.userData.height + Math.sin(t * 1.7 + index) * 0.06,
        Math.sin(angle) * bubble.userData.radius
      );
      bubble.rotation.set(t * bubble.userData.spin * 0.5, angle + Math.PI / 2, Math.sin(t * 0.9 + index) * 0.45);
      bubble.scale.setScalar(1 + Math.sin(t * 1.4 + index) * 0.05);
    });
  }

  const hasPreference = state.selectedCategories.size > 0 || state.selectedFilters.size > 0;
  if (sceneKit.auraGroup) {
    sceneKit.auraGroup.rotation.z += delta * (hasPreference ? 0.32 : 0.09);
    sceneKit.auraGroup.scale.setScalar(1 + Math.sin(t * (hasPreference ? 1.8 : 0.9)) * (hasPreference ? 0.024 : 0.01));
    sceneKit.auraMaterials.forEach((material, index) => {
      const base = hasPreference ? 0.16 + index * 0.035 : 0.075 + index * 0.018;
      material.opacity = base + Math.sin(t * 1.6 + index) * (hasPreference ? 0.035 : 0.012);
    });
  }
  if (sceneKit.glassRimGroup) {
    sceneKit.glassRimGroup.rotation.y += delta * (hasPreference ? 0.18 : 0.07);
    sceneKit.glassRimGroup.rotation.z = Math.sin(t * 0.38) * 0.035;
  }

  sceneKit.renderer.render(sceneKit.scene, sceneKit.camera);
  requestAnimationFrame(animateScene);
}

function startSceneRoll(food, duration) {
  if (!sceneKit) return;
  setDiceFaces(defaultDiceIcons().sort(() => Math.random() - 0.5));
  sceneKit.rolling = { start: performance.now(), duration, food };
}

function openResultSheet() {
  dom.resultSheet.style.removeProperty("transform");
  dom.resultSheet.classList.add("is-open");
  dom.sheetHandle.setAttribute("aria-label", "下拉收起结果");
  dom.sheetHint.textContent = "下拉收起";
}

function closeResultSheet() {
  dom.resultSheet.style.removeProperty("transform");
  dom.resultSheet.classList.remove("is-open");
  dom.sheetHandle.setAttribute("aria-label", "展开结果");
  dom.sheetHint.textContent = "上拉查看";
  if (state.current && !state.isRolling) {
    setMachineStatus("");
  }
}

function bindResultSheetDrag() {
  let drag = null;
  let suppressHandleClick = false;

  dom.sheetHandle.addEventListener("click", () => {
    if (suppressHandleClick) {
      suppressHandleClick = false;
      return;
    }
    if (!state.current) return;
    if (dom.resultSheet.classList.contains("is-open")) closeResultSheet();
    else openResultSheet();
  });

  const isHandleTarget = (target) => !!target.closest("[data-sheet-handle]");

  const shouldIgnoreDragTarget = (target) => {
    if (isHandleTarget(target)) return false;
    return !!target.closest("button, a, input, textarea, select");
  };

  const startDrag = (event, clientY, pointerId, captureTarget) => {
    if (!state.current || shouldIgnoreDragTarget(event.target)) return;
    drag = {
      startY: clientY,
      lastY: clientY,
      wasOpen: dom.resultSheet.classList.contains("is-open"),
      fromHandle: isHandleTarget(event.target),
      captureTarget
    };
    dom.resultSheet.classList.add("is-dragging");
    if (pointerId !== undefined && captureTarget?.setPointerCapture) {
      try {
        captureTarget.setPointerCapture(pointerId);
      } catch {
        // Some browser/device combinations decline pointer capture after a touch handoff.
      }
    }
  };

  const moveDrag = (event, clientY) => {
    if (!drag) return;
    const delta = clientY - drag.startY;
    drag.lastY = clientY;
    if (drag.wasOpen && delta > 6 && dom.resultSheet.scrollTop <= 2) {
      event.preventDefault?.();
    }
    if (drag.wasOpen && delta > 0) {
      dom.resultSheet.style.transform = `translate(-50%, ${Math.min(delta, window.innerHeight * 0.72)}px)`;
    } else if (!drag.wasOpen && delta < 0) {
      dom.resultSheet.style.transform = `translate(-50%, calc(100% - ${Math.min(150, 38 + Math.abs(delta))}px))`;
    }
  };

  const finishDrag = (event, pointerId) => {
    if (!drag) return;
    const delta = drag.lastY - drag.startY;
    if (Math.abs(delta) > 8) {
      suppressHandleClick = true;
      window.setTimeout(() => {
        suppressHandleClick = false;
      }, 420);
    }
    const captureTarget = drag.captureTarget;
    dom.resultSheet.classList.remove("is-dragging");
    dom.resultSheet.style.removeProperty("transform");
    if (drag.wasOpen && delta > 54 && (drag.fromHandle || dom.resultSheet.scrollTop <= 2)) {
      closeResultSheet();
    } else if (!drag.wasOpen && delta < -42 && state.current) {
      openResultSheet();
    }
    if (pointerId !== undefined && captureTarget?.releasePointerCapture) {
      try {
        captureTarget.releasePointerCapture(pointerId);
      } catch {
        // Matching the defensive capture above.
      }
    }
    drag = null;
  };

  if (window.PointerEvent) {
    dom.sheetGrabber.addEventListener("pointerdown", (event) => {
      startDrag(event, event.clientY, event.pointerId, event.currentTarget);
    });
    window.addEventListener("pointermove", (event) => moveDrag(event, event.clientY), { passive: false });
    window.addEventListener("pointerup", (event) => finishDrag(event, event.pointerId));
    window.addEventListener("pointercancel", (event) => finishDrag(event, event.pointerId));
  } else {
    dom.sheetGrabber.addEventListener("touchstart", (event) => {
      const touch = event.touches[0];
      if (touch) startDrag(event, touch.clientY);
    }, { passive: true });
    dom.sheetGrabber.addEventListener("touchmove", (event) => {
      const touch = event.touches[0];
      if (touch) moveDrag(event, touch.clientY);
    }, { passive: false });
    dom.sheetGrabber.addEventListener("touchend", (event) => finishDrag(event));
    dom.sheetGrabber.addEventListener("touchcancel", (event) => finishDrag(event));
  }
}

function settleDice(food) {
  setDiceResult(food);
  sceneKit.diceGroup.rotation.set(-0.35, 0.55, 0.16);
  sceneKit.diceGroup.position.set(0, 0.26, 0.08);
  sceneKit.machine.rotation.set(0, 0, 0);
}

function setDiceResult(food) {
  setDiceFaces(diceGlyphs);
}

function setDiceFaces(icons) {
  if (!sceneKit) return;
  sceneKit.faceMeshes.forEach((face, index) => {
    const material = face.material;
    material.map?.dispose();
    material.map = makeGlyphTexture(icons[index % icons.length], faceColors[index % faceColors.length]);
    material.needsUpdate = true;
  });
}

const faceColors = ["#ffd84d", "#72cf9b", "#ff8d7a", "#9ee6ff", "#d6c2ff", "#ffc7e7"];

function makeFace(glyph, index) {
  const texture = makeGlyphTexture(glyph, faceColors[index % faceColors.length]);
  return new THREE.Mesh(
    new THREE.PlaneGeometry(1.08, 1.08),
    new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      toneMapped: false,
      depthTest: false,
      depthWrite: false
    })
  );
}

function makeCapsule(index) {
  const colors = [0xffd84d, 0x72cf9b, 0xff9fc8, 0x9ee6ff, 0xff8d7a, 0xc7f464];
  const material = new THREE.MeshPhysicalMaterial({
    color: colors[index % colors.length],
    roughness: 0.18,
    metalness: 0,
    transparent: true,
    opacity: 0.68,
    transmission: 0.22,
    thickness: 0.22,
    clearcoat: 1
  });
  const group = new THREE.Group();
  const capsule = new THREE.Mesh(new THREE.SphereGeometry(0.13 + (index % 2) * 0.012, 24, 16), material);
  const band = new THREE.Mesh(
    new THREE.TorusGeometry(0.145 + (index % 2) * 0.012, 0.009, 8, 32),
    new THREE.MeshBasicMaterial({ color: 0x171615, transparent: true, opacity: 0.28 })
  );
  band.rotation.x = Math.PI / 2;
  group.add(capsule, band);
  group.scale.setScalar(0.9 + (index % 3) * 0.08);
  group.renderOrder = 2;
  group.userData.bodyMaterial = material;
  return group;
}

function makeGlyphTexture(glyph, bg) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 256, 256);
  ctx.save();
  ctx.shadowColor = "rgba(23, 22, 21, 0.28)";
  ctx.shadowBlur = 18;
  ctx.shadowOffsetY = 8;
  ctx.fillStyle = "#fffaf0";
  ctx.beginPath();
  ctx.roundRect(28, 28, 200, 200, 42);
  ctx.fill();
  ctx.shadowColor = "transparent";
  ctx.lineWidth = 9;
  ctx.strokeStyle = "#171615";
  ctx.stroke();
  ctx.fillStyle = "#171615";
  ctx.beginPath();
  ctx.roundRect(48, 48, 160, 160, 34);
  ctx.fill();
  ctx.strokeStyle = bg;
  ctx.lineWidth = 7;
  ctx.stroke();
  ctx.fillStyle = bg;
  ctx.beginPath();
  ctx.arc(128, 120, 58, 0, Math.PI * 2);
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#171615";
  ctx.stroke();
  ctx.restore();
  ctx.fillStyle = bg;
  [[64, 64], [192, 64], [64, 192], [192, 192]].forEach(([x, y]) => {
    ctx.beginPath();
    ctx.moveTo(x, y - 12);
    ctx.lineTo(x + 5, y - 4);
    ctx.lineTo(x + 14, y);
    ctx.lineTo(x + 5, y + 4);
    ctx.lineTo(x, y + 12);
    ctx.lineTo(x - 5, y + 4);
    ctx.lineTo(x - 14, y);
    ctx.lineTo(x - 5, y - 4);
    ctx.closePath();
    ctx.fill();
  });
  ctx.strokeStyle = "rgba(255, 250, 240, 0.58)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(128, 120, 76, -0.12 * Math.PI, 1.22 * Math.PI);
  ctx.stroke();
  ctx.save();
  ctx.translate(128, 118);
  ctx.rotate(-0.04);
  ctx.shadowColor = "rgba(255, 250, 240, 0.42)";
  ctx.shadowBlur = 8;
  ctx.font = "950 92px ui-rounded, \"SF Pro Rounded\", \"PingFang SC\", \"Hiragino Sans GB\", sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.lineWidth = 8;
  ctx.strokeStyle = "#fffaf0";
  ctx.strokeText(glyph, 0, 0);
  ctx.fillStyle = "#171615";
  ctx.fillText(glyph, 0, 0);
  ctx.restore();
  ctx.fillStyle = "#fffaf0";
  ctx.font = "800 18px ui-rounded, sans-serif";
  ctx.fillText("DICE", 128, 190);
  ctx.fillStyle = bg;
  ctx.beginPath();
  ctx.arc(103, 190, 3, 0, Math.PI * 2);
  ctx.arc(153, 190, 3, 0, Math.PI * 2);
  ctx.fill();
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function makePlaqueTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 180;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#171615";
  ctx.beginPath();
  ctx.roundRect(14, 18, 484, 132, 36);
  ctx.fill();
  ctx.strokeStyle = "#fffaf0";
  ctx.lineWidth = 10;
  ctx.stroke();
  ctx.fillStyle = "#ffd84d";
  ctx.font = "950 62px ui-rounded, \"SF Pro Rounded\", sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("EAT?", 256, 86);
  ctx.fillStyle = "#fffaf0";
  ctx.beginPath();
  ctx.arc(94, 86, 8, 0, Math.PI * 2);
  ctx.arc(418, 86, 8, 0, Math.PI * 2);
  ctx.fill();
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function foodGlyph(food) {
  const name = `${food.name || ""}${food.category || ""}${(food.tags || []).join("")}`;
  if (/隐藏/.test(name)) return "签";
  if (/甜|奶茶|冰淇淋|蛋糕|甜甜圈|酸奶/.test(name)) return "甜";
  if (/素|蔬|沙拉|轻食|谷物|豆腐/.test(name)) return "素";
  if (/辣|麻辣|泡菜|叻沙|咖喱|炒年糕/.test(name)) return "辛";
  if (/锅|汤|粥|关东煮|火锅|部队锅/.test(name)) return "汤";
  if (/面|粉|拉面|乌冬|意面|河粉/.test(name)) return "面";
  if (/饭|便当|丼|拌饭|盖浇|炒饭|鸡饭|鳗鱼/.test(name)) return "饭";
  if (/寿司|饭团/.test(name)) return "和";
  if (/炸|天妇罗|薯|脆/.test(name)) return "脆";
  if (/烤|烧|串|牛排|肉/.test(name)) return "烤";
  if (/卷|煎饼|三明治|汉堡|披萨|麦当劳/.test(name)) return "快";
  return "味";
}

function foodIcon(food) {
  const name = `${food.name || ""}${food.category || ""}${(food.tags || []).join("")}`;
  if (/奶茶/.test(name)) return "🧋";
  if (/冰淇淋/.test(name)) return "🍦";
  if (/蛋糕/.test(name)) return "🍰";
  if (/甜甜圈/.test(name)) return "🍩";
  if (/寿司/.test(name)) return "🍣";
  if (/饭团/.test(name)) return "🍙";
  if (/饺|小笼/.test(name)) return "🥟";
  if (/意面|意大利/.test(name)) return "🍝";
  if (/火锅|锅|汤|关东煮|粥/.test(name)) return "🍲";
  if (/面|粉|拉面|乌冬|叻沙/.test(name)) return "🍜";
  if (/咖喱|饭|便当|丼|拌饭/.test(name)) return "🍛";
  if (/汉堡|麦当劳/.test(name)) return "🍔";
  if (/炸鸡|鸡/.test(name)) return "🍗";
  if (/披萨/.test(name)) return "🍕";
  if (/天妇罗|虾|炸物/.test(name)) return "🍤";
  if (/沙拉|轻食|谷物/.test(name)) return "🥗";
  if (/串|烧烤|烤肠/.test(name)) return "🍢";
  if (/卷|煎饼|沙威玛/.test(name)) return "🌯";
  if (/鱼/.test(name)) return "🐟";
  if (/牛排|烤肉|肉/.test(name)) return "🥩";
  if (/三明治/.test(name)) return "🥪";
  return "🍽️";
}

function findFood(id) {
  return allFoods.find((food) => food.id === id);
}

function toggleSetValue(set, value) {
  if (set.has(value)) set.delete(value);
  else set.add(value);
}

function setControlsDisabled(disabled) {
  const dynamicControls = document.querySelectorAll(
    "[data-filter], [data-category-filter], [data-quick-filter]"
  );
  [
    ...dom.rollTriggers,
    ...dynamicControls,
    dom.rollAgain,
    dom.share
  ].forEach((button) => {
    if (button) button.disabled = disabled;
  });
}

function setMachineStatus(message) {
  dom.machineStatus.textContent = message;
}

function openDialog(dialog) {
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}

function closeDialog(dialog) {
  if (typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
}

function showToast(message) {
  window.clearTimeout(state.toastTimer);
  dom.toast.textContent = message;
  dom.toast.classList.add("is-visible");
  state.toastTimer = window.setTimeout(() => {
    dom.toast.classList.remove("is-visible");
  }, 2400);
}

function initAssetScene() {
  sceneKit = {
    kind: "asset-machine",
    rollFaceTimer: null,
    settleTimer: null,
    settlePose: 0,
    threeReady: false
  };
  dom.sceneShell?.classList.add("is-asset-machine");
  setAssetDiceFaces(diceGlyphs);
  try {
    initGlassToyScene();
  } catch (error) {
    console.warn("3D toy scene could not start", error);
  }
}

function initGlassToyScene() {
  const canvas = dom.machineCanvas;
  if (!canvas || !sceneKit) return;
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 20);
  camera.position.set(0, 0.02, 4.9);

  const root = new THREE.Group();
  root.rotation.set(-0.04, 0.02, 0);
  scene.add(root);

  const ambient = new THREE.HemisphereLight(0xffffff, 0xffd7a6, 2.25);
  scene.add(ambient);
  const key = new THREE.DirectionalLight(0xffffff, 3.8);
  key.position.set(2.3, 3.7, 4.6);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xb7f3ff, 1.35);
  fill.position.set(-3.1, 1.2, 2.5);
  scene.add(fill);
  const rim = new THREE.DirectionalLight(0xfff0b8, 1.45);
  rim.position.set(-2.4, 2.4, -1.3);
  scene.add(rim);
  const warm = new THREE.PointLight(0xffd84d, 0.8, 5.5);
  warm.position.set(-1.4, -0.36, 2.2);
  scene.add(warm);

  const diceGroup = createGlassDice();
  diceGroup.position.set(0, 0.02, 0.02);
  diceGroup.rotation.set(-0.48, -0.64, 0.16);
  root.add(diceGroup);

  const tokenGroup = new THREE.Group();
  root.add(tokenGroup);

  Object.assign(sceneKit, {
    renderer,
    scene,
    camera,
    threeRoot: root,
    diceGroup,
    tokenGroup,
    preferenceTokens: [],
    rolling: null,
    lastTime: performance.now(),
    diceTargetRotation: new THREE.Euler(-0.48, -0.64, 0.16),
    threeReady: true
  });

  dom.sceneShell?.classList.add("is-webgl-ready");
  syncGlassPreferenceTokens();
  resizeGlassToyScene();
  window.addEventListener("resize", resizeGlassToyScene);
  requestAnimationFrame(animateGlassToyScene);
}

function createGlassDice() {
  const group = new THREE.Group();
  const body = new THREE.Mesh(
    new RoundedBoxGeometry(0.78, 0.78, 0.78, 14, 0.17),
    new THREE.MeshPhysicalMaterial({
      color: 0xfffdf6,
      roughness: 0.2,
      metalness: 0,
      transmission: 0,
      thickness: 0.16,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      emissive: 0xfff1d6,
      emissiveIntensity: 0.035,
      iridescence: 0.08,
      iridescenceIOR: 1.35
    })
  );
  body.renderOrder = 2;
  group.add(body);

  const blackPipMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x292521,
    roughness: 0.24,
    metalness: 0.02,
    clearcoat: 1,
    clearcoatRoughness: 0.1
  });
  const redPipMaterial = blackPipMaterial.clone();
  redPipMaterial.color.set(0xe64032);
  const pipGeometry = new THREE.CircleGeometry(0.05, 44);
  [
    { value: 1, normal: [0, 0, 1], u: [1, 0, 0], v: [0, 1, 0], rot: [0, 0, 0] },
    { value: 6, normal: [0, 0, -1], u: [-1, 0, 0], v: [0, 1, 0], rot: [0, Math.PI, 0] },
    { value: 2, normal: [1, 0, 0], u: [0, 0, -1], v: [0, 1, 0], rot: [0, Math.PI / 2, 0] },
    { value: 5, normal: [-1, 0, 0], u: [0, 0, 1], v: [0, 1, 0], rot: [0, -Math.PI / 2, 0] },
    { value: 3, normal: [0, 1, 0], u: [1, 0, 0], v: [0, 0, -1], rot: [-Math.PI / 2, 0, 0] },
    { value: 4, normal: [0, -1, 0], u: [1, 0, 0], v: [0, 0, 1], rot: [Math.PI / 2, 0, 0] }
  ].forEach((face) => {
    addDicePips(group, face, pipGeometry, isRedDiceFace(face.value) ? redPipMaterial : blackPipMaterial);
  });

  return group;
}

function isRedDiceFace(value) {
  return value === 1 || value === 4;
}

function addDicePips(group, face, geometry, material) {
  const offset = 0.397;
  const gap = 0.172;
  const spots = {
    1: [[0, 0]],
    2: [[-gap, -gap], [gap, gap]],
    3: [[-gap, -gap], [0, 0], [gap, gap]],
    4: [[-gap, -gap], [gap, -gap], [-gap, gap], [gap, gap]],
    5: [[-gap, -gap], [gap, -gap], [0, 0], [-gap, gap], [gap, gap]],
    6: [[-gap, -gap], [gap, -gap], [-gap, 0], [gap, 0], [-gap, gap], [gap, gap]]
  }[face.value];
  spots.forEach(([x, y]) => {
    const pip = new THREE.Mesh(geometry, material);
    pip.position.set(
      face.normal[0] * (offset + 0.006) + face.u[0] * x + face.v[0] * y,
      face.normal[1] * (offset + 0.006) + face.u[1] * x + face.v[1] * y,
      face.normal[2] * (offset + 0.006) + face.u[2] * x + face.v[2] * y
    );
    pip.rotation.set(...face.rot);
    pip.renderOrder = 12;
    group.add(pip);
  });
}

function currentPreferenceTokens() {
  const categoryTokens = [...state.selectedCategories].map((category) => ({
    type: "category",
    label: cuisineLabel(category),
    tone: cuisineTone(category)
  }));
  const moodTokens = filters
    .filter((filter) => state.selectedFilters.has(filter.id))
    .map((filter) => ({
      type: "mood",
      label: filter.label,
      tone: filter.tone
    }));
  return [...categoryTokens, ...moodTokens].slice(0, 10);
}

const glassTokenSlots = [
  { x: -1.02, y: 0.1, z: 0.34, s: 1.08 },
  { x: 1.02, y: 0.14, z: 0.34, s: 1.1 },
  { x: -0.62, y: 0.54, z: 0.16, s: 0.92 },
  { x: 0.62, y: 0.54, z: 0.16, s: 0.92 },
  { x: -1.08, y: 0.34, z: 0.04, s: 0.76 },
  { x: 1.08, y: 0.34, z: 0.04, s: 0.76 },
  { x: -0.54, y: -0.48, z: 0.24, s: 0.74 },
  { x: 0.56, y: -0.46, z: 0.24, s: 0.74 },
  { x: -0.12, y: 0.7, z: -0.04, s: 0.7 },
  { x: 0.14, y: -0.64, z: 0.08, s: 0.68 }
];

function syncGlassPreferenceTokens() {
  if (!sceneKit?.threeReady || !sceneKit.tokenGroup) return;
  const tokens = currentPreferenceTokens();
  sceneKit.preferenceTokens.forEach((mesh) => sceneKit.tokenGroup.remove(mesh));
  sceneKit.preferenceTokens = tokens.map((token, index) => {
    const mesh = token.type === "mood" ? createCrystalStar(token.tone) : createCrystalBubble(token.tone);
    const slot = glassTokenSlots[index % glassTokenSlots.length];
    mesh.userData = {
      type: token.type,
      index,
      baseX: slot.x,
      baseY: slot.y,
      baseZ: slot.z,
      baseScale: slot.s,
      baseAngle: -0.9 + index * 0.74,
      speed: 0.28 + (index % 4) * 0.055,
      spin: 0.46 + (index % 5) * 0.09
    };
    mesh.renderOrder = 8 + index;
    mesh.scale.setScalar(slot.s);
    sceneKit.tokenGroup.add(mesh);
    return mesh;
  });
}

function createCrystalBubble(tone) {
  const group = new THREE.Group();
  const color = new THREE.Color(tone);
  const pale = color.clone().lerp(new THREE.Color(0xffffff), 0.16);
  const material = new THREE.MeshPhysicalMaterial({
    color: pale,
    roughness: 0.16,
    metalness: 0.01,
    transparent: true,
    opacity: 0.96,
    transmission: 0.04,
    thickness: 0.16,
    clearcoat: 1,
    clearcoatRoughness: 0.05,
    iridescence: 0.18,
    depthWrite: false
  });
  const gem = new THREE.Mesh(new THREE.IcosahedronGeometry(0.19, 2), material);
  gem.rotation.set(0.18, -0.44, 0.24);
  gem.renderOrder = 8;

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.092, 1),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.58,
      depthWrite: false
    })
  );
  core.renderOrder = 9;

  const glint = new THREE.Mesh(
    new THREE.CircleGeometry(0.046, 20),
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.88,
      side: THREE.DoubleSide,
      depthWrite: false
    })
  );
  glint.position.set(-0.055, 0.062, 0.13);
  glint.rotation.set(-0.15, -0.28, -0.2);
  glint.scale.set(1.55, 0.74, 1);
  glint.renderOrder = 10;

  group.add(gem, core, glint);
  return group;
}

function createCrystalStar(tone) {
  const color = new THREE.Color(tone);
  const faceColor = color.clone().lerp(new THREE.Color(0xffffff), 0.02);
  const material = new THREE.MeshPhysicalMaterial({
    color: faceColor,
    roughness: 0.16,
    metalness: 0.04,
    transparent: true,
    opacity: 0.98,
    transmission: 0,
    thickness: 0.06,
    clearcoat: 1,
    clearcoatRoughness: 0.07,
    iridescence: 0.12,
    depthWrite: false
  });
  const group = new THREE.Group();
  const star = new THREE.Mesh(makeSparkleGeometry(), material);
  star.rotation.set(0.08, -0.12, 0.12);
  star.renderOrder = 8;

  const glint = new THREE.Mesh(
    new THREE.CircleGeometry(0.02, 16),
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.76,
      side: THREE.DoubleSide,
      depthWrite: false
    })
  );
  glint.position.set(-0.034, 0.058, 0.044);
  glint.scale.set(1.8, 0.72, 1);
  glint.renderOrder = 10;

  group.add(star, glint);
  return group;
}

function makeSparkleGeometry(scale = 1) {
  const shape = new THREE.Shape();
  const outer = 0.275 * scale;
  const inner = 0.067 * scale;
  [
    [0, -outer],
    [inner, -inner],
    [outer * 0.74, 0],
    [inner, inner],
    [0, outer],
    [-inner, inner],
    [-outer * 0.74, 0],
    [-inner, -inner]
  ].forEach(([x, y], index) => {
    if (index === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  });
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.04 * scale,
    bevelEnabled: true,
    bevelSize: 0.012 * scale,
    bevelThickness: 0.01 * scale,
    bevelSegments: 2
  });
  geometry.center();
  return geometry;
}

function resizeGlassToyScene() {
  if (!sceneKit?.threeReady || !dom.machineCanvas) return;
  const rect = dom.machineCanvas.getBoundingClientRect();
  const width = Math.max(1, rect.width);
  const height = Math.max(1, rect.height);
  sceneKit.renderer.setSize(width, height, false);
  sceneKit.camera.aspect = width / height;
  sceneKit.camera.position.z = width < 270 ? 5.15 : 4.85;
  sceneKit.camera.updateProjectionMatrix();
}

function animateGlassToyScene(now) {
  if (!sceneKit?.threeReady) return;
  const delta = Math.min(0.035, (now - sceneKit.lastTime) / 1000 || 0.016);
  sceneKit.lastTime = now;
  const t = now / 1000;
  const rolling = sceneKit.rolling;
  if (rolling) {
    const progress = Math.min(1, (now - rolling.start) / rolling.duration);
    const energy = Math.pow(1 - progress, 0.34);
    sceneKit.diceGroup.rotation.x += delta * (8.5 + energy * 31);
    sceneKit.diceGroup.rotation.y += delta * (10.5 + energy * 34);
    sceneKit.diceGroup.rotation.z += delta * (5.8 + energy * 19);
    sceneKit.diceGroup.position.x = Math.sin(t * 16.5) * 0.28 * energy;
    sceneKit.diceGroup.position.y = 0.03 + Math.abs(Math.sin(t * 19)) * 0.26 * energy;
    sceneKit.diceGroup.position.z = Math.cos(t * 14) * 0.2 * energy;
    sceneKit.tokenGroup.rotation.y += delta * (2.4 + energy * 5.6);
    sceneKit.tokenGroup.rotation.z = Math.sin(t * 12) * 0.08 * energy;
  } else {
    sceneKit.diceGroup.rotation.x += (sceneKit.diceTargetRotation.x - sceneKit.diceGroup.rotation.x) * 0.08;
    sceneKit.diceGroup.rotation.y += (sceneKit.diceTargetRotation.y - sceneKit.diceGroup.rotation.y) * 0.08;
    sceneKit.diceGroup.rotation.z += (sceneKit.diceTargetRotation.z - sceneKit.diceGroup.rotation.z) * 0.08;
    sceneKit.diceGroup.position.x += (0 - sceneKit.diceGroup.position.x) * 0.08;
    sceneKit.diceGroup.position.y += (0.02 + Math.sin(t * 1.35) * 0.025 - sceneKit.diceGroup.position.y) * 0.08;
    sceneKit.diceGroup.position.z += (0.02 - sceneKit.diceGroup.position.z) * 0.08;
    sceneKit.tokenGroup.rotation.y += delta * 0.22;
    sceneKit.tokenGroup.rotation.z = Math.sin(t * 0.6) * 0.012;
  }

  sceneKit.preferenceTokens.forEach((token) => {
    const data = token.userData;
    const energy = rolling ? Math.pow(1 - Math.min(1, (now - rolling.start) / rolling.duration), 0.38) : 0;
    const angle = data.baseAngle + t * (data.speed + energy * 1.7);
    const orbit = energy * (0.14 + (data.index % 3) * 0.03);
    token.position.set(
      data.baseX + Math.cos(angle) * orbit + Math.sin(t * 1.7 + data.index) * 0.025,
      data.baseY + Math.sin(t * 1.9 + data.index) * (0.045 + energy * 0.16),
      data.baseZ + Math.sin(angle) * orbit * 0.56
    );
    if (data.type === "mood") {
      token.rotation.set(
        0.1 + Math.sin(t * 0.72 + data.index) * 0.08,
        Math.sin(t * 0.64 + data.index) * 0.28,
        t * data.spin * (rolling ? 2.5 : 0.34) + data.index * 0.42
      );
    } else {
      token.rotation.set(
        t * data.spin * (rolling ? 2.4 : 0.55),
        angle + Math.PI / 2,
        Math.sin(t + data.index) * 0.28
      );
    }
    token.scale.setScalar(data.baseScale * ((rolling ? 1.04 : 1) + Math.sin(t * 1.6 + data.index) * 0.035));
  });

  sceneKit.renderer.render(sceneKit.scene, sceneKit.camera);
  requestAnimationFrame(animateGlassToyScene);
}

function startAssetSceneRoll(food, duration) {
  if (!sceneKit) initAssetScene();
  window.clearInterval(sceneKit.rollFaceTimer);
  window.clearTimeout(sceneKit.settleTimer);
  dom.sceneShell?.classList.remove("is-settled");
  dom.sceneShell?.classList.add("is-rolling");
  setAssetDiceFaces(diceGlyphs);
  if (sceneKit?.threeReady) {
    sceneKit.rolling = { start: performance.now(), duration, food };
  }

  sceneKit.settleTimer = window.setTimeout(() => {
    settleAssetDice(food);
  }, Math.max(240, duration - 160));
}

function settleAssetDice(food) {
  if (!sceneKit) return;
  window.clearInterval(sceneKit.rollFaceTimer);
  sceneKit.rollFaceTimer = null;
  sceneKit.settlePose = (sceneKit.settlePose + 1) % 4;
  dom.domDice?.style.setProperty("--settle-x", `${-25 - sceneKit.settlePose * 2}deg`);
  dom.domDice?.style.setProperty("--settle-y", `${-44 - sceneKit.settlePose * 10}deg`);
  dom.domDice?.style.setProperty("--settle-z", `${10 - sceneKit.settlePose * 3}deg`);
  if (sceneKit.threeReady) {
    const poses = [
      [-0.48, -0.64, 0.16],
      [-0.34, -1.78, -0.09],
      [-1.08, -0.38, 0.22],
      [-0.62, -2.32, 0.1]
    ];
    const pose = poses[sceneKit.settlePose % poses.length];
    sceneKit.diceTargetRotation.set(...pose);
    sceneKit.rolling = null;
  }
  setAssetDiceResult(food);
  dom.sceneShell?.classList.remove("is-rolling");
  dom.sceneShell?.classList.add("is-settled");
}

function setAssetDiceResult(food) {
  setAssetDiceFaces(diceGlyphs);
  if (food?.category) {
    dom.sceneShell?.style.setProperty("--result-tone", resultTone(food));
  }
}

function setAssetDiceFaces(icons) {
  dom.domDiceFaces.forEach((face, index) => {
    const value = Number(icons[index % icons.length]) || ((index % 6) + 1);
    face.textContent = "";
    face.dataset.value = String(value);
    face.innerHTML = buildPips(value);
    face.style.setProperty("--pip-color", isRedDiceFace(value) ? "#e64032" : "#292521");
  });
}

function buildPips(value) {
  const active = {
    1: [5],
    2: [1, 9],
    3: [1, 5, 9],
    4: [1, 3, 7, 9],
    5: [1, 3, 5, 7, 9],
    6: [1, 3, 4, 6, 7, 9]
  }[value] || [5];
  return Array.from({ length: 9 }, (_, index) => (
    `<i class="dice-pip${active.includes(index + 1) ? " is-on" : ""}" aria-hidden="true"></i>`
  )).join("");
}

boot();
