"use client";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-35">
        <source src="/videos/luxury.mp4" type="video/mp4" />
      </video>
      <div className="relative text-center max-w-5xl">
        <h1 className="font-serif text-5xl md:text-8xl leading-tight">A cinematic archive of us.</h1>
        <p className="mt-6 text-ivory/80 max-w-2xl mx-auto">Not a scrapbook. An editorial memory architecture with atmosphere, motion, and permanence.</p>
        <motion.a whileHover={{ scale: 1.03 }} href="#about" className="inline-block mt-10 glass rounded-full px-8 py-4 tracking-[0.2em] text-xs uppercase">Enter Our Story</motion.a>
      </div>
    </section>
  );
}
