import React from 'react';
import donorsData from '../../data/donors.json'; 

export default function DonorsPage() {
  const totalReceived = 82800;
  const totalSpent = 12163; 
  const currentBalance = 70637;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* 1. Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            ఆపద్బాంధవులకు <span className="text-indigo-600">కృతజ్ఞతలు 🙏</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            మా సిద్ధు ప్రాణాలు కాపాడేందుకు సాయం చేసిన ప్రతి ఒక్కరికీ శిరస్సు వంచి నమస్కరిస్తున్నాము. మీరు ఇచ్చిన ప్రతి రూపాయి పారదర్శకంగా వాడి ట్రీట్మెంట్ కోసమే ఉపయోగిస్తున్నాము.
          </p>
        </div>

        {/* 2. Transparency Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-12">
          <div className="bg-white p-6 shadow-md rounded-xl border-t-4 border-green-500">
            <h3 className="text-sm font-bold text-gray-500 uppercase">మొత్తం విరాళాలు</h3>
            <p className="mt-2 text-3xl font-extrabold text-green-600">₹{totalReceived.toLocaleString('en-IN')}</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-xl border-t-4 border-red-500">
            <h3 className="text-sm font-bold text-gray-500 uppercase">హాస్పిటల్ ఖర్చులు</h3>
            <p className="mt-2 text-3xl font-extrabold text-red-500">₹{totalSpent.toLocaleString('en-IN')}</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-xl border-t-4 border-indigo-500">
            <h3 className="text-sm font-bold text-gray-500 uppercase">ప్రస్తుత బ్యాలెన్స్</h3>
            <p className="mt-2 text-3xl font-extrabold text-indigo-600">₹{currentBalance.toLocaleString('en-IN')}</p>
          </div>
        </div>

        {/* 3. Donors Grid */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">మా ప్రాణదాతలు 💖</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {donorsData.map((donor) => (
              <div key={donor.id} className="border border-gray-100 rounded-lg p-4 flex items-center justify-between hover:shadow-md transition">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-lg">
                    {donor.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-bold text-gray-900 truncate w-32">{donor.name}</div>
                    <div className="text-xs text-gray-500">{donor.date}</div>
                  </div>
                </div>
                <div className="text-md font-extrabold text-green-600">
                  +₹{donor.amount.toLocaleString('en-IN')}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}