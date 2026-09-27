import { useEffect, useState } from "react";
import { Menu, X, Cpu } from "lucide-react";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick(e, id) {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-graphite-900/90 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          onClick={(e) => handleClick(e, "top")}
          className="flex items-center gap-2 font-display text-lg font-semibold text-concrete"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-copper-500 text-graphite-900">
            <Cpu size={17} strokeWidth={2.5} />
          </span>
          Momentum
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm font-medium text-graphite-300 transition-colors hover:text-concrete"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={(e) => handleClick(e, "contact")}
            className="hidden rounded-md border border-copper-500/50 px-4 py-2 text-sm font-medium text-copper-300 transition-colors hover:bg-copper-500/10 sm:block"
          >
            Get the template
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="rounded-md p-2 text-concrete hover:bg-white/5 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-graphite-700 bg-graphite-900 px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="block w-full py-2 text-left text-sm text-graphite-300 hover:text-concrete"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
