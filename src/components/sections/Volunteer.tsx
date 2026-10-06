import React, { useState } from 'react';
import {
  Heart,
  Send,
  CheckCircle2,
  Sparkles,
  Users,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';

export const Volunteer: React.FC = () => {
  const { language, t } = useLanguage();
  const { submitVolunteer } = useData();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    country: language === 'ar' ? 'جنوب السودان' : 'South Sudan',
    city: '',
    areaOfInterest: '',
    skills: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successId, setSuccessId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const interestOptions = [
    { ar: 'التعليم والتدريب وحلقات العلم الشرعي', en: 'Education, Training & Islamic Study Circles' },
    { ar: 'قوافل الإغاثة والميدان الخيري', en: 'Relief Convoys & Field Charity' },
    { ar: 'تمكين الشباب والمبادرات المجتمعية', en: 'Youth Empowerment & Community Initiatives' },
    { ar: 'رعاية الأسر وكفالة الأيتام', en: 'Family Welfare & Orphan Sponsorship' },
    { ar: 'الإعلام والتوثيق الميداني والنشر', en: 'Media, Field Documentation & Communication' },
    { ar: 'الخدمات اللوجستية والإدارة والتنظيم', en: 'Logistics, Field Administration & Operations' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.fullName.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.areaOfInterest ||
      !formData.skills.trim()
    ) {
      setErrorMessage(
        language === 'ar'
          ? 'يرجى إكمال جميع الحقول الإلزامية المشار إليها بعلامة (*).'
          : 'Please complete all required fields marked with (*).'
      );
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await submitVolunteer({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        country: formData.country,
        city: formData.city,
        areaOfInterest: formData.areaOfInterest,
        skills: formData.skills,
        message: formData.message,
      });

      if (res.success) {
        setSuccessId(res.id);
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          country: language === 'ar' ? 'جنوب السودان' : 'South Sudan',
          city: '',
          areaOfInterest: '',
          skills: '',
          message: '',
        });
      }
    } catch {
      setErrorMessage(
        language === 'ar'
          ? 'حدث خطأ أثناء إرسال طلب التطوع. يرجى إعادة المحاولة.'
          : 'An error occurred while submitting your application. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="volunteer" className="py-24 bg-neutral-950 text-white relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 text-emerald-300 text-xs sm:text-sm font-bold mb-3 border border-emerald-500/40">
            <Heart className="w-4 h-4 text-emerald-400" />
            <span>{t('volunteerTitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t('volunteerSubtitle')}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Why Volunteer with Us (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-black rounded-3xl p-8 border border-neutral-800 shadow-xl space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>{language === 'ar' ? 'لماذا تتطوع معنا؟' : 'Why Volunteer With Us?'}</span>
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {t('volunteerIntroText')}
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-neutral-900 border border-neutral-700 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {language === 'ar' ? 'أثر إنساني وخيري مباشر' : 'Direct Humanitarian Impact'}
                    </h4>
                    <p className="text-xs text-neutral-400">
                      {language === 'ar'
                        ? 'مشاركتك الميدانية تسهم في تعليم الطلاب وإغاثة المحتاجين في جنوب السودان.'
                        : 'Your participation directly aids students and needy families.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-neutral-900 border border-neutral-700 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {language === 'ar' ? 'الصحبة الصالحة وتطوير المهارات' : 'Mentorship & Skills'}
                    </h4>
                    <p className="text-xs text-neutral-400">
                      {language === 'ar'
                        ? 'العمل جنباً إلى جنب مع كبار رجال الخير والدعاة واكتساب مهارات قيادية رفيعة.'
                        : 'Work alongside community elders and gain high-impact leadership capabilities.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-neutral-900 border border-neutral-700 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {language === 'ar' ? 'شهادات تقدير وتكريم رسمي' : 'Official Volunteer Certificates'}
                    </h4>
                    <p className="text-xs text-neutral-400">
                      {language === 'ar'
                        ? 'توثيق رسمي لمشاركاتك التطوعية من إدارة المنصة ومجلس التوجيه.'
                        : 'Documented formal recognition of your volunteer achievements.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note on Volunteer Charter */}
            <div className="p-5 rounded-2xl bg-neutral-950 border border-amber-500/30 text-neutral-300 text-xs leading-relaxed">
              <strong className="text-amber-400 block mb-1">
                {language === 'ar' ? 'ميثاق المتطوع الخيري:' : 'Charity Volunteer Charter:'}
              </strong>
              {language === 'ar'
                ? 'يلتزم المتطوع بإخلاص النية، وصون كرامة المستفيدين، والعمل بروح الأخوة لخدمة مجتمع جنوب السودان بكافة مكوناته.'
                : 'Volunteers pledge sincere dedication, preserving community dignity and serving with utmost brotherhood.'}
            </div>
          </div>

          {/* Right Column: Professional Application Form (7 cols) */}
          <div className="lg:col-span-7 bg-black rounded-3xl p-8 sm:p-10 border border-neutral-800 shadow-2xl">
            
            {successId ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t('volunteerSuccessTitle')}
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-md mx-auto">
                  {t('volunteerSuccessDesc')}
                </p>
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 text-xs font-mono text-emerald-300 inline-block">
                  {language === 'ar' ? 'رقم طلب التطوع:' : 'Volunteer Ticket ID:'} <strong>{successId}</strong>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => setSuccessId(null)}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm"
                  >
                    {language === 'ar' ? 'تقديم طلب تطوع آخر' : 'Submit Another Application'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-neutral-800 pb-4">
                  <h3 className="text-xl font-bold text-white">
                    {language === 'ar' ? 'استمارة الانضمام لفرق الخير والتطوع' : 'Volunteer Application Form'}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    {language === 'ar' ? 'يرجى تزويدنا بالبيانات الدقيقة للتواصل معك وتنسيق المهام الميدانية المناسبة.' : 'Please provide accurate details for coordination.'}
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-950 border border-rose-700 text-xs text-rose-300">
                    {errorMessage}
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">
                    {t('formFullName')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-700 bg-neutral-950 text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    placeholder={language === 'ar' ? 'اكتب اسمك بالكامل' : 'Your full legal name'}
                  />
                </div>

                {/* Phone & Email */}
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
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-700 bg-neutral-950 text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
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
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-700 bg-neutral-950 text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                      placeholder="name@example.com"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Country & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 mb-1">
                      {t('formCountry')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-700 bg-neutral-950 text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 mb-1">
                      {t('formCity')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-700 bg-neutral-950 text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                      placeholder={language === 'ar' ? 'جوبا، واو، ملكال...' : 'Juba, Wau, Malakal...'}
                    />
                  </div>
                </div>

                {/* Area of Interest */}
                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">
                    {t('formAreaInterest')}
                  </label>
                  <select
                    required
                    value={formData.areaOfInterest}
                    onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-700 bg-neutral-950 text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  >
                    <option value="">
                      {language === 'ar' ? '-- اختر المجال المفضل للتطوع --' : '-- Select Area of Volunteer Interest --'}
                    </option>
                    {interestOptions.map((opt, i) => (
                      <option key={i} value={opt[language] || opt.ar}>
                        {opt[language] || opt.ar}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Skills */}
                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">
                    {t('formSkills')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-700 bg-neutral-950 text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    placeholder={language === 'ar' ? 'مثال: التدريس، التوزيع الإغاثي، التمريض، التصميم، القيادة...' : 'e.g. Teaching, Aid distribution, IT, Medical, Logistics...'}
                  />
                </div>

                {/* Motivation Message */}
                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">
                    {t('formMessage')}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-700 bg-neutral-950 text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    placeholder={language === 'ar' ? 'أخبرنا عن دافعك للمشاركة في أنشطة الخير وما ترغب بتقديمه...' : 'Tell us about your motivation...'}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base shadow-lg transition active:scale-98 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>{language === 'ar' ? 'جاري إرسال طلب التطوع...' : 'Submitting Application...'}</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>{t('submitVolunteerBtn')}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
