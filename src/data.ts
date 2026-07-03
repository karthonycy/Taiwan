import {
  ProjectBasicInfo,
  HighlightCard,
  MarketMetric,
  BusinessPhase,
  BudgetCategory,
  RevenueForecastItem,
  ReturnTier,
  Milestone
} from './types';

export const projectBasicInfo: ProjectBasicInfo = {
  name: "《台湾！台湾！》AIGC史诗级历史精品短剧",
  format: "单元剧表现形式",
  episodesCount: 15, // Let's say 15-20 episodes to fit the total duration of 120 minutes with 6-8 mins per episode.
  episodeDuration: "6-8分钟/集",
  totalDuration: "共120分钟",
  historicalBackground: "1884年中法战争。项目重点聚焦内陆中华儿女与台湾同胞血融一体，共同为捍卫台湾主权、抗击外敌入侵而浴血奋战的感人事迹。",
  positioning: "文化历史剧气质 + 爱国情绪表达 + 短剧节奏与传播效率",
  targetAudience: "主流短剧平台用户、历史题材观众、海外华语/泛亚洲内容市场",
  slogan: "用最先锋的影像艺术，抚慰真挚的家国情怀；从楚地乡愁到高山归心，AIGC技术让我们平权了效率，而历史的共振则是这部作品不朽的灵魂……"
};

export const highlights: HighlightCard[] = [
  {
    id: "subject",
    number: "01",
    title: "题材亮点",
    items: [
      "台湾保卫战题材极其稀缺，填补市场空白",
      "兼具深刻的历史意义与强烈的家国情绪价值",
      "天然具备极高的社会传播性与公共话题热度"
    ],
    icon: "Shield"
  },
  {
    id: "production",
    number: "02",
    title: "制作亮点",
    items: [
      "横屏电影级审美，区别于传统竖屏微短剧的低成本感",
      "独创“AIGC场景渲染 + 真人数字分身 + 虚拟棚实拍”混合制作模式",
      "大幅缩短制作周期，实现极致的效率提升与成本优化"
    ],
    icon: "Film"
  },
  {
    id: "team",
    number: "03",
    title: "团队亮点",
    items: [
      "依托湖南广电体系的强大媒体与行业资源支撑",
      "导演、编剧、后期、宣发全流程核心能力齐备且经验丰富",
      "深谙各大主流平台的流量密码与内容传播逻辑"
    ],
    icon: "Users"
  },
  {
    id: "ip",
    number: "04",
    title: "IP亮点",
    items: [
      "短剧形态灵活快速，能在短时间内低成本验证市场反馈",
      "后续可无缝延展为院线电影、高端纪录片或IP衍生矩阵",
      "具备长期的品牌资产属性与IP商业化延展价值"
    ],
    icon: "Sparkles"
  }
];

export const marketValidation: MarketMetric[] = [
  {
    label: "5亿+",
    value: "5,0000,0000+",
    description: "全球累计播放量"
  },
  {
    label: "TOP 100",
    value: "上线1天",
    description: "多平台热榜冲榜速度"
  },
  {
    label: "78%",
    value: "78%",
    description: "海外及华人市场播放占比"
  },
  {
    label: "8.5",
    value: "8.5",
    description: "豆瓣高分口碑见证"
  }
];

