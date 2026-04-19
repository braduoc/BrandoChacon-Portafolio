import { useEffect, useRef } from 'react';

export function useIntersectionObserver() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // Una vez que se ve, dejamos de observar para ahorrar recursos
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.15, 
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return ref;
}