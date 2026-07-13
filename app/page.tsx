import Header from '../components/Header';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import MedicalReports from '../components/MedicalReports';
import DonateCard from '../components/DonateCard';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        <Hero />
        <Timeline />
        <MedicalReports />
        <DonateCard />
      </div>
    </main>
  );
}