import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Award,
  ExternalLink,
  Calendar,
  Building2,
  Eye,
  X,
  CheckCircle2,
  BadgeCheck,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { CertificateItem } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [previewCert, setPreviewCert] = useState<CertificateItem | null>(null);

  const categories = [
    'ALL',
    ...Array.from(new Set(portfolioData.certificates.map((c) => c.category))),
  ];

  const filteredCertificates =
    selectedCategory === 'ALL'
      ? portfolioData.certificates
      : portfolioData.certificates.filter((c) => c.category === selectedCategory);

  return (
    <section
      id="certificates"
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
              04 / CREDENTIALS &amp; CERTIFICATIONS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text-primary)]">
              Licenses &amp; Certificates
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div
            className="flex flex-wrap items-center gap-2"
            role="group"
            aria-label="Filter kategori sertifikat"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-full text-xs font-mono-label uppercase transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#C8F169] text-[#171717] font-bold'
                    : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-hairline)] hover:text-[var(--text-primary)]'
                }`}
              >
                {cat === 'ALL' ? `All (${portfolioData.certificates.length})` : cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredCertificates.map((cert, idx) => (
            <motion.article
              key={cert.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="group rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border-hairline)] hover:border-[var(--text-primary)] transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Top Thumbnail / Visual Header */}
              <div
                onClick={() => setPreviewCert(cert)}
                className="relative h-48 bg-[var(--bg-subtle)] border-b border-[var(--border-hairline)] overflow-hidden cursor-pointer flex items-center justify-center p-6"
              >
                {cert.imageUrl ? (
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  /* Editorial Certificate Graphic Fallback */
                  <div className="w-full h-full rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-hairline)] p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-[#C8F169] transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C8F169] text-[#171717] font-mono-label text-[10px] font-bold uppercase">
                        <BadgeCheck className="w-3 h-3" />
                        Verified
                      </span>
                      <span className="font-mono-label text-[10px] text-[var(--text-secondary)]">
                        {cert.credentialId || `0${idx + 1}`}
                      </span>
                    </div>

                    <div className="my-auto py-2">
                      <div className="w-9 h-9 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-hairline)] flex items-center justify-center text-[var(--text-primary)] mb-2">
                        <Award className="w-4 h-4" />
                      </div>
                      <p className="font-mono-label text-[10px] uppercase tracking-wider text-[var(--text-secondary)] line-clamp-1">
                        {cert.issuer}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono-label text-[var(--text-secondary)] border-t border-[var(--border-hairline)] pt-2">
                      <span>{cert.category}</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                )}

                {/* Hover Overlay Button */}
                <div className="absolute inset-0 bg-[#171717]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C8F169] text-[#171717] font-display font-bold text-xs shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Lihat Sertifikat</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 text-xs text-[var(--text-secondary)]">
                    <span className="inline-flex items-center gap-1.5 font-medium truncate">
                      <Building2 className="w-3.5 h-3.5 shrink-0 text-[var(--text-primary)]" />
                      <span className="truncate">{cert.issuer}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono-label text-[11px] shrink-0">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-[var(--text-primary)] leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                <div className="space-y-4 pt-3 border-t border-[var(--border-hairline)]">
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-full bg-[var(--bg-primary)] border border-[var(--border-hairline)] font-mono-label text-[10px] text-[var(--text-secondary)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer Actions */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => setPreviewCert(cert)}
                      className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-[var(--text-primary)] hover:underline cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Detail &amp; Preview</span>
                    </button>

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[#C8F169] hover:text-[#171717] font-mono-label text-[10px] uppercase font-bold transition-colors"
                      >
                        <span>Kredensial</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox / Detail Modal */}
      <AnimatePresence>
        {previewCert && (
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
            onClick={() => setPreviewCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="cert-modal-title"
              className="w-full max-w-2xl rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border-strong)] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-hairline)]">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#C8F169] text-[#171717] font-mono-label text-[10px] font-bold uppercase">
                    {previewCert.category}
                  </span>
                  {previewCert.credentialId && (
                    <span className="font-mono-label text-xs text-[var(--text-secondary)]">
                      ID: {previewCert.credentialId}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewCert(null)}
                  aria-label="Tutup pratinjau sertifikat"
                  className="w-8 h-8 rounded-full bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:bg-[#C8F169] hover:text-[#171717] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto space-y-6">
                {previewCert.imageUrl ? (
                  <div className="rounded-2xl overflow-hidden border border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
                    <img
                      src={previewCert.imageUrl}
                      alt={previewCert.title}
                      className="w-full max-h-[420px] object-contain mx-auto"
                    />
                  </div>
                ) : (
                  <div className="rounded-2xl border border-dashed border-[var(--border-strong)] bg-[var(--bg-subtle)] p-8 text-center space-y-2">
                    <Award className="w-10 h-10 mx-auto text-[var(--text-primary)]" />
                    <p className="font-display font-bold text-base text-[var(--text-primary)]">
                      Pratinjau Gambar Sertifikat Belum Diunggah
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] max-w-md mx-auto">
                      Taruh file gambar sertifikat Anda di folder{' '}
                      <code className="px-1.5 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-primary)]">
                        public/certificates/nama-file.jpg
                      </code>{' '}
                      lalu isi properti <code className="px-1.5 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-primary)]">imageUrl</code> pada{' '}
                      <code className="px-1.5 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-primary)]">
                        src/data/portfolioData.ts
                      </code>
                      .
                    </p>
                  </div>
                )}

                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-secondary)]">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-[var(--text-primary)]">
                      <Building2 className="w-4 h-4" />
                      {previewCert.issuer}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1 font-mono-label">
                      <Calendar className="w-3.5 h-3.5" />
                      {previewCert.date}
                    </span>
                  </div>

                  <h3
                    id="cert-modal-title"
                    className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)]"
                  >
                    {previewCert.title}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {previewCert.description}
                  </p>
                </div>

                <div>
                  <span className="font-mono-label text-[10px] uppercase tracking-wider text-[var(--text-secondary)] block mb-2">
                    KOMPETENSI &amp; MATERI TERKAIT:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {previewCert.skillsCovered.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-primary)] border border-[var(--border-hairline)] text-xs font-medium text-[var(--text-primary)]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#171717] fill-[#C8F169]" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-[var(--border-hairline)] bg-[var(--bg-primary)] flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setPreviewCert(null)}
                  className="px-4 py-2 rounded-full border border-[var(--border-hairline)] text-xs font-display font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
                >
                  Tutup
                </button>

                {previewCert.credentialUrl && (
                  <a
                    href={previewCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C8F169] text-[#171717] font-display font-bold text-xs hover:opacity-90 transition-opacity"
                  >
                    <span>Verifikasi Kredensial Asli</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
