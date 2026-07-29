"use client";

import React, { useState } from 'react';
import Header from '../../components/Header'; 
import donorsData from '../../data/donors.json'; 

export default function DonorsPage() {
  // PDF పాప్-అప్ కోసం స్టేట్
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  
  // కొత్తగా Medical Expenses పాప్-అప్ కోసం స్టేట్
  const [isExpensesModalOpen, setIsExpensesModalOpen] = useState(false);

  // JSON ఫైల్ నుండి డైరెక్ట్ గా డేటా
  const totalReceived = donorsData.stats.totalReceived;
  const totalSpent = donorsData.stats.totalSpent;
  const currentBalance = totalReceived - totalSpent;
  const donorsList = donorsData.donorsList;
  const expensesList = donorsData.expensesList; // కొత్తగా యాడ్ చేసిన expenses డేటా

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

          {/* Hospital Expenses Card (విత్ 2 Buttons) */}
          <div className="bg-white p-6 shadow-md rounded-xl border-t-4 border-red-500 text-center flex flex-col items-center justify-center hover:shadow-lg transition">
            <h3 className="text-sm font-bold text-gray-500 uppercase">హాస్పిటల్ ఖర్చులు</h3>
            <p className="mt-2 text-3xl font-extrabold text-red-500">₹{totalSpent.toLocaleString('en-IN')}</p>
            
            <div className="flex gap-2 mt-3">
              {/* 👁️ View Bills (PDF) Button */}
              <button 
                onClick={() => setIsPdfModalOpen(true)}
                className="flex items-center gap-1 bg-red-50 text-red-600 px-3 py-1.5 rounded-full font-bold text-xs hover:bg-red-100 border border-red-100 transition-colors"
              >
                📄 PDF 
              </button>

              {/* 🏥 View Expenses Tracker Button */}
              <button 
                onClick={() => setIsExpensesModalOpen(true)}
                className="flex items-center gap-1 bg-orange-50 text-orange-600 px-3 py-1.5 rounded-full font-bold text-xs hover:bg-orange-100 border border-orange-100 transition-colors"
              >
                📊 Tracker
              </button>
            </div>
          </div>

          {/* Current Balance Card */}
          <div className="bg-white p-6 shadow-md rounded-xl border-t-4 border-indigo-500 text-center flex flex-col justify-center hover:shadow-lg transition">
            <h3 className="text-sm font-bold text-gray-500 uppercase">ప్రస్తుత బ్యాలెన్స్</h3>
            <p className="mt-2 text-3xl font-extrabold text-indigo-600">₹{currentBalance.toLocaleString('en-IN')}</p>
          </div>
        </div>

        {/* 2. Donors List - Grid View */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">మా ప్రాణదాతలు 💖</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {donorsList.map((donor) => (
              <div key={donor.id} className="bg-white border border-gray-100 rounded-lg p-4 flex items-center justify-between hover:shadow-md transition shadow-sm">
                <div className="flex items-center overflow-hidden">
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

        {/* 3. 📄 PDF చూపే పాత పాప్-అప్ (Modal) */}
        {isPdfModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 transition-opacity">
            <div className="bg-white rounded-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden shadow-2xl relative">
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h3 className="font-extrabold text-lg text-gray-800">నిమ్స్ హాస్పిటల్ బిల్స్ (NIMS)</h3>
                <button 
                  onClick={() => setIsPdfModalOpen(false)}
                  className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 rounded-full font-bold hover:bg-red-200 transition-colors"
                >
                  ✕
                </button>
              </div>
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

        {/* 4. 📊 కొత్త Medical Expenses Tracker పాప్-అప్ (Modal) */}
        {isExpensesModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 transition-opacity">
            <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl relative">
              
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h3 className="font-extrabold text-lg text-gray-800">🏥 ఖర్చుల వివరాలు (Expenses Tracker)</h3>
                <button 
                  onClick={() => setIsExpensesModalOpen(false)}
                  className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 rounded-full font-bold hover:bg-red-200 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 overflow-y-auto flex-1 bg-white">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 uppercase text-xs">
                      <th className="border-b-2 p-3 font-bold">తేదీ (Date)</th>
                      <th className="border-b-2 p-3 font-bold">వివరాలు (Description)</th>
                      <th className="border-b-2 p-3 font-bold text-right">ఖర్చు (Amount)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expensesList.map((item) => (
                      <tr key={item.id} className="border-b hover:bg-orange-50 transition-colors">
                        <td className="p-3 text-sm text-gray-600 font-semibold whitespace-nowrap">{item.date}</td>
                        <td className="p-3 text-sm text-gray-800">{item.description}</td>
                        <td className="p-3 text-sm font-extrabold text-right text-red-500">
                          -₹{item.amount.toLocaleString('en-IN')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-gray-50">
                      <td colSpan="2" className="p-3 text-right font-extrabold text-gray-800 text-lg">మొత్తం ఖర్చు (Total):</td>
                      <td className="p-3 text-right font-extrabold text-red-600 text-lg">₹{totalSpent.toLocaleString('en-IN')}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}