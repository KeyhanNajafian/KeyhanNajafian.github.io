import React from 'react';
import { Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
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

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          For research collaborations and academic inquiries, connect with me on LinkedIn.
        </p>

        <div className="mt-6">
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-linkedin-btn"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0369A1] hover:bg-[#025a8b] text-white text-sm font-semibold shadow-sm transition-all hover:shadow focus:outline-none focus:ring-2 focus:ring-[#0369A1] focus:ring-offset-2"
          >
            <Linkedin className="w-4 h-4" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};
