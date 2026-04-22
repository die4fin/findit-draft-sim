"use client";

import Link from "next/link";
import Image from "next/image";
import { Activity, ArrowUpRight } from "lucide-react";

// --- CUSTOM SVG BRAND ICONS --- 
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#030303] border-t border-white/5 overflow-hidden pt-24 pb-8 px-6 font-sans">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none select-none opacity-[0.03] z-0">
        <span className="text-[15vw] font-black uppercase tracking-tighter whitespace-nowrap text-white leading-none">FINDIT LABS</span>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          <div className="col-span-1 md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#050505] border border-white/10 overflow-hidden group-hover:border-yellow-500/50 transition-all duration-300">
              <Image 
                src="/brand-logo.png" 
                alt="FINDIT Logo" 
                fill 
                // p-1.5 dibuang agar logo mentok ke border
                // object-cover mastiin logo ngisi seluruh area kotak
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
                sizes="40px" 
              />
            </div>
              <h2 className="text-xl font-black tracking-widest text-white uppercase leading-none">FINDIT <span className="text-yellow-500">LABS</span></h2>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-sm mb-8 font-medium">
              The most advanced MLBB draft analytics platform. Extracting thousands of data points to provide absolute tactical advantage through Machine Learning.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://github.com/die4fin" className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all group">
                <GithubIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
              </Link>
              <Link href="https://www.linkedin.com/in/arifin-ramadhani" className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all group">
                <LinkedinIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
              </Link>
              <Link href="https://www.instagram.com/onlyf1nn/" className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all group">
                <InstagramIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
              </Link>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h3 className="text-xs font-black tracking-[0.2em] text-white/30 uppercase mb-6">Navigation</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/simulator" className="text-sm text-white/60 hover:text-yellow-500 font-bold flex items-center gap-2 group">Simulator <ArrowUpRight className="w-3 h-3" /></Link></li>
              <li><Link href="/model" className="text-sm text-white/60 hover:text-yellow-500 font-bold flex items-center gap-2 group">Models <ArrowUpRight className="w-3 h-3" /></Link></li>
              <li><Link href="/about" className="text-sm text-white/60 hover:text-yellow-500 font-bold flex items-center gap-2 group">About Us <ArrowUpRight className="w-3 h-3" /></Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-4 flex flex-col md:items-end">
             <div className="bg-[#0a0a0c] border border-white/10 rounded-2xl p-6 w-full max-w-[280px]">
                <h3 className="text-[10px] font-black tracking-[0.2em] text-white/30 uppercase mb-4">Core Engine</h3>
                <div className="space-y-3">
                  <div className="flex justify-between"><span className="text-xs text-white/60 font-medium">Frontend</span><span className="text-xs font-bold text-white uppercase">Next.js</span></div>
                  <div className="w-full h-[1px] bg-white/5" />
                  <div className="flex justify-between"><span className="text-xs text-white/60 font-medium">Backend API</span><span className="text-xs font-bold text-white uppercase">FastAPI</span></div>
                  <div className="w-full h-[1px] bg-white/5" />
                  <div className="flex justify-between"><span className="text-xs text-white/60 font-medium">ML Model</span><span className="text-xs font-bold text-yellow-500 uppercase">XGBoost + XAI</span></div>
                </div>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
          <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">© {new Date().getFullYear()} FINDIT LABS. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}