import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { UserCheck, Compass, Wrench, Target, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface AnimatedCounterProps {
  target: number;
  suffix: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, suffix }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let start = 0;
    const duration = 1100;
    const stepTime = 24;
    const steps = Math.max(1, Math.floor(duration / stepTime));
    const increment = target / steps;

    const timer = window.setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        window.clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => window.clearInterval(timer);
  }, [isInView, target, prefersReducedMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

export const AboutSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeFactIdx, setActiveFactIdx] = useState<number>(0);

  const factIcons = [Compass, Wrench, UserCheck, Target];

  return (
    <section
      id="about"
      className="py-24 md:py-32 border-b border-[var(--border-hairline)] relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Index Header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-[var(--border-hairline)]"
        >
          <div>
            <span className="font-mono-label text-xs uppercase tracking-widest text-[var(--text-secondary)] block mb-2">
              01 / PERSONAL & PROFESSIONAL PROFILE
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text-primary)]">
              {portfolioData.about.sectionTitle}
            </h2>
          </div>
        </motion.div>

        {/* Two-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (5 Cols): Representative Portrait Frame & Animated Stats */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Visual Portrait Card */}
            <div className="rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border-hairline)] p-6 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-label text-[11px] uppercase px-2.5 py-1 rounded bg-[#C8F169] text-[#171717] font-semibold">
                  [FOTO PROFIL]
                </span>
                <span className="font-mono-label text-[11px] text-[var(--text-secondary)]">
                  PORTRAIT / BIO
                </span>
              </div>

              {portfolioData.identity.profilePhotoUrl ? (
                <div className="aspect-square rounded-2xl overflow-hidden bg-[#1E1E20] mb-5">
                  <img
                    src={portfolioData.identity.profilePhotoUrl}
                    alt={`Potret ${portfolioData.identity.fullName}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] rounded-2xl bg-[var(--bg-subtle)] border border-[var(--border-hairline)] p-6 flex flex-col justify-between mb-5 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--text-primary)] text-[var(--bg-primary)] font-display font-bold text-lg flex items-center justify-center">
                      {portfolioData.identity.initials}
                    </div>
                    <Sparkles className="w-5 h-5 text-[var(--text-secondary)]" />
                  </div>

                  <div className="my-auto">
                    <p className="font-mono-label text-xs uppercase text-[var(--text-secondary)]">
                      PLACEHOLDER FOTO PROFIL
                    </p>
                    <p className="font-display font-semibold text-base text-[var(--text-primary)] mt-1">
                      Tambahkan foto asli Anda melalui properti{' '}
                      <code className="px-1.5 py-0.5 rounded bg-[var(--bg-elevated)] text-xs">
                        profilePhotoUrl
                      </code>{' '}
                      di <code className="px-1.5 py-0.5 rounded bg-[var(--bg-elevated)] text-xs">portfolioData.ts</code>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                    <span className="w-2 h-2 rounded-full bg-[#C8F169]" />
                    <span>Creative Technologist • UI/UX • Web Dev</span>
                  </div>
                </div>
              )}

              {/* Animated Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 pt-2">
                {portfolioData.about.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-[var(--bg-subtle)] border border-[var(--border-hairline)] flex flex-col justify-between"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)]">
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                      </span>
                      <span className="font-mono-label text-[10px] text-[var(--text-secondary)] uppercase">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="font-display font-semibold text-xs text-[var(--text-primary)] mt-1.5">
                      {stat.label}
                    </p>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">
                      {stat.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column (7 Cols): Narrative Text Reveal + Interactive Quick Facts */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5"
            >
              <p className="font-display font-semibold text-xl sm:text-2xl lg:text-[1.65rem] leading-snug text-[var(--text-primary)]">
                {portfolioData.about.leadParagraph}
              </p>

              {portfolioData.about.bodyParagraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Quick Facts Interactive Grid */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-4 border-t border-[var(--border-hairline)]"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono-label text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                  FAKTA SINGKAT & PENDEKATAN KERJA
                </h3>
                <span className="text-xs text-[var(--text-secondary)]">
                  Klik kartu untuk sorotan
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {portfolioData.about.quickFacts.map((fact, idx) => {
                  const IconComponent = factIcons[idx % factIcons.length];
                  const isSelected = activeFactIdx === idx;
                  return (
                    <button
                      key={fact.label}
                      type="button"
                      onClick={() => setActiveFactIdx(idx)}
                      className={`text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[var(--bg-elevated)] border-[var(--text-primary)] shadow-sm'
                          : 'bg-[var(--bg-elevated)]/60 border-[var(--border-hairline)] hover:border-[var(--border-strong)]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="font-mono-label text-[11px] uppercase tracking-wider text-[var(--text-secondary)]">
                            {fact.label}
                          </span>
                          <span
                            className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'bg-[#C8F169] text-[#171717]'
                                : 'bg-[var(--bg-subtle)] text-[var(--text-primary)]'
                            }`}
                          >
                            <IconComponent className="w-4 h-4" />
                          </span>
                        </div>
                        <h4 className="font-display font-bold text-base text-[var(--text-primary)]">
                          {fact.value}
                        </h4>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-3 pt-3 border-t border-[var(--border-hairline)]">
                        {fact.detail}
                      </p>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
