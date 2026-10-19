import React from 'react';
import { TranslationDictionary } from '../data/translations';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  t: TranslationDictionary;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ t }) => {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
            {t.testimonials.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {t.testimonials.title}
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author attribution */}
              <div className="pt-4 border-t border-slate-900 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">{item.author}</div>
                  <div className="text-xs text-blue-400 font-medium">{item.role}</div>
                  <div className="text-xs text-slate-400">{item.club}</div>
                </div>
                <Quote className="w-7 h-7 text-slate-800 shrink-0" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
