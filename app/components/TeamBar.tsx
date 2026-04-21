"use client";

import Image from "next/image";
import { Team } from "../constants/teams";
import { cn } from "../lib/utils";

interface TeamBarProps {
  teamA: Team;
  teamB: Team;
  activeTeam: "A" | "B" | null;
}

export default function TeamBar({ teamA, teamB, activeTeam }: TeamBarProps) {
  return (
    // Menggunakan Grid 3 Kolom: Kiri (1fr) - Tengah (Space untuk VS Banner) - Kanan (1fr)
    <div className="w-full max-w-[1600px] mx-auto grid grid-cols-[1fr_140px_1fr] sm:grid-cols-[1fr_220px_1fr] items-center px-4 sm:px-12 absolute inset-0 pointer-events-none z-0">
      
      {/* KIRI: TEAM A (BLUE) */}
      <div className={cn(
        "flex items-center gap-3 sm:gap-6 justify-start transition-all duration-500 ease-in-out min-w-0", 
        activeTeam === "A" ? "opacity-100 scale-105" : "opacity-40 scale-100"
      )}>
        {/* Render Logo Tim A */}
        <div className="relative w-14 h-14 sm:w-20 sm:h-20 shrink-0">
          {teamA.logo && (
            <Image 
              src={teamA.logo} 
              alt={teamA.name} 
              fill 
              sizes="(max-width: 768px) 56px, 80px"
              className="object-contain drop-shadow-[0_0_20px_rgba(37,99,235,0.6)]" 
            />
          )}
        </div>
        {/* Render Teks Tim A (Putih + Truncate) */}
        <div className="flex flex-col items-start min-w-0">
          <h1 className="text-xl sm:text-3xl lg:text-5xl font-black italic tracking-widest text-white uppercase drop-shadow-lg truncate w-full">
            {teamA.name}
          </h1>
        </div>
      </div>

      {/* TENGAH: RUANG KOSONG (SPACER) */}
      {/* Kolom ini sengaja dibiarkan kosong agar teks tidak pernah menabrak VS Banner */}
      <div className="w-full h-full"></div>

      {/* KANAN: TEAM B (RED) */}
      <div className={cn(
        "flex items-center gap-3 sm:gap-6 flex-row-reverse justify-start transition-all duration-500 ease-in-out min-w-0", 
        activeTeam === "B" ? "opacity-100 scale-105" : "opacity-40 scale-100"
      )}>
        {/* Render Logo Tim B */}
        <div className="relative w-14 h-14 sm:w-20 sm:h-20 shrink-0">
          {teamB.logo && (
            <Image 
              src={teamB.logo} 
              alt={teamB.name} 
              fill 
              sizes="(max-width: 768px) 56px, 80px"
              className="object-contain drop-shadow-[0_0_20px_rgba(239,68,68,0.6)]" 
            />
          )}
        </div>
        {/* Render Teks Tim B (Putih + Truncate) */}
        <div className="flex flex-col items-end min-w-0">
          <h1 className="text-xl sm:text-3xl lg:text-5xl font-black italic tracking-widest text-white uppercase drop-shadow-lg truncate w-full text-right">
            {teamB.name}
          </h1>
        </div>
      </div>
      
    </div>
  );
}