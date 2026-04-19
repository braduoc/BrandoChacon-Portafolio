import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface HeroProps {
  config: {
    developer_name: string;
    developer_title: string;
    hero_tagline: string;
    accent_color: string;
    font_size?: number;
  };
}

const Hero: React.FC<HeroProps> = ({ config }) => {
  const { displayedText } = useTypewriter(config.hero_tagline, 25);
  const baseSize = config.font_size || 16;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="text-center max-w-3xl animate-fade-up">
        {/* Badge de Disponibilidad */}
        <div
          className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs tracking-wider uppercase font-medium"
          style={{
            background: 'rgba(99, 102, 241, 0.1)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            color: 'var(--accent)'
          }}
        >
          Disponible para proyectos
        </div>

        {/* Nombre */}
        <h1 className="font-bold text-5xl md:text-7xl mb-4 leading-tight tracking-tight text-white">
          {config.developer_name}
        </h1>

        {/* Título Profesional */}
        <p
          className="font-light mb-3"
          style={{
            color: 'var(--accent)',
            fontSize: `${baseSize * 1.5}px`
          }}
        >
          {config.developer_title}
        </p>

        {/* Texto Dinámico */}
        <p
          className="mb-10 max-w-lg mx-auto leading-relaxed min-h-[3em]"
          style={{
            color: 'var(--muted)',
            fontSize: `${baseSize}px`
          }}
        >
          {displayedText}
          <span className="typing-cursor"></span>
        </p>

        {/* Botones de Acción */}
        <div className="flex gap-4 justify-center flex-wrap">
          {/* Botón Principal: Proyectos */}
          <button
            onClick={() => scrollToSection('projects')}
            className="px-7 py-3 rounded-lg text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95"
            style={{
              background: 'var(--accent)',
              boxShadow: `0 0 30px rgba(99, 102, 241, 0.3)`
            }}
          >
            Ver proyectos
          </button>

          {/* Botón Secundario: Contacto */}
          <button
            onClick={() => scrollToSection('contact')}
            className="px-7 py-3 rounded-lg text-sm font-semibold border transition-all hover:bg-white/5 active:scale-95"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              color: 'var(--text)'
            }}
          >
            Contactar
          </button>

          {/* Botón Terciario: Descargar CV */}
          <a
            href="/cv-fullstack.pdf" // Asegúrate de que el archivo esté en la carpeta /public
            download="Brando_Chacon_Desarrollador_FullStack.pdf"
            className="px-7 py-3 rounded-lg text-sm font-semibold border flex items-center gap-2 transition-all hover:border-blue-500/50 hover:bg-blue-500/5 active:scale-95"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              borderColor: 'rgba(255, 255, 255, 0.08)',
              color: 'var(--text)'
            }}
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;