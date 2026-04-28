export type NavItem = {
  id: string;
  label: string;
};

export type Stat = {
  value: string;
  label: string;
  description: string;
  emphasis: string;
};

export type BackgroundCard = {
  title: string;
  short: string;
  details: string;
  accent: string;
};

export type GoalMetric = {
  value: string;
  label: string;
  description: string;
};

export type AudienceGroup = {
  name: string;
  description: string;
  accent: string;
};

export type ProjectPhase = {
  period: string;
  title: string;
  description: string;
};

export type BudgetUse = {
  title: string;
  description: string;
};

export type ServiceStep = {
  title: string;
  description: string;
};

export type TimelineItem = {
  id: string;
  period: string;
  title: string;
  summary: string;
  status: string;
  priority?: "highest" | "high" | "normal";
  location?: string;
  format?: string;
  tasks: string[];
  tags: string[];
  highlight: string;
  scriptQuestions?: string[];
  outreachPaths?: string[];
};

export type BoothTaskGroup = {
  code: string;
  title: string;
  owner: string;
  statuses: string[];
  duties: string[];
  priority?: "highest" | "active" | "normal";
};

export type BoothLoopPhase = {
  phase: string;
  tasks: string[];
};

export type IntakeStep = {
  title: string;
  description: string;
  owner: string;
  caution: string;
};

export type Team = {
  name: string;
  mission: string;
  duties: string[];
  recentTask: string;
  suggestedPeople: string;
  tone: string;
};

export type ActionItem = {
  title: string;
  owner: string;
  description: string;
};

export type NextActionGroup = {
  title: string;
  accent: string;
  items: string[];
};

export const navItems: NavItem[] = [
  { id: "hero", label: "首页" },
  { id: "background", label: "项目背景" },
  { id: "goals", label: "目标对象" },
  { id: "budget", label: "经费周期" },
  { id: "timeline", label: "工作安排" },
  { id: "booth", label: "5月8日" },
  { id: "next", label: "下一步" },
  { id: "closing", label: "总结" }
];

export const hero = {
  title: "髓缘大爱，生命接力",
  subtitle: "上海交通大学医学院造血干细胞捐献志愿服务特色项目",
  positioning:
    "这是一个依托上海交通大学医学院青年志愿者服务体系，围绕造血干细胞捐献科普、入库动员、捐献者分享与志愿骨干培养开展的红十字志愿服务项目。",
  slogan:
    "以医学专业知识消除误解，以朋辈榜样传递温度，让更多青年理解捐献、认同捐献，并在需要时成为生命的接力者。",
  badge: "上海交通大学医学院 × 红十字志愿服务",
  note: "科普先行，动员有序，榜样带动，骨干接力。",
  briefing: "先讲清项目是什么，再讲清为什么值得做。",
  keywords: ["红十字志愿服务", "造血干细胞捐献", "专业科普", "入库动员", "朋辈分享", "医学生公益"]
};

export const stats: Stat[] = [
  {
    value: "5000+",
    label: "校内重点触达",
    description: "覆盖浦东校区在校学生与青年教职员工。",
    emphasis: "先把医学生讲清楚"
  },
  {
    value: "1000+",
    label: "区域辐射人群",
    description: "面向部分高校师生与社区居民开展科普服务。",
    emphasis: "再把专业科普带出去"
  },
  {
    value: "100+",
    label: "年度入库目标",
    description: "完成不少于100人份有效血样采集与入库。",
    emphasis: "最终转化为有效入库"
  },
  {
    value: "4场",
    label: "生命之光活动",
    description: "含大型科普讲座与捐献者分享会。",
    emphasis: "专家讲科学，榜样讲故事"
  },
  {
    value: "30人",
    label: "核心志愿队伍",
    description: "组建具备基础科普宣讲能力的学生团队。",
    emphasis: "让执行有人、有序、有训练"
  },
  {
    value: "2000+",
    label: "宣传触达人次",
    description: "通过线上线下材料与活动扩大项目影响。",
    emphasis: "让项目形成可见影响"
  }
];

