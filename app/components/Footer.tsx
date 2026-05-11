"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { content } from "@/app/data/content";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[var(--navy)] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <a
              href="#hero"
              className="flex items-center gap-2 group"
              aria-label="THURIYA — Home"
            >
            <Image src="/headerLogo.png" alt="Thuriya logo" width={70} height={70} className="group-hover:animate-spin-slow transition-transform" priority>

            </Image>
              <span className="font-extrabold text-base tracking-wide leading-3 text-white">
                THURIYA <br></br><span className="text-[var(--primary)] text-base">Japanese Education Center</span> 
              </span>
            </a>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              {t(content.footer.tagline)}
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              <SocialLink href={content.footer.social.facebook} label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
                  <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.99 3.656 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.344 21.128 22 16.991 22 12z"/>
                </svg>
              </SocialLink>
              <SocialLink href={content.footer.social.tiktok} label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z"/>
                </svg>
              </SocialLink>
              <SocialLink href={content.footer.social.telegram} label="Telegram">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.016 9.497c-.148.66-.54.822-1.093.512l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.214-3.053 5.56-5.023c.242-.214-.053-.333-.373-.12L6.288 14.44l-2.95-.924c-.641-.2-.654-.641.135-.949l11.507-4.437c.535-.193 1.003.13.582.118z"/>
                </svg>
              </SocialLink>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-5">
              {t({ en: "Contact", my: "ဆက်သွယ်ရန်", jp: "お問い合わせ" })}
            </h3>
            <div className="space-y-4 text-sm text-white/60">
              <p className="leading-relaxed">{t(content.footer.address)}</p>
              <p>
                <a href={`tel:${content.footer.phone}`} className="hover:text-white transition-colors">
                  {content.footer.phone}
                </a>
              </p>
              <p className="leading-relaxed">{t(content.footer.hours)}</p>
              <a
                href={content.footer.map}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[var(--primary)] hover:text-red-400 transition-colors text-xs font-semibold"
              >
                View on Google Maps
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M2 10L10 2M5.5 2H10v4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-5">
              {t({ en: "Navigation", my: "လမ်းညွှန်", jp: "ナビゲーション" })}
            </h3>
            <nav className="space-y-3" aria-label="Footer navigation">
              {[
                { href: "#services", label: t(content.nav.services) },
                { href: "#team", label: t(content.nav.consultants) },
                { href: "#about", label: t(content.nav.about) },
                { href: "#contact", label: t(content.nav.contact) },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">{t(content.footer.copyright)}</p>
          <p className="text-xs text-white/30">
            THURIYA MYANMAR Co., Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white/60 hover:bg-[var(--primary)] hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}
