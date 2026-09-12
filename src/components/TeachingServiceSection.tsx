import React from 'react';
import { BookOpen, Users, Globe2, CheckCircle2, Award } from 'lucide-react';
import { TEACHING_AND_SERVICE } from '../data/portfolioData';

export const TeachingServiceSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#047857] rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
              Teaching, Mentorship & Leadership
            </h2>
          </div>
          <span className="text-xs font-mono font-semibold text-[#0369A1] bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
            Academic Community
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Teaching Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-[#0369A1]">
                <BookOpen className="w-5 h-5" />
                <h3 className="text-base font-bold text-[#0F172A]">
                  Course Instruction & TA
                </h3>
              </div>
              <div className="space-y-4">
                {TEACHING_AND_SERVICE.teaching.map((t, idx) => (
                  <div key={idx} className="text-xs space-y-1 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                    <span className="font-bold text-[#0F172A] block text-sm">
                      {t.course}
                    </span>
                    <span className="text-[#0369A1] font-medium block">
                      {t.role} · {t.organization}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 block">
                      {t.period}
                    </span>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      {t.details[0]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mentorship Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-[#047857]">
                <Users className="w-5 h-5" />
                <h3 className="text-base font-bold text-[#0F172A]">
                  Research Mentorship
                </h3>
              </div>
              <div className="space-y-4">
                {TEACHING_AND_SERVICE.mentorship.map((m, idx) => (
                  <div key={idx} className="text-xs space-y-1 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                    <span className="font-bold text-[#0F172A] block text-sm">
                      {m.target}
                    </span>
                    <span className="text-[#047857] font-medium block">
                      {m.organization}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 block">
                      {m.period}
                    </span>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Leadership & Review Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-[#0F172A]">
                <Globe2 className="w-5 h-5" />
                <h3 className="text-base font-bold text-[#0F172A]">
                  Service & Peer Review
                </h3>
              </div>
              <div className="space-y-4">
                {TEACHING_AND_SERVICE.service.map((s, idx) => (
                  <div key={idx} className="text-xs space-y-1 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                    <span className="font-bold text-[#0F172A] block text-sm">
                      {s.role}
                    </span>
                    <span className="text-slate-700 font-medium block">
                      {s.organization}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 block">
                      {s.period}
                    </span>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
