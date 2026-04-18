import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Starfield from "./components/Starfield";

import "./App.css";
import FloatingButton from "./components/FloatingButton";

export default function App() {
  useEffect(() => {
    // 👇 Scroll reveal (igual que tu HTML original)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    // 👇 Cleanup (importante en React)
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative bg-stone-950 text-stone-100 overflow-x-hidden">
      
      {/* 🌌 Fondo estrellas */}
      <Starfield />

      {/* 🧭 Navbar */}
      <Navbar />

      {/* 🚀 Hero */}
      <Hero />

      {/* 👤 About */}
      <About />

      {/* 💼 Projects */}
      <Projects />

      {/* 📊 Skills */}
      <Skills />

      {/* 🧾 Experience */}
      <Experience />

      {/* 📬 Contact */}
      <Contact />

      {/* 🔘 Botón flotante */}
      <FloatingButton />

    </div>
  );
}