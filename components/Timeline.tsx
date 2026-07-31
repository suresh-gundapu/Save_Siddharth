import React from 'react';
import { AlertCircle, Activity, HeartCrack, Syringe, Thermometer, ShieldAlert, HeartHandshake, Hospital } from 'lucide-react';

export default function Timeline() {
  const events = [
  {
    date: "పుట్టినప్పుడు",
    title: "జన్మతోనే మొదలైన పోరాటం",
    description:
      "పుట్టిన 24 గంటల్లో మలం రాకపోవడంతో కేవలం 5 రోజుల వయసులోనే అత్యవసరంగా Ileostomy చేశారు. 10 నెలల తర్వాత Stoma Reversal చేశారు. అప్పటి నుండి పేగుల్లో Adhesions (అతుక్కుపోవడం) వచ్చే ప్రమాదం ఎక్కువగా ఉంది.",
    icon: <HeartHandshake className="w-5 h-5 text-pink-600" />
  },

  {
    date: "మే 14 - 15, 2026",
    title: "తీవ్ర కడుపు నొప్పి",
    description:
      "3 రోజులుగా తీవ్రమైన కడుపునొప్పి, వాంతులు, Motion పూర్తిగా ఆగిపోవడంతో Uma Devi మరియు Guardian Hospital కి తరలించారు. CT Scan లో Spigelian Hernia వల్ల Small Bowel Obstruction గుర్తించారు.",
    icon: <AlertCircle className="w-5 h-5 text-orange-500" />
  },

  {
    date: "మే 16, 2026",
    title: "మొదటి ఎమర్జెన్సీ ఆపరేషన్",
    description:
      "పేగులకు రక్తప్రసరణ ఆగిపోవడంతో చిన్నపేగులో రెండు భాగాలు Gangrene అయ్యాయి. RVM Hospital లో Emergency Exploratory Laparotomy చేసి, Gangrenous Bowel తొలగించి మిగిలిన పేగులను కలిపారు (Anastomosis).",
    icon: <Activity className="w-5 h-5 text-blue-500" />
  },

  {
    date: "మే 21 - 27, 2026",
    title: "ఆపరేషన్ తర్వాత తీవ్రమైన సమస్యలు",
    description:
      "5వ రోజున పేగులు కలిపిన చోట కుట్లు విడిపోయాయి (Anastomotic Dehiscence). Bile Leak, Enterocutaneous Fistula, Internal Bleeding రావడంతో Hemoglobin బాగా పడిపోయింది.",
    icon: <ShieldAlert className="w-5 h-5 text-red-500" />
  },

  {
    date: "మే 28, 2026",
    title: "రెండో ప్రాణరక్షక ఆపరేషన్",
    description:
      "మళ్లీ పొట్ట కోసి దెబ్బతిన్న పేగులను తొలగించి Loop Jejunostomy (Stoma) ఏర్పాటు చేశారు. అప్పటి నుండి Siddharth జీవితం పూర్తిగా Stoma Bag మీదే ఆధారపడింది.",
    icon: <HeartCrack className="w-5 h-5 text-red-700" />
  },

  {
    date: "జూన్, 2026",
    title: "ఫంగల్ సెప్సిస్",
    description:
      "పెద్ద శస్త్రచికిత్సలు, ICU చికిత్స కారణంగా రక్తంలో Candida Fungal Infection (Fungal Sepsis) వచ్చింది. Anidulafungin వంటి ఖరీదైన Anti-Fungal ఇంజెక్షన్లతో చికిత్స అందించారు.",
    icon: <Thermometer className="w-5 h-5 text-purple-600" />
  },

  {
    date: "జూన్ 23 - 25, 2026",
    title: "రక్తం ఎక్కించడం",
    description:
      "తీవ్ర బలహీనత, రక్తహీనత, Sodium & Potassium తగ్గిపోవడంతో Rohini Hospital లో Blood Transfusion మరియు IV Fluids ఇచ్చి ప్రాణాపాయం నుండి బయటపడ్డాడు.",
    icon: <Activity className="w-5 h-5 text-rose-500" />
  },

  {
    date: "జూలై 20, 2026",
    title: "NIMS లో కొత్త ఆశ",
    description:
      "పరిస్థితి విషమించి బరువు గణనీయంగా తగ్గడంతో NIMS Surgical Gastroenterology Department లో చేర్చారు. వెంటనే Surgery చేయడం ప్రమాదకరమని భావించి Nutritional Rehabilitation ప్రారంభించారు.",
    icon: <Hospital className="w-5 h-5 text-teal-600" />
  },

  {
    date: "జూలై 20 - 29, 2026",
    title: "Nutrition Recovery Phase",
    description:
      "TPN Nutrition, Electrolyte Correction, High Protein Diet, Distal Refeeding, Stoma Care ద్వారా శరీరాన్ని మళ్లీ బలంగా తయారు చేసే చికిత్స అందించారు. Sodium, Potassium స్థాయిలు మెరుగయ్యాయి.",
    icon: <Syringe className="w-5 h-5 text-green-600" />
  },

  {
    date: "జూలై 29, 2026",
    title: "NIMS నుండి డిశ్చార్జ్",
    description:
      "ప్రస్తుతం Infection అదుపులో ఉంది. Stoma బాగా పనిచేస్తోంది. ఇంట్లో High Protein Diet, Medicines, Distal Refeeding, Weekly Follow-up కొనసాగించాలని NIMS వైద్యులు సూచించారు.",
    icon: <HeartHandshake className="w-5 h-5 text-emerald-600" />
  },

  {
    date: "ఇప్పుడు...",
    title: "తదుపరి లక్ష్యం - Stoma Reversal",
    description:
      "ప్రస్తుతం Siddharth కి మంచి Nutrition, Weight Gain, Protein Levels, Electrolytes సాధారణ స్థాయికి రావడం అత్యంత ముఖ్యమైనది. శరీరం పూర్తిగా కోలుకున్న తర్వాత మాత్రమే వైద్యులు Stoma Reversal Surgery గురించి నిర్ణయం తీసుకుంటారు.",
    icon: <Hospital className="w-5 h-5 text-indigo-600" />
  }
];

  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-10 border-b pb-4">చావుతో పోరాటం (Detailed Medical Journey)</h3>
      
      <div className="relative">
        {/* Desktop Center Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-gray-300"></div>
        {/* Mobile Left Line */}
        <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-gray-300"></div>

        {/* Grid Container to place items side-by-side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-8 md:gap-x-12">
          {events.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className={`relative pl-12 md:pl-0 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                
                {/* Mobile Icon */}
                <div className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-4 border-white bg-gray-50 shadow flex items-center justify-center z-10">
                  {event.icon}
                </div>
                
                {/* Desktop Icon (Positioned exactly on the center line) */}
                <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-4 border-white bg-gray-50 shadow items-center justify-center z-10 ${isLeft ? '-right-6 translate-x-1/2' : '-left-6 -translate-x-1/2'}`}>
                  {event.icon}
                </div>

                {/* Content Card */}
                <div className="bg-gray-50 hover:bg-white transition-colors p-5 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{event.title}</h4>
                  <span className="text-sm font-bold text-red-600 mb-3 block">{event.date}</span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}