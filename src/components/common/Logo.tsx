import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  textColor = 'text-white',
  className = '',
}) => {
  const { language } = useLanguage();

  const dimensions = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  }[size];

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Official Circular Emblem */}
      <div className={`relative shrink-0 ${dimensions} rounded-full transition-transform hover:scale-105`}>
        <img
          src="/logo.svg"
          alt="شعار منصة التنمية الإنسانية بجنوب السودان"
          className="w-full h-full object-contain filter drop-shadow-sm"
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col text-start">
          <span className={`font-extrabold tracking-tight leading-tight ${
            size === 'sm' ? 'text-sm' : size === 'lg' || size === 'xl' ? 'text-xl' : 'text-base sm:text-lg'
          } ${textColor}`}>
            {language === 'ar' ? 'منصة التنمية الإنسانية' : 'Humanitarian Dev Platform'}
          </span>
          <span className="text-[11px] sm:text-xs font-semibold text-emerald-400 tracking-wide leading-tight">
            {language === 'ar' ? 'بجنوب السودان' : 'South Sudan (SSHDP)'}
          </span>
        </div>
      )}
    </div>
  );
};
