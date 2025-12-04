"use client";

import { useState } from "react";
import Image from "next/image";

export default function AgendamentoZe() {
  const [service, setService] = useState("");
  const [time, setTime] = useState("");

  const services = [
    { name: "Corte Simples", price: "R$ 20" },
    { name: "Barba Navalhada", price: "R$ 15" },
    { name: "Corte + Barba", price: "R$ 30" },
    { name: "Sobrancelha", price: "R$ 10" },
  ];

  const times = [
    "08:00", "09:00", "10:00", "11:00",
    "13:00", "14:00", "15:00", "16:00", "17:00"
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!service || !time) {
      alert("Escolha o serviço e o horário!");
      return;
    }

    alert(`Agendamento concluído na Barbearia do Zé às ${time} para ${service}`);
  }

  return (
    <section
      className="min-h-screen text-gray-100 bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: "url('/bgAbout.png')" }}
    >
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10 bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-full max-w-lg border border-white/20">

        <button
          onClick={() => window.location.href = "/#Barber"}
          className="mb-4 px-4 py-2 bg-white/10 border border-white/20 rounded-xl 
  backdrop-blur-md hover:bg-white/20 transition text-gray-100"
        >
          ← Voltar
        </button>

        <div className="text-center">
          <Image
            src="/B1.jpg"
            width={900}
            height={600}
            alt="Barbearia do Zé"
            className="w-full h-48 rounded-xl object-cover mb-4"
          />

          <h1 className="text-3xl font-extrabold mix-blend-color-dodge">
            Barbearia do Zé
          </h1>

          <p className="mt-2 text-gray-300 text-sm">
            Cortes clássicos, precisão e tradição em cada detalhe.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">

          <div>
            <label className="block mb-2 font-semibold">Escolha o serviço:</label>
            <select
              className="w-full p-3 rounded-lg bg-black/30 text-gray-100 border border-white/20"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">Selecione...</option>
              {services.map((s, i) => (
                <option key={i} value={s.name}>
                  {s.name} — {s.price}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">Horário:</label>
            <div className="grid grid-cols-3 gap-3">
              {times.map((t, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setTime(t)}
                  className={`p-2 rounded-lg border transition ${time === t
                      ? "bg-gradient-to-r from-[#0E063F] to-[#3926B1] text-white border-transparent"
                      : "bg-black/20 border-white/20 hover:bg-black/30"
                    }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#0E063F] to-[#3926B1] text-white font-bold rounded-xl hover:scale-[1.02] transition shadow-lg"
          >
            Confirmar Agendamento
          </button>
        </form>
      </div>
    </section>
  );
}
