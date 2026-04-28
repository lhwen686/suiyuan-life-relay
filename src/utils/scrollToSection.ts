type ScrollToSectionOptions = {
  behavior?: ScrollBehavior;
  updateHash?: "push" | "replace" | false;
};

export function scrollToSection(id: string, options: ScrollToSectionOptions = {}) {
  const target = document.getElementById(id);

  if (!target) {
    return;
  }

  const anchor = target.querySelector<HTMLElement>("[data-scroll-anchor]") ?? target;
  const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
  const targetRect = anchor.getBoundingClientRect();
  const visibleHeight = Math.max(window.innerHeight - headerHeight, 1);
  const targetTop = targetRect.top + window.scrollY;
  const targetCenter = targetTop + Math.min(targetRect.height, visibleHeight) / 2;
  const visibleCenter = headerHeight + visibleHeight / 2;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const behavior = options.behavior ?? (prefersReducedMotion ? "auto" : "smooth");

  window.scrollTo({
    top: Math.max(0, Math.round(targetRect.height > visibleHeight ? targetTop - headerHeight : targetCenter - visibleCenter)),
    behavior
  });

  if (options.updateHash === false) {
    return;
  }

  const hash = `#${id}`;

  if (window.location.hash === hash) {
    return;
  }

  if (options.updateHash === "replace") {
    window.history.replaceState(null, "", hash);
    return;
  }

  window.history.pushState(null, "", hash);
}
