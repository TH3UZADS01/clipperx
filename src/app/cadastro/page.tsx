"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setMessage(
      `Usuário (exemplo):\nNome: ${form.name}\nEmail: ${form.email}`
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Cadastro</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        /><br /><br />

        <input
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        /><br /><br />

        <input
          placeholder="Senha"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        /><br /><br />

        <button type="submit">Cadastrar</button>
      </form>

      <pre>{message}</pre>
    </div>
  );
}