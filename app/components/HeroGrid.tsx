"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Search } from "lucide-react";
import { Hero } from "../constants/heroes";

interface HeroGridProps {
  heroes: Hero[];
  onSelect: (heroId: string) => void;
  search: string;
  setSearch: (val: string) => void;
  pickedOrBannedHeroes: string[];
}

export default function HeroGrid({ heroes, onSelect, search, setSearch, pickedOrBannedHeroes }: HeroGridProps) {
  const displayHeroes = heroes.filter(h => h.name.toLowerCase().includes(search.toLowerCase()));

  return (
    // BUNGKUSAN GLASSMORPHISM UTAMA
    <div className="w-full mx-auto flex flex-col items-center bg-[#0a0a0c]/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
      
      {/* Efek Garis Cahaya di Atas Container */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* SEARCH BAR (Fix Icon Search) */}
      <div className="relative w-full max-w-lg mb-8">
        <div className="absolute left-4 top-0 bottom-0 flex items-center justify-center pointer-events-none">
          {/* Icon Lucide React */}
          <Search className="w-5 h-5 text-white/50 drop-shadow-md" />
        </div>
        <input
          type="text"
          placeholder="Search heroes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all shadow-inner"
        />
      </div>

      {/* HERO GRID LIST */}
      <div className="w-full grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 sm:gap-4 max-h-[400px] sm:max-h-[450px] overflow-y-auto pr-2 custom-scrollbar p-2">
        {displayHeroes.map((hero) => {
          const isUsed = pickedOrBannedHeroes.includes(hero.id);

          return (
            <motion.button
              key={hero.id}
              whileHover={!isUsed ? { scale: 1.05, y: -2 } : {}}
              whileTap={!isUsed ? { scale: 0.95 } : {}}
              onClick={() => onSelect(hero.id)}
              disabled={isUsed}
              className={`relative aspect-square rounded-[14px] overflow-hidden border transition-all duration-300 ${
                isUsed
                  ? "opacity-20 grayscale border-white/5 cursor-not-allowed"
                  : "border-white/10 hover:border-blue-400/50 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              }`}
            >
              <Image
                src={hero.image}
                alt={hero.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 10vw"
              />
              {/* Gradient Gelap untuk Teks */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              
              {/* Nama Hero */}
              <span className="absolute bottom-1.5 sm:bottom-2 left-0 w-full text-center text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-white truncate px-1 drop-shadow-md">
                {hero.name}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}