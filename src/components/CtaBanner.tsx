import React from 'react';
import { TranslationDictionary } from '../data/translations';
import { ArrowUpRight, Play, ShieldCheck, Zap } from 'lucide-react';
import arenaBg from '../assets/images/hero_handball_arena_1792054759429.jpg';

interface CtaBannerProps {
  t: TranslationDictionary;
  onOpenOrder: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ t, onOpenOrder }) => {
  return (
    <section className="relative py-24 overflow-hidden border-t border-slate-800">
      {/* Background Arena Image with Measured Scrim */}
      <div className="absolute inset-0">
        <img
          src={arenaBg}
          alt="Gymnase handball plein écran"
          className="w-full h-full object-cover object-center filter brightness-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/80 to-[#090D16]/90" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-8">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/70 border border-blue-800/60 px-3.5 py-1.5 rounded-full">
          <Zap className="w-3.5 h-3.5" />
          <span>Activation Immédiate en 30 Secondes</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance leading-tight">
          {t.ctaBanner.title}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {t.ctaBanner.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="https://handballpro.printomrdesigne.workers.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-xl shadow-blue-600/30 transition-all text-center whitespace-nowrap shrink-0"
          >
            <span>{t.ctaBanner.primaryBtn}</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>

          <a
            href="#interactive-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors text-center whitespace-nowrap shrink-0"
          >
            <Play className="w-4 h-4 text-blue-400 fill-blue-400/30" />
            <span>{t.ctaBanner.secondaryBtn}</span>
          </a>
        </div>

        <p className="text-xs text-slate-400 max-w-lg mx-auto flex items-center justify-center gap-2 pt-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{t.ctaBanner.secureNotice}</span>
        </p>
      </div>
    </section>
  );
};
