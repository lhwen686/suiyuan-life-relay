import type { MouseEvent } from "react";
import { HeartHandshake, Menu } from "lucide-react";
import { navItems } from "../data/project";
import { scrollToSection } from "../utils/scrollToSection";

export function Navbar() {
  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    scrollToSection(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-marrow-900/10 bg-[#fffaf8]/88 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between gap-4 py-3">
        <a
          href="#hero"
          onClick={(event) => handleNavClick(event, "hero")}
          className="focus-ring flex shrink-0 items-center gap-3 rounded-full"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-marrow-800 text-white shadow-sm">
            <HeartHandshake size={21} strokeWidth={2.2} />
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-bold text-marrow-950">髓缘大爱</span>
            <span className="block text-xs text-stone-500">生命接力项目</span>
          </span>
        </a>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
          <Menu className="h-5 w-5 shrink-0 text-marrow-700 lg:hidden" aria-hidden="true" />
          <div className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-marrow-100/80 bg-white/70 p-1 shadow-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => handleNavClick(event, item.id)}
                className="focus-ring whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-stone-600 transition hover:bg-marrow-800 hover:text-white lg:px-4"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
