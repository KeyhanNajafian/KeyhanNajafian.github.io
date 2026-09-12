import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  GraduationCap,
  Mail,
  Check,
  Copy,
  FileText,
  MapPin,
  Building2,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="pt-24 sm:pt-28 pb-12 sm:pb-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
          {/* Subtle decorative top bar in emerald green */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#047857] via-[#0369A1] to-[#047857]" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
            {/* Left Content */}
            <div className="flex-1 min-w-0">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-[#047857] text-xs font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-[#047857] animate-pulse" />
                <span>Active Postdoctoral Fellow</span>
                <span className="text-emerald-300">·</span>
                <span className="text-slate-600 font-medium">Vision Research Lab</span>
              </div>

              {/* Title & Name */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                {PERSONAL_INFO.name}
              </h1>

              {/* Subtitle */}
              <p className="mt-3 text-lg sm:text-xl text-[#0369A1] font-semibold flex items-center gap-2 flex-wrap">
                <span>{PERSONAL_INFO.title}</span>
              </p>

              <div className="flex items-center gap-2 text-sm text-slate-600 mt-1 flex-wrap">
                <span className="inline-flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <a
                    href={PERSONAL_INFO.labUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0369A1] underline decoration-slate-300 underline-offset-2 transition-colors"
                  >
                    University of Calgary
                  </a>
                </span>
                <span className="text-slate-300">·</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {PERSONAL_INFO.location}
                </span>
              </div>

              {/* Bio summary paragraph */}
              <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl">
                {PERSONAL_INFO.bioSubtitle} Specializes in architecting robust automation backends for precision agriculture, medical imaging, and real-time signal processing.
              </p>

              {/* Research Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {PERSONAL_INFO.researchFocusTags.slice(0, 4).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200/70 text-[#047857] text-xs font-mono font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Call To Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
                {/* Google Scholar CTA */}
                <a
                  href={PERSONAL_INFO.scholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-scholar-btn"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0369A1] hover:bg-[#025a8b] text-white text-sm font-semibold shadow-sm transition-all hover:shadow focus:outline-none focus:ring-2 focus:ring-[#0369A1] focus:ring-offset-2"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Google Scholar</span>
                </a>

                {/* GitHub CTA */}
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-github-btn"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold shadow-sm transition-all hover:shadow focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                {/* LinkedIn CTA */}
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-linkedin-btn"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0077b5] hover:bg-[#006097] text-white text-sm font-semibold shadow-sm transition-all hover:shadow focus:outline-none focus:ring-2 focus:ring-[#0077b5] focus:ring-offset-2"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                {/* Email / Copy CTA */}
                <div className="flex items-center">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    id="hero-email-btn"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-l-lg border border-slate-300 hover:border-slate-400 bg-slate-50 hover:bg-slate-100 text-[#0F172A] text-sm font-medium transition-colors"
                  >
                    <Mail className="w-4 h-4 text-slate-500" />
                    <span>Email</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    id="hero-copy-email-btn"
                    className="inline-flex items-center px-2.5 py-2.5 rounded-r-lg border-y border-r border-slate-300 hover:border-slate-400 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-[#047857]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* CV Button */}
                <button
                  onClick={onOpenCv}
                  id="hero-cv-btn"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-emerald-300 bg-emerald-50/70 hover:bg-emerald-100/70 text-[#047857] text-sm font-semibold transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Curriculum Vitae</span>
                </button>
              </div>
            </div>

            {/* Right: Portrait Photo with verification badge */}
            <div className="flex-shrink-0 self-center md:self-start">
              <div className="relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2 border-slate-200/90 shadow-md bg-slate-100 relative group">
                  {!imgError ? (
                    <img
                      src={PERSONAL_INFO.avatarUrl}
                      alt="Dr. Keyhan Najafian"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-white font-mono">
                      <span className="text-3xl font-bold text-emerald-400">KN</span>
                      <span className="text-xs text-slate-400 mt-1">UCalgary</span>
                    </div>
                  )}
                </div>

                {/* Verified researcher badge */}
                <div
                  title="Verified Ph.D. Researcher & Fellow"
                  className="absolute -bottom-2 -right-2 bg-[#047857] text-white p-1.5 rounded-xl shadow-md border-2 border-white flex items-center justify-center"
                >
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
