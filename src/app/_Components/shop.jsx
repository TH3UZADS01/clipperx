"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowButtons } from "./ArrowButtons";

export function Shop() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollLeft += dir === "right" ? amount : -amount;
  };

  const products = [
    {
      name: "Tesoura Premium",
      img: "/S1.jpg",
      desc: "Aço japonês, precisão profissional.",
      price: "R$ 59,90",
      link: "/produto/tesoura",
    },
    {
      name: "Máquina Fade Pro",
      img: "/S2.jpg",
      desc: "Corte limpo e silencioso.",
      price: "R$ 199,90",
      link: "/produto/maquina",
    },
    {
      name: "Pente Gradiente",
      img: "/S3.jpg",
      desc: "Perfeito para fade e topo.",
      price: "R$ 29,90",
      link: "/produto/pente",
    },
    {
      name: "Balm para Barba",
      img: "/S4.jpg",
      desc: "Hidratação e perfume suave.",
      price: "R$ 39,90",
      link: "/produto/balm",
    },
  ];

  return (
    <section
      id="Shop"
      className="relative py-28 text-gray-100 bg-cover bg-center"
      style={{ backgroundImage: "url('/bgAbout.png')" }}
    >
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10 px-10">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-center mix-blend-color-dodge drop-shadow-xl">
          Loja / Shop
        </h2>

        <p className="mt-6 text-center text-base sm:text-lg lg:text-xl opacity-90">
          Produtos profissionais e acessórios essenciais para seu cuidado.
        </p>

        <div className="relative mt-10">
          <div
            ref={scrollRef}
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#7c3aed #0000",
            }}
            className="scrollbar-neon flex gap-8 overflow-x-auto scroll-smooth py-4 px-4 no-scrollbar"
          >
            {products.map((item, i) => (
              <div
                key={i}
                className="min-w-[270px] bg-white/10 backdrop-blur-xl p-5 rounded-2xl shadow-lg border border-white/10 hover:scale-[1.03] transition"
              >
                <div className="w-full h-40 sm:h-44 md:h-48 lg:h-52 overflow-hidden rounded-xl">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-semibold mt-4 mix-blend-color-dodge">
                  {item.name}
                </h3>

                <p className="text-gray-300 text-sm mt-1">{item.desc}</p>

                <p className="text-indigo-400 font-bold text-lg mt-2">
                  {item.price}
                </p>

                <Link href={item.link}>
                  <button
                    className="mt-4 w-full py-2 bg-gradient-to-r from-[#0E063F] to-[#3926B1] 
                    text-white font-semibold rounded-xl 
                    hover:scale-105 hover:shadow-[0_0_18px_rgba(113,92,244,0.5)]
                    transition-all duration-300"
                  >
                    Comprar agora
                  </button>
                </Link>

                <ArrowButtons scrollRef={scrollRef} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}