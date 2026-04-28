import {
  Boxes,
  Camera,
  CheckCircle2,
  ClipboardList,
  Megaphone,
  MessageSquareMore,
  ReceiptText,
  ShieldAlert,
  Sparkles,
  UsersRound
} from "lucide-react";
import { may8Booth } from "../data/project";

const groupIcons = [ShieldAlert, Megaphone, Boxes, MessageSquareMore, UsersRound, Camera, ReceiptText];

const priorityClasses = {
  highest: {
    card: "border-pulse-300 bg-pulse-100 shadow-lift",
    code: "bg-marrow-950 text-pulse-300",
    status: "bg-marrow-950 text-white"
  },
  active: {
    card: "border-marrow-200 bg-white shadow-card",
    code: "bg-marrow-800 text-white",
    status: "bg-marrow-50 text-marrow-800"
  },
  normal: {
    card: "border-white/15 bg-white/10 text-white backdrop-blur",
    code: "bg-white text-marrow-800",
    status: "bg-white/12 text-white"
  }
};

export function May8BoothBoard() {
  return (
    <div className="section-shell" data-scroll-anchor>
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
        <div className="text-white">
          <div className="flex flex-wrap gap-2">
            {may8Booth.labels.map((label) => (
              <span key={label} className="rounded-full bg-pulse-300 px-4 py-2 text-sm font-black text-marrow-950">
                {label}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-pulse-300">5月8日任务看板</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{may8Booth.title}</h2>
        </div>

        <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 text-white backdrop-blur sm:p-6">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-pulse-300">地点</p>
          <p className="mt-2 text-2xl font-black">{may8Booth.location}</p>
          <p className="mt-5 text-sm font-black uppercase tracking-[0.16em] text-pulse-300">目标</p>
          <p className="mt-2 text-base font-semibold leading-8 text-white/78">{may8Booth.target}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {may8Booth.groups.map((group, index) => {
          const Icon = groupIcons[index] ?? ClipboardList;
          const style = priorityClasses[group.priority ?? "normal"];
          const isDarkCard = group.priority === "normal";

          return (
            <article
              key={group.code}
              className={`rounded-2xl border p-5 ${style.card} ${group.priority === "highest" ? "lg:col-span-2" : ""}`}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-black ${style.code}`}>
                    {group.code}
                  </span>
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${isDarkCard ? "bg-white/12 text-pulse-300" : "bg-marrow-50 text-marrow-700"}`}>
                    <Icon size={23} />
                  </span>
                </div>
                <span className={`w-fit rounded-full px-3 py-1 text-sm font-black ${style.status}`}>负责人：{group.owner}</span>
              </div>

              <h3 className={`mt-5 text-2xl font-black ${isDarkCard ? "text-white" : "text-marrow-950"}`}>{group.title}</h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {group.statuses.map((status) => (
                  <span
                    key={status}
                    className={`rounded-full px-3 py-1.5 text-sm font-bold ${
                      isDarkCard ? "bg-white/12 text-white" : group.priority === "highest" ? "bg-white text-marrow-800" : "bg-pulse-100 text-marrow-800"
                    }`}
                  >
                    {status}
                  </span>
                ))}
              </div>

              <ul className="mt-4 grid gap-2">
                {group.duties.map((duty) => (
                  <li
                    key={duty}
                    className={`flex items-start gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold leading-6 ${
                      isDarkCard ? "bg-white/10 text-white/78" : "bg-white/80 text-stone-700"
                    }`}
                  >
                    <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${isDarkCard ? "text-pulse-300" : "text-clinic-700"}`} />
                    {duty}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="mt-8">
        <div className="mb-5 flex flex-col gap-3 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-pulse-300">活动闭环</p>
            <h3 className="mt-2 text-2xl font-black">5月8日活动闭环</h3>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white">
            <Sparkles size={16} />
            前中后同步收口
          </span>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {may8Booth.loop.map((phase, index) => (
            <article key={phase.phase} className="rounded-2xl border border-marrow-100 bg-marrow-50 p-5">
              <div className="flex items-center justify-between gap-4">
                <h4 className="text-xl font-black text-marrow-900">{phase.phase}</h4>
                <span className="rounded-full bg-white px-3 py-1 text-sm font-black text-marrow-500">0{index + 1}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {phase.tasks.map((task) => (
                  <span key={task} className="rounded-full bg-white px-3 py-2 text-sm font-bold leading-5 text-stone-700 shadow-sm">
                    {task}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
