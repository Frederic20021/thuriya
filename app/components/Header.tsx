"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { content } from "@/app/data/content";
import type { Lang } from "@/app/data/content";

const LANGS: { value: Lang; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "my", label: "မြန်မာ" },
  { value: "jp", label: "日本" },
];

const NAV_LINKS = [
  { id: "services", key: "services" as const },
  { id: "team", key: "consultants" as const },
  { id: "about", key: "about" as const },
  { id: "contact", key: "contact" as const },
];

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const shadowOpacity = useTransform(scrollY, [0, 80], [0, 0.08]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <motion.header
      style={{ "--bg-opacity": bgOpacity, "--shadow-opacity": shadowOpacity } as React.CSSProperties}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Animated background layer */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-[var(--background)] border-b border-[var(--border)] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-2">
        <div className="flex items-center h-16 md:h-18">

          {/* Logo */}
          <div className="flex-1 flex items-center">
            <a
              href="#hero"
              className="flex items-center gap-2 group"
              aria-label="THURIYA — Home"
            >
            <Image src="/headerLogo.png" alt="Thuriya logo" width={70} height={70} className="group-hover:animate-spin-slow transition-transform" priority>

            </Image>
              <span className="font-extrabold text-base tracking-wide leading-3 text-[var(--navy)]">
                THURIYA <br></br><span className="text-[var(--primary)] text-[10px]">Japanese Education Center</span> 
              </span>
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                {t(content.nav[link.key])}
              </a>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex-1 flex items-center justify-end gap-3">
            {/* Language toggle — desktop only */}
            <div className="hidden md:block">
              <LangToggle lang={lang} setLang={setLang} />
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden p-2 rounded-md text-[var(--foreground)] hover:bg-[var(--surface)] transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className="block w-5 h-0.5 bg-current mb-1 transition-transform" style={{ transform: menuOpen ? "translateY(6px) rotate(45deg)" : undefined }} />
              <span className="block w-5 h-0.5 bg-current mb-1 transition-opacity" style={{ opacity: menuOpen ? 0 : 1 }} />
              <span className="block w-5 h-0.5 bg-current transition-transform" style={{ transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : undefined }} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[var(--background)] border-b border-[var(--border)] px-6 py-4 flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-[var(--foreground)] py-2 border-b border-[var(--border)] last:border-0"
              >
                {t(content.nav[link.key])}
              </a>
            ))}
            {/* Language toggle inside mobile menu */}
            <div className="pt-2">
              <LangToggle lang={lang} setLang={setLang} />
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

/* ── Language Toggle Pill ── */
function LangToggle({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const activeIdx = LANGS.findIndex((l) => l.value === lang);

  return (
    <div
      className="relative flex items-center bg-[var(--surface-2)] rounded-full p-0.5"
      role="group"
      aria-label="Select language"
    >
      {/* Sliding indicator */}
      <motion.span
        className="absolute top-0.5 bottom-0.5 rounded-full bg-white shadow-sm pointer-events-none"
        animate={{
          left: `calc(${activeIdx} / ${LANGS.length} * 100% + 2px)`,
          width: `calc(100% / ${LANGS.length} - 4px)`,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
      />

      {LANGS.map((l) => (
        <button
          key={l.value}
          onClick={() => setLang(l.value)}
          aria-pressed={lang === l.value}
          style={{ width: `calc(100% / ${LANGS.length})` }}
          className={`relative z-10 py-1 text-xs font-semibold rounded-full transition-colors text-center ${
            lang === l.value
              ? "text-[var(--primary)]"
              : "text-[var(--muted)] hover:text-[var(--foreground)]"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
