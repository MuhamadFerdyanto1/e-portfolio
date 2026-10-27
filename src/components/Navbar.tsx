import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  isDark: boolean;
  onToggleTheme: () => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  isDark,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 84;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-hairline)] shadow-[0_4px_30px_rgba(0,0,0,0.03)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand / Initials Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Kembali ke bagian atas halaman"
        >
          <span className="w-9 h-9 rounded-lg bg-[var(--text-primary)] text-[var(--bg-primary)] font-display font-bold text-sm flex items-center justify-center tracking-tighter group-hover:bg-[#C8F169] group-hover:text-[#171717] transition-colors duration-200">
            {portfolioData.identity.initials}
          </span>
          <div className="flex flex-col">
            <span className="font-display font-semibold text-sm tracking-tight leading-none">
              {portfolioData.identity.fullName}
            </span>
            <span className="font-mono-label text-[10px] text-[var(--text-secondary)] mt-0.5 uppercase">
              Creative Tech
            </span>
          </div>
        </a>

        {/* Desktop Navigation Pill */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden md:flex items-center gap-1 p-1 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-hairline)]"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-[#171717]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-[#C8F169]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Actions: Theme Toggle + Let's Talk CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="w-9 h-9 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors cursor-pointer"
            aria-label={isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
            title={isDark ? 'Mode Terang' : 'Mode Gelap'}
          >
            {isDark ? <Sun className="w-4 h-4 text-[#C8F169]" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-medium hover:bg-[#C8F169] hover:text-[#171717] transition-all duration-200"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="w-9 h-9 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--text-primary)]"
            aria-label={isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
          >
            {isDark ? <Sun className="w-4 h-4 text-[#C8F169]" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="w-10 h-10 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--text-primary)]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[var(--bg-elevated)] border-b border-[var(--border-hairline)]"
          >
            <nav aria-label="Navigasi Mobile" className="px-5 py-6 flex flex-col gap-2">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl font-display text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#C8F169] text-[#171717]'
                        : 'text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono-label text-xs opacity-60">0{idx + 1}</span>
                  </motion.a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[var(--border-hairline)] flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="w-full py-3.5 px-5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] font-display font-medium text-sm flex items-center justify-center gap-2"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
