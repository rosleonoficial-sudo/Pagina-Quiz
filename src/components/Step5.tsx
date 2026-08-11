import React from 'react';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export function Step5() {
  const handleFitnessClick = () => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('trackSingle', '1335109292111834', 'Lead');
    }
  };

  const handleEletronicosClick = () => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('trackSingle', '1319209950176987', 'Lead');
    }
  };

  const handleGeraisClick = () => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('trackSingle', '954536017305711', 'Lead');
    }
  };

  return (
    <div className="space-y-3">
      {/* Top Completed Badge */}
      <div className="inline-flex items-center gap-1.5 bg-[#e6f7f0] border border-[#a7f3d0] text-[#009a58] text-xs font-extrabold px-2.5 py-0.5 rounded-full">
        <span>✓</span> Etapa Concluída
      </div>

      {/* Main Title & Subtitle */}
      <div>
        <h1 className="text-[#0f172a] font-black text-xl sm:text-2xl tracking-tight leading-tight">
          🎉 Pronto! Grupos liberados
        </h1>
        <p className="text-[#334155] font-bold text-xs sm:text-sm mt-1">
          Agora escolha onde você quer economizar 👇
        </p>
      </div>

      {/* Down Arrow Scroll Indicator */}
      <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200/80 py-1.5 px-3.5 rounded-full w-fit mx-auto animate-bounce my-0.5">
        <span>Veja as opções de grupos abaixo</span>
        <span className="text-sm font-black">↓</span>
      </div>

      {/* Group 1 - FITNESS */}
      <div className="border-2 border-[#10b981] bg-white rounded-xl p-3 sm:p-3.5 shadow-xs transition-all">
        <div className="flex items-center justify-between mb-1.5">
          <span className="bg-[#d1fae5] text-[#065f46] text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            FITNESS
          </span>
          <span className="text-lg">🏋️</span>
        </div>

        <p className="text-[#334155] text-xs font-medium mb-2.5 leading-snug">
          Suplementos, tênis de corrida, acessórios e muito mais.
        </p>

        <a
          href="https://chat.whatsapp.com/L4PZK11TC3E3sGuCiUPCEp?s=cl&p=i&ilr=2"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleFitnessClick}
          className="w-full bg-[#009a58] hover:bg-[#00874d] active:scale-[0.99] text-white font-extrabold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 shadow-[0_2px_6px_rgba(0,154,88,0.2)] transition-all text-center tracking-wide btn-shine animate-pulse-subtle"
        >
          🏆 ENTRAR NO GRUPO FITNESS <span className="text-sm">↗</span>
        </a>
      </div>

      {/* Group 2 - ELETRÔNICOS */}
      <div className="border-2 border-[#1e293b] bg-white rounded-xl p-3 sm:p-3.5 shadow-xs transition-all">
        <div className="flex items-center justify-between mb-1.5">
          <span className="bg-[#f1f5f9] text-[#1e293b] text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            ELETRÔNICOS
          </span>
          <span className="text-lg">📱</span>
        </div>

        <p className="text-[#334155] text-xs font-medium mb-2.5 leading-snug">
          Celulares, caixas de som, fones, videogames e muito mais.
        </p>

        <a
          href="https://chat.whatsapp.com/ExWlu1RPjI2H0G6ppImz43?s=cl&p=i&ilr=2"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleEletronicosClick}
          className="w-full bg-[#111827] hover:bg-[#030712] active:scale-[0.99] text-white font-extrabold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 shadow-[0_2px_6px_rgba(17,24,39,0.2)] transition-all text-center tracking-wide btn-shine animate-pulse-subtle"
        >
          📱 ENTRAR NO GRUPO ELETRÔNICOS <span className="text-sm">↗</span>
        </a>
      </div>

      {/* Group 3 - OFERTAS GERAIS */}
      <div className="border-2 border-[#f59e0b] bg-white rounded-xl p-3 sm:p-3.5 shadow-xs transition-all">
        <div className="flex items-center justify-between mb-1.5">
          <span className="bg-[#fef3c7] text-[#92400e] text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            OFERTAS GERAIS
          </span>
          <span className="text-lg">🔥</span>
        </div>

        <p className="text-[#334155] text-xs font-medium mb-2.5 leading-snug">
          Perfumes, tênis, ferramentas, itens para casa e muitas variedades.
        </p>

        <a
          href="https://chat.whatsapp.com/CnaAeButRoNK7aoJpxxO1w?s=cl&p=i&ilr=2"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleGeraisClick}
          className="w-full bg-[#d97706] hover:bg-[#b45309] active:scale-[0.99] text-white font-extrabold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 shadow-[0_2px_6px_rgba(217,119,6,0.2)] transition-all text-center tracking-wide btn-shine animate-pulse-subtle"
        >
          🔥 ENTRAR NO GRUPO OFERTAS GERAIS <span className="text-sm">↗</span>
        </a>
      </div>

      {/* Bottom Note Box */}
      <div className="bg-[#f1f5f9] border border-[#e2e8f0] rounded-xl p-2.5 text-center text-[#1e293b] font-extrabold text-xs">
        Quer aproveitar tudo? Pode entrar nos 3. 😜
      </div>
    </div>
  );
}

