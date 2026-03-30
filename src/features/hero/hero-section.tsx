"use client";

import { motion } from "framer-motion";
import { Icon } from "@/shared/ui/icon";
import { fadeInUp, staggerContainer } from "@/shared/lib/motion";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary text-xs font-bold tracking-widest uppercase mb-8"
        >
          <Icon name="bolt" className="text-[14px]" /> Native macOS App
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50"
        >
          Capture. Edit. Ship.
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          The high-performance workspace for your screenshots. Built for
          professionals who value speed and beauty.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{
              boxShadow: "0 0 30px rgba(173, 198, 255, 0.3)",
            }}
            className="bg-primary text-on-primary-fixed px-8 py-4 rounded-xl text-lg font-bold transition-all"
          >
            Download for free
          </motion.button>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-surface-container-lowest"
        >
          <video
            className="w-full aspect-[15/10] object-cover"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%231b1b20'/%3E%3C/svg%3E"
            src="/assets/hero_main.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 pointer-events-none" />
        </motion.div>
      </motion.div>
    </section>
  );
}
