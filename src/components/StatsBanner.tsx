import React from 'react';
import { TranslationDictionary } from '../data/translations';

interface StatsBannerProps {
  t: TranslationDictionary;
}

export const StatsBanner: React.FC<StatsBannerProps> = ({ t }) => {
  const statsList = [
    {
      value: t.stats.stat1Value,
      label: t.stats.stat1Label,
      desc: t.stats.stat1Desc,
    },
    {
      value: t.stats.stat2Value,
      label: t.stats.stat2Label,
      desc: t.stats.stat2Desc,
    },
    {
      value: t.stats.stat3Value,
      label: t.stats.stat3Label,
      desc: t.stats.stat3Desc,
    },
    {
      value: t.stats.stat4Value,
      label: t.stats.stat4Label,
      desc: t.stats.stat4Desc,
    },
  ];

  return (
    <section className="relative py-12 bg-slate-900/60 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statsList.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col space-y-1.5 p-4 rounded-xl bg-slate-950/40 border border-slate-800/60"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono-score tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-300">
                  {item.value}
                </span>
              </div>
              <div className="text-sm font-bold text-slate-100">{item.label}</div>
              <div className="text-xs text-slate-400 leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