export const backgroundCards: BackgroundCard[] = [
  {
    title: "生命救治需求",
    short: "造血干细胞捐献关系到血液病患者的生命救治。",
    details:
      "对患者而言，一次成功配型和规范捐献，可能就是重新获得治疗机会的关键一步。",
    accent: "生命接力"
  },
  {
    title: "公众认知误区",
    short: "不少人仍担心“伤身体”，也不了解采集流程、配型机制和捐献过程。",
    details:
      "项目用专业科普和真实分享回应恐惧，让同学先理解，再作出自愿、理性的选择。",
    accent: "降低误解"
  },
  {
    title: "医学生专业优势",
    short: "医学生具备医学基础、公益意识和社会动员潜力。",
    details:
      "他们既能把知识讲准确，也更适合在校园中开展可信、温暖的入库动员。",
    accent: "专业动员"
  },
  {
    title: "校地协同价值",
    short: "项目契合红十字会“人道、博爱、奉献”精神。",
    details:
      "通过医学院青年志愿服务力量与红十字工作协同，服务“三救三献”中的造血干细胞捐献工作。",
    accent: "协同服务"
  }
];

export const goalMetrics: GoalMetric[] = [
  {
    value: "不少于2场",
    label: "集中入库活动",
    description: "年度内组织集中入库活动，推动更多青年完成血样采集与入库登记。"
  },
  {
    value: "不少于100人份",
    label: "有效血样采集",
    description: "把认知提升转化为可衡量的入库行动成果。"
  },
  {
    value: "生命之光",
    label: "系列讲座或分享活动",
    description: "通过讲座与捐献者分享会，用真实经历增强认同感。"
  },
  {
    value: "1套",
    label: "优质科普材料",
    description: "制作并传播宣传折页、海报、短视频等科普内容。"
  },
  {
    value: "约30人",
    label: "核心学生志愿者团队",
    description: "培养具备专业科普和现场服务能力的志愿骨干。"
  },
  {
    value: "可持续",
    label: "校地协同志愿服务模式",
    description: "形成校园动员、社区外展与红十字工作协同推进的服务机制。"
  }
];

export const audienceGroups: AudienceGroup[] = [
  {
    name: "浦东校区学生及青年教职工",
    description: "项目首先面向上海交通大学医学院浦东校区青年群体，推动校园内认知提升与入库转化。",
    accent: "校内重点"
  },
  {
    name: "部分高校师生",
    description: "通过讲座、分享和外展科普，把医学专业表达带到更多青年群体中。",
    accent: "高校辐射"
  },
  {
    name: "社区居民",
    description: "结合社区服务场景开展通俗科普，让造血干细胞捐献知识走出校园。",
    accent: "社区外展"
  },
  {
    name: "中小学生和暑托班学生",
    description: "在暑期实践中开展生命教育和公益启蒙，形成更广泛的社会传播。",
    accent: "暑期覆盖"
  }
];

export const projectBudget = {
  total: "6万元",
  cycle: "2026年度内持续推进",
  focus: "3月至11月",
  summary:
    "项目2026年度内持续推进，重点覆盖3月至11月。5月至6月初集中推进近期活动；7月至8月结合暑期实践外展；9月至11月继续宣传、入库、分享与总结评估。",
  phases: [
    {
      period: "5月至6月初",
      title: "近期核心阶段",
      description: "集中推进近期核心活动，完成重点宣传、动员与现场组织。"
    },
    {
      period: "7月至8月",
      title: "暑期拓展阶段",
      description: "结合暑期社会实践开展外展宣讲，扩大项目服务覆盖。"
    },
    {
      period: "9月至11月",
      title: "持续推进与总结阶段",
      description: "继续推进新生宣传、第二场入库活动、分享会与总结评估。"
    }
  ] satisfies ProjectPhase[],
  uses: [
    {
      title: "宣传物料",
      description: "宣传折页、海报、易拉宝等线下传播材料。"
    },
    {
      title: "互动用品",
      description: "活动小奖品和现场互动用品，提升参与体验。"
    },
    {
      title: "讲座培训",
      description: "支持讲座、培训与专家指导等专业能力建设。"
    },
    {
      title: "后勤保障",
      description: "志愿者补贴、交通、饮水、资料打印等基础保障。"
    },
    {
      title: "成果材料",
      description: "项目宣传品、成果展示与总结材料制作。"
    }
  ] satisfies BudgetUse[]
};

