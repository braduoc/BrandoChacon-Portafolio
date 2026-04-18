import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative z-10 h-180 flex items-center justify-center text-center px-6">

      <div className="max-w-3xl">

        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
          Brando Chacon
        </h1>

        <p className="text-xl md:text-2xl mb-6 text-stone-300">
          &gt; <span className="text-red-500 font-semibold">FULL STACK</span> DEVELOPER
        </p>

        <p className="mb-10 text-stone-400">
          Creo aplicaciones web modernas, rápidas y escalables con tecnologías actuales.
        </p>

        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-red-500 to-orange-500 hover:opacity-90 transition"
        >
          Ver proyectos <ArrowRight size={16} />
        </a>

      </div>

    </section>
  );
}