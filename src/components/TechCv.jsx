import React from 'react';

// --- Integrated Data Structure ---
const cvData = {
  personal: {
    name: "Darren Ikinepule",
    title: "Junior Full Stack Developer",
    email: "darrenikinepule@outlook.co.nz",
    phone: "0204339983",
    location: "Auckland 1072",
    github: "github.com/darren-ikinepule",
    projectRepo: "https://github.com/darren-ikinepule/fuel-and-fire.git",
    liveApp: "https://fuel-and-fire-htsk.vercel.app/"
  },
  summary: [
    "Full Stack Developer and Take2 graduate with a background in high pressure operations. I bring a unique blend of technical proficiency in the MERN stack and the ability to solve complex problems under intense pressure. Focused on writing clean code and providing reliable technical solutions.",
  ],
  projects: [
    {
      name: "Fuel vs Fire",
      tech: "React, Node.js, Express, MongoDB",
      description: "A full stack deployment demonstrating seamless frontend and backend integration. Features responsive design and RESTful API architecture with a focus on stable database management.",
      github: "https://github.com/darren-ikinepule/fuel-and-fire.git",
      live: "https://fuel-and-fire-htsk.vercel.app/"
    }
  ],
  skills: {
    technical: [
      "Stack: JavaScript (ES6+), React, Node.js, Express",
      "Databases: MongoDB (NoSQL) & MySQL",
      "Core IT: SDLC, RESTful APIs, Version Control (Git)",
      "Technical Support: Hardware configuration & troubleshooting",
    ],
    core: [
      { 
        category: "Technical Foundation", 
        items: [
          "1,000+ hour intensive Take2 Software Development Programme",
          "Advanced Digital Literacy (AI Prompting, Asset Tracking)", 
          "Agile Methodologies & Peer Code Reviews"
        ] 
      },
      { 
        category: "Professional Strengths", 
        items: [
          "Systematic Troubleshooting & Logic", 
          "Operational Efficiency & Process Management", 
          "Team Leadership (15+ Staff)",
          "High level Punctuality & Reliability"
        ] 
      },
    ],
  },
  experience: [
    {
      role: "Software Development Immersion",
      company: "Take2 Programme",
      location: "Auckland",
      dates: "2024 - Present",
      description: [
        "Project based learning focusing on the full Software Development Life Cycle (SDLC).",
        "Built and maintained full stack applications with an emphasis on stable database design and error handling.",
        "Collaborated in Agile teams to deliver project milestones and optimize workflows."
      ],
      isHighlight: true
    },
    {
      role: "Property Manager / Operations",
      company: "Gardenia Trust LTD",
      location: "Auckland",
      dates: "10/2024 - Present",
      description: [
        "Provided technical and database support for a portfolio of 7 properties, troubleshooting system faults to ensure accurate records.",
        "Maintained asset tracking systems using Excel and AI tools to ensure operational efficiency.",
        "Managed complex scheduling requiring clear communication and quick decision making."
      ]
    },
    {
      role: "Executive Chef / Operations Management",
      company: "Various International & Local Establishments",
      location: "NZ & Thailand",
      dates: "1995 - 2022",
      description: [
        "Led high performing teams in high pressure environments, achieving 95%+ satisfaction rates through logical problem solving.",
        "Optimized internal processes to increase consistency and reduce waste in fast paced production settings.",
      ]
    }
  ],
};

// --- Helper Components ---

