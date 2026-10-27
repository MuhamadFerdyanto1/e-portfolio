import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowDown, Sparkles, Layers, Code2, Cpu, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeLayer, setActiveLayer] = useState<'design' | 'code' | 'system'>('design');

  const headlineWords = portfolioData.identity.headline.split(' ');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const layerDetails = {
    design: {
      badge: '01 / EDITORIAL & UI CRAFT',
      title: 'Human-Centered Visual Systems',
      metric: 'Grid, Typography & Interactive Prototypes',
      codeSnippet: 'grid-template-columns: repeat(12, minmax(0, 1fr));',
    },
    code: {
      badge: '02 / FRONTEND ENGINEERING',
      title: 'Clean, Accessible & Reactive Code',
      metric: 'React + TypeScript + Motion Architecture',
      codeSnippet: '<Experience motion="purposeful" a11y="wcag-aa" />',
    },
    system: {
      badge: '03 / SYSTEM ARCHITECTURE',
      title: 'Structured Data & Scalable Logic',
      metric: 'End-to-End Problem Decomposition',
      codeSnippet: 'export interface PortfolioConfig { ... }',
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden border-b border-[var(--border-hairline)]"
    >
      {/* Subtle architectural background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-editorial-grid opacity-45 [mask-image:radial-gradient(ellipse_at_top_left,black_35%,transparent_80%)]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        {/* Top Metadata Bar */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[var(--border-hairline)]"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-hairline)]">
            <span className="w-2 h-2 rounded-full bg-[#C8F169] ring-4 ring-[#C8F169]/30" />
            <span className="font-mono-label text-xs font-semibold tracking-wider uppercase">
              {portfolioData.identity.labelYear}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-secondary)]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[var(--text-primary)]" />
              {portfolioData.identity.location}
            </span>
            <span className="hidden sm:inline text-[var(--border-strong)]">/</span>
            <span className="font-mono-label text-[11px] uppercase tracking-wider px-2.5 py-1 rounded bg-[#C8F169]/30 text-[var(--text-primary)]">
              {portfolioData.identity.availabilityStatus}
            </span>
          </div>
        </motion.div>

        {/* Main Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 7 Columns: Headline, Owner Identity, & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Staggered Headline Reveal */}
            <h1
              aria-label={portfolioData.identity.headline}
              className="font-display font-bold text-4xl sm:text-6xl xl:text-[4.35rem] leading-[1.04] tracking-tight text-[var(--text-primary)]"
            >
              {headlineWords.map((word, index) => {
                const isHighlight =
                  word.toLowerCase().includes('digital') ||
                  word.toLowerCase().includes('experiences');
                return (
                  <span
                    key={`${word}-${index}`}
                    className="inline-block overflow-hidden mr-[0.26em] pb-1 align-bottom"
                  >
                    <motion.span
                      initial={prefersReducedMotion ? false : { y: '110%', opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      transition={{
                        duration: 0.65,
                        delay: 0.08 + index * 0.07,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`inline-block ${
                        isHighlight
                          ? 'px-2.5 -mx-1 rounded-xl bg-[#C8F169] text-[#171717]'
                          : ''
                      }`}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </h1>

            {/* Owner Identity Card & Short Bio */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-hairline)] shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-[var(--border-hairline)]">
                <div>
                  <span className="font-mono-label text-[11px] uppercase text-[var(--text-secondary)] block">
                    IDENTITAS UTAMA
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] mt-0.5">
                    {portfolioData.identity.fullName}
                  </h2>
                </div>
                <span className="inline-flex items-center self-start sm:self-auto px-3 py-1 rounded-full text-xs font-medium bg-[var(--bg-subtle)] text-[var(--text-primary)]">
                  {portfolioData.identity.professionOrInterest}
                </span>
              </div>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {portfolioData.identity.shortDescription}
              </p>
            </motion.div>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] font-display font-semibold text-sm hover:bg-[#C8F169] hover:text-[#171717] transition-all duration-200 cursor-pointer shadow-sm"
              >
                <span>Explore My Work</span>
                <span className="w-6 h-6 rounded-full bg-[var(--bg-primary)]/15 group-hover:bg-[#171717]/10 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5">
                  <ArrowDownRight className="w-4 h-4" />
                </span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-strong)] font-display font-semibold text-sm hover:border-[var(--text-primary)] hover:bg-[var(--bg-subtle)] transition-all duration-200 cursor-pointer"
              >
                <span>Get in Touch</span>
              </button>
            </motion.div>
          </div>

          {/* Right 5 Columns: Interactive Creative Technologist Visual Composition */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Minimal Floating Decorative Badge */}
            <motion.div
              animate={
                prefersReducedMotion
                  ? {}
                  : { y: [0, -7, 0] }
              }
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:flex items-center gap-2 absolute -top-4 -left-4 z-20 px-3.5 py-2 rounded-xl bg-[#C8F169] text-[#171717] shadow-md border border-[#171717]/15"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-mono-label text-[11px] font-semibold uppercase">
                Interactive Identity
              </span>
            </motion.div>

            {/* Visual Showcase Frame */}
            <div className="relative rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border-hairline)] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
              {/* Top Window Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[var(--border-hairline)]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--text-primary)]/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--text-primary)]/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C8F169]" />
                </div>
                <span className="font-mono-label text-[11px] text-[var(--text-secondary)] uppercase">
                  [FOTO PROFIL / VISUAL KOMPOSISI]
                </span>
              </div>

              {/* Profile Photo or Editorial Abstract Composition */}
              {portfolioData.identity.profilePhotoUrl ? (
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#1E1E20]">
                  <img
                    src={portfolioData.identity.profilePhotoUrl}
                    alt={portfolioData.identity.fullName}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="relative rounded-2xl bg-[var(--bg-subtle)] p-5 sm:p-6 border border-[var(--border-hairline)] overflow-hidden">
                  {/* Abstract Architectural SVG Composition */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <span className="font-mono-label text-[10px] uppercase tracking-widest text-[var(--text-secondary)] block">
                        CREATIVE TECHNOLOGIST MATRIX
                      </span>
                      <p className="font-display font-bold text-lg text-[var(--text-primary)] mt-1">
                        {portfolioData.identity.fullName}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[var(--text-primary)] text-[var(--bg-primary)] font-display font-bold text-base flex items-center justify-center shrink-0">
                      {portfolioData.identity.initials}
                    </div>
                  </div>

                  {/* Interactive Geometric Graphic */}
                  <div className="relative h-44 sm:h-48 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-hairline)] p-4 flex flex-col justify-between overflow-hidden">
                    <svg
                      className="absolute right-0 bottom-0 w-48 h-48 opacity-15 pointer-events-none"
                      viewBox="0 0 200 200"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle cx="140" cy="140" r="80" stroke="currentColor" strokeWidth="2" />
                      <circle cx="140" cy="140" r="52" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                      <line x1="20" y1="140" x2="200" y2="140" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="140" y1="20" x2="140" y2="200" stroke="currentColor" strokeWidth="1.5" />
                    </svg>

                    <div className="flex items-center justify-between z-10">
                      <span className="font-mono-label text-[11px] font-semibold px-2.5 py-1 rounded bg-[#C8F169] text-[#171717]">
                        {layerDetails[activeLayer].badge}
                      </span>
                      <span className="font-mono-label text-[11px] text-[var(--text-secondary)]">
                        2026 EDITION
                      </span>
                    </div>

                    <div className="z-10 my-auto py-2">
                      <h3 className="font-display font-bold text-xl text-[var(--text-primary)]">
                        {layerDetails[activeLayer].title}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] mt-1">
                        {layerDetails[activeLayer].metric}
                      </p>
                    </div>

                    <div className="z-10 px-3 py-2 rounded-lg bg-[var(--bg-subtle)] font-mono-label text-[11px] text-[var(--text-primary)] truncate">
                      {layerDetails[activeLayer].codeSnippet}
                    </div>
                  </div>

                  {/* Interactive Pillar Switcher */}
                  <div className="mt-4 grid grid-cols-3 gap-2" role="group" aria-label="Pilih pilar keahlian">
                    <button
                      type="button"
                      onClick={() => setActiveLayer('design')}
                      className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                        activeLayer === 'design'
                          ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]'
                          : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Design</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveLayer('code')}
                      className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                        activeLayer === 'code'
                          ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]'
                          : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveLayer('system')}
                      className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                        activeLayer === 'system'
                          ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]'
                          : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      <Cpu className="w-3.5 h-3.5" />
                      <span>System</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Caption Footnote */}
              <div className="mt-4 flex items-center justify-between text-[11px] text-[var(--text-secondary)]">
                <span>Klik tab di atas untuk melihat fokus disiplin</span>
                <span className="font-mono-label">FIG. 01 — HERO</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator Footer Bar */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-14 pt-6 border-t border-[var(--border-hairline)] flex items-center justify-between"
        >
          <button
            type="button"
            onClick={() => scrollTo('about')}
            className="group inline-flex items-center gap-3 text-xs font-mono-label uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            <span className="w-7 h-7 rounded-full border border-[var(--border-strong)] flex items-center justify-center group-hover:bg-[#C8F169] group-hover:border-[#171717] group-hover:text-[#171717] transition-colors">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </span>
            <span>Scroll to explore narrative</span>
          </button>

          <div className="hidden sm:flex items-center gap-6 font-mono-label text-[11px] text-[var(--text-secondary)]">
            <span>01 / ABOUT</span>
            <span>02 / WORKS</span>
            <span>03 / SKILLS</span>
            <span>04 / JOURNEY</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
