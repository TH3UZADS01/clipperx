export function Header() {
  return (
    <header className=" text-white w-full fixed top-0 left-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-lg sm:text-2xl lg:text-4xl font-bold tracking-wide">
          Clipper<span className="text-indigo-800">X</span>
        </h1>

        <ul className="flex gap-3 sm:gap-5 text-xs sm:text-base">
          <li className="hover:text-indigo-800 transition">Home</li>
          <li className="hover:text-indigo-800 transition">Agendar</li>
          <li className="hover:text-indigo-800 transition">Loja</li>
          <li className="hover:text-indigo-800 transition">Contato</li>
        </ul>
      </nav>
    </header>
  );
}
