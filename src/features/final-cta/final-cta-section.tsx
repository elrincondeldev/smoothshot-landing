"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/shared/lib/motion";

export function FinalCtaSection() {
  return (
    <section className="py-32 px-6 text-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-7xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary"
        >
          The fastest way to capture and share your work.
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-primary text-on-primary-fixed px-10 py-5 rounded-2xl text-xl font-bold transition-all"
          >
            Download for free
          </motion.button>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-on-surface-variant text-sm max-w-lg mx-auto leading-relaxed"
        >
          100% free. Native macOS app. No cloud.
          <br />
          Your files stay yours. Forever.
        </motion.p>
      </motion.div>
    </section>
  );
}
