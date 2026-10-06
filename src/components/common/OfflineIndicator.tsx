import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { useLanguage } from '../../context/LanguageContext';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();
  const { language } = useLanguage();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 start-4 z-50 flex items-center gap-2.5 rounded-xl bg-amber-600 px-4 py-2.5 text-xs font-semibold text-white shadow-xl border border-amber-400">
      <WifiOff className="w-4 h-4 animate-bounce" />
      <span>
        {language === 'ar'
          ? 'أنت تعمل حالياً بدون اتصال إنترنت — يتم تصفح النسخة المحفوظة في التطبيق.'
          : 'Offline Mode — Browsing locally cached version of the platform.'}
      </span>
    </div>
  );
};
