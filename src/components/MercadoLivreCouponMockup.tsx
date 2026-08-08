import React from 'react';

export function MercadoLivreCouponMockup() {
  return (
    <div className="bg-[#111622] rounded-xl p-3.5 sm:p-4 text-slate-100 text-xs sm:text-[13px] leading-relaxed shadow-lg border border-slate-800 relative select-none">
      <div className="space-y-2">
        {/* Deal text */}
        <p className="text-slate-100 font-normal leading-snug">
          💥 Caixa De Som Jbl Boombox 4 Bluetooth Som 210w Jbl Pro Ai Sound Boost Graves Personalizáveis Bateria De Até 34h Ip68 Áudio Lossless Preta
        </p>
        
        {/* Price */}
        <p className="text-white font-extrabold text-sm sm:text-base">
          💸 Por: R$ 1.914,14
        </p>

        {/* Payment info */}
        <p className="text-slate-300 font-medium">
          • Pix ou cartão - simule o parcelado 💳
        </p>

        {/* Coupon row with yellow border box and red arrow pointing to it */}
        <div className="pt-1 flex items-center flex-wrap gap-2 relative">
          <span className="text-slate-200 font-medium">🎟️ Use o cupom:</span>
          
          <div className="relative inline-flex items-center">
            <span className="border-2 border-[#eab308] bg-transparent text-[#fef08a] font-black px-2 py-0.5 rounded text-xs sm:text-sm tracking-wider shadow-[0_0_10px_rgba(234,179,8,0.3)]">
              OFFMELIMAIS
            </span>

            {/* Red Arrow pointing directly to coupon */}
            <div className="absolute left-[105%] top-1/2 -translate-y-1/2 flex items-center z-10 pointer-events-none">
              <svg className="w-10 sm:w-12 h-6" viewBox="0 0 50 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Yellow outline for glow */}
                <path d="M45 12H10M10 12L22 4M10 12L22 20" stroke="#facc15" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Red main arrow */}
                <path d="M45 12H10M10 12L22 4M10 12L22 20" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <p className="text-slate-400 text-[11px] pt-0.5 font-normal">
          Aplique o cupom para ver o desconto.
        </p>
      </div>
    </div>
  );
}
