import React from 'react';
import { TranslationDictionary } from '../data/translations';
import { Check, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';

interface PricingProps {
  t: TranslationDictionary;
  onOpenOrder: (planId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ t, onOpenOrder }) => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#070B13] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
            {t.pricing.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {t.pricing.title}
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            {t.pricing.subtitle}
          </p>
          <p className="text-xs text-slate-400">
            {t.pricing.billingNotice}
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {t.pricing.plans.map((plan) => {
            const isHighlight = plan.highlighted;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlight
                    ? 'bg-gradient-to-b from-blue-950/60 via-slate-900 to-slate-950 border-2 border-blue-500 shadow-2xl shadow-blue-900/30 lg:-translate-y-2'
                    : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-bold text-xs uppercase px-3 py-1 rounded-full shadow-sm tracking-wide">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="space-y-1 mb-6">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed min-h-[32px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="pb-6 border-b border-slate-800/80 mb-6 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-white font-mono-score tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      / {plan.period}
                    </span>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-300 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="pt-4">
                  <a
                    href="https://handballpro.printomrdesigne.workers.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all text-center whitespace-nowrap shrink-0 ${
                      isHighlight
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantees Strip */}
        <div className="mt-12 p-6 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2.5 text-slate-300">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{t.pricing.guarantee}</span>
          </div>
          <div className="flex items-center gap-2.5 text-blue-300">
            <Zap className="w-5 h-5 text-amber-400 shrink-0" />
            <span>{t.pricing.instantAccess}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
