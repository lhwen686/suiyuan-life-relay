import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-14 sm:py-16 lg:flex lg:min-h-[calc(100vh-4rem)] lg:items-center ${className}`}>
      <div className="section-shell" data-scroll-anchor>
        <div className="mb-8 grid gap-4 lg:grid-cols-[0.95fr_0.85fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-marrow-600">{eyebrow}</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight text-marrow-950 sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg lg:justify-self-end">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
