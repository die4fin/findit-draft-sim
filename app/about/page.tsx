"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Sparkles, Hexagon, Eye, TrendingUp, SquareActivity, SquareChevronUp } from "lucide-react";
import Lenis from "lenis";

export default function AboutPage() {
  // Setup Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full bg-black text-white selection:bg-yellow-500/30">
      
      {/* =========================================
          SECTION 1: THE VISION
          ========================================= */}
      <section 
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover" 
        style={{ backgroundImage: "url('/about/vision.png')" }}
      >
        {/* Dark Overlay & Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-0" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.05] z-0 mix-blend-overlay" />

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl"
        >
            <div className="text-sm text-yellow-400 font-bold tracking-[0.3em] uppercase mb-4"></div>
            <div className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] drop-shadow-2xl mb-8"></div>
            <div className="text-lg md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed text-center"></div>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] drop-shadow-2xl mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Beyond</span><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-400 drop-shadow-[0_0_40px_rgba(212,175,55,0.08)]">The Draft</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/60 max-w-3xl font-medium leading-relaxed tracking-wide">
            We are an analytics control centre for <b className="text-yellow-400">Mobile Legends</b>. Unravelling the winning strategies behind the scenes of competitive gaming through precision of <b className="text-yellow-400">Data Science</b> and <b className="text-yellow-400">Artificial Intelligence</b>.
          </p>
        </motion.div>
      </section>


      {/* =========================================
          SECTION 2: THE PHILOSOPHY
          ========================================= */}
      <section 
        className="relative w-full min-h-screen flex items-center justify-start overflow-hidden bg-fixed bg-center bg-cover" 
        style={{ backgroundImage: "url('/about/philosophy.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0" />

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-start text-left px-6 md:px-20 max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-purple   -600/10 border border-purple-500/30 backdrop-blur-md">
              <Eye className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-xl md:text-2xl font-black tracking-[0.4em] text-purple-600 uppercase">The Philosophy</h2>
          </div>

          <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight uppercase">
            No Bias.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Just Clarity.</span>
          </h3>

          <p className="text-base md:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl">
            In a high-pressure competitive environment, the margin for error is extremely narrow. We are here not to replace a coach’s instincts, but to sharpen them. We eliminates human bias and blind assumptions, transforming them into an objective and measurable analytical framework.
          </p>

          <div className="grid grid-cols-2 gap-6 w-full max-w-xl">
            <div className="p-6 rounded-2xl border border-purple-500/20 bg-blue-900/10 backdrop-blur-lg">
              <SquareChevronUp className="w-6 h-6 text-purple-600 mb-4" />
              <div className="text-3xl font-black text-white mb-1">Objectivity</div>
              <div className="text-xs font-bold tracking-widest text-purple-400/60 uppercase">Data-Driven Logic</div>
            </div>
            <div className="p-6 rounded-2xl border border-purple-500/20 bg-blue-900/10 backdrop-blur-lg">
              <TrendingUp className="w-6 h-6 text-purple-400 mb-4" />
              <div className="text-3xl font-black text-white mb-1">Adaptability</div>
              <div className="text-xs font-bold tracking-widest text-purple-400/60 uppercase">Meta Evolution</div>
            </div>
          </div>
        </motion.div>
      </section>


{/* =========================================
          SECTION 3: THE ARCHITECT
          ========================================= */}
      <section 
        className="relative w-full min-h-screen flex items-center justify-end overflow-hidden bg-fixed bg-center bg-cover" 
        style={{ backgroundImage: "url('/about/architect.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-[#020804] via-[#020804]/95 to-transparent z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-0" />

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-start md:items-end text-left md:text-right px-6 md:px-20 max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6 flex-row-reverse">
            <div className="p-4 rounded-2xl bg-emerald  -500/10 border border-yellow-500/30 backdrop-blur-md">
              <Hexagon className="w-8 h-8 text-yellow-500" />
            </div>
            <h2 className="text-xl md:text-2xl font-black tracking-[0.4em] text-yellow-500 uppercase">The Architect</h2>
          </div>

          <h3 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            FINN.
          </h3>
          <div className="text-sm md:text-lg font-black tracking-[0.3em] text-yellow-100/40 uppercase mb-8">
            Computer Engineering Graduate
          </div>

          {/* QUOTE SECTION */}
          <div className="relative mb-12 max-w-2xl text-left md:text-right px-4 md:px-0">
            <p className="text-lg md:text-2xl text-white/80 leading-relaxed font-medium italic relative z-10">
            "Human instincts can falter under the pressure of the stage, but numbers have no emotions."
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-4 w-full relative z-10">
            <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-yellow-600/20 text-sm font-bold text-white/80 backdrop-blur-md shadow-[0_0_15px_rgba(220,38,38,0.1)]">
              <Code2 className="w-5 h-5 text-yellow-500" /> Frontend Architecture
            </div>
            <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-yellow-600/20 text-sm font-bold text-white/80 backdrop-blur-md shadow-[0_0_15px_rgba(220,38,38,0.1)]">
              <Cpu className="w-5 h-5 text-yellow-500" /> Machine Learning Model
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}