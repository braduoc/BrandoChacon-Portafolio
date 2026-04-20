import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AboutProps {
  config: {
    about_text: string;
    font_size?: number;
  };
}

const About: React.FC<AboutProps> = ({ config }) => {
  const fadeUpRef = useIntersectionObserver();
  const baseSize = config.font_size || 16;

  return (
    <section id="about" className="px-6 py-24 max-w-3xl mx-auto relative z-10">
      {/* Contenedor animado */}
      <div className="fade-up" ref={fadeUpRef}>
        {/* Línea decorativa superior */}
        <div
          className="section-line mb-4"
          style={{
            width: '40px',
            height: '2px',
            background: 'linear-gradient(90deg, var(--accent) 0%, transparent 100%)'
          }}
        ></div>
        <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">
          Sobre mí
        </h2>

        {/* Tarjeta con efecto de cristal */}
        <div className="glass-card rounded-xl p-8 md:p-10">
          <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">
          Hola, soy Brando 👋
        </h2>
          <p
            className="leading-relaxed text-slate-400"
            style={{
              fontSize: `${baseSize * 1.05}px`
            }}
          >
            {config.about_text}
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;