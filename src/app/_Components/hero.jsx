"use client";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="Hero"
      className="
        text-grey-200
        relative overflow-hidden h-screen
        flex items-center justify-center 
        bg-cover bg-center text-gray-200
        animate-fade-bg z-10
      "
      style={{ backgroundImage: "url('/Bg.jpg')" }}
    >

      <div className="absolute inset-0 bg-black/60 animate-bg-fade -z-10"></div>

      <div className="text-center">
        <h1
          className="
            mix-blend-color-dodge font-extrabold mt-6
            text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] 
            xl:text-[12rem] 2xl:text-[14rem] leading-none
            animate-slide-down
          "
        >
          ClipperX
        </h1>

        <p
          className="
          mt-20 px-6
          text-base sm:text-lg lg:text-2xl font-sans
          animate-fade-up
  "
        >
          A plataforma moderna para barbearias e clientes que buscam
          praticidade e excelência.
        </p>

      </div>
    </section>
  );
}
