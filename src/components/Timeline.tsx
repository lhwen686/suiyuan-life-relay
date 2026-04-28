import { useState } from "react";
import { Calendar, MapPin, Users } from "lucide-react";
import { timeline } from "../data/project";

export function Timeline() {
  const [openMonth, setOpenMonth] = useState("5月");
  const activeItem = timeline.find((item) => item.month === openMonth) ?? timeline[2];

  return (
    <div className="rounded-[2rem] border border-marrow-100 bg-white p-4 shadow-soft sm:p-6">
      <div className="grid gap-3 md:grid-cols-4 xl:grid-cols-7">
        {timeline.map((item) => {
          const isOpen = openMonth === item.month;
          return (
            <button
              key={item.month}
              type="button"
              onClick={() => setOpenMonth(item.month)}
              className={`focus-ring rounded-2xl border p-4 text-left transition ${
                isOpen
                  ? "border-marrow-700 bg-marrow-700 text-white shadow-card"
                  : "border-marrow-100 bg-marrow-50 text-marrow-900 hover:border-marrow-200 hover:bg-white"
              }`}
              aria-pressed={isOpen}
            >
              <span className="flex items-center gap-2 text-sm font-semibold">
                <Calendar size={16} />
                {item.month}
              </span>
              <span className="mt-3 block text-lg font-black leading-6">{item.title}</span>
            </button>
          );
        })}
      </div>

      <article className="mt-5 rounded-3xl bg-marrow-50 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-marrow-500">展开节点</p>
            <h3 className="mt-2 text-3xl font-black text-marrow-900">
              {activeItem.month} · {activeItem.title}
            </h3>
          </div>
          <span className="inline-flex w-fit rounded-full bg-white px-4 py-2 text-sm font-bold text-marrow-700 shadow-sm">
            点击上方月份切换重点
          </span>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h4 className="text-sm font-bold text-marrow-700">重点任务</h4>
            <ul className="mt-3 grid gap-2">
              {activeItem.tasks.map((task) => (
                <li key={task} className="rounded-xl bg-white px-4 py-3 text-base font-semibold leading-7 text-stone-700">
                  {task}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-3">
            <div className="rounded-xl bg-white p-4">
              <p className="flex items-center gap-2 text-sm font-bold text-marrow-700">
                <MapPin size={16} />
                地点 / 参与人员
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-700">{activeItem.place}</p>
            </div>
            <div className="rounded-xl bg-white p-4">
              <p className="flex items-center gap-2 text-sm font-bold text-marrow-700">
                <Users size={16} />
                筹备与分工
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-700">{activeItem.division}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
