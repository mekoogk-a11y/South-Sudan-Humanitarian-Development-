import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  PlatformConfig,
  ProgramItem,
  ProjectItem,
  NewsItem,
  CourseItem,
  PartnerItem,
  VolunteerSubmission,
  ContactSubmission,
  CourseRegistrationSubmission,
  ScholarLeaderItem,
  ImpactStat,
} from '../types';
import {
  initialConfig,
  initialPrograms,
  initialProjects,
  initialNews,
  initialCourses,
  initialPartners,
  initialScholars,
  initialImpactStats,
} from '../data/initialData';

interface DataContextType {
  config: PlatformConfig;
  programs: ProgramItem[];
  projects: ProjectItem[];
  news: NewsItem[];
  courses: CourseItem[];
  partners: PartnerItem[];
  scholars: ScholarLeaderItem[];
  impactStats: ImpactStat[];
  volunteers: VolunteerSubmission[];
  contacts: ContactSubmission[];
  courseRegistrations: CourseRegistrationSubmission[];

  updateConfig: (updater: (prev: PlatformConfig) => PlatformConfig) => void;
  addProject: (project: Omit<ProjectItem, 'id'>) => void;
  updateProject: (id: string, updated: Partial<ProjectItem>) => void;
  deleteProject: (id: string) => void;

  addNews: (newsItem: Omit<NewsItem, 'id'>) => void;
  updateNews: (id: string, updated: Partial<NewsItem>) => void;
  deleteNews: (id: string) => void;

  addCourse: (course: Omit<CourseItem, 'id'>) => void;
  updateCourse: (id: string, updated: Partial<CourseItem>) => void;
  deleteCourse: (id: string) => void;

  addPartner: (partner: Omit<PartnerItem, 'id'>) => void;
  deletePartner: (id: string) => void;

  submitVolunteer: (sub: Omit<VolunteerSubmission, 'id' | 'submittedAt' | 'status'>) => Promise<{ success: boolean; id: string }>;
  submitContact: (sub: Omit<ContactSubmission, 'id' | 'submittedAt'>) => Promise<{ success: boolean; id: string }>;
  submitCourseRegistration: (sub: Omit<CourseRegistrationSubmission, 'id' | 'registeredAt'>) => Promise<{ success: boolean; id: string }>;

  resetToDefaults: () => void;
}

