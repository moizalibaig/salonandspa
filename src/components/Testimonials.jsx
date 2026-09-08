import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((dir) => {
    setDirection(dir);
    setActive((p) => (p + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => go(1), 6000);
    return () => clearInterval(timer);
  }, [go, active]);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-cream-200 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-600">Client Love</span>
          <h2 className="font-serif text-3xl font-light leading-tight text-rosewood-800 md:text-4xl lg:text-5xl">
            Words from our Aura family
          </h2>
        </motion.div>

        <div className="relative mt-12 min-h-[320px] md:min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.35 }}
              className="mx-auto max-w-3xl"
            >
              <div className="relative rounded-3xl border border-rosewood-100 bg-white/80 p-8 text-center shadow-sm md:p-10">
                <Quote className="mx-auto mb-4 h-8 w-8 text-rosewood-200" fill="currentColor" />
                <p className="font-serif text-lg italic leading-relaxed text-charcoal-700 md:text-xl">
                  "{TESTIMONIALS[active].quote}"
                </p>
                <div className="mt-5 flex flex-col items-center gap-2">
                  <div className="flex">
                    {[...Array(TESTIMONIALS[active].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-rosewood-100 font-serif text-sm font-medium text-rosewood-600">
                      {TESTIMONIALS[active].initials}
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-rosewood-800">{TESTIMONIALS[active].name}</p>
                      <p className="text-xs text-taupe-500">{TESTIMONIALS[active].area}, Karachi</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            className="rounded-full border border-rosewood-200 p-2.5 text-rosewood-600 transition-colors hover:bg-rosewood-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-8 bg-rosewood-500" : "w-2 bg-rosewood-200 hover:bg-rosewood-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            className="rounded-full border border-rosewood-200 p-2.5 text-rosewood-600 transition-colors hover:bg-rosewood-50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
