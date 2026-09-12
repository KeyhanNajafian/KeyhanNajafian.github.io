import React from 'react';
import { Terminal, Cpu, Database, Wrench, Brain, Check } from 'lucide-react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Programming')) return <Terminal className="w-4 h-4 text-[#0369A1]" />;
    if (category.includes('Deep Learning')) return <Brain className="w-4 h-4 text-[#047857]" />;
    if (category.includes('High Performance')) return <Cpu className="w-4 h-4 text-[#047857]" />;
    if (category.includes('Developer')) return <Wrench className="w-4 h-4 text-slate-600" />;
    return <Database className="w-4 h-4 text-[#0369A1]" />;
  };

  return (
    <section id="skills" className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#047857] rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
              Technical & Methodological Competencies
            </h2>
          </div>
          <span className="text-xs font-mono font-semibold text-[#047857] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            Stack & Tooling
          </span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TECHNICAL_SKILLS.map((group, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-all duration-200 ${
                group.category.includes('Core AI') ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-slate-100">
                <div className="p-1.5 rounded-lg bg-slate-100">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="text-sm font-bold text-[#0F172A]">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => {
                  const isHighlight =
                    skill.includes('Expert') ||
                    skill.includes('PyTorch') ||
                    skill.includes('CUDA') ||
                    skill.includes('Diffusion');

                  return (
                    <span
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                        isHighlight
                          ? 'bg-emerald-50 border border-emerald-300 text-[#047857] font-semibold'
                          : 'bg-slate-50 border border-slate-200 text-slate-700 font-medium'
                      }`}
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-400" />
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
