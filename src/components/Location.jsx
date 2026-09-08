import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Car } from "lucide-react";
import { SITE } from "../data";

export default function Location() {
  return (
    <section id="contact" className="bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-600">Visit Us</span>
          <h2 className="font-serif text-3xl font-light leading-tight text-rosewood-800 md:text-4xl lg:text-5xl">
            Find us in the heart of DHA
          </h2>
          <p className="mt-4 text-base leading-relaxed text-taupe-600">
            Conveniently located in Bukhari Commercial, DHA Phase 6 — with plenty of parking
            and easy access from Clifton, Sunset Boulevard, and DHA internal roads.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-rosewood-100 bg-white/60 lg:col-span-3"
          >
            <iframe
              src={SITE.mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aura Salon & Spa location map"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            <InfoCard icon={MapPin} title="Our Address">
              <p className="text-sm leading-relaxed text-taupe-600">{SITE.address}</p>
              <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="mt-1.5 inline-block text-xs font-medium text-rosewood-600 hover:text-rosewood-800">
                Get directions →
              </a>
            </InfoCard>

            <InfoCard icon={Phone} title="Call or WhatsApp">
              <a href={SITE.phoneLink} className="text-sm font-medium text-taupe-700 hover:text-rosewood-600">{SITE.phone}</a>
              <p className="mt-0.5 text-xs text-taupe-400">WhatsApp: {SITE.whatsappDisplay}</p>
            </InfoCard>

            <InfoCard icon={Clock} title="Working Hours">
              <ul className="space-y-1">
                {SITE.hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-xs">
                    <span className="text-taupe-500">{h.day}</span>
                    <span className="font-medium text-taupe-600">{h.time}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard icon={Car} title="Parking">
              <p className="text-sm leading-relaxed text-taupe-600">
                Free street parking available on Bukhari Lane 5. Valet parking on weekends for bridal appointments.
              </p>
            </InfoCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-rosewood-100 bg-white/70 p-5 shadow-sm">
      <div className="mb-2.5 flex items-center gap-2">
        <Icon className="h-4 w-4 text-rosewood-500" />
        <h3 className="text-sm font-semibold text-rosewood-800">{title}</h3>
      </div>
      {children}
    </div>
  );
}
