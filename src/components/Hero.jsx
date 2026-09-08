import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { SITE, waLink, HERO_IMAGE } from "../data";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Elegant salon interior with warm lighting and natural tones"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/40 to-charcoal-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-rosewood-900/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="font-serif text-lg italic text-gold-200">{SITE.nameUrdu}</span>
            <span className="h-px w-8 bg-gold-300/50" />
            <span className="text-xs uppercase tracking-[0.2em] text-cream-200/80">Since {SITE.established}</span>
          </div>

          <h1 className="font-serif text-4xl font-light leading-[1.1] text-cream-50 sm:text-5xl md:text-6xl lg:text-7xl">
            Where Karachi
            <br />
            comes to <span className="italic text-gold-200">glow</span>.
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-cream-100/90 sm:text-lg">
            Hair, skin, spa, and bridal artistry — crafted by certified therapists in a serene
            DHA Phase 6 studio. Every detail designed for you to unwind, transform, and shine.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={waLink("Hi! I'd like to check availability at Aura Salon & Spa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-green-900/20 transition-all hover:bg-[#1da851] hover:shadow-xl"
            >
              Check Availability on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/40 bg-cream-50/10 px-6 py-3.5 text-sm font-medium text-cream-50 backdrop-blur-sm transition-all hover:bg-cream-50/20"
            >
              View Services
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold-300 text-gold-300" />
              ))}
            </div>
            <p className="text-sm text-cream-100/80">
              Rated 4.9/5 by 1,200+ Karachi clients on Google & Instagram
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-cream-100/60 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-8 w-px bg-cream-100/40"
        />
      </motion.div>
    </section>
  );
}
