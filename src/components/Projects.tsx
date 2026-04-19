import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import ProjectCard from './ProjectCard'; // Importamos el componente que definimos antes

interface Project {
  title: string;
  desc: string;
  icon: string;
  tags: string[];
  gradient: string;
}

// Tus datos de proyectos
const PROJECTS_DATA: Project[] = [
  {
    title: 'SaaS Dashboard',
    desc: 'Panel analítico en tiempo real con gráficas interactivas y gestión de equipos.',
    icon: 'layout',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    gradient: 'from-indigo-600 via-purple-600 to-indigo-900'
  },
  {
    title: 'E-Commerce Platform',
    desc: 'Marketplace completo con pasarela de pagos, carrito y panel de vendedor.',
    icon: 'shopping-bag',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    gradient: 'from-emerald-500 via-teal-600 to-emerald-900'
  },
  {
    title: 'AI Content Engine',
    desc: 'Herramienta de generación de contenido con IA, flujos automatizados y API REST.',
    icon: 'cpu',
    tags: ['Python', 'FastAPI', 'OpenAI'],
    gradient: 'from-amber-500 via-orange-600 to-red-900'
  }
];

const Projects: React.FC = () => {
  const headerRef = useIntersectionObserver();

  return (
    <section id="projects" className="px-6 py-24 max-w-5xl mx-auto">
      {/* Título de Sección animado con el Hook */}
      <div ref={headerRef} className="mb-12 fade-up">
        {/* Línea decorativa de acento */}
        <div
          className="section-line mb-4"
          style={{
            width: '40px',
            height: '2px',
            background: 'linear-gradient(90deg, var(--accent) 0%, transparent 100%)'
          }}
        ></div>        <h2 className="text-3xl font-bold mb-2 text-white tracking-tight">Proyectos</h2>
        <p className="text-sm text-slate-500 font-medium">Trabajo seleccionado</p>
      </div>

      {/* Grid de Proyectos: se adapta de 1 col en móvil a 3 en desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((proj, idx) => (
          <ProjectCard
            key={idx}
            project={proj}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;