import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Copy,
  Check,
  Mail,
  Globe,
  Code2,
  ArrowUpRight,
  AlertCircle,
  Send,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [emailCopied, setEmailCopied] = useState(false);
  const [draftCopied, setDraftCopied] = useState(false);

  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [validatedDraft, setValidatedDraft] = useState<FormValues | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.contact.email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2600);
    } catch {
      // Fallback copy
      const input = document.createElement('input');
      input.value = portfolioData.contact.email;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2600);
    }
  };

  const validate = (form: FormValues): FormErrors => {
    const newErrors: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = 'Mohon masukkan nama Anda (minimal 2 karakter).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      newErrors.email = 'Mohon masukkan alamat email yang valid.';
    }
    if (!form.subject.trim() || form.subject.trim().length < 3) {
      newErrors.subject = 'Mohon isi subjek pesan (minimal 3 karakter).';
    }
    if (!form.message.trim() || form.message.trim().length < 15) {
      newErrors.message = 'Mohon tulis detail pesan Anda (minimal 15 karakter).';
    }
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setValidatedDraft(null);
      return;
    }
    setErrors({});
    setValidatedDraft({ ...values });
  };

  const handleCopyDraft = async () => {
    if (!validatedDraft) return;
    const text = `Dari: ${validatedDraft.name} (${validatedDraft.email})\nSubjek: ${validatedDraft.subject}\n\n${validatedDraft.message}`;
    await navigator.clipboard.writeText(text);
    setDraftCopied(true);
    window.setTimeout(() => setDraftCopied(false), 2600);
  };

  const mailtoHref = validatedDraft
    ? `mailto:${portfolioData.contact.email}?subject=${encodeURIComponent(
        validatedDraft.subject
      )}&body=${encodeURIComponent(
        `Halo ${portfolioData.identity.fullName},\n\nSaya ${validatedDraft.name} (${validatedDraft.email}).\n\n${validatedDraft.message}`
      )}`
    : '#';

  return (
    <section
      id="contact"
      className="py-24 md:py-32 border-b border-[var(--border-hairline)]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="pb-10 mb-14 border-b border-[var(--border-hairline)]"
        >
          <span className="font-mono-label text-xs uppercase tracking-widest text-[var(--text-secondary)] block mb-3">
            06 / INITIATE A CONVERSATION
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] tracking-tight max-w-3xl">
            {portfolioData.contact.headline}
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-4 max-w-2xl">
            {portfolioData.contact.subheadline}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (5 Cols): Direct Contact & Social Channels */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Email Copy Card */}
            <div className="rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border-hairline)] p-6 sm:p-7">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono-label text-xs uppercase text-[var(--text-secondary)]">
                  DIRECT EMAIL ([EMAIL])
                </span>
                <Mail className="w-4 h-4 text-[var(--text-primary)]" />
              </div>

              <p className="font-display font-bold text-lg sm:text-xl text-[var(--text-primary)] break-all">
                {portfolioData.contact.email}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-display font-semibold text-xs transition-all cursor-pointer ${
                    emailCopied
                      ? 'bg-[#C8F169] text-[#171717]'
                      : 'bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[#C8F169] hover:text-[#171717]'
                  }`}
                >
                  {emailCopied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Email Berhasil Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[var(--border-hairline)] hover:border-[var(--text-primary)] text-xs font-display font-semibold text-[var(--text-primary)] transition-colors"
                >
                  <span>Mail Client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Professional Networks List */}
            <div className="rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border-hairline)] p-6 sm:p-7 space-y-4">
              <h3 className="font-mono-label text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                PROFESSIONAL NETWORKS &amp; SOCIALS
              </h3>

              <div className="divide-y divide-[var(--border-hairline)]">
                {/* LinkedIn */}
                <a
                  href={portfolioData.contact.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group py-3.5 flex items-center justify-between gap-4 text-sm text-[var(--text-primary)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-[var(--bg-subtle)] group-hover:bg-[#C8F169] group-hover:text-[#171717] flex items-center justify-center transition-colors">
                      <Globe className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="font-display font-bold block">LinkedIn [LINKEDIN]</span>
                      <span className="text-xs text-[var(--text-secondary)]">
                        {portfolioData.contact.linkedin.label}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* GitHub */}
                <a
                  href={portfolioData.contact.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group py-3.5 flex items-center justify-between gap-4 text-sm text-[var(--text-primary)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-[var(--bg-subtle)] group-hover:bg-[#C8F169] group-hover:text-[#171717] flex items-center justify-center transition-colors">
                      <Code2 className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="font-display font-bold block">GitHub [GITHUB]</span>
                      <span className="text-xs text-[var(--text-secondary)]">
                        {portfolioData.contact.github.label}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Additional Social Platforms */}
                {portfolioData.contact.socialMedia.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group py-3.5 flex items-center justify-between gap-4 text-sm text-[var(--text-primary)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl bg-[var(--bg-subtle)] group-hover:bg-[#C8F169] group-hover:text-[#171717] font-mono-label text-xs font-bold flex items-center justify-center transition-colors">
                        {social.platform.slice(0, 2).toUpperCase()}
                      </span>
                      <div>
                        <span className="font-display font-bold block">
                          {social.platform} [SOCIAL MEDIA]
                        </span>
                        <span className="text-xs text-[var(--text-secondary)]">
                          {social.handle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column (7 Cols): Validated Contact Form */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-[var(--bg-elevated)] border border-[var(--border-hairline)] p-6 sm:p-9">
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-[var(--border-hairline)]">
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)]">
                    Send a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                    Isi detail di bawah ini untuk memvalidasi dan menyiapkan pesan Anda.
                  </p>
                </div>
                <span className="font-mono-label text-[11px] px-2.5 py-1 rounded bg-[var(--bg-subtle)] text-[var(--text-secondary)]">
                  CLIENT VALIDATION
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono-label text-xs uppercase text-[var(--text-primary)] mb-2"
                    >
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Misal: Budi Santoso"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'err-name' : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-500'
                          : 'border-[var(--border-hairline)] focus:border-[var(--text-primary)]'
                      }`}
                    />
                    {errors.name && (
                      <p
                        id="err-name"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono-label text-xs uppercase text-[var(--text-primary)] mb-2"
                    >
                      Alamat Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="nama@perusahaan.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'err-email' : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500'
                          : 'border-[var(--border-hairline)] focus:border-[var(--text-primary)]'
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="err-email"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block font-mono-label text-xs uppercase text-[var(--text-primary)] mb-2"
                  >
                    Subjek Diskusi <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={values.subject}
                    onChange={handleChange}
                    placeholder="Kolaborasi Proyek UI/UX / Pengembangan Web / Peluang Karier"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'err-subject' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none transition-colors ${
                      errors.subject
                        ? 'border-red-500'
                        : 'border-[var(--border-hairline)] focus:border-[var(--text-primary)]'
                    }`}
                  />
                  {errors.subject && (
                    <p
                      id="err-subject"
                      className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono-label text-xs uppercase text-[var(--text-primary)] mb-2"
                  >
                    Pesan Anda <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Ceritakan secara singkat ide proyek, ruang lingkup, atau hal yang ingin didiskusikan..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'err-message' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none transition-colors resize-y ${
                      errors.message
                        ? 'border-red-500'
                        : 'border-[var(--border-hairline)] focus:border-[var(--text-primary)]'
                    }`}
                  />
                  {errors.message && (
                    <p
                      id="err-message"
                      className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[#C8F169] hover:text-[#171717] font-display font-semibold text-sm transition-all duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Validasi &amp; Siapkan Pesan</span>
                </button>
              </form>

              {validatedDraft && (
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyDraft}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-hairline)] text-xs font-display font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--text-primary)]"
                  >
                    {draftCopied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Draft Berhasil Disalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Salin Draft</span>
                      </>
                    )}
                  </button>
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-display font-semibold transition-colors hover:bg-[#C8F169] hover:text-[#171717]"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Buka di Email</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
