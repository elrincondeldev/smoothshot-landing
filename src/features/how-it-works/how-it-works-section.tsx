"use client";

import { motion } from "framer-motion";
import { Icon } from "@/shared/ui/icon";
import { fadeInUp, staggerContainer } from "@/shared/lib/motion";

const steps = [
  {
    icon: "target",
    title: "Capture",
    description: "Use shortcuts to snap exactly what you need.",
  },
  {
    icon: "palette",
    title: "Edit",
    description: "Add professional styling with one-click presets.",
  },
  {
    icon: "send",
    title: "Share",
    description: "share it with one click, or save it to your macbook",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-center">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold tracking-tight mb-20"
      >
        Capture to Clipboard in 3 steps.
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {steps.map((step) => (
          <motion.div key={step.title} variants={fadeInUp}>
            <div className="w-20 h-20 mx-auto bg-surface-container-high rounded-full flex items-center justify-center text-4xl text-primary mb-8 border border-white/5">
              <Icon name={step.icon} className="text-4xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
            <p className="text-on-surface-variant">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
