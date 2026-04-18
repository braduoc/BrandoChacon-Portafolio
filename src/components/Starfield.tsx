import { useEffect, useRef } from "react";

export default function Starfield() {
  const starfieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const starfield = starfieldRef.current;
    if (!starfield) return;

    starfield.innerHTML = ""; // 🔥 limpia antes de renderizar

    const starCount = 150;

    const colors = ["", "colorful", "colorful2", "colorful3"];
    const sizes = ["small", "medium", "large"];

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");

      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];

      // 🔥 IMPORTANTE: asegúrate que SIEMPRE haya color
      const finalColor = color || "colorful";

      star.className = `star ${size} ${finalColor}`;

      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 120 - 20 + "%";

      const duration = 8 + Math.random() * 12;
      const delay = Math.random() * 5;

      star.style.animation = `float-star ${duration}s linear ${delay}s infinite`;

      starfield.appendChild(star);
    }
  }, []);

  return <div ref={starfieldRef} className="starfield"></div>;
}