import React from 'react';
import { BookOpen, ExternalLink, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const PublicationsCallout: React.FC = () => {
  return (
    <section id="publications" className="py-12 sm:py-16 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
          <div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-6 bg-[#047857] rounded-full" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                Publications
              </h2>
            </div>
            <p className="mt-1.5 text-sm text-slate-600 max-w-2xl">
              Research in label-efficient computer vision for precision agriculture and machine learning for
              precision health, with a dedicated page for each paper including its abstract and BibTeX.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
            <a
              href="/publications/"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0369A1] hover:bg-[#025a8b] text-white text-sm font-semibold shadow-sm transition-all hover:shadow focus:outline-none focus:ring-2 focus:ring-[#0369A1] focus:ring-offset-2"
            >
              <Layers className="w-4 h-4" />
              <span>Browse all publications</span>
            </a>
            <a
              href={PERSONAL_INFO.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0369A1] hover:text-[#025a8b] transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Google Scholar profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
