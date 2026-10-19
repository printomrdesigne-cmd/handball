import React from 'react';
import { TranslationDictionary } from '../data/translations';
import { Clock, ShieldAlert, FileText, PenTool, Tv, WifiOff, Check } from 'lucide-react';
import arenaImg from '../assets/images/arena_scoreboard_display_1792054760548.jpg';

interface FeaturesBentoProps {
  t: TranslationDictionary;
}

export const FeaturesBento: React.FC<FeaturesBentoProps> = ({ t }) => {
  const iconMap: Record<string, React.ReactNode> = {
    chrono: <Clock className="w-5 h-5 text-blue-400" />,
    exclusions: <ShieldAlert className="w-5 h-5 text-amber-400" />,
    pdf: <FileText className="w-5 h-5 text-emerald-400" />,
    signatures: <PenTool className="w-5 h-5 text-indigo-400" />,
    display: <Tv className="w-5 h-5 text-cyan-400" />,
    pwa: <WifiOff className="w-5 h-5 text-purple-400" />,
  };

  return (
    <section id="features" className="py-20 lg:py-28 bg-[#070B13] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
            {t.features.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {t.features.title}
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Chronomètre IHF (col-span-1 or 2) */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800/50 flex items-center justify-center">
                  {iconMap['chrono']}
                </div>
                <span className="text-xs font-mono font-semibold text-blue-400">
                  {t.features.items[0].tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t.features.items[0].title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {t.features.items[0].description}
              </p>
            </div>
            <ul className="space-y-2.5 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{t.features.items[0].bullet1}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{t.features.items[0].bullet2}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{t.features.items[0].bullet3}</span>
              </li>
            </ul>
          </div>

          {/* Card 2: 2 Minutes & Sanctions (Marquee Focus) */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-800/50 flex items-center justify-center">
                  {iconMap['exclusions']}
                </div>
                <span className="text-xs font-mono font-semibold text-amber-400">
                  {t.features.items[1].tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t.features.items[1].title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {t.features.items[1].description}
              </p>
            </div>
            <ul className="space-y-2.5 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.features.items[1].bullet1}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.features.items[1].bullet2}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.features.items[1].bullet3}</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Feuille de Match Officielle PDF A4 */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center">
                  {iconMap['pdf']}
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-400">
                  {t.features.items[2].tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t.features.items[2].title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {t.features.items[2].description}
              </p>
            </div>
            <ul className="space-y-2.5 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.features.items[2].bullet1}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.features.items[2].bullet2}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.features.items[2].bullet3}</span>
              </li>
            </ul>
          </div>

          {/* Card 4: Signatures Tactiles */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-800/50 flex items-center justify-center">
                  {iconMap['signatures']}
                </div>
                <span className="text-xs font-mono font-semibold text-indigo-400">
                  {t.features.items[3].tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t.features.items[3].title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {t.features.items[3].description}
              </p>
            </div>
            <ul className="space-y-2.5 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{t.features.items[3].bullet1}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{t.features.items[3].bullet2}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{t.features.items[3].bullet3}</span>
              </li>
            </ul>
          </div>

          {/* Card 5: Affichage Grand Écran Gymnase (with Image Visual) */}
          <div className="md:col-span-2 rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden flex flex-col lg:flex-row hover:border-slate-700 transition-colors">
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center">
                    {iconMap['display']}
                  </div>
                  <span className="text-xs font-mono font-semibold text-cyan-400">
                    {t.features.items[4].tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.features.items[4].title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {t.features.items[4].description}
                </p>
              </div>
              <ul className="space-y-2.5 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{t.features.items[4].bullet1}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{t.features.items[4].bullet2}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{t.features.items[4].bullet3}</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 relative min-h-[220px]">
              <img
                src={arenaImg}
                alt="Affichage tableau d'affichage grand écran gymnase handball"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-cyan-300 border border-slate-800">
                SORTIE HDMI 1080P / 4K
              </div>
            </div>
          </div>

          {/* Card 6: 100% PWA Hors-Ligne */}
          <div className="md:col-span-2 lg:col-span-3 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-800/60 flex items-center justify-center shrink-0">
                {iconMap['pwa']}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-white">{t.features.items[5].title}</h3>
                  <span className="text-xs font-mono font-semibold text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded">
                    {t.features.items[5].tag}
                  </span>
                </div>
                <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
                  {t.features.items[5].description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                100% Hors-Ligne Garanti
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
