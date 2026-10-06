import React from 'react';
import {
  Eye,
  Target,
  Shield,
  Heart,
  Users,
  Compass,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Award,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';
import teacherImg from '../../assets/images/south_sudan_muslim_teacher_1791286625948.jpg';

export const About: React.FC = () => {
  const { language, resolve, t } = useLanguage();
  const { config } = useData();

  const valuesIcons: Record<string, React.ReactNode> = {
    integrity: <Shield className="w-5 h-5 text-emerald-400" />,
    transparency: <Eye className="w-5 h-5 text-emerald-400" />,
    responsibility: <Target className="w-5 h-5 text-emerald-400" />,
    collaboration: <Users className="w-5 h-5 text-emerald-400" />,
    empowerment: <Sparkles className="w-5 h-5 text-amber-400" />,
    community_service: <Heart className="w-5 h-5 text-emerald-400" />,
    human_respect: <Award className="w-5 h-5 text-amber-400" />,
  };

  const areasOfWork = [
    {
      title: { ar: 'دعم التعليم ومحو الأمية', en: 'Education Support & Literacy' },
      desc: { ar: 'تسهيل وصول الفئات الأقل حظاً لمصادر التعلم والتدريب المستمر.', en: 'Facilitating access to education and training for underprivileged groups.' },
      icon: <BookOpen className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: { ar: 'بناء القدرات والتدريب المهني', en: 'Capacity Building & Vocational Training' },
      desc: { ar: 'تأهيل الكوادر الوطنية والشباب بالمهارات العملية لسوق العمل.', en: 'Upskilling national youth and leaders with market-ready capabilities.' },
      icon: <Award className="w-5 h-5 text-amber-400" />,
    },
    {
      title: { ar: 'التنمية المجتمعية المستدامة', en: 'Sustainable Community Development' },
      desc: { ar: 'تنفيذ مبادرات تنموية ترتكز على إشراك المجتمعات المحلية.', en: 'Delivering grassroots initiatives rooted in community participation.' },
      icon: <Users className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: { ar: 'المبادرات الإنسانية والإغاثية', en: 'Humanitarian & Relief Initiatives' },
      desc: { ar: 'الاستجابة الإنسانية العاجلة حسب الاحتياج وصون كرامة المستفيدين.', en: 'Needs-based emergency humanitarian response upholding dignity.' },
      icon: <Heart className="w-5 h-5 text-amber-400" />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold mb-3 shadow-md">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>{t('aboutTitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t('aboutSubtitle')}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Overview & Visual Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Overview Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block">
              <h3 className="text-2xl sm:text-3xl font-black text-white border-s-4 border-emerald-500 ps-3">
                {t('aboutOverview')}
              </h3>
            </div>
            
            <p className="text-neutral-200 leading-relaxed text-base sm:text-lg">
              {resolve(config.aboutIntro)}
            </p>

            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 space-y-3">
              <h4 className="font-bold text-white flex items-center gap-2 text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>{language === 'ar' ? 'نهج المنصة في العمل الإنساني والخيري' : 'Our Humanitarian & Charitable Approach'}</span>
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {language === 'ar'
                  ? 'تركز المنصة على العمل التشاركي المسؤول تحت إشراف نخبة من دعاة ورجال الخير في جنوب السودان، حيث نسعى لتأهيل الإنسان ليقود تنمية مجتمعه بنفسه مع كامل الالتزام بالشفافية والحياد والأمانة المؤسسية.'
                  : 'The platform champions participatory humanitarian action guided by South Sudanese scholars and benefactors, empowering individuals to lead community advancement while upholding integrity, neutrality, and institutional trust.'}
              </p>
            </div>
          </div>

          {/* Visual Photograph Card featuring South Sudanese Muslim teacher teaching students */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 ring-1 ring-emerald-500/20 group">
              <img
                src={teacherImg}
                alt={language === 'ar' ? 'داعية ومعلم من جنوب السودان يدرس الطلاب - التعليم وبناء القدرات' : 'South Sudanese Muslim Teacher & Scholar Educating Students'}
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <span className="text-xs font-black text-amber-400 uppercase tracking-widest block">
                    {language === 'ar' ? 'التعليم وبناء القدرات المجتمعية' : 'Education & Capacity Building'}
                  </span>
                  <p className="text-sm font-semibold leading-snug text-neutral-200">
                    {language === 'ar'
                      ? 'الاستثمار في تعليم وتأهيل الإنسان هو أقوى محرك للتنمية المستدامة.'
                      : 'Investing in human learning and skills is the greatest engine of lasting progress.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Vision & Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Vision Card */}
          <div className="relative rounded-3xl p-8 bg-neutral-950 border border-neutral-800 text-white shadow-xl overflow-hidden group">
            <div className="absolute top-0 end-0 -mt-6 -me-6 w-36 h-36 bg-emerald-600/10 rounded-full blur-2xl group-hover:scale-125 transition duration-500" />
            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center text-black font-bold shadow-md">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-amber-400">
                {t('visionTitle')}
              </h3>
              <p className="text-base sm:text-lg text-neutral-100 leading-relaxed font-medium">
                "{resolve(config.vision)}"
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative rounded-3xl p-8 bg-neutral-950 border border-neutral-800 text-white shadow-xl overflow-hidden group">
            <div className="absolute top-0 end-0 -mt-6 -me-6 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl group-hover:scale-125 transition duration-500" />
            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-bold shadow-md">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-amber-400">
                {t('missionTitle')}
              </h3>
              <p className="text-base sm:text-lg text-neutral-100 leading-relaxed font-medium">
                "{resolve(config.mission)}"
              </p>
            </div>
          </div>

        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {t('valuesTitle')}
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 mt-2">
              {language === 'ar'
                ? 'المبادئ الأخلاقية والمهنية الحاكمة لكافة أنشطتنا وقراراتنا'
                : 'The foundational ethical standards guiding our interventions and stewardship'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.values.map((val) => (
              <div
                key={val.id}
                className="rounded-2xl p-6 bg-neutral-950 border border-neutral-800 hover:border-emerald-500/60 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center mb-4">
                    {valuesIcons[val.id] || <Shield className="w-5 h-5 text-emerald-400" />}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {resolve(val.title)}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {resolve(val.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Areas of Work & Impact */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {t('areasOfWorkTitle')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areasOfWork.map((area, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-neutral-950 border border-neutral-800 hover:border-emerald-500/60 transition-all flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center mb-4">
                  {area.icon}
                </div>
                <h4 className="font-bold text-white text-base mb-2">
                  {resolve(area.title)}
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {resolve(area.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
