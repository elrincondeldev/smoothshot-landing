"use client";

import { motion } from "framer-motion";
import { Icon } from "@/shared/ui/icon";
import { scaleIn } from "@/shared/lib/motion";

const editorFeatures = [
  "Dynamic gradient backgrounds",
  "Soft ambient shadows",
  "Adjustable corner radius",
  "Custom padding controls",
  "Annotations & highlights",
  "Recognize & copy text",
  "Adapt the ratio in one click",
];

export function EditorPremiumSection() {
  return (
    <section id="editor" className="py-24 px-6">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto aurora-gradient rounded-[3rem] p-1 md:p-2 overflow-hidden"
      >
        <div className="bg-surface rounded-[2.8rem] p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">
              Free — Included
            </span> */}
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-white leading-[1.1]">
              Make your screenshots look like design assets.
            </h2>
            <ul className="space-y-4 mb-10">
              {editorFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-on-surface-variant font-medium"
                >
                  <Icon
                    name="check_circle"
                    className="text-primary"
                    filled
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-surface px-8 py-4 rounded-xl text-lg font-black hover:bg-primary transition-all shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              Download for free
            </motion.button>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="relative rounded-2xl border border-white/10 shadow-2xl"
              alt="SmoothShot editor showing a screenshot with a beautiful gradient background, rounded corners, and soft shadows"
              src="/assets/edit_mode.png"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