export const businessPhases: BusinessPhase[] = [
  {
    phase: "01",
    title: "阶段一：短剧破局",
    description: "快速验证与口碑积累",
    icon: "Tv",
    details: [
      "利用AIGC技术在极短周期内完成精品短剧创作",
      "上线抖音、快手、腾讯等主流微短剧平台及出海平台",
      "验证核心题材的市场反馈，迅速积累第一波忠实流量与高分口碑"
    ]
  },
  {
    phase: "02",
    title: "阶段二：院线爆发",
    description: "IP价值跨越式升级",
    icon: "Clapperboard",
    details: [
      "将短剧积累的高清AIGC素材、数字资产和流量热度反哺电影开发",
      "启动原规划的院线电影《台湾！台湾！》大银幕项目",
      "实现从网络微短剧向主流头部院线电影的价值跃升"
    ]
  },
  {
    phase: "03",
    title: "阶段三：出海拓展",
    description: "文化出海与版权变现",
    icon: "Globe",
    details: [
      "将短剧译制为多语言版本，覆盖东南亚、欧美及全球华语圈",
      "独创性授权至Netflix、Viki、YouTube Premium等海外主流流媒体",
      "通过海外发行与高额独家版权费获取极高利润弹性"
    ]
  },
  {
    phase: "04",
    title: "阶段四：衍生长尾",
    description: "超级IP生态圈闭环",
    icon: "Boxes",
    details: [
      "开发同名轻度历史互动游戏、精品剧本杀和文创周边",
      "与地方文旅景区合作打造“中法战争台湾保卫战”虚拟数字实景互动体验",
      "打造可持续运营的长期IP品牌资产，享受衍生长尾收益"
    ]
  }
];

export const budgetCategories: BudgetCategory[] = [
  {
    name: "制作费用",
    amount: 50,
    percentage: 50,
    description: "导演、编剧、AI算力、棚拍搭建与后期特效合成等核心生产支出",
    details: [
      "导演与主创酬金",
      "剧本打磨与历史顾问指导",
      "AI算力租用与AI模型精调、数字资产建模",
      "真人演员虚拟绿幕/LED影棚实拍",
      "后期剪辑、特效合成、音效设计与配乐混音"
    ]
  },
  {
    name: "推广费用",
    amount: 34,
    percentage: 34,
    description: "项目宣发预热、主流平台合作及全渠道多媒体传播扩散",
    details: [
      "首播上线宣发启动金",
      "主流短剧平台引流推广（DOU+ / 磁力金牛等投流）",
      "海外宣发渠道对接与译制配音费",
      "新媒体矩阵内容预热与KOL历史话题营销"
    ]
  },
  {
    name: "其他/运营",
    amount: 16,
    percentage: 16,
    description: "保障项目落地执行运营、团队商务差旅及风险备用缓冲",
    details: [
      "项目常态化落地执行与法务版权确权支出",
      "主创及商务团队差旅与平台公关对接",
      "项目突发事件备用缓冲基金"
    ]
  }
];

export const revenueForecasts: RevenueForecastItem[] = [
  {
    source: "大陆发行与首播",
    amount: "150 - 200万",
    percentage: 15,
    description: "大陆头部平台的版权买断、独家首播版权授权或联合承制费"
  },
  {
    source: "平台广告与分账",
    amount: "150 - 200万",
    percentage: 15,
    description: "主流短剧平台的流量播放分账、贴片广告分账及会员充值分润"
  },
  {
    source: "海外多语言授权",
    amount: "≈ 670万",
    percentage: 60,
    description: "海外华人市场、东南亚流媒体平台及国际主流流媒体（如Netflix等）的版权买断与销售"
  },
  {
    source: "文旅及补贴奖励",
    amount: "10 - 30万",
    percentage: 10,
    description: "湖南/福建及台湾相关题材的优秀网络视听作品专项扶持基金与地方文化补贴"
  }
];

export const returnTiers: ReturnTier[] = [
  {
    range: "0 - 150万",
    investorRatio: 70,
    producerRatio: 30,
    phaseName: "快速回本期",
    description: "项目上线后取得的前150万收益，投资方将分得70%，直至本金完全回收并获得快速盈余。"
  },
  {
    range: "151 - 250万",
    investorRatio: 50,
    producerRatio: 50,
    phaseName: "平稳增长期",
    description: "收益进入151万至250万区间时，投资方与出品方按 5:5 均等分享利润，实现收益稳步攀升。"
  },
  {
    range: "251 - 500万",
    investorRatio: 30,
    producerRatio: 70,
    phaseName: "长尾盈利期",
    description: "收益进入251万至500万区间，鼓励优质内容创作，出品方分得70%，资方保留30%的可观长尾收益。"
  },
  {
    range: "500万以上",
    investorRatio: 20,
    producerRatio: 80,
    phaseName: "超额爆发期",
    description: "收益突破500万时，投资方享受20%的超额分成，随IP体量的爆发获得巨大的投资乘数效应。"
  }
];

