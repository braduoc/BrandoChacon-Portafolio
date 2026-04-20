import { useEffect, useRef } from 'react';

type Star = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  opacity: number;
  pulse: number;
  pulseDir: number;
};

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const STAR_COUNT = isMobile ? 80 : 200;

    const stars: Star[] = [];
    let animationId: number;

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Crear estrellas
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * 0.02,
        pulseDir: Math.random() > 0.5 ? 1 : -1
      });
    }

    function drawStars() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);


      for (const s of stars) {
        // Parpadeo liviano (sin Date.now)
        s.opacity += s.pulse * s.pulseDir;

        if (s.opacity <= 0.1 || s.opacity >= 0.7) {
          s.pulseDir *= -1;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${s.opacity})`;
        ctx.fill();

        // Movimiento
        s.x += s.vx;
        s.y += s.vy;

        // Loop infinito
        if (s.x < -10) s.x = canvas!.width + 10;
        if (s.x > canvas!.width + 10) s.x = -10;
        if (s.y < -10) s.y = canvas!.height + 10;
        if (s.y > canvas!.height + 10) s.y = -10;
      }

      animationId = requestAnimationFrame(drawStars);
    }

    animationId = requestAnimationFrame(drawStars);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 0,
        willChange: 'transform'
      }}
    />
  );
};

export default Starfield;