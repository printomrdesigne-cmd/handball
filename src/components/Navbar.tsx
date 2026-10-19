import React, { useState } from 'react';
import { TranslationDictionary, Language } from '../data/translations';
import { ShieldCheck, Globe, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  t: TranslationDictionary;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenOrder: (planId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  t,
  lang,
  onLanguageChange,
  onOpenOrder,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#090D16]/90 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Clean single-element lockup) */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 group"
        >
          <span className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-base shadow-sm group-hover:bg-blue-500 transition-colors">
            🤾
          </span>
          <span className="tracking-tight">
            HandballScore <span className="text-blue-500 font-semibold">Pro</span>
          </span>
        </a>

        {/* Zone 2: 4-5 Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#features"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.features}
          </a>
          <a
            href="#interactive-demo"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.demo}
          </a>
          <a
            href="#before-after"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.sheet}
          </a>
          <a
            href="#pricing"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.pricing}
          </a>
          <a
            href="#faq"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.faq}
          </a>
        </nav>

        {/* Zone 3: Language Selector + 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-900 border border-slate-700/80 rounded-lg p-1 text-xs text-slate-300">
            <Globe className="w-3.5 h-3.5 text-slate-400 mx-1.5" />
            {(['fr', 'en', 'ar'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => onLanguageChange(l)}
                className={`px-2 py-1 rounded font-semibold transition-colors uppercase ${
                  lang === l
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Primary CTA */}
          <a
            href="https://handballpro.printomrdesigne.workers.dev/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              // Also allow opening quick order modal or redirecting
            }}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 active:scale-98 transition-all shadow-sm shadow-blue-600/30 whitespace-nowrap shrink-0"
          >
            <span>{t.nav.buyCta}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 bg-[#0B101D] border-b border-slate-800 space-y-3">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-blue-400"
          >
            {t.nav.features}
          </a>
          <a
            href="#interactive-demo"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-blue-400"
          >
            {t.nav.demo}
          </a>
          <a
            href="#before-after"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-blue-400"
          >
            {t.nav.sheet}
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-blue-400"
          >
            {t.nav.pricing}
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-blue-400"
          >
            {t.nav.faq}
          </a>
          <div className="pt-2">
            <a
              href="https://handballpro.printomrdesigne.workers.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg"
            >
              <span>{t.nav.buyCta}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
