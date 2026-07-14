'use client';

import React, { useState } from 'react';
import { Building2, Smartphone, ShieldCheck, Copy, Check, Download } from 'lucide-react';

export default function DonateCard() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="donate" className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-xl p-6 md:p-10 border border-red-100 mb-20 scroll-mt-20">
      
      <div className="text-center mb-10">
        <h3 className="text-3xl font-extrabold text-gray-900 mb-3">మీ చిన్న సాయం.. సిద్ధుకి ప్రాణదానం!</h3>
        <p className="text-lg text-gray-700">దయచేసి కింద ఉన్న బ్యాంక్ అకౌంట్ కి లేదా UPI ద్వారా మీరు తోచిన సహాయం చేయండి.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
        
        {/* Bank Details Section */}
        <div className="w-full md:w-1/2 bg-white rounded-xl shadow-md p-6 sm:p-8 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0"></div>
          
          <div className="flex items-center gap-3 mb-8 border-b pb-4 relative z-10">
            <Building2 className="text-blue-600 w-8 h-8" />
            <h4 className="text-2xl font-bold text-gray-900">Canara Bank</h4>
          </div>
          
          <div className="space-y-5 relative z-10">
            <div>
              <p className="text-sm text-gray-500 font-semibold mb-1">Account Holder Name</p>
              <p className="text-xl font-black text-gray-900">PENCHALA SIDHARTHA</p>
            </div>
            
            {/* Account Number with Copy Button */}
            <div>
              <p className="text-sm text-gray-500 font-semibold mb-1">Account Number</p>
              <div className="flex items-center gap-3">
                <p className="text-2xl font-black text-blue-700 tracking-wider">110053574233</p>
                <button 
                  onClick={() => handleCopy('110053574233', 'account')}
                  className="p-1.5 bg-gray-100 hover:bg-gray-200 rounded-md transition-all active:scale-95"
                  title="Copy Account Number"
                >
                  {copiedField === 'account' ? <Check size={20} className="text-green-600" /> : <Copy size={20} className="text-gray-500" />}
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-10 gap-5">
              {/* IFSC Code with Copy Button */}
              <div>
                <p className="text-sm text-gray-500 font-semibold mb-1">IFSC Code</p>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-bold text-gray-900">CNRB0003607</p>
                  <button 
                    onClick={() => handleCopy('CNRB0003607', 'ifsc')}
                    className="p-1 bg-gray-100 hover:bg-gray-200 rounded-md transition-all active:scale-95"
                    title="Copy IFSC Code"
                  >
                    {copiedField === 'ifsc' ? <Check size={16} className="text-green-600" /> : <Copy size={16} className="text-gray-500" />}
                  </button>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 font-semibold mb-1">Branch</p>
                <p className="text-lg font-bold text-gray-900">Oorugonda</p>
              </div>
            </div>
          </div>
        </div>

        {/* OR Divider */}
        <div className="hidden md:flex flex-col items-center justify-center px-2">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
          <span className="my-3 font-black text-gray-400 bg-red-50 p-2 rounded-full">OR</span>
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* UPI / QR Code Section */}
        <div className="w-full md:w-1/2 bg-white rounded-xl shadow-md p-6 sm:p-8 border border-gray-100 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 bg-green-50 rounded-br-full -z-0"></div>

          <div className="flex items-center gap-3 mb-6 w-full border-b pb-4 justify-center relative z-10">
            <Smartphone className="text-green-600 w-8 h-8" />
            <h4 className="text-2xl font-bold text-gray-900">Google Pay / PhonePe</h4>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-6 flex flex-col items-center relative z-10 shadow-inner">
            <img 
              src="/images/qr-code.jpg" 
              alt="UPI QR Code" 
              className="w-48 h-48 object-contain rounded-lg bg-white mb-4"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/200?text=QR+Code+Pending";
              }}
            />
            {/* Download Button */}
            <a 
              href="/images/qr-code.jpg" 
              download="Siddharth_Donation_QR.jpg"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-bold text-sm transition-colors shadow-sm w-full justify-center"
            >
              <Download size={18} />
              QR డౌన్‌లోడ్ 
            </a>
          </div>
          
          {/* UPI Number with Copy Button */}
          <div className="text-center relative z-10">
            <p className="text-sm text-gray-500 font-semibold mb-2">UPI Mobile Number</p>
            <div className="flex items-center justify-center gap-3 bg-green-50 px-4 py-2 rounded-lg border border-green-100">
              <p className="text-3xl font-black text-green-700 tracking-widest">918331868062</p>
              <button 
                onClick={() => handleCopy('918331868062', 'upi')}
                className="p-2 bg-white hover:bg-green-100 shadow-sm border border-green-200 rounded-md transition-all active:scale-95"
                title="Copy UPI Number"
              >
                {copiedField === 'upi' ? <Check size={20} className="text-green-600" /> : <Copy size={20} className="text-green-700" />}
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-8 bg-green-100 text-green-800 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-3 text-sm font-semibold text-center border border-green-200 shadow-sm">
        <ShieldCheck className="w-6 h-6 shrink-0" />
        <p className="text-base">100% Secure & Direct Transfer to Patient's Account.</p>
      </div>

    </section>
  );
}