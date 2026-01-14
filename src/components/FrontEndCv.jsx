import React from 'react';

// --- Data Structure Tailored for Afirmo Front End Role ---
const cvData = {
  personal: {
    name: "Darren Ikinepule",
    title: "Front End Developer",
    email: "darrenikinepule@outlook.co.nz",
    phone: "0204339983",
    location: "Auckland 1072",
    github: "github.com/darren-ikinepule",
    liveApp: "https://fuel-and-fire-htsk.vercel.app/"
  },
  summary: [
    "Front End Developer with a strong technical foundation in React.js, Tailwind CSS, and Vite. Transitioning from a career as an Executive Chef, I bring a unique ability to troubleshoot complex UI problems and deliver high quality, user centric solutions under intense pressure.",
    "Recently completed an intensive 1,000+ hour programme focused on building responsive, accessible web applications using modern CSS patterns and Agile collaboration."
  ],
  projects: [
    {
      name: "Fuel vs Fire",
      tech: "React, Node.js, Tailwind CSS, Vercel",
      description: "A full stack application focused on mobile first responsive design. Optimized layouts using Flexbox to ensure cross browser stability and performance across Chrome and Safari.",
      github: "https://github.com/darren-ikinepule/fuel-and-fire.git",
      live: "https://fuel-and-fire-htsk.vercel.app/"
    }
  ],
  skills: {
    technical: [
      "Frontend: React.js, Tailwind CSS, JavaScript (ES6+), HTML5/CSS3",
      "Tools: Vite, Git, Vercel, Render, VS Code",
      "Backend: Node.js, Express, REST APIs, MongoDB",
      "Methodologies: Agile, Mobile-First Design, WCAG Accessibility"
    ],
    core: [
      { 
        category: "UI/UX & Technical", 
        items: ["UI Troubleshooting & Debugging", "Agile Workflow", "Cross browser Compatibility", "Pixel Perfect Translation"] 
      },
      { 
        category: "Professional Strengths", 
        items: ["High Pressure Delivery", "Team Leadership (15+ Staff)", "Operational Efficiency"] 
      },
    ],
    personal: [
      "NZ Citizen (Full Right to Work)",
      "Reliable, punctual, and self disciplined",
      "Full Class 1 NZ Driver's Licence"
    ],
  },
  experience: [
    {
      role: "Software Development Immersion",
      company: "Take2 Programme",
      location: "Auckland",
      dates: "2024 - Present",
      description: [
        "Specialized in building responsive interfaces using React and Tailwind CSS.",
        "Translated design mockups from Front End Mentor into accessible, pixel perfect code.",
        "Collaborated in Agile teams to deliver project milestones and conduct peer code reviews to ensure UI quality.",
      ],
      isHighlight: true,
    },
    {
      role: "Property Manager / Operations",
      company: "Gardenia Trust LTD",
      location: "Auckland",
      dates: "10/2024 - Present",
      description: [
        "Managed portfolio using data tracking for accurate asset management and inventory optimization.",
        "Optimized scheduling for tradespeople, improving maintenance efficiency by streamlining workflows.",
      ]
    },
    {
      role: "Executive Chef / Operations Management",
      company: "Various International & Local Establishments",
      location: "NZ & Thailand",
      dates: "1995 - 2022",
      description: [
        "Led high performing teams of 15+ in high pressure environments, achieving 95%+ satisfaction rates.",
        "Managed complex operational tasks and improved internal processes to increase efficiency.",
      ]
    },
  ],
};

// --- Updated Components with Print Logic ---

