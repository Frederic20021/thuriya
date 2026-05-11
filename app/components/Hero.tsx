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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden "
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full ">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <motion.p
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
            custom={0}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--primary)]"
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

      </div>
    </section>
  );
}
