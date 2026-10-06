import React, { useState } from 'react';
import {
  Newspaper,
  Calendar,
  Share2,
  Copy,
  Check,
  Facebook,
  Twitter,
  ArrowRight,
  ArrowLeft,
  X,
  Tag,
  MessageCircle,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';
import { NewsItem } from '../../types';

export const News: React.FC = () => {
  const { language, resolve, t } = useLanguage();
  const { news } = useData();

  const [activeFilter, setActiveFilter] = useState<'all' | 'announcement' | 'initiative' | 'training'>('all');
  const [readingArticle, setReadingArticle] = useState<NewsItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredNews = activeFilter === 'all'
    ? news
    : news.filter((item) => item.category === activeFilter);

  const handleCopyLink = (item: NewsItem) => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}/#news-${item.id}`;
      navigator.clipboard.writeText(url);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const handleShareWhatsApp = (item: NewsItem) => {
    const text = encodeURIComponent(`${resolve(item.title)} - ${resolve(item.summary)}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleShareFacebook = (item: NewsItem) => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="news" className="py-24 bg-black text-white relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold mb-3 shadow-md">
            <Newspaper className="w-4 h-4 text-emerald-400" />
            <span>{t('newsTitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t('newsSubtitle')}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeFilter === 'all'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800'
            }`}
          >
            {t('filterAll')}
          </button>
          <button
            onClick={() => setActiveFilter('announcement')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeFilter === 'announcement'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800'
            }`}
          >
            {t('filterAnnouncements')}
          </button>
          <button
            onClick={() => setActiveFilter('initiative')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeFilter === 'initiative'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800'
            }`}
          >
            {t('filterInitiatives')}
          </button>
          <button
            onClick={() => setActiveFilter('training')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeFilter === 'training'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800'
            }`}
          >
            {t('filterTraining')}
          </button>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-xl hover:border-emerald-500/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-7">
                {/* Meta details */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-neutral-900 text-emerald-400 border border-neutral-800">
                    <Tag className="w-3 h-3 text-emerald-400" />
                    {resolve(item.categoryLabel)}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-neutral-500">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="text-xl font-bold text-white mb-3 leading-snug hover:text-emerald-300 transition">
                  {resolve(item.title)}
                </h3>

                {/* Summary */}
                <p className="text-sm text-neutral-300 leading-relaxed line-clamp-3">
                  {resolve(item.summary)}
                </p>
              </div>

              {/* Action buttons & Sharing */}
              <div className="p-7 pt-4 border-t border-neutral-900 flex items-center justify-between">
                <button
                  onClick={() => setReadingArticle(item)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300"
                >
                  <span>{t('readMoreArticle')}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>

                {/* Quick Share Icons */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleShareWhatsApp(item)}
                    className="p-1.5 rounded-lg text-neutral-400 hover:text-emerald-400 hover:bg-neutral-900 transition"
                    title="Share on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShareFacebook(item)}
                    className="p-1.5 rounded-lg text-neutral-400 hover:text-blue-400 hover:bg-neutral-900 transition"
                    title="Share on Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleCopyLink(item)}
                    className="p-1.5 rounded-lg text-neutral-400 hover:text-emerald-400 hover:bg-neutral-900 transition"
                    title={copiedId === item.id ? 'Copied' : 'Copy Link'}
                  >
                    {copiedId === item.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Full Article Reader Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-neutral-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-neutral-700 text-white relative">
            
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-neutral-800">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-neutral-800 text-emerald-400 border border-neutral-700">
                    {resolve(readingArticle.categoryLabel)}
                  </span>
                  <span className="text-xs text-neutral-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {readingArticle.date}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white pt-1 leading-snug">
                  {resolve(readingArticle.title)}
                </h3>
              </div>

              <button
                onClick={() => setReadingArticle(null)}
                className="p-1 rounded-full text-neutral-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Article Content */}
            <div className="py-6 space-y-4 text-neutral-200 text-sm sm:text-base leading-relaxed">
              <div className="p-4 rounded-2xl bg-black border border-neutral-800 text-neutral-200 font-medium italic">
                {resolve(readingArticle.summary)}
              </div>

              <p className="whitespace-pre-line text-neutral-300">
                {resolve(readingArticle.content)}
              </p>

              {readingArticle.author && (
                <div className="pt-4 text-xs text-amber-400 font-bold">
                  {language === 'ar' ? 'المصدر:' : 'Source:'} {resolve(readingArticle.author)}
                </div>
              )}
            </div>

            {/* Footer with Share and Close */}
            <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-neutral-400">{t('shareArticle')}</span>
                <button
                  onClick={() => handleShareWhatsApp(readingArticle)}
                  className="px-3 py-1.5 rounded-lg bg-neutral-800 text-emerald-400 text-xs font-bold hover:bg-neutral-700 border border-neutral-700"
                >
                  WhatsApp
                </button>
                <button
                  onClick={() => handleCopyLink(readingArticle)}
                  className="px-3 py-1.5 rounded-lg bg-neutral-800 text-neutral-200 text-xs font-bold hover:bg-neutral-700 border border-neutral-700 flex items-center gap-1"
                >
                  {copiedId === readingArticle.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === readingArticle.id ? t('copiedSuccess') : (language === 'ar' ? 'نسخ الرابط' : 'Copy')}</span>
                </button>
              </div>

              <button
                onClick={() => setReadingArticle(null)}
                className="px-4 py-2 rounded-xl bg-neutral-800 text-neutral-200 text-sm font-medium hover:bg-neutral-700"
              >
                {t('closeModal')}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
