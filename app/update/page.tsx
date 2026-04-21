"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Activity, ChevronDown, Swords, Globe2, Newspaper } from "lucide-react";
import Image from "next/image";
import Lenis from "lenis";
import { cn } from "../lib/utils";
import { LEAGUES, NEWS_UPDATES } from "../constants/leagues"; // Sesuaikan path ini

// =========================================
// DROPDOWN KUSTOM DENGAN ANIMASI
// =========================================
const LeagueSelector = ({ activeId, onSelect }: { activeId: string, onSelect: (id: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const activeLeague = LEAGUES.find(l => l.id === activeId) || LEAGUES[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => { if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setIsOpen(false); };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full sm:w-[320px] z-50" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-5 py-4 bg-[#0a0a0c] border border-yellow-500/30 rounded-2xl shadow-[0_0_20px_rgba(234,179,8,0.15)] hover:border-yellow-400/60 transition-all group"
      >
        <div className="flex items-center gap-4">
          <img 
            src={activeLeague.flag} 
            alt={activeLeague.name} 
            className="w-8 h-auto rounded-sm drop-shadow-md object-cover"
          />
          <span className="text-sm font-black tracking-widest text-white uppercase">{activeLeague.name}</span>
        </div>
        <ChevronDown className={cn("w-5 h-5 text-yellow-500 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            // TAMBAHIN data-lenis-prevent DI SINI BIAR BISA DI-SCROLL
            data-lenis-prevent="true" 
            className="absolute top-full left-0 w-full mt-2 bg-[#050505]/95 backdrop-blur-xl border border-yellow-500/20 rounded-2xl shadow-2xl max-h-[300px] overflow-y-auto overscroll-contain custom-scrollbar z-50"
          >
            {LEAGUES.map((league) => (
              <button
                key={league.id}
                onClick={() => { onSelect(league.id); setIsOpen(false); }}
                className={cn(
                  "flex items-center gap-4 w-full px-5 py-3.5 text-left transition-colors border-l-2",
                  activeId === league.id ? "bg-yellow-500/10 border-yellow-500 text-yellow-100" : "border-transparent text-white/60 hover:bg-white/5 hover:text-white"
                )}
              >
                <img 
                  src={league.flag} 
                  alt={league.name} 
                  className="w-6 h-auto rounded-[2px] drop-shadow-sm object-cover opacity-90 group-hover:opacity-100"
                />
                <span className="text-xs font-bold tracking-widest uppercase">{league.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function UpdatePage() {
  const [activeLeagueId, setActiveLeagueId] = useState(LEAGUES[0].id);
  const activeLeague = LEAGUES.find(l => l.id === activeLeagueId) || LEAGUES[0];

  // Setup Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative w-full bg-[#050505] text-white overflow-hidden font-sans selection:bg-yellow-500/30">
      
      {/* =========================================
          SECTION 1: HERO & STANDINGS
          ========================================= */}
      <section className="relative w-full min-h-screen pt-32 pb-20 px-4 sm:px-6 flex flex-col items-center bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-[#050505] z-0" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none z-0" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 mb-12 relative z-20"
        >
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-yellow-500/20 bg-yellow-500/10 backdrop-blur-md">
              <Globe2 className="w-4 h-4 text-yellow-400" />
              <span className="text-[10px] font-black tracking-[0.2em] text-yellow-100 uppercase">Global Telemetry</span>
            </div>
            {/* JUDUL DINAMIS MENGIKUTI NAMA LIGA */}
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              {activeLeague.name} <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">Standings</span>
            </h1>
          </div>

          <LeagueSelector activeId={activeLeagueId} onSelect={setActiveLeagueId} />
        </motion.div>

        {/* Table Section */}
        <motion.div 
          key={activeLeagueId} 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="w-full max-w-5xl relative z-10"
        >
          <div className="bg-[#0a0a0c]/80 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            
            <div className="grid grid-cols-12 gap-4 px-6 py-5 bg-white/5 border-b border-white/10 text-xs font-black tracking-widest text-white/50 uppercase">
              <div className="col-span-2 sm:col-span-1 text-center">Rank</div>
              <div className="col-span-10 sm:col-span-5">Team</div>
              <div className="hidden sm:block col-span-2 text-center">Match <span className="text-[9px] font-medium opacity-60">(W-L)</span></div>
              <div className="hidden sm:block col-span-2 text-center">Game <span className="text-[9px] font-medium opacity-60">(W-L)</span></div>
              <div className="hidden sm:block col-span-2 text-center">Diff</div>
            </div>

            <div className="flex flex-col">
              <AnimatePresence mode="popLayout">
                {activeLeague.standings.map((team, idx) => (
                  <motion.div 
                    key={team.name}
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: idx * 0.05 }}
                    // AKSEN MERAH UNTUK ZONA GUGUR (RANK 7 KE ATAS)
                    className={cn(
                      "grid grid-cols-12 gap-4 px-6 py-4 border-b hover:bg-white/[0.03] transition-colors items-center group relative",
                      team.rank >= 7 ? "border-red-500/20 bg-red-950/20" : "border-white/5"
                    )}
                  >
                    {/* Indikator Garis Merah di pinggir kiri untuk Zona Gugur */}
                    {team.rank >= 7 && <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500/50" />}

                    <div className="col-span-2 sm:col-span-1 flex justify-center">
                      {team.rank === 1 ? (
                        <div className="w-8 h-8 rounded-full bg-yellow-500/20 border border-yellow-500 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.4)]">
                          <Trophy className="w-4 h-4 text-yellow-400" />
                        </div>
                      ) : team.rank >= 7 ? (
                        // Warna angka Rank Merah di Zona Gugur
                        <span className="text-xl font-black text-red-500/80">{team.rank}</span>
                      ) : (
                        <span className="text-xl font-black text-white/30">{team.rank}</span>
                      )}
                    </div>

                    {/* Team Name & Logo */}
                    <div className="col-span-10 sm:col-span-5 flex items-center gap-4">
                      <div className="relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex-shrink-0 overflow-hidden flex items-center justify-center p-1">
                        <img src={team.logo} alt={team.name} className="w-full h-full object-contain drop-shadow-lg" onError={(e) => e.currentTarget.src = "/teams/placeholder.png"} />
                      </div>
                      <span className={cn(
                        "text-base sm:text-lg font-black tracking-wide transition-colors",
                        team.rank >= 7 ? "text-white/80 group-hover:text-red-400" : "text-white group-hover:text-yellow-400"
                      )}>
                        {team.name}
                      </span>
                    </div>

                    <div className="col-span-12 sm:hidden flex justify-between px-2 pt-2 border-t border-white/5 mt-2">
                      <div className="text-xs font-bold text-white/60">M: <span className="text-white">{team.matchW}-{team.matchL}</span></div>
                      <div className="text-xs font-bold text-white/60">G: <span className="text-white">{team.gameW}-{team.gameL}</span></div>
                      <div className={cn("text-xs font-black", team.diff > 0 ? "text-green-400" : team.diff < 0 ? "text-red-400" : "text-white/50")}>
                        {team.diff > 0 ? `+${team.diff}` : team.diff}
                      </div>
                    </div>

                    <div className="hidden sm:flex col-span-2 justify-center items-center gap-1.5">
                      <span className="text-green-400 font-black text-lg">{team.matchW}</span>
                      <span className="text-white/30 font-bold">-</span>
                      <span className="text-red-400 font-black text-lg">{team.matchL}</span>
                    </div>

                    <div className="hidden sm:flex col-span-2 justify-center items-center gap-1.5">
                      <span className="text-green-400 font-black text-lg">{team.gameW}</span>
                      <span className="text-white/30 font-bold">-</span>
                      <span className="text-red-400 font-black text-lg">{team.gameL}</span>
                    </div>

                    <div className="hidden sm:flex col-span-2 justify-center items-center">
                      <div className={cn(
                        "px-4 py-1.5 rounded-lg text-sm font-black w-16 text-center border",
                        team.diff > 0 ? "bg-green-500/10 text-green-400 border-green-500/20" : 
                        team.diff < 0 ? "bg-red-500/10 text-red-400 border-red-500/20" : 
                        "bg-white/5 text-white/50 border-white/10"
                      )}>
                        {team.diff > 0 ? `+${team.diff}` : team.diff}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center mt-6 relative z-10">
             <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">
               <Swords className="w-3 h-3" /> Data synchronized dynamically
             </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 2: NEWS & INSIGHTS GRID
          ========================================= */}
      <section className="relative w-full py-24 px-6 border-t border-yellow-900/20 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex items-center gap-3 mb-10">
            <Newspaper className="w-6 h-6 text-yellow-400" />
            <h2 className="text-3xl font-black uppercase tracking-tight text-white">Latest <span className="text-yellow-400">News</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NEWS_UPDATES.map((news, i) => (
              <motion.div 
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col bg-[#0a0a0c] border border-white/10 rounded-3xl overflow-hidden hover:border-yellow-500/40 transition-colors"
              >
                {/* News Image */}
                <div className="relative w-full h-48 overflow-hidden bg-white/5">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-500/90 text-black text-[10px] font-black uppercase tracking-widest rounded-md shadow-lg">
                    {news.category}
                  </div>
                </div>

                {/* News Content */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[10px] font-bold text-white/40 mb-2 uppercase tracking-wider">{news.date}</span>
                  <h3 className="text-xl font-black text-white leading-tight mb-3 group-hover:text-yellow-400 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed font-light mt-auto">
                    {news.excerpt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}