import React, { useState } from 'react';

export function AmazonCouponMockup() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="border border-slate-200/90 rounded-xl p-0.5 bg-white shadow-xs relative overflow-hidden select-none max-w-[280px] sm:max-w-[310px] mx-auto">
      {!hasError ? (
        <img
          src="/images/amazon-coupon-step.webp"
          alt="Amazon resgate de cupom passo a passo"
          loading="eager"
          decoding="async"
          // @ts-ignore
          fetchpriority="high"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.endsWith('.webp')) {
              target.src = '/images/amazon-coupon-step.png';
            } else if (target.src.endsWith('.png')) {
              target.src = 'https://i.postimg.cc/k5BSNhpm/Chat-GPT-Image-7-de-ago-de-2026-21-58-32.png';
            } else {
              setHasError(true);
            }
          }}
          className="w-full h-auto rounded-lg block mx-auto shadow-xs"
        />
      ) : (
        /* Fallback SVG representation matching exact dimensions if image fails to load */
        <div className="p-3">
          <div className="bg-[#febd69] -mx-3 -mt-3 p-2 px-3 flex items-center gap-2 mb-3 rounded-t-xl text-xs text-slate-800 font-medium">
            <span className="text-sm font-bold">←</span>
            <div className="bg-white rounded-md px-2.5 py-1 flex-1 text-[11px] text-slate-500 flex items-center justify-between border border-slate-300">
              <span className="truncate">Q Pesquisar na Amazon.com.br</span>
              <span className="text-xs">📷</span>
            </div>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-start gap-2.5 sm:gap-3">
              <div className="w-28 sm:w-36 h-20 bg-slate-950 rounded-md p-1.5 text-white flex flex-col justify-between shrink-0 relative overflow-hidden border border-slate-700">
                <div className="text-[8px] font-extrabold tracking-widest text-cyan-300 uppercase flex justify-between items-center">
                  <span>QLED</span>
                  <span>Dolby Audio</span>
                </div>
                <div className="text-[10px] sm:text-xs font-black text-center text-amber-300 leading-tight">
                  TCL QLED 55"
                </div>
                <div className="text-[8px] text-slate-400 flex justify-between font-mono">
                  <span>AiPQ</span>
                  <span>HDR10+</span>
                </div>
              </div>

              <div className="flex-1 space-y-0.5 min-w-0">
                <div className="text-xs text-slate-400 font-bold">R$</div>
                <div className="text-lg sm:text-2xl font-black text-slate-900 leading-none">
                  4.799<span className="text-xs font-semibold">,00</span>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-700 leading-tight">
                  Em até <strong className="font-bold text-slate-900">12x de R$ 399,99 sem juros</strong>
                </p>
                <a href="#" className="text-[10px] text-teal-700 font-medium underline block">Ver opções de pagamento</a>
              </div>
            </div>

            <div className="bg-[#facc15] text-[#0f172a] p-2.5 sm:p-3 rounded-lg border border-amber-300 font-bold text-xs sm:text-[12px] leading-snug shadow-sm">
              Na Amazon, resgate o cupom logo abaixo do preço e continue a compra. O desconto aparecerá antes de finalizar o pagamento!
            </div>

            <div className="space-y-1">
              <p className="text-[10px] sm:text-[11px] text-indigo-900 font-bold">
                Ganhe pontos nesta compra com o cartão Amazon: peça o seu com anuidade zero e vantagens exclusivas.
              </p>
              
              <div className="flex items-center gap-2 pt-1 relative">
                <div className="relative shrink-0">
                  <button className="border-2 border-slate-900 text-slate-900 font-extrabold text-xs px-3 py-1.5 rounded-md bg-white shadow-xs">
                    Resgatar
                  </button>

                  <div className="absolute -top-6 -left-3 pointer-events-none">
                    <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 2C14 2 4 8 4 20M4 20L1 14M4 20L9 16" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div className="bg-[#d1fae5] border border-emerald-300 text-[#065f46] font-extrabold text-[11px] sm:text-xs px-2.5 py-1.5 rounded-md flex-1 text-center truncate">
                  Salve o cupom R$200 : TCL200OFF
                </div>
              </div>
            </div>

            <p className="text-[10px] text-slate-500 pt-0.5">
              <span className="font-extrabold text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded mr-1">Oferta</span> 90 dias de Amazon Music grátis incluso
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
