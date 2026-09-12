import React from 'react';
import {
  GraduationCap,
  Award,
  Medal,
  Calendar,
  MapPin,
  CheckCircle2,
  FileCheck2,
  Star,
  Sparkles
} from 'lucide-react';
import { EDUCATION, AWARDS } from '../data/portfolioData';

export const EducationAccolades: React.FC = () => {
  return (
    <section id="education" className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#047857] rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
              Education & Accolades
            </h2>
          </div>
          <span className="text-xs font-mono font-semibold text-[#047857] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            Merit & Honors
          </span>
        </div>

        {/* Responsive Grid: Single column on mobile, 2-column layout on tablet/desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left / Primary Column: Degrees (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-[#0369A1]" />
              <h3 className="text-lg font-bold text-[#0F172A]">
                Degrees & Formal Training
              </h3>
            </div>

            {EDUCATION.map((edu) => (
              <div
                key={edu.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200 relative overflow-hidden"
              >
                {/* GPA Badge */}
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base sm:text-lg font-bold text-[#0F172A]">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-semibold text-[#0369A1]">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-1 flex-wrap">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {edu.period}
                      </span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  {/* Academic Merit Score Box */}
                  <div className="flex flex-col items-end flex-shrink-0 bg-emerald-50/80 border border-emerald-200/80 px-3 py-1.5 rounded-xl text-right">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold">
                      Academic Merit
                    </span>
                    <span className="text-xl sm:text-2xl font-extrabold font-mono text-[#047857] leading-none mt-0.5">
                      {edu.gpa.split(' ')[0]}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-700 font-medium">
                      GPA {edu.gpa.includes('out of') ? '/ 100' : ''}
                    </span>
                  </div>
                </div>

                {/* Cohort Ranking if available */}
                {edu.ranking && (
                  <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200/70 text-amber-800 text-xs font-semibold">
                    <Medal className="w-3.5 h-3.5 text-amber-600" />
                    <span>{edu.ranking}</span>
                  </div>
                )}

                {/* Dissertation / Thesis Box */}
                <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-slate-500 block mb-1">
                    {edu.thesisOrDissertationType}: Focus Area
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed italic">
                    "{edu.thesisOrDissertationTitle}"
                  </p>
                </div>

                {/* Highlights */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="mt-3.5 space-y-1.5 text-xs text-slate-600">
                    {edu.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#047857] mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Key Awards & Accolades (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-[#047857]" />
              <h3 className="text-lg font-bold text-[#0F172A]">
                Key Awards & Fellowships
              </h3>
            </div>

            {/* Featured Hero Accolades */}
            <div className="bg-gradient-to-br from-emerald-50 via-white to-sky-50 rounded-2xl border-2 border-emerald-200/80 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#047857] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#047857] bg-emerald-100/80 px-2 py-0.5 rounded">
                      Doctoral Honor
                    </span>
                    <span className="text-xs text-slate-500 font-mono">May 2026</span>
                  </div>
                  <h4 className="text-base font-bold text-[#0F172A] mt-1 leading-snug">
                    PhD Research Excellence Award
                  </h4>
                  <p className="text-xs text-[#047857] font-semibold">
                    Dept. of Computer Science, University of Saskatchewan
                  </p>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Awarded for outstanding research performance, prolific tier-1 computer vision publications, and scientific impact at the Ph.D. level.
                  </p>
                </div>
              </div>
            </div>

            {/* Borealis AI Fellowship Highlight */}
            <div className="bg-gradient-to-br from-sky-50 via-white to-slate-50 rounded-2xl border-2 border-sky-200/80 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0369A1] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#0369A1] bg-sky-100/80 px-2 py-0.5 rounded">
                      National Fellowship
                    </span>
                    <span className="text-xs text-slate-500 font-mono">August 2023</span>
                  </div>
                  <h4 className="text-base font-bold text-[#0F172A] mt-1 leading-snug">
                    Borealis AI Fellowship Award
                  </h4>
                  <p className="text-xs text-[#0369A1] font-semibold">
                    Borealis AI
                  </p>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Recognized as one of only 10 exceptional graduate researchers in Artificial Intelligence nationwide across Canadian universities.
                  </p>
                </div>
              </div>
            </div>

            {/* Other Noteworthy Accolades List */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm space-y-3.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                Additional Recognition & Prizes
              </h4>

              {AWARDS.slice(1).filter(a => a.id !== 'award-4').map((award) => (
                <div
                  key={award.id}
                  className="pb-3 border-b border-slate-100 last:border-0 last:pb-0"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                      {award.title}
                    </h5>
                    <span className="text-[10px] font-mono font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded flex-shrink-0">
                      {award.date}
                    </span>
                  </div>
                  <p className="text-[11px] font-medium text-[#0369A1]">
                    {award.issuer}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
