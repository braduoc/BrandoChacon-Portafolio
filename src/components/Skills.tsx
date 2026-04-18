import { useEffect, useRef, useState } from "react";

type SkillProps = {
  name: string;
  level: "Solid" | "Strong" | "Advanced" | "Expert";
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const skills: SkillProps[] = [
    { name: "React", level: "Expert" },
    { name: "Node.js", level: "Strong" },
    { name: "TypeScript", level: "Strong" },
    { name: "Tailwind", level: "Advanced" },
    { name: "MongoDB", level: "Solid" }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold  mb-4 text-center text-white">
          Habilidades
        </h2>

        <div className="rainbow-line w-24 mx-auto mb-12 h-1 rounded-full"></div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {skills.map((skill) => (
            <Skill key={skill.name} {...skill} visible={visible} />
          ))}

        </div>
      </div>
    </section>
  );
}

function Skill({
  name,
  level,
  visible
}: SkillProps & { visible: boolean }) {
  return (
    <div
      className="glass rounded-2xl p-5 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(20px)"
      }}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="font-medium text-white">{name}</span>

        <span className={`text-xs px-3 py-1 rounded-full ${getColor(level)}`}>
          {level}
        </span>
      </div>

      <div className="h-2 bg-stone-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${getBarColor(level)}`}
          style={{ width: visible ? "100%" : "0%" }}
        />
      </div>
    </div>
  );
}

function getColor(level: string) {
  switch (level) {
    case "Expert":
      return "bg-purple-600";
    case "Strong":
      return "bg-blue-600";
    case "Advanced":
      return "bg-green-600";
    default:
      return "bg-stone-600";
  }
}

function getBarColor(level: string) {
  switch (level) {
    case "Expert":
      return "bg-gradient-to-r from-purple-500 to-pink-500";
    case "Strong":
      return "bg-gradient-to-r from-blue-500 to-cyan-500";
    case "Advanced":
      return "bg-gradient-to-r from-green-500 to-emerald-500";
    default:
      return "bg-stone-500";
  }
}