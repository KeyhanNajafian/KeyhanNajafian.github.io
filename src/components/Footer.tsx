import React from 'react';
import { Github, Linkedin, GraduationCap, Mail, ArrowUp, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SculptedLiquidKNLogo } from './SculptedLiquidKNLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <SculptedLiquidKNLogo className="w-10 h-10" />
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs text-slate-400">
                Postdoctoral Researcher in AI Systems & Deployment
              </p>
              <p className="text-xs text-slate-500">
                University of Calgary · Vision Research Lab
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Scholar"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <GraduationCap className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-700/50 text-emerald-400 hover:bg-emerald-900 flex items-center justify-center transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Dr. Keyhan Najafian. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.labUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors inline-flex items-center gap-1"
            >
              <span>Vision Research Lab (UCalgary)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>·</span>
            <span>Academic Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
