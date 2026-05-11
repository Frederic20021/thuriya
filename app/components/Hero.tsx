"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
} from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { content } from "@/app/data/content";

const EASE = [0.25, 0.4, 0.25, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE },
  }),
};

export default function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });

  const headline = t(content.hero.headline);
  const lines = headline.split("\n");

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Subtle background decoration — hinomaru-inspired circle */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "var(--primary)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-[0.07]"
        style={{ background: "var(--primary)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 md:py-32">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <motion.p
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
            custom={0}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--primary)] mb-6"
          >
            {t(content.hero.eyebrow)}
          </motion.p>

          {/* Headline */}
          <div className="mb-6 space-y-0">
            {lines.map((line, i) => (
              <motion.h1
                key={i}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                variants={fadeUp}
                custom={0.1 + i * 0.12}
                className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-[var(--foreground)]"
              >
                {i === 1 ? (
                  <span className="text-[var(--primary)]">{line}</span>
                ) : (
                  line
                )}
              </motion.h1>
            ))}
          </div>

          {/* Sub copy */}
          <motion.p
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
            custom={0.42}
            className="text-base md:text-lg text-[var(--muted)] leading-relaxed max-w-xl mb-10"
          >
            {t(content.hero.sub)}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
            custom={0.54}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3.5 rounded-full bg-[var(--primary)] text-white text-sm font-semibold hover:bg-[var(--primary-hover)] transition-colors shadow-md shadow-black/30"
            >
              {t(content.hero.cta)}
              <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[var(--border)] text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface)] transition-colors"
            >
              {t(content.hero.scroll)}
            </a>
          </motion.div>
        </div>

        {/* Pain-point quotes */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeUp}
          custom={0.68}
          className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {content.hero.painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <span className="text-2xl mb-3 block" aria-hidden>💭</span>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{t(point)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-[var(--border)] flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-[var(--muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
