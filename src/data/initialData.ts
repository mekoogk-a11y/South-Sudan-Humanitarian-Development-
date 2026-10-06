import { PlatformConfig, ProgramItem, ProjectItem, NewsItem, CourseItem, PartnerItem } from '../types';

export const initialConfig: PlatformConfig = {
  orgName: {
    ar: 'منصة التنمية الإنسانية بجنوب السودان',
    en: 'South Sudan Humanitarian Development Platform',
  },
  slogan: {
    ar: 'نحو مجتمع أكثر معرفة وتمكيناً وتنمية',
    en: 'Towards a More Knowledgeable, Empowered and Developed Society',
  },
  heroIntro: {
    ar: 'منصة وطنية إنسانية ومجتمعية تعمل على دعم التنمية الإنسانية، والتعليم وبناء القدرات، وتمكين الشباب والمجتمعات في جنوب السودان لتحقيق نهضة مجتمعية مستدامة.',
    en: 'A humanitarian and community platform dedicated to supporting humanitarian development, education, capacity building, and community empowerment in South Sudan.',
  },
  aboutIntro: {
    ar: 'منصة التنمية الإنسانية بجنوب السودان هي مبادرة إنسانية وتنموية مستقلة وغير ربحية، تأسست استجابةً للحاجة الملحة لدعم مسيرة التعلم وبناء القدرات والتمكين المجتمعي. تعمل المنصة بالشراكة مع المجتمعات المحلية والمؤسسات التنموية لتعزيز الصمود الاجتماعي، وفتح آفاق التعليم والتطوير المهني، وترسيخ قيم التضامن الإنساني.',
    en: 'The South Sudan Humanitarian Development Platform is an independent, non-profit humanitarian and developmental initiative established in response to the vital need for education, capacity building, and community empowerment. The platform partners with local communities and development organizations to enhance social resilience and promote human solidarity.',
  },
  vision: {
    ar: 'المساهمة في بناء مجتمع واعٍ ومتمكن وقادر على صناعة مستقبل أفضل.',
    en: 'Contributing to building a conscious, empowered society capable of creating a better future.',
  },
  mission: {
    ar: 'تقديم برامج ومبادرات إنسانية وتعليمية وتنموية تسهم في تمكين الأفراد والمجتمعات وتحسين جودة الحياة.',
    en: 'Delivering humanitarian, educational, and developmental programs and initiatives that empower individuals and communities and enhance quality of life.',
  },
  values: [
    {
      id: 'integrity',
      title: { ar: 'النزاهة', en: 'Integrity' },
      description: {
        ar: 'الالتزام بأعلى المعايير الأخلاقية والمهنية في كافة الأنشطة والمبادرات.',
        en: 'Commitment to the highest ethical and professional standards in all actions.',
      },
    },
    {
      id: 'transparency',
      title: { ar: 'الشفافية', en: 'Transparency' },
      description: {
        ar: 'الوضوح التام في إدارة الموارد والبرامج والتواصل مع المستفيدين والشركاء.',
        en: 'Total clarity in managing resources, programs, and engagement with stakeholders.',
      },
    },
    {
      id: 'responsibility',
      title: { ar: 'المسؤولية', en: 'Accountability & Responsibility' },
      description: {
        ar: 'تحمل المسؤولية الكاملة تجاه خدمة المجتمعات المستهدفة وتلبية احتياجاتها.',
        en: 'Full responsibility and accountability towards serving targeted communities.',
      },
    },
    {
      id: 'collaboration',
      title: { ar: 'التعاون', en: 'Collaboration' },
      description: {
        ar: 'بناء شراكات مثمرة مع الجهات الفاعلة والمجتمع لتحقيق أثر تنموي مضاعف.',
        en: 'Fostering productive partnerships with local actors to maximize impact.',
      },
    },
    {
      id: 'empowerment',
      title: { ar: 'التمكين', en: 'Empowerment' },
      description: {
        ar: 'تزويد الأفراد بالمعرفة والمهارات التي تؤهلهم للاعتماد على الذات والريادة.',
        en: 'Equipping individuals with skills and knowledge for self-reliance and leadership.',
      },
    },
    {
      id: 'community_service',
      title: { ar: 'خدمة المجتمع', en: 'Community Service' },
      description: {
        ar: 'وضع المصلحة العامة للمجتمع وأفراده في صدارة كل خطة أو تدخل إنساني.',
        en: 'Prioritizing the collective welfare of communities in every intervention.',
      },
    },
    {
      id: 'human_respect',
      title: { ar: 'احترام الإنسان', en: 'Human Dignity & Respect' },
      description: {
        ar: 'صون كرامة كل إنسان دون تمييز، والعمل الإنساني القائم على العدالة والمساواة.',
        en: 'Preserving the dignity of every person without discrimination, fostering justice and equality.',
      },
    },
  ],
  contact: {
    phone: '',
    whatsapp: '',
    email: '',
    address: {
      ar: 'جنوب السودان - جوبا',
      en: 'Juba, South Sudan',
    },
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  donationInfo: {
    bankTransferPlaceholder: {
      ar: 'الحسابات المصرفية الرسمية المعتمدة قيد التجهيز من قبل الإدارة المالية للمنصة.',
      en: 'Official bank accounts are currently being configured by the platform financial administration.',
    },
    mobilePaymentPlaceholder: {
      ar: 'خدمات الدفع عبر الهاتف المحمول (m-GURUSH / MTN Mobile Money) سيتم تفعيلها فور اكتمال الاعتماد الرسمي.',
      en: 'Mobile payment channels (m-GURUSH / MTN Mobile Money) will be activated upon completion of official verification.',
    },
    internationalDonationPlaceholder: {
      ar: 'للتبرعات الدولية والشراكات المؤسسية، يُرجى التواصل المباشر مع مكتب الشراكات والتطوير عبر البريد الإلكتروني الرسمي.',
      en: 'For international institutional donations and partnerships, please contact our Development Office directly.',
    },
    contactNotice: {
      ar: 'حرصاً على الشفافية والأمان، تؤكد المنصة أنها لا تجمع تبرعات عبر أي حسابات شخصية غير معلنة في هذا الموقع الرسمي.',
      en: 'To ensure transparency and security, the platform emphasizes that it never collects donations through unofficial personal accounts.',
    },
  },
};

export const initialPrograms: ProgramItem[] = [
  {
    id: 'education-training',
    title: { ar: 'التعليم والتدريب', en: 'Education and Training' },
    shortDesc: {
      ar: 'دعم التعليم وتنمية المهارات وبناء القدرات للمتعلمين والكوادر المجتمعية.',
      en: 'Supporting education, developing essential skills, and building capacity.',
    },
    fullDesc: {
      ar: 'يركز هذا البرنامج على تعزيز مسارات التعلم النظامي وغير النظامي، ودعم الطلاب والشباب المحرومين من الفرص التعليمية، وتوفير دورات تدريبية متخصصة في محو الأمية، واللغات، والمهارات الرقمية، والإدارة المجتمعية.',
      en: 'Focuses on formal and non-formal learning pathways, supporting youth lacking access to educational opportunities, and delivering specialized courses in literacy, languages, digital skills, and community management.',
    },
    icon: 'BookOpen',
    targetGroup: { ar: 'الطلاب، المعلمون، الباحثون عن عمل، والشباب', en: 'Students, teachers, job seekers, and youth' },
    goals: [
      { ar: 'تسهيل الوصول إلى مصادر المعرفة والتعليم المستمر', en: 'Facilitating access to knowledge and lifelong learning' },
      { ar: 'تنظيم ورش عمل ودورات تقنية وحرفية معتمدة', en: 'Organizing accredited technical and vocational workshops' },
      { ar: 'بناء كفاءات المعلمين والمدربين المحليين', en: 'Strengthening competencies of local teachers and trainers' },
    ],
    badgeColor: 'emerald',
  },
  {
    id: 'community-development',
    title: { ar: 'التنمية المجتمعية', en: 'Community Development' },
    shortDesc: {
      ar: 'تنفيذ مبادرات تساعد المجتمعات على تطوير قدراتها وتحسين ظروفها المعيشية.',
      en: 'Implementing initiatives that help communities develop their capacities and living conditions.',
    },
    fullDesc: {
      ar: 'مبادرات متكاملة ترتكز على إشراك المجتمعات المحلية في تحديد احتياجاتها وتصميم الحلول المناسبة، مع التركيز على تعزيز التماسك الاجتماعي، وتأهيل المرافق الخدمية المشتركة، ونشر الوعي الصحي والبيئي.',
      en: 'Integrated community-driven initiatives prioritizing participatory need assessments, social cohesion, rehabilitating public amenities, and advancing public health and environmental awareness.',
    },
    icon: 'Users',
    targetGroup: { ar: 'الأحياء والمجتمعات المحلية واللجان الأهلية', en: 'Local neighborhoods, community committees, and families' },
    goals: [
      { ar: 'دعم مبادرات النظافة والصحة العامة والبيئة', en: 'Supporting sanitation, public health, and environmental cleanups' },
      { ar: 'تعزيز الحوار المجتمعي وثقافة السلام والتعايش', en: 'Fostering community dialogue and cultures of peace' },
      { ar: 'تأهيل المساحات المجتمعية والمراكز التنموية', en: 'Upgrading community hubs and multipurpose centers' },
    ],
    badgeColor: 'teal',
  },
  {
    id: 'youth-empowerment',
    title: { ar: 'تمكين الشباب', en: 'Youth Empowerment' },
    shortDesc: {
      ar: 'برامج تدريبية ومبادرات تساعد الشباب على اكتساب المهارات والريادة.',
      en: 'Training programs and initiatives that help youth gain competitive skills and leadership.',
    },
    fullDesc: {
      ar: 'تأهيل الشباب والشابات لسوق العمل وريادة الأعمال المجتمعية عبر مخيمات تدريبية، وتوجيه مهني، ورعاية الأفكار والمشاريع الشبابية الريادية التي تخلق فرص عمل وتخدم المجتمع.',
      en: 'Empowering young men and women for the job market and social entrepreneurship through bootcamps, career mentorship, and incubating youth-led projects that generate employment.',
    },
    icon: 'Sparkles',
    targetGroup: { ar: 'فئة الشباب والشابات من سن 18 إلى 35 سنة', en: 'Youth aged 18 to 35' },
    goals: [
      { ar: 'بناء مهارات ريادة الأعمال وإدارة المشاريع الصغيرة', en: 'Building entrepreneurship and micro-business management skills' },
      { ar: 'التوجيه والإرشاد المهني للاندماج في سوق العمل', en: 'Career counseling and employment market integration' },
      { ar: 'إطلاق ملتقيات شبابية للابتكار وحل المشكلات المجتمعية', en: 'Hosting youth forums for civic innovation and problem-solving' },
    ],
    badgeColor: 'amber',
  },
  {
    id: 'women-family-empowerment',
    title: { ar: 'تمكين المرأة والأسرة', en: 'Women & Family Empowerment' },
    shortDesc: {
      ar: 'دعم المبادرات التي تسهم في تحسين قدرات الأسرة والمجتمع والنساء.',
      en: 'Supporting initiatives that enhance the capacities of women, families, and community resilience.',
    },
    fullDesc: {
      ar: 'برامج مخصصة لتمكين المرأة اقتصادياً ومعرفياً من خلال الحرف اليدوية، والتدبير المنزلي، وإدارة الدخل الأسري، والتوعية بحقوق الأسرة ورعاية الطفولة المبكرة.',
      en: 'Targeted programs to empower women economically and intellectually through vocational crafts, household budget management, family welfare awareness, and early childhood care.',
    },
    icon: 'HeartHandshake',
    targetGroup: { ar: 'المرأة، ربات البيوت، والأسر المنتجة', en: 'Women, mothers, and productive household families' },
    goals: [
      { ar: 'تأهيل النساء في المهارات الإنتاجية والحرفية ذات المردود المالي', en: 'Equipping women with income-generating artisan crafts' },
      { ar: 'تعزيز استقرار الأسرة وتحسين المؤشرات التغذوية والصحية', en: 'Fostering household stability and maternal health awareness' },
      { ar: 'دعم المعيلات والنساء في المناطق الأكثر احتياجاً', en: 'Assisting female breadwinners in vulnerable areas' },
    ],
    badgeColor: 'rose',
  },
  {
    id: 'humanitarian-work',
    title: { ar: 'العمل الإنساني', en: 'Humanitarian Work' },
    shortDesc: {
      ar: 'المساهمة في المبادرات والمشروعات الإنسانية العاجلة حسب الاحتياج.',
      en: 'Contributing to emergency and targeted humanitarian interventions according to need.',
    },
    fullDesc: {
      ar: 'الاستجابة الإنسانية للمجتمعات المتأثرة بالأزمات الإنسانية والنزوح، وتوزيع المعونات الأساسية بالتنسيق مع الجهات الإنسانية واللجان المجتمعية لضمان وصول المساعدة لمستحقيها بكرامة.',
      en: 'Rapid humanitarian response to communities affected by hardship or displacement, coordinating relief packages with community elders and humanitarian partners with utmost dignity.',
    },
    icon: 'ShieldCheck',
    targetGroup: { ar: 'الفئات الأشد هشاشة والأسر المتأثرة بالظروف الإنسانية', en: 'Vulnerable populations and crisis-impacted families' },
    goals: [
      { ar: 'تقديم المساعدات العاجلة للفئات الأشد ضعفاً واحتياجاً', en: 'Delivering urgent humanitarian aid to high-need families' },
      { ar: 'التنسيق الشفاف مع منظمات الإغاثة الإنسانية والفاعلين', en: 'Transparent coordination with humanitarian relief bodies' },
      { ar: 'احترام كرامة المستفيدين وحمايتهم خلال كافة مراحل التوزيع', en: 'Upholding protection and dignity during all distributions' },
    ],
    badgeColor: 'blue',
  },
  {
    id: 'capacity-building',
    title: { ar: 'بناء القدرات', en: 'Capacity Building' },
    shortDesc: {
      ar: 'تقديم التدريب والتأهيل المؤسسي للأفراد والمؤسسات والجمعيات القاعدية.',
      en: 'Providing training and organizational qualification for individuals and grassroots bodies.',
    },
    fullDesc: {
      ar: 'تأهيل القيادات المجتمعية، وكوادر الجمعيات القاعدية، والمبادرات التطوعية، من خلال تدريبات على التخطيط الاستراتيجي، وإدارة الموارد، والحوكمة، وكتابة مقترحات المشاريع.',
      en: 'Equipping community leaders, grassroots NGO workers, and volunteer initiatives with strategic planning, resource mobilization, governance, and proposal writing expertise.',
    },
    icon: 'Award',
    targetGroup: { ar: 'المؤسسات المجتمعية، المبادرون، والمنظمات المحلية', en: 'Community organizations, civic leaders, and local groups' },
    goals: [
      { ar: 'رفع كفاءة إدارة المنظمات والمبادرات المحلية', en: 'Elevating administrative efficiency of local civil groups' },
      { ar: 'تدريب الكوادر على الرصد والتقييم وإدارة البرامج التنموية', en: 'Training staff on M&E and development project cycles' },
      { ar: 'ترسيخ مبادئ الحوكمة والنزاهة والعمل المؤسسي', en: 'Instilling governance, accountability, and institutional excellence' },
    ],
    badgeColor: 'indigo',
  },
];

// Note: Strict compliance with requirement:
// "Do not create fake projects. If no real projects are available yet, show: 'سيتم إضافة مشروعات المنصة قريباً.'"
export const initialProjects: ProjectItem[] = [];

export const initialNews: NewsItem[] = [
  {
    id: 'launch-announcement',
    title: {
      ar: 'الإعلان الرسمي عن انطلاق منصة التنمية الإنسانية بجنوب السودان',
      en: 'Official Announcement: Launch of South Sudan Humanitarian Development Platform',
    },
    date: '2026-10-01',
    category: 'announcement',
    categoryLabel: { ar: 'إعلان رسمي', en: 'Official Announcement' },
    summary: {
      ar: 'انطلاق المنصة ككيان تنموي وإنساني يهدف لتعزيز التعليم، وتأهيل القدرات، وتمكين المجتمعات المحلية في جنوب السودان.',
      en: 'Platform officially launches as a humanitarian & developmental hub committed to education, capacity building, and community empowerment.',
    },
    content: {
      ar: 'يسر منصة التنمية الإنسانية بجنوب السودان أن تعلن رسمياً عن بدء أعمالها وبرامجها التنموية الهادفة إلى خدمة الأفراد والمجتمعات في جنوب السودان. ترتكز رسالة المنصة على تقديم مبادرات تعليمية وتدريبية وتنموية متكاملة تسهم في تحسين جودة الحياة وبناء مجتمع متمكن وقادر على صناعة مستقبل واعد. وندعو كافة الشركاء والمتطوعين والمهتمين بالعمل الإنساني للانضمام إلى مسيرتنا والتواصل معنا.',
      en: 'The South Sudan Humanitarian Development Platform proudly announces the official launch of its developmental work and community programs in South Sudan. Dedicated to providing integrated education, training, and development initiatives, the platform invites partners, volunteers, and humanitarian champions to join hands towards sustainable societal progress.',
    },
    author: { ar: 'إدارة المنصة', en: 'Platform Administration' },
  },
  {
    id: 'volunteer-call-2026',
    title: {
      ar: 'فتح باب التطوع للمرحلة التأسيسية للمنصة في مختلف التخصصات',
      en: 'Volunteer Call Opened for Foundation Phase Across Multiple Disciplines',
    },
    date: '2026-10-03',
    category: 'initiative',
    categoryLabel: { ar: 'مبادرة مجتمعية', en: 'Community Initiative' },
    summary: {
      ar: 'دعوة للكوادر الوطنية والشباب والشابات الراغبين في خدمة المجتمع للانضمام لفرق التطوع في مجالات التعليم، التدريب، الإعلام والميدان.',
      en: 'Open invitation for national youth and professionals to join volunteer committees in education, media, training, and fieldwork.',
    },
    content: {
      ar: 'إيماناً منا بأن التطوع هو ركيزة العمل الإنساني وقوة التغيير الإيجابي، تفتح منصة التنمية الإنسانية بجنوب السودان باب التسجيل للراغبين في التطوع والمشاركة في تنفيذ خططها وأنشطتها. يشمل باب التطوع مجالات التعليم، وتصميم الورش التدريبية، والإعلام والتواصل المجتمعي، والأنشطة الميدانية. يمكن لجميع المهتمين التقديم عبر استمارة التطوع المتاحة في هذا الموقع.',
      en: 'Firm in the conviction that volunteerism is the cornerstone of human progress, the platform opens registration for youth and professionals eager to participate in educational, logistical, communication, and field activities across South Sudan.',
    },
    author: { ar: 'لجنة التطوع وبناء القدرات', en: 'Volunteer & Capacity Committee' },
  },
  {
    id: 'first-skills-workshop',
    title: {
      ar: 'التحضير لإطلاق ورش تدريبية مجانية في المهارات الرقمية وبناء القدرات',
      en: 'Preparations Underway for Free Digital Skills & Capacity Workshops',
    },
    date: '2026-10-05',
    category: 'training',
    categoryLabel: { ar: 'تدريب وتعليم', en: 'Training & Education' },
    summary: {
      ar: 'فرق العمل التابعة للمنصة تضع اللمسات الأخيرة لحزمة من الدورات التدريبية الموجهة للشباب لتأهيلهم لمتطلبات العصر وسوق العمل.',
      en: 'Platform technical teams finalize preparatory curricula for upcoming youth training in computer literacy and career skills.',
    },
    content: {
      ar: 'ضمن محور التعليم وبناء القدرات، تعكف المنصة حالياً على التجهيز لإطلاق أولى حزمها التدريبية المجانية والتي ستركز على المهارات الرقمية الأساسية، وإدارة المبادرات المجتمعية، وكتابة التقارير. سيتم الإعلان عن جدول الدورات ورابط التسجيل التفصيلي قريباً على هذه المنصة.',
      en: 'As part of our educational mission, the platform is preparing a first wave of foundational workshops covering practical computer skills, community project management, and reporting.',
    },
    author: { ar: 'قسم التعليم والتدريب', en: 'Education & Training Dept.' },
  },
];

export const initialCourses: CourseItem[] = [
  {
    id: 'course-digital-skills-101',
    title: {
      ar: 'أساسيات المهارات الرقمية والعمل المكتبي الحديث',
      en: 'Digital Skills & Modern Office Essentials 101',
    },
    category: { ar: 'التعليم والتقنية', en: 'Education & Tech' },
    description: {
      ar: 'دورة تدريبية عملية تركز على برامج الحاسوب الأساسية، إدارة المستندات السحابية، والاتصال المهني للشباب الباحثين عن فرص عمل وتطوير.',
      en: 'Practical workshop focusing on computer fundamentals, cloud document workflows, and professional communication for youth.',
    },
    date: '2026-11-01',
    duration: { ar: '3 أسابيع (18 ساعة تدريبية)', en: '3 Weeks (18 Training Hours)' },
    location: { ar: 'جوبا - قاعة التدريب المجتمعي (وحضور افتراضي)', en: 'Juba - Community Learning Hall & Virtual' },
    seats: '30 مقعداً',
    status: 'open',
    statusLabel: { ar: 'التسجيل متاح', en: 'Registration Open' },
    instructor: { ar: 'مدربون متخصصون في تكنولوجيا المعلومات', en: 'Certified IT Instructors' },
  },
  {
    id: 'course-community-leadership',
    title: {
      ar: 'إدارة المبادرات المجتمعية والقيادة الفعالة',
      en: 'Community Initiative Management & Effective Leadership',
    },
    category: { ar: 'بناء القدرات', en: 'Capacity Building' },
    description: {
      ar: 'برنامج تدريبي مخصص لقادة المبادرات المحلية والشباب لتأهيلهم في تخطيط المشاريع التنموية، وتحديد الاحتياجات، وإدارة الموارد المتاحة بكفاءة.',
      en: 'Targeted program for community pioneers on development project planning, need assessments, and ethical stewardship.',
    },
    date: '2026-11-15',
    duration: { ar: 'أسبوعان (12 ساعة تدريبية)', en: '2 Weeks (12 Training Hours)' },
    location: { ar: 'جوبا - المركز الثقافي والمجتمعي', en: 'Juba - Community Cultural Center' },
    seats: '25 مقعداً',
    status: 'open',
    statusLabel: { ar: 'التسجيل متاح', en: 'Registration Open' },
    instructor: { ar: 'خبراء في التنمية المجتمعية وإدارة المشاريع', en: 'Community Development Specialists' },
  },
  {
    id: 'course-ngo-governance',
    title: {
      ar: 'الحوكمة وإعداد مقترحات المشاريع للمنظمات القاعدية',
      en: 'Grassroots NGO Governance & Proposal Drafting',
    },
    category: { ar: 'التأهيل المؤسسي', en: 'Institutional Development' },
    description: {
      ar: 'ورشة عمل متقدمة للعاملين في الجمعيات الأهلية واللجان القاعدية للتعريف بأصول الحوكمة الرشيدة، والشفافية المالية، وإعداد تقارير الأثر.',
      en: 'Advanced workshop for grassroots staff on governance, financial transparency, and impact documentation.',
    },
    date: '2026-12-05',
    duration: { ar: '4 أيام مكثفة', en: '4 Intensive Days' },
    location: { ar: 'جوبا - قاعة المؤتمرات', en: 'Juba - Conference Hall' },
    seats: '20 مقعداً',
    status: 'soon',
    statusLabel: { ar: 'يفتح التسجيل قريباً', en: 'Opening Soon' },
    instructor: { ar: 'مستشارو تطوير مؤسسي', en: 'Organizational Development Advisors' },
  },
];

// Note: Strict compliance with requirement:
// "Do not invent organizations or logos. If no partners have been officially added, display: 'سيتم الإعلان عن الشركاء والداعمين المعتمدين تباعاً.'"
export const initialPartners: PartnerItem[] = [];

// هيئات وأمانات مجلس الدعاة ورجال الخير بجنوب السودان - Preachers & Philanthropic Committees
export const initialScholars = [
  {
    id: 'committee-1',
    name: { ar: 'أمانة الدعوة والتوجيه والإرشاد المجتمعي', en: 'Secretariat of Da’wah & Guidance' },
    role: { ar: 'الإشراف على حلقات العلم ومحو الأمية ونشر ثقافة التسامح', en: 'Overseeing Learning Circles & Community Harmony' },
    location: { ar: 'جوبا - المقر العام', en: 'Juba' },
    bio: {
      ar: 'هيئة إرشادية وتوجيهية تعنى ببرامج التوعية، وتأهيل الأئمة والخطباء، وترسيخ قيم السلم والتعايش الإنساني في جنوب السودان.',
      en: 'Advisory secretariat dedicated to guidance, educational outreach, and fostering peaceful coexistence.',
    },
    focusArea: { ar: 'التعليم والتوجيه وإصلاح ذات البين', en: 'Education, Counseling & Reconciliation' },
  },
  {
    id: 'committee-2',
    name: { ar: 'أمانة العمل الخيري وكفالة الأيتام', en: 'Secretariat of Charity & Orphan Care' },
    role: { ar: 'تنظيم قوافل الإغاثة الإنسانية وكفالة الأسر المتعففة', en: 'Relief Convoys & Vulnerable Family Support' },
    location: { ar: 'قطاع بحر الغزال - واو', en: 'Bahr el Ghazal Sector' },
    bio: {
      ar: 'لجنة أهلية وخيرية تعنى بمسوح الاحتياج الميداني، وتنسيق المساعدات الغذائية، وسقيا الماء، وتأمين رعاية متكاملة للأيتام.',
      en: 'Field charity body conducting needs assessments, emergency relief distribution, and orphan care.',
    },
    focusArea: { ar: 'الإغاثة الميدانية، حفر الآبار، والوقف الخيري', en: 'Field Relief, Water Projects & Waqf' },
  },
  {
    id: 'committee-3',
    name: { ar: 'أمانة المعاهد والمراكز التعليمية', en: 'Secretariat of Educational Institutes' },
    role: { ar: 'رعاية الفصول التعليمية ومحو الأمية وبناء القدرات', en: 'Community Learning Circles & Literacy Centers' },
    location: { ar: 'قطاع أعالي النيل - ملكال', en: 'Upper Nile Sector' },
    bio: {
      ar: 'هيئة تعليمية تعنى بدعم المدارس الأهلية، وتوفير الحقيبة والوسائل التعليمية، وتأهيل المعلمين المحليين.',
      en: 'Educational body providing school kits, rehabilitating community learning hubs, and training teachers.',
    },
    focusArea: { ar: 'بناء القدرات الشبابية، ومحو الأمية، والتأهيل المهني', en: 'Youth Capacity, Literacy & Vocational Skills' },
  },
  {
    id: 'committee-4',
    name: { ar: 'أمانة التنمية المجتمعية والأوقاف التنموية', en: 'Secretariat of Development & Endowments' },
    role: { ar: 'رعاية مبادرات الأسر المنتجة والمشاريع المستدامة', en: 'Productive Families & Sustainable Projects' },
    location: { ar: 'قطاع الاستوائية - ياي وجوبا', en: 'Equatoria Sector' },
    bio: {
      ar: 'لجنة تنموية تركز على تمكين الأسر من خلال الحرف اليدوية والزراعة التعاونية لدعم الاستقرار المعيشي للمجتمع.',
      en: 'Development council empowering families through artisan trades and cooperative livelihood projects.',
    },
    focusArea: { ar: 'الزراعة التعاونية، الأسر المنتجة، والتنمية المستدامة', en: 'Cooperative Livelihoods & Family Support' },
  },
];

export const initialImpactStats = [
  {
    value: '10+',
    label: { ar: 'ولايات مستهدفة في جنوب السودان', en: 'States Targeted in South Sudan' },
    subtext: { ar: 'امتداد جغرافي لمشاريع التعليم والإغاثة', en: 'Geographic outreach across states' },
  },
  {
    value: '100%',
    label: { ar: 'التزام بالشفافية والعمل الإنساني', en: 'Humanitarian Transparency' },
    subtext: { ar: 'حوكمة مؤسسية تحت إشراف هيئة العلماء', en: 'Governed under respected leadership' },
  },
  {
    value: '24/7',
    label: { ar: 'جاهزية قوافل الخير والاستجابة', en: 'Field Preparedness' },
    subtext: { ar: 'شبكة متطوعين ودعاة في الميدان', en: 'Dedicated ground volunteer corps' },
  },
  {
    value: '6',
    label: { ar: 'أجنحة تنموية وإنسانية كبرى', en: 'Major Strategic Wings' },
    subtext: { ar: 'تعليم، تنمية، شباب، كفالة، إغاثة، تأهيل', en: 'Education, relief, youth, and charity' },
  },
];
