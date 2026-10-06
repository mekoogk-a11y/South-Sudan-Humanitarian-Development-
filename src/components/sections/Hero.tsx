import React from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Heart, Users, Sparkles, Globe, ShieldCheck, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';
import heroImg from '../../assets/images/juba_city_aerial_view_1791297731960.jpg';

export const Hero: React.FC = () => {
  const { language, toggleLanguage, resolve, t } = useLanguage();
  const { config, impactStats } = useData();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="home" className="relative min-h-[96vh] flex items-center pt-28 pb-20 overflow-hidden bg-black text-white">
      
      {/* Background Aerial Panoramic Photography of Juba, South Sudan from Above */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt={language === 'ar' ? 'منظر جوي لمدينة جوبا عاصمة جنوب السودان ونهر النيل الأبيض من الأعلى' : 'High-altitude aerial bird’s eye view of Juba city and the White Nile, South Sudan'}
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-fade-in"
        />
        {/* Deep black cinematic overlay ensuring pure crisp white typography readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/90 to-black/80" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(16,185,129,0.15),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6">
        <div className="max-w-3xl">
          
          {/* Official Emblem Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-emerald-500/40 text-emerald-300 backdrop-blur-md mb-6 shadow-xl">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs sm:text-sm font-bold tracking-wide">
              {language === 'ar'
                ? 'إشراف مجلس الدعاة ورجال الخير بجنوب السودان'
                : 'Guided by South Sudanese Scholars & Philanthropic Council'}
            </span>
          </div>

          {/* Main Organization Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight mb-5 drop-shadow-md">
            {resolve(config.orgName)}
          </h1>

          {/* Slogan */}
          <div className="relative inline-block mb-6">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-400 tracking-wide">
              "{resolve(config.slogan)}"
            </p>
            <div className="h-1.5 w-32 bg-linear-to-r from-amber-400 via-emerald-400 to-transparent mt-2 rounded-full" />
          </div>

          {/* Short Introduction */}
          <p className="text-base sm:text-lg text-neutral-100 leading-relaxed font-medium mb-10 max-w-2xl drop-shadow-sm">
            {resolve(config.heroIntro)}
          </p>

          {/* Four Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-14">
            
            {/* 1. تعرف علينا */}
            <button
              onClick={() => handleScrollTo('about')}
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm sm:text-base shadow-xl shadow-emerald-950/50 transition active:scale-95 inline-flex items-center gap-2 border border-emerald-400/40"
            >
              <span>{t('heroBtnAbout')}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>

            {/* 2. برامجنا */}
            <button
              onClick={() => handleScrollTo('programs')}
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-black text-sm sm:text-base shadow-xl shadow-amber-950/40 transition active:scale-95 inline-flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>{t('heroBtnPrograms')}</span>
            </button>

            {/* 3. تواصل معنا */}
            <button
              onClick={() => handleScrollTo('contact')}
              className="px-6 py-3.5 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-white border border-neutral-700 backdrop-blur-md font-bold text-sm sm:text-base transition active:scale-95 inline-flex items-center gap-2"
            >
              <Users className="w-4 h-4 text-emerald-400" />
              <span>{t('heroBtnContact')}</span>
            </button>

            {/* 4. Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="px-5 py-3.5 rounded-xl bg-black/80 hover:bg-neutral-900 text-neutral-200 border border-neutral-700 font-bold text-sm transition active:scale-95 inline-flex items-center gap-2"
              title="Change Language"
            >
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>{language === 'ar' ? 'English' : 'العربية'}</span>
            </button>

          </div>

          {/* Comprehensive Key Impact Metrics */}
          <div className="pt-8 border-t border-neutral-800 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {impactStats.map((stat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 backdrop-blur-xs"
              >
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-0.5">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-white leading-tight mb-1">
                  {resolve(stat.label)}
                </div>
                <div className="text-[10px] text-neutral-400 leading-tight">
                  {resolve(stat.subtext)}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
