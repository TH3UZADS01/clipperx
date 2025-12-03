"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProdutoMaquina() {
  const router = useRouter();

  return (
    <section
      className="min-h-screen text-gray-100 bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: "url('/bgAbout.png')" }}
    >
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10 bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-full max-w-lg border border-white/20">

        <button
          onClick={() => router.push("/")}
          className="mb-4 py-2 px-4 bg-black/40 text-gray-200 rounded-lg hover:bg-black/60 transition"
        >
          ← Voltar
        </button>

        <div className="text-center">
          <Image
            src="/S2.jpg"
            width={900}
            height={600}
            alt="Máquina Fade Pro"
            className="w-full h-48 rounded-xl object-cover mb-4"
          />

          <h1 className="text-3xl font-extrabold mix-blend-color-dodge">
            Máquina Fade Pro
          </h1>

          <p className="mt-2 text-gray-300 text-sm">
            Corte limpo, silencioso e preciso.
          </p>

          <p className="text-indigo-400 font-bold text-xl mt-3">R$ 199,90</p>
        </div>

        <div className="mt-6 space-y-3">
          <button className="w-full py-3 bg-gradient-to-r from-[#0E063F] to-[#3926B1] text-white font-bold rounded-xl hover:scale-[1.02] transition shadow-lg">
            Comprar Agora
          </button>

          <button className="w-full py-3 bg-black/40 border border-white/20 text-gray-200 font-semibold rounded-xl hover:bg-black/60 transition">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </section>
  );
}