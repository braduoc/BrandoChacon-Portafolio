import { useEffect, useRef } from 'react';

type Star = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  opacity: number;
  baseOpacity: number;
  pulseSpeed: number;
};

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const stars: Star[] = [];
    const STAR_COUNT = 200;

    function resizeCanvas() {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Crear estrellas iniciales
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.1,
        baseOpacity: Math.random() * 0.5 + 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.01
      });
    }

    function drawStars() {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        
        // Efecto de parpadeo suave
        s.opacity = s.baseOpacity + Math.sin(Date.now() * s.pulseSpeed * 0.001) * 0.2;
        
        // Color basado en slate-400 (original: #94a3b8)
        ctx.fillStyle = `rgba(148, 163, 184, ${Math.max(0.05, s.opacity)})`;
        ctx.fill();
        
        // Movimiento
        s.x += s.vx;
        s.y += s.vy;
        
        // Reposicionar si salen de la pantalla (Loop infinito)
        if (s.x < -10) s.x = canvas.width + 10;
        if (s.x > canvas.width + 10) s.x = -10;
        if (s.y < -10) s.y = canvas.height + 10;
        if (s.y > canvas.height + 10) s.y = -10;
      }
      requestAnimationFrame(drawStars);
    }

    const animationId = requestAnimationFrame(drawStars);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      id="starfield"
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default Starfield;