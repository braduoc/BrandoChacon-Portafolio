import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-xl mx-auto ">

        <h2 className="text-3xl font-bold mb-4 text-center text-white">
        ¿Trabajamos juntos?

    </h2>

        <div className="rainbow-line w-24 mx-auto mb-8 rounded-full"></div>
        <form
          onSubmit={handleSubmit}
          className="glass p-6 rounded-2xl space-y-4 text-left"
        >

          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 rounded-lg bg-stone-900 border border-stone-800 text-white outline-none focus:border-purple-500 transition"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-stone-900 border border-stone-800 text-white outline-none focus:border-purple-500 transition"
          />

          <textarea
            placeholder="Mensaje"
            rows={4}
            className="w-full p-3 rounded-lg bg-stone-900 border border-stone-800 text-white outline-none focus:border-purple-500 transition resize-none"
          />

          <button
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition font-medium"
          >
            Enviar mensaje
          </button>

          {sent && (
            <p className="text-green-400 text-sm text-center">
              ✔ Mensaje enviado correctamente
            </p>
          )}

        </form>
      </div>
    </section>
  );
}