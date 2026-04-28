import { CheckCircle2, ClipboardCheck, Clock3, ListChecks, Route } from "lucide-react";
import { nextActionChecklist, nextActionGroups } from "../data/project";

const groupIcons = [Clock3, ClipboardCheck, Route];

export function NextActions() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
      <article className="rounded-[2rem] bg-marrow-950 p-5 text-white shadow-soft sm:p-6">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pulse-300 text-marrow-950">
            <ListChecks size={24} />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pulse-300">近期重点提醒</p>
            <h3 className="mt-2 text-2xl font-black">会后优先落实四件事</h3>
            <p className="mt-3 text-sm font-semibold leading-7 text-white/72">人、物资、内容、现场流程。</p>
          </div>
        </div>

        <ul className="mt-6 grid gap-2">
          {nextActionChecklist.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold leading-6 text-white/78">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-pulse-300" />
              {item}
            </li>
          ))}
        </ul>
      </article>

      <div className="grid gap-4 md:grid-cols-3">
        {nextActionGroups.map((group, index) => {
          const Icon = groupIcons[index] ?? ClipboardCheck;

          return (
            <article key={group.title} className="rounded-2xl border border-marrow-100 bg-white p-5 shadow-card">
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-marrow-50 text-marrow-700">
                  <Icon size={23} />
                </span>
                <span className="rounded-full bg-pulse-100 px-3 py-1 text-sm font-black text-marrow-800">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-2xl font-black text-marrow-950">{group.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-marrow-600">{group.accent}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-marrow-50 px-3 py-2 text-sm font-bold text-stone-700">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
