import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ExternalLink, GraduationCap, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GeometricKNLogo } from './GeometricKNLogo';

interface HeaderProps {
  onOpenCv: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCv }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'publications', 'education', 'experience', 'skills', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'publications', label: 'Publications' },
    { id: 'education', label: 'Education & Honors' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F8FAFC]/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-[#F8FAFC]/75 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0369A1] rounded-lg p-1"
          id="brand-logo-link"
        >
          <GeometricKNLogo className="w-10 h-10 transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="text-base font-bold text-[#0F172A] tracking-tight group-hover:text-[#0369A1] transition-colors leading-snug">
              Dr. Keyhan Najafian
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Postdoc · AI Systems & Deployment
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  isActive
                    ? 'text-[#047857] bg-emerald-50/80 font-semibold'
                    : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-100/70'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={PERSONAL_INFO.scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Google Scholar Profile"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-600 hover:text-[#0369A1] hover:bg-slate-100 transition-colors"
            id="nav-scholar-link"
          >
            <GraduationCap className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-600 hover:text-[#0F172A] hover:bg-slate-100 transition-colors"
            id="nav-github-link"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-600 hover:text-[#0369A1] hover:bg-slate-100 transition-colors"
            id="nav-linkedin-link"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenCv}
            id="header-cv-button"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0369A1] hover:bg-[#025a8b] text-white text-xs font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#0369A1] focus:ring-offset-2"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenCv}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#0369A1] text-white text-xs font-semibold"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#F8FAFC] border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-[#047857] hover:bg-emerald-50/60"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-around gap-2 text-slate-600">
            <a
              href={PERSONAL_INFO.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#0369A1] py-2 px-3 rounded-md bg-sky-50"
            >
              <GraduationCap className="w-4 h-4" /> Scholar
            </a>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#0F172A] py-2 px-3 rounded-md bg-slate-100"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#0369A1] py-2 px-3 rounded-md bg-sky-50"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
