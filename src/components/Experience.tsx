export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24 px-6">
      <div className="max-w-3xl mx-auto reveal">

        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Experiencia
        </h2>

        <div className="rainbow-line w-24 mx-auto mb-12 h-1 rounded-full"></div>

        {/* TIMELINE */}
        <div className="relative">

          {/* línea vertical */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-stone-800"></div>

          <div className="space-y-10">

            {/* ITEM 1 */}
            <div className="relative pl-12">

              {/* dot */}
              <div className="absolute left-[6px] top-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>

              <div className="glass p-5 rounded-2xl transition hover:scale-[1.01]">
                <p className="text-xs text-stone-400">2023 - Presente</p>

                <h3 className="text-lg font-semibold text-white mt-1">
                  Full Stack Developer
                </h3>

                <p className="text-sm text-stone-400 mt-2">
                  Desarrollo de aplicaciones web modernas, escalables y APIs.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="tag-purple px-3 py-1 text-xs rounded-full">React</span>
                  <span className="tag-blue px-3 py-1 text-xs rounded-full">Node.js</span>
                  <span className="tag-green px-3 py-1 text-xs rounded-full">MongoDB</span>
                </div>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="relative pl-12">

              {/* dot */}
              <div className="absolute left-[6px] top-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>

              <div className="glass p-5 rounded-2xl transition hover:scale-[1.01]">
                <p className="text-xs text-stone-400">2022 - 2023</p>

                <h3 className="text-lg font-semibold text-white mt-1">
                  Frontend Developer
                </h3>

                <p className="text-sm text-stone-400 mt-2">
                  Interfaces modernas, responsivas y optimizadas.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="tag-blue px-3 py-1 text-xs rounded-full">React</span>
                  <span className="tag-violet px-3 py-1 text-xs rounded-full">Tailwind</span>
                  <span className="tag-green px-3 py-1 text-xs rounded-full">UI Design</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}