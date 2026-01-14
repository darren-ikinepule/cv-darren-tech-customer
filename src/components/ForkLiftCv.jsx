import React from 'react';

// --- Data Structure remains the same ---
const cvData = {
  personal: {
    name: "Darren Ikinepule",
    title: "Warehouse & Logistics Professional", // Updated as per previous suggestion
    email: "darrenikinepule@outlook.co.nz",
    phone: "0204339983",
    location: "Auckland 1072",
  },
  summary: [
    "Reliable professional with a zero incident safety record, transitioning from high volume hospitality management into logistics and warehouse operations. Proven ability to remain calm under pressure and solve complex problems in fast paced environments. Committed to operational accuracy, health and safety compliance, and providing excellent service to support team output and efficiency."
  ],
  skills: {
    technical: [
      "Certified Forklift Operator: Counter Balance (LPG), Reach, Stock Picker, Pallet Truck",
      "Inventory & Logistics: Detailed inventory records and accurate asset tracking",
      "Customer Service: Professional resolution of customer feedback and requests",
    ],
    core: [
      { category: "Certifications", items: ["Full Class 1 NZ Driver's Licence", "Certified Forklift Operator (Reach/Stock/Counter)", "Software Development (Take2 Programme, 2024)"] },
      { category: "Professional Skills", items: ["Reliability and punctuality", "Attention to safety and accuracy", "Team collaboration", "Problem solving in high pressure"] },
    ],
    personal: ["Strong team ethic", "Reliable and punctual", "Organised and self disciplined", "Excellent H&S awareness"],
  },
  education: [
    {
      role: "Software Development and Professional Skills",
      company: "Take2 Programme",
      location: "Auckland",
      dates: "2024 - Present",
      description: ["Project based learning focused on technical skills and professional development."],
    },
    {
      role: "Forklift Certification",
      company: "Certified Training",
      location: "Auckland",
      dates: "2024",
      description: ["Counter Balance (LPG), Reach Electric, Stock Picker Electric, and Pallet Truck Electric."],
    },
  ],
  experience: [
    {
      role: "Property Manager",
      company: "Gardenia Trust LTD",
      location: "Auckland",
      dates: "10/2024 - Present",
      description: [
        "Managed a portfolio of 7 properties across NZ and the Pacific Islands.",
        "Maintained detailed inventory and records, ensuring compliance and accurate asset tracking.",
        "Organised comprehensive networks of tradespeople for timely maintenance and repairs."
      ],
      isHighlight: true
    },
    {
      role: "Head Chef",
      company: "Kohuora Cafe",
      location: "Auckland",
      dates: "05/2018 - 10/2022",
      description: [
        "Led high volume production standards, increasing daily lunch covers by 80%.",
        "Managed kitchen operations and inventory while maintaining strict quality control."
      ]
    },
    {
      role: "Gourmet Production Chef",
      company: "Eat My Lunch",
      location: "Auckland",
      dates: "05/2016 - 05/2018",
      description: [
        "Maintained 99%+ quality standards through systematic quality control processes (GMP/HACCP).",
        "Resolved customer requests efficiently in a fast paced environment."
      ]
    },
    {
        role: "Executive Chef / Management",
        company: "Various International Establishments",
        location: "NZ & Thailand",
        dates: "1995 - 2015",
        description: [
          "Led teams of 15+ staff through performance management programs.",
          "Achieved 95%+ guest satisfaction through systematic quality improvement and process optimization."
        ]
      }
  ],
};

// --- Updated Components for Print-First Logic ---

