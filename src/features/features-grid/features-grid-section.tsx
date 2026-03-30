"use client";

import { motion } from "framer-motion";
import { Icon } from "@/shared/ui/icon";
import { Reveal } from "@/shared/ui/reveal";
import { fadeInUp, staggerContainer } from "@/shared/lib/motion";

const features = [
  {
    icon: "fullscreen",
    title: "Screenshot modes",
    description:
      "Window, area, or full screen. Pixel-perfect capture every single time.",
  },
  {
    icon: "videocam",
    title: "Screen recording",
    description:
      "Record your entire screen or just a region. Clean MP4 and GIF exports, ready to share.",
  },
  {
    icon: "wallpaper",
    title: "Beautiful backgrounds",
    description:
      "Drop your screenshot on stunning gradients, colors, and textures. Social-ready in one click.",
  },
  {
    icon: "share",
    title: "Share to X instantly",
    description:
      "Hit share and X opens with your image already attached. One tap to post — zero friction.",
  },
  {
    icon: "text_fields",
    title: "OCR / Live Text",
    description:
      "Extract text from any screenshot instantly. Copy emails, codes, or paragraphs in seconds.",
  },
  {
    icon: "draw",
    title: "Free canvas",
    description:
      "Draw, annotate, and write directly on your captures. Arrows, text, highlights — make your point clear.",
  },
];

export function FeaturesGridSection() {
  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      <Reveal className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Precision tools for modern teams.
        </h2>
        <p className="text-on-surface-variant">
          Everything you need, nothing you don&apos;t. Pure productivity.
        </p>
      </Reveal>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={fadeInUp}
            className="group p-8 rounded-3xl bg-surface-container-low border border-white/5 hover:bg-surface-container-high transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Icon name={feature.icon} />
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-on-surface-variant leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
