"use client";

import { useRef } from "react";
import Image from "next/image";

export function Barber() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollLeft += dir === "right" ? amount : -amount;
  };

  const barbers = [
    { 
      name: "Barbearia do Zé", 
      img: "/B1.jpg",
      desc: "Especializada em cortes clássicos e barba premium."
    },
    { 
      name: "Barbearia Ribeiro", 
      img: "/B2.jpg",
      desc: "Excelência em degradê e barba e visual moderno"
    },
    { 
      name: "Barbearia Neiva", 
      img: "/B3.jpg",
      desc: "Cortes modernos com acabamento detalhado."
    },
    { 
      name: "Barbearia A Banca", 
      img: "/B4.jpg",
      desc: "Estilo urbano, fade impecável e atendimento top."
    },
  ];

  return (
    <section
      className="relative py-28 text-gray-100 bg-cover bg-center"
      style={{ backgroundImage: "url('/bgAbout.png')" }}
    >
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10 px-10">
        <h2 className="text-3xl sm:text-5xl lg:6xl font-extrabold text-center mix-blend-color-dodge drop-shadow-xl">
          Barbearias Disponíveis
        </h2>

        <p className="mt-6 text-center text-base sm:text-lg lg:text-xl opacity-90">
          Escolha a barbearia ideal para você.
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
            {barbers.map((barb, i) => (
              <div
                key={i}
                className="min-w-[270px] bg-white/10 backdrop-blur-xl p-5 rounded-2xl shadow-lg border border-white/10 hover:scale-[1.03] transition"
              >

                {/* IMAGEM — total responsiva e sem px */}
                <div className="w-full h-40 sm:h-44 md:h-48 lg:h-52 overflow-hidden rounded-xl">
                  <Image
                    src={barb.img}
                    alt={barb.name}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-semibold mt-4 mix-blend-color-dodge">
                  {barb.name}
                </h3>

                <p className="text-gray-300 text-sm mt-1">
                  {barb.desc}
                </p>

                <button
                  className="mt-4 w-full py-2 bg-gradient-to-r from-[#0E063F] to-[#3926B1] 
                  text-white font-semibold rounded-xl 
                  hover:scale-105 hover:shadow-[0_0_18px_rgba(113,92,244,0.5)]
                  transition-all duration-300"
                >
                  Agendar agora
                </button>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
