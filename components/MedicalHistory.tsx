'use client';
import React, { useState } from 'react';
import { Hospital, Activity, HeartCrack, AlertCircle, Syringe, FileWarning } from 'lucide-react';

export default function MedicalHistory() {
  const [lang, setLang] = useState<'te' | 'en'>('te');

  // ఈ కరెక్ట్ ఫార్ములా వల్ల యాప్ క్రాష్ అవ్వదు, బ్రాకెట్స్ కూడా మాయం అవుతాయి!
  const cleanText = (text: string) => {
    if (!text) return '';
    return text.replace(/\]+\]/g, '');
  };

  const historyData = [
    {
      id: 1,
      date: '14 - 15 May 2026',
      title_te: 'వ్యాధి నిర్ధారణ (Diagnosis)',
      title_en: 'Initial Diagnosis',
      hospital_te: 'ఉమాదేవి & గార్డియన్ హాస్పిటల్స్',
      hospital_en: 'Umadevi & Guardian Hospitals',
      icon: <AlertCircle className="w-5 h-5 text-orange-500" />,
      content_te: 'మే 14న తీవ్రమైన కడుపు నొప్పి, వాంతులతో ఉమాదేవి హాస్పిటల్ లో చేరారు[cite: 1]. అల్ట్రాసౌండ్ లో పేగులు అతుక్కుపోయి మలం నిలిచిపోయిందని (Subacute Intestinal Obstruction) తేలింది[cite: 1]. వెంటనే గార్డియన్ హాస్పిటల్ లో CT స్కాన్ చేయగా, నాభి దగ్గర కుడివైపు (Right Spigelian hernia) పేగులు 3.5cm వరకు ఉబ్బి ఇరుక్కుపోయాయని నిర్ధారణ అయింది[cite: 2].',
      content_en: 'Admitted to Umadevi Hospital on May 14 with severe abdominal pain and vomiting[cite: 1]. Ultrasound showed mildly dilated and fecal loaded small bowel loops[cite: 1]. CT scan at Guardian Hospital confirmed a Right Spigelian hernia with small bowel loops herniating and proximal dilation up to 3.5cm[cite: 2].'
    },
    {
      id: 2,
      date: '15 May 2026',
      title_te: 'మొదటి ఆపరేషన్ (First Surgery)',
      title_en: 'Exploratory Laparotomy',
      hospital_te: 'RVM హాస్పిటల్ (RVM Hospital)',
      hospital_en: 'RVM Hospital',
      icon: <Activity className="w-5 h-5 text-blue-500" />,
      content_te: 'మే 15న RVM హాస్పిటల్ లో ఎమర్జెన్సీగా పొట్ట కోసి మొదటి ఆపరేషన్ (Exploratory Laparotomy) చేశారు[cite: 3]. లోపల పేగులు విపరీతంగా ఉబ్బిపోయి, డాక్టర్లు కనీసం చేతులు కూడా పెట్టలేనంత దారుణంగా ఒకదానికొకటి అతుక్కుపోయి (Dense interloop adhesions) ఉన్నాయి[cite: 3]. రక్తప్రసరణ ఆగిపోయి పూర్తిగా కుళ్ళిపోయిన (Gangrenous) రెండు చిన్నపేగు భాగాలను కత్తిరించి తీసేసి, మిగిలిన వాటిని కలిపి కుట్లు వేశారు[cite: 3].',
      content_en: 'Emergency Exploratory Laparotomy was performed at RVM Hospital on May 15[cite: 3]. Surgeons found grossly distended gangrenous small bowel loops with dense interloop adhesions[cite: 3]. Two completely gangrenous small bowel loops were resected and an end-to-end anastomosis was performed[cite: 3].'
    },
    {
      id: 3,
      date: '20 - 27 May 2026',
      title_te: 'కుట్లు విడిపోవడం (Suture Leakage)',
      title_en: 'Suture Leakage & Complications',
      hospital_te: 'RVM హాస్పిటల్ ఐసీయూ',
      hospital_en: 'RVM Hospital ICU',
      icon: <FileWarning className="w-5 h-5 text-yellow-500" />,
      content_te: 'ఆపరేషన్ జరిగిన 5వ రోజున, లోపల కుట్లు వేసిన కింది భాగం నుండి రక్తంతో కూడిన లీకేజ్ (Hematobilious leak, clots) మొదలైంది[cite: 3]. దీనివల్ల రక్తంలో హిమోగ్లోబిన్ దారుణంగా పడిపోయింది[cite: 3]. ఈ లీకేజ్ రోజుకు 900ml నుండి 1500ml వరకు బయటకు రావడం గమనించి, ఆ ద్రవాన్ని అంచనా వేయడానికి తాత్కాలికంగా ఒక బ్యాగ్ అమర్చారు[cite: 3].',
      content_en: 'On post-operative day 5, a hematobilious leak with clots emerged from the lower suture site[cite: 3]. Hemoglobin levels dropped significantly due to this[cite: 3]. A temporary stoma bag was placed to quantify the leak, which was around 900ml to 1500ml daily[cite: 3].'
    },
    {
      id: 4,
      date: '28 May 2026',
      title_te: 'రెండో ఆపరేషన్ (Second Surgery)',
      title_en: 'Re-exploration & Stoma',
      hospital_te: 'RVM హాస్పిటల్',
      hospital_en: 'RVM Hospital',
      icon: <HeartCrack className="w-5 h-5 text-red-600" />,
      content_te: 'పరిస్థితి విషమించడంతో 28 మే న మళ్ళీ పొట్ట కోశారు (Re-exploration)[cite: 3]. అప్పటికే కడుపు కండరాలు (Rectus sheath) ఇన్ఫెక్షన్ కి గురై డ్యామేజ్ అయ్యాయి, ఎడమవైపు డయాఫ్రమ్ కింద చీము (Cheesy pus) పేరుకుపోయింది[cite: 3]. ముందు వేసిన కుట్లు రెండు చోట్లా విడిపోవడంతో, ఆ భాగాలను మళ్ళీ కత్తిరించి రెండు చోట్ల కొత్తగా కుట్లు వేశారు[cite: 3]. పేగులకు విశ్రాంతి ఇవ్వడానికి జీర్ణాశయం కింద 50cm దూరంలో చిన్నపేగుకే నేరుగా కన్నం పెట్టి కడుపు బయటకు స్టోమా బ్యాగ్ అమర్చారు (Loop Jejunostomy)[cite: 3].',
      content_en: 'Due to severe conditions, a re-exploration surgery was performed on May 28[cite: 3]. The rectus sheath was infected, and cheesy pus was contained in the left subdiaphragmatic region[cite: 3]. Leaking segments were resected again, and end-to-end anastomoses were performed at two sites[cite: 3]. A Loop Jejunostomy was created 50cm from the DJ flexure[cite: 3].'
    },
    {
      id: 5,
      date: 'June 2026',
      title_te: 'ఫంగస్ & లూప్ ఫీడింగ్ (Fungal Sepsis)',
      title_en: 'Fungal Sepsis & Refeeding',
      hospital_te: 'RVM హాస్పిటల్ ఐసీయూ',
      hospital_en: 'RVM Hospital ICU',
      icon: <Syringe className="w-5 h-5 text-purple-600" />,
      content_te: 'ఐసీయూలో ఉన్నప్పుడు సెంట్రల్ వీన్ ద్వారా ప్రాణాంతకమైన ఫంగస్ (Candida - Non albicans) పేషెంట్ రక్తం, మూత్రంలోకి చేరింది[cite: 3]. దీనికోసం ఖరీదైన అనిడులాఫంగిన్ (Anidulafungin) ఇంజెక్షన్లు వాడారు[cite: 3]. స్టోమా బ్యాగ్ ద్వారా రోజుకు 1500-1700ml ద్రవం బయటకు వచ్చేయడంతో పేషెంట్ పూర్తిగా ఎండిపోయి, నడవలేక వంగిపోయే పరిస్థితికి (bending forward while walking) చేరుకున్నాడు[cite: 3]. ప్రాణాలు నిలపడానికి, ఆ బయటకు వచ్చిన ద్రవాన్నే ఫిల్టర్ చేసి మళ్ళీ కింది పేగుల్లోకి గంటకు 50ml చొప్పున నేరుగా ఎక్కించారు (Refeeding through distal loop)[cite: 3].',
      content_en: 'During ICU stay, a deadly Candida (Non-albicans) fungal infection entered the blood and urine[cite: 3]. It was treated with Anidulafungin injections[cite: 3]. Daily stoma output reached 1500-1700ml, causing severe dehydration and leaving the patient bending forward while walking[cite: 3]. For survival, proximal stoma contents were collected, filtered, and refed into the distal loop at 50ml/hour[cite: 3].'
    },
    {
      id: 6,
      date: '23 - 25 June 2026',
      title_te: 'రక్తమార్పిడి (Blood Transfusion)',
      title_en: 'Emergency Blood Transfusion',
      hospital_te: 'రోహిణి హాస్పిటల్ (Rohini Hospital)',
      hospital_en: 'Rohini Hospital',
      icon: <Activity className="w-5 h-5 text-rose-500" />,
      content_te: 'జూన్ 23న తీవ్రమైన నీరసంతో రోహిణి హాస్పిటల్ లో చేరేసరికి హిమోగ్లోబిన్ 7.2 gm% కి, రక్తంలో సోడియం 130 mmol/L (Hyponatremia) కి పడిపోయి ప్రాణాపాయ స్థితికి చేరుకున్నాడు[cite: 4]. ఎమర్జెన్సీగా జూన్ 23న ఒక యూనిట్ PRBC రక్తం, జూన్ 24న ఒక యూనిట్ Whole Blood ఎక్కించి ప్రాణాలు నిలబెట్టారు[cite: 4]. టీపీఎన్ లైన్ (TPN) లో ఫంగస్ ఉండటం వల్ల వచ్చిన జ్వరానికి యాంటీ-ఫంగల్ మందులు వాడి డిశ్చార్జ్ చేశారు[cite: 4].',
      content_en: 'Admitted to Rohini Hospital on June 23 with severe weakness, Hemoglobin dropped to 7.2 gm% and Sodium fell to 130 mmol/L (Hyponatremia)[cite: 4]. To save his life, PRBC and Whole Blood were transfused on June 23 and 24 respectively[cite: 4]. A Candida infection in the TPN line was treated with anti-fungals before discharge[cite: 4].'
    }
  ];

  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100 mb-10">
      
      {/* Header & Language Toggle */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4 border-b border-gray-200 pb-6">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            {lang === 'te' ? 'పూర్తి మెడికల్ హిస్టరీ' : 'Complete Medical History'}
          </h2>
          <p className="text-gray-600">
            {lang === 'te' 
              ? 'మే 14 నుండి ఈ రోజు వరకు జరిగిన ప్రాణపోరాటం (Based on actual medical reports)' 
              : 'The struggle from May 14 to today (Based on actual medical reports)'}
          </p>
        </div>
        
        <div className="flex items-center bg-gray-100 p-1 rounded-full border border-gray-200 shadow-sm shrink-0">
          <button 
            onClick={() => setLang('te')}
            className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${lang === 'te' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            తెలుగు
          </button>
          <button 
            onClick={() => setLang('en')}
            className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${lang === 'en' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            English
          </button>
        </div>
      </div>

      {/* Grid Timeline Layout */}
      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-gray-200"></div>
        <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-12 md:gap-x-16">
          {historyData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={item.id} className={`relative pl-12 md:pl-0 ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12 md:col-start-2'}`}>
                
                <div className="md:hidden absolute left-0 top-0 w-10 h-10 rounded-full border-4 border-white bg-gray-50 shadow-sm flex items-center justify-center z-10">
                  {item.icon}
                </div>
                
                <div className={`hidden md:flex absolute top-0 w-10 h-10 rounded-full border-4 border-white bg-gray-50 shadow-sm items-center justify-center z-10 ${isLeft ? '-right-5 translate-x-full' : '-left-5 -translate-x-full'}`}>
                  {item.icon}
                </div>

                <div className="bg-gray-50 hover:bg-white transition-colors p-6 rounded-2xl shadow-sm border border-gray-200">
                  <div className={`flex flex-col ${isLeft ? 'md:items-end' : 'md:items-start'} mb-4`}>
                    <span className="text-sm font-extrabold text-red-600 mb-2 block bg-red-100 px-3 py-1 rounded-md w-fit">
                      {item.date}
                    </span>
                    <h4 className="font-bold text-gray-900 text-xl mb-1">
                      {lang === 'te' ? item.title_te : item.title_en}
                    </h4>
                    <span className="text-sm font-semibold text-blue-600">
                      {lang === 'te' ? item.hospital_te : item.hospital_en}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed text-left">
                    {cleanText(lang === 'te' ? item.content_te : item.content_en)}
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