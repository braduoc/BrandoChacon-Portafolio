import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ContactProps {
  config: {
    contact_email: string;
    github_url: string;
    linkedin_url: string;
    accent_color: string;
  };
}


const Contact: React.FC<ContactProps> = ({ config }) => {
  const [copied, setCopied] = useState(false);
  const fadeUpRef = useIntersectionObserver();
  const handleCopyEmail = async () => {
  try {
    await navigator.clipboard.writeText(config.contact_email);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  } catch (err) {
    console.error("Error copiando email:", err);
  }
};

  return (
    <section id="contact" className="px-6 py-24 max-w-3xl mx-auto relative z-10">
      <div className="text-center fade-up" ref={fadeUpRef}>
        {/* Línea decorativa superior */}
        <div className="section-line mb-4 mx-auto"></div>

        <h2 className="text-3xl font-bold mb-3 text-white">Hablemos</h2>
        <p className="text-sm mb-10" style={{ color: 'var(--muted)' }}>
          ¿Tienes un proyecto en mente? Me encantaría escucharte.
        </p>

        {/* Tarjeta de cristal (Glassmorphism) centrada */}
        <div className="glass-card rounded-xl w-full py-8 max-w-80 inline-flex flex-col items-center gap-6">

         <div className="flex items-center gap-2" style={{ color: 'var(--muted)' }}>
  
  <span className="text-sm">
    {config.contact_email}
  </span>

  {/* Botón copiar */}
  <button
    onClick={handleCopyEmail}
    className="p-1 rounded-md hover:bg-white/10 transition"
    title="Copiar email"
  >
    {copied ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="9" y="9" width="13" height="13" rx="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
    )}
  </button>

</div>
        

        {/* Botones de Redes Sociales */}
        <div className="flex gap-4">
          {/* GitHub */}
          <a
            href={config.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href={config.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    </section >
  );
};

export default Contact;