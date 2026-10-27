import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Compass, FolderGit2, Sparkles, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { JourneyItem } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [expandedId, setExpandedId] = useState<string>(portfolioData.journey[0]?.id || '');

  const getIcon = (type: JourneyItem['type']) => {
    switch (type) {
      case 'Education':
        return GraduationCap;
      case 'Project Milestone':
        return FolderGit2;
      case 'Exploration':
        return Sparkles;
      default:
        return Compass;
    }
  };

  return (
    <section
      id="journey"
      className="py-24 md:py-32 border-b border-[var(--border-hairline)]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-14 border-b border-[var(--border-hairline)]"
        >
          <div>
            <span className="font-mono-label text-xs uppercase tracking-widest text-[var(--text-secondary)] block mb-2">
              05 / LEARNING &amp; CREATIVE TIMELINE
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text-primary)]">
              My Learning Journey
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-md">
            Perjalanan akademik, eksplorasi mandiri, dan pencapaian proyek yang membentuk fondasi desain serta rekayasa sistem saya.
          </p>
        </motion.div>

        {/* Interactive Timeline Container */}
        <div className="relative">
          {/* Vertical Spine Line */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-[220px] top-3 bottom-3 w-px bg-[var(--border-strong)]"
          />

          <div className="space-y-8">
            {portfolioData.journey.map((item, idx) => {
              const IconComponent = getIcon(item.type);
              const isExpanded = expandedId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
                >
                  {/* Left Period & Tag Column */}
                  <div className="md:col-span-3 flex md:flex-col items-center md:items-start justify-between gap-2 pt-2">
                    <span className="font-mono-label text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                      {item.period}
                    </span>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-hairline)] font-mono-label text-[10px] uppercase text-[var(--text-secondary)]">
                      {item.highlightTag}
                    </span>
                  </div>

                  {/* Timeline Node Dot (Desktop) */}
                  <div
                    aria-hidden="true"
                    className="hidden md:flex absolute left-[220px] top-3 -translate-x-1/2 w-8 h-8 rounded-full bg-[var(--bg-elevated)] border-2 border-[var(--text-primary)] items-center justify-center z-10"
                  >
                    <span
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        isExpanded ? 'bg-[#C8F169]' : 'bg-[var(--text-primary)]'
                      }`}
                    />
                  </div>

                  {/* Right Content Card */}
                  <div className="md:col-span-9">
                    <div
                      onClick={() =>
                        setExpandedId((prev) => (prev === item.id ? '' : item.id))
                      }
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setExpandedId((prev) => (prev === item.id ? '' : item.id));
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-expanded={isExpanded}
                      className={`rounded-3xl bg-[var(--bg-elevated)] border p-5 sm:p-7 transition-all duration-200 cursor-pointer ${
                        isExpanded
                          ? 'border-[var(--text-primary)] shadow-sm'
                          : 'border-[var(--border-hairline)] hover:border-[var(--border-strong)]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#C8F169] text-[#171717] font-mono-label text-[10px] font-bold uppercase">
                              <IconComponent className="w-3 h-3" />
                              {item.type}
                            </span>
                            <span className="text-xs font-medium text-[var(--text-secondary)]">
                              {item.organization}
                            </span>
                          </div>

                          <h3 className="font-display font-bold text-lg sm:text-2xl text-[var(--text-primary)] pt-1">
                            {item.title}
                          </h3>
                        </div>

                        <span
                          className={`w-8 h-8 rounded-full bg-[var(--bg-subtle)] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 bg-[#C8F169] text-[#171717]' : ''
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mt-3">
                        {item.description}
                      </p>

                      {/* Contributions & Key Learnings */}
                      {isExpanded && (
                        <div className="mt-5 pt-4 border-t border-[var(--border-hairline)]">
                          <span className="font-mono-label text-[10px] uppercase tracking-wider text-[var(--text-primary)] font-bold block mb-2.5">
                            KONTRIBUSI &amp; HAL YANG DIPELAJARI:
                          </span>
                          <ul className="space-y-2">
                            {item.contributionsAndLearnings.map((point, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-primary)]"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C8F169] ring-2 ring-[#171717]/30 mt-2 shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
