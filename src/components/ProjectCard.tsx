import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Definimos qué datos necesita recibir este componente
interface ProjectProps {
  project: {
    title: string;
    desc: string;
    icon: string;
    tags: string[];
    gradient: string;
  };
  index: number; // Lo usamos para el retraso de la animación
}

const ProjectCard: React.FC<ProjectProps> = ({ project, index }) => {
  const ref = useIntersectionObserver();

  return (
    <div 
      ref={ref}
      className="glass-card rounded-xl overflow-hidden scroll-scale group"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        transitionDelay: `${index * 0.1}s` 
      }}
    >
      {/* Contenedor del Icono con Gradiente */}
      <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
        {/* Efecto de brillo al pasar el mouse */}
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Icono (Placeholder con SVG similar al original) */}
        <div className="text-white transform group-hover:scale-110 transition-transform duration-500 ease-out">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="60" 
            height="60" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        </div>
      </div>

      {/* Cuerpo de la tarjeta */}
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm mb-4 text-slate-400 leading-relaxed">
          {project.desc}
        </p>

        {/* Etiquetas de Tecnología */}
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-500 uppercase tracking-widest font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;