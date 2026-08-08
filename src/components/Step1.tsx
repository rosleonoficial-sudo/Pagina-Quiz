import React from 'react';

interface Step1Props {
  onNext: () => void;
}

export function Step1({ onNext }: Step1Props) {
  return (
    <div className="space-y-6">
      {/* Main White Card Container */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 bg-[#fef3c7] border border-[#fde68a] text-[#92400e] text-xs font-semibold px-3 py-1 rounded-full mb-3">
          <span className="w-2 h-2 rounded-full bg-[#f97316] inline-block"></span>
          Antes de começar
        </div>

        {/* Main Title */}
        <h1 className="text-[#0f172a] font-black text-xl sm:text-2xl leading-snug tracking-tight mb-4">
          Não pague mais caro por não saber usar o cupom. 👀
        </h1>

        {/* Light Gray Box with Instructions */}
        <div className="bg-[#f8fafc] border border-[#f1f5f9] rounded-xl p-4 text-[#334155] text-xs sm:text-sm leading-relaxed space-y-3">
          <p>
            Em algumas ofertas, o preço <strong className="text-[#0f172a] font-black">só baixa depois que você aplica o cupom</strong>.
          </p>

          <p>
            Nos próximos <strong className="text-[#0f172a] font-black">5 passos rápidos</strong>, vou te mostrar como fazer e onde o desconto aparece.
          </p>

          <p className="text-[#009a58] font-extrabold text-sm sm:text-base flex items-center gap-1 pt-1">
            Leva menos de 1 minuto 👇
          </p>
        </div>

        {/* Scroll Indicator Arrow */}
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200/80 py-1.5 px-3.5 rounded-full w-fit mx-auto animate-bounce mt-3">
          <span>Mais conteúdo abaixo</span>
          <span className="text-sm font-black">↓</span>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={onNext}
        className="w-full bg-[#009a58] hover:bg-[#00874d] active:scale-[0.99] text-white font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-[0_4px_12px_rgba(0,154,88,0.25)] flex items-center justify-center gap-2 cursor-pointer transition-all tracking-wide"
      >
        ME MOSTRA COMO <span className="text-lg">➔</span>
      </button>
    </div>
  );
}
