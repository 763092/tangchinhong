import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { NAV } from "@/data/content";
import { useLocale, tx } from "@/lib/locale";
import { cn } from "@/lib/utils";

export function SmoothScroll({ enabled }: { enabled: boolean }) {
  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [enabled]);
  return null;
}

export function FilmGrain() {
  return <div className="film-grain" aria-hidden="true" />;
}

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.documentElement.classList.add("max-md:cursor-auto");
    const onMove = (e: MouseEvent) => {
      if (dot.current) {
        dot.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const hoverable = target?.closest("a, button, [data-cursor='hover']");
      ring.current?.classList.toggle("is-hover", Boolean(hoverable));
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot hidden md:block" />
      <div ref={ring} className="cursor-ring hidden md:block" />
    </>
  );
}

export function Nav({ visible }: { visible: boolean }) {
  const locale = useLocale((s) => s.locale);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-stroke/80 bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:h-[4.5rem] md:px-8">
        <a href="#top" className="title-heiti shrink-0 text-sm text-fg">
          Portfolio
        </a>
        <nav className="hide-scrollbar flex items-center gap-0.5 overflow-x-auto md:gap-2">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="kicker px-2 py-2 text-muted transition-colors duration-200 hover:text-fg md:px-3"
            >
              {tx(locale, item.label)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
