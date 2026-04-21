"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Network, GitBranch, Terminal, Layers, Activity, LockOpen, Cpu, Eye, Zap, ShieldCheck } from "lucide-react";
import Lenis from "lenis";

export default function ModelPage() {
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
    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative w-full bg-[#050505] text-white selection:bg-yellow-500/30">
      
      {/* =========================================
          SECTION 1: HERO (PREDICTIVE INTELLIGENCE)
          ========================================= */}
      <section 
        className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-fixed bg-center bg-cover"
        // Gambar: Macro shot sirkuit komputer yang ngasih vibe "Inside the Machine"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#050505] z-0" />
        <div className="absolute inset-0 bg-black/50 z-0" /> 
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 z-0 mix-blend-overlay" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center text-center px-6"
        >
          <div className="flex items-center gap-3 px-5 py-2 mb-8 rounded-full border border-yellow-500/30 bg-yellow-950/20 backdrop-blur-md shadow-[0_0_20px_rgba(234,179,8,0.1)]">
            <Cpu className="w-4 h-4 text-yellow-400" />
            <span className="text-xs font-black tracking-[0.3em] text-yellow-400 uppercase">Technical Architecture</span>
          </div>

          <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-black tracking-tighter uppercase leading-[0.85] mb-6">
            <span className="text-white">Predictive</span><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 drop-shadow-[0_0_40px_rgba(234,179,8,0.3)]">Intelligence.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-yellow-100/50 max-w-2xl font-medium tracking-wide">
            A deep-dive into our core. Exploring the bridge between high-octane computation and cognitive transparency.
          </p>
        </motion.div>
      </section>


      {/* =========================================
          SECTION 2: XGBOOST (HIGH-OCTANE COMPUTATION)
          ========================================= */}
      <section className="relative w-full flex flex-col md:flex-row items-start border-t border-yellow-900/20">
        
        {/* STICKY IMAGE LEFT */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 overflow-hidden bg-black flex items-center justify-center border-r border-yellow-900/20">
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-900/20 to-transparent z-10" />
          {/* Gambar: Server racks skala besar, merepresentasikan "Big Data / High Computation" */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 grayscale-[100%] contrast-125 mix-blend-screen scale-110"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034')" }}
          />
          
          <div className="relative z-20 text-center">
             <GitBranch className="w-16 h-16 text-yellow-500/40 mx-auto mb-4" />
             <div className="text-2xl font-black tracking-[0.5em] text-yellow-500/20 uppercase font-mono">ENSM_XGB</div>
          </div>
        </div>

        {/* SCROLLING TEXT RIGHT */}
        <div className="w-full md:w-1/2 py-20 md:py-[30vh] px-8 md:px-20 flex flex-col gap-32">
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }}>
            <h3 className="text-4xl md:text-5xl font-black uppercase mb-6 text-white leading-none">
              Extreme <br/><span className="text-yellow-400 italic">Gradient Boosting.</span>
            </h3>
            <p className="text-lg text-white/60 leading-relaxed font-light italic">
              At the heart of our system lies XGBoost, an advanced implementation of Gradient Boosted Decision Trees. Engineered for computational speed and predictive accuracy, it handles high-dimensional game data with unrivalled efficiency.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }}>
            <h3 className="text-3xl font-black uppercase mb-4 text-white">Iterative Optimization</h3>
            <p className="text-lg text-white/60 leading-relaxed mb-8 font-light italic">
              The model operates by building thousands of decision trees in a sequential ensemble. Each new tree is specifically trained to minimise the residual errors of its predecessors, converging towards a state of hyper-precision.
            </p>
            <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-yellow-900/10 border border-yellow-500/20 w-fit backdrop-blur-sm">
              <Layers className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-bold text-yellow-100 uppercase tracking-widest">Parallel Processing Engaged</span>
            </div>
          </motion.div>

        </div>
      </section>


      {/* =========================================
          SECTION 3: XAI & SHAP (COGNITIVE TRANSPARENCY)
          ========================================= */}
      <section className="relative w-full flex flex-col md:flex-row-reverse items-start border-t border-yellow-900/20">
        
        {/* STICKY IMAGE RIGHT */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 overflow-hidden bg-black flex items-center justify-center border-l border-yellow-900/20">
          <div className="absolute inset-0 bg-gradient-to-tl from-amber-900/20 to-transparent z-10" />
          {/* Gambar: Abstrak data lines / network untuk merepresentasikan neural/AI transparency */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 grayscale-[100%] contrast-125 mix-blend-screen scale-110"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070')" }}
          />
          
          <div className="relative z-20 text-center">
             <Activity className="w-16 h-16 text-amber-500/40 mx-auto mb-4" />
             <div className="text-2xl font-black tracking-[0.5em] text-amber-500/20 uppercase font-mono">EXPL_SHAP</div>
          </div>
        </div>

        {/* SCROLLING TEXT LEFT */}
        <div className="w-full md:w-1/2 py-20 md:py-[30vh] px-8 md:px-20 flex flex-col gap-32">
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }}>
            <h3 className="text-4xl md:text-5xl font-black uppercase mb-6 text-white leading-none">
              Shattering the <br/><span className="text-amber-400 italic">Black Box.</span>
            </h3>
            <p className="text-lg text-white/60 leading-relaxed font-light italic">
              Predictions without justification are merely guesses. Most AI operates in total obscurity, We defies this by implementing <b className="text-amber-400">Explainable AI (XAI)</b> to ensure every prediction is backed by logical proof.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }}>
            <h3 className="text-3xl font-black uppercase mb-4 text-white">Shapley Additive Explanations</h3>
            <p className="text-lg text-white/60 leading-relaxed mb-8 font-light italic">
              By utilising <b className="text-white">SHAP values</b> derived from Game Theory, we deconstruct the specific contribution weight of every pick and ban. We don’t just show who wins, we provide a granular audit of <i>why</i> they win.
            </p>
            <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-amber-900/10 border border-amber-500/20 w-fit backdrop-blur-sm">
              <Eye className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-bold text-amber-100 uppercase tracking-widest">Interpretability Protocol Active</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================
          SECTION 4: THE CONVERGENCE
          ========================================= */}
      <section className="relative w-full py-32 px-6 bg-[#080808] border-t border-yellow-900/20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16"
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="text-yellow-400 w-6 h-6" />
              <h2 className="text-xl font-black tracking-[0.4em] text-yellow-400 uppercase">The Synergy</h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-tight">
              Power Meets <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white">Transparency.</span>
            </h3>
            <p className="text-lg text-white/50 leading-relaxed font-light italic">
              The combination of XGBoost and XAI represents the pinnacle of modern data engineering. While XGBoost provides the raw predictive power required to analyse the chaos of Land of Dawn, XAI ensures that this power is channelled into actionable, human-readable insights for elite decision-making.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl group hover:border-yellow-500/50 transition-all">
              <ShieldCheck className="w-10 h-10 text-yellow-400 mb-6" />
              <h4 className="text-xl font-black uppercase mb-2">Robustness</h4>
              <p className="text-sm text-white/40">Guaranteed stability against data noise and outlier hero picks.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl group hover:border-yellow-500/50 transition-all">
              <Terminal className="w-10 h-10 text-yellow-400 mb-6" />
              <h4 className="text-xl font-black uppercase mb-2">Auditability</h4>
              <p className="text-sm text-white/40">Complete visibility into the model's logic for post-match analysis.</p>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}