import React, { useState } from 'react';

export function MercadoLivreCheckoutMockup() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="border border-slate-200/90 bg-white rounded-xl p-0.5 shadow-xs relative overflow-hidden select-none max-w-[280px] sm:max-w-[310px] mx-auto">
      {!hasError ? (
        <img
          src="/images/mercadolivre-checkout-step.webp"
          alt="Mercado Livre passo a passo de pagamento e cupom"
          loading="eager"
          decoding="async"
          // @ts-ignore
          fetchpriority="high"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.endsWith('.webp')) {
              target.src = '/images/mercadolivre-checkout-step.png';
            } else if (target.src.endsWith('.png')) {
              target.src = 'https://i.postimg.cc/QNRfFcV8/Chat-GPT-Image-7-de-ago-de-2026-21-51-17.png';
            } else {
              setHasError(true);
            }
          }}
          className="w-full h-auto rounded-lg block mx-auto shadow-xs"
        />
      ) : (
        /* Mobile checkout fallback mockup if image fails */
        <div className="bg-white rounded-lg p-3 text-slate-800 space-y-3 relative border border-slate-200">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
            <span className="text-slate-600 text-base font-bold">←</span>
            <div className="border-2 border-[#dc2626] rounded-full px-3 py-0.5 inline-block bg-red-50/20">
              <span className="font-extrabold text-slate-900 text-xs sm:text-sm tracking-tight">
                Escolha como pagar
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-600 py-0.5 border-b border-slate-100">
            <span className="font-medium text-slate-700">Combinar 2 meios de pagamento</span>
            <div className="w-8 h-4 bg-slate-200 rounded-full relative">
              <div className="w-3.5 h-3.5 bg-white rounded-full absolute top-0.25 left-0.25 shadow-xs"></div>
            </div>
          </div>

          <div className="bg-[#facc15] text-[#0f172a] p-3 sm:p-3.5 rounded-xl border-2 border-amber-400 shadow-md font-bold text-xs sm:text-[12px] leading-snug space-y-1.5 text-center my-2">
            <p>Siga até a etapa antes do pagamento.</p>
            <p>Toque em "Inserir cupom" ou "Cupons" e coloque o código enviado.</p>
            <p>Se não funcionar, esvazie o carrinho e tente de novo.</p>
            <p className="text-[10px] sm:text-[11px] font-normal text-amber-950 pt-1 border-t border-amber-300/80">
              Obs: em anúncios de catálogo, o vendedor pode variar por região.
            </p>
          </div>

          <div className="flex justify-start pl-6 my-1">
            <svg className="w-6 h-8" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0V28M12 28L4 20M12 28L20 20" stroke="#facc15" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 0V28M12 28L4 20M12 28L20 20" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-slate-200 text-xs sm:text-sm">
            <div className="border-2 border-[#dc2626] rounded-full px-2.5 py-0.5 text-blue-600 font-black tracking-tight cursor-pointer">
              Cupons
            </div>
            <span className="text-emerald-600 font-extrabold">- R$ 200,00</span>
          </div>

          <div className="flex items-center justify-between text-xs sm:text-sm pt-0.5">
            <span className="font-bold text-slate-800">Você pagará</span>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 line-through block leading-none">R$ 1.385</span>
              <span className="font-black text-slate-900 text-sm sm:text-base leading-tight">R$ 1.185</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
