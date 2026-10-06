import React from 'react';
import {
  Heart,
  Landmark,
  Smartphone,
  Globe2,
  ShieldCheck,
  Mail,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';

export const Donation: React.FC = () => {
  const { language, resolve, t } = useLanguage();
  const { config } = useData();

  const handleContactFinancial = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="donate" className="py-24 bg-neutral-950 text-white relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 text-emerald-300 text-xs sm:text-sm font-bold mb-3 border border-emerald-500/40">
            <Heart className="w-4 h-4 text-emerald-400" />
            <span>{t('donateTitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t('donateSubtitle')}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Channels Placeholder Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* 1. Bank Transfer */}
          <div className="bg-black rounded-3xl p-8 border border-neutral-800 shadow-xl hover:border-emerald-500/60 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-700 text-emerald-400 flex items-center justify-center mb-6">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {t('donateBankTitle')}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                {resolve(config.donationInfo.bankTransferPlaceholder)}
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{language === 'ar' ? 'يتم الاعتماد عبر البنك المركزي والجهات الرقابية' : 'Regulated through official central banking'}</span>
            </div>
          </div>

          {/* 2. Mobile Payments */}
          <div className="bg-black rounded-3xl p-8 border border-neutral-800 shadow-xl hover:border-amber-500/60 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-700 text-amber-400 flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {t('donateMobileTitle')}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                {resolve(config.donationInfo.mobilePaymentPlaceholder)}
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>m-GURUSH / MTN Mobile Money</span>
            </div>
          </div>

          {/* 3. International Support */}
          <div className="bg-black rounded-3xl p-8 border border-neutral-800 shadow-xl hover:border-emerald-500/60 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-700 text-emerald-400 flex items-center justify-center mb-6">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {t('donateIntlTitle')}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                {resolve(config.donationInfo.internationalDonationPlaceholder)}
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{config.contact.email}</span>
            </div>
          </div>

        </div>

        {/* Ethical Transparency Charter Banner */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-neutral-900 border border-neutral-800 text-white p-8 sm:p-10 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-start">
            <h4 className="text-lg font-black text-amber-400 flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>{t('donateNoticeTitle')}</span>
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl">
              {resolve(config.donationInfo.contactNotice)}
            </p>
          </div>

          <button
            onClick={handleContactFinancial}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-black text-sm shadow-md transition active:scale-95"
          >
            {t('donateContactBtn')}
          </button>
        </div>

      </div>
    </section>
  );
};
