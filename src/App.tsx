import { useLayoutEffect, useState } from "react";
import { ActionList } from "./components/ActionList";
import { Hero } from "./components/Hero";
import { IntakeFlow } from "./components/IntakeFlow";
import { MisconceptionCards } from "./components/MisconceptionCards";
import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import { ServiceLoop } from "./components/ServiceLoop";
import { StatCard } from "./components/StatCard";
import { TeamDashboard } from "./components/TeamDashboard";
import { Timeline } from "./components/Timeline";
import { stats } from "./data/project";
import { scrollToSection } from "./utils/scrollToSection";

function App() {
  const [volunteerNotice, setVolunteerNotice] = useState(false);

  useLayoutEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (!hash) {
      return;
    }

    let correctionEndsAt = performance.now() + 4000;

    const correctPosition = () => {
      scrollToSection(hash, { behavior: "auto", updateHash: "replace" });
    };

    correctPosition();

    const frameLoop = () => {
      correctPosition();

      if (performance.now() < correctionEndsAt) {
        frame = window.requestAnimationFrame(frameLoop);
      }
    };

    const extendCorrection = () => {
      correctionEndsAt = Math.max(correctionEndsAt, performance.now() + 1800);
      correctPosition();
    };

    const stopCorrection = () => {
      correctionEndsAt = 0;
      window.clearInterval(interval);
      window.cancelAnimationFrame(frame);
      window.clearTimeout(stopInterval);
    };

    let frame = window.requestAnimationFrame(frameLoop);
    const interval = window.setInterval(correctPosition, 100);
    const stopInterval = window.setTimeout(() => window.clearInterval(interval), 4200);

    window.addEventListener("load", extendCorrection);
    window.addEventListener("pageshow", extendCorrection);
    window.addEventListener("wheel", stopCorrection, { passive: true });
    window.addEventListener("touchmove", stopCorrection, { passive: true });
    window.addEventListener("keydown", stopCorrection);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearInterval(interval);
      window.clearTimeout(stopInterval);
      window.removeEventListener("load", extendCorrection);
      window.removeEventListener("pageshow", extendCorrection);
      window.removeEventListener("wheel", stopCorrection);
      window.removeEventListener("touchmove", stopCorrection);
      window.removeEventListener("keydown", stopCorrection);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero onVolunteerClick={() => setVolunteerNotice(true)} volunteerNotice={volunteerNotice} />

        <Section
          id="stats"
          eyebrow="核心数字"
          title="用一组数字看见年度目标"
          description="覆盖、动员、入库、宣传与队伍建设同步推进，让项目目标清楚可衡量。"
        >
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </Section>

        <Section
          id="background"
          eyebrow="项目背景"
          title="项目背景：从误解到理解，从专业到行动"
          description="项目聚焦公众认知误区、医学生专业优势与红十字主责主业契合，形成清晰的公益动员基础。"
        >
          <MisconceptionCards />
        </Section>

        <Section
          id="loop"
          eyebrow="服务闭环"
          title="全链条志愿服务闭环"
          description="不止做一次入库动员，而是把科普、动员、关怀与再传播串成可持续的项目机制。"
        >
          <ServiceLoop />
        </Section>

        <Section
          id="timeline"
          eyebrow="年度节奏"
          title="2026年度时间轴"
          description="围绕3月至11月的关键节点推进，重点任务可展开查看，便于会议现场快速同步。"
          className="bg-marrow-50/60"
        >
          <Timeline />
        </Section>

        <Section
          id="intake"
          eyebrow="五月入库"
          title="5月集中入库流程"
          description="以“5·8世界红十字日”宣传周为核心场景，配合区红会完成规范、安全、清晰的现场流程。"
        >
          <IntakeFlow />
        </Section>

        <Section
          id="teams"
          eyebrow="团队分工"
          title="团队分工仪表盘"
          description="六个工作组各有侧重，共同支撑活动策划、科普表达、现场执行、外部协同与成果沉淀。"
          className="bg-[#f7faf9]"
        >
          <TeamDashboard />
        </Section>

        <section id="actions" className="scroll-mt-20 bg-marrow-950 py-14 sm:py-16 lg:flex lg:min-h-screen lg:items-center">
          <div className="section-shell" data-scroll-anchor>
            <div className="mb-9 max-w-3xl text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-pulse-300">会后行动</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">会后行动清单</h2>
              <p className="mt-4 text-base leading-8 text-white/70 sm:text-lg">
                会后先锁定日程、物料、分组、红会对接和复盘模板，让项目从会议共识进入执行状态。
              </p>
            </div>
            <ActionList />
            <div className="mt-10 rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur sm:flex sm:items-center sm:justify-between sm:gap-6">
              <div>
                <h3 className="text-xl font-black">志愿者分组意向填写</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  占位入口已保留，正式填写渠道由项目组后续发布。本页面不保存、不提交任何个人敏感信息。
                </p>
              </div>
              <button
                type="button"
                onClick={() => setVolunteerNotice(true)}
                className="focus-ring mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 font-bold text-marrow-800 transition hover:bg-marrow-50 sm:mt-0 sm:w-auto"
              >
                后续开放
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
