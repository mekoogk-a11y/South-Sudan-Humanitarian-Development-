import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Heart,
  Globe,
  ExternalLink,
  ShieldCheck,
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
} from 'lucide-react';
import { Logo } from '../common/Logo';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';

interface FooterProps {
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  const { language, resolve, t } = useLanguage();
  const { config } = useData();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Col 1: Platform Brand & Mission (4 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-block p-1">
              <Logo size="md" textColor="text-white" />
            </div>

            <p className="text-sm text-neutral-200 leading-relaxed font-bold max-w-md">
              {resolve(config.slogan)}
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-md">
              {language === 'ar'
                ? 'منصة تنموية وإنسانية بجنوب السودان، بإشراف مجلس الدعاة ورجال الخير، نسعى لتمكين المجتمع بالعلم والإحسان.'
                : 'A developmental and humanitarian platform in South Sudan, guided by respected preachers and philanthropists.'}
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={config.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-neutral-300 transition border border-neutral-800"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={config.contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-neutral-300 transition border border-neutral-800"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={config.contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-neutral-300 transition border border-neutral-800"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={config.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-neutral-300 transition border border-neutral-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-white border-s-4 border-emerald-500 ps-2.5">
              {t('officialPages')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="hover:text-emerald-400 transition"
                >
                  {t('navHome')}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="hover:text-emerald-400 transition"
                >
                  {t('navAbout')}
                </a>
              </li>
              <li>
                <a
                  href="#scholars"
                  onClick={(e) => handleNavClick(e, '#scholars')}
                  className="hover:text-emerald-400 text-amber-400 font-semibold transition"
                >
                  {t('navScholars')}
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  onClick={(e) => handleNavClick(e, '#programs')}
                  className="hover:text-emerald-400 transition"
                >
                  {t('navPrograms')}
                </a>
              </li>
              <li>
                <a
                  href="#relief"
                  onClick={(e) => handleNavClick(e, '#relief')}
                  className="hover:text-emerald-400 transition"
                >
                  {t('navRelief')}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, '#projects')}
                  className="hover:text-emerald-400 transition"
                >
                  {t('navProjects')}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Participation & Direct Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-base font-bold text-white border-s-4 border-amber-500 ps-2.5">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#training"
                  onClick={(e) => handleNavClick(e, '#training')}
                  className="hover:text-amber-400 transition"
                >
                  {t('navTraining')}
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  onClick={(e) => handleNavClick(e, '#news')}
                  className="hover:text-amber-400 transition"
                >
                  {t('navNews')}
                </a>
              </li>
              <li>
                <a
                  href="#volunteer"
                  onClick={(e) => handleNavClick(e, '#volunteer')}
                  className="hover:text-amber-400 transition"
                >
                  {t('navVolunteer')}
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  onClick={(e) => handleNavClick(e, '#partners')}
                  className="hover:text-amber-400 transition"
                >
                  {t('navPartners')}
                </a>
              </li>
              <li>
                <a
                  href="#donate"
                  onClick={(e) => handleNavClick(e, '#donate')}
                  className="hover:text-amber-400 font-bold transition"
                >
                  {t('navDonate')}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="hover:text-amber-400 transition"
                >
                  {t('navContact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Snippet (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-base font-bold text-white border-s-4 border-emerald-500 ps-2.5">
              {t('contactInfoHeading')}
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{resolve(config.contact.address)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span dir="ltr">{config.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{config.contact.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            © 2026 {resolve(config.orgName)} — {t('footerRights')}
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdmin}
              className="text-neutral-500 hover:text-neutral-300 underline transition"
            >
              {t('adminPanel')}
            </button>
            <span>•</span>
            <span>South Sudan Humanitarian Development Platform (SSHDP)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
