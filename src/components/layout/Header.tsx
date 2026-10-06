import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Globe,
  Settings,
  Heart,
  Phone,
  Clock,
  Sparkles,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { Logo } from '../common/Logo';
import { PWAInstallButton } from '../common/PWAInstallButton';
import { useLanguage } from '../../context/LanguageContext';

interface HeaderProps {
  onOpenAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAdmin }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('navHome') },
    { href: '#about', label: t('navAbout') },
    { href: '#scholars', label: t('navScholars') },
    { href: '#programs', label: t('navPrograms') },
    { href: '#relief', label: t('navRelief') },
    { href: '#projects', label: t('navProjects') },
    { href: '#training', label: t('navTraining') },
    { href: '#news', label: t('navNews') },
    { href: '#volunteer', label: t('navVolunteer') },
    { href: '#donate', label: t('navDonate') },
    { href: '#contact', label: t('navContact') },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 transition-all duration-300">
      
      {/* Upper Dignified Information Bar (Deep Black & Gold Accents) */}
      <div className="hidden lg:block bg-neutral-950 border-b border-neutral-800/80 text-xs text-neutral-300 py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              {language === 'ar'
                ? 'تحت إشراف مجلس الدعاة ورجال الخير بجنوب السودان'
                : 'Under the Guidance of Preachers & Philanthropic Council of South Sudan'}
            </span>
            <span className="text-neutral-600">|</span>
            <span className="flex items-center gap-1 text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              {language === 'ar' ? 'المقر العام: جوبا - جنوب السودان' : 'Headquarters: Juba, South Sudan'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-neutral-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {language === 'ar' ? 'البوابة الرسمية المعتمدة 2026' : 'Official Portal 2026'}
            </span>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-300 text-[11px] font-semibold">
              {language === 'ar' ? 'أمانة المنصة - جوبا' : 'Platform Secretariat - Juba'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-neutral-800 py-2.5'
            : 'bg-black/90 backdrop-blur-md border-b border-neutral-900 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo & Platform Name */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center"
            >
              <Logo size={isScrolled ? 'sm' : 'md'} textColor="text-white" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden 2xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-neutral-200 hover:text-emerald-300 hover:bg-neutral-900 transition duration-150"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* For Medium-Large screens (compact nav) */}
            <nav className="hidden lg:flex 2xl:hidden items-center gap-1">
              {navLinks.slice(0, 6).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-2 py-1.5 rounded-lg text-xs font-bold text-neutral-200 hover:text-emerald-300 hover:bg-neutral-900 transition"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#donate"
                onClick={(e) => handleNavClick(e, '#donate')}
                className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-amber-400 hover:bg-neutral-900 transition"
              >
                {t('navDonate')}
              </a>
            </nav>

            {/* Action Tools & Switchers */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* PWA Install */}
              <PWAInstallButton variant="nav" />

              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-100 hover:bg-neutral-800 hover:border-emerald-500 text-xs font-bold transition"
                title={language === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
              >
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === 'ar' ? 'English' : 'العربية'}</span>
              </button>

              {/* Admin CMS Trigger */}
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
                title={t('adminPanel')}
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu & Language Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="px-2.5 py-1.5 rounded-xl border border-neutral-700 bg-neutral-900 text-xs font-bold text-neutral-100"
              >
                {language === 'ar' ? 'EN' : 'عربي'}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-white hover:bg-neutral-800"
                aria-label="القائمة"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Pure Dark) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950 border-b border-neutral-800 shadow-2xl px-5 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1 max-h-[60vh] overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-xl text-sm font-bold text-neutral-100 hover:bg-neutral-900 hover:text-emerald-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-neutral-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-900 text-neutral-200 text-xs font-bold border border-neutral-800"
            >
              <Settings className="w-4 h-4" />
              <span>{t('adminPanel')}</span>
            </button>

            <div className="pt-1">
              <PWAInstallButton variant="nav" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
