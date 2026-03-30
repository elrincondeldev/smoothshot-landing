"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/shared/lib/motion";

const stats = [
  { value: "One clic", label: "Share in X" },
  { value: "Extract text", label: "OCR" },
  { value: "Free", label: "Forever", highlight: true },
];

export function StatsSection() {
  return (
    <section className="py-12 border-y border-white/5 bg-surface-container-lowest">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeInUp}>
            <div
              className={`text-4xl font-black mb-2 ${
                stat.highlight ? "text-primary" : "text-white"
              }`}
            >
              {stat.value}
            </div>
            <div className="text-on-surface-variant text-sm uppercase tracking-widest font-bold">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