export const serviceLoop: ServiceStep[] = [
  { title: "科普", description: "专家讲科学，材料讲清楚，先建立安全认知。" },
  { title: "动员", description: "朋辈榜样讲故事，推动从知道到愿意。" },
  { title: "入库", description: "红会协同设点，完成规范采样与登记流程。" },
  { title: "关怀", description: "关注志愿者体验，持续提供答疑与心理支持。" },
  { title: "分享", description: "沉淀案例、数据与故事，让善意被看见。" },
  { title: "再动员", description: "把成功经验带回新一轮宣传和招募。" }
];

export const timeline: TimelineItem[] = [
  {
    id: "before-may-day",
    period: "五一前",
    title: "团队启动与分工",
    summary: "启动阶段：先把人组织起来，再把任务拆下去。",
    status: "启动打底",
    priority: "normal",
    format: "团队会议 + 破冰协作",
    tasks: [
      "召开团队会议，明确节奏和沟通机制。",
      "拆分宣传、采购、现场执行、摄影摄像、后勤报销等分工。",
      "设计5月8日摆摊宣传折页。",
      "提前采购摆摊所需物资和小奖品。",
      "完成团队破冰，可安排聚餐，人均50元以内可报销。",
      "负责人在破冰和会议过程中观察成员能力，培养助手。",
      "将红十字服务队新换届队长纳入团队。",
      "及时向老师反馈进展与困难。"
    ],
    tags: ["组织启动", "任务拆解", "物资准备"],
    highlight: "先把人组织起来，再把任务拆下去。"
  },
  {
    id: "may-8-booth",
    period: "5月8日",
    title: "世界红十字日线下摆摊",
    summary: "当前最急迫节点：用互动摆摊完成第一轮集中触达。",
    status: "当前优先级最高",
    priority: "highest",
    location: "西六一楼，食堂对面",
    format: "线下小型摆摊宣传",
    tasks: [
      "设置知识竞答、抽奖、打卡、问答挑战等互动环节。",
      "现场发放宣传折页和小奖品。",
      "安排人员负责引导、问答、物资、摄影摄像和现场秩序。",
      "记录现场互动、参与情况和典型问题。",
      "活动结束后必须产出回顾推文。"
    ],
    tags: ["立即推进", "重点节点", "线下触达"],
    highlight: "当前优先级最高：先把5月8日摆摊跑顺、跑热、跑出传播素材。"
  },
  {
    id: "late-may-intake",
    period: "5月中下旬",
    title: "入库科普讲座与现场入库",
    summary: "从科普理解走向入库行动，是近期关键转化节点。",
    status: "重点转化节点",
    priority: "high",
    location: "场地待确认",
    format: "科普讲座 + 现场入库登记",
    tasks: [
      "邀请红十字会老师开展造血干细胞入库科普讲座。",
      "红十字会现场支持待确认",
      "宣传组负责照片、视频拍摄。",
      "后续剪辑短视频，用于二次传播。",
      "吸纳入库同学成为项目成员或志愿骨干。",
      "服务于培养30人左右专业骨干的项目目标。"
    ],
    tags: ["计划安排", "入库转化", "二次传播"],
    highlight: "地点和合作细节保持“计划 / 待确认”表述，避免写成最终安排。"
  },
  {
    id: "roundtable",
    period: "5月底或6月初",
    title: "捐献者圆桌分享会",
    summary: "用真实经历增强认同，把刚入库的同学带回交流现场。",
    status: "认同强化",
    priority: "normal",
    location: "小会议室，30人以内",
    format: "访谈节目式圆桌论坛",
    tasks: [
      "主要邀请刚参与入库的同学回来听讲。",
      "避免单向讲座，采用访谈节目式圆桌。",
      "嘉宾待联系",
      "由负责人担任主持人，负责串场和提问。",
      "沉淀访谈金句、现场照片和后续传播素材。"
    ],
    tags: ["圆桌论坛", "朋辈分享", "小规模深交流"],
    highlight: "真实经历比单向宣讲更有感染力。",
    scriptQuestions: [
      "当初为什么决定捐献？",
      "接到配型成功电话时的第一反应是什么？",
      "家人最初是什么态度？",
      "捐献过程中最暖心的事情是什么？",
      "捐献后身体恢复情况如何？",
      "如果再给学弟学妹一句建议，会说什么？"
    ]
  },
  {
    id: "summer-outreach",
    period: "7月至8月",
    title: "暑期社会实践与志愿服务拓展",
    summary: "把造血干细胞知识融入暑期实践，完成外展宣讲。",
    status: "外展拓展",
    priority: "normal",
    format: "暑期实践 + 外展宣讲",
    tasks: [
      "组建暑期实践团队。",
      "申报红十字或造血干细胞捐献相关暑期实践项目。",
      "将造血干细胞知识宣讲融入已有暑期支教团队，如云南、安徽等方向。",
      "对接公益暑托班资源，为中小学生开展科普宣讲。",
      "通过暑期实践完成进社区、进学校宣讲的任务要求。"
    ],
    tags: ["暑期实践", "外展宣讲", "服务拓展"],
    highlight: "把校园项目带到社区、学校和暑期实践场景中。",
    outreachPaths: ["进高校", "进社区", "进暑托班", "进暑期支教团队"]
  },
  {
    id: "autumn-summary",
    period: "9月至11月",
    title: "持续推进与总结",
    summary: "按照延续、评估、总结、沉淀，把项目做成可持续品牌。",
    status: "持续品牌化",
    priority: "normal",
    format: "新生宣传 + 第二场入库 + 总结评估",
    tasks: [
      "9月结合新生入学进行造血干细胞知识宣传。",
      "开展项目核心志愿者能力提升培训。",
      "10月推进第二场集中血样采集入库活动。",
      "继续举办“生命之光”分享会。",
      "开展问卷调研和成效评估。",
      "11月进行项目总结、优秀志愿者表彰、成果汇编与可持续规划。"
    ],
    tags: ["延续", "评估", "总结", "沉淀"],
    highlight: "项目不是一次性活动，而是可持续志愿服务品牌。"
  }
];

