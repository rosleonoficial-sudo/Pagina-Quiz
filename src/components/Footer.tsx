import React from 'react';

interface FooterProps {
  step: number;
}

export function Footer({ step }: FooterProps) {
  const separator = (step === 1 || step === 5) ? '•' : '+';

  return (
    <div className="py-4 text-center border-t border-slate-100 bg-[#fafafa]/50">
      <p className="text-[11px] sm:text-xs text-[#94a3b8] font-medium tracking-tight">
        Passo a passo interativo de cupons {separator} Descontos exclusivos
      </p>
    </div>
  );
}
