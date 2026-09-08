import { motion } from "framer-motion";
import { TEAM, waLink } from "../data";

export default function Team() {
  return (
    <section id="team" className="bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-600">Meet the Team</span>
          <h2 className="font-serif text-3xl font-light leading-tight text-rosewood-800 md:text-4xl lg:text-5xl">
            The hands behind your transformation
          </h2>
          <p className="mt-4 text-base leading-relaxed text-taupe-600">
            Certified, experienced, and passionate about their craft — our therapists and stylists
            are the heart of Aura.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-rosewood-100 bg-white/70 shadow-sm transition-all hover:shadow-lg hover:shadow-rosewood-900/5"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="inline-block rounded-full bg-rosewood-600/90 px-3 py-1 text-xs font-medium text-cream-50">
                    {member.experience} years experience
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-medium text-rosewood-800">{member.name}</h3>
                <p className="text-sm font-medium text-rosewood-500">{member.role}</p>
                <p className="mt-1 text-xs text-taupe-500">Specialty: {member.specialty}</p>
                <a
                  href={waLink(`Hi! I'd like to book an appointment with ${member.name} (${member.specialty}) at Aura Salon & Spa.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs font-medium text-rosewood-600 transition-colors hover:text-rosewood-800"
                >
                  Book with {member.name.split(" ")[0]} →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
