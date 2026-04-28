import { useState } from "react";
import { ChevronDown, CircleHelp, GraduationCap, HeartHandshake, HeartPulse } from "lucide-react";
import { backgroundCards } from "../data/project";

const icons = [HeartPulse, CircleHelp, GraduationCap, HeartHandshake];

export function MisconceptionCards() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setOpenIndexes((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index]
    );
  };

  return (
    <div className="grid items-start gap-5 md:grid-cols-2 xl:grid-cols-4">
      {backgroundCards.map((card, index) => {
        const Icon = icons[index] ?? CircleHelp;
        const isOpen = openIndexes.includes(index);
        const panelId = `background-card-panel-${index}`;

        return (
          <article
            key={card.title}
            className={`rounded-2xl border bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-soft ${
              isOpen ? "border-marrow-200" : "border-marrow-100"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleCard(index)}
              className="focus-ring group flex w-full items-start justify-between gap-4 rounded-xl text-left"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="flex gap-4">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors ${
                    isOpen ? "bg-marrow-100 text-marrow-800" : "bg-marrow-50 text-marrow-700"
                  }`}
                >
                  <Icon size={24} />
                </span>
                <span>
                  <span className="inline-flex rounded-full bg-pulse-100 px-3 py-1 text-sm font-bold text-marrow-800">
                    {card.accent}
                  </span>
                  <span className="mt-3 block text-xl font-bold text-marrow-900">{card.title}</span>
                </span>
              </span>
              <ChevronDown
                className={`mt-2 h-5 w-5 shrink-0 text-marrow-700 transition-transform duration-300 group-hover:text-marrow-900 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <p className="mt-4 text-base leading-7 text-stone-600">{card.short}</p>
            <div
              id={panelId}
              aria-hidden={!isOpen}
              className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-out ${
                isOpen ? "mt-5 max-h-80 opacity-100" : "mt-0 max-h-0 opacity-0"
              }`}
            >
              <div className="space-y-4">
                <p className="rounded-2xl bg-marrow-50 p-4 text-sm leading-7 text-stone-700">{card.details}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
