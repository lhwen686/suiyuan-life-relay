import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  CalendarDays,
  CheckCircle2,
  Cross,
  HeartPulse,
  HelpCircle,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow
} from "lucide-react";
import { hero } from "../data/project";
import { scrollToSection } from "../utils/scrollToSection";

type HeroProps = {
  onVolunteerClick: () => void;
  volunteerNotice: boolean;
};

export function Hero({ onVolunteerClick, volunteerNotice }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const [headlineLead, headlineRest] = hero.title.split("，");

  const highlights = [
    { title: "专业可信", text: "医学专家与医学生共同完成科学解读", Icon: ShieldCheck },
    { title: "流程规范", text: "红十字资源协同保障集中入库现场", Icon: CalendarDays },
    { title: "持续动员", text: "让成功故事回到下一轮青年动员", Icon: HeartPulse }
  ];
  const briefingItems = [
    { title: "为什么做", text: "回应误区和临床需求", Icon: HelpCircle },
    { title: "怎么做", text: "科普、动员、入库闭环", Icon: Workflow },
    { title: "谁来做", text: "六个小组马上承接", Icon: UsersRound }
  ];
  const proofStats = [
    { value: "5000+", label: "校内重点触达" },
    { value: "100+", label: "年度入库目标" },
    { value: "30人", label: "核心志愿队伍" }
  ];

  return (
    <section id="hero" className="relative isolate scroll-mt-24 overflow-hidden bg-[#fffaf8] text-marrow-950">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fffaf8_0%,#ffffff_70%)]" />
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[46vw] bg-marrow-950 lg:block" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(68,17,18,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(68,17,18,0.045)_1px,transparent_1px)] bg-[size:56px_56px] opacity-60" />

      <div
        className="section-shell grid gap-10 pb-10 pt-24 sm:pt-28 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.82fr)] lg:items-center lg:pb-16"
        data-scroll-anchor
      >
        <motion.div
          className="min-w-0 max-w-[calc(100vw-2.5rem)] lg:max-w-none"
          initial={shouldReduceMotion ? false : { y: 18 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex max-w-full items-start gap-2 rounded-full border border-marrow-200 bg-white/75 px-4 py-2 text-sm font-semibold text-marrow-700 shadow-sm backdrop-blur">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0" />
              <span className="min-w-0 break-all leading-5">{hero.badge}</span>
            </span>
            <span className="rounded-full border border-clinic-200 bg-clinic-50 px-4 py-2 text-sm font-bold text-clinic-800">
              2026行动方案
            </span>
          </div>
          <h1 className="mt-8 max-w-[9.5ch] text-[3.25rem] font-black leading-[0.98] text-marrow-950 sm:text-6xl lg:text-7xl xl:text-8xl">
            {headlineLead}
            {headlineRest ? "，" : ""}
            {headlineRest && <span className="block text-marrow-700">{headlineRest}</span>}
          </h1>
          <p className="mt-5 text-xl font-bold text-marrow-700 sm:text-2xl">{hero.subtitle}</p>
          <p className="mt-6 max-w-2xl break-all text-base leading-8 text-stone-700 sm:text-lg">{hero.positioning}</p>
          <p className="mt-5 max-w-2xl break-all border-l-4 border-pulse-300 pl-5 text-lg font-bold leading-8 text-marrow-950 sm:text-xl">
            {hero.slogan}
          </p>

          <div className="mt-8 grid max-w-2xl grid-cols-3 divide-x divide-marrow-100 border-y border-marrow-100 bg-white/70 backdrop-blur">
            {proofStats.map((stat) => (
              <div key={stat.label} className="px-3 py-4 sm:px-5">
                <p className="text-2xl font-black leading-none text-marrow-800 sm:text-3xl">{stat.value}</p>
                <p className="mt-2 break-all text-xs font-semibold leading-5 text-stone-500 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#timeline"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("timeline");
              }}
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-marrow-800 px-6 py-3 text-base font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-marrow-900"
            >
              查看年度节奏
              <ArrowDown size={18} />
            </a>
            <button
              type="button"
              onClick={onVolunteerClick}
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-marrow-200 bg-white px-6 py-3 text-base font-bold text-marrow-800 transition hover:-translate-y-0.5 hover:border-marrow-300 hover:bg-marrow-50"
            >
              志愿者分组意向填写
            </button>
          </div>
          {volunteerNotice && (
            <p className="mt-4 max-w-xl rounded-xl border border-marrow-100 bg-white/85 px-4 py-3 text-sm leading-6 text-stone-600 shadow-sm">
              占位入口已保留：后续由项目组开放正式渠道。本页面不收集身份证号、健康信息或入库报名信息。
            </p>
          )}
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-xl lg:left-10 lg:justify-self-end xl:left-16"
          initial={shouldReduceMotion ? false : { y: 24, scale: 0.99 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
        >
          <div className="absolute inset-x-8 bottom-0 -z-10 h-24 bg-marrow-950/20 blur-3xl" />
          <div className="hero-visual relative overflow-hidden rounded-2xl border border-white/15 bg-marrow-950 p-4 text-white shadow-2xl sm:p-5">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:38px_38px] opacity-35" />
            <div className="relative rounded-xl border border-white/12 bg-white/[0.08] p-5 backdrop-blur">
              <div className="flex items-start justify-between gap-4 border-b border-white/15 pb-5">
                <div>
                  <p className="text-sm font-semibold text-pulse-300">项目工作法</p>
                  <h2 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">专业科普 × 朋辈感召</h2>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/65">{hero.note}</p>
                </div>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-marrow-800">
                  <Cross size={30} strokeWidth={2.6} />
                </span>
              </div>

              <div className="relative mt-6">
                <svg
                  className="absolute left-8 top-8 hidden h-24 w-[calc(100%-4rem)] text-pulse-300/70 sm:block"
                  viewBox="0 0 360 104"
                  fill="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M4 52H72L92 24L126 82L154 52H356"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0.2 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.3, delay: 0.55, ease: "easeOut" }}
                  />
                </svg>
                <div className="grid gap-3 sm:grid-cols-3">
                  {briefingItems.map(({ title, text, Icon }, index) => (
                    <motion.div
                      key={title}
                      className="relative min-h-36 rounded-xl border border-white/12 bg-white/[0.09] p-4"
                      initial={shouldReduceMotion ? false : { y: 14 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.5, delay: 0.25 + index * 0.08, ease: "easeOut" }}
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-pulse-300 text-marrow-950">
                        <Icon size={21} strokeWidth={2.4} />
                      </span>
                      <p className="mt-5 text-lg font-black">{title}</p>
                      <p className="mt-2 text-sm leading-6 text-white/68">{text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid gap-3">
                {highlights.map(({ title, text, Icon }) => (
                  <div key={title} className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.08] p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/12 text-pulse-300">
                      <Icon size={21} />
                    </span>
                    <span>
                      <span className="block font-bold">{title}</span>
                      <span className="mt-1 block text-sm leading-6 text-white/65">{text}</span>
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 flex items-start gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold leading-6 text-marrow-900">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-clinic-700" />
                {hero.briefing}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
