"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { content } from "@/app/data/content";

export default function Services() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const headline = t(content.services.headline);
  const lines = headline.split("\n");

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 md:py-32 bg-[var(--surface)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--primary)] mb-4"
          >
            {t(content.services.eyebrow)}
          </motion.p>
          <div>
            {lines.map((line, i) => (
              <motion.h2
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[var(--foreground)]"
              >
                {line}
              </motion.h2>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {content.services.items.map((item, i) => (
            <ServiceCard
              key={item.id}
              icon={item.icon}
              title={t(item.title)}
              desc={t(item.desc)}
              featured={item.featured}
              delay={0.15 + i * 0.1}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  featured,
  delay,
  inView,
}: {
  icon: string;
  title: string;
  desc: string;
  featured: boolean;
  delay: number;
  inView: boolean;
}) {
  const titleLines = title.split("\n");

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative rounded-2xl p-6 flex flex-col h-full ${
        featured
          ? "bg-[var(--primary)] text-white shadow-xl shadow-red-900/30"
          : "bg-[var(--surface-2)] border border-[var(--border)]"
      }`}
    >
      {featured && (
        <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase bg-white/20 text-white px-2 py-0.5 rounded-full">
          Core
        </span>
      )}

      <div className="relative w-full h-36 mb-4 rounded-xl overflow-hidden">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>

      <h3
        className={`text-lg font-bold mb-3 leading-snug ${
          featured ? "text-white" : "text-[var(--foreground)]"
        }`}
      >
        {titleLines.map((line, i) => (
          <span key={i}>
            {line}
            {i < titleLines.length - 1 && <br />}
          </span>
        ))}
      </h3>

      <p
        className={`text-sm leading-relaxed flex-1 ${
          featured ? "text-white/80" : "text-[var(--muted)]"
        }`}
      >
        {desc}
      </p>

      <a
        href="#contact"
        className={`mt-6 inline-flex items-center gap-1.5 text-xs font-semibold ${
          featured ? "text-white" : "text-[var(--primary)]"
        }`}
      >
        Learn more
        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M2.5 6h7M6.5 2.5L10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </motion.div>
  );
}
