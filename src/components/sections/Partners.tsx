import React from 'react';
import {
  Handshake,
  Clock,
  Building,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';

export const Partners: React.FC = () => {
  const { language, resolve, t } = useLanguage();
  const { partners } = useData();

  const handleContactPartnership = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="partners" className="py-24 bg-black text-white relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold mb-3 shadow-md">
            <Handshake className="w-4 h-4 text-emerald-400" />
            <span>{t('partnersTitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t('partnersSubtitle')}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Real Partners or Strict Specified Rule: "سيتم الإعلان عن الشركاء والداعمين المعتمدين تباعاً." */}
        {partners.length === 0 ? (
          <div className="max-w-3xl mx-auto rounded-3xl bg-neutral-950 border-2 border-dashed border-neutral-800 p-10 sm:p-14 text-center">
            <div className="w-16 h-16 rounded-2xl bg-neutral-900 text-emerald-400 flex items-center justify-center mx-auto mb-6 border border-neutral-800">
              <Clock className="w-8 h-8 animate-pulse" />
            </div>

            <h3 className="text-2xl font-black text-white mb-3">
              {t('partnersEmptyMsg')}
            </h3>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
              {t('partnersEmptyDesc')}
            </p>

            {/* Partnership Call to Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleContactPartnership}
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm shadow-md transition active:scale-95 inline-flex items-center gap-2"
              >
                <Handshake className="w-4 h-4" />
                <span>{t('partnerInquireBtn')}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="rounded-2xl p-6 bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center text-center hover:border-emerald-500/60 transition"
              >
                {partner.logoUrl ? (
                  <img
                    src={partner.logoUrl}
                    alt={resolve(partner.name)}
                    className="h-16 w-auto object-contain mb-3"
                  />
                ) : (
                  <Building className="w-10 h-10 text-emerald-400 mb-3" />
                )}
                <h4 className="font-bold text-white text-sm">
                  {resolve(partner.name)}
                </h4>
                <span className="text-xs text-neutral-400 mt-1">
                  {resolve(partner.category)}
                </span>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
