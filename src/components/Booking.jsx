import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Phone, Scissors, StickyNote, Send, CheckCircle2 } from "lucide-react";
import { SERVICES, waLink, SITE } from "../data";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Hi ${SITE.name}! I'd like to book an appointment.`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service || "General consultation"}`,
      `Preferred Date: ${form.date || "Flexible"}`,
      `Preferred Time: ${form.time || "Flexible"}`,
      form.notes ? `Notes: ${form.notes}` : "",
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank");
  };

  const update = (key, value) => setForm((p) => ({ ...p, [key]: value }));

  const allServices = SERVICES.flatMap((c) => c.items.map((i) => `${c.category} — ${i.name}`));

  return (
    <section id="booking" className="bg-cream-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <span className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-600">Book Appointment</span>
            <h2 className="font-serif text-3xl font-light leading-tight text-rosewood-800 md:text-4xl lg:text-5xl">
              Reserve your moment of calm
            </h2>
            <p className="mt-5 text-base leading-relaxed text-taupe-600">
              Fill in your details and we'll confirm your appointment on WhatsApp within minutes.
              No back-and-forth, no phone tag — just a quick chat to lock in your slot.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Quick WhatsApp confirmation — usually within 15 minutes during open hours",
                "Choose your preferred therapist or let us match you with the best fit",
                "Flexible rescheduling with just 4 hours' notice",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-rosewood-500" />
                  <span className="text-sm text-taupe-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-rosewood-100 bg-white/80 p-6 shadow-sm md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field icon={User} label="Your Name" required>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="e.g. Ayesha Khan"
                    className="w-full rounded-lg border border-rosewood-200 bg-cream-50 px-3 py-2.5 text-sm text-charcoal-800 outline-none transition-colors placeholder:text-taupe-400 focus:border-rosewood-400"
                  />
                </Field>
                <Field icon={Phone} label="Phone Number" required>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="e.g. 0300 1234567"
                    className="w-full rounded-lg border border-rosewood-200 bg-cream-50 px-3 py-2.5 text-sm text-charcoal-800 outline-none transition-colors placeholder:text-taupe-400 focus:border-rosewood-400"
                  />
                </Field>
              </div>

              <Field icon={Scissors} label="Preferred Service" required>
                <select
                  required
                  value={form.service}
                  onChange={(e) => update("service", e.target.value)}
                  className="w-full rounded-lg border border-rosewood-200 bg-cream-50 px-3 py-2.5 text-sm text-charcoal-800 outline-none transition-colors focus:border-rosewood-400"
                >
                  <option value="">Select a service...</option>
                  {allServices.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field icon={Calendar} label="Preferred Date">
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    className="w-full rounded-lg border border-rosewood-200 bg-cream-50 px-3 py-2.5 text-sm text-charcoal-800 outline-none transition-colors focus:border-rosewood-400"
                  />
                </Field>
                <Field icon={Calendar} label="Preferred Time">
                  <input
                    type="time"
                    value={form.time}
                    onChange={(e) => update("time", e.target.value)}
                    className="w-full rounded-lg border border-rosewood-200 bg-cream-50 px-3 py-2.5 text-sm text-charcoal-800 outline-none transition-colors focus:border-rosewood-400"
                  />
                </Field>
              </div>

              <Field icon={StickyNote} label="Notes (optional)">
                <textarea
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  rows={3}
                  placeholder="Any specific requests, allergies, or preferences..."
                  className="w-full resize-none rounded-lg border border-rosewood-200 bg-cream-50 px-3 py-2.5 text-sm text-charcoal-800 outline-none transition-colors placeholder:text-taupe-400 focus:border-rosewood-400"
                />
              </Field>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#1da851] hover:shadow-lg"
              >
                <Send className="h-4 w-4" />
                Send via WhatsApp
              </button>
              <p className="text-center text-xs text-taupe-400">
                This opens WhatsApp with your details pre-filled. We'll confirm your slot from there.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ icon: Icon, label, children, required }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-taupe-600">
        <Icon className="h-3.5 w-3.5 text-rosewood-400" />
        {label}{required && <span className="text-rosewood-500">*</span>}
      </span>
      {children}
    </label>
  );
}
