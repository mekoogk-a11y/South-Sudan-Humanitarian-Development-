import React, { useState } from 'react';
import {
  GraduationCap,
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle,
  X,
  Send,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';
import { CourseItem } from '../../types';

export const Training: React.FC = () => {
  const { language, resolve, t } = useLanguage();
  const { courses, submitCourseRegistration } = useData();

  const [registeringCourse, setRegisteringCourse] = useState<CourseItem | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successTicket, setSuccessTicket] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleOpenRegister = (course: CourseItem) => {
    setRegisteringCourse(course);
    setSuccessTicket(null);
    setErrorMessage(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      city: '',
      notes: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!registeringCourse) return;

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMessage(
        language === 'ar'
          ? 'يرجى ملء جميع الحقول المطلوبة (الاسم الكامل، رقم الهاتف، والبريد الإلكتروني).'
          : 'Please fill in all required fields (Full name, phone, and email).'
      );
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await submitCourseRegistration({
        courseId: registeringCourse.id,
        courseTitle: resolve(registeringCourse.title),
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        notes: formData.notes,
      });

      if (res.success) {
        setSuccessTicket(res.id);
      }
    } catch {
      setErrorMessage(
        language === 'ar'
          ? 'حدث خطأ أثناء إرسال البيانات. يرجى المحاولة مرة أخرى.'
          : 'An error occurred while submitting. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="training" className="py-24 bg-neutral-950 text-white relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 text-emerald-300 text-xs sm:text-sm font-bold mb-3 border border-emerald-500/40">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            <span>{t('trainingTitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t('trainingSubtitle')}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="rounded-3xl bg-black border border-neutral-800 p-7 shadow-xl hover:border-emerald-500/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-neutral-900 text-emerald-300 border border-neutral-700">
                    {resolve(course.category)}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                      course.status === 'open'
                        ? 'bg-amber-950 text-amber-300 border border-amber-700/60'
                        : 'bg-neutral-900 text-neutral-400'
                    }`}
                  >
                    {resolve(course.statusLabel)}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                  {resolve(course.title)}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {resolve(course.description)}
                </p>

                {/* Details List */}
                <div className="space-y-2.5 pt-4 border-t border-neutral-900 text-xs sm:text-sm text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      <strong className="text-white">{t('courseDate')}</strong> {course.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      <strong className="text-white">{t('courseDuration')}</strong> {resolve(course.duration)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      <strong className="text-white">{t('courseLocation')}</strong> {resolve(course.location)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      <strong className="text-white">{t('courseSeats')}</strong> {course.seats}
                    </span>
                  </div>
                  {course.instructor && (
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>
                        <strong className="text-white">{t('courseInstructor')}</strong> {resolve(course.instructor)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-neutral-900">
                <button
                  onClick={() => handleOpenRegister(course)}
                  disabled={course.status === 'closed'}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{t('courseRegisterBtn')}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Course Registration Modal Form */}
      {registeringCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-neutral-900 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-neutral-700 text-white relative">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-neutral-800">
              <div>
                <span className="text-xs font-bold text-emerald-400 block mb-1">
                  {language === 'ar' ? 'استمارة التسجيل في الدورة التدريبية' : 'Course Registration Form'}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {resolve(registeringCourse.title)}
                </h3>
              </div>
              <button
                onClick={() => setRegisteringCourse(null)}
                className="p-1 rounded-full text-neutral-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Success State */}
            {successTicket ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  {t('regSuccessTitle')}
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed max-w-sm mx-auto">
                  {t('regSuccessDesc')}
                </p>
                <div className="p-3 rounded-xl bg-black border border-neutral-800 text-xs font-mono text-emerald-300 inline-block">
                  {language === 'ar' ? 'رقم الطلب:' : 'Request ID:'} {successTicket}
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => setRegisteringCourse(null)}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm"
                  >
                    {t('closeModal')}
                  </button>
                </div>
              </div>
            ) : (
              /* Registration Form */
              <form onSubmit={handleSubmit} className="py-5 space-y-4">
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-950 border border-rose-700 text-xs text-rose-300">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">
                    {t('formFullName')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-700 bg-black text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    placeholder={language === 'ar' ? 'اكتب اسمك الثلاثي' : 'Full Name'}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 mb-1">
                      {t('formPhone')}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-700 bg-black text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                      placeholder="+211 ..."
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-300 mb-1">
                      {t('formEmail')}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-700 bg-black text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                      placeholder="name@example.com"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">
                    {t('formCity')}
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-700 bg-black text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    placeholder={language === 'ar' ? 'مثال: جوبا' : 'e.g. Juba'}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">
                    {language === 'ar' ? 'ملاحظات أو دافع الالتحاق بالدورة' : 'Notes / Motivation'}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-700 bg-black text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    placeholder={language === 'ar' ? 'اذكر سبب اهتمامك بهذه الدورة...' : 'Why do you wish to join?'}
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setRegisteringCourse(null)}
                    className="px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-sm font-medium"
                  >
                    {t('closeModal')}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>{language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{language === 'ar' ? 'تأكيد التسجيل' : 'Confirm Registration'}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
};
