import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string>('');
  const [isFinePointer, setIsFinePointer] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 360, mass: 0.4 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsFinePointer(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!isFinePointer || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest('[data-cursor-label]');
      if (projectCard) {
        const label = projectCard.getAttribute('data-cursor-label') || 'Explore';
        setCursorLabel(label);
        setIsHoveringInteractive(true);
        return;
      }

      const interactive = target.closest('a, button, input, textarea, select, [role="button"]');
      if (interactive) {
        setCursorLabel('');
        setIsHoveringInteractive(true);
      } else {
        setCursorLabel('');
        setIsHoveringInteractive(false);
      }
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
    };
  }, [isFinePointer, prefersReducedMotion, cursorX, cursorY, isVisible]);

  if (!isFinePointer || prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden lg:flex items-center justify-center"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: cursorLabel ? 1 : isHoveringInteractive ? 1.35 : 1,
      }}
      transition={{ duration: 0.18 }}
    >
      {cursorLabel ? (
        <div className="px-3 py-1.5 rounded-full bg-[#C8F169] text-[#171717] font-mono-label text-[11px] font-semibold tracking-wider uppercase shadow-md border border-[#171717]/20 whitespace-nowrap">
          {cursorLabel}
        </div>
      ) : (
        <div
          className={`w-3.5 h-3.5 rounded-full transition-colors duration-200 ${
            isHoveringInteractive
              ? 'bg-[#C8F169] border border-[#171717]'
              : 'border border-[var(--text-primary)]/50 bg-[var(--text-primary)]/10'
          }`}
        />
      )}
    </motion.div>
  );
};
