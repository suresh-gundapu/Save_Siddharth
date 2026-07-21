'use client';

import { Heart, Activity } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const handleLanguageClick = () => {
    alert("English version of the homepage is currently under development. Please proceed with Telugu. Thank you!");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
      {/* ప్యాడింగ్ తగ్గించి గ్యాప్స్ అడ్జస్ట్ చేశాను */}
      <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-1 sm:gap-4">
        
        {/* 1. Logo Section */}
        <Link href="/" className="flex items-center gap-1 sm:gap-2 shrink-0">
          <Heart className="text-red-600 fill-red-600 animate-pulse w-5 h-5 sm:w-6 sm:h-6" />
          <h1 className="text-[14px] sm:text-xl font-bold text-gray-900 tracking-tight whitespace-nowrap">
            {/* మొబైల్ లో 'Sidhu', డెస్క్ టాప్ లో 'Save Siddharth' */}
            <span className="sm:hidden">Save Siddharth</span>
            <span className="hidden sm:inline">Save Siddharth</span>
          </h1>
        </Link>
        
        {/* 2. Links & Button Section */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
          
          <Link 
            href="/history" 
            className="flex items-center gap-1 text-[11px] sm:text-sm font-bold text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap shrink-0"
          >
            <Activity className="w-3 h-3 sm:w-4 sm:h-4" />
            {/* మొబైల్ లో 'History', డెస్క్ టాప్ లో 'Medical History' */}
            <span className="hidden sm:inline">Medical </span>History
          </Link>
          
          <Link 
            href="/donors" 
            className="text-[11px] sm:text-sm font-extrabold text-indigo-600 hover:text-indigo-800 border-b-2 border-indigo-600 pb-0.5 transition-colors whitespace-nowrap shrink-0"
          >
            {/* మొబైల్ లో 'Funds ❤️', డెస్క్ టాప్ లో 'Donors & Funds ❤️' */}
            <span className="hidden sm:inline">Donors & </span>Funds ❤️
          </Link>
          
          <a 
            href="/#donate" 
            className="shrink-0 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 sm:px-5 sm:py-2 rounded-full font-bold text-[11px] sm:text-sm transition-all shadow-md whitespace-nowrap"
          >
            {/* మొబైల్ లో 'Donate', డెస్క్ టాప్ లో 'Donate Now' */}
            Donate<span className="hidden sm:inline"> Now</span>
          </a>
          
        </div>
      </div>
    </header>
  );
}