const Icon = ({ path, className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    {path === 'mail' && <path d="M1.5 8.67v8.58a1.5 1.5 0 001.5 1.5h17a1.5 1.5 0 001.5-1.5V8.67l-8.88 5.06a.75.75 0 01-.76 0L1.5 8.67z" />}
    {path === 'phone' && <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />}
    {path === 'location' && <path d="M11.54 22.351l.07.04.28.16a1 1 0 001.22 0l.28-.16.07-.04a41.8 41.8 0 003.525-6.736c.2-.4.2-.9 0-1.3a41.8 41.8 0 00-3.525-6.736l-.07-.04a.75.75 0 00-.76 0l-.07.04a41.8 41.8 0 00-3.525 6.736c-.2.4-.2.9 0 1.3a41.8 41.8 0 003.525 6.736zm-1.04-6.601a3 3 0 114.5-4.5 3 3 0 01-4.5 4.5z" />}
    {path === 'briefcase' && <path d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c3.864.5 6.75 3.79 6.75 7.645v6.75a3 3 0 01-3 3h-15a3 3 0 01-3-3v-6.75c0-3.855 2.886-7.145 6.75-7.645V5.25z" />}
    {path === 'graduationCap' && <path d="M11.7 2.805a.75.75 0 01.6 0l9.75 4.125a.75.75 0 010 1.38l-9.75 4.125a.75.75 0 01-.6 0L2.35 8.435V15a.75.75 0 01-1.5 0V7.935a.75.75 0 01.4-.67l10.45-4.46z" />}
    {path === 'star' && <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />}
  </svg>
);

const Header = ({ personal }) => (
  <header className="bg-slate-800 text-white px-8 py-8 rounded-t-lg shadow-xl border-b-4 border-blue-500 print:bg-white print:text-slate-900 print:shadow-none print:px-0 print:py-4">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center print:flex-row print:items-center">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight print:text-3xl">{personal.name}</h1>
        <p className="text-xl font-medium text-blue-300 mt-1 print:text-blue-700 print:text-lg uppercase tracking-wide">{personal.title}</p>
      </div>
      <div className="mt-4 md:mt-0 text-sm md:text-right space-y-1 print:mt-0 print:text-xs">
        <div className="flex items-center space-x-2 justify-start md:justify-end">
          <Icon path="mail" className="w-4 h-4 text-blue-300 print:text-blue-600" />
          <span>{personal.email}</span>
        </div>
        <div className="flex items-center space-x-2 justify-start md:justify-end">
          <Icon path="phone" className="w-4 h-4 text-blue-300 print:text-blue-600" />
          <span>{personal.phone}</span>
        </div>
        <div className="flex items-center space-x-2 justify-start md:justify-end">
          <Icon path="location" className="w-4 h-4 text-blue-300 print:text-blue-600" />
          <span>{personal.location}</span>
        </div>
      </div>
    </div>
  </header>
);

const SectionTitle = ({ title, icon }) => (
  <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4 flex items-center space-x-2 text-slate-800 pt-8 print:pt-4 print:text-xl print:border-slate-300 break-after-avoid">
    <Icon path={icon} className="w-6 h-6 text-blue-600 print:w-5 print:h-5" />
    <span>{title}</span>
  </h2>
);

const ExperienceItem = ({ role, company, location, dates, description, isHighlight }) => (
  <div className={`mb-5 p-5 rounded-lg border break-inside-avoid print:mb-4 print:p-0 print:border-none ${isHighlight ? 'bg-blue-50 border-blue-200 print:bg-transparent' : 'bg-white border-slate-100 shadow-sm'}`}>
    <div className="flex justify-between items-start print:mb-0.5">
      <h3 className="text-xl font-bold text-slate-900 print:text-lg">{role}</h3>
      <span className="text-sm font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded flex-shrink-0 print:bg-transparent print:px-0 print:py-0 print:text-slate-600">{dates}</span>
    </div>
    <div className="flex justify-between items-center text-md text-slate-500 mb-3 print:mb-1 print:text-sm print:text-blue-800">
      <p className="font-bold">{company}</p>
      <p className="italic">{location}</p>
    </div>
    <ul className="list-disc ml-6 text-slate-700 text-md space-y-1.5 print:text-sm print:ml-4 print:space-y-1">
      {description.map((point, index) => <li key={index}>{point}</li>)}
    </ul>
  </div>
);

const ForkLiftCv = () => {
  const { personal, summary, skills, education, experience } = cvData;

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-12 font-sans text-slate-900 print:bg-white print:p-0">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-200 print:shadow-none print:border-none print:max-w-none print:w-full">
        <Header personal={personal} />

        <main className="p-8 md:p-12 print:p-0 print:pt-4">
          {/* Summary */}
          <section className="break-inside-avoid">
            <SectionTitle title="Professional Summary" icon="star" />
            <div className="text-slate-700 leading-relaxed text-lg print:text-sm print:leading-normal italic bg-slate-50 p-4 rounded print:bg-transparent print:p-0">
              {summary.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </section>

          {/* Skills Grid */}
          <section className="break-inside-avoid">
            <SectionTitle title="Skills & Certifications" icon="briefcase" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 print:gap-4 print:grid-cols-2">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-tight print:text-sm">Technical & Certs</h3>
                <ul className="list-disc ml-6 text-md text-slate-700 space-y-2 print:text-sm print:ml-4 print:space-y-1">
                    {skills.technical.map((skill, i) => <li key={i} className="font-semibold">{skill}</li>)}
                </ul>
                <h4 className="text-lg font-bold text-slate-800 mt-4 mb-3 uppercase tracking-tight print:text-sm">Personal Qualities</h4>
                <ul className="list-disc ml-6 text-md text-slate-700 space-y-2 print:text-sm print:ml-4 print:space-y-1">
                    {skills.personal.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div className="space-y-6 print:space-y-4">
                {skills.core.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-tight print:text-sm">{section.category}</h3>
                    <ul className="list-disc ml-6 text-md text-slate-700 space-y-2 print:text-sm print:ml-4 print:space-y-1">
                      {section.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <SectionTitle title="Education" icon="graduationCap" />
            <div className="space-y-2">
              {education.map((item, index) => (
                <ExperienceItem key={index} {...item} />
              ))}
            </div>
          </section>

          {/* Work History */}
          <section>
            <SectionTitle title="Work History" icon="briefcase" />
            <div className="space-y-2">
              {experience.map((job, index) => (
                <ExperienceItem key={index} {...job} />
              ))}
            </div>
          </section>
        </main>
        
        <footer className="bg-slate-50 p-6 text-center text-sm text-slate-400 border-t border-slate-100 print:bg-white print:text-slate-500">
          References and Forklift Certificate available upon request.
        </footer>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { margin: 15mm; }
          body { -webkit-print-color-adjust: exact; }
          .experience-item { border-bottom: 1px solid #e2e8f0 !important; padding-bottom: 1rem !important; }
        }
      `}} />
    </div>
  );
};

export default ForkLiftCv;