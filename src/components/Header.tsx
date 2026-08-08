import React from 'react';

interface HeaderProps {
  step: number;
  onBack: () => void;
}

export function Header({ step, onBack }: HeaderProps) {
  // Calculate percentage
  const percentage = (step / 5) * 100;

  return (
    <div className="bg-white px-4 sm:px-5 pt-4 pb-3 border-b border-slate-100">
      {/* Top Bar Row */}
      <div className="flex items-center justify-between mb-3 min-h-[28px]">
        {step === 1 ? (
          <span className="bg-[#e6f7f0] border border-[#a7f3d0] text-[#009a58] text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            GUIA RÁPIDO
          </span>
        ) : (
          <button
            onClick={onBack}
            className="bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#475569] font-semibold text-xs px-3 py-1 rounded-full flex items-center gap-1 transition-colors cursor-pointer"
          >
            ← Voltar
          </button>
        )}

        <span className="text-[#1e293b] font-black text-xs uppercase tracking-wider">
          PASSO <strong className="text-[#009a58]">{step}</strong> DE 5
        </span>
      </div>

      {/* Progress Bar Track */}
      <div className="w-full h-1.5 bg-[#e2e8f0] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#009a58] rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