export const may8Booth = {
  title: "5月8日世界红十字日线下摆摊：当前最高优先级任务",
  location: "西六一楼，食堂对面",
  target: "用互动方式完成造血干细胞捐献科普、项目宣传、折页发放和现场执行练兵。",
  labels: ["当前最高优先级", "立即推进", "重点节点"],
  groups: [
    {
      code: "A",
      title: "总协调组",
      owner: "待确认",
      statuses: ["最高优先级", "需全程跟进"],
      priority: "highest",
      duties: [
        "统筹5月8日整体流程。",
        "确认场地、时间、人员排班。",
        "和老师保持沟通。",
        "处理现场突发情况。",
        "汇总问题并组织复盘。"
      ]
    },
    {
      code: "B",
      title: "宣传设计组",
      owner: "待确认",
      statuses: ["五一前出初稿", "活动后产出推文"],
      priority: "active",
      duties: [
        "完成宣传折页内容与排版。",
        "设计活动海报或电子宣传图。",
        "准备现场展示文案。",
        "提前制作预热内容。",
        "活动后完成推文初稿。"
      ]
    },
    {
      code: "C",
      title: "物资采购组",
      owner: "待确认",
      statuses: ["提前采购", "票据留存"],
      priority: "active",
      duties: [
        "采购小奖品、互动用品、饮用水、纸巾、笔、贴纸、抽奖道具等。",
        "保留发票或报销凭证。",
        "活动前一天完成物资清点。",
        "当天负责搬运和补给。"
      ]
    },
    {
      code: "D",
      title: "互动活动组",
      owner: "待确认",
      statuses: ["提升参与感", "防止冷场"],
      priority: "active",
      duties: [
        "设计摆摊互动环节。",
        "设计知识竞答、抽奖、打卡、误区判断等玩法。",
        "准备题库和答案。",
        "控制现场节奏，避免冷场。",
        "提升同学参与感。"
      ]
    },
    {
      code: "E",
      title: "现场执行组",
      owner: "待确认",
      statuses: ["活动当天执行", "记录反馈"],
      priority: "normal",
      duties: [
        "负责布置摊位。",
        "引导路过同学参与。",
        "发放宣传折页。",
        "介绍项目基本内容。",
        "维护现场秩序。",
        "记录人数和反馈。"
      ]
    },
    {
      code: "F",
      title: "摄影摄像组",
      owner: "待确认",
      statuses: ["横竖版素材", "支撑推文短视频"],
      priority: "normal",
      duties: [
        "拍摄布置、互动、成员工作和参与反馈。",
        "同步拍摄横版和竖版素材。",
        "保存推文和短视频素材。",
        "活动后整理照片和视频。"
      ]
    },
    {
      code: "G",
      title: "后勤与报销组",
      owner: "待确认",
      statuses: ["签到排班", "报销归档"],
      priority: "normal",
      duties: [
        "协助搬运物资。",
        "准备签到或排班表。",
        "整理票据。",
        "记录实际支出。",
        "协助报销和材料归档。"
      ]
    }
  ] satisfies BoothTaskGroup[],
  loop: [
    {
      phase: "活动前",
      tasks: ["分工确认", "折页定稿", "物资采购", "互动题库准备", "排班完成"]
    },
    {
      phase: "活动中",
      tasks: ["摆摊布置", "互动引导", "折页发放", "照片视频采集", "参与人数记录"]
    },
    {
      phase: "活动后",
      tasks: ["照片视频整理", "推文初稿", "活动复盘", "票据归档", "问题反馈老师"]
    }
  ] satisfies BoothLoopPhase[]
};

