"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { Settings2, Cpu, BarChart3, ChevronDown, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DraftSlot from "../components/DraftSlot";
import HeroGrid from "../components/HeroGrid";
import TeamBar from "../components/TeamBar";
import TeamSelector from "../components/TeamSelector";
// UPDATE: Import ALL_TEAMS dari teams.ts
import { ALL_TEAMS } from "../constants/teams";
import { MLBB_HEROES } from "../constants/heroes";
import { MPL_DRAFT_FLOW } from "../constants/draftFlow";
import { cn } from "../lib/utils";

// --- KONSTANTA URUTAN LANE ---
const LANE_ORDER = ["EXP Lane", "Jungler", "Mid Lane", "Gold Lane", "Roamer"];

// --- KOMPONEN DROPDOWN CUSTOM ---
const CustomDropdown = ({ value, options, onChange, placeholder }: { value: string, options: string[], onChange: (val: string) => void, placeholder: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full sm:w-[220px]" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="group flex items-center justify-between w-full rounded-xl border border-white/10 bg-black/50 px-5 py-3.5 text-sm font-bold text-white/80 hover:bg-white/5 hover:text-white hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all backdrop-blur-xl"
      >
        <span className="tracking-wide">{value === "All" ? placeholder : value}</span>
        <ChevronDown className={`w-4 h-4 text-white/50 group-hover:text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -5, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -5, scale: 0.98 }} transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 w-full mt-2 rounded-xl border border-white/10 bg-[#0a0a0c]/95 backdrop-blur-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          >
            <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.05 } } }}>
              {options.map((opt) => (
                <motion.div 
                  variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} key={opt} onClick={() => { onChange(opt); setIsOpen(false); }} 
                  className="px-5 py-3.5 text-sm font-bold text-white/60 hover:text-white hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent cursor-pointer transition-colors border-l-2 border-transparent hover:border-blue-500"
                >
                  {opt === "All" ? placeholder : opt}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- KOMPONEN UTAMA ---
export default function Home() {
  // UPDATE: Menggunakan ALL_TEAMS (Bisa lu sesuaikan default index-nya)
  const [teamA, setTeamA] = useState(ALL_TEAMS[0]);
  const [teamB, setTeamB] = useState(ALL_TEAMS[1]);
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  // --- STATE DRAFT DENGAN UNIQUE ID (uid) ---
  const initialPickStateA = useMemo(() => LANE_ORDER.map((lane, i) => ({ uid: `a-${i}`, heroId: null, lane })), []);
  const initialPickStateB = useMemo(() => [...LANE_ORDER].reverse().map((lane, i) => ({ uid: `b-${i}`, heroId: null, lane })), []);

  const [teamAPicks, setTeamAPicks] = useState<{ uid: string, heroId: string | null, lane: string }[]>(initialPickStateA);
  const [teamBPicks, setTeamBPicks] = useState<{ uid: string, heroId: string | null, lane: string }[]>(initialPickStateB);
  
  const [teamABans, setTeamABans] = useState<(string | null)[]>(Array(5).fill(null));
  const [teamBBans, setTeamBBans] = useState<(string | null)[]>(Array(5).fill(null));
  
  const [step, setStep] = useState(0);
  const [search, setSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedLane, setSelectedLane] = useState("All");

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [prediction, setPrediction] = useState<any>(null);

  // --- AUTO RESET DRAFT KALAU TIM GANTI ---
  useEffect(() => {
    setTeamAPicks(initialPickStateA);
    setTeamBPicks(initialPickStateB);
    setTeamABans(Array(5).fill(null));
    setTeamBBans(Array(5).fill(null));
    setStep(0);
    setPrediction(null);
  }, [teamA.id, teamB.id, initialPickStateA, initialPickStateB]);

  const isFinished = step >= MPL_DRAFT_FLOW.length;
  const currentAction = isFinished ? null : MPL_DRAFT_FLOW[step];
  const activeTeam = isFinished ? null : currentAction?.team;
  const currentPhase = isFinished ? "FINISHED" : currentAction?.type.toUpperCase();

  const isUsed = useCallback((h: string) => {
    const allPicks = [...teamAPicks, ...teamBPicks].map(p => p.heroId);
    return [...allPicks, ...teamABans, ...teamBBans].includes(h);
  }, [teamAPicks, teamBPicks, teamABans, teamBBans]);

  // --- LOGIKA RESHUFFLE DENGAN MEMPERTAHANKAN OBJEK (sliding effect) ---
  const reshuffleByLaneOrder = useCallback((picks: any[], targetOrder: string[]) => {
    const sorted: any[] = new Array(targetOrder.length).fill(null);
    const leftover = [...picks];

    targetOrder.forEach((laneName, idx) => {
      const matchIdx = leftover.findIndex(p => {
        if (!p.heroId) return false;
        const h = MLBB_HEROES.find(hero => hero.id === p.heroId);
        return h?.lane[0] === laneName;
      });

      if (matchIdx !== -1) {
        sorted[idx] = leftover.splice(matchIdx, 1)[0];
        sorted[idx].lane = laneName;
      }
    });

    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] === null && leftover.length > 0) {
        sorted[i] = leftover.shift();
        sorted[i].lane = targetOrder[i];
      }
    }

    return sorted;
  }, []);

  const handleSelect = (heroId: string) => {
    if (isUsed(heroId) || isFinished) return;

    const nextStep = step + 1;

    if (currentAction?.type === "pick") {
      const setPicks = currentAction.team === "A" ? setTeamAPicks : setTeamBPicks;
      setPicks(prev => {
        const copy = [...prev];
        const emptyIdx = copy.findIndex(p => p.heroId === null);
        if (emptyIdx !== -1) copy[emptyIdx] = { ...copy[emptyIdx], heroId };
        return copy;
      });
    } else {
      const setBans = currentAction?.team === "A" ? setTeamABans : setTeamBBans;
      setBans(prev => {
        const copy = [...prev];
        const emptyIdx = copy.findIndex(x => x === null);
        if (emptyIdx !== -1) copy[emptyIdx] = heroId;
        return copy;
      });
    }
    
    setStep(nextStep);

    if (nextStep === MPL_DRAFT_FLOW.length) {
      setTimeout(() => {
        setTeamAPicks(prev => reshuffleByLaneOrder(prev, LANE_ORDER));
        setTeamBPicks(prev => reshuffleByLaneOrder(prev, [...LANE_ORDER].reverse()));
      }, 500); 
    }
  };

  const handleAnalyzeDraft = async () => {
    setIsAnalyzing(true);
    setPrediction(null);
    
    const finalA = reshuffleByLaneOrder(teamAPicks, LANE_ORDER);
    const finalB = reshuffleByLaneOrder(teamBPicks, [...LANE_ORDER].reverse());
    
    setTeamAPicks(finalA);
    setTeamBPicks(finalB);

    try {
      const response = await fetch("https://die4finn-findit-api.hf.space/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          teamA: finalA.map(p => p.heroId).filter(Boolean),
          teamB: finalB.map(p => p.heroId).filter(Boolean),
          teamABans: teamABans.filter(Boolean),
          teamBBans: teamBBans.filter(Boolean)
        }),
      });
      const data = await response.json();
      setTimeout(() => { setPrediction(data); setIsAnalyzing(false); }, 1500);
    } catch (error) {
      console.error(error);
      alert("Error: Server AI Hugging Face sedang offline atau mengalami masalah koneksi.");
      setIsAnalyzing(false);
    }
  };

  const filteredHeroes = useMemo(() => {
    return MLBB_HEROES.filter(hero => {
      const matchRole = selectedRole === "All" || hero.role.includes(selectedRole as any);
      const matchLane = selectedLane === "All" || hero.lane.includes(selectedLane as any);
      return matchRole && matchLane;
    });
  }, [selectedRole, selectedLane]);

  const getIsActive = (team: "A" | "B", type: "pick" | "ban", index: number) => {
    if (isFinished || currentAction?.team !== team || currentAction?.type !== type) return false;
    const arr = type === "pick" ? (team === "A" ? teamAPicks : teamBPicks) : (team === "A" ? teamABans : teamBBans);
    if (type === "pick") return (arr as any[]).findIndex(p => p.heroId === null) === index;
    return (arr as any[]).findIndex(x => x === null) === index;
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center overflow-x-hidden font-sans pt-28 pb-20 bg-[#050505]">
      
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] pointer-events-none" />
      <div className="fixed top-0 left-[-20%] w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed top-0 right-[-20%] w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      <TeamSelector isOpen={isSelectorOpen} onClose={() => setIsSelectorOpen(false)} teamA={teamA} teamB={teamB} setTeamA={setTeamA} setTeamB={setTeamB} />

      <div className="relative z-10 w-full max-w-[1600px] flex flex-col items-center">
        
        {/* HUD ATAS */}
        <div className="relative w-full flex flex-col items-center justify-center min-h-[220px] mb-6">
          <div className="absolute inset-0 flex items-center opacity-80">
            <TeamBar teamA={teamA} teamB={teamB} activeTeam={activeTeam ?? null} />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
            <div className="flex flex-col items-center mb-4">
              <span className={cn("text-[10px] font-black tracking-[0.4em] uppercase mb-1 drop-shadow-md", activeTeam === "A" ? "text-blue-600" : activeTeam === "B" ? "text-red-600" : "text-white/50")}>
                {isFinished ? "DRAFT COMPLETE" : `${activeTeam === "A" ? teamA.name : teamB.name} ${currentPhase} PHASE`}
              </span>
              {!isFinished && <div className="text-5xl font-black text-white drop-shadow-2xl"></div>}
            </div>

            {!isFinished && (
              <div className="flex items-center gap-3 px-5 py-2 mb-4 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl">
                <div className={cn("w-2 h-2 rounded-full animate-pulse", activeTeam === "A" ? "bg-blue-600" : "bg-red-600")} />
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/80 uppercase">Awaiting Input...</span>
              </div>
            )}

            <button onClick={() => setIsSelectorOpen(true)} className="pointer-events-auto flex items-center gap-2 px-4 py-1.5 text-[9px] font-bold text-white/40 uppercase border border-white/5 rounded-full hover:bg-white/10 transition-all">
              <Settings2 className="w-3 h-3" /> System Config
            </button>
          </div>
        </div>

        {/* AREA DRAF (CENTERED) */}
        <div className="w-full flex justify-center items-center gap-10 sm:gap-20 mb-12 mt-4 px-4">
          {/* TEAM A */}
          <div className="flex flex-col gap-6 items-start">
            <div className="flex gap-2 sm:gap-4">
              {teamAPicks.map((p, i) => <DraftSlot key={p.uid} heroId={p.heroId} type="pick" team="A" isActive={getIsActive("A", "pick", i)} laneType={p.lane} />)}
            </div>
            <div className="flex gap-2 sm:gap-4 ml-4">
              {teamABans.map((h, i) => <DraftSlot key={`ban-a-${i}`} heroId={h} type="ban" team="A" isActive={getIsActive("A", "ban", i)} />)}
            </div>
          </div>

          <div className="w-[1px] self-stretch bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {/* TEAM B */}
          <div className="flex flex-col gap-6 items-end">
            <div className="flex gap-2 sm:gap-4 flex-row-reverse">
              {teamBPicks.map((p, i) => <DraftSlot key={p.uid} heroId={p.heroId} type="pick" team="B" isActive={getIsActive("B", "pick", i)} laneType={p.lane} />)}
            </div>
            <div className="flex gap-2 sm:gap-4 mr-4 flex-row-reverse">
              {teamBBans.map((h, i) => <DraftSlot key={`ban-b-${i}`} heroId={h} type="ban" team="B" isActive={getIsActive("B", "ban", i)} />)}
            </div>
          </div>
        </div>

        {/* PANEL HERO / ANALISIS */}
        <div className="w-full max-w-5xl px-6 flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div key="hero-grid" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} className="w-full">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
                <CustomDropdown value={selectedRole} onChange={setSelectedRole} placeholder="All Roles" options={["All", "Assassin", "Fighter", "Mage", "Marksman", "Support", "Tank"]} />
                <CustomDropdown value={selectedLane} onChange={setSelectedLane} placeholder="All Lanes" options={["All", "EXP Lane", "Gold Lane", "Mid Lane", "Jungler", "Roamer"]} />
              </div>
              <HeroGrid heroes={filteredHeroes} onSelect={handleSelect} search={search} setSearch={setSearch} pickedOrBannedHeroes={[...teamAPicks.map(p=>p.heroId), ...teamBPicks.map(p=>p.heroId), ...teamABans, ...teamBBans].filter(Boolean) as string[]} />
            </motion.div>
          ) : (
            <motion.div key="analyze-section" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center w-full mt-4">
              {!prediction ? (
                <button 
                  onClick={handleAnalyzeDraft} 
                  disabled={isAnalyzing} 
                  className="group relative px-14 py-6 rounded-2xl bg-[#09090b] border border-white/10 text-white font-black tracking-widest uppercase overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-all hover:border-white/30 hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {/* Animasi Glow di Belakang Tombol */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-yellow-500/10 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <span className="relative z-10 flex items-center gap-4">
                    {isAnalyzing ? <Activity className="w-6 h-6 text-yellow-500 animate-pulse" /> : <Cpu className="w-6 h-6 text-white/50 group-hover:text-yellow-500 transition-colors" />}
                    <span className={cn("transition-colors", isAnalyzing ? "text-yellow-500" : "text-white")}>
                      {isAnalyzing ? "Processing Telemetry..." : "Execute Analysis"}
                    </span>
                  </span>
                </button>
              ) : (
                <div className="relative w-full mt-8 p-10 rounded-3xl bg-[#0a0a0c]/80 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden">
                  {/* Ambient Background Glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-yellow-500/5 blur-[120px] pointer-events-none" />

                  <div className="relative z-10 flex items-center gap-4 mb-10">
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                      <BarChart3 className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-black tracking-[0.15em] text-white uppercase drop-shadow-md">
                      Prediction <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Outcome</span>
                    </h3>
                  </div>
                  
                  {/* Progress Bar & Insights */}
                  <div className="relative z-10 mb-12">
                    <div className="flex justify-between mb-4 text-xs font-black tracking-widest uppercase">
                      <span className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">{teamA.name}</span>
                      <span className="text-red-400 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">{teamB.name}</span>
                    </div>
                    
                    {/* 3D Glassmorphism Progress Bar */}
                    <div className="w-full h-14 rounded-2xl bg-black/60 overflow-hidden flex border border-white/10 shadow-[inset_0_2px_15px_rgba(0,0,0,0.8)] relative">
                      <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: `${prediction.winProbability.teamA * 100}%` }} 
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative bg-gradient-to-r from-blue-900 to-blue-500 flex items-center justify-start px-6 font-black text-xl text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] z-10"
                      >
                        {(prediction.winProbability.teamA * 100).toFixed(1)}%
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 mix-blend-overlay" />
                      </motion.div>
                      
                      <div className="flex-1 relative bg-gradient-to-l from-red-900 to-red-500 flex items-center justify-end px-6 font-black text-xl text-white shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                        {(prediction.winProbability.teamB * 100).toFixed(1)}%
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 mix-blend-overlay" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Tactical Insight Card */}
                    <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 shadow-lg">
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
                      <h4 className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-white/40 uppercase mb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Tactical Insight
                      </h4>
                      <p className="text-sm md:text-base text-white/80 leading-relaxed font-medium">
                        {prediction.insight}
                      </p>
                    </div>
                    
                    {/* Key Variables Card */}
                    <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 shadow-lg">
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-400/30 to-transparent" />
                      <h4 className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-white/40 uppercase mb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Key Variables
                      </h4>
                      <div className="flex flex-wrap gap-2.5">
                        {prediction.recommendations.map((r: string, i: number) => (
                          <span 
                            key={i} 
                            className="px-4 py-2 bg-[#121212] border border-white/10 text-yellow-500/90 text-[10px] font-bold tracking-widest uppercase rounded-lg shadow-md transition-all hover:border-yellow-500/30 hover:bg-yellow-500/5"
                          >
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </div>
    </div>
  );
}