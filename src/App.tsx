import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PublicationsSection } from './components/PublicationsSection';
import { EducationAccolades } from './components/EducationAccolades';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { TeachingServiceSection } from './components/TeachingServiceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { LayoutGrid, GraduationCap, Microscope, Mail } from 'lucide-react';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans pb-16 sm:pb-0">
      {/* Top Header */}
      <Header onOpenCv={() => setCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenCv={() => setCvModalOpen(true)} />
        <AboutSection />
        <PublicationsSection />
        <EducationAccolades />
        <ExperienceSection />
        <SkillsSection />
        <TeachingServiceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Academic Curriculum Vitae Modal */}
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />

      {/* Mobile-Friendly Bottom Navigation Bar (matches mobile-first design) */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/90 backdrop-blur-md border-t border-slate-200/90 py-1 px-4 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]"
      >
        <div className="flex justify-around items-center h-12">
          <a
            href="#hero"
            className="flex flex-col items-center justify-center text-slate-600 hover:text-[#047857] text-[10px] font-medium"
          >
            <LayoutGrid className="w-4 h-4 mb-0.5" />
            <span>Overview</span>
          </a>
          <a
            href="#publications"
            className="flex flex-col items-center justify-center text-slate-600 hover:text-[#047857] text-[10px] font-medium"
          >
            <Microscope className="w-4 h-4 mb-0.5" />
            <span>Research</span>
          </a>
          <a
            href="#education"
            className="flex flex-col items-center justify-center text-slate-600 hover:text-[#047857] text-[10px] font-medium"
          >
            <GraduationCap className="w-4 h-4 mb-0.5" />
            <span>Education</span>
          </a>
          <a
            href="#contact"
            className="flex flex-col items-center justify-center text-slate-600 hover:text-[#047857] text-[10px] font-medium"
          >
            <Mail className="w-4 h-4 mb-0.5" />
            <span>Contact</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
