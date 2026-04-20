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
    demoUrl: string;
    repoUrl: string;
  };
  index: number;
}
const techColors: Record<string, string> = {
  // Lenguajes
  javascript: '#f7df1e',
  typescript: '#3178c6',
  python: '#3776ab',
  java: '#f89820',
  csharp: '#9b4f96',
  php: '#8892be',

  // Frontend
  react: '#61dafb',
  next: '#ffffff',
  vue: '#42b883',
  angular: '#dd0031',
  svelte: '#ff3e00',

  // Estilos
  html: '#e34c26',
  css: '#264de4',
  sass: '#cc6699',
  tailwind: '#38bdf8',
  bootstrap: '#7952b3',

  // Backend
  node: '#3c873a',
  express: '#444444',
  nest: '#e0234e',

  // Bases de datos
  mongodb: '#4db33d',
  mysql: '#00758f',
  postgres: '#336791',
  firebase: '#ffca28',

  // DevOps / herramientas
  git: '#f1502f',
  github: '#0d1117',
  docker: '#2496ed',
  aws: '#ff9900',
  vercel: '#000000',
  netlify: '#00c7b7',

  // Otros
  graphql: '#e535ab',
  redux: '#764abc',
  prisma: '#0c344b',
  fastapi: '#009688',
  openai: '#10a37f',

};
const ProjectCard: React.FC<ProjectProps> = ({ project, index, }) => {
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
      <div className={`h-50 } flex items-center justify-center relative overflow-hidden`}>
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

        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag, i) => {
            const color = techColors[tag.toLowerCase()] || '#64748b'; // fallback slate

            return (
              <span
                key={i}
                className="text-[10px] px-2 py-1 rounded uppercase tracking-widest font-medium"
                style={{
                  background: `${color}20`, // color con transparencia
                  border: `1px solid ${color}40`,
                  color: color
                }}
              >
                {tag}
              </span>
            );
          })}
        </div>
        <div className="flex items-center justify-between mt-6">

          {/* GitHub */}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-md text-xs transition-all duration-300 hover:scale-105"
            style={{
              background: '#7c3aed', // morado moderno (tailwind violet-600)
              color: 'white'
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            Código
          </a>

          {/* Demo */}
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-md text-xs font-medium transition-all duration-300 hover:scale-105"
            style={{
              background: project.gradient.includes('indigo')
                ? '#6366f1'
                : '#0ea5e9', // fallback
              color: 'white'
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 3h7v7" />
              <path d="M10 14 21 3" />
              <path d="M21 14v7h-7" />
              <path d="M3 10v11h11" />
            </svg>
            Demo
          </a>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;