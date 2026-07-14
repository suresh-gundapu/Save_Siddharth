'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const presentImages = [
    "/images/after1.jpg", 
    "/images/after2.jpg",
    "/images/after3.jpg"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % presentImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [presentImages.length]);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % presentImages.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + presentImages.length) % presentImages.length);

  return (
    <section className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
      
      {/* Images Section */}
      <div className="w-full md:w-1/2 flex flex-col sm:flex-row p-4 gap-3 bg-gray-50">
        
        {/* Static Past Image */}
        {/* ఇక్కడ aspect-[3/4] మరియు h-[400px] వాడాం */}
        <div className="w-full sm:w-1/2 relative aspect-[3/4] sm:aspect-auto sm:h-80 md:h-[400px] rounded-lg overflow-hidden shadow-sm">
          <img 
            src="/images/before.jpg" 
            alt="Siddharth Before" 
            /* ఇక్కడ object-top యాడ్ చేసాం, తల కట్ అవ్వకుండా! */
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded z-10">గతం</div>
        </div>

        {/* Auto-playing Carousel for Present Images */}
        <div className="w-full sm:w-1/2 relative group aspect-[3/4] sm:aspect-auto sm:h-80 md:h-[400px] rounded-lg overflow-hidden shadow-sm bg-gray-100">
          <img 
            src={presentImages[currentIndex]} 
            alt="Siddharth Now" 
            /* ఇక్కడ కూడా object-top యాడ్ చేసాం */
            className="w-full h-full object-cover object-top transition-all duration-500"
          />
          <div className="absolute bottom-2 left-2 bg-red-600/90 text-white text-xs px-2 py-1 rounded z-10">ప్రస్తుతం (ప్రాణాపాయ స్థితిలో)</div>
          
          {/* Carousel Controls */}
          <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full text-black opacity-0 group-hover:opacity-100 transition-all z-20 shadow-md">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full text-black opacity-0 group-hover:opacity-100 transition-all z-20 shadow-md">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
        <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold mb-4 w-fit">
          URGENT APPEAL
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5 leading-tight">
          ఒక నిరుపేద యువకుడి ప్రాణపోరాటం... దయచేసి సిద్ధుని బతికించండి!
        </h2>
        
        <p className="text-gray-700 mb-8 text-base md:text-lg leading-relaxed">
          గత 45 రోజుల్లో ప్రాణాపాయ స్థితిలో రెండు పెద్ద సర్జరీలు. రక్తాన్ని కమ్మేసిన ఫంగస్ ఒకవైపైతే, తిన్నది జీర్ణం కాకముందే బయటకు వచ్చేస్తున్న కడుపులోని కన్నం (Jejunostomy) మరోవైపు నరకం చూపిస్తోంది. 55 కిలోల నుంచి 36 కిలోలకు అస్థిపంజరంలా మారిపోయిన సిద్ధు ప్రాణాలతో నిలబడాలంటే అత్యవసరంగా మూడో ఆపరేషన్ జరగాలి. ఇప్పటికే లక్షలు ఖర్చుపెట్టి అప్పుల ఊబిలో కూరుకుపోయిన ఆ  కుటుంబానికి ఇప్పుడు మీ సహాయం కావాలి.!
        </p>
        
        <a 
          href="#donate" 
          className="bg-red-600 hover:bg-red-700 text-white text-center font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-red-500/30 w-full md:w-auto"
        >
          DONATE TO SAVE SIDDHU
        </a>
      </div>
    </section>
  );
}