import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Senior Full Stack Developer',
    period: '2022 — Presente',
    description: 'Liderazgo de equipo en el desarrollo de microservicios escalables y optimización de rendimiento frontend.'
  },
  {
    company: 'Creative Agency',
    role: 'Frontend Developer',
    period: '2020 — 2022',
    description: 'Diseño e implementación de interfaces interactivas y animaciones complejas para clientes internacionales.'
  },
  {
    company: 'Startup Hub',
    role: 'Junior Web Developer',
    period: '2018 — 2020',
    description: 'Desarrollo de MVPs y mantenimiento de aplicaciones web utilizando el stack MERN.'
  }
];

const ExperienceCard: React.FC<{ item: ExperienceItem; index: number; accentColor: string }> = ({ item, index, accentColor }) => {
  const ref = useIntersectionObserver();

  return (
    <div 
      ref={ref} 
      className="relative pl-8 pb-12 last:pb-0 scroll-fade-left"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Línea vertical del Timeline */}
      <div className="absolute left-[11px] top-0 h-full w-[2px] bg-white/5"></div>
      
      {/* Punto de acento en el Timeline */}
      <div 
        className="absolute left-0 top-2 w-6 h-6 rounded-full border-4 border-[#0a0e17] z-10"
        style={{ backgroundColor: accentColor }}
      ></div>

      {/* Tarjeta de Experiencia */}
      <div className="glass-card rounded-xl p-6 hover:translate-x-2 transition-transform duration-300">
        <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1 block" style={{ color: accentColor }}>
          {item.period}
        </span>
        <h3 className="text-xl font-bold text-white">{item.role}</h3>
        <p className="text-sm font-medium mb-3 opacity-80" style={{ color: accentColor }}>
          {item.company}
        </p>
        <p className="text-sm text-slate-400 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const Experience: React.FC<{ config: { accent_color: string } }> = ({ config }) => {
  const headerRef = useIntersectionObserver();

  return (
    <section id="experience" className="px-6 py-24 max-w-4xl mx-auto">
      {/* Cabecera */}
      <div ref={headerRef} className="mb-12 fade-up">
        <div 
          className="w-10 h-[2px] mb-4" 
          style={{ background: `linear-gradient(90deg, ${config.accent_color}, transparent)` }}
        ></div>
        <h2 className="text-3xl font-bold mb-2 text-white">Experiencia</h2>
        <p className="text-sm text-slate-500">Trayectoria profesional</p>
      </div>

      {/* Contenedor del Timeline */}
      <div className="mt-8">
        {EXPERIENCE_DATA.map((item, idx) => (
          <ExperienceCard 
            key={idx} 
            item={item} 
            index={idx} 
            accentColor={config.accent_color} 
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;