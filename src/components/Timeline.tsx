import { useState } from "react";
import {
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  MapPin,
  MessageCircleQuestion,
  Route,
  Sparkles,
  UsersRound
} from "lucide-react";
import { timeline } from "../data/project";

const priorityStyles = {
  highest: {
    button: "border-marrow-800 bg-marrow-800 text-white shadow-lift",
    badge: "bg-pulse-300 text-marrow-950",
    rail: "bg-pulse-300"
  },
  high: {
    button: "border-pulse-300 bg-pulse-100 text-marrow-950 shadow-card",
    badge: "bg-marrow-800 text-white",
    rail: "bg-marrow-700"
  },
  normal: {
    button: "border-marrow-100 bg-marrow-50 text-marrow-900 hover:border-marrow-200 hover:bg-white",
    badge: "bg-white text-marrow-700",
    rail: "bg-marrow-200"
  }
};

export function Timeline() {
  const [activeId, setActiveId] = useState("may-8-booth");
  const activeItem = timeline.find((item) => item.id === activeId) ?? timeline[1];
  const activeStyle = priorityStyles[activeItem.priority ?? "normal"];

  return (
    <div className="rounded-[2rem] border border-marrow-100 bg-white p-4 shadow-soft sm:p-6">
      <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
        {timeline.map((item, index) => {
          const isOpen = activeId === item.id;
          const style = priorityStyles[item.priority ?? "normal"];

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={`focus-ring relative min-h-36 overflow-hidden rounded-2xl border p-4 text-left transition ${
                isOpen ? style.button : "border-marrow-100 bg-marrow-50 text-marrow-900 hover:border-marrow-200 hover:bg-white"
              }`}
              aria-pressed={isOpen}
            >
              <span className={`absolute inset-y-0 left-0 w-1 ${isOpen ? style.rail : "bg-marrow-200"}`} />
              <span className="flex flex-col items-start gap-2">
                <span className="flex items-center gap-2 text-sm font-black">
                  <CalendarDays size={16} />
                  {item.period}
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-black ${
                    isOpen ? style.badge : item.priority === "highest" ? "bg-pulse-300 text-marrow-950" : item.priority === "high" ? "bg-marrow-800 text-white" : "bg-white text-marrow-700"
                  }`}
                >
                  {item.status}
                </span>
              </span>
              <span className="mt-4 block text-lg font-black leading-6">{item.title}</span>
              <span className={`mt-3 block text-xs font-black ${isOpen ? "text-current opacity-70" : "text-marrow-300"}`}>
                阶段 0{index + 1}
              </span>
            </button>
          );
        })}
      </div>

      <article className="mt-5 overflow-hidden rounded-3xl bg-marrow-50">
        <div className="grid gap-0 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="bg-marrow-950 p-5 text-white sm:p-6 lg:p-7">
            <span className={`inline-flex rounded-full px-4 py-2 text-sm font-black ${activeStyle.badge}`}>
              {activeItem.status}
            </span>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-pulse-300">{activeItem.period}</p>
            <h3 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">{activeItem.title}</h3>
            <p className="mt-4 text-base font-semibold leading-7 text-white/75">{activeItem.summary}</p>
            <p className="mt-5 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold leading-6 text-white/85">
              {activeItem.highlight}
            </p>

            <div className="mt-5 grid gap-3">
              {activeItem.location && (
                <div className="flex items-start gap-3 border-t border-white/15 pt-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-pulse-300" />
                  <p className="text-sm leading-6 text-white/75">
                    <span className="font-bold text-white">地点：</span>
                    {activeItem.location}
                  </p>
                </div>
              )}
              {activeItem.format && (
                <div className="flex items-start gap-3 border-t border-white/15 pt-4">
                  <UsersRound className="mt-0.5 h-5 w-5 shrink-0 text-pulse-300" />
                  <p className="text-sm leading-6 text-white/75">
                    <span className="font-bold text-white">形式：</span>
                    {activeItem.format}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="p-5 sm:p-6 lg:p-7">
            <div className="flex flex-wrap gap-2">
              {activeItem.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white px-3 py-1.5 text-sm font-bold text-marrow-700 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5">
              <h4 className="flex items-center gap-2 text-lg font-black text-marrow-950">
                <CheckCircle2 className="h-5 w-5 text-clinic-700" />
                关键任务
              </h4>
              <ul className="mt-3 grid gap-2">
                {activeItem.tasks.map((task) => (
                  <li key={task} className="rounded-xl bg-white px-4 py-3 text-sm font-semibold leading-6 text-stone-700 shadow-sm">
                    {task}
                  </li>
                ))}
              </ul>
            </div>

            {(activeItem.scriptQuestions || activeItem.outreachPaths) && (
              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                {activeItem.scriptQuestions && (
                  <div className="rounded-2xl border border-marrow-100 bg-white p-4 shadow-card">
                    <h4 className="flex items-center gap-2 text-lg font-black text-marrow-950">
                      <MessageCircleQuestion className="h-5 w-5 text-marrow-700" />
                      圆桌论坛脚本卡
                    </h4>
                    <div className="mt-3 grid gap-2">
                      {activeItem.scriptQuestions.map((question) => (
                        <p key={question} className="rounded-xl bg-marrow-50 px-3 py-2 text-sm font-semibold leading-6 text-stone-700">
                          {question}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {activeItem.outreachPaths && (
                  <div className="rounded-2xl border border-marrow-100 bg-white p-4 shadow-card">
                    <h4 className="flex items-center gap-2 text-lg font-black text-marrow-950">
                      <Route className="h-5 w-5 text-marrow-700" />
                      外展路径
                    </h4>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {activeItem.outreachPaths.map((path) => (
                        <p key={path} className="rounded-xl bg-marrow-50 px-3 py-3 text-center text-sm font-black text-marrow-800">
                          {path}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeItem.priority === "highest" && (
              <p className="mt-5 flex items-start gap-3 rounded-2xl border border-pulse-300 bg-pulse-100 px-4 py-3 text-sm font-bold leading-6 text-marrow-900">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-pulse-500" />
                这个节点需要立即推进：物资、互动设计、人员排班、现场拍摄和回顾推文要同步准备。
              </p>
            )}

            {activeItem.id === "autumn-summary" && (
              <p className="mt-5 flex items-start gap-3 rounded-2xl border border-clinic-200 bg-clinic-50 px-4 py-3 text-sm font-bold leading-6 text-clinic-800">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0" />
                展示逻辑：延续 - 评估 - 总结 - 沉淀，让项目从单次活动走向品牌化。
              </p>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
