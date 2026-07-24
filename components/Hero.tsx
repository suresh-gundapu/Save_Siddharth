'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye, FileText, X, HeartHandshake } from 'lucide-react';
// నీ donors.json పాత్ కి అనుగుణంగా దీన్ని చెక్ చేసుకో (సాధారణంగా '../data/donors.json' లేదా '@/data/donors.json')
import donorsData from '../data/donors.json';

export default function Hero() {
  const presentImages = [
    "/images/after1.jpg", 
    "/images/after2.jpg",
    "/images/after3.jpg",
    "/images/after4.jpg",
    "/images/after5.jpg",
    "/images/after6.jpg",
    "/images/after7.jpg",
    "/images/after8.jpg"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDocModal, setShowDocModal] = useState(false);

  // donors.json నుండి లెక్కలు తీస్కుంటున్నాం (టార్గెట్ 4 లక్షలు)
  const totalReceived = donorsData?.stats?.totalReceived || 96800;
  const targetAmount = 400000; // NIMS Hospital Estimation Amount
  const remainingAmount = Math.max(0, targetAmount - totalReceived);
  const progressPercentage = Math.min(Math.round((totalReceived / targetAmount) * 100), 100);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % presentImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [presentImages.length]);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % presentImages.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + presentImages.length) % presentImages.length);

  return (
    <>
      <section className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
        
        {/* Images Section */}
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row p-4 gap-3 bg-gray-50 shrink-0">
          
          {/* Static Past Image */}
          <div className="w-full sm:w-1/2 relative aspect-[3/4] sm:aspect-auto sm:h-80 lg:h-[480px] rounded-xl overflow-hidden shadow-sm">
            <img 
              src="/images/before.jpg" 
              alt="Siddharth Before" 
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-md z-10 border border-white/20">
              గతం (ఆరోగ్యంగా ఉన్నప్పుడు)
            </div>
          </div>

          {/* Auto-playing Carousel for Present Images */}
          <div className="w-full sm:w-1/2 relative group aspect-[3/4] sm:aspect-auto sm:h-80 lg:h-[480px] rounded-xl overflow-hidden shadow-sm bg-gray-100">
            <img 
              src={presentImages[currentIndex]} 
              alt="Siddharth Now" 
              className="w-full h-full object-cover object-top transition-all duration-500"
            />
            <div className="absolute bottom-3 left-3 bg-red-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-md z-10 border border-red-400/30 animate-pulse">
              ప్రస్తుతం (30 kg బరువుతో నిమ్స్ లో)
            </div>
            
            {/* Carousel Controls */}
            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full text-black opacity-0 group-hover:opacity-100 transition-all z-20 shadow-md">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full text-black opacity-0 group-hover:opacity-100 transition-all z-20 shadow-md">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Content & Target Tracker Section */}
        <div className="w-full lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
                URGENT MEDICAL APPEAL
              </span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-3 leading-tight">
              ఒక నిరుపేద యువకుడి ప్రాణపోరాటం... దయచేసి సిద్ధుని బతికించండి!
            </h2>
            
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
              పరిస్థితి విషమించి బరువు కేవలం <strong className="text-red-600 font-bold">30 కేజీలకు</strong> పడిపోవడంతో సిద్ధుని నిమ్స్ (NIMS) హాస్పిటల్ లో చేర్పించాము. శరీరంలో అసలు శక్తి లేకపోవడంతో నరాల ద్వారా ఖరీదైన న్యూట్రిషన్ (TPN) అందిస్తున్నారు. రాబోయే వైద్య ఖర్చుల కోసం <strong className="text-gray-900 font-bold">₹4,00,000</strong> అవుతుందని నిమ్స్ వారు అంచనా ఇచ్చారు.
            </p>

            {/* 📜 NIMS Estimation Certificate Badge */}
            <div className="mb-6 bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-center justify-between gap-3 shadow-sm hover:border-amber-400 transition-all">
              <div className="flex items-center gap-3">
                <div className="bg-amber-500 text-white p-2.5 rounded-lg shrink-0">
                  <FileText size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs sm:text-sm">NIMS హాస్పిటల్ ఎస్టిమేషన్ పేపర్</h4>
                  <p className="text-amber-800 text-xs">అధికారిక వైద్య ఖర్చుల అంచనా (₹4,00,000)</p>
                </div>
              </div>
              
              <button 
                onClick={() => setShowDocModal(true)}
                className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-all shrink-0 shadow-sm"
              >
                <Eye size={16} />
                చూడండి
              </button>
            </div>

            {/* 🎯 ATTRACTIVE TARGET PROGRESS BAR SECTION */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 lg:p-5 mb-6 shadow-inner">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">ఫండ్ రైజింగ్ లక్ష్యం</span>
                <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-100">
                  {progressPercentage}% పూర్తయింది
                </span>
              </div>

              {/* Numbers Grid */}
              <div className="flex items-baseline justify-between mb-3">
                <div>
                  <span className="text-2xl lg:text-3xl font-black text-emerald-600">
                    ₹{totalReceived.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-gray-500 font-semibold block">సమీకరించిన విరాళాలు</span>
                </div>
                <div className="text-right">
                  <span className="text-xl lg:text-2xl font-bold text-gray-800">
                    ₹{targetAmount.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-gray-500 font-semibold block">మొత్తం అవసరం</span>
                </div>
              </div>

              {/* Progress Bar Track */}
              <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden p-0.5 border border-gray-300">
                <div 
                  className="bg-gradient-to-r from-emerald-500 via-teal-500 to-red-600 h-full rounded-full transition-all duration-1000 shadow-md relative"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>

              {/* Remaining Amount Indicator */}
              <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-200/60 text-xs">
                <span className="text-gray-600 font-medium flex items-center gap-1">
                  <HeartHandshake size={14} className="text-red-500" /> మీ సహాయం ప్రాణదానం
                </span>
                <span className="font-extrabold text-red-600 bg-red-100/80 px-2 py-1 rounded">
                  ఇంకా కావాల్సింది: ₹{remainingAmount.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>

          {/* CTA Donate Button */}
          <a 
            href="#donate" 
            className="bg-red-600 hover:bg-red-700 text-white text-center font-extrabold py-4 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-red-500/30 hover:scale-[1.01] active:scale-[0.99] w-full flex items-center justify-center gap-2"
          >
            <span>DONATE TO SAVE SIDDHU NOW</span>
          </a>
        </div>
      </section>

      {/* 🖼️ DOCUMENT MODAL POPUP (opens /images/loc.jpg) */}
      {showDocModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 bg-gray-900 text-white flex items-center justify-between border-b border-gray-800">
              <div className="flex items-center gap-2">
                <FileText className="text-amber-400" size={20} />
                <h3 className="font-bold text-sm sm:text-base">NIMS Hospital Estimation Certificate</h3>
              </div>
              <button 
                onClick={() => setShowDocModal(false)}
                className="bg-gray-800 hover:bg-gray-700 text-white p-1.5 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body (Image) */}
            <div className="p-2 overflow-y-auto flex-1 bg-gray-100 flex justify-center">
              <img 
                src="/images/loc.jpg" 
                alt="NIMS Estimation Certificate" 
                className="w-full h-auto object-contain rounded-lg shadow-md"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-gray-50 border-t flex justify-between items-center text-xs text-gray-600">
              <span>Date: 23/07/2026 | NIMS Hyderabad</span>
              <button 
                onClick={() => setShowDocModal(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-4 py-1.5 rounded-lg transition-all"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}