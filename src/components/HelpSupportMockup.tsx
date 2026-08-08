import React from 'react';

export function HelpSupportMockup() {
  return (
    <div className="bg-[#111622] rounded-xl p-3.5 sm:p-4 text-slate-100 text-xs sm:text-[13px] leading-relaxed shadow-lg border border-slate-800 relative select-none">
      <div className="space-y-2">
        <p className="text-slate-100 font-normal leading-snug">
          💥 Caixa De Som Jbl Boombox 4 Bluetooth Som 210w Jbl Pro Ai Sound Boost Graves Personalizáveis Bateria De Até 34h Ip68 Áudio Lossless Preta
        </p>

        <p className="text-white font-extrabold text-sm sm:text-base">
          💸 Por: R$ 1.914,14
        </p>

        <p className="text-slate-300 font-medium">
          • Pix ou cartão - simule o parcelado 💳
        </p>

        <p className="text-slate-300 font-medium">
          🎟️ Use o cupom: OFFMELIMAIS
        </p>

        <p className="text-indigo-300 font-mono text-xs">
          🔗 Comprar: <span className="underline">https://meli.la/1UEn7CV</span>
        </p>

        <p className="text-amber-400 font-medium text-[11px]">
          ⚠️ Oferta sujeita a alterações.
        </p>

        {/* Fale Comigo Row with Red Oval & Arrow */}
        <div className="pt-2 border-t border-slate-800 flex items-center gap-2 relative">
          <span className="font-bold text-white text-xs sm:text-sm">Fale Comigo:</span>
          
          <div className="relative inline-flex items-center">
            {/* Red Circle Oval around phone number */}
            <div className="border-2 border-[#ef4444] rounded-full px-2.5 py-0.5 bg-red-950/30 text-blue-300 font-black text-xs sm:text-sm tracking-wide shadow-[0_0_10px_rgba(239,68,68,0.4)]">
              (47) 9778-5876
            </div>

            {/* Red Arrow pointing left to phone number */}
            <div className="absolute left-[105%] top-1/2 -translate-y-1/2 flex items-center z-10 pointer-events-none">
              <svg className="w-10 sm:w-12 h-6" viewBox="0 0 50 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Yellow outline */}
                <path d="M45 12H10M10 12L22 4M10 12L22 20" stroke="#facc15" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Red arrow */}
                <path d="M45 12H10M10 12L22 4M10 12L22 20" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
