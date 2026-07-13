import { Heart } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="text-red-600 fill-red-600 animate-pulse" size={24} />
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">Save Siddharth</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-gray-500 hidden md:block">
            English / తెలుగు
          </span>
          <a 
            href="#donate" 
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-bold text-sm transition-all shadow-md"
          >
            Donate Now
          </a>
        </div>
      </div>
    </header>
  );
}