import React from 'react';
import { Briefcase, Building, Calendar, MapPin, CheckCircle, ChevronRight, Terminal } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#047857] rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
              Research & Professional Experience
            </h2>
          </div>
          <span className="text-xs font-mono font-semibold text-[#0369A1] bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
            Systems & Applied AI
          </span>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, idx) => {
            const isCurrent = exp.period.includes('Present') || exp.period.includes('Now');

            return (
              <div
                key={exp.id}
                className={`bg-white rounded-2xl border p-5 sm:p-7 shadow-sm transition-all hover:shadow-md ${
                  isCurrent
                    ? 'border-emerald-200/90 ring-1 ring-emerald-500/20'
                    : 'border-slate-200/80'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
                        {exp.role}
                      </h3>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-[#047857]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#047857] animate-pulse" />
                          Current Role
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-semibold text-[#0369A1] mt-0.5">
                      {exp.labOrGroup ? `${exp.labOrGroup} · ` : ''}
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex sm:flex-col sm:items-end text-xs text-slate-500 font-mono gap-3 sm:gap-1 flex-shrink-0">
                    <span className="inline-flex items-center gap-1 font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-500">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 mt-4 leading-relaxed">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#047857] mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-slate-100">
                    <Terminal className="w-3.5 h-3.5 text-slate-400 mr-1" />
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-50 border border-slate-200 text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
