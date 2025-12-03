"use client";

import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";
export function Header() {
  const router = useRouter();
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="text-white w-full fixed top-0 left-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-lg sm:text-2xl lg:text-4xl font-bold tracking-wide cursor-pointer"
          onClick={() => scrollTo("Hero")}>
          Clipper<span className="text-indigo-800">X</span>
        </h1>

        <ul className="flex gap-3 sm:gap-5 text-xs sm:text-base">
          <li
            className="hover:text-indigo-800 transition cursor-pointer"
            onClick={() => scrollTo("Hero")}
          >
            Home
          </li>

          <li
            className="hover:text-indigo-800 transition cursor-pointer"
            onClick={() => scrollTo("Barber")}
          >
            Agendar
          </li>

          <li
            className="hover:text-indigo-800 transition cursor-pointer"
            onClick={() => scrollTo("Shop")}
          >
            Loja
          </li>

          <li
            className="hover:text-indigo-800 transition cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Entrar
          </li>

        <Link href="/carrinho">
          <Image
            src="/carrinho.png"
            alt="Carrinho"
            width={24}
            height={24}
            className="cursor-pointer hover:scale-110 transition"
          />
        </Link>


      </ul>
    </nav>
    </header >
  );
}