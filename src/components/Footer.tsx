import React from 'react';
import { TranslationDictionary } from '../data/translations';
import { ArrowUpRight, ShieldCheck, Mail, Globe } from 'lucide-react';

interface FooterProps {
  t: TranslationDictionary;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-[#05080F] border-t border-slate-900 text-slate-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-lg font-extrabold text-white">
              <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm">
                🤾
              </span>
              <span>
                HandballScore <span className="text-blue-500 font-semibold">Pro</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed text-xs">
              {t.footer.brandTagline}
            </p>
            <div className="pt-2 flex items-center gap-2 text-slate-300 font-medium">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>Hébergé sur : </span>
              <a
                href="https://handballscorepro.appsports.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>handballscorepro.appsports.store</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <div className="font-bold text-slate-200 uppercase tracking-wider text-xs">
              {t.footer.navigationTitle}
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#interactive-demo" className="hover:text-white transition-colors">
                  {t.nav.demo}
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-white transition-colors">
                  {t.nav.sheet}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Store Access */}
          <div className="space-y-3">
            <div className="font-bold text-slate-200 uppercase tracking-wider text-xs">
              {t.footer.supportTitle}
            </div>
            <p className="text-slate-400 leading-relaxed">
              {t.footer.contactNotice}
            </p>
            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-slate-400" />
                <span>support@appsports.store</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Plateforme certifiée SSL</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <div>
            © {new Date().getFullYear()} HandballScore Pro. {t.footer.rights}
          </div>
          <div className="text-slate-400">
            {t.footer.disclaimer}
          </div>
        </div>

      </div>
    </footer>
  );
};
