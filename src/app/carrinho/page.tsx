"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Carrinho() {
  const [items, setItems] = useState([
    {
      name: "Tesoura Premium",
      price: 59.9,
      img: "/S1.jpg",
      qty: 1,
    },
    {
      name: "Máquina Fade Pro",
      price: 199.9,
      img: "/S2.jpg",
      qty: 1,
    },
  ]);

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <section
      className="min-h-screen text-gray-100 bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: "url('/bgAbout.png')" }}
    >
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10 bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-full max-w-2xl border border-white/20">

        {/* BOTÃO VOLTAR */}
        <Link
          href="/"
          className="inline-block mb-4 px-4 py-2 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition"
        >
          ← Voltar para Home
        </Link>

        {/* TÍTULO */}
        <h1 className="text-3xl font-extrabold text-center mix-blend-color-dodge">
          Carrinho
        </h1>

        <p className="text-center text-gray-300 mt-1">
          Itens selecionados para compra
        </p>

        {/* LISTA DE ITENS */}
        <div className="mt-6 space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center bg-black/20 border border-white/20 rounded-xl p-4 gap-4"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={100}
                height={100}
                className="w-20 h-20 rounded-lg object-cover"
              />

              <div className="flex-1">
                <h2 className="font-semibold text-lg mix-blend-color-dodge">
                  {item.name}
                </h2>
                <p className="text-gray-300 text-sm">
                  Quantidade: {item.qty}
                </p>
                <p className="text-indigo-400 font-bold text-md mt-1">
                  R$ {item.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* TOTAL */}
        <div className="mt-6 text-center">
          <p className="text-xl font-bold text-indigo-400">
            Total: R$ {total.toFixed(2)}
          </p>
        </div>

        {/* BOTÕES */}
        <div className="mt-6 flex flex-col gap-4">
          <button
            className="w-full py-3 bg-gradient-to-r from-[#0E063F] to-[#3926B1] text-white font-bold rounded-xl hover:scale-[1.02] transition shadow-lg"
          >
            Finalizar compra
          </button>

          <Link
            href="/#Shop"
            className="w-full py-3 text-center bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition"
          >
            Continuar comprando
          </Link>
        </div>

      </div>
    </section>
  );
}