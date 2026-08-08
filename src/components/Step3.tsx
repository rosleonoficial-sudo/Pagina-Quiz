import React from 'react';
import { AmazonCouponMockup } from './AmazonCouponMockup';

interface Step3Props {
  onNext: () => void;
}

export function Step3({ onNext }: Step3Props) {
  return (
    <div className="space-y-4 sm:space-y-5">
      {/* Step Heading */}
      <div className="flex items-center gap-2">
        <span className="text-xl sm:text-2xl">📦</span>
        <h2 className="text-[#0f172a] font-black text-xl sm:text-2xl tracking-tight">
          Amazon
        </h2>
      </div>

      {/* Main Card */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] space-y-2.5">
        {/* Title */}
        <div>
          <h3 className="text-[#0f172a] font-black text-base sm:text-lg leading-tight">
            Achou isso abaixo do preço?
          </h3>
          <p className="text-[#009a58] font-extrabold text-xs sm:text-sm flex items-center gap-1 mt-0.5">
            Toque em 'Resgatar cupom'. <span className="inline-block bg-[#e6f7f0] border border-[#a7f3d0] text-[#009a58] text-[10px] px-1 rounded font-bold">✓</span>
          </p>
        </div>

        {/* Amazon Coupon UI Screenshot Mockup */}
        <AmazonCouponMockup />

        {/* Down Arrow Scroll Indicator */}
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200/80 py-1.5 px-3.5 rounded-full w-fit mx-auto animate-bounce my-1">
          <span>Mais conteúdo abaixo</span>
          <span className="text-sm font-black">↓</span>
        </div>

        {/* Yellow Important Tip Box */}
        <div className="bg-[#fffbeb] border border-[#fde68a] text-[#92400e] text-xs sm:text-sm p-3.5 rounded-xl space-y-0.5">
          <p className="font-extrabold flex items-center gap-1">
            <span>⚠️</span> Dica Importante:
          </p>
          <p className="text-[#1e293b] font-medium leading-relaxed">
            Copie o código também. Pode precisar dele no final da compra.
          </p>
        </div>

        {/* Gray Bullet Box */}
        <div className="bg-[#f8fafc] border border-[#e2e8f0] text-[#334155] text-xs sm:text-[13px] p-3.5 rounded-xl space-y-1.5 leading-relaxed font-normal">
          <p>• Se o desconto não entrar automaticamente, continue a compra.</p>
          <p>• Na etapa de pagamento, insira o código do cupom.</p>
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
