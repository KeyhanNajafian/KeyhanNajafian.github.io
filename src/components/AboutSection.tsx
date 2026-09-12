import React from 'react';
import { Sprout, Activity, Cpu, Layers, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO, CORE_PILLARS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wheat':
        return <Sprout className="w-5 h-5 text-[#047857]" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#0369A1]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-700" />;
      case 'Layers':
      default:
        return <Layers className="w-5 h-5 text-[#0369A1]" />;
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with emerald accent line */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-6 bg-[#047857] rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
            About Me
          </h2>
          <span className="ml-auto text-xs font-mono font-semibold uppercase tracking-wider text-[#047857] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            Vision & Systems Research
          </span>
        </div>

        {/* Primary Narrative Card */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
          <div className="prose prose-slate max-w-none">
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
              {PERSONAL_INFO.aboutMeText}
            </p>
          </div>

          {/* Farm-to-Edge AI Context Callout */}
          <div className="mt-6 p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-100/70 text-[#047857] mt-0.5 sm:mt-0 flex-shrink-0">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F172A]">
                  Applied Philosophy: Theory Grounded in In-Field Deployment
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Bridging pure machine learning theory with robust edge-hardware execution, high-bandwidth streaming, and reliable real-world inference.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#0369A1] font-semibold flex-shrink-0">
              <span className="px-2.5 py-1 rounded bg-sky-50 border border-sky-200">8+ Years Experience</span>
            </div>
          </div>
        </div>

        {/* Core Pillars / Strategic Research Axes */}
        <div className="mt-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 font-mono mb-4">
            Core Research Pillars
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CORE_PILLARS.map((pillar, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:border-slate-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
                      {getIcon(pillar.icon)}
                    </div>
                    <h4 className="text-base font-bold text-[#0F172A]">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
