"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { content } from "@/app/data/content";

export default function About() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const headlineLines = t(content.about.headline).split("\n");

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 bg-[var(--surface)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--primary)] mb-5"
            >
              {t(content.about.eyebrow)}
            </motion.p>

            <div className="mb-6">
              {headlineLines.map((line, i) => (
                <motion.h2
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                  className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[var(--foreground)]"
                >
                  {i === 1 ? (
                    <span className="text-[var(--primary)]">{line}</span>
                  ) : (
                    line
                  )}
                </motion.h2>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="text-[var(--muted)] leading-relaxed text-base mb-8"
            >
              {t(content.about.philosophy)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-2"
            >
              <p className="text-sm text-[var(--muted)] flex items-center gap-2">
                <span className="w-4 h-px bg-[var(--primary)] inline-block" aria-hidden />
                {t(content.about.founded)}
              </p>
              <p className="text-sm text-[var(--muted)] flex items-center gap-2">
                <span className="w-4 h-px bg-[var(--primary)] inline-block" aria-hidden />
                {t(content.about.rebranded)}
              </p>
            </motion.div>
          </div>

          {/* Right — decorative + stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative flex flex-col items-center justify-center"
          >
            {/* Hinomaru-inspired symbol */}
            <div className="relative flex items-center justify-center mb-12">
              <div
                className="w-56 h-56 rounded-full border-[20px] border-[var(--surface-2)]"
                aria-hidden
              />
              <div
                className="absolute w-28 h-28 rounded-full bg-[var(--primary)] opacity-90"
                aria-hidden
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 w-full max-w-sm">
              {content.about.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.45 + i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-3xl font-bold text-[var(--primary)] mb-1">{stat.value}</p>
                  <p className="text-xs text-[var(--muted)] leading-tight">{t(stat.label)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
