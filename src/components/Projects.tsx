import { ShoppingCart, BarChart3, MessageCircle, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 px-6">
  <div className="max-w-6xl mx-auto reveal">

    <h2 className="text-3xl font-bold mb-4 text-center text-white">
      Proyectos Destacados
    </h2>

        <div className="rainbow-line w-24 mx-auto mb-12 h-1 rounded-full"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* PROJECT 1 */}
          <div className=" glass rounded-2xl overflow-hidden transition hover:-translate-y-2">

            {/* IMAGE */}
            <div className="h-44 bg-stone-800 flex items-center justify-center text-stone-500">
              Imagen Proyecto
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <div className="flex items-center gap-2">
                <ShoppingCart size={20} />
                <h3 className="font-semibold text-lg">E-Commerce</h3>
              </div>

              <p className="text-sm text-stone-400 mt-2">
                Tienda online completa con carrito y pagos
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="tag-red px-3 py-1 text-xs rounded-full">React</span>
                <span className="tag-blue px-3 py-1 text-xs rounded-full">Node.js</span>
                <span className="tag-green px-3 py-1 text-xs rounded-full">MongoDB</span>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-5">
                                <a className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg bg-purple-900 hover:bg-purple-700 transition">

                  GitHub
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition"
                >
                  <ExternalLink size={14} />
                  Deploy
                </a>
              </div>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className=" glass rounded-2xl overflow-hidden transition hover:-translate-y-2 ">

            <div className="h-44 bg-stone-800 flex items-center justify-center text-stone-500">
              Imagen Dashboard
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2">
                <BarChart3 size={20} />
                <h3 className="font-semibold text-lg">Dashboard</h3>
              </div>

              <p className="text-sm text-stone-400 mt-2">
                Panel de métricas en tiempo real
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="tag-blue px-3 py-1 text-xs rounded-full">React</span>
                <span className="tag-green px-3 py-1 text-xs rounded-full">Firebase</span>
                <span className="tag-violet px-3 py-1 text-xs rounded-full">Charts</span>
              </div>

              <div className="flex gap-3 mt-5">
                <a className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg bg-purple-900 hover:bg-purple-700 transition">
                GitHub
                </a>

                <a className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition">
                  <ExternalLink size={14} /> Deploy
                </a>
              </div>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className=" glass rounded-2xl overflow-hidden transition hover:-translate-y-2 ">

            <div className="h-44 bg-stone-800 flex items-center justify-center text-stone-500">
              Imagen Chat App
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2">
                <MessageCircle size={20} />
                <h3 className="font-semibold text-lg">Chat App</h3>
              </div>

              <p className="text-sm text-stone-400 mt-2">
                Mensajería en tiempo real
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="tag-red px-3 py-1 text-xs rounded-full">Socket.io</span>
                <span className="tag-blue px-3 py-1 text-xs rounded-full">React</span>
                <span className="tag-green px-3 py-1 text-xs rounded-full">Node.js</span>
              </div>

              <div className="flex gap-3 mt-5">
                <a className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg bg-purple-900 hover:bg-purple-700 transition">
               GitHub
                </a>

                <a className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition">
                  <ExternalLink size={14} /> Deploy
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}