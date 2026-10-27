import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Layers,
  Target,
  Search,
  Wrench,
  Award,
  Lightbulb,
  AlertCircle,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = portfolioData.projects.findIndex((p) => p.id === project.id);
  const prevProject =
    portfolioData.projects[
      (currentIndex - 1 + portfolioData.projects.length) % portfolioData.projects.length
    ];
  const nextProject =
    portfolioData.projects[(currentIndex + 1) % portfolioData.projects.length];

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/65 backdrop-blur-xs"
        />

        {/* Modal Container */}
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-strong)] shadow-2xl"
        >
          {/* Sticky Top Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-8 py-4 bg-[var(--bg-elevated)]/95 backdrop-blur-md border-b border-[var(--border-hairline)]">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-1 rounded bg-[#C8F169] text-[#171717] font-mono-label text-xs font-bold">
                CASE STUDY / {project.number}
              </span>
              <span className="font-mono-label text-xs text-[var(--text-secondary)] hidden sm:inline">
                {project.category} • {project.year}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:bg-[#C8F169] hover:text-[#171717] font-mono-label text-xs font-medium transition-colors cursor-pointer"
              aria-label="Tutup studi kasus"
            >
              <span>ESC / Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-8 md:p-10 space-y-8">
            {/* Header & Metadata Summary */}
            <div className="border-b border-[var(--border-hairline)] pb-6">
              <h2
                id="modal-project-title"
                className="font-display font-bold text-2xl sm:text-4xl text-[var(--text-primary)] leading-tight"
              >
                {project.title}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 p-4 rounded-2xl bg-[var(--bg-subtle)] border border-[var(--border-hairline)]">
                <div>
                  <span className="font-mono-label text-[10px] uppercase text-[var(--text-secondary)] block">
                    PERAN (ROLE)
                  </span>
                  <span className="font-display font-semibold text-xs sm:text-sm">
                    {project.role}
                  </span>
                </div>
                <div>
                  <span className="font-mono-label text-[10px] uppercase text-[var(--text-secondary)] block">
                    DURASI & TAHUN
                  </span>
                  <span className="font-display font-semibold text-xs sm:text-sm">
                    {project.duration} ({project.year})
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-mono-label text-[10px] uppercase text-[var(--text-secondary)] block">
                    KATEGORI
                  </span>
                  <span className="font-display font-semibold text-xs sm:text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Metrics Highlight if available */}
              {caseStudy.metricsOrImpact && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                  {caseStudy.metricsOrImpact.map((metric) => (
                    <div
                      key={metric.label}
                      className="p-3.5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-primary)] flex flex-col justify-between"
                    >
                      <span className="font-mono-label text-[10px] uppercase text-[var(--text-secondary)]">
                        {metric.label}
                      </span>
                      <span className="font-display font-bold text-lg text-[var(--text-primary)] mt-1">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 1. Project Overview & 2. Problem Statement */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-hairline)]">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-[var(--text-primary)]" />
                  <h3 className="font-mono-label text-xs font-bold uppercase tracking-wider">
                    1. Project Overview
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {caseStudy.overview}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-hairline)]">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-4 h-4 text-[var(--text-primary)]" />
                  <h3 className="font-mono-label text-xs font-bold uppercase tracking-wider">
                    2. Problem Statement
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {caseStudy.problemStatement}
                </p>
              </div>
            </div>

            {/* 3. Goals and Objectives */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-subtle)] border border-[var(--border-hairline)]">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-4 h-4 text-[var(--text-primary)]" />
                <h3 className="font-mono-label text-xs font-bold uppercase tracking-wider">
                  3. Goals & Objectives
                </h3>
              </div>
              <ul className="space-y-2.5">
                {caseStudy.goalsAndObjectives.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[var(--text-primary)]">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[var(--text-primary)]" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Research / Planning & 5. Design and Development Process */}
            <div className="space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-hairline)]">
                <div className="flex items-center gap-2 mb-3">
                  <Search className="w-4 h-4 text-[var(--text-primary)]" />
                  <h3 className="font-mono-label text-xs font-bold uppercase tracking-wider">
                    4. Research & Planning
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {caseStudy.researchAndPlanning}
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-hairline)]">
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-4 h-4 text-[var(--text-primary)]" />
                  <h3 className="font-mono-label text-xs font-bold uppercase tracking-wider">
                    5. Design & Development Process
                  </h3>
                </div>
                <div className="space-y-3">
                  {caseStudy.designAndDevProcess.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-hairline)] text-sm text-[var(--text-primary)]"
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 6. Tools and Technologies */}
            <div>
              <h3 className="font-mono-label text-xs font-bold uppercase tracking-wider mb-3">
                6. Tools & Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.toolsAndTech.map((tool) => (
                  <span
                    key={tool}
                    className="px-3.5 py-1.5 rounded-xl bg-[#C8F169] text-[#171717] font-mono-label text-xs font-semibold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* 7. Final Result & 8. Lessons Learned */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-[var(--bg-subtle)] border border-[var(--border-hairline)]">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-[var(--text-primary)]" />
                  <h3 className="font-mono-label text-xs font-bold uppercase tracking-wider">
                    7. Final Result
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-primary)] leading-relaxed">
                  {caseStudy.finalResult}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[var(--bg-subtle)] border border-[var(--border-hairline)]">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-4 h-4 text-[var(--text-primary)]" />
                  <h3 className="font-mono-label text-xs font-bold uppercase tracking-wider">
                    8. Lessons Learned
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-primary)] leading-relaxed italic">
                  &ldquo;{caseStudy.lessonsLearned}&rdquo;
                </p>
              </div>
            </div>

            {/* Footer Prev / Next Case Study Navigation */}
            <div className="pt-6 border-t border-[var(--border-hairline)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => onSelectProject(prevProject)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-hairline)] hover:border-[var(--text-primary)] text-xs font-display font-semibold cursor-pointer transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Prev: {prevProject.number}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-display font-semibold cursor-pointer"
              >
                Kembali ke Daftar Proyek
              </button>

              <button
                type="button"
                onClick={() => onSelectProject(nextProject)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-hairline)] hover:border-[var(--text-primary)] text-xs font-display font-semibold cursor-pointer transition-colors"
              >
                <span>Next: {nextProject.number}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
