"use client";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { Hero } from "@/components/sections/hero";
import { ContentSections } from "@/components/sections/content-sections";
import { Preloader } from "@/components/ui/preloader";
import { LuxuryNavbar } from "@/components/ui/luxury-navbar";
import { CustomCursor, MusicPlayer } from "@/components/ui/ambient";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.25 });
    const raf = (t: number) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    gsap.from("main", { opacity: 0, duration: 1.2, delay: 1 });
    const t = setTimeout(() => setLoaded(true), 1300);
    return () => {
      lenis.destroy();
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      <Preloader loaded={loaded} />
      <CustomCursor />
      <LuxuryNavbar />
      <main>
        <Hero />
        <ContentSections />
        <section className="py-28 px-6 md:px-16 text-center">
          <h3 className="font-serif text-5xl">A letter written in light.</h3>
          <p className="mt-6 max-w-3xl mx-auto glass rounded-3xl p-8 text-ivory/80">If cities can hold memory in concrete, we can hold ours in motion. Every frame here is a vow to remain intentional.</p>
        </section>
      </main>
      <MusicPlayer />
    </>
  );
}
