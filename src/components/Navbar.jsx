import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { SITE, waLink } from "../data";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "bg-cream-50/95 shadow-md shadow-rosewood-900/5 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <a href="#home" className="flex items-center gap-2 text-rosewood-700">
          <Sparkles className="h-6 w-6 text-gold-500" />
          <span className={`font-serif text-xl font-semibold tracking-wide ${scrolled ? "text-rosewood-700" : "text-rosewood-800"}`}>
            {SITE.name}
          </span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-rosewood-500 ${
                  scrolled ? "text-charcoal-700" : "text-charcoal-800"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={waLink("Hi! I'd like to check availability at Aura Salon & Spa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#1da851] hover:shadow-lg hover:shadow-green-600/20 sm:inline-flex"
          >
            <span className="h-2 w-2 rounded-full bg-white/90" />
            Book on WhatsApp
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-1.5 text-rosewood-700 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-cream-50/98 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 pb-4 pt-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-charcoal-700 transition-colors hover:bg-cream-200 hover:text-rosewood-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={waLink("Hi! I'd like to check availability at Aura Salon & Spa.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white"
                >
                  Book on WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
