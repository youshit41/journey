"use client";
import { motion } from "framer-motion";

const milestones = ["First Encounter", "Paris Night", "Lake House Winter", "Promise in Tokyo"];

export function ContentSections() {
  return (
    <>
      <section id="about" className="py-28 px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="aspect-[4/5] rounded-3xl bg-softblack border border-white/10" />
        <div>
          <h2 className="font-serif text-4xl md:text-6xl">About</h2>
          <p className="mt-6 text-ivory/75 leading-relaxed">We built a relationship through deliberate moments, distance, and return. This space documents the architecture of that intimacy.</p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16">
        <h3 className="font-serif text-4xl mb-10">Our Story Timeline</h3>
        <div className="space-y-7 border-l border-rosegold/30 pl-8">
          {milestones.map((m, i) => (
            <motion.div key={m} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass p-5 rounded-xl">
              <p className="text-rosegold text-xs tracking-[0.2em]">0{i + 1}</p>
              <p className="font-serif text-2xl mt-1">{m}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 columns-1 md:columns-3 gap-6 space-y-6">
        {[1, 2, 3, 4, 5, 6].map((x) => <div key={x} className="break-inside-avoid rounded-2xl h-72 bg-softblack border border-white/10 hover:grayscale-0 grayscale transition" />)}
      </section>
    </>
  );
}
