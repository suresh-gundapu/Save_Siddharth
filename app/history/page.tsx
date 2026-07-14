import Header from '@/components/Header';
import MedicalHistory from '@/components/MedicalHistory';
import MedicalReports from '@/components/MedicalReports';

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* పైన మెడికల్ హిస్టరీ */}
        <MedicalHistory />
        
        {/* కింద మెడికల్ రిపోర్ట్స్ (PDFs) */}
        <div className="mt-8">
          <MedicalReports />
        </div>
      </div>
      
    </main>
  );
}