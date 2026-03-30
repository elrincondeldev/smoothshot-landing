"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "Features", href: "#features", active: true },
  { label: "Roadmap", href: "#roadmap" },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl shadow-2xl shadow-black/20 font-['Inter'] antialiased tracking-tight text-sm font-medium bg-gradient-to-b from-black/10 to-transparent"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold tracking-tighter text-[#f0f0f5]">
            SmoothShot
          </span>
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors cursor-pointer duration-200 hover:text-white ${
                  link.active
                    ? "text-primary font-semibold"
                    : "text-on-surface-variant"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-on-primary px-5 py-2 rounded-lg font-bold"
        >
          Download
        </motion.button>
      </div>
    </motion.nav>
  );
}
