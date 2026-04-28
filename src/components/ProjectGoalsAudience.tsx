import { BookOpenText, GraduationCap, HeartHandshake, Megaphone, Target, UsersRound } from "lucide-react";
import { audienceGroups, goalMetrics } from "../data/project";

const goalIcons = [Target, HeartHandshake, Megaphone, BookOpenText, UsersRound, GraduationCap];
const audienceIcons = [GraduationCap, UsersRound, HeartHandshake, BookOpenText];

export function ProjectGoalsAudience() {
  return (
    <div className="grid gap-8 xl:grid-cols-[1.25fr_0.75fr]">
      <div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-marrow-500">从认知提升到行动转化</p>
            <h3 className="mt-2 text-2xl font-black text-marrow-950 sm:text-3xl">2026年度正式目标</h3>
          </div>
          <span className="w-fit rounded-full bg-pulse-100 px-4 py-2 text-sm font-bold text-marrow-800">
            科普 + 入库 + 骨干培养
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {goalMetrics.map((goal, index) => {
            const Icon = goalIcons[index] ?? Target;

            return (
              <article key={goal.label} className="relative overflow-hidden rounded-2xl border border-marrow-100 bg-white p-5 shadow-card">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-marrow-700 via-pulse-300 to-clinic-700" />
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-marrow-50 text-marrow-700">
                    <Icon size={23} />
                  </span>
                  <span className="text-sm font-black text-marrow-300">0{index + 1}</span>
                </div>
                <p className="mt-5 text-3xl font-black leading-tight text-marrow-800">{goal.value}</p>
                <h4 className="mt-2 text-lg font-black text-marrow-950">{goal.label}</h4>
                <p className="mt-2 text-sm leading-6 text-stone-600">{goal.description}</p>
              </article>
            );
          })}
        </div>
      </div>

      <aside>
        <div className="mb-5">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-clinic-700">从校园到社区的服务覆盖</p>
          <h3 className="mt-2 text-2xl font-black text-marrow-950 sm:text-3xl">服务对象</h3>
        </div>

        <div className="grid gap-4">
          {audienceGroups.map((group, index) => {
            const Icon = audienceIcons[index] ?? UsersRound;

            return (
              <article key={group.name} className="rounded-2xl border border-marrow-100 bg-marrow-50 p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-marrow-700 shadow-sm">
                    <Icon size={21} />
                  </span>
                  <div>
                    <span className="inline-flex rounded-full bg-white px-3 py-1 text-sm font-bold text-marrow-700 shadow-sm">
                      {group.accent}
                    </span>
                    <h4 className="mt-3 text-lg font-black leading-6 text-marrow-900">{group.name}</h4>
                    <p className="mt-2 text-sm leading-6 text-stone-600">{group.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
