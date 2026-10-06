import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, LocalizedString } from '../types';

interface LanguageContextType {
  language: Language;
  direction: 'rtl' | 'ltr';
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  resolve: (item?: LocalizedString | null) => string;
  t: (key: string) => string;
}

const UI_TRANSLATIONS: Record<string, { ar: string; en: string }> = {
  // Navigation
  navHome: { ar: 'الرئيسية', en: 'Home' },
  navAbout: { ar: 'من نحن', en: 'About Us' },
  navScholars: { ar: 'مجلس الدعاة ورجال الخير', en: 'Council of Scholars & Elders' },
  navPrograms: { ar: 'برامجنا', en: 'Our Programs' },
  navRelief: { ar: 'الميدان الإغاثي', en: 'Field Relief' },
  navProjects: { ar: 'مشروعاتنا', en: 'Projects' },
  navNews: { ar: 'الأخبار والأنشطة', en: 'News & Activities' },
  navTraining: { ar: 'التدريب والتعليم', en: 'Training & Education' },
  navVolunteer: { ar: 'تطوع معنا', en: 'Volunteer' },
  navPartners: { ar: 'الشركاء', en: 'Partners' },
  navDonate: { ar: 'ادعم رسالتنا', en: 'Support Our Mission' },
  navContact: { ar: 'تواصل معنا', en: 'Contact Us' },
  adminPanel: { ar: 'لوحة الإدارة', en: 'Admin CMS' },

  // Scholars Council Section
  scholarsTitle: { ar: 'مجلس الدعاة ورجال الخير بجنوب السودان', en: 'Council of Preachers & Philanthropic Elders' },
  scholarsSubtitle: { ar: 'شخصيات دعوية ورجال خير نذروا أنفسهم لخدمة المجتمع وبناء الأجيال', en: 'Preachers, Scholars and Community Philanthropists Leading Humanitarian & Educational Stewardship' },
  reliefTitle: { ar: 'ميدان العمل الخيري وقوافل الإحسان', en: 'Charity Field Operations & Relief Convoys' },
  reliefSubtitle: { ar: 'بسواعد رجال الخير من جنوب السودان.. نصل إلى أقصى القرى والمجتمعات', en: 'Led by South Sudanese Philanthropic Men Serving Communities with Utmost Dignity' },

  // Hero
  heroBtnAbout: { ar: 'تعرف علينا', en: 'About Us' },
  heroBtnPrograms: { ar: 'برامجنا', en: 'Our Programs' },
  heroBtnContact: { ar: 'تواصل معنا', en: 'Contact Us' },

  // About Section
  aboutTitle: { ar: 'عن المنصة', en: 'About The Platform' },
  aboutSubtitle: { ar: 'كيان إنساني ومجتمعي يسعى لبناء الإنسان وتمكين المجتمع', en: 'A humanitarian and civic platform dedicated to human capacity and community empowerment' },
  aboutOverview: { ar: 'نبذة عن المنصة', en: 'Platform Overview' },
  visionTitle: { ar: 'رؤيتنا', en: 'Our Vision' },
  missionTitle: { ar: 'رسالتنا', en: 'Our Mission' },
  valuesTitle: { ar: 'قيمنا الجوهرية', en: 'Our Core Values' },
  areasOfWorkTitle: { ar: 'مجالات العمل والتأثير', en: 'Areas of Work & Impact' },

  // Programs Section
  programsTitle: { ar: 'برامجنا التنموية', en: 'Our Developmental Programs' },
  programsSubtitle: { ar: 'مسارات متكاملة لدعم التعليم وبناء المهارات وتمكين المجتمعات', en: 'Integrated tracks for educational support, skill building, and civic empowerment' },
  programLearnMore: { ar: 'تفاصيل البرنامج', en: 'Program Details' },
  targetGroupLabel: { ar: 'الفئة المستهدفة:', en: 'Target Group:' },
  keyGoalsLabel: { ar: 'الأهداف الرئيسية:', en: 'Key Objectives:' },
  closeModal: { ar: 'إغلاق', en: 'Close' },
  participateInProgram: { ar: 'المشاركة أو الاستفسار عن البرنامج', en: 'Participate or Inquire' },

  // Projects Section
  projectsTitle: { ar: 'مشروعاتنا التنموية', en: 'Our Developmental Projects' },
  projectsSubtitle: { ar: 'مبادرات ميدانية ومشروعات مستدامة لخدمة الإنسان في جنوب السودان', en: 'Field initiatives and sustainable community projects serving South Sudan' },
  projectsEmptyMsg: { ar: 'سيتم إضافة مشروعات المنصة قريباً.', en: 'Platform projects will be added soon.' },
  projectsEmptyDesc: { ar: 'تعكف فرق التخطيط على تدقيق ودراسة المشروعات الميدانية مع الشركاء وسيتم نشر كافة التفاصيل فور اعتمادها رسمياً.', en: 'Planning teams are finalizing field project proposals with community partners and full details will be published once officially approved.' },

  // News Section
  newsTitle: { ar: 'الأخبار والأنشطة', en: 'News and Activities' },
  newsSubtitle: { ar: 'متابعة حية لآخر فعاليات ومبادرات ودورات منصة التنمية الإنسانية', en: 'Live coverage of latest events, initiatives, and workshops' },
  filterAll: { ar: 'الكل', en: 'All' },
  filterAnnouncements: { ar: 'إعلانات رسمية', en: 'Announcements' },
  filterInitiatives: { ar: 'مبادرات مجتمعية', en: 'Initiatives' },
  filterTraining: { ar: 'ورش تدريبية', en: 'Workshops' },
  readMoreArticle: { ar: 'اقرأ المزيد', en: 'Read Full Article' },
  shareArticle: { ar: 'مشاركة الخبر:', en: 'Share Article:' },
  copiedSuccess: { ar: 'تم نسخ الرابط بنجاح!', en: 'Link copied successfully!' },

  // Training Section
  trainingTitle: { ar: 'التدريب والتعليم', en: 'Training & Education' },
  trainingSubtitle: { ar: 'فرص تعليمية وبناء قدرات للشباب والكوادر الوطنية', en: 'Educational opportunities and capacity building for youth and professionals' },
  courseRegisterBtn: { ar: 'التسجيل في الدورة', en: 'Register for Course' },
  courseDetails: { ar: 'تفاصيل التدريب', en: 'Training Details' },
  courseDuration: { ar: 'المدة:', en: 'Duration:' },
  courseLocation: { ar: 'الموقع:', en: 'Location:' },
  courseSeats: { ar: 'المقاعد:', en: 'Capacity:' },
  courseDate: { ar: 'تاريخ الانطلاق:', en: 'Start Date:' },
  courseInstructor: { ar: 'إشراف التدريب:', en: 'Instructor:' },
  regSuccessTitle: { ar: 'تم تسجيل طلبك بنجاح!', en: 'Registration Received Successfully!' },
  regSuccessDesc: { ar: 'سيتواصل معك فريق التدريب لتأكيد التفاصيل وموعد الانطلاق.', en: 'Our training team will reach out to confirm details and schedules.' },

  // Volunteers Section
  volunteerTitle: { ar: 'تطوع معنا', en: 'Volunteer With Us' },
  volunteerSubtitle: { ar: 'ساهم بمهاراتك ووقتك في صناعة الأثر وصياغة مستقبل أفضل لمجتمعك', en: 'Contribute your time and skills to create meaningful impact and build a better future' },
  volunteerIntroText: {
    ar: 'التطوع في منصة التنمية الإنسانية بجنوب السودان هو فرصة حقيقية للعطاء واكتساب الخبرات والعمل بروح الفريق لخدمة مجتمعنا. نرحب بجميع الطاقات الشابة والمهنية.',
    en: 'Volunteering with the South Sudan Humanitarian Development Platform is an opportunity to give back, acquire expertise, and foster teamwork in service of our community. We welcome all enthusiastic youth and professionals.',
  },
  formFullName: { ar: 'الاسم الكامل *', en: 'Full Name *' },
  formPhone: { ar: 'رقم الهاتف / الواتساب *', en: 'Phone / WhatsApp *' },
  formEmail: { ar: 'البريد الإلكتروني *', en: 'Email Address *' },
  formCountry: { ar: 'الدولة *', en: 'Country *' },
  formCity: { ar: 'المدينة / الولاية *', en: 'City / State *' },
  formAreaInterest: { ar: 'مجال الاهتمام والتطوع *', en: 'Area of Volunteer Interest *' },
  formSkills: { ar: 'المهارات والخبرات السابقة *', en: 'Skills & Experience *' },
  formMessage: { ar: 'رسالة الدافع / ملاحظات إضافية', en: 'Motivation Message / Additional Notes' },
  submitVolunteerBtn: { ar: 'إرسال طلب التطوع', en: 'Submit Volunteer Application' },
  volunteerSuccessTitle: { ar: 'شكراً لمبادرتك النبيلة!', en: 'Thank You for Your Inspiring Initiative!' },
  volunteerSuccessDesc: {
    ar: 'تم استلام طلب التطوع بنجاح وحفظه في سجلات المنصة. ستقوم لجنة شؤون المتطوعين بالتواصل معك قريباً.',
    en: 'Your volunteer application has been received and logged. Our volunteer committee will get in touch with you soon.',
  },

  // Partners Section
  partnersTitle: { ar: 'شركاؤنا والجهات الداعمة', en: 'Our Partners and Supporters' },
  partnersSubtitle: { ar: 'نؤمن بالتعاون المؤسسي المتكامل لتحقيق التنمية المستدامة', en: 'We believe in collaborative institutional partnerships to achieve sustainable development' },
  partnersEmptyMsg: { ar: 'سيتم الإعلان عن الشركاء والداعمين المعتمدين تباعاً.', en: 'Approved partners and supporters will be announced successively.' },
  partnersEmptyDesc: {
    ar: 'ترحب المنصة بالمؤسسات والمنظمات التنموية والتعليمية والخيرية الراغبة في توقيع مذكرات تفاهم وشراكات عمل ميدانية مشتركة.',
    en: 'The platform welcomes educational, humanitarian, and developmental organizations interested in formal partnerships and cooperative MoUs.',
  },
  partnerInquireBtn: { ar: 'طلب عقد شراكة مؤسسية', en: 'Request Partnership MoU' },

  // Donation Section
  donateTitle: { ar: 'ادعم رسالتنا التنموية', en: 'Support Our Mission' },
  donateSubtitle: { ar: 'مساهمتكم تصنع فارقاً حقيقياً في تعليم الطلاب وتمكين المحتاجين', en: 'Your support creates genuine transformation in education and empowerment' },
  donateBankTitle: { ar: 'التحويل المصرفي المباشر', en: 'Direct Bank Transfer' },
  donateMobileTitle: { ar: 'الدفع عبر الهاتف المحمول', en: 'Mobile Money Payments' },
  donateIntlTitle: { ar: 'الشراكات والدعم الدولي', en: 'International Support' },
  donateNoticeTitle: { ar: 'ميثاق الشفافية المالية', en: 'Financial Transparency Charter' },
  donateContactBtn: { ar: 'التواصل المباشر مع الإدارة المالية', en: 'Contact Financial Office' },

  // Contact Section
  contactTitle: { ar: 'تواصل معنا', en: 'Contact Us' },
  contactSubtitle: { ar: 'نسعد دائماً باستقبال استفساراتكم ومقترحاتكم ومبادراتكم', en: 'We are delighted to receive your inquiries, proposals, and initiatives' },
  contactFormSubject: { ar: 'الموضوع *', en: 'Subject *' },
  contactFormMessage: { ar: 'الرسالة *', en: 'Message *' },
  contactSendBtn: { ar: 'إرسال الرسالة', en: 'Send Message' },
  contactSuccessTitle: { ar: 'تم إرسال رسالتك بنجاح!', en: 'Message Sent Successfully!' },
  contactSuccessDesc: { ar: 'شكراً لتواصلك. سيقوم فريق المنصة بالرد عليك في أقرب وقت ممكن.', en: 'Thank you for reaching out. Our team will get back to you promptly.' },
  contactInfoHeading: { ar: 'بيانات الاتصال والمقر', en: 'Contact Channels & Headquarters' },
  socialHeading: { ar: 'تابعنا على المنصات الرقمية', en: 'Follow Us on Social Media' },

  // Footer
  footerRights: { ar: 'جميع الحقوق محفوظة', en: 'All Rights Reserved' },
  footerTagline: { ar: 'منصة تنموية وإنسانية بجنوب السودان - نسعى لتمكين المجتمع بالمعرفة والعطاء.', en: 'A developmental & humanitarian platform in South Sudan - empowering communities through knowledge and service.' },
  quickLinks: { ar: 'روابط سريعة', en: 'Quick Links' },
  officialPages: { ar: 'أقسام المنصة', en: 'Platform Sections' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sshdp_lang') as Language;
      if (saved === 'ar' || saved === 'en') return saved;
    }
    return 'ar'; // Default Arabic
  });

  const direction: 'rtl' | 'ltr' = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    localStorage.setItem('sshdp_lang', language);
  }, [language, direction]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const resolve = (item?: LocalizedString | null): string => {
    if (!item) return '';
    return item[language] || item.ar || item.en || '';
  };

  const t = (key: string): string => {
    const entry = UI_TRANSLATIONS[key];
    if (!entry) return key;
    return entry[language] || entry.ar || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        direction,
        setLanguage,
        toggleLanguage,
        resolve,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
