import React from 'react';

// --- Updated Data Structure for CHEP Application ---
const cvData = {
  personal: {
    name: "Darren Ikinepule",
    title: "Operations & Logistics Professional",
    email: "darrenikinepule@outlook.co.nz",
    phone: "0204339983",
    location: "Auckland 1072",
  },
  summary: [
    "Energetic and reliable professional with a zero incident safety record, transitioning a successful career in high volume operations into administrative logistics. Committed to extreme accuracy in inventory coordination and safety compliance, with a fast learning technical mindset developed through intensive software training."
  ],
  skills: {
    technical: [
      "Systems: SAP & Coupa (Aptitude), Advanced Excel, AI Prompting",
      "Inventory: Coordination, Stock Control & Variance Investigation",
      "Safety: B Safe Management Competency & High Level Compliance",
      "Machinery: Certified Forklift Operator (Reach, Stock Picker, Counter Balance)",
    ],
    core: [
      { 
        category: "Certifications & Qualifications", 
        items: [
          "Software Development and Professional Skills (Take2 Programme, 2024)",
          "Certified Forklift Operator - Jan 2026 (Full Suite)", 
          "Full Class 1 NZ Driver's Licence"
        ] 
      },
      { 
        category: "Professional Skills", 
        items: [
          "Dispatch Coordination & Scheduling", 
          "Zero Incident Safety Record", 
          "Team Leadership (15+ Staff)", 
          "Administrative Accuracy & Invoicing"
        ] 
      },
    ],
    personal: [
      "Proactive team player with an energetic work ethic", 
      "Fast learner of complex ERP and digital systems", 
      "Reliable and punctual (Ready for early shift starts)", 
      "Strong problem solving skills under pressure"
    ],
  },
  education: [
    {
      role: "Software Development & Professional Skills",
      company: "Take2 Programme",
      location: "Auckland",
      dates: "2024 - Present",
      description: [
        "1,000+ hour intensive coding bootcamp focused on technical logic, professional communication, and digital tools.",
        "Developed a high level of computer literacy and technical aptitude for mastering ERP platforms like SAP.",
      ],
    },
    {
      role: "Forklift Certification",
      company: "Certified Training",
      location: "Auckland",
      dates: "Jan 2026",
      description: [
        "Qualified for Counter Balance (LPG), Reach Electric, Stock Picker, and Pallet Truck.",
        "Demonstrated strict adherence to Health & Safety and B Safe protocols.",
      ],
    },
  ],
  experience: [
    {
      role: "Property Manager",
      company: "Gardenia Trust LTD",
      location: "Auckland",
      dates: "10/2024 - Present",
      description: [
        "Managed inventory and detailed asset records for 7 properties; investigated discrepancies to ensure accurate stock control and variance reporting.",
        "Coordinated dispatch for a network of tradespeople, managing repair schedules and optimizing maintenance workflows.",
        "Administered procurement by organizing quotes and processing payments upon approval, ensuring administrative accuracy.",
      ]
    },
    {
      role: "Head Chef",
      company: "Kohuora Cafe",
      location: "Auckland",
      dates: "05/2018 - 10/2022",
      description: [
        "Led high volume production standards while driving an 80% increase in daily volume through process optimization.",
        "Maintained 99%+ quality and safety compliance within a fast paced environment.",
      ]
    },
    {
      role: "Executive Chef",
      company: "International Resorts",
      location: "Thailand",
      dates: "01/2005 - 01/2015",
      description: [
        "Led and mentored diverse teams of 15+ staff, managing complex operational tasks and high pressure delivery.",
        "Achieved 95%+ guest satisfaction through systematic quality control and safety management.",
      ]
    },
    {
      role: "Executive Sous Chef",
      company: "Impiana Resort And Spa",
      location: "Koh Samui, Thailand",
      dates: "06/2002 - 06/2004",
      description: [
        "Supported and improved internal processes to increase efficiency and reduce waste (Process Optimization).",
        "Managed large scale operational logistics requiring advanced multitasking and physical stamina.",
      ]
    }
  ],
};

