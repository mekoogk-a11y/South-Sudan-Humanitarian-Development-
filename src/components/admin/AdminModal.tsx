import React, { useState } from 'react';
import {
  X,
  Settings,
  Newspaper,
  Briefcase,
  GraduationCap,
  Users,
  Inbox,
  Landmark,
  Save,
  Trash2,
  Plus,
  RefreshCw,
  Check,
  Eye,
  Database,
  Building,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const { language, resolve } = useLanguage();
  const {
    config,
    updateConfig,
    projects,
    addProject,
    deleteProject,
    news,
    addNews,
    deleteNews,
    courses,
    addCourse,
    deleteCourse,
    partners,
    addPartner,
    deletePartner,
    volunteers,
    contacts,
    courseRegistrations,
    resetToDefaults,
  } = useData();

  const [activeTab, setActiveTab] = useState<
    'general' | 'news' | 'projects' | 'courses' | 'partners' | 'donations' | 'inbox' | 'database'
  >('general');

  // Form states for creating new items
  const [newProject, setNewProject] = useState({
    titleAr: '',
    titleEn: '',
    descAr: '',
    descEn: '',
    locationAr: 'جوبا - جنوب السودان',
    locationEn: 'Juba, South Sudan',
    date: new Date().toISOString().slice(0, 10),
    status: 'ongoing' as const,
  });

  const [newNews, setNewNews] = useState({
    titleAr: '',
    titleEn: '',
    summaryAr: '',
    summaryEn: '',
    contentAr: '',
    contentEn: '',
    category: 'activity' as const,
    date: new Date().toISOString().slice(0, 10),
  });

  const [newCourse, setNewCourse] = useState({
    titleAr: '',
    titleEn: '',
    categoryAr: 'التعليم والتدريب',
    categoryEn: 'Education & Training',
    descAr: '',
    descEn: '',
    date: '2026-11-20',
    durationAr: 'أسبوعان',
    durationEn: '2 Weeks',
    locationAr: 'جوبا',
    locationEn: 'Juba',
    seats: '25 مقعداً',
  });

  const [newPartner, setNewPartner] = useState({
    nameAr: '',
    nameEn: '',
    categoryAr: 'منظمة تنموية شريكة',
    categoryEn: 'Development Partner',
  });

  const [savedFeedback, setSavedFeedback] = useState(false);

  if (!isOpen) return null;

  const triggerSaved = () => {
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2500);
  };

  const handleAddProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.titleAr.trim()) return;
    addProject({
      title: { ar: newProject.titleAr, en: newProject.titleEn || newProject.titleAr },
      description: { ar: newProject.descAr, en: newProject.descEn || newProject.descAr },
      location: { ar: newProject.locationAr, en: newProject.locationEn },
      date: newProject.date,
      status: newProject.status,
      statusLabel: {
        ar: newProject.status === 'ongoing' ? 'مشروع جاري' : 'قيد الإعداد',
        en: newProject.status === 'ongoing' ? 'Ongoing' : 'Upcoming',
      },
    });
    setNewProject({
      titleAr: '',
      titleEn: '',
      descAr: '',
      descEn: '',
      locationAr: 'جوبا - جنوب السودان',
      locationEn: 'Juba, South Sudan',
      date: new Date().toISOString().slice(0, 10),
      status: 'ongoing',
    });
    triggerSaved();
  };

  const handleAddNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNews.titleAr.trim()) return;
    addNews({
      title: { ar: newNews.titleAr, en: newNews.titleEn || newNews.titleAr },
      summary: { ar: newNews.summaryAr, en: newNews.summaryEn || newNews.summaryAr },
      content: { ar: newNews.contentAr, en: newNews.contentEn || newNews.contentAr },
      category: newNews.category,
      categoryLabel: {
        ar: newNews.category === 'activity' ? 'نشاط ميداني' : 'إعلان',
        en: newNews.category === 'activity' ? 'Activity' : 'Announcement',
      },
      date: newNews.date,
    });
    setNewNews({
      titleAr: '',
      titleEn: '',
      summaryAr: '',
      summaryEn: '',
      contentAr: '',
      contentEn: '',
      category: 'activity',
      date: new Date().toISOString().slice(0, 10),
    });
    triggerSaved();
  };

  const handleAddCourseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCourse.titleAr.trim()) return;
    addCourse({
      title: { ar: newCourse.titleAr, en: newCourse.titleEn || newCourse.titleAr },
      category: { ar: newCourse.categoryAr, en: newCourse.categoryEn },
      description: { ar: newCourse.descAr, en: newCourse.descEn || newCourse.descAr },
      date: newCourse.date,
      duration: { ar: newCourse.durationAr, en: newCourse.durationEn },
      location: { ar: newCourse.locationAr, en: newCourse.locationEn },
      seats: newCourse.seats,
      status: 'open',
      statusLabel: { ar: 'التسجيل متاح', en: 'Open' },
    });
    setNewCourse({
      titleAr: '',
      titleEn: '',
      categoryAr: 'التعليم والتدريب',
      categoryEn: 'Education & Training',
      descAr: '',
      descEn: '',
      date: '2026-11-20',
      durationAr: 'أسبوعان',
      durationEn: '2 Weeks',
      locationAr: 'جوبا',
      locationEn: 'Juba',
      seats: '25 مقعداً',
    });
    triggerSaved();
  };

  const handleAddPartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPartner.nameAr.trim()) return;
    addPartner({
      name: { ar: newPartner.nameAr, en: newPartner.nameEn || newPartner.nameAr },
      category: { ar: newPartner.categoryAr, en: newPartner.categoryEn },
    });
    setNewPartner({
      nameAr: '',
      nameEn: '',
      categoryAr: 'منظمة تنموية شريكة',
      categoryEn: 'Development Partner',
    });
    triggerSaved();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-5xl w-full h-[90vh] flex flex-col shadow-2xl border border-emerald-100 overflow-hidden">
        
        {/* Top Bar */}
        <div className="px-6 py-4 bg-emerald-950 text-white flex items-center justify-between border-b border-emerald-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">
                لوحة إدارة محتوى المنصة (Content Management)
              </h3>
              <span className="text-xs text-emerald-300">
                منصة التنمية الإنسانية بجنوب السودان • SSHDP Control Center
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {savedFeedback && (
              <span className="text-xs bg-emerald-600 text-white px-3 py-1 rounded-full flex items-center gap-1 font-bold animate-pulse">
                <Check className="w-3.5 h-3.5" />
                تم الحفظ بنجاح
              </span>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-emerald-300 hover:text-white hover:bg-emerald-800 transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-slate-100 px-6 py-2 border-b border-slate-200 flex items-center gap-1 overflow-x-auto text-xs sm:text-sm font-semibold text-slate-600">
          <button
            onClick={() => setActiveTab('general')}
            className={`px-3 py-2 rounded-xl whitespace-nowrap transition ${
              activeTab === 'general' ? 'bg-white text-emerald-900 shadow-xs' : 'hover:bg-slate-200'
            }`}
          >
            البيانات العامة والشعار
          </button>
          <button
            onClick={() => setActiveTab('news')}
            className={`px-3 py-2 rounded-xl whitespace-nowrap transition ${
              activeTab === 'news' ? 'bg-white text-emerald-900 shadow-xs' : 'hover:bg-slate-200'
            }`}
          >
            الأخبار والأنشطة ({news.length})
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-3 py-2 rounded-xl whitespace-nowrap transition ${
              activeTab === 'projects' ? 'bg-white text-emerald-900 shadow-xs' : 'hover:bg-slate-200'
            }`}
          >
            المشروعات الميدانية ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-3 py-2 rounded-xl whitespace-nowrap transition ${
              activeTab === 'courses' ? 'bg-white text-emerald-900 shadow-xs' : 'hover:bg-slate-200'
            }`}
          >
            الدورات التدريبية ({courses.length})
          </button>
          <button
            onClick={() => setActiveTab('partners')}
            className={`px-3 py-2 rounded-xl whitespace-nowrap transition ${
              activeTab === 'partners' ? 'bg-white text-emerald-900 shadow-xs' : 'hover:bg-slate-200'
            }`}
          >
            الشركاء المعتمدون ({partners.length})
          </button>
          <button
            onClick={() => setActiveTab('donations')}
            className={`px-3 py-2 rounded-xl whitespace-nowrap transition ${
              activeTab === 'donations' ? 'bg-white text-emerald-900 shadow-xs' : 'hover:bg-slate-200'
            }`}
          >
            معلومات الدعم والتبرع
          </button>
          <button
            onClick={() => setActiveTab('inbox')}
            className={`px-3 py-2 rounded-xl whitespace-nowrap transition ${
              activeTab === 'inbox' ? 'bg-white text-emerald-900 shadow-xs' : 'hover:bg-slate-200'
            }`}
          >
            صندوق الوارد ({volunteers.length + contacts.length + courseRegistrations.length})
          </button>
          <button
            onClick={() => setActiveTab('database')}
            className={`px-3 py-2 rounded-xl whitespace-nowrap transition ${
              activeTab === 'database' ? 'bg-white text-emerald-900 shadow-xs' : 'hover:bg-slate-200'
            }`}
          >
            الربط مع قاعدة البيانات
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* TAB 1: General Info */}
          {activeTab === 'general' && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h4 className="text-lg font-bold text-emerald-950 mb-1">بيانات الهوية والرسالة</h4>
                <p className="text-xs text-slate-500">يمكنك تعديل الشعار والنصوص الرئيسية المعروضة في الواجهة.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">اسم المنصة (عربي)</label>
                  <input
                    type="text"
                    value={config.orgName.ar}
                    onChange={(e) =>
                      updateConfig((prev) => ({
                        ...prev,
                        orgName: { ...prev.orgName, ar: e.target.value },
                      }))
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Platform Name (English)</label>
                  <input
                    type="text"
                    value={config.orgName.en}
                    onChange={(e) =>
                      updateConfig((prev) => ({
                        ...prev,
                        orgName: { ...prev.orgName, en: e.target.value },
                      }))
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">الشعار اللفظي (عربي)</label>
                  <input
                    type="text"
                    value={config.slogan.ar}
                    onChange={(e) =>
                      updateConfig((prev) => ({
                        ...prev,
                        slogan: { ...prev.slogan, ar: e.target.value },
                      }))
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Slogan (English)</label>
                  <input
                    type="text"
                    value={config.slogan.en}
                    onChange={(e) =>
                      updateConfig((prev) => ({
                        ...prev,
                        slogan: { ...prev.slogan, en: e.target.value },
                      }))
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">المقدمة في الصفحة الرئيسية</label>
                <textarea
                  rows={2}
                  value={config.heroIntro.ar}
                  onChange={(e) =>
                    updateConfig((prev) => ({
                      ...prev,
                      heroIntro: { ...prev.heroIntro, ar: e.target.value },
                    }))
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">الرؤية</label>
                  <textarea
                    rows={2}
                    value={config.vision.ar}
                    onChange={(e) =>
                      updateConfig((prev) => ({
                        ...prev,
                        vision: { ...prev.vision, ar: e.target.value },
                      }))
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">الرسالة</label>
                  <textarea
                    rows={2}
                    value={config.mission.ar}
                    onChange={(e) =>
                      updateConfig((prev) => ({
                        ...prev,
                        mission: { ...prev.mission, ar: e.target.value },
                      }))
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                  />
                </div>
              </div>

              {/* Contact Channels */}
              <div className="pt-4 border-t border-slate-200">
                <h5 className="font-bold text-sm text-slate-800 mb-3">قنوات الاتصال المباشرة</h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="block text-slate-600 mb-1">الهاتف</label>
                    <input
                      type="text"
                      value={config.contact.phone}
                      onChange={(e) =>
                        updateConfig((prev) => ({
                          ...prev,
                          contact: { ...prev.contact, phone: e.target.value },
                        }))
                      }
                      className="w-full p-2 rounded-lg border border-slate-200"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 mb-1">واتساب</label>
                    <input
                      type="text"
                      value={config.contact.whatsapp}
                      onChange={(e) =>
                        updateConfig((prev) => ({
                          ...prev,
                          contact: { ...prev.contact, whatsapp: e.target.value },
                        }))
                      }
                      className="w-full p-2 rounded-lg border border-slate-200"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 mb-1">البريد الإلكتروني</label>
                    <input
                      type="text"
                      value={config.contact.email}
                      onChange={(e) =>
                        updateConfig((prev) => ({
                          ...prev,
                          contact: { ...prev.contact, email: e.target.value },
                        }))
                      }
                      className="w-full p-2 rounded-lg border border-slate-200"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={resetToDefaults}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>استعادة البيانات الافتراضية الأصلية</span>
                </button>
                <button
                  onClick={triggerSaved}
                  className="px-6 py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-sm flex items-center gap-2 hover:bg-emerald-800"
                >
                  <Save className="w-4 h-4" />
                  <span>حفظ التعديلات</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: News */}
          {activeTab === 'news' && (
            <div className="space-y-6">
              {/* Add News Form */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-base text-emerald-950 mb-3 flex items-center gap-2">
                  <Plus className="w-4 h-4 text-emerald-700" />
                  <span>إضافة خبر أو نشاط جديد</span>
                </h4>
                <form onSubmit={handleAddNewsSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="عنوان الخبر (بالعربية)"
                      value={newNews.titleAr}
                      onChange={(e) => setNewNews({ ...newNews, titleAr: e.target.value })}
                      className="p-2.5 rounded-xl border border-slate-200 text-sm bg-white"
                    />
                    <input
                      type="text"
                      placeholder="News Title (English)"
                      value={newNews.titleEn}
                      onChange={(e) => setNewNews({ ...newNews, titleEn: e.target.value })}
                      className="p-2.5 rounded-xl border border-slate-200 text-sm bg-white"
                    />
                  </div>
                  <textarea
                    rows={2}
                    required
                    placeholder="ملخص قصير يظهر في البطاقة..."
                    value={newNews.summaryAr}
                    onChange={(e) => setNewNews({ ...newNews, summaryAr: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-sm bg-white"
                  />
                  <textarea
                    rows={3}
                    placeholder="نص الخبر الكامل..."
                    value={newNews.contentAr}
                    onChange={(e) => setNewNews({ ...newNews, contentAr: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-sm bg-white"
                  />
                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800"
                    >
                      نشر الخبر في الموقع
                    </button>
                  </div>
                </form>
              </div>

              {/* Existing News List */}
              <div className="space-y-3">
                <h5 className="font-bold text-sm text-slate-800">الأخبار الحالية ({news.length})</h5>
                {news.map((n) => (
                  <div
                    key={n.id}
                    className="p-4 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-4"
                  >
                    <div>
                      <span className="text-xs text-slate-400 block">{n.date}</span>
                      <h6 className="font-bold text-emerald-950 text-sm">{resolve(n.title)}</h6>
                      <p className="text-xs text-slate-600 line-clamp-1">{resolve(n.summary)}</p>
                    </div>
                    <button
                      onClick={() => deleteNews(n.id)}
                      className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition"
                      title="حذف الخبر"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Projects */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              {/* Add Project Form */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-base text-emerald-950 mb-3 flex items-center gap-2">
                  <Plus className="w-4 h-4 text-emerald-700" />
                  <span>إضافة مشروع جديد للمنصة</span>
                </h4>
                <form onSubmit={handleAddProjectSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="اسم المشروع (بالعربية)"
                      value={newProject.titleAr}
                      onChange={(e) => setNewProject({ ...newProject, titleAr: e.target.value })}
                      className="p-2.5 rounded-xl border border-slate-200 text-sm bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Project Title (English)"
                      value={newProject.titleEn}
                      onChange={(e) => setNewProject({ ...newProject, titleEn: e.target.value })}
                      className="p-2.5 rounded-xl border border-slate-200 text-sm bg-white"
                    />
                  </div>
                  <textarea
                    rows={3}
                    required
                    placeholder="وصف وأهداف المشروع الميداني..."
                    value={newProject.descAr}
                    onChange={(e) => setNewProject({ ...newProject, descAr: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-sm bg-white"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="الموقع (مثال: جوبا - ولاية الاستوائية الوسطى)"
                      value={newProject.locationAr}
                      onChange={(e) => setNewProject({ ...newProject, locationAr: e.target.value })}
                      className="p-2.5 rounded-xl border border-slate-200 text-sm bg-white"
                    />
                    <select
                      value={newProject.status}
                      onChange={(e) => setNewProject({ ...newProject, status: e.target.value as any })}
                      className="p-2.5 rounded-xl border border-slate-200 text-sm bg-white"
                    >
                      <option value="ongoing">مشروع جاري التنفيذ</option>
                      <option value="upcoming">مشروع قادم / قيد الإعداد</option>
                      <option value="completed">مشروع مكتمل</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800"
                    >
                      إضافة المشروع
                    </button>
                  </div>
                </form>
              </div>

              {/* Existing Projects List */}
              <div>
                <h5 className="font-bold text-sm text-slate-800 mb-3">
                  المشروعات المضافة حالياً ({projects.length})
                </h5>
                {projects.length === 0 ? (
                  <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-xs text-slate-500">
                    لا توجد مشروعات مضافة حالياً. الموقع يلتزم تلقائياً بعرض عبارة:
                    <br />
                    <strong>"سيتم إضافة مشروعات المنصة قريباً."</strong>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {projects.map((p) => (
                      <div
                        key={p.id}
                        className="p-4 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-4"
                      >
                        <div>
                          <span className="text-xs text-emerald-700 font-bold">{p.date} • {resolve(p.location)}</span>
                          <h6 className="font-bold text-emerald-950 text-sm">{resolve(p.title)}</h6>
                          <p className="text-xs text-slate-600 line-clamp-1">{resolve(p.description)}</p>
                        </div>
                        <button
                          onClick={() => deleteProject(p.id)}
                          className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: Courses */}
          {activeTab === 'courses' && (
            <div className="space-y-6">
              {/* Add Course Form */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-base text-emerald-950 mb-3 flex items-center gap-2">
                  <Plus className="w-4 h-4 text-emerald-700" />
                  <span>إضافة دورة تدريبية جديدة</span>
                </h4>
                <form onSubmit={handleAddCourseSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="عنوان الدورة التدريبية"
                      value={newCourse.titleAr}
                      onChange={(e) => setNewCourse({ ...newCourse, titleAr: e.target.value })}
                      className="p-2.5 rounded-xl border border-slate-200 text-sm bg-white"
                    />
                    <input
                      type="text"
                      placeholder="تاريخ الانطلاق (مثال: 2026-11-20)"
                      value={newCourse.date}
                      onChange={(e) => setNewCourse({ ...newCourse, date: e.target.value })}
                      className="p-2.5 rounded-xl border border-slate-200 text-sm bg-white"
                    />
                  </div>
                  <textarea
                    rows={2}
                    required
                    placeholder="وصف ومحاور الدورة التدريبية..."
                    value={newCourse.descAr}
                    onChange={(e) => setNewCourse({ ...newCourse, descAr: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-sm bg-white"
                  />
                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800"
                    >
                      إضافة الدورة
                    </button>
                  </div>
                </form>
              </div>

              {/* Existing Courses List */}
              <div className="space-y-3">
                <h5 className="font-bold text-sm text-slate-800">الدورات المتاحة ({courses.length})</h5>
                {courses.map((c) => (
                  <div
                    key={c.id}
                    className="p-4 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-4"
                  >
                    <div>
                      <span className="text-xs text-amber-600 font-bold">{c.date} • {c.seats}</span>
                      <h6 className="font-bold text-emerald-950 text-sm">{resolve(c.title)}</h6>
                    </div>
                    <button
                      onClick={() => deleteCourse(c.id)}
                      className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: Partners */}
          {activeTab === 'partners' && (
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-base text-emerald-950 mb-2">إضافة شريك رسمي معتمد</h4>
                <p className="text-xs text-slate-500 mb-4">
                  تلتزم المنصة بعدم اختلاق أي شركاء أو شعارات غير معتمدة. يتم إضافة الشركاء هنا بعد توقيع الاتفاقيات الرسمية.
                </p>
                <form onSubmit={handleAddPartnerSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="اسم الجهة الشريكة (عربي)"
                      value={newPartner.nameAr}
                      onChange={(e) => setNewPartner({ ...newPartner, nameAr: e.target.value })}
                      className="p-2.5 rounded-xl border border-slate-200 text-sm bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Partner Name (English)"
                      value={newPartner.nameEn}
                      onChange={(e) => setNewPartner({ ...newPartner, nameEn: e.target.value })}
                      className="p-2.5 rounded-xl border border-slate-200 text-sm bg-white"
                    />
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800"
                    >
                      إضافة الشريك
                    </button>
                  </div>
                </form>
              </div>

              <div>
                <h5 className="font-bold text-sm text-slate-800 mb-2">
                  الشركاء المعتمدون حالياً ({partners.length})
                </h5>
                {partners.length === 0 ? (
                  <div className="p-6 text-center bg-slate-50 rounded-xl text-xs text-slate-500">
                    لا يوجد شركاء مسجلون حالياً. يعرض الموقع:
                    <br />
                    <strong>"سيتم الإعلان عن الشركاء والداعمين المعتمدين تباعاً."</strong>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {partners.map((prt) => (
                      <div
                        key={prt.id}
                        className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between"
                      >
                        <span className="font-bold text-sm text-emerald-950">{resolve(prt.name)}</span>
                        <button
                          onClick={() => deletePartner(prt.id)}
                          className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 6: Donations Setup */}
          {activeTab === 'donations' && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h4 className="text-lg font-bold text-emerald-950 mb-1">بيانات الدعم والتبرع</h4>
                <p className="text-xs text-slate-500">
                  توجيهات الشفافية: لا يتم إظهار أرقام حسابات إلا بعد اعتمادها رسمياً.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    نص التحويل المصرفي (Bank Transfer Note)
                  </label>
                  <textarea
                    rows={2}
                    value={config.donationInfo.bankTransferPlaceholder.ar}
                    onChange={(e) =>
                      updateConfig((prev) => ({
                        ...prev,
                        donationInfo: {
                          ...prev.donationInfo,
                          bankTransferPlaceholder: { ...prev.donationInfo.bankTransferPlaceholder, ar: e.target.value },
                        },
                      }))
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    نص الدفع عبر الهاتف المحمول (Mobile Money Note)
                  </label>
                  <textarea
                    rows={2}
                    value={config.donationInfo.mobilePaymentPlaceholder.ar}
                    onChange={(e) =>
                      updateConfig((prev) => ({
                        ...prev,
                        donationInfo: {
                          ...prev.donationInfo,
                          mobilePaymentPlaceholder: { ...prev.donationInfo.mobilePaymentPlaceholder, ar: e.target.value },
                        },
                      }))
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    نص الدعم الدولي والشراكات المؤسسية
                  </label>
                  <textarea
                    rows={2}
                    value={config.donationInfo.internationalDonationPlaceholder.ar}
                    onChange={(e) =>
                      updateConfig((prev) => ({
                        ...prev,
                        donationInfo: {
                          ...prev.donationInfo,
                          internationalDonationPlaceholder: { ...prev.donationInfo.internationalDonationPlaceholder, ar: e.target.value },
                        },
                      }))
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={triggerSaved}
                  className="px-6 py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-sm flex items-center gap-2 hover:bg-emerald-800"
                >
                  <Save className="w-4 h-4" />
                  <span>حفظ التعديلات</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 7: Inbox (Submissions) */}
          {activeTab === 'inbox' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-emerald-950 mb-1">
                  صندوق الطلبات والمراسلات الواردة
                </h4>
                <p className="text-xs text-slate-500">
                  جميع الاستمارات التي تم تعبئتها من قبل الزوار والمتطوعين في الموقع.
                </p>
              </div>

              {/* Volunteers section */}
              <div className="space-y-3">
                <h5 className="font-bold text-sm text-emerald-900 border-s-4 border-emerald-700 ps-2">
                  طلبات التطوع الواردة ({volunteers.length})
                </h5>
                {volunteers.length === 0 ? (
                  <p className="text-xs text-slate-400">لا توجد طلبات تطوع بعد.</p>
                ) : (
                  <div className="space-y-3">
                    {volunteers.map((vol) => (
                      <div key={vol.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-emerald-950 text-sm">{vol.fullName}</span>
                          <span className="font-mono text-slate-400">{vol.id} • {new Date(vol.submittedAt).toLocaleDateString()}</span>
                        </div>
                        <p className="text-slate-700"><strong>الهاتف:</strong> {vol.phone} | <strong>البريد:</strong> {vol.email} | <strong>المدينة:</strong> {vol.city}, {vol.country}</p>
                        <p className="text-slate-700"><strong>مجال الاهتمام:</strong> {vol.areaOfInterest}</p>
                        <p className="text-slate-700"><strong>المهارات:</strong> {vol.skills}</p>
                        {vol.message && <p className="text-slate-600 bg-white p-2 rounded-lg border border-slate-100">"{vol.message}"</p>}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Course Registrations section */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <h5 className="font-bold text-sm text-emerald-900 border-s-4 border-amber-600 ps-2">
                  تسجيلات الدورات التدريبية ({courseRegistrations.length})
                </h5>
                {courseRegistrations.length === 0 ? (
                  <p className="text-xs text-slate-400">لا توجد تسجيلات بعد.</p>
                ) : (
                  <div className="space-y-2">
                    {courseRegistrations.map((reg) => (
                      <div key={reg.id} className="p-3 rounded-xl border border-slate-200 bg-slate-50 text-xs">
                        <span className="font-bold text-slate-900">{reg.fullName}</span> - سجل في: <strong>{reg.courseTitle}</strong> ({reg.phone} | {reg.email})
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Messages section */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <h5 className="font-bold text-sm text-emerald-900 border-s-4 border-teal-600 ps-2">
                  رسائل اتصل بنا ({contacts.length})
                </h5>
                {contacts.length === 0 ? (
                  <p className="text-xs text-slate-400">لا توجد رسائل واردة بعد.</p>
                ) : (
                  <div className="space-y-2">
                    {contacts.map((msg) => (
                      <div key={msg.id} className="p-3 rounded-xl border border-slate-200 bg-slate-50 text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-900">{msg.fullName} ({msg.email})</span>
                          <span className="font-mono text-slate-400">{msg.id}</span>
                        </div>
                        <p className="font-bold text-emerald-900">{msg.subject}</p>
                        <p className="text-slate-600">{msg.message}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 8: Database & Future Extensions */}
          {activeTab === 'database' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h4 className="text-lg font-bold text-emerald-950 mb-1 flex items-center gap-2">
                  <Database className="w-5 h-5 text-emerald-700" />
                  <span>معمارية وقاعدة بيانات المنصة</span>
                </h4>
                <p className="text-xs text-slate-500">
                  تم تصميم وتطوير التطبيق بمعمارية مهيأة بالكامل للربط المستقبلي مع Firebase Firestore أو Supabase PostgreSQL دون كشف أي مفاتيح سرية في الواجهة.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-2 leading-relaxed">
                <strong className="block text-sm">حالة التخزين الحالية:</strong>
                <p>
                  يستخدم النظام حالياً طبقة <strong>Client Persistent Cache Store</strong> عبر <code>LocalStorage</code> مدمجة ومستقلة، تتيح لمدير المنصة تجربة كاملة لإضافة وحذف الأخبار والمشروعات والدورات التدريبية فورياً دون الحاجة لسيرفر خارجي.
                </p>
                <p>
                  عند الرغبة في ربط Firebase لاحقاً: يمكن تفعيل أداة التوزيع ومزامنة الحقول عبر <code>useData</code> هوك بكل سلاسة.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