const STORAGE_KEY = 'sshdp_platform_store_v1';

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<PlatformConfig>(() => {
    try {
      const stored = localStorage.getItem(`${STORAGE_KEY}_config`);
      return stored ? JSON.parse(stored) : initialConfig;
    } catch {
      return initialConfig;
    }
  });

  const [programs] = useState<ProgramItem[]>(initialPrograms);

  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    try {
      const stored = localStorage.getItem(`${STORAGE_KEY}_projects`);
      return stored ? JSON.parse(stored) : initialProjects;
    } catch {
      return initialProjects;
    }
  });

  const [news, setNews] = useState<NewsItem[]>(() => {
    try {
      const stored = localStorage.getItem(`${STORAGE_KEY}_news`);
      return stored ? JSON.parse(stored) : initialNews;
    } catch {
      return initialNews;
    }
  });

  const [courses, setCourses] = useState<CourseItem[]>(() => {
    try {
      const stored = localStorage.getItem(`${STORAGE_KEY}_courses`);
      return stored ? JSON.parse(stored) : initialCourses;
    } catch {
      return initialCourses;
    }
  });

  const [partners, setPartners] = useState<PartnerItem[]>(() => {
    try {
      const stored = localStorage.getItem(`${STORAGE_KEY}_partners`);
      return stored ? JSON.parse(stored) : initialPartners;
    } catch {
      return initialPartners;
    }
  });

  const [scholars] = useState<ScholarLeaderItem[]>(initialScholars);
  const [impactStats] = useState<ImpactStat[]>(initialImpactStats);

  const [volunteers, setVolunteers] = useState<VolunteerSubmission[]>(() => {
    try {
      const stored = localStorage.getItem(`${STORAGE_KEY}_volunteers`);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [contacts, setContacts] = useState<ContactSubmission[]>(() => {
    try {
      const stored = localStorage.getItem(`${STORAGE_KEY}_contacts`);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [courseRegistrations, setCourseRegistrations] = useState<CourseRegistrationSubmission[]>(() => {
    try {
      const stored = localStorage.getItem(`${STORAGE_KEY}_course_regs`);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Sync state to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_config`, JSON.stringify(config));
    } catch (e) {
      console.error(e);
    }
  }, [config]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_projects`, JSON.stringify(projects));
    } catch (e) {
      console.error(e);
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_news`, JSON.stringify(news));
    } catch (e) {
      console.error(e);
    }
  }, [news]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_courses`, JSON.stringify(courses));
    } catch (e) {
      console.error(e);
    }
  }, [courses]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_partners`, JSON.stringify(partners));
    } catch (e) {
      console.error(e);
    }
  }, [partners]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_volunteers`, JSON.stringify(volunteers));
    } catch (e) {
      console.error(e);
    }
  }, [volunteers]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_contacts`, JSON.stringify(contacts));
    } catch (e) {
      console.error(e);
    }
  }, [contacts]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_course_regs`, JSON.stringify(courseRegistrations));
    } catch (e) {
      console.error(e);
    }
  }, [courseRegistrations]);

  const updateConfig = (updater: (prev: PlatformConfig) => PlatformConfig) => {
    setConfig(updater);
  };

  const addProject = (project: Omit<ProjectItem, 'id'>) => {
    const newItem: ProjectItem = {
      ...project,
      id: `proj-${Date.now()}`,
    };
    setProjects((prev) => [newItem, ...prev]);
  };

  const updateProject = (id: string, updated: Partial<ProjectItem>) => {
    setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, ...updated } : p)));
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const addNews = (newsItem: Omit<NewsItem, 'id'>) => {
    const newItem: NewsItem = {
      ...newsItem,
      id: `news-${Date.now()}`,
    };
    setNews((prev) => [newItem, ...prev]);
  };

  const updateNews = (id: string, updated: Partial<NewsItem>) => {
    setNews((prev) => prev.map((n) => (n.id === id ? { ...n, ...updated } : n)));
  };

  const deleteNews = (id: string) => {
    setNews((prev) => prev.filter((n) => n.id !== id));
  };

  const addCourse = (course: Omit<CourseItem, 'id'>) => {
    const newItem: CourseItem = {
      ...course,
      id: `crs-${Date.now()}`,
    };
    setCourses((prev) => [newItem, ...prev]);
  };

  const updateCourse = (id: string, updated: Partial<CourseItem>) => {
    setCourses((prev) => prev.map((c) => (c.id === id ? { ...c, ...updated } : c)));
  };

  const deleteCourse = (id: string) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
  };

  const addPartner = (partner: Omit<PartnerItem, 'id'>) => {
    const newItem: PartnerItem = {
      ...partner,
      id: `prt-${Date.now()}`,
    };
    setPartners((prev) => [...prev, newItem]);
  };

  const deletePartner = (id: string) => {
    setPartners((prev) => prev.filter((p) => p.id !== id));
  };

  const submitVolunteer = async (sub: Omit<VolunteerSubmission, 'id' | 'submittedAt' | 'status'>) => {
    await new Promise((r) => setTimeout(r, 600)); // smooth natural feedback
    const id = `VOL-${Date.now().toString().slice(-6)}`;
    const newEntry: VolunteerSubmission = {
      ...sub,
      id,
      submittedAt: new Date().toISOString(),
      status: 'pending',
    };
    setVolunteers((prev) => [newEntry, ...prev]);
    return { success: true, id };
  };

  const submitContact = async (sub: Omit<ContactSubmission, 'id' | 'submittedAt'>) => {
    await new Promise((r) => setTimeout(r, 600));
    const id = `MSG-${Date.now().toString().slice(-6)}`;
    const newEntry: ContactSubmission = {
      ...sub,
      id,
      submittedAt: new Date().toISOString(),
    };
    setContacts((prev) => [newEntry, ...prev]);
    return { success: true, id };
  };

  const submitCourseRegistration = async (sub: Omit<CourseRegistrationSubmission, 'id' | 'registeredAt'>) => {
    await new Promise((r) => setTimeout(r, 600));
    const id = `REG-${Date.now().toString().slice(-6)}`;
    const newEntry: CourseRegistrationSubmission = {
      ...sub,
      id,
      registeredAt: new Date().toISOString(),
    };
    setCourseRegistrations((prev) => [newEntry, ...prev]);
    return { success: true, id };
  };

  const resetToDefaults = () => {
    setConfig(initialConfig);
    setProjects(initialProjects);
    setNews(initialNews);
    setCourses(initialCourses);
    setPartners(initialPartners);
    setVolunteers([]);
    setContacts([]);
    setCourseRegistrations([]);
    localStorage.removeItem(`${STORAGE_KEY}_config`);
    localStorage.removeItem(`${STORAGE_KEY}_projects`);
    localStorage.removeItem(`${STORAGE_KEY}_news`);
    localStorage.removeItem(`${STORAGE_KEY}_courses`);
    localStorage.removeItem(`${STORAGE_KEY}_partners`);
    localStorage.removeItem(`${STORAGE_KEY}_volunteers`);
    localStorage.removeItem(`${STORAGE_KEY}_contacts`);
    localStorage.removeItem(`${STORAGE_KEY}_course_regs`);
  };

  return (
    <DataContext.Provider
      value={{
        config,
        programs,
        projects,
        news,
        courses,
        partners,
        scholars,
        impactStats,
        volunteers,
        contacts,
        courseRegistrations,
        updateConfig,
        addProject,
        updateProject,
        deleteProject,
        addNews,
        updateNews,
        deleteNews,
        addCourse,
        updateCourse,
        deleteCourse,
        addPartner,
        deletePartner,
        submitVolunteer,
        submitContact,
        submitCourseRegistration,
        resetToDefaults,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
