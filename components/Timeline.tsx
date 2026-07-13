import React from 'react';
import { AlertCircle, Activity, HeartCrack, Syringe, Thermometer, ShieldAlert, HeartHandshake } from 'lucide-react';

export default function Timeline() {
  const events = [
    {
      date: "మే 14 - 15, 2026",
      title: "వ్యాధి నిర్ధారణ (Diagnosis)",
      description: "3 రోజుల పాటు తీవ్రమైన కడుపునొప్పి, వాంతులు. ఉమాదేవి మరియు గార్డియన్ హాస్పిటల్స్ లో సిటీ స్కాన్ చేయగా.. పేగులు అతుక్కుపోయి, గ్యాంగ్రీన్ దశకు చేరుకున్నాయని (Small Bowel Obstruction & Spigelian Hernia) నిర్ధారణ.",
      icon: <AlertCircle className="w-5 h-5 text-orange-500" />
    },
    {
      date: "మే 15, 2026",
      title: "మొదటి ఆపరేషన్ (First Surgery)",
      description: "RVM హాస్పిటల్ లో ఎమర్జెన్సీగా పొట్ట కోసి (Exploratory Laparotomy), కుళ్ళిపోయిన (Gangrenous) చిన్నపేగు భాగాలను కత్తిరించి, మిగిలిన పేగులను కలిపి కుట్లు వేశారు.",
      icon: <Activity className="w-5 h-5 text-blue-500" />
    },
    {
      date: "మే 20 - 27, 2026",
      title: "కుట్లు విడిపోవడం (Post-op Leakage)",
      description: "సర్జరీ జరిగిన 5వ రోజున లోపల కుట్లు విడిపోయి, రక్తం మరియు క్లాట్స్ లీక్ అవ్వడం (Hematobilious leak) మొదలైంది. హీమోగ్లోబిన్ దారుణంగా పడిపోవడంతో లీకేజ్ ని అంచనా వేయడానికి తాత్కాలికంగా ఒక బ్యాగ్ అమర్చారు.",
      icon: <ShieldAlert className="w-5 h-5 text-red-400" />
    },
    {
      date: "మే 28, 2026",
      title: "రెండో ఆపరేషన్ (The Stoma Bag)",
      description: "కడుపులో చీము (Cheesy pus) చేరడంతో మళ్ళీ పొట్ట కోసి రెండో ఆపరేషన్ చేశారు (Re-exploration). కుట్లు ఊడిపోయిన పేగులను కత్తిరించి, ప్రాణం కాపాడటానికి జీర్ణాశయం కింద ఉన్న చిన్నపేగుకే నేరుగా కన్నం పెట్టి బ్యాగ్ అమర్చారు (Loop Jejunostomy).",
      icon: <HeartCrack className="w-5 h-5 text-red-600" />
    },
    {
      date: "జూన్, 2026",
      title: "రక్తాన్ని కమ్మేసిన ఫంగస్ (Candidemia)",
      description: "ఐసీయూలో రోజుల తరబడి ఉండటం వల్ల వాడి రక్తం, మూత్రం, మరియు గుండెకు వెళ్ళే నరాల్లోకి ప్రాణాంతకమైన 'కాండిడా ఫంగస్' ప్రవేశించింది (Candidemia Sepsis). దీని కోసం ఖరీదైన 'అనిడులాఫంగిన్' ఇంజెక్షన్లు వాడాల్సి వచ్చింది.",
      icon: <Thermometer className="w-5 h-5 text-purple-600" />
    },
    {
      date: "ప్రతి రోజూ..",
      title: "నరకప్రాయమైన ఫీడింగ్ (Loop Refeeding)",
      description: "వాడు ఏది తిన్నా, తాగినా అది జీర్ణం కాకముందే ద్రవంలా ఆ స్టోమా కన్నం ద్వారా బయటకు వచ్చేస్తోంది (రోజుకు 1700ml). వాడు బతకాలంటే, ఆ బ్యాగ్ లో పడిన ద్రవాన్ని ఫిల్టర్ చేసి, కింది పేగుల్లోకి గంటకు 50ml చొప్పున వాడికి వాడే ఎక్కించుకోవాలి.",
      icon: <Syringe className="w-5 h-5 text-green-500" />
    },
    {
      date: "జూన్ 23 - 25, 2026",
      title: "రోహిణి హాస్పిటల్ (Blood Transfusion)",
      description: "ఈ పోరాటంలో వాడి రక్తం 7.2 gm% కి, ఉప్పు శాతం 133 కి దారుణంగా పడిపోయింది. రోహిణి హాస్పిటల్ లో చేర్చి, రెండు యూనిట్ల రక్తం ఎక్కించి ఎమర్జెన్సీగా ప్రాణాలు నిలబెట్టారు.",
      icon: <Activity className="w-5 h-5 text-rose-500" />
    },
    {
      date: "భవిష్యత్తు అవసరం",
      title: "మూడో ఆపరేషన్ గండం (Stoma Reversal)",
      description: "డిశ్చార్జ్ సమయంలో వాడు తీవ్రమైన పరిస్థితిలో ఉన్నాడు (Prognosis: GUARDED). డాక్టర్లు సూచించిన ఖరీదైన న్యూట్రిషన్ (Peptamen) వాడాలి. కొన్ని వారాల్లో బయట ఉన్న పేగులను లోపల పెట్టడానికి మూడో పెద్ద సర్జరీ జరగాలి, దీనికి మీ సహాయం కావాలి.",
      icon: <HeartHandshake className="w-5 h-5 text-blue-600" />
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