export const nextActionChecklist = [
  "五一前完成团队会议、分工确认和破冰。",
  "宣传折页和活动海报需尽快出初稿。",
  "物资采购组需提前列清单并保留票据。",
  "互动活动组需准备题库、抽奖和打卡流程。",
  "5月8日活动后必须完成照片整理、推文回顾和复盘。",
  "5月中下旬入库讲座和现场入库活动需提前对接红十字会老师与工作人员。",
  "5月底或6月初捐献者圆桌分享会嘉宾待联系。"
];

export const nextActionGroups: NextActionGroup[] = [
  {
    title: "立即完成",
    accent: "先把会后第一轮动作落下去",
    items: ["团队会议", "分工确认", "折页初稿", "物资清单"]
  },
  {
    title: "活动执行",
    accent: "围绕5月8日摆摊现场跑顺",
    items: ["5月8日摆摊", "互动环节", "摄影摄像", "现场记录"]
  },
  {
    title: "后续衔接",
    accent: "让摆摊成果接到入库和外展",
    items: ["入库讲座", "圆桌分享会", "暑期实践", "项目复盘"]
  }
];

export const closingSummary = {
  title: "让医学知识成为生命希望",
  lines: [
    "从一次科普、一份折页、一场入库活动开始，我们希望把医学知识转化为生命希望，把青年热忱转化为真实行动。",
    "“髓缘大爱，生命接力”不是一次单点活动，而是一条从认知、认同到行动的生命接力线。"
  ]
};

