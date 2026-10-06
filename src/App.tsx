import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { DataProvider } from './context/DataContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ScholarsCouncil } from './components/sections/ScholarsCouncil';
import { About } from './components/sections/About';
import { Programs } from './components/sections/Programs';
import { FieldReliefSection } from './components/sections/FieldReliefSection';
import { Projects } from './components/sections/Projects';
import { Training } from './components/sections/Training';
import { News } from './components/sections/News';
import { Volunteer } from './components/sections/Volunteer';
import { Partners } from './components/sections/Partners';
import { Donation } from './components/sections/Donation';
import { Contact } from './components/sections/Contact';
import { AdminModal } from './components/admin/AdminModal';
import { OfflineIndicator } from './components/common/OfflineIndicator';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <LanguageProvider>
      <DataProvider>
        <div className="min-h-screen flex flex-col bg-black text-white font-sans selection:bg-emerald-500 selection:text-black">
          {/* Header with Top Dignified Information Bar */}
          <Header onOpenAdmin={() => setIsAdminOpen(true)} />

          {/* Main Content Area */}
          <main className="flex-1">
            <Hero />
            <ScholarsCouncil />
            <About />
            <Programs />
            <FieldReliefSection />
            <Projects onOpenAdmin={() => setIsAdminOpen(true)} />
            <Training />
            <News />
            <Volunteer />
            <Partners />
            <Donation />
            <Contact />
          </main>

          {/* Footer */}
          <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

          {/* Admin Management Modal */}
          <AdminModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

          {/* Offline Indicator Toast */}
          <OfflineIndicator />
        </div>
      </DataProvider>
    </LanguageProvider>
  );
}
