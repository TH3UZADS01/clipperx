"use client";


import { useState } from "react";
import { users } from "@/lib/users";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      setMessage("Email ou senha incorretos!");
      return;
    }

    setMessage(`Bem-vindo, ${user.name}!`);
  }

  return (
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
}