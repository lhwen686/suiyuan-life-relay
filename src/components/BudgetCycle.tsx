import { Calendar, CheckCircle2, ClipboardCheck, HeartHandshake, Megaphone, Presentation, UsersRound } from "lucide-react";
import { projectBudget } from "../data/project";

const useIcons = [Megaphone, HeartHandshake, Presentation, UsersRound, ClipboardCheck];

export function BudgetCycle() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <article className="relative overflow-hidden rounded-[2rem] bg-marrow-950 p-6 text-white shadow-soft sm:p-7">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:38px_38px] opacity-25" />
        <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-pulse-300">项目总预算</p>
          <p className="mt-4 text-6xl font-black leading-none text-white sm:text-7xl">{projectBudget.total}</p>
          <p className="mt-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-base font-bold leading-6 text-white ring-1 ring-white/15">
            {projectBudget.cycle}
          </p>

          <div className="mt-6 border-t border-white/15 pt-5">
            <p className="flex items-center gap-2 text-sm font-bold text-pulse-100">
              <Calendar size={17} />
              重点阶段
            </p>
            <p className="mt-2 text-3xl font-black text-white">{projectBudget.focus}</p>
            <p className="mt-4 max-w-sm text-sm font-semibold leading-6 text-white/66">
              只展示总预算和用途方向，不展开采购明细。
            </p>
          </div>
        </div>
      </article>

      <div className="grid gap-5">
        <article className="rounded-[2rem] border border-marrow-100 bg-white p-5 shadow-card sm:p-6">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pulse-100 text-marrow-800">
              <Calendar size={23} />
            </span>
            <div>
              <h3 className="text-2xl font-black text-marrow-950">项目周期</h3>
              <p className="mt-2 text-sm leading-7 text-stone-600 sm:text-base">{projectBudget.summary}</p>
            </div>
          </div>
        </article>

        <div className="grid gap-4 md:grid-cols-3">
          {projectBudget.phases.map((phase) => (
            <article key={phase.title} className="rounded-2xl border border-marrow-100 bg-white p-5 shadow-card">
              <p className="inline-flex rounded-full bg-marrow-50 px-3 py-1 text-sm font-black text-marrow-700">
                {phase.period}
              </p>
              <h4 className="mt-4 text-xl font-black text-marrow-900">{phase.title}</h4>
              <p className="mt-2 text-sm leading-6 text-stone-600">{phase.description}</p>
            </article>
          ))}
        </div>

        <div>
          <div className="mb-4 flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 text-clinic-700" />
            <h3 className="text-2xl font-black text-marrow-950">经费用途概括</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {projectBudget.uses.map((use, index) => {
              const Icon = useIcons[index] ?? ClipboardCheck;

              return (
                <article key={use.title} className="rounded-2xl border border-marrow-100 bg-marrow-50 p-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-marrow-700 shadow-sm">
                    <Icon size={21} />
                  </span>
                  <h4 className="mt-4 text-lg font-black text-marrow-900">{use.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{use.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