const Icon = ({ path, className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    {path === 'mail' && <path d="M1.5 8.67v8.58a1.5 1.5 0 001.5 1.5h17a1.5 1.5 0 001.5-1.5V8.67l-8.88 5.06a.75.75 0 01-.76 0L1.5 8.67z" />}
    {path === 'phone' && <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />}
    {path === 'github' && <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />}
    {path === 'external' && <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>}
    {path === 'briefcase' && <path d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c3.864.5 6.75 3.79 6.75 7.645v6.75a3 3 0 01-3 3h-15a3 3 0 01-3-3v-6.75c0-3.855 2.886-7.145 6.75-7.645V5.25z" />}
    {path === 'code' && <path d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22 6.22 6.22a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 011.06 0zm1.94 0a.75.75 0 000 1.06l6.22 6.22-6.22 6.22a.75.75 0 101.06 1.06l6.75-6.75a.75.75 0 000-1.06l-6.75-6.75a.75.75 0 00-1.06 0z" />}
  </svg>
);

const SectionTitle = ({ title, icon }) => (
  <h2 className="text-2xl font-black border-b-4 border-blue-600 pb-1 mb-6 flex items-center space-x-2 text-slate-800 pt-8 print:pt-4 print:text-xl print:border-blue-600 break-after-avoid">
    <Icon path={icon} className="w-6 h-6 text-blue-600 print:w-5 print:h-5" />
    <span className="uppercase tracking-tighter italic">{title}</span>
  </h2>
);

const TechCV = () => {
  const { personal, summary, skills, experience, projects } = cvData;

  return (
    <div className="min-h-screen bg-slate-200 p-4 sm:p-12 font-sans text-slate-900 print:bg-white print:p-0">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl overflow-hidden print:shadow-none print:max-w-none">
        
        {/* Header */}
        <header className="bg-slate-900 text-white p-10 print:p-6 border-b-8 border-blue-600">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <h1 className="text-5xl font-black tracking-tighter print:text-4xl">{personal.name}</h1>
              <p className="text-2xl font-bold text-blue-400 mt-2 uppercase print:text-xl">{personal.title}</p>
            </div>
            <div className="mt-6 md:mt-0 text-sm space-y-2 font-medium">
              <div className="flex items-center space-x-3"><Icon path="mail" className="w-5 h-5 text-blue-400" /> <span>{personal.email}</span></div>
              <div className="flex items-center space-x-3"><Icon path="phone" className="w-5 h-5 text-blue-400" /> <span>{personal.phone}</span></div>
              <div className="flex items-center space-x-3"><Icon path="github" className="w-5 h-5 text-blue-400" /> <span>{personal.github}</span></div>
            </div>
          </div>
        </header>

        <main className="p-10 print:p-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Left Column: Summary & Skills */}
          <div className="md:col-span-1 space-y-8">
            <section className="break-inside-avoid">
              <h3 className="text-lg font-black text-blue-600 uppercase mb-4 border-l-4 border-blue-600 pl-2">Objective</h3>
              <p className="text-slate-700 leading-relaxed font-medium print:text-sm">{summary[0]}</p>
            </section>

            <section className="break-inside-avoid">
              <h3 className="text-lg font-black text-blue-600 uppercase mb-4 border-l-4 border-blue-600 pl-2">Stack & Tech</h3>
              <ul className="space-y-3">
                {skills.technical.map((skill, i) => (
                  <li key={i} className="text-sm font-bold text-slate-700 bg-slate-100 p-2 rounded print:bg-transparent print:border-b print:border-slate-200">{skill}</li>
                ))}
              </ul>
            </section>

            <section className="break-inside-avoid">
              <h3 className="text-lg font-black text-blue-600 uppercase mb-4 border-l-4 border-blue-600 pl-2">Key Strengths</h3>
              {skills.core.map((cat, i) => (
                <div key={i} className="mb-4">
                  <p className="text-xs font-black text-slate-400 uppercase mb-1">{cat.category}</p>
                  <ul className="text-sm text-slate-600 list-disc ml-4 space-y-1">
                    {cat.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </section>
          </div>

          {/* Right Column: Projects & Experience */}
          <div className="md:col-span-2 space-y-2">
            
            {/* Projects */}
            <section>
              <SectionTitle title="Technical Projects" icon="code" />
              {projects.map((proj, i) => (
                <div key={i} className="bg-blue-50 border-l-8 border-blue-600 p-6 rounded-r-lg mb-6 break-inside-avoid print:bg-white print:border-2">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-black text-slate-900 uppercase">{proj.name}</h4>
                  </div>
                  <p className="text-sm font-black text-blue-600 mb-3 font-mono">{proj.tech}</p>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">{proj.description}</p>
                  <div className="flex space-x-4">
                    <a href={proj.live} target="_blank" className="text-xs font-bold bg-slate-900 text-white px-3 py-1 rounded hover:bg-blue-600 transition flex items-center gap-1">
                      Live App <Icon path="external" className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </section>

            {/* Experience */}
            <section>
              <SectionTitle title="Experience & Education" icon="briefcase" />
              <div className="space-y-8">
                {experience.map((job, i) => (
                  <div key={i} className="break-inside-avoid group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className={`text-lg font-black uppercase ${job.isHighlight ? 'text-blue-600' : 'text-slate-900'}`}>{job.role}</h4>
                      <span className="text-sm font-black text-slate-400">{job.dates}</span>
                    </div>
                    <p className="text-md font-bold text-slate-500 mb-3 italic">{job.company}</p>
                    <ul className="text-sm text-slate-600 space-y-2 border-l-2 border-slate-200 pl-4">
                      {job.description.map((point, j) => <li key={j}>{point}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>

        <footer className="bg-slate-100 p-6 text-center text-xs font-bold text-slate-400 border-t border-slate-200 print:bg-white">
          Code Portfolio: {personal.github}
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { margin: 10mm; }
          body { -webkit-print-color-adjust: exact; background: white !important; }
        }
      `}} />
    </div>
  );
};

export default TechCV;