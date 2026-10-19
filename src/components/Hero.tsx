import React, { useState, useEffect } from 'react';
import { TranslationDictionary } from '../data/translations';
import { ArrowUpRight, Play, CheckCircle2, Monitor, WifiOff, Award, Clock } from 'lucide-react';
import tabletImg from '../assets/images/tablet_handball_referee_1792054760382.jpg';

interface HeroProps {
  t: TranslationDictionary;
  onOpenOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onOpenOrder }) => {
  // Live ticking simulation for the mini-hero scoreboard widget
  const [seconds, setSeconds] = useState(44);
  const [penaltySeconds, setPenaltySeconds] = useState(24);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev >= 59 ? 0 : prev + 1));
      setPenaltySeconds((prev) => (prev <= 0 ? 120 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatMinSec = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Conversions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Editorial kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>{t.hero.kicker}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              {t.hero.headlinePart1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-amber-300">
                {t.hero.headlineHighlight}
              </span>{' '}
              {t.hero.headlinePart2}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://handballscorepro.appsports.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-98 rounded-xl shadow-lg shadow-blue-600/25 transition-all text-center whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <a
                href="#interactive-demo"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors text-center whitespace-nowrap shrink-0"
              >
                <Play className="w-4 h-4 text-blue-400 fill-blue-400/30" />
                <span>{t.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Trust Markers Strip */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-300">
                <Award className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{t.hero.badges.ihf}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <WifiOff className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.hero.badges.offline}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Monitor className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.hero.badges.screens}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Focal Carrier with Tablet Mockup & Real-time Score HUD */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl shadow-black/80 group">
              {/* Primary Generated Visual: Tablet in Gymnasium Scorer Table */}
              <img
                src={tabletImg}
                alt="Tablette tactile HandballScore Pro sur table de marque de handball"
                className="w-full h-[380px] sm:h-[440px] object-cover object-center transform group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Top Glass Live Status Pill */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-semibold tracking-wider">{t.hero.liveStatus}</span>
                </div>
                <div className="bg-blue-600/90 text-white font-mono font-bold px-2.5 py-1 rounded text-xs shadow-xs">
                  IHF RULES
                </div>
              </div>

              {/* Bottom Interactive HUD Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-xl p-4 shadow-xl">
                {/* Score Header */}
                <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                  <span className="font-semibold">{t.hero.period}</span>
                  <div className="flex items-center gap-1.5 font-mono text-amber-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="font-bold text-sm tracking-widest font-mono-score">
                      28:{seconds.toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Teams & Score */}
                <div className="pt-3 flex items-center justify-between gap-4">
                  <div className="flex-1 text-left">
                    <div className="text-xs font-bold text-white truncate">{t.hero.homeTeam}</div>
                    <div className="text-3xl font-black text-blue-400 font-mono-score tracking-tight">17</div>
                  </div>

                  <div className="text-center px-3 py-1 bg-slate-900 rounded-md border border-slate-800 text-xs font-mono text-slate-400">
                    VS
                  </div>

                  <div className="flex-1 text-right">
                    <div className="text-xs font-bold text-white truncate">{t.hero.awayTeam}</div>
                    <div className="text-3xl font-black text-amber-400 font-mono-score tracking-tight">14</div>
                  </div>
                </div>

                {/* Active 2-Min Suspension Banner inside HUD */}
                <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-amber-300 font-medium">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    <span>2 MIN · #7 B. KARABATIĆ</span>
                  </div>
                  <div className="font-mono font-bold text-amber-400 bg-amber-950/50 border border-amber-800/60 px-2 py-0.5 rounded font-mono-score">
                    {formatMinSec(penaltySeconds)}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick floating caption */}
            <p className="mt-3 text-xs text-center text-slate-400">
              ⚡ Interface tactile optimisée pour iPad, tablettes Android et PC de table
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
