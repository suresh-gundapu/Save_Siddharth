'use client';

import { Heart, Activity } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const handleLanguageClick = () => {
    alert("English version of the homepage is currently under development. Please proceed with Telugu. Thank you!");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="text-red-600 fill-red-600 animate-pulse" size={24} />
          <h1 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">Save Siddharth</h1>
        </Link>
        
        <div className="flex items-center gap-3 sm:gap-4">
          <Link 
            href="/history" 
            className=" sm:flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-red-600 transition-colors"
          >
            <Activity size={16} />
            Medical History
          </Link>
          
          {/* ఈ కొత్త లింక్ యాడ్ చెయ్ */}
        <Link href="/donors" className="text-indigo-600 hover:text-indigo-800 font-extrabold border-b-2 border-indigo-600 pb-1">
          Donors & Funds ❤️
        </Link>
          
          <a 
            href="/#donate" 
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full font-bold text-xs sm:text-sm transition-all shadow-md whitespace-nowrap"
          >
            Donate Now
          </a>
        </div>
      </div>
    </header>
  );
}