// --- Utility Components (Keep these the same) ---
const Icon = ({ path, className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    {path === 'mail' && (
      <path d="M1.5 8.67v8.58a1.5 1.5 0 001.5 1.5h17a1.5 1.5 0 001.5-1.5V8.67l-8.88 5.06a.75.75 0 01-.76 0L1.5 8.67z" />
    )}
    {path === 'phone' && (
      <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />
    )}
    {path === 'location' && (
      <path d="M11.54 22.351l.07.04.28.16a1 1 0 001.22 0l.28-.16.07-.04a41.8 41.8 0 003.525-6.736c.2-.4.2-.9 0-1.3a41.8 41.8 0 00-3.525-6.736l-.07-.04a.75.75 0 00-.76 0l-.07.04a41.8 41.8 0 00-3.525 6.736c-.2.4-.2.9 0 1.3a41.8 41.8 0 003.525 6.736zm-1.04-6.601a3 3 0 114.5-4.5 3 3 0 01-4.5 4.5z" />
    )}
    {path === 'briefcase' && (
      <path d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c3.864.5 6.75 3.79 6.75 7.645v6.75a3 3 0 01-3 3h-15a3 3 0 01-3-3v-6.75c0-3.855 2.886-7.145 6.75-7.645V5.25z" />
    )}
    {path === 'graduationCap' && (
      <path d="M12 2.25a.75.75 0 01.75.75v1.5L15 4.5V4.75A.75.75 0 0115.75 5h1.5A.75.75 0 0118 5.75V7.5h.75A.75.75 0 0119.5 8.25v2.25a.75.75 0 01-.75.75H18v1.5a.75.75 0 01-1.5 0v-1.5H15V15a.75.75 0 01-.75.75h-3A.75.75 0 0110.5 15v-1.5H9v-1.5H7.5V9.75h-.75A.75.75 0 016 9V7.5a.75.75 0 01.75-.75H9V5.75A.75.75 0 019.75 5h1.5A.75.75 0 0112 5.75V9h1.5V6a.75.75 0 011.5 0v3h-1.5v1.5h1.5v-1.5H18v1.5h-.75A.75.75 0 0116.5 12v-1.5a.75.75 0 01.75-.75h1.5V9H18V7.5a.75.75 0 01-.75-.75H15V5.25A.75.75 0 0114.25 4.5H12V3A.75.75 0 0112 2.25z" />
    )}
    {path === 'star' && (
      <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
    )}
  </svg>
);

const Header = ({ personal }) => (
  <header className="bg-slate-800 text-white px-8 py-4 rounded-t-lg shadow-xl border-b-4 border-blue-600">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight">{personal.name}</h1>
        <p className="text-xl font-medium text-blue-400 mt-1 uppercase tracking-wider">{personal.title}</p>
      </div>
      <div className="mt-4 md:mt-0 text-sm md:text-right space-y-1">
        <ContactItem icon="mail" text={personal.email} link={`mailto:${personal.email}`} />
        <ContactItem icon="phone" text={personal.phone} link={`tel:${personal.phone}`} />
        <ContactItem icon="location" text={personal.location} />
      </div>
    </div>
  </header>
);

const ContactItem = ({ icon, text, link }) => (
  <div className="flex items-center space-x-2 justify-start md:justify-end">
    <Icon path={icon} className="w-4 h-4 text-blue-400 flex-shrink-0" />
    {link ? (
      <a href={link} className="hover:text-blue-300 transition duration-150 border-b border-transparent hover:border-blue-300">
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </div>
);

const SectionTitle = ({ title, icon }) => (
  <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-1 mb-4 flex items-center space-x-2 text-slate-800 pt-6">
    <Icon path={icon} className="w-5 h-5 text-blue-600" />
    <span>{title}</span>
  </h2>
);

const ExperienceItem = ({ role, company, location, dates, description, isHighlight }) => (
  <div className={`experience-item mb-4 p-4 rounded border ${isHighlight ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-100 shadow-sm'}`}>
    <div className="flex justify-between items-start">
      <h3 className="text-lg font-bold text-slate-900">{role}</h3>
      <span className="text-sm font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded flex-shrink-0">{dates}</span>
    </div>
    <div className="flex justify-between items-center text-sm text-slate-500 mb-2">
      <p className="font-semibold">{company}</p>
      <p className="italic">{location}</p>
    </div>
    <ul className="list-disc ml-5 text-slate-700 text-sm space-y-1">
      {description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const AdminCv = () => {
  const { personal, summary, skills, education, experience } = cvData;

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-8 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-200">
        <Header personal={personal} />

        <main className="p-6 md:p-8">
          <section>
            <SectionTitle title="Professional Summary" icon="star" />
            <div className="text-slate-700 leading-relaxed text-base">
              {summary.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </section>

          <section>
            <SectionTitle title="Core Capabilities" icon="briefcase" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-md font-bold text-slate-800 mb-2 uppercase tracking-tight">Technical & Systems</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1">
                    {skills.technical.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>

                <div className="mt-6">
                  <h3 className="text-md font-bold text-slate-800 mb-2 uppercase tracking-tight">Soft Skills & Vibe</h3>
                  <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1">
                    {skills.personal.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                {skills.core.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-md font-bold text-slate-800 mb-2 uppercase tracking-tight">{section.category}</h3>
                    <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1">
                      {section.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section>
            <SectionTitle title="Work History" icon="briefcase" />
            <div className="space-y-4">
              {experience.map((job, index) => (
                <ExperienceItem key={index} {...job} />
              ))}
            </div>
          </section>

          <section>
            <SectionTitle title="Education & Training" icon="graduationCap" />
            <div className="space-y-4">
              {education.map((item, index) => (
                <ExperienceItem key={index} {...item} isHighlight={item.role.includes("Software")} />
              ))}
            </div>
          </section>
        </main>
        
        <footer className="bg-slate-50 p-4 text-center text-xs text-slate-400 border-t border-slate-100">
          References available upon request.
        </footer>
      </div>
    </div>
  );
};

export default AdminCv;