import { BookOpenText, HandHeart, MessageCircleHeart, RefreshCw, ShieldPlus, UsersRound } from "lucide-react";
import { serviceLoop } from "../data/project";

const icons = [BookOpenText, UsersRound, ShieldPlus, HandHeart, MessageCircleHeart, RefreshCw];

export function ServiceLoop() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-marrow-100 bg-white p-5 shadow-soft sm:p-7">
      <div className="absolute inset-x-8 top-1/2 hidden h-1 rounded-full bg-marrow-100 xl:block" />
      <div className="relative mx-auto mb-7 max-w-2xl rounded-3xl bg-marrow-800 px-6 py-5 text-center text-white shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-pulse-300">闭环机制</p>
        <h3 className="mt-2 text-2xl font-black sm:text-3xl">把一次动员，做成可循环的生命教育机制</h3>
      </div>
      <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        {serviceLoop.map((step, index) => {
          const Icon = icons[index] ?? BookOpenText;
          return (
            <div key={step.title} className="relative rounded-2xl border border-marrow-100 bg-marrow-50 p-4 text-center shadow-sm">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-marrow-700 shadow-sm ring-4 ring-marrow-50">
                <Icon size={25} />
              </span>
              <p className="mt-4 text-sm font-black text-marrow-300">0{index + 1}</p>
              <h3 className="mt-1 text-2xl font-black text-marrow-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
