import React, { useState } from 'react';
import {
  X,
  Printer,
  Download,
  FileText,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Award,
  Briefcase,
  BookOpen,
  Terminal,
  ExternalLink,
  Check,
  Copy
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, AWARDS, EXPERIENCES, PUBLICATIONS, TECHNICAL_SKILLS, TEACHING_AND_SERVICE } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'publications' | 'education'>('all');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `${PERSONAL_INFO.name}\n${PERSONAL_INFO.title}\n${PERSONAL_INFO.affiliation}\nEmail: ${PERSONAL_INFO.email}\nScholar: ${PERSONAL_INFO.scholarUrl}\nGitHub: ${PERSONAL_INFO.githubUrl}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
    >
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 max-h-[92vh] flex flex-col overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0369A1] text-white flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0F172A]">
                Curriculum Vitae — {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Postdoctoral Researcher · University of Calgary
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print CV"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopySummary}
              title="Copy Summary"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#047857]" />
                  <span className="hidden sm:inline">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy Link</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              aria-label="Close CV Modal"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Printable Academic Resume View */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 print:p-0">
          {/* Header Block */}
          <div className="border-b border-slate-200 pb-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-semibold text-[#0369A1] mt-0.5">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                Vision Research Lab, Department of Computer Science, University of Calgary
              </p>
            </div>

            <div className="text-xs text-slate-600 font-mono space-y-1 text-center sm:text-right">
              <div>{PERSONAL_INFO.email}</div>
              <div className="text-[#0369A1]">Calgary, AB, Canada</div>
            </div>
          </div>

          {/* Statement */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1 mb-2">
              Research Profile & Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {PERSONAL_INFO.aboutMeText}
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1 mb-3">
              Education
            </h4>
            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-bold text-[#0F172A]">
                    <span>{edu.degree} — {edu.institution}</span>
                    <span className="text-slate-500 font-mono font-normal text-xs">{edu.period}</span>
                  </div>
                  <div className="text-slate-600 flex items-center gap-3 mt-0.5">
                    <span>GPA: <strong className="text-[#047857]">{edu.gpa}</strong></span>
                    {edu.ranking && <span>· {edu.ranking}</span>}
                  </div>
                  <p className="text-slate-600 italic text-xs mt-1">
                    {edu.thesisOrDissertationType}: "{edu.thesisOrDissertationTitle}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1 mb-3">
              Selected Honors & Awards
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {AWARDS.map((award) => (
                <div key={award.id} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-start">
                    <strong className="text-[#0F172A]">{award.title}</strong>
                    <span className="text-[10px] font-mono text-slate-500">{award.date}</span>
                  </div>
                  <p className="text-[#0369A1] text-[11px] font-medium">{award.issuer}</p>
                  <p className="text-slate-600 text-[11px] mt-0.5">{award.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Research & Professional Experience */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1 mb-3">
              Professional Experience
            </h4>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-bold text-[#0F172A]">
                    <span>{exp.role}</span>
                    <span className="text-slate-500 font-mono text-xs">{exp.period}</span>
                  </div>
                  <div className="text-[#0369A1] font-semibold text-xs mb-1">
                    {exp.labOrGroup ? `${exp.labOrGroup} · ` : ''}{exp.organization} ({exp.location})
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-xs">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1 mb-3">
              Selected Publications
            </h4>
            <ol className="list-decimal list-inside space-y-2.5 text-xs text-slate-800">
              {PUBLICATIONS.slice(0, 7).map((pub) => (
                <li key={pub.id} className="leading-relaxed">
                  <span className="font-semibold">{pub.authors.join(', ')}</span>. ({pub.year}). <em>{pub.title}</em>. {pub.venue}.
                </li>
              ))}
            </ol>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1 mb-2">
              Technical & Scientific Skills
            </h4>
            <div className="space-y-1.5 text-xs text-slate-700">
              {TECHNICAL_SKILLS.map((skill, idx) => (
                <div key={idx}>
                  <strong className="text-[#0F172A]">{skill.category}: </strong>
                  <span>{skill.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Dr. Keyhan Najafian · Academic Curriculum Vitae</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#0F172A] text-white font-medium hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
