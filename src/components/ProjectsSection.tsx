import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Code, BookOpen, Palette } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { ProjectCategory, ProjectItem } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const categories: ProjectCategory[] = [
  'All',
  'UI/UX Design',
  'Web Development',
  'Academic Projects',
  'Creative Design',
  'Interactive Media',
];

const ProjectVisualMockup: React.FC<{ project: ProjectItem }> = ({ project }) => {
  switch (project.visualType) {
    case 'dashboard':
      return (
        <div className="w-full h-full p-5 sm:p-6 flex flex-col justify-between bg-[#141413] text-[#F7F6F2] relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C8F169]" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            </div>
            <span className="font-mono-label text-[10px] text-white/60 uppercase">
              ANALYTICS WORKSPACE UI
            </span>
          </div>
          <div className="grid grid-cols-12 gap-3 my-auto py-4">
            <div className="col-span-5 rounded-xl bg-white/5 border border-white/10 p-3 flex flex-col justify-between">
              <span className="font-mono-label text-[10px] text-[#C8F169]">DESIGN TOKENS</span>
              <div className="mt-3 space-y-1.5">
                <div className="h-2 w-3/4 rounded bg-white/30" />
                <div className="h-2 w-1/2 rounded bg-white/15" />
              </div>
              <div className="mt-4 pt-2 border-t border-white/10 flex items-baseline justify-between">
                <span className="font-display font-bold text-lg text-[#C8F169]">40+</span>
                <span className="text-[10px] text-white/50">Variants</span>
              </div>
            </div>
            <div className="col-span-7 rounded-xl bg-white/5 border border-white/10 p-3 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-mono-label text-[10px] text-white/70">HIERARCHY GRID</span>
                <span className="px-1.5 py-0.5 rounded bg-[#C8F169] text-[#171717] font-mono-label text-[9px] font-bold">
                  WCAG AA
                </span>
              </div>
              <div className="flex items-end gap-1.5 h-16 mt-3">
                <div className="flex-1 bg-white/20 rounded-t h-6" />
                <div className="flex-1 bg-white/30 rounded-t h-10" />
                <div className="flex-1 bg-[#C8F169] rounded-t h-14" />
                <div className="flex-1 bg-white/40 rounded-t h-11" />
                <div className="flex-1 bg-white/25 rounded-t h-8" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] font-mono-label text-white/50">
            <span>FIGMA AUTO-LAYOUT</span>
            <span>SYSTEM 01</span>
          </div>
        </div>
      );

    case 'interactive-canvas':
      return (
        <div className="w-full h-full p-5 sm:p-6 flex flex-col justify-between bg-[#ECEAE2] text-[#171717] relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-[#171717]/10 pb-3">
            <span className="font-mono-label text-[10px] font-semibold px-2 py-0.5 rounded bg-[#171717] text-[#F7F6F2]">
              REACT + TS
            </span>
            <span className="font-mono-label text-[10px] text-[#171717]/60">
              INSTANT FILTER ENGINE
            </span>
          </div>
          <div className="my-auto py-4 space-y-2.5">
            <div className="p-3 rounded-xl bg-white border border-[#171717]/10 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2.5">
                <Code className="w-4 h-4 text-[#171717]" />
                <span className="font-mono-label text-xs font-medium">useMemoizedFilter(query, tags)</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#C8F169] text-[#171717] font-mono-label text-[10px] font-semibold">
                0ms Lag
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-2.5 rounded-xl bg-white/70 border border-[#171717]/10">
                <span className="font-mono-label text-[10px] text-[#777777] block">TYPE SAFETY</span>
                <span className="font-display font-bold text-sm">Strict Schema</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/70 border border-[#171717]/10">
                <span className="font-mono-label text-[10px] text-[#777777] block">A11Y FOCUS</span>
                <span className="font-display font-bold text-sm">Keyboard Ready</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] font-mono-label text-[#171717]/60">
            <span>WEB ARCHITECTURE</span>
            <span>SYSTEM 02</span>
          </div>
        </div>
      );

    case 'academic-system':
      return (
        <div className="w-full h-full p-5 sm:p-6 flex flex-col justify-between bg-[#1B1D1A] text-[#F7F6F2] relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="font-mono-label text-[10px] text-[#C8F169] uppercase">
              SYSTEM ANALYSIS & WORKFLOW
            </span>
            <BookOpen className="w-4 h-4 text-white/60" />
          </div>
          <div className="my-auto py-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex-1 p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <span className="font-mono-label text-[10px] text-white/50 block">STEP 01</span>
                <span className="font-display font-semibold text-xs mt-1 block">Input & Validasi</span>
              </div>
              <span className="text-[#C8F169] font-mono-label text-xs">→</span>
              <div className="flex-1 p-3 rounded-xl bg-[#C8F169]/15 border border-[#C8F169]/40 text-center">
                <span className="font-mono-label text-[10px] text-[#C8F169] block">STEP 02</span>
                <span className="font-display font-semibold text-xs mt-1 block text-[#C8F169]">Review Status</span>
              </div>
              <span className="text-[#C8F169] font-mono-label text-xs">→</span>
              <div className="flex-1 p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <span className="font-mono-label text-[10px] text-white/50 block">STEP 03</span>
                <span className="font-display font-semibold text-xs mt-1 block">Arsip Terpadu</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] font-mono-label text-white/50">
            <span>UML • FLOWCHART • WEB UI</span>
            <span>SYSTEM 03</span>
          </div>
        </div>
      );

    case 'editorial-brand':
      return (
        <div className="w-full h-full p-5 sm:p-6 flex flex-col justify-between bg-[#F0EFE9] text-[#171717] relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-[#171717]/15 pb-3">
            <span className="font-mono-label text-[10px] uppercase tracking-widest">
              SWISS EDITORIAL GRID
            </span>
            <Palette className="w-4 h-4 text-[#171717]" />
          </div>
          <div className="my-auto py-3">
            <p className="font-display font-bold text-3xl sm:text-4xl tracking-tighter leading-none">
              Aa Bb Cc
            </p>
            <p className="font-mono-label text-[11px] text-[#777777] mt-2">
              FLUID TYPOGRAPHY & ASYMMETRIC EXHIBITION
            </p>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-[#171717]/15 text-[11px] font-mono-label">
            <span className="px-2 py-0.5 rounded bg-[#C8F169] text-[#171717] font-semibold">
              ART DIRECTION
            </span>
            <span>SYSTEM 04</span>
          </div>
        </div>
      );

  }
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const prefersReducedMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return portfolioData.projects;
    }
    return portfolioData.projects.filter(
      (project) => project.category === selectedCategory
    );
  }, [selectedCategory]);

  const getCategoryCount = (cat: ProjectCategory) => {
    if (cat === 'All') return portfolioData.projects.length;
    return portfolioData.projects.filter((p) => p.category === cat).length;
  };

  return (
    <section
      id="projects"
      className="py-24 md:py-32 border-b border-[var(--border-hairline)]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-10 border-b border-[var(--border-hairline)]"
        >
          <div>
            <span className="font-mono-label text-xs uppercase tracking-widest text-[var(--text-secondary)] block mb-2">
              02 / CURATED CASE STUDIES & ARCHIVE
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text-primary)]">
              Selected Works
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-md">
            Setiap proyek merangkum masalah utama, pendekatan solusi, dan hasil akhir. Klik kartu proyek untuk membaca{' '}
            <strong className="text-[var(--text-primary)] font-medium">Case Study lengkap</strong>.
          </p>
        </motion.div>

        {/* Functional Category Filter Bar */}
        <div
          role="tablist"
          aria-label="Filter proyek berdasarkan kategori"
          className="flex flex-wrap items-center gap-2 mb-12"
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            const count = getCategoryCount(category);
            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category)}
                className={`group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-xs'
                    : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-hairline)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`font-mono-label text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-[#C8F169] text-[#171717] font-bold'
                      : 'bg-[var(--bg-subtle)] text-[var(--text-secondary)]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Project Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Asymmetric span when displaying all projects
              const isWideCard =
                selectedCategory === 'All'
                  ? index % 3 === 0
                  : filteredProjects.length === 1;

              const colSpanClass = isWideCard
                ? 'lg:col-span-12'
                : 'lg:col-span-6';

              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  data-cursor-label="Read Case Study"
                  onClick={() => onSelectProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectProject(project);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Buka studi kasus untuk ${project.title}`}
                  className={`${colSpanClass} group rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border-hairline)] hover:border-[var(--border-strong)] p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.07)] cursor-pointer flex flex-col justify-between`}
                >
                  <div
                    className={`grid grid-cols-1 ${
                      isWideCard ? 'lg:grid-cols-12 gap-7 items-center' : 'gap-6'
                    }`}
                  >
                    {/* Preview Mockup Box with Subtle Zoom Effect */}
                    <div
                      className={`${
                        isWideCard ? 'lg:col-span-6' : ''
                      } relative aspect-[16/10] rounded-2xl overflow-hidden border border-[var(--border-hairline)]`}
                    >
                      <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                        <ProjectVisualMockup project={project} />
                      </div>
                    </div>

                    {/* Content Details */}
                    <div
                      className={`${
                        isWideCard ? 'lg:col-span-6' : ''
                      } flex flex-col justify-between`}
                    >
                      {/* Top Metadata Row */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="font-mono-label text-xs font-bold px-2.5 py-1 rounded-md bg-[#C8F169] text-[#171717]">
                            {project.number}
                          </span>
                          <span className="font-mono-label text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                            {project.category}
                          </span>
                        </div>
                        <span className="font-mono-label text-xs text-[var(--text-secondary)]">
                          {project.year} • {project.role}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] group-hover:underline decoration-[#C8F169] decoration-2 underline-offset-4">
                        {project.title}
                      </h3>

                      {/* Problem / Solution / Result Structured Summary (Visible on mobile & desktop) */}
                      <div className="mt-4 space-y-2.5 text-sm text-[var(--text-secondary)] bg-[var(--bg-subtle)]/75 p-4 rounded-2xl border border-[var(--border-hairline)]">
                        <div>
                          <span className="font-mono-label text-[10px] uppercase text-[var(--text-primary)] font-semibold block">
                            MASALAH (PROBLEM)
                          </span>
                          <p className="text-xs sm:text-sm leading-relaxed">
                            {project.shortProblem}
                          </p>
                        </div>
                        <div className="pt-2 border-t border-[var(--border-hairline)]">
                          <span className="font-mono-label text-[10px] uppercase text-[var(--text-primary)] font-semibold block">
                            SOLUSI & HASIL (SOLUTION & IMPACT)
                          </span>
                          <p className="text-xs sm:text-sm leading-relaxed">
                            {project.shortSolution} {project.shortResult}
                          </p>
                        </div>
                      </div>

                      {/* Tech Stack Tags & Explore Button */}
                      <div className="mt-5 pt-4 border-t border-[var(--border-hairline)] flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-lg bg-[var(--bg-subtle)] text-[var(--text-primary)] font-mono-label text-[11px]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <span className="inline-flex items-center gap-1.5 font-display font-semibold text-xs sm:text-sm text-[var(--text-primary)] group-hover:translate-x-0.5 transition-transform">
                          <span>Explore Case Study</span>
                          <span className="w-7 h-7 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] group-hover:bg-[#C8F169] group-hover:text-[#171717] flex items-center justify-center transition-colors">
                            <ArrowUpRight className="w-4 h-4" />
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
