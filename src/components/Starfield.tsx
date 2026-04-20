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
    const STAR_COUNT = isMobile ? 100 : 140;

    const stars: Star[] = [];
    let animationId: number;
    let lastTime = 0;

    function resizeCanvas() {
      if (!canvas || !ctx) return;

      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); 
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Crear estrellas
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1 + 0.2,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * 0.01,
        pulseDir: Math.random() > 0.5 ? 1 : -1
      });
    }

    function drawStars(time: number) {
      if (!canvas || !ctx) return;

      const fps = isMobile ? 50 : 60;
      const interval = 1000 / fps;

      if (time - lastTime < interval) {
        animationId = requestAnimationFrame(drawStars);
        return;
      }
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of stars) {
        s.opacity += s.pulse * s.pulseDir;

        if (s.opacity <= 0.1 || s.opacity >= 0.6) {
          s.pulseDir *= -1;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${s.opacity})`;
        ctx.fill();

        // Movimiento
        s.x += s.vx;
        s.y += s.vy;

        // Loop
        if (s.x < 0) s.x = window.innerWidth;
        if (s.x > window.innerWidth) s.x = 0;
        if (s.y < 0) s.y = window.innerHeight;
        if (s.y > window.innerHeight) s.y = 0;
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