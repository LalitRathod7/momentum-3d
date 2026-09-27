import { Cpu } from "lucide-react";
import { navLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-graphite-700 bg-graphite-900 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2 font-display text-base font-semibold text-concrete">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-copper-500 text-graphite-900">
            <Cpu size={14} />
          </span>
          Momentum
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => document.getElementById(link.href)?.scrollIntoView({ behavior: "smooth" })}
              className="text-sm text-graphite-300 hover:text-concrete"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <p className="font-mono text-xs text-graphite-500">© {new Date().getFullYear()} Momentum</p>
      </div>
    </footer>
  );
}
