import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass">
      
      {/* CONTENIDO */}
      <div className="px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-lg">Br</span>

        <nav className="hidden md:flex gap-6">
          <a href="#about">Sobre mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          <Menu size={22} />
        </button>
      </div>

      {/* 🔥 LINEA ARCOIRIS (LA QUE TE FALTA) */}
      <div className="rainbow-line w-full"></div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black p-4 flex flex-col gap-3">
          <a href="#about">Sobre mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
          
        </div>
      )}
    </header>
  );
}