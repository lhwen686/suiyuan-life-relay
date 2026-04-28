import { HeartHandshake } from "lucide-react";
import { closingSummary } from "../data/project";

export function ClosingSummary() {
  return (
    <section id="closing" className="scroll-mt-20 bg-marrow-950 py-16 text-white sm:py-20 lg:flex lg:min-h-screen lg:items-center">
      <div className="section-shell" data-scroll-anchor>
        <div className="mx-auto max-w-5xl text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pulse-300 text-marrow-950 shadow-soft">
            <HeartHandshake size={30} strokeWidth={2.4} />
          </span>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-pulse-300">会议收束</p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{closingSummary.title}</h2>
          <div className="mx-auto mt-8 grid max-w-4xl gap-4 text-lg font-semibold leading-9 text-white/78 sm:text-xl">
            {closingSummary.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
