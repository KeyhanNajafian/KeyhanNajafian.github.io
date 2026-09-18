import React from 'react';
import { ArrowRight, BookOpen, Microscope, Sprout, Database } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const PublicationsCallout: React.FC = () => {
  const figures = [
    { icon: <Microscope className="w-4 h-4 text-[#047857]" />, value: '10', label: 'publications' },
    { icon: <Sprout className="w-4 h-4 text-[#047857]" />, value: '2', label: 'research areas' },
    { icon: <Database className="w-4 h-4 text-[#047857]" />, value: '2', label: 'public datasets' },
  ];

  return (
    <section id="publications" className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-6 bg-[#047857] rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
            Publications
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
          <p className="text-base sm:text-lg text-slate-800 leading-relaxed max-w-3xl">
            Most of my research asks the same question in different forms: how far can a vision
            model be pushed when almost nothing is labeled? The answers have taken me from wheat
            fields in Saskatchewan to brain MRI scans in Montreal.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
            Every paper has its own page with the published abstract, the methods and datasets
            behind it, the reported results and code where available, and a citation ready to copy.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 py-4 border-y border-slate-100">
            {figures.map((item, index) => (
              <div key={index} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div className="leading-tight">
                  <span className="block text-lg font-bold font-mono text-[#0F172A]">
                    {item.value}
                  </span>
                  <span className="block text-xs text-slate-500">{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="/publications/"
              id="publications-callout-link"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0369A1] hover:bg-[#025a8b] text-white text-sm font-semibold shadow-sm transition-all hover:shadow focus:outline-none focus:ring-2 focus:ring-[#0369A1] focus:ring-offset-2"
            >
              <span>Browse all publications</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0369A1] hover:text-[#025a8b] transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>View Google Scholar record</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
