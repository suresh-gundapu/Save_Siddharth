"use client";

import React, { useState } from 'react';
import Header from '../../components/Header'; 
import donorsData from '../../data/donors.json'; 

export default function DonorsPage() {
  // PDF పాప్-అప్ (Modal) కోసం స్టేట్
  const [isModalOpen, setIsModalOpen] = useState(false);

  // GitHub ట్రిక్ కోసం JSON ఫైల్ నుండి డైరెక్ట్ గా డేటా తీసుకుంటున్నాం
  const totalReceived = donorsData.stats.totalReceived;
  const totalSpent = donorsData.stats.totalSpent;
  const currentBalance = totalReceived - totalSpent;
  const donorsList = donorsData.donorsList;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* 1. Transparency Cards (లెక్కలు) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-10">
          
          {/* Total Funds Card */}
          <div className="bg-white p-6 shadow-md rounded-xl border-t-4 border-green-500 text-center flex flex-col justify-center hover:shadow-lg transition">
            <h3 className="text-sm font-bold text-gray-500 uppercase">మొత్తం విరాళాలు</h3>
            <p className="mt-2 text-3xl font-extrabold text-green-600">₹{totalReceived.toLocaleString('en-IN')}</p>
          </div>

          {/* Hospital Expenses Card (విత్ View Bills బటన్) */}
          <div className="bg-white p-6 shadow-md rounded-xl border-t-4 border-red-500 text-center flex flex-col items-center justify-center hover:shadow-lg transition">
            <h3 className="text-sm font-bold text-gray-500 uppercase">హాస్పిటల్ ఖర్చులు</h3>
            <p className="mt-2 text-3xl font-extrabold text-red-500">₹{totalSpent.toLocaleString('en-IN')}</p>
            
            {/* 👁️ View Bills Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="mt-3 flex items-center gap-1 bg-red-50 text-red-600 px-4 py-1.5 rounded-full font-bold text-xs hover:bg-red-100 border border-red-100 transition-colors"
            >
              👁️ View Bills
            </button>
          </div>

          {/* Current Balance Card */}
          <div className="bg-white p-6 shadow-md rounded-xl border-t-4 border-indigo-500 text-center flex flex-col justify-center hover:shadow-lg transition">
            <h3 className="text-sm font-bold text-gray-500 uppercase">ప్రస్తుత బ్యాలెన్స్</h3>
            <p className="mt-2 text-3xl font-extrabold text-indigo-600">₹{currentBalance.toLocaleString('en-IN')}</p>
          </div>
        </div>

        {/* 2. Donors List - నువ్వు అడిగిన పాత కార్డ్స్ డిజైన్ (Grid View) */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">మా ప్రాణదాతలు 💖</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {donorsList.map((donor) => (
              <div key={donor.id} className="bg-white border border-gray-100 rounded-lg p-4 flex items-center justify-between hover:shadow-md transition shadow-sm">
                <div className="flex items-center overflow-hidden">
                  {/* రౌండ్ అవతార్ (పేరులో మొదటి అక్షరం) */}
                  <div className="shrink-0 h-10 w-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 font-extrabold text-lg border border-indigo-100">
                    {donor.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="ml-3 truncate">
                    <div className="text-sm font-bold text-gray-900 truncate w-32 sm:w-28">{donor.name}</div>
                    <div className="text-xs text-gray-500">{donor.date}</div>
                  </div>
                </div>
                <div className="text-md font-extrabold text-green-600 shrink-0 ml-2">
                  +₹{donor.amount.toLocaleString('en-IN')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. 🚀 PDF చూపే పాప్-అప్ (Modal) */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 transition-opacity">
            <div className="bg-white rounded-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden shadow-2xl relative">
              
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h3 className="font-extrabold text-lg text-gray-800">నిమ్స్ హాస్పిటల్ బిల్స్ (NIMS)</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 rounded-full font-bold hover:bg-red-200 transition-colors"
                >
                  ✕
                </button>
              </div>
              
              {/* Modal PDF Iframe */}
              <div className="flex-1 w-full bg-gray-200">
                <iframe 
                  src="/nims-bills.pdf" 
                  className="w-full h-full border-0" 
                  title="Medical Bills"
                ></iframe>
              </div>
              
            </div>
          </div>
        )}

      </div>
    </div>
  );
}