const Icon = ({ path, className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    {path === 'mail' && <path d="M1.5 8.67v8.58a1.5 1.5 0 001.5 1.5h17a1.5 1.5 0 001.5-1.5V8.67l-8.88 5.06a.75.75 0 01-.76 0L1.5 8.67z" />}
    {path === 'phone' && <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />}
    {path === 'code' && <path d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22 6.22 6.22a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 011.06 0zm1.94 0a.75.75 0 000 1.06l6.22 6.22-6.22 6.22a.75.75 0 101.06 1.06l6.75-6.75a.75.75 0 000-1.06l-6.75-6.75a.75.75 0 00-1.06 0z" />}
    {path === 'briefcase' && <path d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c3.864.5 6.75 3.79 6.75 7.645v6.75a3 3 0 01-3 3h-15a3 3 0 01-3-3v-6.75c0-3.855 2.886-7.145 6.75-7.645V5.25z" />}
    {path === 'external' && <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>}
    {path === 'star' && <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />}
  </svg>
);

const SectionTitle = ({ title, icon }) => (
  <h2 className="text-2xl font-black border-b-4 border-blue-600 pb-1 mb-6 flex items-center space-x-2 text-slate-800 pt-8 print:pt-4 print:text-xl print:border-blue-600 break-after-avoid">
    <Icon path={icon} className="w-6 h-6 text-blue-600 print:w-5 print:h-5" />
    <span className="uppercase tracking-tighter italic">{title}</span>
  </h2>
);

const FrontEndCv = () => {
  const { personal, summary, skills, experience, projects } = cvData;

  return (
    <div className="min-h-screen bg-slate-200 p-4 sm:p-12 font-sans text-slate-900 print:bg-white print:p-0">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl overflow-hidden print:shadow-none print:max-w-none">
        
        {/* Header - Print Adaptive */}
        <header className="bg-slate-900 text-white p-10 print:bg-white print:text-slate-900 print:p-6 border-b-8 border-blue-600">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <h1 className="text-5xl font-black tracking-tighter print:text-4xl">{personal.name}</h1>
              <p className="text-2xl font-bold text-blue-400 mt-2 uppercase print:text-blue-700 print:text-xl">{personal.title}</p>
            </div>
            <div className="mt-6 md:mt-0 text-sm space-y-2 font-medium print:text-xs">
              <div className="flex items-center space-x-3"><Icon path="mail" className="w-5 h-5 text-blue-400 print:text-blue-600" /> <span>{personal.email}</span></div>
              <div className="flex items-center space-x-3"><Icon path="phone" className="w-5 h-5 text-blue-400 print:text-blue-600" /> <span>{personal.phone}</span></div>
              <div className="flex items-center space-x-3"><Icon path="code" className="w-5 h-5 text-blue-400 print:text-blue-600" /> <span>{personal.github}</span></div>
            </div>
          </div>
        </header>

        <main className="p-10 print:p-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Left Column: Tech Stack & Strengths */}
          <div className="md:col-span-1 space-y-8">
            <section className="break-inside-avoid">
              <h3 className="text-lg font-black text-blue-600 uppercase mb-4 border-l-4 border-blue-600 pl-2">Objective</h3>
              <p className="text-slate-700 leading-relaxed font-medium print:text-sm">{summary[0]}</p>
            </section>

            <section className="break-inside-avoid">
              <h3 className="text-lg font-black text-blue-600 uppercase mb-4 border-l-4 border-blue-600 pl-2">Front End Stack</h3>
              <ul className="space-y-3">
                {skills.technical.map((skill, i) => (
                  <li key={i} className="text-sm font-bold text-slate-700 bg-slate-50 p-2 rounded border-l border-blue-200 print:bg-transparent print:border-b print:border-slate-200">{skill}</li>
                ))}
              </ul>
            </section>

            <section className="break-inside-avoid">
              <h3 className="text-lg font-black text-blue-600 uppercase mb-4 border-l-4 border-blue-600 pl-2">Strengths</h3>
              {skills.core.map((cat, i) => (
                <div key={i} className="mb-4">
                  <p className="text-xs font-black text-slate-400 uppercase mb-1">{cat.category}</p>
                  <ul className="text-sm text-slate-600 list-disc ml-4 space-y-1 print:text-xs">
                    {cat.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </section>

            <section className="break-inside-avoid pt-4">
              <p className="text-[10px] text-slate-400 uppercase font-black">Right to Work</p>
              <p className="text-sm font-bold text-slate-700">NZ Citizen (Full Entitlement)</p>
            </section>
          </div>

          {/* Right Column: Experience & Projects */}
          <div className="md:col-span-2 space-y-2">
            
            {/* Project Card with Live Demo */}
            <section>
              <SectionTitle title="Technical Projects" icon="code" />
              {projects.map((proj, i) => (
                <div key={i} className="bg-slate-50 border-l-8 border-blue-600 p-6 rounded-r-lg mb-6 break-inside-avoid print:bg-white print:border-2 print:border-blue-600">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-black text-slate-900 uppercase">{proj.name}</h4>
                  </div>
                  <p className="text-sm font-black text-blue-600 mb-3 font-mono">{proj.tech}</p>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">{proj.description}</p>
                  <div className="flex space-x-4">
                    <a href={proj.live} target="_blank" rel="noreferrer" className="text-xs font-bold bg-slate-900 text-white px-3 py-2 rounded hover:bg-blue-600 transition flex items-center gap-1 print:bg-slate-200 print:text-black">
                      Live App Demo <Icon path="external" className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </section>

            {/* Experience Items */}
            <section>
              <SectionTitle title="Development & Work History" icon="briefcase" />
              <div className="space-y-8">
                {experience.map((job, i) => (
                  <div key={i} className="break-inside-avoid">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className={`text-lg font-black uppercase ${job.isHighlight ? 'text-blue-600' : 'text-slate-900'}`}>{job.role}</h4>
                      <span className="text-sm font-black text-slate-400">{job.dates}</span>
                    </div>
                    <p className="text-md font-bold text-slate-500 mb-3 italic">{job.company}</p>
                    <ul className="text-sm text-slate-600 space-y-2 border-l-2 border-slate-200 pl-4 print:text-xs">
                      {job.description.map((point, j) => <li key={j}>{point}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>

        <footer className="bg-slate-100 p-6 text-center text-xs font-bold text-slate-400 border-t border-slate-200 print:bg-white print:pt-10">
          Full Portfolio available at: {personal.github}
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

export default FrontEndCv;