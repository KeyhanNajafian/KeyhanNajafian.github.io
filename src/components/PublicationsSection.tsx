import React, { useState, useMemo } from 'react';
import {
  FileText,
  Code2,
  Database,
  Quote,
  Check,
  ExternalLink,
  Search,
  Filter,
  Layers,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { PUBLICATIONS } from '../data/portfolioData';
import { Publication } from '../types';

export const PublicationsSection: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedBibtexId, setCopiedBibtexId] = useState<string | null>(null);
  const [expandedBibtexId, setExpandedBibtexId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Publications' },
    { id: 'precision-ag', label: 'Precision Agriculture' },
    { id: 'medical-imaging', label: 'Medical Imaging' },
    { id: 'foundation-models', label: 'Foundation Models & Video' },
    { id: 'systems', label: 'Systems & Architecture' },
  ];

  const filteredPublications = useMemo(() => {
    return PUBLICATIONS.filter((pub) => {
      const matchesArea = selectedArea === 'all' || pub.area === selectedArea;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        pub.title.toLowerCase().includes(query) ||
        pub.venue.toLowerCase().includes(query) ||
        pub.authors.some((a) => a.toLowerCase().includes(query)) ||
        pub.year.toString().includes(query);
      return matchesArea && matchesSearch;
    });
  }, [selectedArea, searchQuery]);

  const handleCopyBibtex = (pub: Publication) => {
    navigator.clipboard.writeText(pub.bibtex);
    setCopiedBibtexId(pub.id);
    setTimeout(() => setCopiedBibtexId(null), 2500);
  };

  const toggleBibtex = (id: string) => {
    setExpandedBibtexId(expandedBibtexId === id ? null : id);
  };

  // Helper to format authors and highlight Dr. Keyhan Najafian
  const renderAuthors = (authors: string[]) => {
    return authors.map((author, index) => {
      const isKeyhan =
        author.includes('Najafian') ||
        author.includes('K. Najafian') ||
        author.includes('Keyhan');
      return (
        <span key={index}>
          <span
            className={
              isKeyhan
                ? 'font-bold text-[#0F172A] underline decoration-emerald-500 decoration-2'
                : 'text-slate-600'
            }
          >
            {author}
          </span>
          {index < authors.length - 1 && <span className="text-slate-400">, </span>}
        </span>
      );
    });
  };

  return (
    <section id="publications" className="py-12 sm:py-16 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-6 bg-[#047857] rounded-full" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                Selected Publications
              </h2>
            </div>
            <p className="mt-1.5 text-sm text-slate-600">
              Peer-reviewed works in precision agriculture, medical imaging, and deployment-grade AI.
            </p>
          </div>

          <a
            href="https://scholar.google.ca/citations?hl=en&user=3RI_XdQAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0369A1] hover:text-[#025a8b] transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>View Full Google Scholar Record</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Filter Controls & Search */}
        <div className="bg-white rounded-xl border border-slate-200 p-3 sm:p-4 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedArea(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedArea === cat.id
                    ? 'bg-[#047857] text-white shadow-sm font-semibold'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64 flex-shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0369A1] focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Multi-column Grid on Tablet & Desktop, Single Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredPublications.map((pub) => {
            const isBibtexOpen = expandedBibtexId === pub.id;
            const isCopied = copiedBibtexId === pub.id;

            return (
              <article
                key={pub.id}
                id={`pub-${pub.id}`}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Top metadata row */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/70 text-[#047857] text-[11px] font-mono font-semibold">
                      {pub.venue.includes('ECCV')
                        ? 'ECCV'
                        : pub.venue.includes('ICCV')
                        ? 'ICCV'
                        : pub.venue.includes('CVPR')
                        ? 'CVPR'
                        : pub.venue.includes('Journal of Imaging')
                        ? 'J. Imaging'
                        : pub.venue.includes('Plant Phenomics')
                        ? 'Plant Phenomics'
                        : pub.venue.includes('Neuro-Oncology')
                        ? 'Neuro-Oncology'
                        : pub.venue.includes('EPA')
                        ? 'EPA'
                        : pub.venue.slice(0, 18)}
                    </span>
                    <span className="text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {pub.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] leading-snug group-hover:text-[#0369A1] transition-colors">
                    {pub.title}
                  </h3>

                  {/* Authors */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {renderAuthors(pub.authors)}
                  </p>

                  {/* Venue description */}
                  <p className="mt-1 text-xs text-slate-500 italic font-medium">
                    {pub.venue}
                  </p>

                  {/* Technical badges & metrics */}
                  {pub.metrics && pub.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {pub.metrics.map((metric, mIdx) => (
                        <span
                          key={mIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Actions Row */}
                <div className="mt-5 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3 text-xs font-semibold">
                      {pub.paperUrl && (
                        <a
                          href={pub.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#0369A1] hover:text-[#025a8b] transition-colors"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>Paper / DOI</span>
                        </a>
                      )}

                      {pub.codeUrl && (
                        <a
                          href={pub.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-slate-700 hover:text-[#0F172A] transition-colors"
                        >
                          <Code2 className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}

                      {pub.datasetUrl && (
                        <a
                          href={pub.datasetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#047857] hover:text-emerald-800 transition-colors"
                        >
                          <Database className="w-3.5 h-3.5" />
                          <span>Dataset</span>
                        </a>
                      )}
                    </div>

                    {/* BibTeX Toggle Button */}
                    <button
                      onClick={() => toggleBibtex(pub.id)}
                      className="inline-flex items-center gap-1 text-xs font-mono font-medium text-slate-500 hover:text-slate-800 px-2 py-1 rounded bg-slate-50 hover:bg-slate-100 transition-colors"
                    >
                      <Quote className="w-3 h-3" />
                      <span>{isBibtexOpen ? 'Hide BibTeX' : 'BibTeX'}</span>
                    </button>
                  </div>

                  {/* Expandable BibTeX view with copy button */}
                  {isBibtexOpen && (
                    <div className="mt-3 p-3 rounded-lg bg-slate-900 text-slate-200 font-mono text-[11px] relative">
                      <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-slate-800">
                        <span className="text-[10px] text-slate-400 font-medium">BibTeX Citation</span>
                        <button
                          onClick={() => handleCopyBibtex(pub)}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-700 hover:bg-emerald-600 text-white transition-colors"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-300" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Quote className="w-3 h-3" />
                              <span>Copy BibTeX</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="overflow-x-auto whitespace-pre leading-relaxed text-slate-300 text-[10px]">
                        {pub.bibtex}
                      </pre>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {filteredPublications.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-sm font-medium">
              No publications match the query "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSelectedArea('all');
                setSearchQuery('');
              }}
              className="mt-2 text-xs font-semibold text-[#0369A1] hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
