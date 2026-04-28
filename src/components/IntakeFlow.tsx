import { AlertTriangle, ClipboardCheck, FilePenLine, HeartPulse, Medal, ShieldCheck, Stethoscope, UsersRound } from "lucide-react";
import { intakeFlow } from "../data/project";

const icons = [ClipboardCheck, Stethoscope, FilePenLine, HeartPulse, Medal];

export function IntakeFlow() {
  return (
    <div className="rounded-[2rem] border border-marrow-100 bg-white p-4 shadow-soft sm:p-6">
      <div className="mb-5 grid gap-4 rounded-3xl bg-marrow-900 p-5 text-white lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-pulse-300">现场作战图</p>
          <h3 className="mt-2 text-3xl font-black">5月入库现场作战图</h3>
        </div>
        <p className="text-base leading-8 text-white/75">
          目标是把现场不确定性降到最低：每一步有负责小组、注意事项和清晰动线，确保志愿者体验稳定、流程规范。
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-5">
      {intakeFlow.map((step, index) => {
        const Icon = icons[index] ?? ClipboardCheck;
        return (
          <article key={step.title} className="rounded-2xl border border-marrow-100 bg-marrow-50 p-4">
            <div className="flex items-center justify-between gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-marrow-700 text-white shadow-sm">
                <Icon size={23} />
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-sm font-black text-marrow-500">步骤 0{index + 1}</span>
            </div>
            <h3 className="mt-5 text-xl font-black text-marrow-900">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-stone-600">{step.description}</p>
            <div className="mt-4 space-y-3">
              <p className="flex items-start gap-2 rounded-xl bg-white p-3 text-sm leading-6 text-stone-700">
                <UsersRound className="mt-0.5 h-4 w-4 shrink-0 text-marrow-700" />
                <span>
                  <span className="font-bold text-marrow-800">负责：</span>
                  {step.owner}
                </span>
              </p>
              <p className="flex items-start gap-2 rounded-xl bg-white p-3 text-sm leading-6 text-stone-700">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-pulse-500" />
                <span>
                  <span className="font-bold text-marrow-800">注意：</span>
                  {step.caution}
                </span>
              </p>
            </div>
          </article>
        );
      })}
      </div>
      <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-marrow-700">
        <span className="inline-flex items-center gap-2 rounded-full bg-marrow-50 px-4 py-2">
          <ShieldCheck size={16} />
          规范优先
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-marrow-50 px-4 py-2">
          <UsersRound size={16} />
          动线清楚
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-marrow-50 px-4 py-2">
          <AlertTriangle size={16} />
          风险前置
        </span>
      </div>
    </div>
  );
}
