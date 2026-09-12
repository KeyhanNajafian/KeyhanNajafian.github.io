import React, { useState } from 'react';
import {
  Mail,
  Check,
  Copy,
  Send,
  Building2,
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopy = (text: string, type: 'email') => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || 'Academic Collaboration Inquiry'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-1.5 h-6 bg-[#047857] rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
            Contact & Academic Inquiries
          </h2>
        </div>

        <div className="flex justify-center">
          {/* Direct Contact & Office Details */}
          <div className="w-full max-w-xl space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#0F172A] mb-4">
                Direct Contact
              </h3>

              <div className="space-y-4">
                {/* Primary Email */}
                <div className="flex items-start justify-between gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100 text-[#047857] mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-500 font-medium block">
                        Institutional Email
                      </span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-semibold text-[#0369A1] hover:underline"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    title="Copy Email"
                    className="p-2 rounded-lg hover:bg-slate-200 text-slate-500 transition-colors"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-[#047857]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Alt Email */}
                <div className="flex items-start justify-between gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-sky-100 text-[#0369A1] mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-500 font-medium block">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${PERSONAL_INFO.altEmail}`}
                        className="text-sm font-semibold text-slate-800 hover:text-[#0369A1]"
                      >
                        {PERSONAL_INFO.altEmail}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.altEmail, 'email')}
                    title="Copy Alternate Email"
                    className="p-2 rounded-lg hover:bg-slate-200 text-slate-500 transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
