'use client';
import React, { useState } from 'react';
import { Hospital, Activity, HeartCrack, AlertCircle, Syringe, FileWarning , HeartHandshake,ScanLine} from 'lucide-react';

export default function MedicalHistory() {
  const [lang, setLang] = useState<'te' | 'en'>('te');

  const cleanText = (text: string) => {
    if (!text) return '';
    return text.replace(/\]+\]/g, '');
  };

  const historyData = [
    {
  id: 0,
  date: "Childhood / Infancy",
  title_te: "చిన్ననాటి పేగుల శస్త్రచికిత్స చరిత్ర",
  title_en: "Childhood Intestinal Surgery History",
  hospital_te: "పూర్వ వైద్య చరిత్ర",
  hospital_en: "Past Medical & Surgical History",
  icon: <HeartHandshake className="w-5 h-5 text-pink-600" />,
  content_te:
    "సిద్ధార్థ్‌కు పుట్టినప్పటి నుంచే పేగులకు సంబంధించిన తీవ్రమైన సమస్య చరిత్ర ఉంది. పుట్టిన తర్వాత మలం రాకపోవడంతో కేవలం 5 రోజుల వయసులోనే పేగులకు Ileostomy చేసి Stoma ఏర్పాటు చేశారు. అనంతరం సుమారు 10 నెలల వయసులో Stoma Reversal Surgery చేసి పేగులను తిరిగి కలిపారు. ఈ చిన్ననాటి abdominal surgeries అతని Past Surgical History లో ముఖ్యమైన భాగంగా తరువాతి వైద్య చికిత్సల సమయంలో నమోదు చేశారు.",
  content_en:
    "Siddharth has a significant history of intestinal surgery dating back to infancy. After failure to pass stool following birth, an Ileostomy with stoma formation was performed when he was approximately 5 days old. At around 10 months of age, he subsequently underwent Stoma Reversal Surgery with restoration of intestinal continuity. This childhood abdominal surgical history remained an important part of his past surgical history during his later treatment."
},
  {
    id: 1,
    date: "14 - 15 May 2026",
    title_te: "వ్యాధి నిర్ధారణ (Diagnosis)",
    title_en: "Initial Diagnosis",
    hospital_te: "ఉమాదేవి & గార్డియన్ హాస్పిటల్స్",
    hospital_en: "Umadevi & Guardian Hospitals",
    icon: <AlertCircle className="w-5 h-5 text-orange-500" />,
    content_te:
      "2026 మే 14న తీవ్రమైన కడుపు నొప్పి, వాంతులు, Motion ఆగిపోవడంతో మొదట ఉమాదేవి హాస్పిటల్ లో చేర్పించారు. Ultrasound లో Dilated Small Bowel Loops మరియు Subacute Intestinal Obstruction అనుమానం వ్యక్తమైంది. అనంతరం Guardian Hospital లో CT Abdomen చేయగా Right Spigelian Hernia కారణంగా Small Bowel Obstruction ఏర్పడిందని, Proximal Small Bowel Loops సుమారు 3.5 సెం.మీ వరకు ఉబ్బిపోయాయని నిర్ధారించారు. పరిస్థితి అత్యవసరంగా ఉండటంతో వెంటనే Higher Surgical Centre కి Refer చేశారు.",
    content_en:
      "On 14 May 2026, Siddharth was admitted with severe abdominal pain, vomiting and inability to pass stool. Ultrasound suggested dilated small bowel loops with suspected subacute intestinal obstruction. A CT Abdomen at Guardian Hospital confirmed a Right Spigelian Hernia causing Small Bowel Obstruction with proximal bowel dilation of approximately 3.5 cm. He was immediately referred to a higher surgical center for emergency management."
  },

  {
    id: 2,
    date: "16 May 2026",
    title_te: "మొదటి ఎమర్జెన్సీ ఆపరేషన్",
    title_en: "Emergency Exploratory Laparotomy",
    hospital_te: "RVM హాస్పిటల్",
    hospital_en: "RVM Hospital",
    icon: <Activity className="w-5 h-5 text-blue-500" />,
    content_te:
      "RVM Hospital లో అత్యవసర Exploratory Laparotomy నిర్వహించారు. శస్త్రచికిత్స సమయంలో చిన్నపేగులు తీవ్రంగా ఉబ్బిపోయి ఒకదానికొకటి అతుక్కుపోయినట్లు (Dense Interloop Adhesions) గుర్తించారు. రక్తప్రసరణ పూర్తిగా ఆగిపోవడంతో Gangrene అయిన రెండు చిన్నపేగు భాగాలను తొలగించి (Small Bowel Resection), ఆరోగ్యకరమైన భాగాలను మళ్లీ కలిపి Anastomosis చేశారు. ఈ శస్త్రచికిత్స ద్వారా ప్రాణాపాయ పరిస్థితిని తాత్కాలికంగా నియంత్రించారు.",
    content_en:
      "Emergency Exploratory Laparotomy was performed at RVM Hospital. Surgeons found grossly distended small bowel loops with dense interloop adhesions. Two gangrenous bowel segments were resected and primary end-to-end anastomosis was performed to restore intestinal continuity."
  },

  {
    id: 3,
    date: "20 - 27 May 2026",
    title_te: "ఆపరేషన్ అనంతర తీవ్రమైన సమస్యలు",
    title_en: "Post-operative Complications",
    hospital_te: "RVM Hospital ICU",
    hospital_en: "RVM Hospital ICU",
    icon: <FileWarning className="w-5 h-5 text-yellow-500" />,
    content_te:
      "శస్త్రచికిత్స జరిగిన ఐదవ రోజు నుండి Anastomosis చేసిన ప్రాంతంలో Leak ప్రారంభమైంది. Hematobilious Leak, Blood Clots మరియు Enteric Fluid బయటకు రావడం ప్రారంభమైంది. Hemoglobin గణనీయంగా తగ్గిపోయింది. రోజుకు సుమారు 900 నుండి 1500 మి.లీ వరకు లీకేజ్ నమోదవడంతో పరిస్థితి మరింత విషమించింది. ఇది తరువాత Enterocutaneous Fistula మరియు Anastomotic Dehiscence గా అభివృద్ధి చెందింది.",
    content_en:
      "On the fifth postoperative day, leakage developed from the anastomosis site. Hematobilious fluid, blood clots and enteric contents were continuously draining. Hemoglobin dropped significantly, with daily output ranging from 900–1500 ml. The complication later progressed into Enterocutaneous Fistula and Anastomotic Dehiscence."
  },

  {
    id: 4,
    date: "28 May 2026",
    title_te: "రెండో ప్రాణరక్షక ఆపరేషన్",
    title_en: "Emergency Re-exploration & Loop Jejunostomy",
    hospital_te: "RVM Hospital",
    hospital_en: "RVM Hospital",
    icon: <HeartCrack className="w-5 h-5 text-red-600" />,
    content_te:
      "పరిస్థితి మరింత విషమించడంతో మళ్లీ అత్యవసర Re-exploration నిర్వహించారు. Rectus Sheath ఇన్ఫెక్షన్ కు గురైంది. ఎడమ Subdiaphragmatic ప్రాంతంలో Cheesy Pus గుర్తించారు. గతంలో కలిపిన పేగుల రెండు ప్రాంతాల్లో కుట్లు విడిపోవడంతో మళ్లీ Resection చేసి కొత్త Anastomosis చేశారు. అనంతరం పేగులకు విశ్రాంతి ఇవ్వడానికి Duodenojejunal Flexure నుండి సుమారు 50 సెం.మీ దూరంలో Loop Jejunostomy (Stoma) ఏర్పాటు చేశారు.",
    content_en:
      "Due to worsening condition, emergency re-exploration was performed. Surgeons found infected rectus sheath and cheesy pus in the left subdiaphragmatic region. Failed anastomotic segments were resected and reconstructed. A Loop Jejunostomy was created approximately 50 cm distal to the DJ Flexure to divert bowel contents and allow healing."
  },
  {
  id: 5,
  date: "June 2026",
  title_te: "ఫంగల్ సెప్సిస్ & డిస్టల్ రీఫీడింగ్",
  title_en: "Fungal Sepsis & Distal Refeeding",
  hospital_te: "RVM Hospital ICU",
  hospital_en: "RVM Hospital ICU",
  icon: <Syringe className="w-5 h-5 text-purple-600" />,
  content_te:
    "రెండో శస్త్రచికిత్స అనంతరం ఐసీయూలో చికిత్స పొందుతున్న సమయంలో రోగికి Candida (Non-albicans) Fungal Sepsis వచ్చింది. దీనికి Anidulafungin Anti-fungal చికిత్స అందించారు. అదే సమయంలో Loop Jejunostomy ద్వారా రోజుకు సుమారు 1500–1700 ml వరకు పేగు ద్రవం బయటకు రావడంతో శరీరంలో నీరు, లవణాలు మరియు పోషకాలు తీవ్రంగా తగ్గిపోయాయి. మిగిలిన పేగులు పనిచేస్తూ ఉండేందుకు బయటకు వచ్చిన ద్రవాన్ని శుభ్రపరిచి Distal Loop లోకి గంటకు సుమారు 50 ml చొప్పున Refeeding ప్రారంభించారు.",
  content_en:
    "Following the second surgery, the patient developed Candida (Non-albicans) fungal sepsis while in the ICU and was treated with Anidulafungin. Daily jejunostomy output reached approximately 1500–1700 ml, resulting in severe fluid, electrolyte and nutritional loss. To preserve distal bowel function, filtered proximal intestinal contents were continuously re-fed into the distal loop at approximately 50 ml/hour."
},

{
  id: 6,
  date: "23 - 25 June 2026",
  title_te: "రోహిణి హాస్పిటల్ లో అత్యవసర చికిత్స",
  title_en: "Emergency Treatment at Rohini Hospital",
  hospital_te: "రోహిణి హాస్పిటల్",
  hospital_en: "Rohini Hospital",
  icon: <Activity className="w-5 h-5 text-rose-500" />,
  content_te:
    "తీవ్ర బలహీనత, రక్తహీనత మరియు Electrolyte అసమతుల్యతల కారణంగా రోహిణి హాస్పిటల్ లో చేర్పించారు. Hemoglobin సుమారు 7.2 gm/dL వరకు తగ్గడంతో PRBC మరియు Whole Blood ఎక్కించారు. IV Fluids, Electrolyte Correction మరియు Anti-fungal చికిత్స అనంతరం పరిస్థితి కొంత స్థిరపడటంతో డిశ్చార్జ్ చేశారు.",
  content_en:
    "The patient was admitted to Rohini Hospital with severe weakness, anemia and electrolyte imbalance. Hemoglobin dropped to approximately 7.2 g/dL requiring PRBC and Whole Blood transfusions. IV fluids, electrolyte correction and antifungal therapy stabilized his condition before discharge."
},

{
  id: 7,
  date: "20 - 29 July 2026",
  title_te: "నిమ్స్ హాస్పిటల్ చికిత్స",
  title_en: "Treatment at NIMS Hospital",
  hospital_te: "NIMS Hospital, Hyderabad",
  hospital_en: "NIMS Hospital, Hyderabad",
  icon: <Hospital className="w-5 h-5 text-teal-600" />,
  content_te:
    "గత రెండు పెద్ద శస్త్రచికిత్సలు, Enterocutaneous Fistula, Anastomotic Dehiscence మరియు Loop Jejunostomy అనంతరం NIMS Surgical Gastroenterology విభాగంలో చేర్పించారు. CT Abdomen & Pelvis, రక్త పరీక్షలు మరియు పూర్తి క్లినికల్ మూల్యాంకనం నిర్వహించారు. Sodium (125 mmol/L) మరియు Potassium (2.2 mmol/L) తీవ్రంగా తగ్గినట్లు గుర్తించి వెంటనే సరిచేశారు. ప్రస్తుతం మరో శస్త్రచికిత్స చేయడం ప్రమాదకరమని భావించి Conservative Management, Nutritional Rehabilitation, High Protein Diet, Distal Refeeding, Electrolyte Correction మరియు Stoma Care ప్రారంభించారు.",
  content_en:
    "Following multiple abdominal surgeries complicated by Enterocutaneous Fistula, Anastomotic Dehiscence and Loop Jejunostomy, the patient was admitted to the Surgical Gastroenterology Department at NIMS. CT Abdomen & Pelvis, laboratory investigations and complete clinical evaluation were performed. Severe hyponatremia (125 mmol/L) and hypokalemia (2.2 mmol/L) were corrected. Due to high surgical risk, doctors opted for conservative management with nutritional rehabilitation, high-protein diet, distal refeeding, electrolyte correction and comprehensive stoma care."
},
{
  id: 8,
  date: "July 2026 - During NIMS Admission",
  title_te: "CT Abdomen & Pelvis మరియు వైద్య పరీక్షలు",
  title_en: "CT Abdomen & Pelvis & Medical Evaluation",
  hospital_te: "నిమ్స్ హాస్పిటల్ - Surgical Gastroenterology",
  hospital_en: "NIMS Hospital - Surgical Gastroenterology",
  icon: <ScanLine className="w-5 h-5 text-cyan-600" />,
  content_te:
    "NIMS లో చేరిన తరువాత పొత్తికడుపు పరిస్థితిని అంచనా వేయడానికి CT Abdomen & Pelvis findings ను పరిశీలించారు. CT లో Liver ఎడమ భాగం దిగువ ప్రాంతంలో సుమారు 76 × 35 × 53 mm పరిమాణంలో Loculated Collection కనిపించింది. కొన్ని Small Bowel Loops fluid-filled గా ఉండటంతో పాటు Bowel Wall Edema కనిపించింది. Large Bowel లో Patchy Enhancement, పొత్తికడుపులో Mild Free Fluid మరియు Anterior Abdominal Wall లో Air Pockets కనిపించాయి. Distal Ileal Loop ప్రాంతంలో suspicious communication ఉన్నట్లు CT findings లో పేర్కొన్నారు. అదనంగా రెండు వైపులా Moderate Pleural Effusion కనిపించింది. Admission సమయంలో ముఖ్యంగా Sodium 125 mmol/L మరియు Potassium 2.2 mmol/L వరకు తగ్గిన తీవ్రమైన Electrolyte Imbalance కూడా గుర్తించారు. NIMS లో Conservative Management, Electrolyte Correction, Nutritional Rehabilitation, High-Protein/High-Calorie Nutrition, Stoma Care మరియు Distal Refeeding కొనసాగించారు. చికిత్స అనంతరం Sodium 139 mmol/L మరియు Potassium 3.6 mmol/L వరకు మెరుగయ్యాయి. Clinical condition స్థిరపడటం, oral intake మెరుగుపడటం, fever/sepsis evidence లేకపోవడం మరియు stoma healthy & functioning గా ఉండటంతో discharge చేసి nutritional rehabilitation కొనసాగిస్తూ Surgical Gastroenterology follow-up కు రావాలని సూచించారు.",
  content_en:
    "During the NIMS admission, CT Abdomen & Pelvis findings were reviewed to assess the postoperative abdominal condition. Imaging showed a loculated collection measuring approximately 76 × 35 × 53 mm beneath the left hepatic region. Fluid-filled small bowel loops with bowel-wall edema were noted, along with patchy enhancement of the large bowel, mild free intraperitoneal fluid and air pockets in the anterior abdominal wall. A suspicious communication involving the distal ileal loop was also described. Moderate bilateral pleural effusion was additionally noted. Laboratory evaluation at admission demonstrated significant electrolyte abnormalities, particularly Sodium of 125 mmol/L and Potassium of 2.2 mmol/L. Management at NIMS included conservative treatment, correction of electrolytes, nutritional rehabilitation, high-protein/high-calorie nutritional support, stoma care and distal refeeding. Following treatment, Sodium improved to 139 mmol/L and Potassium to 3.6 mmol/L. With improved oral intake, stable clinical condition, no evidence of ongoing sepsis, and a healthy functioning stoma, the patient was discharged with advice to continue nutritional rehabilitation and follow up with Surgical Gastroenterology."
},

{
  id: 9,
  date: "29 July 2026",
  title_te: "నిమ్స్ నుండి డిశ్చార్జ్",
  title_en: "Discharge from NIMS",
  hospital_te: "NIMS Hospital",
  hospital_en: "NIMS Hospital",
  icon: <Hospital className="w-5 h-5 text-green-600" />,
  content_te:
    "దాదాపు పది రోజుల చికిత్స అనంతరం రోగి పరిస్థితి మెరుగుపడటంతో NIMS నుండి డిశ్చార్జ్ చేశారు. డిశ్చార్జ్ సమయానికి Electrolytes సాధారణ స్థాయికి చేరుకున్నాయి, Infection అదుపులో ఉంది మరియు Stoma సరిగా పనిచేస్తోంది. ఇంట్లో High Protein & High Calorie Diet, Distal Refeeding, Stoma Care, Loperamide, Zinc, Calcium, Multivitamins కొనసాగిస్తూ వారం రోజుల తర్వాత Surgical Gastroenterology OPD లో తిరిగి పరీక్ష చేయించుకోవాలని సూచించారు.",
  content_en:
    "After approximately ten days of treatment, the patient was discharged from NIMS in a clinically stable condition. Electrolytes had improved, infection was under control and the stoma was functioning well. Doctors advised continuation of a high-protein, high-calorie diet, distal refeeding, stoma care, Loperamide, Zinc, Calcium, Multivitamins and review at the Surgical Gastroenterology OPD after one week."
},

{
  id: 9,
  date: "Current Status",
  title_te: "ప్రస్తుత పరిస్థితి & తదుపరి చికిత్స",
  title_en: "Current Status & Future Treatment",
  hospital_te: "NIMS Follow-up",
  hospital_en: "NIMS Follow-up",
  icon: <Hospital className="w-5 h-5 text-indigo-600" />,
  content_te:
    "ప్రస్తుతం ప్రాణాపాయ దశ నుండి బయటపడ్డారు. అయితే ఇంకా పూర్తి కోలుకోలేదు. Nutritional Rehabilitation కొనసాగుతోంది. బరువు, Albumin, Protein Levels, Electrolytes మెరుగుపడిన తరువాత మరియు పేగులు పూర్తిగా కోలుకున్నాయని వైద్యులు నిర్ధారించిన తర్వాత మాత్రమే Stoma Reversal Surgery గురించి నిర్ణయం తీసుకుంటారు. ప్రస్తుతం అన్ని చికిత్సలు ఆ లక్ష్యంతోనే కొనసాగుతున్నాయి.",
  content_en:
    "The patient has recovered from the life-threatening phase but continues to require nutritional rehabilitation. Doctors will consider Stoma Reversal Surgery only after nutritional status, albumin, electrolyte balance and overall bowel healing have significantly improved. Current treatment is focused on preparing him safely for that future stage."
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