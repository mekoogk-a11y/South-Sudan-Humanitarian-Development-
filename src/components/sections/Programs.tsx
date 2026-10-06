import React, { useState } from 'react';
import {
  BookOpen,
  Users,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Award,
  ArrowRight,
  ArrowLeft,
  X,
  CheckCircle,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';
import { ProgramItem } from '../../types';

export const Programs: React.FC = () => {
  const { language, resolve, t } = useLanguage();
  const { programs } = useData();
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-emerald-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-teal-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-rose-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-indigo-400" />;
      default:
        return <BookOpen className="w-6 h-6 text-emerald-400" />;
    }
  };

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="programs" className="py-24 bg-neutral-950 text-white relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 text-emerald-300 text-xs sm:text-sm font-bold mb-3 border border-emerald-500/40">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>{t('programsTitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t('programsSubtitle')}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog) => (
            <div
              key={prog.id}
              onClick={() => setSelectedProgram(prog)}
              className="group cursor-pointer rounded-3xl bg-black border border-neutral-800 p-8 shadow-xl hover:shadow-2xl hover:border-emerald-500/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Category Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-700 flex items-center justify-center group-hover:scale-110 transition duration-300">
                    {getProgramIcon(prog.icon)}
                  </div>
                  <span className="text-xs font-bold text-neutral-500 group-hover:text-emerald-400 transition">
                    #{prog.id}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition">
                  {resolve(prog.title)}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {resolve(prog.shortDesc)}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-emerald-400 font-bold text-sm">
                <span>{t('programLearnMore')}</span>
                <span className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition">
                  <ArrowIcon className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-neutral-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-neutral-700 text-white relative">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                  {getProgramIcon(selectedProgram.icon)}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {resolve(selectedProgram.title)}
                  </h3>
                  <span className="text-xs text-emerald-400 font-semibold">
                    {language === 'ar' ? 'منصة التنمية الإنسانية بجنوب السودان' : 'SSHDP Program Framework'}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedProgram(null)}
                className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-6 space-y-6 text-neutral-200">
              {/* Full Description */}
              <div>
                <h4 className="text-sm font-bold text-amber-400 mb-2">
                  {language === 'ar' ? 'نطاق وأهمية البرنامج:' : 'Program Scope & Significance:'}
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
                  {resolve(selectedProgram.fullDesc)}
                </p>
              </div>

              {/* Target Group */}
              <div className="p-4 rounded-2xl bg-black border border-neutral-800 flex items-start gap-3">
                <Users className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-xs text-neutral-400 block mb-0.5">
                    {t('targetGroupLabel')}
                  </span>
                  <span className="text-sm text-white font-medium">
                    {resolve(selectedProgram.targetGroup)}
                  </span>
                </div>
              </div>

              {/* Key Goals */}
              <div>
                <h4 className="text-sm font-bold text-amber-400 mb-3">
                  {t('keyGoalsLabel')}
                </h4>
                <ul className="space-y-2.5">
                  {selectedProgram.goals.map((goal, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resolve(goal)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
              <a
                href="#volunteer"
                onClick={() => setSelectedProgram(null)}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-sm transition"
              >
                {t('participateInProgram')}
              </a>
              <button
                onClick={() => setSelectedProgram(null)}
                className="px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-sm font-medium transition"
              >
                {t('closeModal')}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
