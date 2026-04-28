import { useLayoutEffect } from "react";
import { BudgetCycle } from "./components/BudgetCycle";
import { ClosingSummary } from "./components/ClosingSummary";
import { Hero } from "./components/Hero";
import { May8BoothBoard } from "./components/May8BoothBoard";
import { MisconceptionCards } from "./components/MisconceptionCards";
import { Navbar } from "./components/Navbar";
import { NextActions } from "./components/NextActions";
import { ProjectGoalsAudience } from "./components/ProjectGoalsAudience";
import { Section } from "./components/Section";
import { Timeline } from "./components/Timeline";
import { scrollToSection } from "./utils/scrollToSection";

function App() {
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
        <Hero />

        <Section
          id="background"
          eyebrow="背景意义"
          title="项目背景与现实意义"
          description="从患者救治需求、公众认知误区、医学生专业优势和校地协同价值四个角度，说明项目为什么值得做。"
        >
          <MisconceptionCards />
        </Section>

        <Section
          id="goals"
          eyebrow="项目目标"
          title="项目目标与服务对象"
          description="用清晰目标推动行动转化，也明确项目从校园到社区的服务覆盖范围。"
        >
          <ProjectGoalsAudience />
        </Section>

        <Section
          id="budget"
          eyebrow="经费周期"
          title="项目经费与项目周期"
          description="单独展示总预算、年度周期、重点阶段和经费用途方向，便于会议现场快速把握资源安排。"
          className="bg-marrow-50/60"
        >
          <BudgetCycle />
        </Section>

        <Section
          id="timeline"
          eyebrow="工作安排"
          title="未来几个月工作安排"
          description="从团队启动、5月8日摆摊，到入库活动、圆桌分享会和暑期外展，项目将按阶段推进。"
          className="bg-marrow-50/60"
        >
          <Timeline />
        </Section>

        <section id="booth" className="scroll-mt-20 bg-marrow-950 py-14 sm:py-16 lg:min-h-screen lg:py-20">
          <May8BoothBoard />
        </section>

        <Section
          id="next"
          eyebrow="近期提醒"
          title="下一步行动"
          description="会议结束后，优先把人、物资、内容和现场流程四件事落实。"
          className="bg-marrow-50/60"
        >
          <NextActions />
        </Section>

        <ClosingSummary />
      </main>
    </>
  );
}

export default App;
