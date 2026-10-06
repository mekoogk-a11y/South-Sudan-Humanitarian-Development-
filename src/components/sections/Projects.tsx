import React, { useState } from 'react';
import {
  Briefcase,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  PlusCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  X,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';
import { ProjectItem } from '../../types';

export const Projects: React.FC<{ onOpenAdmin?: () => void }> = ({ onOpenAdmin }) => {
  const { language, resolve, t } = useLanguage();
  const { projects } = useData();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="projects" className="py-24 bg-black text-white relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold mb-3 shadow-md">
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span>{t('projectsTitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t('projectsSubtitle')}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Real Projects Display or Specified Empty State */}
        {projects.length === 0 ? (
          <div className="max-w-2xl mx-auto rounded-3xl bg-neutral-950 border-2 border-dashed border-neutral-800 p-10 sm:p-14 text-center shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-neutral-900 text-emerald-400 flex items-center justify-center mx-auto mb-6 border border-neutral-800">
              <Clock className="w-8 h-8 animate-pulse" />
            </div>

            <h3 className="text-2xl font-black text-white mb-3">
              {t('projectsEmptyMsg')}
            </h3>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-8">
              {t('projectsEmptyDesc')}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
              <span className="inline-flex items-center gap-1.5 bg-neutral-900 px-3 py-1.5 rounded-xl border border-neutral-800 text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {language === 'ar' ? 'الالتزام بمعايير الشفافية والمصداقية' : 'Transparency & Verified Data'}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-neutral-900 px-3 py-1.5 rounded-xl border border-neutral-800 text-neutral-200">
                <Sparkles className="w-4 h-4 text-amber-400" />
                {language === 'ar' ? 'التحديث المباشر فور الاعتماد' : 'Instant updates upon approval'}
              </span>
            </div>

            {onOpenAdmin && (
              <div className="mt-8 pt-6 border-t border-neutral-900">
                <button
                  onClick={onOpenAdmin}
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 bg-neutral-900 px-4 py-2 rounded-xl border border-neutral-800 transition"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>{language === 'ar' ? 'إضافة مشروع جديد (للمشرفين)' : 'Add New Project (Admin)'}</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="rounded-3xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-xl hover:border-emerald-500/60 transition-all flex flex-col justify-between"
              >
                <div>
                  {proj.image && (
                    <img
                      src={proj.image}
                      alt={resolve(proj.title)}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        {resolve(proj.location)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                        {proj.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {resolve(proj.title)}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-300 line-clamp-3 leading-relaxed">
                      {resolve(proj.description)}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-neutral-900 mt-4 flex items-center justify-between">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-900 text-emerald-400 font-bold border border-neutral-800">
                    {resolve(proj.statusLabel)}
                  </span>
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300"
                  >
                    <span>{t('readMoreArticle')}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-neutral-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-700 text-white relative">
            <div className="flex items-start justify-between pb-3 border-b border-neutral-800">
              <h3 className="text-xl font-bold text-white">
                {resolve(selectedProject.title)}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 rounded-full text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="py-4 space-y-4 text-neutral-300 text-sm leading-relaxed">
              <div className="flex items-center gap-4 text-xs text-neutral-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  {resolve(selectedProject.location)}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-neutral-500" />
                  {selectedProject.date}
                </span>
              </div>
              <p>{resolve(selectedProject.description)}</p>
            </div>
            <div className="pt-4 border-t border-neutral-800 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl bg-neutral-800 text-neutral-200 text-sm font-medium hover:bg-neutral-700"
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
