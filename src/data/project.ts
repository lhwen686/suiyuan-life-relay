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

export type ServiceStep = {
  title: string;
  description: string;
};

export type TimelineItem = {
  month: string;
  title: string;
  tasks: string[];
  place: string;
  division: string;
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

export const navItems: NavItem[] = [
  { id: "hero", label: "首页" },
  { id: "stats", label: "核心数字" },
  { id: "background", label: "项目背景" },
  { id: "loop", label: "服务闭环" },
  { id: "timeline", label: "年度节奏" },
  { id: "intake", label: "入库流程" },
  { id: "teams", label: "团队分工" },
  { id: "actions", label: "会后行动" }
];

export const hero = {
  title: "髓缘大爱，生命接力",
  subtitle: "造血干细胞捐献志愿服务项目",
  positioning: "以医学专业力量为支撑、以朋辈教育为特色、以校地协同为保障的高校红十字志愿服务品牌平台。",
  slogan: "让科学认知抵达更多青年，让生命希望奔赴更多患者。",
  badge: "上海交通大学医学院浦东校区 × 浦东新区红十字会",
  note: "专业科普先行，朋辈榜样引领，集中规范入库。",
  briefing: "今天我们只讲清三件事：为什么做、怎么做、谁来做。"
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
    title: "认知误区需要被科学澄清",
    short: "“伤元气”“很痛苦”等误解，会降低青年入库意愿。",
    details:
      "项目用权威医学解释和真实经历回应疑虑，帮助同学理解捐献流程、安全保障与生命价值。",
    accent: "破除恐惧"
  },
  {
    title: "医学生具备天然专业优势",
    short: "医学背景青年更能理解人体生理和医疗操作。",
    details:
      "他们既是潜在高质量志愿者，也是面向校园、社区开展健康科普的可信赖传播者。",
    accent: "专业表达"
  },
  {
    title: "契合红十字主责主业",
    short: "项目直接服务“三救三献”中的造血干细胞捐献。",
    details:
      "围绕人道、博爱、奉献精神，探索“高校专业力量+红十字资源”的校地协同模式。",
    accent: "生命守护"
  }
];

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
    month: "3月",
    title: "项目启动与志愿者培训",
    tasks: ["召开项目启动会，明确年度目标与分工", "完成科普折页、海报、易拉宝等物料初稿"],
    place: "交大医学院 / 项目组全员、核心志愿者",
    division: "团委老师统筹，宣传组负责物料设计，组织组负责招募与联络。"
  },
  {
    month: "4月",
    title: "“生命之光”科普讲座启动",
    tasks: ["邀请专家开展大型科普讲座", "发布线上科普推送，进行线下海报预热"],
    place: "医学院会议室 / 全院师生、区红会代表",
    division: "活动组负责场地与接待，宣传组负责媒体推广，后勤组负责设备与印制。"
  },
  {
    month: "5月",
    title: "世界红十字日主题宣传周",
    tasks: ["设立咨询台，开展持续一周的流动宣传", "与区红会合作，完成首场集中血样采集入库"],
    place: "医学院学生活动中心 / 核心志愿者、区红会工作人员",
    division: "设置引导组、登记组、后勤保障组、应急组，保障现场秩序。"
  },
  {
    month: "6月",
    title: "捐献者分享与外展科普",
    tasks: ["邀请1-2名成功捐献同学开展沙龙式分享", "组织小分队进入社区或兄弟高校宣传"],
    place: "学生活动中心、合作单位 / 校内学生与外联对象",
    division: "外联组负责对接，宣讲组负责外出科普，配套便携展板和折页。"
  },
  {
    month: "9月",
    title: "新生时段融合宣传",
    tasks: ["在新生入学阶段开展造血干细胞捐献知识科普", "完成第二次项目核心志愿者能力提升培训"],
    place: "校园内 / 新生、项目志愿者",
    division: "培训组负责课程组织与能力提升，宣传组配合新生传播触达。"
  },
  {
    month: "10月",
    title: "第二场集中入库与中期调研",
    tasks: ["组织第二场集中血样采集入库活动", "举办第二、三期“生命之光”分享会", "开展认知提升效果问卷调研"],
    place: "校园内 / 侧重前期未覆盖人群",
    division: "沿用并优化5月流程，调研组负责问卷设计、回收与分析。"
  },
  {
    month: "11月",
    title: "总结表彰与成果报送",
    tasks: ["召开项目总结表彰会", "整理案例、数据、媒体报道并形成报告", "开展可持续性规划研讨"],
    place: "交大医学院 / 项目成员、捐献者代表、区红会与学院领导",
    division: "总结组负责报告撰写，宣传组负责成果展示设计，全体成员协同收口。"
  }
];

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
