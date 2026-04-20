import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavProps {
  config: {
    developer_name: string;
    accent_color: string;
    background_color: string;
  };
}

const Nav: React.FC<NavProps> = ({ config }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // cerrar menú al navegar
    }
  };

  const navBackground = {
    background: 'rgba(10, 14, 23, 0.8)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={navBackground}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <span
          className="text-sm font-semibold tracking-widest uppercase cursor-pointer"
          style={{ color: config.accent_color }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Portfolio
        </span>

        {/* Desktop */}
        <div className="hidden sm:flex gap-6 text-sm">
          <button onClick={() => scrollToSection('projects')} className="text-slate-400 hover:text-white transition">
            Proyectos
          </button>
          <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-white transition">
            Sobre mí
          </button>
          <button onClick={() => scrollToSection('skills')} className="text-slate-400 hover:text-white transition">
            Tecnologías

          </button>
          <button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-white transition">
            Contacto
          </button>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="sm:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden  mt-4 px-4 p-4 flex flex-col gap-4  bg-[#0a0e17]/95 backdrop-blur-xl rounded-xl">
          <button onClick={() => scrollToSection('projects')} className="text-slate-400 hover:text-white transition">
            Proyectos
          </button>
          <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-white transition">
            Sobre mí
          </button>
          <button onClick={() => scrollToSection('skills')} className="text-slate-400 hover:text-white transition">
            Tecnologías

          </button>
          <button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-white transition">
            Contacto
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;