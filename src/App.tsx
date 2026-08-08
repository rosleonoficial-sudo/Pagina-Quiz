import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';
import { Step4 } from './components/Step4';
import { Step5 } from './components/Step5';

export default function App() {
  const [step, setStep] = useState<number>(1);

  const handleNext = () => {
    if (step < 5) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  // Preload all mockup images into browser memory on initial render
  useEffect(() => {
    const imagesToPreload = [
      '/images/mercadolivre-checkout-step.webp',
      '/images/amazon-coupon-step.webp',
      '/images/mercadolivre-checkout-step.png',
      '/images/amazon-coupon-step.png'
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [step]);

  return (
    <main className="min-h-screen bg-[#f1f5f9] flex items-center justify-center p-0 sm:p-4">
      {/* Centered Mobile Card Frame */}
      <div className="w-full max-w-[430px] bg-white min-h-screen sm:min-h-0 sm:rounded-[24px] shadow-2xl border border-slate-200/80 flex flex-col justify-between overflow-hidden relative">
        
        {/* Top Header with Step Counter and Progress Bar */}
        <Header step={step} onBack={handleBack} />

        {/* Dynamic Content Body */}
        <div className="p-4 sm:p-5 flex-1 overflow-x-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.12, ease: 'easeOut' }}
            >
              {step === 1 && <Step1 onNext={handleNext} />}
              {step === 2 && <Step2 onNext={handleNext} />}
              {step === 3 && <Step3 onNext={handleNext} />}
              {step === 4 && <Step4 onNext={handleNext} />}
              {step === 5 && <Step5 />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card Footer */}
        <Footer step={step} />

      </div>
    </main>
  );
}
