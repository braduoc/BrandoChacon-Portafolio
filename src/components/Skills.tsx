import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import SkillChip from './SkillChip';

const SKILLS_DATA = [
  { name: 'JavaScript', type: 'JavaScript' }, // Usamos los nombres de los iconos originales
  { name: 'TypeScript', type: 'TypeScript' },
  { name: 'React', type: 'React' },
  { name: 'Next.js', type: 'Next.js' },
  { name: 'Node.js', type: 'Node.js' },
  { name: 'Tailwind CSS', type: 'Tailwind CSS' },
  { name: 'PostgreSQL', type: 'PostgreSQL' },
  { name: 'MongoDB', type: 'MongoDB' },
  { name: 'AWS', type: 'AWS' },
  { name: 'Docker', type: 'Docker' },
  { name: 'Git', type: 'Git' },
  { name: 'Figma', type: 'Figma' }
];

interface SkillsProps {
  config: {
    accent_color: string;
  };
}

const Skills: React.FC<SkillsProps> = () => {
  const headerRef = useIntersectionObserver();

  return (
    <section id="skills" className="px-6 py-24 max-w-5xl mx-auto relative z-10">
      {/* Cabecera idéntica al original */}
      <div ref={headerRef} className="mb-12 fade-up" style={{ animationDelay: '0.1s' }}>
        <div className="section-line mb-4"></div>
        <h2 className="text-3xl font-bold mb-2 text-white">Tecnologías</h2>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          Stack técnico
        </p>
      </div>

      {/* Grid con espaciado original (gap-3) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {SKILLS_DATA.map((skill, idx) => (
          <SkillChip 
            key={idx} 
            skill={skill} 
            index={idx} 
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;