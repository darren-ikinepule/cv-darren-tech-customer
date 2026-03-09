import React from 'react';

// --- Data Structure ---
const cvData = {
  personal: {
    name: "Darren Ikinepule",
    title: "Warehouse Storeperson & Certified Forklift Operator",
    email: "darrenikinepule@outlook.co.nz",
    phone: "0204339983",
    location: "Auckland 1072",
    linkedin: "https://www.linkedin.com/in/darren-ikinepule-792914335/",
  },
  summary: [
    "Reliable Warehouse Storeperson and newly Certified Forklift Operator (Jan 2026) with a zero incident safety record. Proven ability to lead teams of 17+ in high pressure environments while maintaining 100% punctuality for 7am starts. Physically fit and highly organised, offering expert level asset tracking skills using Excel and Gemini to ensure operational accuracy."
  ],
  skills: {
    technical: [
      "Certified Forklift Operator (Jan 2026): Counter Balance (LPG), Reach Electric, Stock Picker, Pallet Truck",
      "Inventory & Logistics: High accuracy asset tracking using Excel and Gemini for multi location portfolios",
      "Operational Safety: Zero incident record across 20+ years in high volume, fast paced environments",
    ],
    core: [
      { 
        category: "Certifications & Qualifications", 
        items: [
          "Full Class 1 NZ Driver's Licence (Own Reliable Transport)", 
          "Certified Forklift Operator - Jan 2026 (Counter Balance, Reach, Stock Picker, Pallet Truck)", 
          "Software Development and Professional Skills (Take2 Programme, 2024)"
        ] 
      },
      { 
        category: "Professional Skills", 
        items: [
          "100% Punctuality & Reliability (7am Start Ready)", 
          "High Physical Stamina & Safety Consciousness", 
          "Team Leadership (15+ Staff) & Collaboration", 
          "Inventory Management & Digital Asset Tracking"
        ] 
      },
    ],
    personal: [
      "Full Class 1 NZ Driver's Licence with private vehicle", 
      "Strong team ethic and proactive, fast learner attitude", 
      "Reliable, punctual, and physically fit for warehouse demands", 
      "Excellent health and safety awareness (Zero Incidents)"
    ],
  },
  education: [
    {
      role: "Forklift Certification",
      company: "Certified Training",
      location: "Auckland",
      dates: "Jan 2026",
      description: [
        "Comprehensive training on Counter Balance (LPG), Reach Electric, Stock Picker Electric, and Pallet Truck Electric.",
        "Maintained 100% safety standards during practical assessment.",
      ],
    },
    {
      role: "Software Development and Professional Skills",
      company: "Take2 Programme",
      location: "Auckland",
      dates: "2024 - Present",
      description: [
        "Full time project based learning focused on technical logic, professional communication, and digital tools.",
        "Utilised Gemini and other AI tools for process optimisation and problem solving.",
      ],
    },
  ],
  experience: [
    {
      role: "Relief Chef / Operations (Contract)",
      company: "TRN (The Recruitment Network)",
      location: "Auckland",
      dates: "2026 – Present",
      description: [
        "Managing kitchen operations and service delivery across various high pressure Auckland venues on short notice.",
        "Ensuring site safety and compliance with strict health and security protocols in diverse environments.",
        "Adapting quickly to new teams and site layouts while maintaining professional conduct and reliable service.",
        "Responsible for equipment oversight and maintaining secure, orderly work zones."
      ]
    },
    {
      role: "Property Manager",
      company: "Gardenia Trust LTD",
      location: "Auckland",
      dates: "10/2024 - Present",
      description: [
        "Utilised Excel and Gemini to maintain detailed inventory and asset tracking for a multi location portfolio across NZ and the Pacific.",
        "Managed a diverse range of 7 commercial and residential properties, ensuring 100% compliance.",
        "Organised comprehensive logistics for tradespeople, ensuring efficient repairs and maintenance schedules.",
      ]
    },
    {
      role: "Head Chef",
      company: "Kohuora Cafe",
      location: "Auckland",
      dates: "05/2018 - 10/2022",
      description: [
        "Led high volume, quality driven production standards in a fast paced environment, maintaining peak efficiency during high pressure periods.",
        "Developed workflows that contributed to an 80% increase in volume while strictly adhering to safety protocols.",
      ]
    },
    {
      role: "Gourmet Production Chef",
      company: "Eat My Lunch",
      location: "Auckland",
      dates: "05/2016 - 05/2018",
      description: [
        "Maintained 99%+ quality standards and a zero incident safety record  within high volume production environments (GMP/HACCP compliant).",
        "Efficiently resolved customer feedback and special logistical requests.",
      ]
    },
    {
      role: "Executive Chef",
      company: "Chaweng Blue Lagoon Resort",
      location: "Thailand",
      dates: "01/2005 - 01/2015",
      description: [
        "Led and mentored a diverse team of 17+ staff  through training and performance management programs.",
        "Achieved 95%+ guest satisfaction through systematic quality improvement and process management.",
      ]
    },
    {
      role: "Executive Sous Chef",
      company: "Impiana Resort And Spa",
      location: "Koh Samui, Thailand",
      dates: "06/2002 - 06/2004",
      description: [
        "Managed high volume operational tasks requiring advanced multi tasking and physical stamina.",
        "Optimised internal processes to increase kitchen efficiency and reduce food waste.",
      ]
    }
  ],
};

