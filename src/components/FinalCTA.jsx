import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { SITE, waLink } from "../data";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-rosewood-700 py-20 md:py-28">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-gold-300 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-rosewood-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-serif text-lg italic text-gold-200">Your glow awaits</span>
          <h2 className="mt-3 font-serif text-3xl font-light leading-tight text-cream-50 md:text-5xl lg:text-6xl">
            Ready to treat yourself?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream-100/80">
            Book your appointment today and discover why thousands of Karachi women and men
            trust Aura with their beauty and wellness. We can't wait to welcome you.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink("Hi! I'd like to book an appointment at Aura Salon & Spa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-sm font-medium text-white shadow-lg shadow-green-900/20 transition-all hover:bg-[#1da851] hover:shadow-xl"
            >
              Book on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={SITE.phoneLink}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/30 px-7 py-4 text-sm font-medium text-cream-50 transition-all hover:bg-cream-50/10"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
