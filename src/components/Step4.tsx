import React from 'react';
import { HelpSupportMockup } from './HelpSupportMockup';

interface Step4Props {
  onNext: () => void;
}

export function Step4({ onNext }: Step4Props) {
  return (
    <div className="space-y-4 sm:space-y-5">
      {/* Step Heading */}
      <div className="flex items-center gap-2">
        <span className="text-xl sm:text-2xl">📲</span>
        <h2 className="text-[#0f172a] font-black text-xl sm:text-2xl tracking-tight">
          Precisou de ajuda?
        </h2>
      </div>

      {/* Main Card */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] space-y-3">
        {/* Intro text */}
        <div>
          <p className="text-[#475569] text-xs sm:text-sm mb-1 font-medium">
            Os ADMs apenas enviam as ofertas.
          </p>
          <h3 className="text-[#0f172a] font-black text-sm sm:text-base mb-1">
            Dúvidas ou procurando algum produto?
          </h3>
          <p className="text-[#009a58] font-extrabold text-sm sm:text-base flex items-center gap-1.5">
            🎧 Fale diretamente comigo 👇
          </p>
        </div>

        {/* Support Phone Number Mockup */}
        <HelpSupportMockup />

        {/* Down Arrow Scroll Indicator */}
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200/80 py-1.5 px-3.5 rounded-full w-fit mx-auto animate-bounce my-1">
          <span>Mais conteúdo abaixo</span>
          <span className="text-sm font-black">↓</span>
        </div>

        {/* Yellow Warning Box */}
        <div className="bg-[#fffbeb] border border-[#fde68a] text-[#92400e] text-xs sm:text-sm font-bold p-3.5 rounded-xl flex items-start gap-2 leading-relaxed">
          <span className="shrink-0 text-base">⚠️</span>
          <span>
            ⚠️ O preço enviado no grupo pode aparecer somente depois de aplicar o cupom.
          </span>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={onNext}
        className="w-full bg-[#009a58] hover:bg-[#00874d] active:scale-[0.99] text-white font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-[0_4px_12px_rgba(0,154,88,0.25)] flex items-center justify-center gap-2 cursor-pointer transition-all tracking-wide"
      >
        ENTENDI <span className="text-lg">➔</span>
      </button>
    </div>
  );
}
