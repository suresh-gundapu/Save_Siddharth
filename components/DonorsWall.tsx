import React from 'react';
import donorsData from '../data/donors.json'; // మీ JSON ఫైల్ పాత్ ఇక్కడ ఇవ్వండి

const DonorsWall = () => {
  // ప్రస్తుత లెక్కలు (వీటిని డైనమిక్ గా కూడా మార్చుకోవచ్చు)
  const totalReceived = 82800;
  const totalSpent = 12163; 
  const currentBalance = 70637;

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 rounded-2xl shadow-sm my-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block text-indigo-600">ఆపద్బాంధవులకు కృతజ్ఞతలు 🙏</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 font-medium">
            మా సిద్ధు ప్రాణాలు కాపాడేందుకు సాయం చేసిన ప్రతి ఒక్కరికీ శిరస్సు వంచి నమస్కరిస్తున్నాము. మీరు ఇచ్చిన ప్రతి రూపాయి పారదర్శకంగా వాడి ట్రీట్మెంట్ కోసమే ఉపయోగిస్తున్నాము.
          </p>
        </div>

        {/* Financial Transparency Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-12">
          <div className="bg-white overflow-hidden shadow-lg rounded-xl border-t-4 border-green-500 transform transition hover:scale-105">
            <div className="px-4 py-5 sm:p-6 text-center">
              <dt className="text-sm font-bold text-gray-500 truncate uppercase">మొత్తం వచ్చిన విరాళాలు</dt>
              <dd className="mt-2 text-3xl font-extrabold text-green-600">₹{totalReceived.toLocaleString('en-IN')}</dd>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow-lg rounded-xl border-t-4 border-red-500 transform transition hover:scale-105">
            <div className="px-4 py-5 sm:p-6 text-center">
              <dt className="text-sm font-bold text-gray-500 truncate uppercase">హాస్పిటల్ ఖర్చులు</dt>
              <dd className="mt-2 text-3xl font-extrabold text-red-500">₹{totalSpent.toLocaleString('en-IN')}</dd>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow-lg rounded-xl border-t-4 border-indigo-500 transform transition hover:scale-105">
            <div className="px-4 py-5 sm:p-6 text-center">
              <dt className="text-sm font-bold text-gray-500 truncate uppercase">ప్రస్తుత బ్యాలెన్స్</dt>
              <dd className="mt-2 text-3xl font-extrabold text-indigo-600">₹{currentBalance.toLocaleString('en-IN')}</dd>
            </div>
          </div>
        </div>

        {/* Donors List - Grid View */}
        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-indigo-100 pb-2">
          మా ప్రాణదాతలు (Donors) 💖
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-96 overflow-y-auto pr-2 custom-scrollbar">
          {donorsData.map((donor) => (
            <div key={donor.id} className="bg-white border border-gray-100 rounded-lg shadow-sm p-4 flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-lg">
                  {donor.name.charAt(0).toUpperCase()}
                </div>
                <div className="ml-4">
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
  );
};

export default DonorsWall;