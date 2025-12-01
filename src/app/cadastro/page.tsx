"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("As senhas não são iguais!");
      return;
    }

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.message || "Erro ao cadastrar.");
      return;
    }

    router.push("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#12081F] to-[#24104F] px-4">
      
      <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-[0_0_25px_rgba(113,92,244,0.4)]">
        
        <h1 className="text-3xl font-extrabold text-center text-white mb-6">
          Criar Conta
        </h1>

        {error && (
          <p className="text-red-400 text-sm mb-3 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Nome completo"
            className="p-3 rounded-lg bg-white/5 text-white border border-white/20 placeholder-gray-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="E-mail"
            className="p-3 rounded-lg bg-white/5 text-white border border-white/20 placeholder-gray-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Senha"
            className="p-3 rounded-lg bg-white/5 text-white border border-white/20 placeholder-gray-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirmar senha"
            className="p-3 rounded-lg bg-white/5 text-white border border-white/20 placeholder-gray-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 outline-none"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="
              bg-purple-600 hover:bg-purple-700 
              transition-all p-3 rounded-lg text-white font-semibold
              shadow-[0_0_15px_rgba(113,92,244,0.5)]
            "
          >
            Criar Conta
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-300">
          Já tem conta?{" "}
          <a href="/login" className="text-purple-400 underline">
            Fazer login
          </a>
        </p>
      </div>
    </div>
  );
}