export const intakeFlow: IntakeStep[] = [
  {
    title: "预登记",
    description: "现场引导了解项目与流程，仅做活动路径提示。",
    owner: "引导组 + 登记组",
    caution: "不在网页收集个人敏感信息，现场按红会规范办理。"
  },
  {
    title: "健康咨询",
    description: "由专业人员进行咨询答疑，帮助志愿者理解基本要求。",
    owner: "科普组 + 区红会工作人员",
    caution: "只做原则性答疑，具体适宜性由现场专业人员判断。"
  },
  {
    title: "知情同意",
    description: "在红会规范流程下完成知情确认，强调自愿与充分理解。",
    owner: "登记组 + 区红会工作人员",
    caution: "确保志愿者听懂流程、风险、权利与退出机制。"
  },
  {
    title: "血样采集",
    description: "配合工作人员完成安全、规范、短时的血样采集。",
    owner: "活动组 + 后勤保障组",
    caution: "控制动线和等候区，准备饮水、休息位和应急支持。"
  },
  {
    title: "荣誉证书颁发",
    description: "记录奉献时刻，强化志愿者荣誉感与持续参与意愿。",
    owner: "宣传组 + 数据总结组",
    caution: "征得同意后再拍摄传播，及时沉淀数据与故事。"
  }
];

export const teams: Team[] = [
  {
    name: "统筹组",
    mission: "把方向、控节奏、接资源",
    duties: ["年度节奏管理", "校地沟通协调", "风险与质量把关"],
    recentTask: "会后48小时内锁定4月讲座、5月入库和10月第二场入库关键日程。",
    suggestedPeople: "3-4人",
    tone: "稳"
  },
  {
    name: "宣传组",
    mission: "让项目被看见、被理解",
    duties: ["海报折页设计", "新媒体推送", "成果展示"],
    recentTask: "完成首轮主视觉、讲座预热推送、现场指引牌和成果展示模板。",
    suggestedPeople: "5-6人",
    tone: "亮"
  },
  {
    name: "科普组",
    mission: "把专业知识讲得准确易懂",
    duties: ["讲座内容协助", "误区答疑", "宣讲培训"],
    recentTask: "整理常见误区话术，完成志愿者基础科普培训提纲。",
    suggestedPeople: "6-8人",
    tone: "准"
  },
  {
    name: "活动组",
    mission: "把现场组织得清楚顺畅",
    duties: ["场地与设备", "动线与引导", "秩序维护"],
    recentTask: "绘制5月宣传周和集中入库现场动线，明确咨询台、等候区和采集区。",
    suggestedPeople: "6-8人",
    tone: "清"
  },
  {
    name: "外联组",
    mission: "连接社区、高校与红会资源",
    duties: ["合作单位对接", "嘉宾邀请", "外展安排"],
    recentTask: "与区红会确认入库支持，与兄弟高校和社区建立外展候选清单。",
    suggestedPeople: "4-5人",
    tone: "联"
  },
  {
    name: "数据总结组",
    mission: "让行动沉淀为成果",
    duties: ["活动数据整理", "问卷分析", "总结报告"],
    recentTask: "建立活动数据台账、反馈问卷和案例素材归档模板。",
    suggestedPeople: "3-4人",
    tone: "实"
  }
];

export const actionItems: ActionItem[] = [
  {
    title: "锁定年度日程",
    owner: "统筹组",
    description: "确认4月讲座、5月入库、10月第二场入库与11月总结会关键节点。"
  },
  {
    title: "完成首轮物料",
    owner: "宣传组 + 科普组",
    description: "把常见误区、流程说明、志愿服务亮点整理成海报、折页与推送素材。"
  },
  {
    title: "建立志愿者分组",
    owner: "活动组",
    description: "按统筹、宣传、科普、活动、外联、数据总结分工建立沟通机制。"
  },
  {
    title: "对接入库支持",
    owner: "外联组",
    description: "与区红会确认场地、工作人员、流程规范与现场保障要求。"
  },
  {
    title: "沉淀复盘模板",
    owner: "数据总结组",
    description: "统一记录活动数据、反馈、案例与媒体材料，为成果报送做准备。"
  }
];
