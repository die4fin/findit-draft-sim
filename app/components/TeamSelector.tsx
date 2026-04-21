"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldAlert } from "lucide-react";
import Image from "next/image";
import { cn } from "../lib/utils";
import { MPL_TEAMS } from "../constants/teams";

interface TeamSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  teamA: any;
  teamB: any;
  setTeamA: (team: any) => void;
  setTeamB: (team: any) => void;
}

export default function TeamSelector({ isOpen, onClose, teamA, teamB, setTeamA, setTeamB }: TeamSelectorProps) {
  const [localTeamA, setLocalTeamA] = useState(teamA);
  const [localTeamB, setLocalTeamB] = useState(teamB);
  const [isOverriding, setIsOverriding] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLocalTeamA(teamA);
      setLocalTeamB(teamB);
      setIsOverriding(false); 
    }
  }, [isOpen, teamA, teamB]);

  const handleConfirm = () => {
    setIsOverriding(true);
    setTimeout(() => {
      setTeamA(localTeamA);
      setTeamB(localTeamB);
      setIsOverriding(false);
      onClose();
    }, 6000); 
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={!isOverriding ? onClose : undefined} 
            className="absolute inset-0 bg-[#050505]/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-[#0a0a0c]/90 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          >
            <AnimatePresence mode="wait">
              {!isOverriding ? (
                <motion.div key="selector-ui" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }} transition={{ duration: 0.3 }} className="flex flex-col">
                  <div className="flex items-center justify-between px-8 py-5 border-b border-white/10 bg-black/50">
                    <div className="flex items-center gap-3">
                      <ShieldAlert className="w-5 h-5 text-red-600" />
                      <h2 className="text-xl font-black italic tracking-[0.15em] text-white uppercase drop-shadow-md">
                        Configure <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">Matchup</span>
                      </h2>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-full bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-white/50 transition-colors">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex flex-col md:flex-row h-[60vh] min-h-[400px]">
                    {/* BLUE TEAM COLUMN */}
                    <div className="flex-1 flex flex-col border-r border-white/5 bg-gradient-to-b from-blue-900/5 to-transparent">
                      <div className="px-8 py-4 border-b border-white/5 bg-black/20">
                        <h3 className="text-xs font-black tracking-[0.2em] text-blue-500 uppercase">Select Blue Team (First Pick)</h3>
                      </div>
                      <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                        {MPL_TEAMS.map((team) => {
                          const isSelected = localTeamA.id === team.id;
                          const isDisabled = localTeamB.id === team.id;
                          return (
                            <button
                              key={`blue-${team.id}`} onClick={() => !isDisabled && setLocalTeamA(team)} disabled={isDisabled}
                              className={cn(
                                "group relative flex items-center gap-5 p-4 rounded-xl border transition-all duration-300 overflow-hidden",
                                isSelected ? "bg-blue-900/30 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]" : "bg-white/5 border-transparent hover:bg-white/10 hover:border-white/20",
                                isDisabled && "opacity-30 cursor-not-allowed hover:bg-white/5 hover:border-transparent"
                              )}
                            >
                              {isSelected && <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)]" />}
                              <div className="relative w-10 h-10 flex-shrink-0 bg-black/50 rounded-lg p-1">
                                <Image src={team.logo} alt={team.name} fill className="object-contain p-1" />
                              </div>
                              <span className={cn("text-lg font-black italic tracking-wider uppercase transition-colors", isSelected ? "text-white" : "text-white/60 group-hover:text-white")}>{team.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* RED TEAM COLUMN */}
                    <div className="flex-1 flex flex-col bg-gradient-to-b from-red-900/5 to-transparent">
                      <div className="px-8 py-4 border-b border-white/5 bg-black/20">
                        <h3 className="text-xs font-black tracking-[0.2em] text-red-500 uppercase">Select Red Team (Second Pick)</h3>
                      </div>
                      <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                        {MPL_TEAMS.map((team) => {
                          const isSelected = localTeamB.id === team.id;
                          const isDisabled = localTeamA.id === team.id;
                          return (
                            <button
                              key={`red-${team.id}`} onClick={() => !isDisabled && setLocalTeamB(team)} disabled={isDisabled}
                              className={cn(
                                "group relative flex items-center gap-5 p-4 rounded-xl border transition-all duration-300 overflow-hidden",
                                isSelected ? "bg-red-900/30 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]" : "bg-white/5 border-transparent hover:bg-white/10 hover:border-white/20",
                                isDisabled && "opacity-30 cursor-not-allowed hover:bg-white/5 hover:border-transparent"
                              )}
                            >
                              {isSelected && <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,1)]" />}
                              <div className="relative w-10 h-10 flex-shrink-0 bg-black/50 rounded-lg p-1">
                                <Image src={team.logo} alt={team.name} fill className="object-contain p-1" />
                              </div>
                              <span className={cn("text-lg font-black italic tracking-wider uppercase transition-colors", isSelected ? "text-white" : "text-white/60 group-hover:text-white")}>{team.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="px-8 py-5 border-t border-white/10 bg-black/60 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase">System Restart Required Upon Matchup Change</span>
                    <button onClick={handleConfirm} className="relative group px-8 py-3 bg-yellow-500 text-black font-black text-sm tracking-[0.2em] uppercase rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all">
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative z-10">Confirm Matchup</span>
                    </button>
                  </div>
                </motion.div>

              ) : (
                
                /* ========================================== */
                /* STATE 2: REBOOT SEQUENCE (NEW ANIMATION)   */
                /* ========================================== */
                <motion.div 
                  key="override-sequence" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="relative flex flex-col items-center justify-center w-full h-[70vh] min-h-[550px] bg-[#050505] overflow-hidden p-10"
                >
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                  <motion.div initial={{ top: "-10%" }} animate={{ top: "110%" }} transition={{ duration: 1.5, ease: "linear", repeat: Infinity }} className="absolute left-0 w-full h-1 bg-black-500/30 blur-sm z-10" />

                  <div className="relative z-20 flex flex-col items-center w-full max-w-md">
                    
                    {/* NEW: TELEMETRY HEXAGON & EQUALIZER */}
                    <div className="relative flex items-center justify-center w-32 h-32 mb-8">
                      <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-2xl" />

                      {/* Inner Dashed Ring */}
                      <motion.svg animate={{ rotate: -360 }} transition={{ duration: 8, ease: "linear", repeat: Infinity }} className="absolute w-24 h-24 text-yellow-500/60" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="10 6" />
                      </motion.svg>

                      {/* Data Processing Equalizer (ML Vibe) */}
                      <div className="flex items-end justify-center gap-1.5 h-10 z-10">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <motion.div
                            key={i} animate={{ height: ["20%", "100%", "20%"] }} transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                            className="w-1.5 bg-yellow-500 rounded-sm shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                          />
                        ))}
                      </div>
                    </div>

                    <h2 className="text-2xl font-black tracking-[0.4em] text-white uppercase mb-8">
                       <span className="text-white">Override</span>
                    </h2>
                    
                    <div className="w-full flex flex-col gap-2 font-mono text-[9px] tracking-widest uppercase">
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-yellow-400">{">"} Initializing FINDIT Core v1.0...</motion.p>
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-white/40">{">"} Fetching historical data for {localTeamA.name}... OK</motion.p>
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }} className="text-white/40">{">"} Fetching historical data for {localTeamB.name}... OK</motion.p>
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }} className="text-yellow-500">{">"} Syncing XGBoost Classifier...</motion.p>
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className="text-white/40">{">"} Injected telemetry into global state... 100%</motion.p>
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.2 }} className="text-emerald-400 font-bold">{">"} [ BOOT SEQUENCE READY ]</motion.p>
                    </div>

                    <div className="w-full h-1 bg-white/5 rounded-full mt-10 overflow-hidden border border-white/5">
                      <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 5.5, ease: "easeInOut" }} className="h-full bg-gradient-to-r from-green-700 to-teal-500 shadow-[0_0_15px_rgba(59,130,246,1)]" />
                    </div>
                    
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="mt-4 text-[8px] text-white/20 tracking-[0.5em]">
                      DO NOT INTERRUPT DATA INJECTION
                    </motion.span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}