import { BarChart3, Megaphone, Network, Presentation, Settings2, UsersRound } from "lucide-react";
import { teams } from "../data/project";

const icons = [Settings2, Megaphone, Presentation, UsersRound, Network, BarChart3];

export function TeamDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {teams.map((team, index) => {
        const Icon = icons[index] ?? Settings2;
        return (
          <article key={team.name} className="rounded-2xl border border-marrow-100 bg-white p-4 shadow-card">
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-marrow-50 text-marrow-700">
                <Icon size={23} />
              </span>
              <span className="rounded-full bg-pulse-100 px-3 py-1 text-sm font-black text-marrow-800">
                建议人数 {team.suggestedPeople}
              </span>
            </div>
            <div className="mt-3 flex items-baseline justify-between gap-4">
              <h3 className="text-2xl font-black text-marrow-900">{team.name}</h3>
              <span className="text-sm font-black text-marrow-300">{team.tone}</span>
            </div>
            <p className="mt-2 text-sm font-semibold text-marrow-600">{team.mission}</p>
            <div className="mt-3">
              <p className="text-sm font-black uppercase tracking-[0.12em] text-stone-500">职责</p>
              <div className="mt-2 flex flex-wrap gap-2">
              {team.duties.map((duty) => (
                <span key={duty} className="rounded-full bg-stone-100 px-3 py-1.5 text-sm text-stone-700">
                  {duty}
                </span>
              ))}
              </div>
            </div>
            <div className="mt-3 rounded-2xl bg-marrow-50 p-3">
              <p className="text-sm font-black uppercase tracking-[0.12em] text-marrow-500">近期任务</p>
              <p className="mt-2 text-sm leading-6 text-stone-700">{team.recentTask}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
