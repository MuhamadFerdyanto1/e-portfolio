import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PenTool, Code2, Wrench, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [highlightedCategory, setHighlightedCategory] = useState<string>('ALL');

  const getGroupIcon = (category: string) => {
    switch (category) {
      case 'Design':
        return PenTool;
      case 'Development':
        return Code2;
      case 'Tools':
        return Wrench;
      case 'Soft Skills':
      default:
        return Users;
    }
  };

  return (
    <section
      id="skills"
      className="py-24 md:py-32 border-b border-[var(--border-hairline)]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-[var(--border-hairline)]"
        >
          <div>
            <span className="font-mono-label text-xs uppercase tracking-widest text-[var(--text-secondary)] block mb-2">
              03 / CAPABILITIES & TOOLKIT MATRIX
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text-primary)]">
              Skills &amp; Tools
            </h2>
          </div>

          {/* Interactive Pillar Filter */}
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Sorot kelompok keahlian">
            <button
              type="button"
              onClick={() => setHighlightedCategory('ALL')}
              className={`px-3.5 py-2 rounded-full text-xs font-mono-label uppercase transition-colors cursor-pointer ${
                highlightedCategory === 'ALL'
                  ? 'bg-[#C8F169] text-[#171717] font-bold'
                  : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-hairline)] hover:text-[var(--text-primary)]'
              }`}
            >
              All Pillars (4)
            </button>
            {portfolioData.skills.map((group) => (
              <button
                key={group.id}
                type="button"
                onClick={() => setHighlightedCategory(group.category)}
                className={`px-3.5 py-2 rounded-full text-xs font-mono-label uppercase transition-colors cursor-pointer ${
                  highlightedCategory === group.category
                    ? 'bg-[#C8F169] text-[#171717] font-bold'
                    : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-hairline)] hover:text-[var(--text-primary)]'
                }`}
              >
                {group.category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 4 Skill Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.skills.map((group, groupIndex) => {
            const IconComponent = getGroupIcon(group.category);
            const isDimmed =
              highlightedCategory !== 'ALL' && highlightedCategory !== group.category;

            return (
              <motion.div
                key={group.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
                className={`rounded-3xl bg-[var(--bg-elevated)] border p-6 sm:p-8 transition-all duration-300 ${
                  isDimmed
                    ? 'opacity-45 border-[var(--border-hairline)] scale-[0.99]'
                    : 'opacity-100 border-[var(--border-hairline)] hover:border-[var(--border-strong)]'
                }`}
              >
                {/* Pillar Header */}
                <div className="flex items-start justify-between gap-4 pb-5 mb-6 border-b border-[var(--border-hairline)]">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono-label text-xs font-bold px-2 py-0.5 rounded bg-[var(--bg-subtle)] text-[var(--text-primary)]">
                        0{groupIndex + 1}
                      </span>
                      <h3 className="font-display font-bold text-2xl text-[var(--text-primary)]">
                        {group.category}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2">
                      {group.subtitle}
                    </p>
                  </div>

                  <div className="w-11 h-11 rounded-2xl bg-[var(--bg-subtle)] text-[var(--text-primary)] flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Compact Skill Cards with Micro-Interactions (No Arbitrary Percentage Bars) */}
                <div className="grid grid-cols-1 gap-3.5">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/card p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-hairline)] hover:border-[var(--text-primary)] transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between gap-2"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h4 className="font-display font-bold text-sm sm:text-base text-[var(--text-primary)] group-hover/card:text-[var(--text-primary)] flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[var(--border-strong)] group-hover/card:bg-[#C8F169] transition-colors" />
                          {skill.name}
                        </h4>
                        <span className="font-mono-label text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-[var(--bg-elevated)] group-hover/card:bg-[#C8F169] group-hover/card:text-[#171717] text-[var(--text-secondary)] font-semibold transition-colors shrink-0">
                          {skill.tag}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] pl-4 leading-relaxed">
                        {skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
