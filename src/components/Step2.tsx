import React from 'react';
import { MercadoLivreCouponMockup } from './MercadoLivreCouponMockup';
import { MercadoLivreCheckoutMockup } from './MercadoLivreCheckoutMockup';

interface Step2Props {
  onNext: () => void;
}

export function Step2({ onNext }: Step2Props) {
  return (
    <div className="space-y-4 sm:space-y-5">
      {/* Step Heading */}
      <div className="flex items-center gap-2">
        <span className="text-xl sm:text-2xl">🛒</span>
        <h2 className="text-[#0f172a] font-black text-xl sm:text-2xl tracking-tight">
          Mercado Livre
        </h2>
      </div>

      {/* Card 1 - Find coupon */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <h3 className="text-[#0f172a] font-extrabold text-sm sm:text-base mb-3 flex items-center gap-1.5">
          No grupo, procure o cupom 👇
        </h3>

        {/* Dark mode offer mockup */}
        <MercadoLivreCouponMockup />

        {/* Step 1 green pill */}
        <div className="bg-[#e6f7f0] border border-[#a7f3d0] text-[#047857] text-xs sm:text-sm font-extrabold p-2.5 rounded-xl flex items-center gap-2 mt-3">
          <span className="text-base">🟢</span>
          <span><strong className="text-[#009a58]">1</strong> Copie o código.</span>
        </div>
      </div>

      {/* Down Arrow Scroll Indicator */}
      <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200/80 py-1.5 px-3.5 rounded-full w-fit mx-auto animate-bounce my-1">
        <span>Mais conteúdo abaixo</span>
        <span className="text-sm font-black">↓</span>
      </div>

      {/* Card 2 - Apply coupon at checkout */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        {/* Yellow Instruction Banner */}
        <div className="bg-[#fffbeb] border border-[#fde68a] text-[#1e293b] text-xs sm:text-[13px] font-medium leading-relaxed p-3.5 rounded-xl mb-3">
          Anote o código do cupom, toque no link da oferta e siga com a compra. Na etapa de pagamento, insira o cupom no campo indicado, como mostra a imagem.
        </div>

        {/* Checkout screen mockup */}
        <MercadoLivreCheckoutMockup />

        {/* Green completion pill */}
        <div className="bg-[#e6f7f0] border border-[#a7f3d0] text-[#047857] text-xs sm:text-sm font-extrabold p-2.5 rounded-xl text-center flex items-center justify-center gap-1.5 mt-3">
          ✓ Pronto! O desconto aparece no valor. ✓
        </div>
      </div>

      {/* Primary Action Button */}
      <button
        onClick={onNext}
        className="w-full bg-[#009a58] hover:bg-[#00874d] active:scale-[0.99] text-white font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-[0_4px_12px_rgba(0,154,88,0.25)] flex items-center justify-center gap-2 cursor-pointer transition-all tracking-wide"
      >
        ENTENDI <span className="text-lg">➔</span>
      </button>
    </div>
  );
}
