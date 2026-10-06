import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  MessageSquare,
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';

export const Contact: React.FC = () => {
  const { language, resolve, t } = useLanguage();
  const { config, submitContact } = useData();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successId, setSuccessId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setErrorMessage(
        language === 'ar'
          ? 'يرجى ملء جميع الحقول المطلوبة (الاسم، البريد الإلكتروني، الموضوع، والرسالة).'
          : 'Please fill in all required fields (Name, Email, Subject, Message).'
      );
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await submitContact({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });

      if (res.success) {
        setSuccessId(res.id);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }
    } catch {
      setErrorMessage(
        language === 'ar'
          ? 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.'
          : 'Failed to send message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black text-white relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold mb-3 shadow-md">
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>{t('contactTitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t('contactSubtitle')}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-950 rounded-3xl p-8 border border-neutral-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white">
                {t('contactInfoHeading')}
              </h3>

              <div className="space-y-4 text-sm">
                {/* Physical Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-700 text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block font-semibold mb-0.5">
                      {language === 'ar' ? 'المقر العام ومكتب الأمانة:' : 'Headquarters & Secretariat:'}
                    </span>
                    <span className="font-bold text-white leading-snug">
                      {resolve(config.contact.address)}
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-700 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block font-semibold mb-0.5">
                      {language === 'ar' ? 'الهاتف المباشر:' : 'Direct Phone:'}
                    </span>
                    <a
                      href={`tel:${config.contact.phone.replace(/\s+/g, '')}`}
                      className="font-bold text-white hover:text-emerald-400 transition"
                      dir="ltr"
                    >
                      {config.contact.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-700 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block font-semibold mb-0.5">
                      {language === 'ar' ? 'خدمة واتساب الرسمية:' : 'Official WhatsApp:'}
                    </span>
                    <a
                      href={`https://wa.me/${config.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-400 hover:text-emerald-300 transition"
                      dir="ltr"
                    >
                      {config.contact.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-700 text-emerald-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block font-semibold mb-0.5">
                      {language === 'ar' ? 'البريد الإلكتروني:' : 'Official Email:'}
                    </span>
                    <a
                      href={`mailto:${config.contact.email}`}
                      className="font-bold text-white hover:text-emerald-400 transition"
                    >
                      {config.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-neutral-800">
                <span className="text-xs font-bold text-neutral-300 block mb-3">
                  {t('socialHeading')}
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={config.contact.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-emerald-400 hover:border-emerald-500 transition"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={config.contact.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-emerald-400 hover:border-emerald-500 transition"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href={config.contact.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-emerald-400 hover:border-emerald-500 transition"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={config.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-emerald-400 hover:border-emerald-500 transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-950 rounded-3xl p-8 sm:p-10 border border-neutral-800 shadow-xl">
            
            {successId ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t('contactSuccessTitle')}
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-md mx-auto">
                  {t('contactSuccessDesc')}
                </p>
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 text-xs font-mono text-emerald-300 inline-block">
                  {language === 'ar' ? 'رقم التذكرة:' : 'Ticket ID:'} <strong>{successId}</strong>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => setSuccessId(null)}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm"
                  >
                    {language === 'ar' ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-neutral-800 pb-3">
                  <h3 className="text-xl font-bold text-white">
                    {language === 'ar' ? 'أرسل لنا استفسارك أو مبادرتك' : 'Send Us An Inquiry'}
                  </h3>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-950 border border-rose-700 text-xs text-rose-300">
                    {errorMessage}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">
                    {t('formFullName')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-700 bg-black text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    placeholder={language === 'ar' ? 'الاسم' : 'Your name'}
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 mb-1">
                      {t('formEmail')}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-700 bg-black text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                      placeholder="name@example.com"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 mb-1">
                      {t('formPhone')}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-700 bg-black text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                      placeholder="+211 ..."
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">
                    {t('contactFormSubject')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-700 bg-black text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    placeholder={language === 'ar' ? 'موضوع الرسالة أو الاستفسار' : 'Subject'}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">
                    {t('contactFormMessage')}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-700 bg-black text-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    placeholder={language === 'ar' ? 'اكتب رسالتك بالتفصيل هنا...' : 'Write your message here...'}
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base shadow-lg transition active:scale-98 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>{language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>{t('contactSendBtn')}</span>
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
