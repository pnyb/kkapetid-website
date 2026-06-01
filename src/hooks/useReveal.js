import { useEffect, useRef } from 'react';

/**
 * Attach to any element's ref to trigger .is-visible when it enters viewport.
 * Add class "reveal", "reveal-left", or "reveal-right" + "delay-*" for stagger.
 */
export default function useReveal() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return sectionRef;
}
