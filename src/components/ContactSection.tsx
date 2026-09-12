import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  Send,
  Building2,
  ExternalLink,
  Users,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO, REFERENCES } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
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
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#047857] rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
              Contact & Academic Inquiries
            </h2>
          </div>
          <span className="text-xs font-mono font-semibold text-[#047857] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            Open for Collaboration
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact & Office Details */}
          <div className="lg:col-span-6 space-y-6">
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

                {/* Phone */}
                <div className="flex items-start justify-between gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-slate-200 text-slate-700 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-500 font-medium block">
                        Telephone
                      </span>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-sm font-semibold text-slate-800 hover:text-[#0369A1]"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    title="Copy Phone"
                    className="p-2 rounded-lg hover:bg-slate-200 text-slate-500 transition-colors"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-[#047857]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Office Location */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100 text-[#047857] mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs text-slate-600">
                    <span className="font-mono font-medium text-slate-500 block mb-0.5">
                      Lab Location
                    </span>
                    <strong className="text-slate-800 block text-sm">
                      Vision Research Lab
                    </strong>
                    <span>Department of Computer Science</span>
                    <br />
                    <span>University of Calgary</span>
                    <br />
                    <span>Calgary, Alberta, Canada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Academic References & Collaborators */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-[#047857]" />
                <h3 className="text-lg font-bold text-[#0F172A]">
                  Academic References
                </h3>
              </div>

              <div className="space-y-3.5">
                {REFERENCES.map((ref, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A]">
                          {ref.name}
                        </h4>
                        <span className="text-xs text-slate-500 block font-medium">
                          {ref.role}
                        </span>
                        <span className="text-xs text-slate-600 block mt-0.5">
                          {ref.affiliation}
                        </span>
                      </div>
                      <a
                        href={`mailto:${ref.email}`}
                        title={`Email ${ref.name}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#0369A1] hover:underline bg-sky-50 px-2 py-1 rounded"
                      >
                        <Mail className="w-3 h-3" />
                        <span>Email</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/70">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#047857] font-mono mb-1">
                  Prospective Collaborations
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Interested in joint research on generative models for sparse phenotyping, automated clinical image diagnosis, or edge deployment architectures? Feel free to reach out directly via institutional email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
