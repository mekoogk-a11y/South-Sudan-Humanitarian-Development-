export type Language = 'ar' | 'en';

export interface LocalizedString {
  ar: string;
  en: string;
}

export interface ProgramItem {
  id: string;
  title: LocalizedString;
  shortDesc: LocalizedString;
  fullDesc: LocalizedString;
  icon: string;
  targetGroup: LocalizedString;
  goals: LocalizedString[];
  badgeColor?: string;
}

export interface ProjectItem {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  location: LocalizedString;
  date: string;
  image?: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  statusLabel: LocalizedString;
}

export interface NewsItem {
  id: string;
  title: LocalizedString;
  date: string;
  category: 'activity' | 'announcement' | 'training' | 'initiative';
  categoryLabel: LocalizedString;
  summary: LocalizedString;
  content: LocalizedString;
  image?: string;
  author?: LocalizedString;
}

export interface CourseItem {
  id: string;
  title: LocalizedString;
  category: LocalizedString;
  description: LocalizedString;
  date: string;
  duration: LocalizedString;
  location: LocalizedString;
  seats: string;
  status: 'open' | 'closed' | 'soon';
  statusLabel: LocalizedString;
  instructor?: LocalizedString;
}

export interface PartnerItem {
  id: string;
  name: LocalizedString;
  category: LocalizedString;
  logoUrl?: string;
  website?: string;
}

export interface VolunteerSubmission {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  areaOfInterest: string;
  skills: string;
  message: string;
  submittedAt: string;
  status: 'pending' | 'reviewed';
}

export interface ContactSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export interface CourseRegistrationSubmission {
  id: string;
  courseId: string;
  courseTitle: string;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  notes?: string;
  registeredAt: string;
}

export interface PlatformConfig {
  orgName: LocalizedString;
  slogan: LocalizedString;
  heroIntro: LocalizedString;
  aboutIntro: LocalizedString;
  vision: LocalizedString;
  mission: LocalizedString;
  values: {
    id: string;
    title: LocalizedString;
    description: LocalizedString;
  }[];
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    address: LocalizedString;
    facebook: string;
    youtube: string;
    twitter: string;
    linkedin: string;
  };
  donationInfo: {
    bankTransferPlaceholder: LocalizedString;
    mobilePaymentPlaceholder: LocalizedString;
    internationalDonationPlaceholder: LocalizedString;
    contactNotice: LocalizedString;
  };
}

export interface ScholarLeaderItem {
  id: string;
  name: LocalizedString;
  role: LocalizedString;
  location: LocalizedString;
  bio: LocalizedString;
  focusArea: LocalizedString;
}

export interface ImpactStat {
  value: string;
  label: LocalizedString;
  subtext: LocalizedString;
}
