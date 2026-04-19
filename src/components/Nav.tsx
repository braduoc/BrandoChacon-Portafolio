import React from 'react';

interface NavProps {
  config: {
    developer_name: string;
    accent_color: string;
    background_color: string;
  };
}

const Nav: React.FC<NavProps> = ({ config }) => {
  // Función para hacer scroll suave a una sección por su ID
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Convertimos el color de fondo hexadecimal a RGBA para la transparencia
  // Si no quieres complicarte con la conversión, usamos un valor fijo oscuro con opacidad
  const navBackground = {
    background: 'rgba(10, 14, 23, 0.8)', // Fondo oscuro semitransparente
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4" 
      style={navBackground}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* Logo / Nombre (Primera palabra) */}
        <span 
          className="text-sm font-semibold tracking-widest uppercase cursor-pointer" 
          style={{ color: config.accent_color }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Portfolio
        </span>

        {/* Links de Navegación */}
        <div className="hidden sm:flex gap-6 text-sm">
          <button 
            onClick={() => scrollToSection('projects')} 
            className="text-slate-400 hover:text-white transition-colors duration-300"
          >
            Proyectos
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-slate-400 hover:text-white transition-colors duration-300"
          >
            Sobre mí
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className="text-slate-400 hover:text-white transition-colors duration-300"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-slate-400 hover:text-white transition-colors duration-300"
          >
            Contacto
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;