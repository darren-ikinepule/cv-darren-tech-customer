import React from 'react';

// --- Data Structure ---
const cvData = {
  personal: {
    name: "Darren Ikinepule",
    title: "Junior Developer | Technical Support",
    email: "darrenikinepule@outlook.co.nz",
    phone: "0204339983",
    location: "Auckland 1072",
    github: "github.com/darren-ikinepule",
    projectRepo: "https://github.com/darren-ikinepule/fuel-and-fire.git",
    liveApp: "https://fuel-and-fire-htsk.vercel.app/"
  },
  summary: [
    "Junior Developer and Take2 graduate with a practical background in high pressure operations. I have a solid understanding of the SDLC and database management, and I am focused on providing reliable technical support and hardware troubleshooting to help a business run smoothly."
  ],
  skills: {
    technical: [
      "SDLC: Understanding of full cycle development, testing, and deployment",
      "Databases: Design and management using MongoDB and MySQL",
      "Languages/Stack: JavaScript (ES6+), React, Node.js, Express",
      "Support: Hardware configuration and system fault troubleshooting",
    ],
    core: [
      { 
        category: "Technical Foundation", 
        items: [
          "1,000+ hour intensive Take2 Software Development Programme",
          "Advanced Digital Literacy (AI Prompting, Excel, Asset Tracking)", 
          "Version Control (Git/GitHub) & RESTful API Architecture"
        ] 
      },
      { 
        category: "Professional Skills", 
        items: [
          "Clear communication for technical and non-technical staff", 
          "Systematic problem solving & common sense approach", 
          "Operational efficiency & process management", 
          "High-level punctuality and team reliability"
        ] 
      },
    ],
    personal: [
      "Conscientious professional with a sense of humour", 
      "Quick to learn new proprietary software and systems", 
      "Reliable and punctual for all business hours", 
      "Positive team player focused on stable business outcomes"
    ],
  },
  education: [
    {
      role: "Software Development Immersion",
      company: "Take2 Programme",
      location: "Auckland",
      dates: "2024 - Present",
      description: [
        "Project based learning focusing on the full Software Development Life Cycle (SDLC).",
        "Built and maintained full stack applications with an emphasis on stable database design and error handling.",
      ],
    },
  ],
  experience: [
    {
      role: "Property Manager / Operations",
      company: "Gardenia Trust LTD",
      location: "Auckland",
      dates: "10/2024 - Present",
      description: [
        "Provided technical and database support for a portfolio of 7 properties, troubleshooting system faults to ensure accurate data records.",
        "Interacted with tradespeople and owners to resolve maintenance issues, requiring clear communication and quick decision making.",
        "Maintained asset tracking systems using Excel and AI tools to ensure operational efficiency."
      ]
    },
    {
      role: "Executive Chef / Operations Management",
      company: "Various International & Local Establishments",
      location: "NZ & Thailand",
      dates: "1995 - 2022",
      description: [
        "Led high performing teams of 15+ in high pressure environments, achieving 95%+ satisfaction rates through logical problem solving.",
        "Managed complex operational tasks and improved internal processes to increase consistency and reduce waste.",
        "Translated technical requirements (health, safety, and supply chain) into clear actionable instructions for diverse teams."
      ]
    }
  ],
};

