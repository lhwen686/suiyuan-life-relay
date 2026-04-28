import { CheckCircle2 } from "lucide-react";
import { actionItems } from "../data/project";

export function ActionList() {
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      {actionItems.map((item, index) => (
        <article key={item.title} className="rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur">
          <div className="flex items-center justify-between">
            <CheckCircle2 className="h-7 w-7 text-pulse-300" />
            <span className="text-sm font-black text-white/40">0{index + 1}</span>
          </div>
          <h3 className="mt-5 text-xl font-black">{item.title}</h3>
          <p className="mt-2 text-sm font-semibold text-pulse-100">{item.owner}</p>
          <p className="mt-3 text-sm leading-6 text-white/75">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
