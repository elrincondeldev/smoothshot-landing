import Link from "next/link";
import { Icon } from "@/shared/ui/icon";

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Download", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Twitter", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [{ label: "Privacy", href: "/privacy" }],
  },
];

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full rounded-t-[2rem] mt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        <div>
          <div className="text-lg font-bold text-white mb-4">SmoothShot</div>
          <p className="text-on-surface-variant text-xs max-w-xs leading-relaxed uppercase tracking-widest font-semibold">
            &copy; 2024 SmoothShot. Built for macOS.
          </p>
          <div className="mt-6 flex items-center gap-2 text-primary">
            <Icon name="laptop_mac" className="text-lg" />
            <span className="text-[10px] font-black uppercase tracking-tighter">
              Designed for Silicon
            </span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-6">
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <span className="text-white text-[10px] font-black tracking-[0.2em] uppercase">
                {section.title}
              </span>
              {section.links.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-on-surface-variant text-xs uppercase tracking-widest font-semibold hover:text-primary transition-all"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-on-surface-variant text-xs uppercase tracking-widest font-semibold hover:text-primary transition-all"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
