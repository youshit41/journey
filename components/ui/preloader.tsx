"use client";

import { motion, AnimatePresence } from "framer-motion";

export function Preloader({ loaded }: { loaded: boolean }) {
  return (
    <AnimatePresence>
      {!loaded && (
        <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-black" exit={{ opacity: 0 }}>
          <motion.h1
            initial={{ letterSpacing: "0.5em", opacity: 0 }}
            animate={{ letterSpacing: "0.1em", opacity: 1 }}
            className="font-serif text-3xl md:text-6xl text-rosegold"
          >
            NOCTURNE
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
