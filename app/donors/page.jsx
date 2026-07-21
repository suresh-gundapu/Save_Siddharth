"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import donorsData from '../../data/donors.json'; 

function DonorsContent() {
  const searchParams = useSearchParams();

  // బేస్ (పాత) లెక్కలు
  const baseReceived = 82800;
  const baseSpent = 12163; 

  // URL పారామీటర్లు చదవడం (e = ఖర్చు, f = కొత్త ఫండ్)
  const expenseParam = parseInt(searchParams.get('e') || '0', 10);
  const fundParam = parseInt(searchParams.get('f') || '0', 10);

  // ఆటోమేటిక్ క్యాలిక్యులేషన్ లాజిక్
  const totalReceived = baseReceived + fundParam;
  const totalSpent = baseSpent + expenseParam; 
  const currentBalance = totalReceived - totalSpent;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* 3 దాతృత్వ/ట్రాన్స్పరెన్సీ కార్డ్స్ */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-10">
        <div className="bg-white p-6 shadow-md rounded-xl border-t-4 border-green-500 text-center transform transition hover:scale-105">
          <h3 className="text-sm font-bold text-gray-500 uppercase">మొత్తం విరాళాలు</h3>
          <p className="mt-2 text-3xl font-extrabold text-green-600">₹{totalReceived.toLocaleString('en-IN')}</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-xl border-t-4 border-red-500 text-center transform transition hover:scale-105">
          <h3 className="text-sm font-bold text-gray-500 uppercase">హాస్పిటల్ ఖర్చులు</h3>
          <p className="mt-2 text-3xl font-extrabold text-red-500">₹{totalSpent.toLocaleString('en-IN')}</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-xl border-t-4 border-indigo-500 text-center transform transition hover:scale-105">
          <h3 className="text-sm font-bold text-gray-500 uppercase">ప్రస్తుత బ్యాలెన్స్</h3>
          <p className="mt-2 text-3xl font-extrabold text-indigo-600">₹{currentBalance.toLocaleString('en-IN')}</p>
        </div>
      </div>

      {/* దాతల టేబుల్ లేఅవుట్ */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 bg-white">
          <h2 className="text-2xl font-bold text-gray-800">మా ప్రాణదాతలు 💖</h2>
          <p className="text-sm text-gray-500 mt-1">సహాయం చేసిన దాతల పూర్తి వివరాలు (తేదీ ప్రకారం)</p>
        </div>
        
        <div className="h-[600px] overflow-y-auto custom-scrollbar">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-50 sticky top-0 z-10">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  తేదీ (Date)
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  దాత పేరు (Donor Name)
                </th>
                <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">
                  సహాయం (Amount)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {donorsData.map((donor, index) => (
                <tr key={donor.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {donor.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-gray-900">{donor.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-extrabold text-green-600">
                    +₹{donor.amount.toLocaleString('en-IN')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default function DonorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Navbar ఇక్కడ కంపల్సరీగా ఉంటుంది */}
      <Header />

      {/* 2. URL పారామీటర్స్ సరిగ్గా లోడ్ అవ్వడానికి Suspense Wrapper */}
      <Suspense fallback={<div className="text-center p-10 font-bold">Loading funds...</div>}>
        <DonorsContent />
      </Suspense>
    </div>
  );
}