import React from 'react';
import {
  Users,
  MapPin,
  Sparkles,
  BookOpen,
  HeartHandshake,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';

export const ScholarsCouncil: React.FC = () => {
  const { language, resolve, t } = useLanguage();
  const { scholars } = useData();

  return (
    <section id="scholars" className="py-24 bg-neutral-950 text-white relative border-t border-neutral-900">
      
      {/* Decorative Subtle Background Mesh */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold mb-3 shadow-md">
            <Users className="w-4 h-4 text-emerald-400" />
            <span>{t('scholarsTitle')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            {t('scholarsSubtitle')}
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            {language === 'ar'
              ? 'تسترشد المنصة برؤية نخبة من دعاة وشيوخ ورجال الخير في جنوب السودان الذين يقودون مبادرات العلم والتكافل الاجتماعي، ويبذلون أوقاتهم وأموالهم لنهضة المجتمع وبناء إنسانه.'
              : 'The platform is guided by respected South Sudanese Islamic preachers, scholars, and community benefactors driving education, social welfare, and sustainable human empowerment.'}
          </p>

          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Scholars & Philanthropic Elders Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {scholars.map((scholar, idx) => (
            <div
              key={scholar.id}
              className="rounded-3xl bg-black border border-neutral-800 p-6 shadow-xl hover:border-emerald-500/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-950 group-hover:text-emerald-300 transition">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-neutral-900 text-amber-400 border border-neutral-800 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-500" />
                    {resolve(scholar.location)}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-black text-white mb-1 group-hover:text-emerald-300 transition">
                  {resolve(scholar.name)}
                </h3>

                {/* Role */}
                <p className="text-xs font-bold text-emerald-400 mb-4 leading-snug">
                  {resolve(scholar.role)}
                </p>

                {/* Bio */}
                <p className="text-xs text-neutral-300 leading-relaxed mb-5">
                  {resolve(scholar.bio)}
                </p>
              </div>

              {/* Focus Area Footer */}
              <div className="pt-4 border-t border-neutral-900 text-[11px] text-neutral-400">
                <span className="font-bold text-neutral-200 block mb-0.5">
                  {language === 'ar' ? 'مجال الإشراف:' : 'Area of Focus:'}
                </span>
                <span className="text-amber-300 font-medium leading-tight">
                  {resolve(scholar.focusArea)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Guidance Charter Banner */}
        <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-8 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-start">
            <h4 className="text-xl font-black text-amber-400 flex items-center justify-center lg:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>{language === 'ar' ? 'ميثاق التوجيه الشرعي والشفافية المجتمعية' : 'Guidance Charter & Public Integrity'}</span>
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl">
              {language === 'ar'
                ? 'يخضع كل برنامج تعليمي أو إغاثي بالمنصة للمراجعة الدقيقة لضمان وصول المساعدات لمستحقيها بكرامة تامة، ونشر العلم النافع، وتعزيز روح التآخي والتكاتف بين كافة أطياف مجتمع جنوب السودان.'
                : 'Every educational and relief program is rigorously stewarded to preserve dignity, disseminate beneficial knowledge, and cultivate harmony across South Sudan.'}
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm shadow-lg shadow-emerald-950/40 transition active:scale-95 inline-flex items-center gap-2"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>{language === 'ar' ? 'التواصل مع لجان المجلس' : 'Contact Council Secretariat'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
