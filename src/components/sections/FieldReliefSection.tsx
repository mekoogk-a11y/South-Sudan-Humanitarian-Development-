import React from 'react';
import {
  Heart,
  Truck,
  Droplet,
  Package,
  BookOpen,
  Users,
  CheckCircle2,
  Sparkles,
  MapPin,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import aidImg from '../../assets/images/south_sudan_philanthropic_aid_1791297017855.jpg';

export const FieldReliefSection: React.FC = () => {
  const { language, resolve, t } = useLanguage();

  const reliefPillars = [
    {
      title: { ar: 'قوافل الإطعام والإغاثة العاجلة', en: 'Emergency Food Aid Convoys' },
      desc: {
        ar: 'تأمين الحصص الغذائية للأسر المتعففة والمتأثرة بالظروف الإنسانية بمشاركة وجهاء ورجال الخير.',
        en: 'Delivering nutritional parcels to vulnerable families spearheaded by local benefactors.',
      },
      icon: <Package className="w-5 h-5 text-amber-400" />,
    },
    {
      title: { ar: 'سقيا الماء وحفر الآبار النظيفة', en: 'Clean Water & Well Drilling' },
      desc: {
        ar: 'توفير مياه الشرب النقية في المناطق الأكثر عطشاً بالتعاون مع اللجان الأهلية.',
        en: 'Establishing clean drinking water wells in underserved rural communities.',
      },
      icon: <Droplet className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: { ar: 'الحقيبة المدرسية وتأهيل الفصول', en: 'Educational Kit & Classrooms' },
      desc: {
        ar: 'توزيع الدفاتر والكتب المدرسية وتجهيز مقاعد الدراسة لأبناء الأسر محدودة الدخل.',
        en: 'Providing study notebooks, textbooks, and desk furnishings for needy students.',
      },
      icon: <BookOpen className="w-5 h-5 text-amber-400" />,
    },
    {
      title: { ar: 'كفالة ورعاية الأيتام', en: 'Orphan Care & Mentorship' },
      desc: {
        ar: 'رعاية شاملة تعليمية وصحية وتربوية للأيتام تضمن لهم مستقبلاً كريماً وواعداً.',
        en: 'Comprehensive educational and moral stewardship for orphans in South Sudan.',
      },
      icon: <Heart className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <section id="relief" className="py-24 bg-black text-white relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold mb-3 shadow-md">
            <Truck className="w-4 h-4 text-emerald-400" />
            <span>{t('reliefTitle')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            {t('reliefSubtitle')}
          </h2>

          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Feature Grid: Documentary Photo + Action Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Documentary Photo Card (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 ring-1 ring-emerald-500/20 group">
              <img
                src={aidImg}
                alt="South Sudanese Philanthropic Men Leading Humanitarian Charity Aid"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent flex items-end p-6 sm:p-8">
                <div className="space-y-1.5">
                  <span className="text-xs font-black text-amber-400 uppercase tracking-widest block">
                    {language === 'ar' ? 'ميدان العطاء والتكافل' : 'Field Operations & Solidarity'}
                  </span>
                  <h4 className="text-lg sm:text-xl font-black text-white leading-snug">
                    {language === 'ar'
                      ? 'رجال خير ودعاة من جنوب السودان يقودون قوافل التوزيع في جوبا والولايات'
                      : 'South Sudanese Philanthropists & Preachers Leading Relief Convoys'}
                  </h4>
                  <p className="text-xs text-neutral-300">
                    {language === 'ar'
                      ? 'توزيع المساعدات التعليمية والإغاثية بمحبة وتواضع وصون كامل لكرامة المستفيدين.'
                      : 'Distributing education and emergency relief with utmost respect and community dignity.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars List (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-block">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                {language === 'ar' ? 'مسارات الإحسان الميداني' : 'Key Relief Pathways'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {language === 'ar'
                  ? 'منهجية ميدانية متكاملة تلبي الحاجات الأساسية'
                  : 'Integrated Ground Methodology Meeting Essential Needs'}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {reliefPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/60 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center mb-3">
                      {pillar.icon}
                    </div>
                    <h4 className="font-bold text-white text-sm mb-1.5">
                      {resolve(pillar.title)}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {resolve(pillar.desc)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-between gap-4 mt-4">
              <div className="text-xs text-neutral-300">
                <strong className="text-white block">
                  {language === 'ar' ? 'هل ترغب في توجيه دعمك لمشروع إغاثي محدد؟' : 'Want to support a specific field relief initiative?'}
                </strong>
                {language === 'ar'
                  ? 'تواصل مباشرة مع أمانة العمل الخيري لتخصيص مساهمتك.'
                  : 'Contact our charity office to designate your contribution.'}
              </div>
              <a
                href="#donate"
                className="shrink-0 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-black text-xs transition"
              >
                {language === 'ar' ? 'ساهم الآن' : 'Contribute'}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
