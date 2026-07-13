'use client';
import React, { useState } from 'react';
import { FileText, Receipt, Download, X, ExternalLink } from 'lucide-react';

export default function MedicalReports() {
  const [selectedPdf, setSelectedPdf] = useState<{ title: string; url: string } | null>(null);

  // నీ public/pdfs/ ఫోల్డర్ లో ఈ పేర్లతో ఫైల్స్ పెట్టుకో
  const medicalReports = [
    { title: "ఉమాదేవి హాస్పిటల్ రిపోర్ట్", url: "/pdfs/umadevi-report.pdf" },
    { title: "గార్డియన్ హాస్పిటల్ రిపోర్ట్", url: "/pdfs/guardian-report.pdf" },
    { title: "RVM హాస్పిటల్ సమ్మరీ", url: "/pdfs/rvm-report.pdf" },
    { title: "రోహిణి హాస్పిటల్ రిపోర్ట్", url: "/pdfs/rohini-report.pdf" }
  ];

  const medicalBills = [
    { title: "గార్డియన్ హాస్పిటల్ బిల్లు", url: "/pdfs/guardian-bill.pdf" },
    { title: "RVM హాస్పిటల్ బిల్లు - 1", url: "/pdfs/rvm-bill1.pdf" },
    { title: "RVM హాస్పిటల్ బిల్లు - 2", url: "/pdfs/rvm-bill2.pdf" },
    { title: "రోహిణి హాస్పిటల్ బిల్లు", url: "/pdfs/rohini-bill.pdf" }
  ];

  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100">
      <div className="mb-10 text-center">
        <h3 className="text-3xl font-extrabold text-gray-900 mb-3">మెడికల్ రిపోర్ట్స్ & బిల్స్</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          సిద్ధు పరిస్థితి ఎంత విషమంగా ఉందో తెలుసుకోవడానికి, మేము ఇప్పటివరకు తిరిగిన 4 హాస్పిటల్స్ రిపోర్ట్స్ మరియు ఖర్చుల బిల్లులను ఇక్కడ జతచేస్తున్నాము.
        </p>
      </div>

      {/* Reports Row */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6 border-b pb-2">
          <FileText className="text-blue-600" size={24} />
          <h4 className="text-xl font-bold text-gray-800">హాస్పిటల్ రిపోర్ట్స్</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {medicalReports.map((item, idx) => (
            <button 
              key={idx} 
              onClick={() => setSelectedPdf(item)}
              className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-all group text-left"
            >
              <div className="bg-white p-2 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                <FileText className="text-blue-600" size={20} />
              </div>
              <span className="font-semibold text-gray-700 text-sm">{item.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bills Row */}
      <div>
        <div className="flex items-center gap-2 mb-6 border-b pb-2">
          <Receipt className="text-green-600" size={24} />
          <h4 className="text-xl font-bold text-gray-800">హాస్పిటల్ బిల్లులు</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {medicalBills.map((item, idx) => (
            <button 
              key={idx} 
              onClick={() => setSelectedPdf(item)}
              className="flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl transition-all group text-left"
            >
              <div className="bg-white p-2 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                <Receipt className="text-green-600" size={20} />
              </div>
              <span className="font-semibold text-gray-700 text-sm">{item.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* PDF Viewer Popup (Modal) */}
      {selectedPdf && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8">
          <div className="bg-white w-full max-w-5xl h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b bg-gray-50">
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <FileText className="text-blue-600" size={20} />
                {selectedPdf.title}
              </h3>
              <div className="flex items-center gap-3">
                <a 
                  href={selectedPdf.url} 
                  download 
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                >
                  <Download size={16} /> <span className="hidden sm:inline">Download</span>
                </a>
                <a 
                  href={selectedPdf.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
                <button 
                  onClick={() => setSelectedPdf(null)}
                  className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* PDF iframe */}
            <div className="flex-1 bg-gray-100 p-2">
              <iframe 
                src={`${selectedPdf.url}#view=FitH`} 
                title={selectedPdf.title}
                className="w-full h-full rounded-lg shadow-inner border border-gray-300"
              />
            </div>

          </div>
        </div>
      )}
    </section>
  );
}