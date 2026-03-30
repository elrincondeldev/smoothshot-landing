"use client";

import { motion } from "framer-motion";
import { Icon } from "@/shared/ui/icon";
import { fadeInUp, staggerContainer } from "@/shared/lib/motion";

type RoadmapItem = {
  date: string;
  title: string;
  description: string;
  status: "completed" | "upcoming";
};

const roadmapItems: RoadmapItem[] = [
  {
    date: "April 2026",
    title: "v1.0 — Smoothshot is here",
    description:
      "The full toolkit drops: screenshots, screen recording, OCR, free canvas, beautiful backgrounds, and instant sharing to X. Everything you need to capture and ship, nothing you don't.",
    status: "completed",
  },
  {
    date: "June 2026",
    title: "Scrolling screenshots",
    description:
      "Capture entire pages, long chats, and endless feeds in a single shot. No more stitching screenshots together.",
    status: "upcoming",
  },
  {
    date: "August 2026",
    title: "Bento grid layouts",
    description:
      "Arrange multiple captures into clean, visual grids. Perfect for changelogs, tutorials, and show-off posts.",
    status: "upcoming",
  },
  {
    date: "October 2026",
    title: "Pin screenshots on screen",
    description:
      "Keep any capture floating on your desktop as a reference. Always visible, always accessible — like sticky notes for your screen.",
    status: "upcoming",
  },
  {
    date: "December 2026",
    title: "Background removal",
    description:
      "Strip the background from any capture with one click. Isolate UI elements, icons, or text — clean cutouts, zero effort.",
    status: "upcoming",
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 px-6 bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-center"
        >
          The Roadmap
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-transparent"
        >
          {roadmapItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className={`relative flex items-start gap-4 md:gap-0 ${
                index % 2 === 0
                  ? "md:flex-row-reverse md:text-right"
                  : "md:flex-row md:text-left"
              }`}
            >
              {/* Icon centered on the line */}
              <div
                className={`relative z-10 flex shrink-0 items-center justify-center w-10 h-10 rounded-full border border-white/10 shadow md:absolute md:left-1/2 md:-translate-x-1/2 ${
                  item.status === "completed"
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-highest text-on-surface-variant"
                }`}
              >
                <Icon
                  name={item.status === "completed" ? "check" : "schedule"}
                  className="text-sm"
                />
              </div>
              {/* Card */}
              <div
                className={`flex-1 md:w-[45%] md:flex-none p-6 rounded-2xl border border-white/5 ${
                  index % 2 === 0 ? "md:mr-[calc(50%+2rem)]" : "md:ml-[calc(50%+2rem)]"
                } ${
                  item.status === "completed"
                    ? "bg-surface-container-high"
                    : "bg-surface-container-high/50 shimmer opacity-75"
                }`}
              >
                <div className="flex items-center justify-between mb-2 text-left">
                  <time
                    className={`text-xs font-bold uppercase ${
                      item.status === "completed"
                        ? "text-primary"
                        : "text-on-surface-variant"
                    }`}
                  >
                    {item.date}
                  </time>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                      item.status === "completed"
                        ? "bg-primary/20 text-primary"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {item.status === "completed" ? "Completed" : "Soon"}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 text-left">
                  {item.title}
                </h4>
                <p className="text-sm text-on-surface-variant text-left">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