// --- Utility Components ---

const Icon = ({ path, className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    {path === 'mail' && (
      <>
        <path d="M1.5 8.67v8.58a1.5 1.5 0 001.5 1.5h17a1.5 1.5 0 001.5-1.5V8.67l-8.88 5.06a.75.75 0 01-.76 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </>
    )}
    {path === 'phone' && (
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    )}
    {path === 'location' && (
      <path fillRule="evenodd" d="M11.54 22.351l.07.04.28.16a1 1 0 001.22 0l.28-.16.07-.04a41.8 41.8 0 003.525-6.736c.2-.4.2-.9 0-1.3a41.8 41.8 0 00-3.525-6.736l-.07-.04a.75.75 0 00-.76 0l-.07.04a41.8 41.8 0 00-3.525 6.736c-.2.4-.2.9 0 1.3a41.8 41.8 0 003.525 6.736zm-1.04-6.601a3 3 0 114.5-4.5 3 3 0 01-4.5 4.5z" clipRule="evenodd" />
    )}
    {path === 'briefcase' && (
      <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c3.864.5 6.75 3.79 6.75 7.645v6.75a3 3 0 01-3 3h-15a3 3 0 01-3-3v-6.75c0-3.855 2.886-7.145 6.75-7.645V5.25zM15 6a1.5 1.5 0 00-1.5-1.5h-3A1.5 1.5 0 009 6v.205c3.864.5 6.75 3.79 6.75 7.645v6.75a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-6.75c0-3.855 2.886-7.145 6.75-7.645V6z" clipRule="evenodd" />
    )}
    {path === 'graduationCap' && (
      <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v1.5L15 4.5V4.75A.75.75 0 0115.75 5h1.5A.75.75 0 0118 5.75V7.5h.75A.75.75 0 0119.5 8.25v2.25a.75.75 0 01-.75.75H18v1.5a.75.75 0 01-1.5 0v-1.5H15V15a.75.75 0 01-.75.75h-3A.75.75 0 0110.5 15v-1.5H9v-1.5H7.5V9.75h-.75A.75.75 0 016 9V7.5a.75.75 0 01.75-.75H9V5.75A.75.75 0 019.75 5h1.5A.75.75 0 0112 5.75V9h1.5V6a.75.75 0 011.5 0v3h-1.5v1.5h1.5v-1.5H18v1.5h-.75A.75.75 0 0116.5 12v-1.5a.75.75 0 01.75-.75h1.5V9H18V7.5a.75.75 0 01-.75-.75H15V5.25A.75.75 0 0114.25 4.5H12V3A.75.75 0 0112 2.25z" clipRule="evenodd" />
    )}
    {path === 'star' && (
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    )}
    {path === 'github' && (
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    )}
    {path === 'linkedin' && (
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    )}
  </svg>
);

const Header = ({ personal }) => (
  <header className="bg-slate-800 text-white px-8 py-6 rounded-t-lg shadow-xl border-b-4 border-blue-500 print:shadow-none print:px-0 print:py-6 print:bg-white print:text-slate-900 print:border-blue-600">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center print:flex-row print:items-center">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight print:text-3xl">{personal.name}</h1>
        <p className="text-xl font-medium text-blue-400 mt-1 uppercase tracking-wider print:text-blue-700 print:text-lg">{personal.title}</p>
      </div>
      <div className="mt-4 md:mt-0 text-sm md:text-right space-y-1 print:mt-0 print:text-xs font-medium">
        <ContactItem icon="mail" text={personal.email} link={`mailto:${personal.email}`} />
        <ContactItem icon="phone" text={personal.phone} link={`tel:${personal.phone}`} />
        <ContactItem icon="location" text={personal.location} />
        <ContactItem icon="linkedin" text="LinkedIn" link={personal.linkedin} />
      </div>
    </div>
  </header>
);

const ContactItem = ({ icon, text, link }) => (
  <div className="flex items-center space-x-2 justify-start md:justify-end">
    <Icon path={icon} className="w-4 h-4 text-blue-400 print:text-blue-600 flex-shrink-0" />
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
  <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4 flex items-center space-x-2 text-slate-800 pt-8 print:pt-4 print:text-xl print:border-slate-300 break-after-avoid">
    <Icon path={icon} className="w-6 h-6 text-blue-600 print:w-5 print:h-5" />
    <span>{title}</span>
  </h2>
);

const TechnicalSkills = ({ skills }) => (
  <ul className="mt-2 list-disc ml-5 text-sm text-slate-700 space-y-1 print:text-xs print:ml-4 print:space-y-0.5">
    {skills.map((skill) => (
      <li key={skill} dangerouslySetInnerHTML={{ __html: skill }} />
    ))}
  </ul>
);

const ExperienceItem = ({ role, company, location, dates, description, isHighlight }) => (
  <div className={`experience-item mb-5 p-5 rounded border break-inside-avoid print:mb-4 print:p-0 print:border-none ${isHighlight ? 'bg-blue-50 border-blue-200 print:bg-transparent' : 'bg-white border-slate-100 shadow-sm'}`}>
    <div className="flex justify-between items-start print:mb-0.5">
      <h3 className="text-xl font-bold text-slate-900 print:text-lg">{role}</h3>
      <span className="text-sm font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded flex-shrink-0 print:bg-transparent print:px-0 print:py-0 print:text-slate-600">{dates}</span>
    </div>
    <div className="flex justify-between items-center text-md text-slate-500 mb-3 print:mb-1 print:text-sm print:text-blue-800">
      <p className="font-bold">{company}</p>
      <p className="italic">{location}</p>
    </div>
    <ul className="list-disc ml-6 text-slate-700 text-md space-y-1.5 print:text-sm print:ml-4 print:space-y-1">
      {description.map((point, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
      ))}
    </ul>
  </div>
);

// --- Main App Component ---

const WarehouseCv = () => {
  const { personal, summary, skills, education, experience } = cvData;

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-12 font-sans text-slate-900 print:bg-white print:p-0">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-200 print:shadow-none print:border-none print:max-w-none print:w-full">
        <Header personal={personal} />

        <main className="p-8 md:p-12 print:p-0 print:pt-4">
          {/* Professional Summary */}
          <section className="break-inside-avoid">
            <SectionTitle title="Professional Summary" icon="star" />
            <div className="text-slate-700 leading-relaxed text-lg print:text-sm print:leading-normal">
              {summary.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </section>

          {/* Skills Section */}
          <section className="break-inside-avoid">
            <SectionTitle title="Skills" icon="briefcase" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 print:gap-8 print:grid-cols-2">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-tight print:text-sm">Key Skills</h3>
                <TechnicalSkills skills={skills.technical} />

                <div className="mt-6 print:mt-4">
                  <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-tight print:text-sm">General & Personal</h3>
                  <ul className="list-disc ml-6 text-sm text-slate-700 space-y-2 print:text-xs print:ml-4 print:space-y-0.5">
                    {skills.personal.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              </div>

              <div className="space-y-8 print:space-y-4">
                {skills.core.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-tight print:text-sm">{section.category}</h3>
                    <ul className="list-disc ml-6 text-sm text-slate-700 space-y-2 print:text-xs print:ml-4 print:space-y-0.5">
                      {section.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Education Section */}
          <section className="pt-2">
            <SectionTitle title="Certifications & Education" icon="graduationCap" />
            <div className="space-y-4">
              {education.map((item, index) => (
                <ExperienceItem key={index} {...item} isHighlight={item.role.includes("Forklift")} />
              ))}
            </div>
          </section>

          {/* Work History */}
          <section className="pt-2">
            <SectionTitle title="Work History" icon="briefcase" />
            <div className="space-y-4">
              {experience.map((job, index) => (
                <ExperienceItem key={index} {...job} />
              ))}
            </div>
          </section>
        </main>
        
        <footer className="bg-slate-50 p-6 text-center text-sm text-slate-400 border-t border-slate-100 print:bg-white print:text-slate-500">
          References available upon request.
        </footer>
      </div>
    </div>
  );
};

export default WarehouseCv;