import { useCallback, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/loader";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Showreel, Work } from "@/components/work";
import { Cursor, FilmGrain, Nav, SmoothScroll } from "@/components/site-chrome";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [ready, setReady] = useState(false);
  const onDone = useCallback(() => setReady(true), []);

  return (
    <div className="relative min-h-dvh bg-bg text-fg">
      <Loader onDone={onDone} />
      <FilmGrain />
      <Cursor />
      <SmoothScroll enabled={ready} />
      <Nav visible={ready} />
      <main>
        <Hero armed={ready} />
        <Showreel />
        <Work />
        <Contact />
      </main>
    </div>
  );
}