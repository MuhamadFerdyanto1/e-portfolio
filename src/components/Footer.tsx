import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-12 md:py-16 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[var(--border-hairline)]">
          {/* Brand Identity & Closing Quote */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#C8F169] text-[#171717] font-display font-bold text-xs flex items-center justify-center">
                {portfolioData.identity.initials}
              </span>
              <span className="font-display font-bold text-lg">
                {portfolioData.identity.fullName}
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] italic">
              &ldquo;{portfolioData.footer.closingQuote}&rdquo;
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={portfolioData.contact.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link text-xs font-mono-label uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              LinkedIn
            </a>
            <a
              href={portfolioData.contact.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link text-xs font-mono-label uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              GitHub
            </a>
            {portfolioData.contact.socialMedia.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link text-xs font-mono-label uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                {social.platform}
              </a>
            ))}

            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-hairline)] hover:border-[var(--text-primary)] text-xs font-mono-label uppercase cursor-pointer transition-colors"
              aria-label="Kembali ke atas halaman"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[var(--text-secondary)] font-mono-label">
          <span>
            &copy; {currentYear} {portfolioData.identity.fullName}. All rights reserved.
          </span>
          <span>EDITORIAL DIGITAL PORTFOLIO / 2026</span>
        </div>
      </div>
    </footer>
  );
};
