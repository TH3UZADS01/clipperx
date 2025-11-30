//projeto feito em .tsx ou seja (HTML + CSS [tailwind] + TYPESCIPT)

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


//criação de acessos para simulação de um login
const usersFake = [
{ email: "admin@email.com", password: "123456" },
{ email: "helder@example.com", password: "789456" },];


//Isso cria uma função React que representa uma página.
export default function LoginPage() {
   
  const router = useRouter();
  
  // estados para guardar o email e senha digitados
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    
    // a constante vai verificar se o login e valido e retornar uma mengsagem em alert
    const userFound = usersFake.find(
      (user) => user.email === email && user.password === password);

    if (userFound) {
      alert("Login realizado com sucesso!");
      router.push("/"); // redirecionamento
    } else {
      alert("Email ou senha incorretos!");
    }
  }

//aqui começa o html

//estrutura nova ultilizando tailwind e typescipt
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      {/* CAIXA DO FORMULÁRIO */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        {/* FORM */}
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          
          {/* CAMPO EMAIL */}
          <input
            type="email"
            placeholder="Seu e-mail"
            className="border p-2 rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* CAMPO SENHA */}
          <input
            type="password"
            placeholder="Sua senha"
            className="border p-2 rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* BOTÃO */}
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
          >
            Entrar
          </button>
        </form>
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