export const milestones: Milestone[] = [
  {
    id: "m1",
    title: "融资与版权锁定",
    timeline: "启动首月",
    description: "完成初始资金招募，锁定核心版权与主创团队",
    details: [
      "完成100万人民币融资意向与协议签署",
      "完成《台湾！台湾！》微短剧与院线电影剧本版权确权",
      "组建核心导演、编剧团队，锁定AI技术研发负责人"
    ]
  },
  {
    id: "m2",
    title: "剧本精打细磨与AIGC风格测试",
    timeline: "启动第2个月",
    description: "完成剧本大纲定稿，跑通AIGC视频生成及渲染测试",
    details: [
      "完成6-8分钟/集、共15集剧本定稿，通过历史专家评审",
      "完成核心战争场景、战船、清代台湾港口的AI原画生成与Lora模型微调",
      "完成首期AIGC视频渲染Demo，确定整体横屏电影级视觉色调风格"
    ]
  },
  {
    id: "m3",
    title: "真人数字影棚实拍与AI合成制作",
    timeline: "启动第3-4个月",
    description: "演员实拍入棚，配合AI技术完成全片高效渲染与特效合成",
    details: [
      "组织专业演员进行虚拟LED绿幕影棚实拍，捕捉高清微表情",
      "将实拍高清人脸数字融合进AIGC渲染的大型海战、历史街景及战争烟火背景中",
      "进行后期精细化校色、杜比环绕音效混录、中英双语字幕译制"
    ]
  },
  {
    id: "m4",
    title: "全网上线发布与海外授权交付",
    timeline: "启动第5个月及以后",
    description: "主流平台首播上线，展开全网投流与海外版权销售",
    details: [
      "在国内主流视频/短剧平台独家或联合首播上线，开启付费点播与流量分成",
      "同步展开海外流媒体（Viki, YouTube Premium等）多语言译制版本的上架交付",
      "启动院线电影版本的IP开发论证，启动长尾IP生态运营"
    ]
  }
];

export const riskControls = [
  {
    type: "制作风险",
    control: "采用AIGC技术结合真人实拍。AIGC技术极大缩减了需要庞大实景搭建、群演排练的大规模海战和历史街景渲染费用，将整体预算牢牢控制在100万以内，且效率提升数倍，几乎不存在传统影剧超支停拍的风险。"
  },
  {
    type: "发行风险",
    control: "依托湖南广电体系资源，在制作中期便开启与腾讯视频、优酷、抖音、快手等国内头部平台的版权沟通；同时提前对接专业海外发行渠道，以平台底价版权授权或联合承制方案，构建最稳固的保底回款线。"
  },
  {
    type: "市场风险",
    control: "坚持“短剧验证市场，电影放大价值”的路径。先用100万的轻量预算在微短剧赛道进行商业化与口碑试水，根据市场真实付费数据和播放画像，再行决定院线电影项目的追加投入，极大规避了一次性大额投资的试错成本。"
  }
];

export const exitPaths = [
  {
    title: "全路径回款分成",
    desc: "项目所获的大陆版权费、平台播放分账、海外授权费以及文旅补贴将统一进入回款账户，由第三方律所/信托共管，在第一时间无延迟地向投资人加速给付投资本金与收益，直至完全退出。"
  },
  {
    title: "IP续作及电影版权优先权",
    desc: "当微短剧版表现达到预期，投资人享有优先将资金/分润转为后续《台湾！台湾！》院线电影版、互动游戏版或IP续集版股权的权利，以更优惠的条件继续享有顶级IP的长尾升值溢价。"
  },
  {
    title: "灵活的股权/分红退出",
    desc: "投资人可在取得预定收益（例如2-3倍回报）后，选择以约定的溢价估值由出品方“潮生纪”或其他接盘方进行现金一次性回购，实现灵活自主的财务安全退出。"
  }
];
