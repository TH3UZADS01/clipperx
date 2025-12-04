"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

// usuários fake
const usersFake = [
  { email: "admin@email.com", password: "123456" },
  { email: "helder@example.com", password: "789456" },
];

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const userFound = usersFake.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      alert("Login realizado com sucesso!");
      router.push("/");
    } else {
      alert("Email ou senha incorretos!");
    }
  }

  return (
    <div
      className="
        min-h-screen flex items-center justify-center 
        bg-gradient-to-b from-black via-[#0b0b17] to-[#1a1440]
        text-white px-4
      "
    >

      <div
        className="
          w-full max-w-sm p-8 rounded-2xl backdrop-blur-xl
          bg-white/5 border border-white/10 shadow-2xl
        "
      >
        <h1 className="text-3xl font-extrabold text-center tracking-wide mb-6">
          ClipperX
        </h1>

        <h2 className="text-xl font-semibold text-center mb-6 text-purple-300">
          Entrar na sua conta
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-2">
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="
                p-3 rounded-lg bg-black/30 border border-white/10 
                focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50
                outline-none transition
              "
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-sm text-gray-300">Senha</label>
            <input
              type="password"
              placeholder="••••••••"
              className="
                p-3 rounded-lg bg-black/30 border border-white/10 
                focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50
                outline-none transition
              "
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="
              bg-gradient-to-r from-purple-600 to-purple-800 
              py-3 rounded-lg font-bold tracking-wide
              hover:opacity-90 transition
              shadow-lg shadow-purple-700/30
            "
          >
            Entrar
          </button>
        </form>

        <p className="mt-5 text-sm text-center text-gray-300">
          Não tem conta?{" "}
          <a
            href="/cadastro"
            className="text-purple-400 hover:text-purple-300 underline"
          >
            Criar uma conta
          </a>
        </p>
      </div>
    </div>
  );
}















//estrutura abaixo antiga
/*  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <button type="submit">Entrar</button>
      </form>

      <p>{message}</p>
    </div>
  );
}*/