import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import type { ProjectItem } from './data/portfolioData';

const sectionIds = ['home', 'about', 'projects', 'skills', 'certificates', 'journey', 'contact'];

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('portfolio-theme') === 'dark';
    }
    return false;
  });

  // Sync Dark/Light Mode with HTML root element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      window.localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      window.localStorage.setItem('portfolio-theme', 'light');
    }
  }, [isDark]);

  // Active Section Scroll-Spy & Back-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 520);

      const viewportMiddle = scrollY + window.innerHeight * 0.32;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (viewportMiddle >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[#C8F169] selection:text-[#171717]">
      {/* Skip to Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[90] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-[#C8F169] focus:text-[#171717] focus:font-display focus:font-bold"
      >
        Lewati ke konten utama
      </a>

      {/* Top Subtle Entrance Progress Bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 h-0.5 bg-[#C8F169] origin-left z-[60] pointer-events-none"
      />

      {/* Desktop Contextual Custom Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content */}
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection onSelectProject={(proj) => setSelectedProject(proj)} />
        <SkillsSection />
        <CertificationsSection />
        <JourneySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />

      {/* Floating Back-to-Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.22 }}
            onClick={scrollToTop}
            aria-label="Kembali ke bagian atas"
            title="Back to Top"
            className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[#C8F169] hover:text-[#171717] shadow-lg flex items-center justify-center transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
