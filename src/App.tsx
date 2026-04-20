import { useEffect } from "react";

// Componentes
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Starfield from "./components/Starfield";

// Estilos
import "./App.css";

// ⚙️ Configuración centralizada del Portafolio
const portfolioConfig = {
  developer_name: "Brando Chacon",
  developer_title: "Full Stack Developer",
  hero_tagline: "Construyo experiencias digitales escalables, modernas y con atención obsesiva al detalle.",
  about_text: "Soy un desarrollador full stack con +5 años de experiencia construyendo productos digitales de alto impacto. Me especializo en arquitecturas modernas, APIs escalables y interfaces que los usuarios aman. Creo en el código limpio, el diseño intencionado y la mejora continua.",
  contact_email: "brandochacon.js@gmail.com",
  github_url: "https://github.com/braduoc",
  linkedin_url: "linkedin.com/in/brandochacon/",
  accent_color: "#6366f1", // Color Indigo de Tailwind
  background_color: "#0a0e17",
  font_size: 16
};

export default function App() {
  useEffect(() => {
    // 👇 Lógica de Scroll Reveal optimizada para React
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Usamos 'in-view' que es la clase que definimos en el CSS global
            entry.target.classList.add("in-view");
          }
        });
      },
      { 
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px" // Dispara la animación un poco antes de que llegue al viewport
      }
    );

    // Seleccionamos todos los elementos con clases de animación
    const elements = document.querySelectorAll(".fade-up, .scroll-scale, .scroll-fade-left");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#040011] px-2 text-slate-100  overflow-x-hidden selection:bg-indigo-500/30">
      
      {/* 🌌 Fondo animado (Canvas) */}
      <Starfield />

      {/* 🧭 Navegación (Sticky) */}
      <Nav config={portfolioConfig} />

      {/* 🚀 Contenido Principal */}
      <main className="relative z-10">
        
        <Hero config={portfolioConfig} />

        <About config={portfolioConfig} />

        <Projects />

        <Skills config={portfolioConfig} />

        <Experience config={portfolioConfig} />

        <Contact config={portfolioConfig} />

      </main>
      
      <footer className="py-8 text-center text-slate-600 text-xs tracking-widest uppercase border-t border-white/5">
        © {new Date().getFullYear()} Brando Chacon. 
      </footer>

    </div>
  );
}