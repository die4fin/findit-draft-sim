"use client";

import { useState } from "react";
import { usePathname } from "next/navigation"; // Hook buat cek posisi page
import { motion, AnimatePresence } from "framer-motion";
import { 
  Database, LayoutDashboard, Users, X, Mail, Terminal, Copy, CheckCircle2, Activity 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "../lib/utils"; // Pastikan path utils bener

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const pathname = usePathname(); // Ambil path saat ini

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Helper buat cek apakah link sedang aktif
  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "About", href: "/about", icon: Users },
    { name: "Simulator", href: "/simulator", icon: LayoutDashboard },
    { name: "Models", href: "/model", icon: Database },
    { name: "Update", href: "/update", icon: Activity },
  ];

  return (
    <>
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
        className="fixed top-6 inset-x-0 z-[60] flex justify-center px-4 md:px-6 pointer-events-none"
      >
        <nav className="pointer-events-auto flex items-center justify-between w-full max-w-7xl bg-[#0a0a0c]/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 md:pr-4 shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

          {/* KIRI: Brand */}
          <Link href="/" className="flex items-center gap-3 relative z-10 pl-2">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#050505] border border-white/10 overflow-hidden group-hover:border-yellow-500/50 transition-all duration-300">
              <Image 
                src="/brand-logo.png" 
                alt="FINDIT Logo" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
                sizes="40px" 
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <h1 className="text-sm font-black tracking-widest text-white uppercase leading-none">DRAFT <span className="text-yellow-500">SIM</span></h1>
              <span className="text-[8px] font-black tracking-[0.3em] text-white/40 uppercase mt-1">BY FINDIT</span>
            </div>
          </Link>

          {/* TENGAH: Nav */}
          <div className="hidden lg:flex items-center gap-1 px-2 py-1 bg-[#050505] border border-white/5 rounded-xl">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={cn(
                    "group/link flex items-center gap-2 px-4 py-2 rounded-lg transition-all uppercase text-[10px] font-bold tracking-widest relative",
                    active ? "text-white bg-white/5" : "text-white/40 hover:text-white hover:bg-white/5"
                  )}
                >
                  <link.icon className={cn(
                    "w-3 h-3 transition-colors",
                    active ? "text-yellow-500" : "text-white/40 group-hover/link:text-yellow-500"
                  )} />
                  {link.name}
                  
                  {/* Indicator Line kalau aktif */}
                  {active && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-yellow-500 rounded-t-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* KANAN: Contact */}
          <div className="flex items-center gap-4 relative z-10">
            <button 
              onClick={() => setIsContactOpen(true)}
              className="px-5 py-2 rounded-xl bg-white text-black hover:bg-yellow-500 font-black text-[10px] tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95"
            >
              GET IN TOUCH
            </button>
          </div>
        </nav>
      </motion.div>

      {/* MODAL CONTACT */}
      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsContactOpen(false)} className="absolute inset-0 bg-[#050505]/80 backdrop-blur-md" />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="relative w-full max-w-lg bg-[#0a0a0c] border border-white/10 rounded-[2rem] p-8 shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10"><Terminal className="w-5 h-5 text-yellow-500" /></div>
                  <div>
                    <h2 className="text-lg font-black uppercase tracking-widest text-white">Comm-Link</h2>
                    <p className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase">Secure Channel</p>
                  </div>
                </div>
                <button onClick={() => setIsContactOpen(false)} className="p-2 rounded-full bg-white/5 hover:text-red-500 transition-colors"><X className="w-5 h-5" /></button>
              </div>
              <div className="space-y-4 relative z-10">
                <p className="text-sm text-white/60 leading-relaxed mb-6 font-medium">Interested in integrating <strong className="text-white">FINDIT</strong>? Reach out below.</p>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-[#050505] border border-white/5 group hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-4 text-white/40 group-hover:text-white">
                    <Mail className="w-5 h-5" /><span className="text-sm font-bold tracking-wide">die4finn@gmail.com</span>
                  </div>
                  <button onClick={() => handleCopy("die4finn@gmail.com")} className="p-2 text-white/40 hover:text-yellow-400">
                    {copiedText === "die4finn@gmail.com" ? <CheckCircle2 className="w-4 h-4 text-yellow-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}