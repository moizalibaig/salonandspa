import { motion } from "framer-motion";
import { TRUST_STATS } from "../data";

export default function TrustStrip() {
  return (
    <section className="relative z-10 -mt-px border-y border-rosewood-200/40 bg-cream-100">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px md:grid-cols-4">
        {TRUST_STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center justify-center px-4 py-8 text-center md:py-10"
          >
            <span className="font-serif text-3xl font-medium text-rosewood-600 md:text-4xl">
              {stat.value}
            </span>
            <span className="mt-1.5 text-xs uppercase tracking-[0.15em] text-taupe-500 md:text-sm">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
