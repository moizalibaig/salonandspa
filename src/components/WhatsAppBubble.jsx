import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waLink, SITE } from "../data";

export default function WhatsAppBubble() {
  return (
    <motion.a
      href={waLink("Hi! I'd like to know more about Aura Salon & Spa services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 shadow-lg shadow-green-900/20 transition-all hover:shadow-xl hover:shadow-green-900/30 md:bottom-7 md:right-7"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="h-6 w-6 text-white" fill="white" />
      <span className="hidden text-sm font-medium text-white sm:inline">Book on WhatsApp</span>
      <motion.span
        className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-rosewood-400"
        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.a>
  );
}
