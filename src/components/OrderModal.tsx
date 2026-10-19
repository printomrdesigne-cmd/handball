import React, { useState } from 'react';
import { TranslationDictionary } from '../data/translations';
import { X, Check, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanId?: string;
  t: TranslationDictionary;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  selectedPlanId = 'club',
  t,
}) => {
  const [currentPlan, setCurrentPlan] = useState(selectedPlanId);
  const [clubName, setClubName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instant secure processing, then redirect to handballpro.printomrdesigne.workers.dev
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        window.open('https://handballscorepro.appsports.store/', '_blank');
      }, 1500);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0B101D] border border-slate-700 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-900 border border-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 bg-slate-900/60 border-b border-slate-800 space-y-1">
          <div className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" />
            Activation Immédiate & Soutien Développeur
          </div>
          <h3 className="text-xl font-extrabold text-white">
            Obtenir HandballScore Pro (30 DH / an)
          </h3>
          <p className="text-xs text-slate-400">
            Accès complet pour votre club, école ou association sportive.
          </p>
        </div>

        {/* Modal Body */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-950/80 border border-emerald-600 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-white">Demande enregistrée avec succès !</h4>
            <p className="text-sm text-slate-300">
              Redirection en cours vers l'application officielle sur{' '}
              <span className="text-blue-400 font-semibold">handballscorepro.appsports.store</span>...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Plan Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Formule sélectionnée :</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'tournament', label: 'Découverte', price: '30 DH' },
                  { id: 'club', label: 'Annuel (30 DH)', price: '30 DH' },
                  { id: 'league', label: 'Ligue / 5', price: 'Sur devis' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentPlan(item.id)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      currentPlan === item.id
                        ? 'bg-blue-600/20 border-blue-500 text-white shadow-xs'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-sm font-black font-mono-score text-blue-400">
                      {item.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Nom du Club, Établissement ou Équipe :
                </label>
                <input
                  type="text"
                  required
                  value={clubName}
                  onChange={(e) => setClubName(e.target.value)}
                  placeholder="Ex : إعدادية وادزا / نادي تاوريرت"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Adresse e-mail :
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contact@handball-club.ma"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Guarantees */}
            <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                تشجيع للمبرمج (30 درهم / سنة)
              </span>
              <span>Activation instantanée</span>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-98 font-bold text-white text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/30"
            >
              {isSubmitting ? (
                <span>Redirection vers l'application...</span>
              ) : (
                <>
                  <span>Accéder à l'Application (30 DH)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
