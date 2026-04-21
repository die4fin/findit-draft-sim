// components/VsBanner.tsx
"use client";

import { motion } from "framer-motion";

interface VsBannerProps {
  currentStep: number;
  totalSteps: number;
  phase: "BAN" | "PICK" | "FINISHED";
}

export default function VsBanner({ currentStep, totalSteps, phase }: VsBannerProps) {
  // Menghitung persentase progres draf
  const progressPercentage = (currentStep / totalSteps) * 100;
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      key={phase + currentStep}
      className="flex flex-col items-center justify-center pointer-events-none z-10"
    >
      <div className="relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.6)]">
        
        {/* Teks VS */}
        <span className="text-3xl sm:text-4xl font-black italic text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
          VS
        </span>
        
        {/* Circular Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r={`${radius}%`}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="3"
          />
          <circle
            cx="50%"
            cy="50%"
            r={`${radius}%`}
            fill="none"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          />
        </svg>
      </div>

      {/* Label Indikator Fase */}
      <div className="mt-5 px-6 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg">
        <span className="text-[10px] sm:text-xs font-black tracking-[0.3em] text-white uppercase">
          {phase === "FINISHED" ? "ANALYSIS READY" : `${phase} PHASE`}
        </span>
      </div>
    </motion.div>
  );
}