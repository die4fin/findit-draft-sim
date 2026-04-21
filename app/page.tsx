"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { 
  Activity, ShieldCheck, Cpu, Database, Layers, Zap, MousePointer2, BrainCircuit, Fingerprint 
} from "lucide-react";

export default function LandingPage() {
  const containerRef = useRef(null);

  // --- 1. SETUP LENIS SMOOTH SCROLL ---
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // --- 2. SETUP SCROLL ANIMATION ---
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const textX = useTransform(scrollYProgress, [0.2, 0.8], ["10%", "-40%"]);
  const imageY = useTransform(scrollYProgress, [0.1, 0.4], ["10%", "-10%"]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#050505] text-white selection:bg-yellow-600/30 font-sans overflow-hidden">
      
      {/* GLOBAL HUD OVERLAY */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02] pointer-events-none z-0" />

      {/* ========================================= */}
      {/* SECTION 1: THE PREMIUM HERO               */}
      {/* ========================================= */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-500/10 rounded-full blur-[200px] pointer-events-none" />
        
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 flex flex-col items-center text-center w-full max-w-6xl">
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter leading-[0.85] uppercase italic">
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Predict The</span> <br />
            <span className="inline-flex animate-shimmer bg-[linear-gradient(110deg,#333,45%,#fff,55%,#333)] bg-[length:200%_100%] bg-clip-text text-transparent">
              Unpredictable.
            </span>
          </h1>
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[9px] font-bold tracking-[0.4em] text-white/30 uppercase">Initiate Sequence</span>
          <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
             <motion.div 
               animate={{ y: ["-100%", "200%"] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white to-transparent"
             />
          </div>
        </motion.div>
      </section>

      {/* ========================================= */}
      {/* SECTION 2: TACTICAL ANALYSIS              */}
      {/* ========================================= */}
      <section className="relative w-full min-h-screen flex items-center justify-center py-32 px-6">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col z-20 order-2 lg:order-1">
            <div className="w-16 h-1.5 bg-yellow-500  mb-8 shadow-[0_0_15px_rgba(34,197,94,0.8)]" />
            <h2 className="text-5xl md:text-[6.5rem] font-black uppercase leading-[0.85] tracking-tighter mb-8 italic">
              Winning <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-300">Calculated.</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed font-medium max-w-lg mb-10">
              The draft phase isn’t just about picking heroes, it’s about analysing probabilities. We extracts thousands of data points from professional tournament scenarios to give you a better insights into the game as it unfolds.
            </p>
            <div className="flex items-center gap-4 text-yellow-500 font-bold tracking-[0.3em] text-[10px] uppercase border border-yellow-500/20 px-6 py-3 rounded-full bg-yellow-500/5 w-fit">
              <ShieldCheck className="w-4 h-4" /> Unfair Advantage Installed
            </div>
          </div>

          <motion.div style={{ y: imageY }} className="relative w-full flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[340px] lg:max-w-[420px] aspect-[9/16] rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)] ring-1 ring-white/10 ring-inset">
              <Image 
                src="/2.png" 
                alt="Analytical Core" 
                fill 
                className="object-cover transition-transform duration-1000 hover:scale-110" 
              />
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* ========================================= */}
      {/* SECTION 3: THE TYPOGRAPHY BREAKOUT        */}
      {/* ========================================= */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-[#030303] border-y border-white/5">
        <motion.div 
          style={{ x: textX, WebkitTextStroke: "2px rgba(255, 255, 255, 0.15)" }} 
          className="whitespace-nowrap text-[12rem] md:text-[25rem] font-black uppercase italic text-transparent tracking-tighter select-none"
        >
          DECODE THE META • DECODE THE META • DECODE THE META
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <h2 className="text-2xl md:text-3xl font-black tracking-[0.5em] md:tracking-[1em] text-yellow-500 uppercase drop-shadow-md backdrop-blur-sm px-10 py-4 rounded-full border border-white/5">Intelligence</h2>
        </div>
      </section>

      {/* ========================================= */}
      {/* SECTION 4: THE EXPANDED BENTO GRID        */}
      {/* ========================================= */}
      <section className="relative w-full py-32 px-6 bg-[#050505] z-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">Neural <span className="text-yellow-500">Infrastructure</span></h2>
            <p className="text-white/30 text-sm tracking-[0.2em] font-bold uppercase">FINDIT Core</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
            <div className="md:col-span-2 md:row-span-2 relative p-10 rounded-[2.5rem] bg-[#0a0a0c] border border-white/10 overflow-hidden group">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-yellow-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <Cpu className="w-12 h-12 text-yellow-600" />
                <div>
                  <h3 className="text-3xl font-black uppercase mb-4 tracking-tight leading-none">XGBoost <br/>Deep Classification</h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                    A Gradient Boosting-based prediction model that processes thousands of iterations to accurately determine the winner based on team composition.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 relative p-10 rounded-[2.5rem] bg-[#0a0a0c] border border-white/10 overflow-hidden group">
              <div className="relative z-10 flex h-full items-center gap-8">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group-hover:border-green-500/50 transition-colors">
                  <Activity className="w-10 h-10 text-green-500 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase mb-2">Live Telemetry</h3>
                  <p className="text-sm text-white/40 leading-relaxed max-w-xs">Instant probability calculations that react to each user input in the real-time simulator.</p>
                </div>
              </div>
            </div>

            <div className="relative p-10 rounded-[2.5rem] bg-[#0a0a0c] border border-white/10 flex flex-col justify-between group hover:border-yellow-500/50 transition-all">
               <Database className="w-10 h-10 text-white/50 group-hover:text-yellow-500 transition-colors" />
               <h3 className="text-lg font-black uppercase leading-tight">Historical <br/>Synergy</h3>
            </div>

            <div className="relative p-10 rounded-[2.5rem] bg-[#0a0a0c] border border-white/10 flex flex-col justify-between group hover:border-yellow-500/50 transition-all">
               <Layers className="w-10 h-10 text-white/50 group-hover:text-yellow-500 transition-colors" />
               <h3 className="text-lg font-black uppercase leading-tight">Feature <br/>Importance</h3>
            </div>

            <div className="md:col-span-2 relative p-10 rounded-[2.5rem] bg-green-600 border border-white/10 flex items-center justify-between group overflow-hidden">
               <div className="absolute inset-0 bg-black/10 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
               <div className="relative z-10">
                 <h3 className="text-2xl font-black uppercase text-white tracking-tighter">Ultra Fast Inference</h3>
                 <p className="text-white/70 text-xs mt-2 uppercase font-bold tracking-widest">Powered by FastAPI</p>
               </div>
               <Zap className="w-12 h-12 text-white/30 relative z-10" />
            </div>

            <div className="md:col-span-2 relative p-8 md:p-10 rounded-[2.5rem] bg-[#0a0a0c] border border-white/10 flex flex-col justify-center overflow-hidden">
               <span className="text-white/20 font-black text-xl md:text-3xl tracking-[0.2em] md:tracking-[0.4em] uppercase text-center w-full block italic">
                 NEXT.JS + FASTAPI + XGBOOST
               </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* SECTION 5: OBJECTIVE VALIDATION           */}
      {/* ========================================= */}
      <section className="relative w-full py-40 px-6 flex flex-col items-center justify-center text-center border-t border-white/5 bg-[#050505]">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08)_0%,transparent_50%)] pointer-events-none" />
         
         <div className="max-w-4xl mx-auto relative z-10">
            <ShieldCheck className="w-16 h-16 text-green-600 mx-auto mb-10 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white/80 leading-snug mb-8">
              We do not dictate your strategy.<br/>
              <span className="text-white font-black italic">We validate it with data.</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto leading-relaxed text-lg">
              FINDIT is not a bot <i className="text-white/60">auto-pick</i>. It is a pure analytics simulation space. Enter your <i className="text-white/60">draft</i> combinations, and let our classification model evaluate the winning probability before the actual match begins.
            </p>
         </div>
      </section>

      {/* ========================================= */}
      {/* SECTION 6: THE PROBABILITY ENGINE         */}
      {/* ========================================= */}
          <section className="relative w-full py-20 px-6 flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0c]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] border border-white/10 rounded-t-3xl md:rounded-t-[3rem] bg-black/50 backdrop-blur-xl shadow-[0_-20px_50px_rgba(212,175,55,0.08)] flex flex-col items-center pt-12 px-6 overflow-hidden transform translate-y-10 group hover:translate-y-0 transition-transform duration-700 ease-out">
                
                <div className="w-1/2 h-1 bg-white/5 rounded-full mb-8" />

                <div className="flex items-center gap-3 mb-12">
                  <div className="w-2 h-2 rounded-full bg-[rgb(0,216,4)] animate-pulse shadow-[0_0_8px_rgba(255,240,0,0.1)]" />
                  <h3 className="text-white/50 font-black tracking-[0.5em] text-xs uppercase text-center">
                      Live Analysis Preview
                  </h3>
                </div>
                
                <div className="w-full max-w-2xl mb-8 relative z-10">
                  <div className="flex justify-between mb-4">
                      <span className="text-blue-500 font-black tracking-widest uppercase text-sm drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">EVOS</span>
                      <span className="text-red-500 font-black tracking-widest uppercase text-sm drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">ALTER EGO</span>
                  </div>

                  <div className="w-full h-8 rounded-lg bg-[#050505] border border-white/5 overflow-hidden flex relative shadow-inner">
                      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/20 z-10" />
                      
                      <motion.div
                        initial={{ width: "50%" }}
                        whileInView={{ width: "68%" }}
                        transition={{ duration: 2.5, ease: "circOut", delay: 0.3 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-blue-900 to-blue-500 relative flex items-center px-4 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                      >
                        <span className="text-xs font-black text-white tracking-wider">68%</span>
                      </motion.div>
                      
                      <div className="flex-1 bg-gradient-to-l from-red-900 to-red-500 flex items-center justify-end px-4 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                        <span className="text-xs font-black text-white tracking-wider">32%</span>
                      </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex-1 p-5 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md"
                  >
                      <div className="text-[10px] text-blue-500 font-black tracking-[0.2em] uppercase mb-2">Advantage Shift</div>
                      <div className="text-xs text-white/60 leading-relaxed">
                        A strong synergy has been observed in jungle & mid. 
                        <span className="text-white font-bold"> +18% Win Probability.</span>
                      </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex-1 p-5 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md"
                  >
                      <div className="text-[10px] text-red-500 font-black tracking-[0.2em] uppercase mb-2">Vulnerability</div>
                      <div className="text-xs text-white/60 leading-relaxed">
                        A lack of crowd control has been identified. 
                        <span className="text-white font-bold"> -12% teamfight effectiveness.</span>
                      </div>
                  </motion.div>
                </div>

                <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#0a0a0c] to-transparent pointer-events-none" />
            </div>
          </section>

          {/* ========================================= */}
          {/* SECTION 7: DATA STREAM MARQUEE            */}
          {/* ========================================= */}
    <section className="relative w-full py-10 bg-yellow-500 overflow-hidden flex items-center">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap text-black/80 font-black uppercase tracking-widest text-sm"
      >
        <span className="mx-4">• DECISION TREES</span>
        <span className="mx-4">• GRADIENT BOOSTING</span>
        <span className="mx-4">• HYPERPARAMETER TUNING</span>
        <span className="mx-4">• LATENT SPACE ANALYSIS</span>
        <span className="mx-4">• COUNTER-PICK MATRIX</span>
        <span className="mx-4">• HERO SYNERGY INDEX</span>
        <span className="mx-4">• WIN RATE PROBABILITY</span>
        
        <span className="mx-4">• DECISION TREES</span>
        <span className="mx-4">• GRADIENT BOOSTING</span>
        <span className="mx-4">• HYPERPARAMETER TUNING</span>
        <span className="mx-4">• LATENT SPACE ANALYSIS</span>
        <span className="mx-4">• COUNTER-PICK MATRIX</span>
        <span className="mx-4">• HERO SYNERGY INDEX</span>
        <span className="mx-4">• WIN RATE PROBABILITY</span>
      </motion.div>
    </section>

          {/* ========================================= */}
          {/* SECTION 8: THE FINAL CTA                  */}
          {/* ========================================= */}
          <section className="relative w-full py-48 flex flex-col items-center justify-center px-6 text-center bg-[#030303]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.12)_0%,transparent_60%)]" />
            
            <h2 className="text-5xl md:text-[8rem] font-black uppercase tracking-tighter mb-12 italic leading-none relative z-10">
              Ready To <br/> <span className="text-yellow-500 drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]">Simulate?</span>
            </h2>
            
            <Link href="/simulator">
              <button className="group relative px-20 py-8 bg-white text-black font-black text-xl tracking-[0.4em] uppercase rounded-full shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] hover:scale-105 transition-all overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(212,175,55,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center gap-4">
                    Initialize <MousePointer2 className="w-6 h-6" />
                </span>
              </button>
            </Link>
          </section>

    </div>
  );
}