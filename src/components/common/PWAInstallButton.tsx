import React, { useState } from 'react';
import { Download, Smartphone, X } from 'lucide-react';
import { usePWAInstall } from '../../hooks/usePWAInstall';
import { useLanguage } from '../../context/LanguageContext';

export const PWAInstallButton: React.FC<{ variant?: 'nav' | 'hero' | 'floating' }> = ({ variant = 'nav' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const { language } = useLanguage();

  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    if (variant === 'hero') {
      return (
        <button
          onClick={install}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold shadow-md transition-all active:scale-95 text-sm"
          title={language === 'ar' ? 'تثبيت تطبيق المنصة' : 'Install Platform App'}
        >
          <Smartphone className="w-5 h-5" />
          <span>{language === 'ar' ? 'تثبيت التطبيق على جهازك' : 'Install App'}</span>
        </button>
      );
    }

    return (
      <button
        onClick={install}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-sm transition active:scale-95"
        title={language === 'ar' ? 'تثبيت التطبيق على جهازك' : 'Install App'}
      >
        <Download className="w-3.5 h-3.5 text-amber-300" />
        <span>{language === 'ar' ? 'تثبيت التطبيق' : 'Install App'}</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-200 text-xs font-medium hover:bg-neutral-800 transition"
        >
          <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
          <span>{language === 'ar' ? 'تثبيت على آيفون' : 'Install on iOS'}</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
            <div className="w-full max-w-sm rounded-3xl bg-neutral-900 p-6 shadow-2xl text-white border border-neutral-700">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <h3 className="text-base font-bold text-emerald-400">
                  {language === 'ar' ? 'تثبيت التطبيق على آيفون / آيباد' : 'Install on iPhone / iPad'}
                </h3>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 rounded-full text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                {language === 'ar' ? (
                  <>
                    1. اضغط على زر <strong>المشاركة (Share)</strong> في أسفل شاشة سفاري.<br />
                    2. مرر للأسفل واضغط على <strong>إضافة إلى الشاشة الرئيسية (Add to Home Screen)</strong>.<br />
                    3. ستظهر أيقونة المنصة كتطبيق مثبت وسريع.
                  </>
                ) : (
                  <>
                    1. Tap the <strong>Share</strong> button in Safari toolbar.<br />
                    2. Scroll down and tap <strong>Add to Home Screen</strong>.<br />
                    3. The platform icon will appear on your device.
                  </>
                )}
              </p>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition"
              >
                {language === 'ar' ? 'حسناً، فهمت' : 'Got it'}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
