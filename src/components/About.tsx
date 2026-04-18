export default function About() {
  return (
    <section id="about" className="py-12 px-6">
      <div className="max-w-4xl mx-auto reveal">
        <h2 className="text-3xl text-center font-bold mb-6">Sobre mí</h2>
        <div className="rainbow-line w-24 mx-auto mb-12 h-1 rounded-full"></div>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="flex justify-center md:justify-start">
            <div className="w-44 h-44 glass rounded-3xl flex items-center justify-center bg-stone-800">
              👤
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-stone-300 leading-relaxed text-lg">
              Soy un desarrollador Full Stack apasionado por construir aplicaciones web completas,
              escalables y con una experiencia de usuario excepcional.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="tag-red px-3 py-1 rounded-full text-xs">Creativo</span>
              <span className="tag-blue px-3 py-1 rounded-full text-xs">Detallista</span>
              <span className="tag-green px-3 py-1 rounded-full text-xs">Colaborativo</span>
              <span className="tag-violet px-3 py-1 rounded-full text-xs">Autodidacta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}