// --- Utility Components ---
const Icon = ({ path, className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    {path === 'mail' && <path d="M1.5 8.67v8.58a1.5 1.5 0 001.5 1.5h17a1.5 1.5 0 001.5-1.5V8.67l-8.88 5.06a.75.75 0 01-.76 0L1.5 8.67z" />}
    {path === 'phone' && <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />}
    {path === 'location' && <path d="M11.54 22.351l.07.04.28.16a1 1 0 001.22 0l.28-.16.07-.04a41.8 41.8 0 003.525-6.736c.2-.4.2-.9 0-1.3a41.8 41.8 0 00-3.525-6.736l-.07-.04a.75.75 0 00-.76 0l-.07.04a41.8 41.8 0 00-3.525 6.736c-.2.4-.2.9 0 1.3a41.8 41.8 0 003.525 6.736zm-1.04-6.601a3 3 0 114.5-4.5 3 3 0 01-4.5 4.5z" />}
    {path === 'github' && <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />}
    {path === 'external' && <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>}
    {path === 'star' && <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />}
  </svg>
);

const Header = ({ personal }) => (
  <header className="bg-slate-800 text-white px-8 py-8 rounded-t-lg shadow-xl border-b-4 border-emerald-500 print:shadow-none print:px-0 print:py-6 print:bg-white print:text-slate-900 print:border-emerald-600">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center print:flex-row print:items-center">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight print:text-3xl">{personal.name}</h1>
        <p className="text-xl font-medium text-emerald-400 mt-1 uppercase tracking-wider print:text-emerald-700 print:text-lg">{personal.title}</p>
      </div>
      <div className="mt-4 md:mt-0 text-sm md:text-right space-y-1 print:mt-0 print:text-xs font-medium">
        <div className="flex items-center space-x-2 justify-start md:justify-end">
          <Icon path="mail" className="w-4 h-4 text-emerald-400 print:text-emerald-600" />
          <span>{personal.email}</span>
        </div>
        <div className="flex items-center space-x-2 justify-start md:justify-end">
          <Icon path="phone" className="w-4 h-4 text-emerald-400 print:text-emerald-600" />
          <span>{personal.phone}</span>
        </div>
        <div className="flex items-center space-x-2 justify-start md:justify-end">
          <Icon path="github" className="w-4 h-4 text-emerald-400 print:text-emerald-600" />
          <span>{personal.github}</span>
        </div>
      </div>
    </div>
  </header>
);

const SectionTitle = ({ title, icon }) => (
  <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4 flex items-center space-x-2 text-slate-800 pt-8 print:pt-4 print:text-xl print:border-slate-300 break-after-avoid">
    <Icon path={icon} className="w-6 h-6 text-emerald-600 print:w-5 print:h-5" />
    <span>{title}</span>
  </h2>
);

const ExperienceItem = ({ role, company, location, dates, description, isHighlight }) => (
  <div className={`experience-item mb-5 p-5 rounded border break-inside-avoid print:mb-4 print:p-0 print:border-none ${isHighlight ? 'bg-emerald-50 border-emerald-200 print:bg-transparent' : 'bg-white border-slate-100 shadow-sm'}`}>
    <div className="flex justify-between items-start print:mb-0.5">
      <h3 className="text-xl font-bold text-slate-900 print:text-lg">{role}</h3>
      <span className="text-sm font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded flex-shrink-0 print:bg-transparent print:px-0 print:py-0 print:text-slate-600">{dates}</span>
    </div>
    <div className="flex justify-between items-center text-md text-slate-500 mb-3 print:mb-1 print:text-sm print:text-emerald-800">
      <p className="font-bold">{company}</p>
      <p className="italic">{location}</p>
    </div>
    <ul className="list-disc ml-6 text-slate-700 text-md space-y-1.5 print:text-sm print:ml-4 print:space-y-1">
      {description.map((point, index) => <li key={index}>{point}</li>)}
    </ul>
  </div>
);

const JuniorTechCV = () => {
  const { personal, summary, skills, education, experience } = cvData;

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-12 font-sans text-slate-900 print:bg-white print:p-0">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-200 print:shadow-none print:border-none print:max-w-none print:w-full">
        <Header personal={personal} />

        <main className="p-8 md:p-12 print:p-0 print:pt-4">
          <section className="break-inside-avoid">
            <SectionTitle title="Professional Summary" icon="star" />
            <div className="text-slate-700 leading-relaxed text-lg print:text-sm print:leading-normal">
              {summary.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </section>

          <section className="break-inside-avoid">
            <SectionTitle title="Technical Capabilities" icon="github" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 print:gap-8 print:grid-cols-2">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-tight print:text-sm">Key IT Skills</h3>
                <ul className="list-disc ml-6 text-md text-slate-700 space-y-2 print:text-sm print:ml-4 print:space-y-1">
                    {skills.technical.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
                <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-md print:bg-white print:border-slate-200 print:p-2 print:mt-4">
                  <p className="text-sm font-bold text-emerald-900 mb-1">Portfolio Project:</p>
                  <p className="text-sm text-emerald-700 font-medium">Fuel vs Fire Live App</p>
                  <p className="text-xs text-slate-500 mt-1 break-all">{personal.liveApp}</p>
                </div>
              </div>

              <div className="space-y-8 print:space-y-4">
                {skills.core.map((section, index) => (
                  <div key={index} className="break-inside-avoid">
                    <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-tight print:text-sm">{section.category}</h3>
                    <ul className="list-disc ml-6 text-md text-slate-700 space-y-2 print:text-sm print:ml-4 print:space-y-1">
                      {section.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <SectionTitle title="Technical Education" icon="star" />
            <div className="space-y-2">
              {education.map((item, index) => (
                <ExperienceItem key={index} {...item} isHighlight={true} />
              ))}
            </div>
          </section>

          <section>
            <SectionTitle title="Professional Experience" icon="star" />
            <div className="space-y-2">
              {experience.map((job, index) => (
                <ExperienceItem key={index} {...job} />
              ))}
            </div>
          </section>
        </main>
        
        <footer className="bg-slate-50 p-6 text-center text-sm text-slate-400 border-t border-slate-100 print:bg-white print:text-slate-500 print:pt-8">
          {/* References and Full Portfolio available upon request. */}
        </footer>
      </div>
      
      {/* Print-specific style adjustment to remove URL/Date headers from browser print */}
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

export default JuniorTechCV;