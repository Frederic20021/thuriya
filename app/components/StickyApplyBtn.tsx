"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { content } from "@/app/data/content";

export default function StickyApplyBtn() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    // Appear after a short delay so it doesn't pop in immediately on load
    const timer = setTimeout(() => setVisible(true), 1200);

    // Hide when the contact form is visible — CTA would be redundant
    const contactEl = document.querySelector("#contact");
    if (!contactEl) return () => clearTimeout(timer);

    const observer = new IntersectionObserver(
      ([entry]) => setAtContact(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(contactEl);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && !atContact && (
        <motion.div
          key="sticky-cta"
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.92 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-40"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--primary)] text-white text-sm font-bold shadow-2xl shadow-black/40 hover:bg-[var(--primary-hover)] transition-colors"
          >
            {t(content.nav.cta)}
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
