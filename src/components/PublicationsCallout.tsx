import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const PublicationsCallout: React.FC = () => {
  return (
    <section id="publications" className="py-12 sm:py-16 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-6 bg-[#047857] rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
            Publications
          </h2>
        </div>

        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
          Take a look at my published research.
        </p>

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
    </section>
  );
};
