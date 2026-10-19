import React from 'react';
import { TranslationDictionary } from '../data/translations';
import { XCircle, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

interface BeforeAfterProps {
  t: TranslationDictionary;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ t }) => {
  return (
    <section id="before-after" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
            {t.beforeAfter.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {t.beforeAfter.title}
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            {t.beforeAfter.subtitle}
          </p>
        </div>

        {/* Side-by-side Matrix Comparison */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Card 1: Traditional Method (Pain Points) */}
          <div className="rounded-2xl bg-slate-950/80 border border-red-950/40 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-900/60 flex items-center justify-center text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">{t.beforeAfter.beforeTitle}</h3>
                  <p className="text-xs text-slate-400">{t.beforeAfter.beforeSubtitle}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {t.beforeAfter.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <XCircle className="w-5 h-5 text-red-500/80 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt.before}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-900 text-xs text-slate-400 italic">
              ❌ Résultat : Tensions inutiles sur le banc, rapports d'arbitrage contestés et temps perdu.
            </div>
          </div>

          {/* Card 2: With HandballScore Pro (The Solution) */}
          <div className="rounded-2xl bg-gradient-to-b from-blue-950/30 to-slate-950/90 border border-blue-800/50 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl shadow-blue-950/30">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-blue-900/40">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>{t.beforeAfter.afterTitle}</span>
                    <span className="text-xs bg-blue-600 text-white font-mono px-2 py-0.5 rounded-full font-bold">PRO</span>
                  </h3>
                  <p className="text-xs text-blue-300/80">{t.beforeAfter.afterSubtitle}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {t.beforeAfter.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt.after}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-blue-950/60 text-xs text-emerald-300 font-medium">
              ✅ Résultat : Sérénité absolue pour les arbitres, zéro contestation sur la table, et respect total du jeu.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
