"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cva } from "class-variance-authority";
import Image from "next/image";
import { User, Ban, Activity } from "lucide-react";
import { cn } from "../lib/utils";
import { MLBB_HEROES } from "../constants/heroes";

const LANE_ICONS: Record<string, string> = {
  "EXP Lane": "/lanes/exp.png",
  "Jungler": "/lanes/jungle.png",
  "Mid Lane": "/lanes/mid.png",
  "Gold Lane": "/lanes/gold.png",
  "Roamer": "/lanes/roam.png",
};

const slotVariants = cva(
  "relative overflow-hidden transition-colors duration-500 group border backdrop-blur-md flex-shrink-0",
  {
    variants: {
      type: {
        pick: "h-48 sm:h-56 rounded-2xl flex flex-col justify-end border-white/10 hover:backdrop-blur-xl",
        ban: "w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center bg-white/5 border-white/10 hover:backdrop-blur-xl",
      },
      hasHero: {
        true: "border-white/20", 
        false: "border-dashed border-white/10 hover:border-white/20 hover:bg-white/5",
      },
    },
    defaultVariants: {
      type: "pick",
      hasHero: false,
    },
  }
);

interface DraftSlotProps {
  heroId: string | null;
  type?: "pick" | "ban";
  team?: "A" | "B";
  isActive?: boolean;
  laneType?: string; 
}

export default function DraftSlot({ heroId, type = "pick", team = "A", isActive = false, laneType }: DraftSlotProps) {
  const hero = MLBB_HEROES.find((h) => h.id === heroId);
  const [showPickEffect, setShowPickEffect] = useState(false);
  const prevHeroId = useRef<string | null>(null);

  useEffect(() => {
    // TRIGGER ANIMASI HANYA JIKA: Slot asalnya kosong (null) lalu diisi hero (First Pick)
    // Jadi pas auto-reshuffle (hero A ganti jadi hero B), efek lebay ini ga bakal nyala.
    if (heroId && prevHeroId.current === null && type === "pick") {
      setShowPickEffect(true);
      const timer = setTimeout(() => setShowPickEffect(false), 2400); 
      return () => clearTimeout(timer);
    }
    prevHeroId.current = heroId; // Update tracking id
  }, [heroId, type]);

  const baseWidth = 112; 
  const expandedWidth = 192; 
  const glowColor = team === "A" ? "rgba(37, 99, 235, 0.5)" : "rgba(220, 38, 38, 0.5)";

  return (
    <motion.div
      layout // layout ini yang bikin animasi geser (swap) pas reshuffle jadi mulus
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, scale: 1,
        // Lebar slot hanya berubah kalau lagi showPickEffect
        width: type === "pick" ? (showPickEffect ? expandedWidth : baseWidth) : undefined,
        boxShadow: (isActive && !heroId) 
          ? [`0 0 0px ${glowColor}`, `0 0 20px ${glowColor}`, `0 0 0px ${glowColor}`] 
          : (heroId ? `0 0 15px ${glowColor}` : "0 0 0px rgba(0,0,0,0)")
      }}
      transition={{ 
        width: { type: "spring", stiffness: 120, damping: 20 },
        layout: { type: "spring", stiffness: 120, damping: 20 },
        boxShadow: (isActive && !heroId) ? { duration: 1.5, repeat: Infinity } : { duration: 0.5 }
      }}
      className={cn(
        slotVariants({ type, hasHero: !!hero }),
        (type === "pick" && !hero) && "bg-[#050505]",
        (isActive && !heroId) && (team === "A" ? "ring-2 ring-blue-500" : "ring-2 ring-red-500")
      )}
    >
      {/* PLACEHOLDER LOGO LANE */}
      {!hero && (
        <div className="absolute inset-0 z-0">
          {type === "pick" && laneType && LANE_ICONS[laneType] ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 0.4, filter: "drop-shadow(0 0 5px rgba(6,182,212,0.5))" } : { opacity: 0.3, filter: "drop-shadow(0 0 0px rgba(0,0,0,0))" }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full overflow-hidden"
            >
              <Image src={LANE_ICONS[laneType]} alt={laneType} fill sizes="192px" className="object-cover scale-125 origin-center group-hover:scale-130 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center opacity-30 text-white/50">
              {type === "ban" ? <Ban className="w-6 h-6" /> : <User className="w-8 h-8" />}
            </div>
          )}
        </div>
      )}

      {/* RENDER HERO JIKA ADA */}
      {hero && (
        <>
          {/* BACKGROUND HERO IMAGE */}
          <motion.div
            // Animate glitch hanya jalan pas showPickEffect nyala
            animate={showPickEffect ? {
              opacity: [0.2, 1, 0.4, 1],
              x: [-8, 8, -4, 4, 0],
              filter: ["saturate(300%) hue-rotate(90deg)", "saturate(50%) hue-rotate(-90deg)", "saturate(100%) hue-rotate(0deg)"],
            } : { opacity: 1, x: 0, filter: "none" }}
            transition={showPickEffect ? { duration: 0.4, ease: "easeInOut" } : { duration: 0.5 }}
            className="absolute inset-0 -z-10 bg-[#050505]"
          >
            <Image src={hero.image} alt={hero.name} fill sizes="192px" className={cn("object-cover", type === "ban" && "grayscale opacity-50 contrast-125")} />
          </motion.div>

          {/* GRADIENT OVERLAY (HANYA UNTUK PICK) */}
          {type === "pick" && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent pointer-events-none" />
          )}

          {/* NAMA HERO (HANYA UNTUK PICK, BAN GA USAH PAKE NAMA) */}
          {type === "pick" && (
            <div className="absolute left-2 top-6 z-10 flex items-start pointer-events-none">
              <span className="text-lg font-black tracking-widest text-white uppercase drop-shadow-lg" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                {hero.name}
              </span>
            </div>
          )}

          {/* WR HOLOGRAM HUD (HANYA PAS PICK BARU) */}
          <AnimatePresence>
            {type === "pick" && showPickEffect && hero.winrate && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.5, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute top-2 right-2 z-20 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2 py-1 rounded border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
              >
                <Activity className="w-3 h-3 text-cyan-400" />
                <span className="text-[10px] tracking-wider font-black text-cyan-400">WR {hero.winrate}%</span>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

      {/* LINE WARNA TIM (BAWAH) */}
      {type === "pick" && (
        <div className={cn("absolute bottom-0 left-0 right-0 h-1.5", team === "A" ? "bg-blue-600" : "bg-red-600")} />
      )}
    </motion.div>
  );
}