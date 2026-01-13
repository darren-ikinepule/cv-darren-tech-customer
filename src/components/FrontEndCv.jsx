import React from 'react';

// --- Data Structure Tailored for Afirmo Front End Role ---

const cvData = {
  personal: {
    name: "Darren Ikinepule",
    title: "Front End Developer", // Tailored title
    email: "darrenikinepule@outlook.co.nz",
    phone: "0204339983",
    location: "Auckland 1072",
  },
  summary: [
    "Front End Developer with a strong technical foundation in React.js, Tailwind CSS, and Vite. Transitioning from a career as an Executive Chef, I bring a unique ability to troubleshoot complex UI problems and deliver high-quality, user-centric solutions under intense pressure.",
    "Recently completed an intensive 1,000+ hour programme focused on building responsive, accessible web applications using modern CSS patterns and Agile collaboration."
  ],
  projects: [
    {
      name: "Fuel vs Fire",
      tech: "React, Node.js, Tailwind CSS, Vercel", // Added Vite/Tailwind
      description: "A full stack application focused on mobile-first responsive design. Optimized layouts using Flexbox to ensure cross-browser stability and performance across Chrome and Safari.",
      link: "github.com/darren-ikinepule/fuel-and-fire" // Updated URL
    }
  ],
  skills: {
    technical: [
      "Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS",
      "Backend & Tools: Node.js, Express, Vite, Git, Vercel, Render",
      "Databases: MongoDB, MySQL",
      "Methodologies: Agile, Responsive Design, WCAG Accessibility"
    ],
    core: [
      { 
        category: "Professional Strengths", 
        items: ["UI Troubleshooting & Debugging", "Agile Workflow", "Cross-browser Compatibility", "High Pressure Delivery"] // Tailored
      },
      { 
        category: "Leadership & Management", 
        items: ["Team Leadership (15+ staff)", "Operational Optimization", "Performance Management"]
      },
    ],
    personal: [
      "Reliable, punctual, and self-disciplined",
      "Full Class 1 NZ Driver's Licence",
      "NZ Citizen (Full Right to Work)" // Answer to employer question
    ],
  },
  experience: [
    {
      role: "Software Development Immersion",
      company: "Take2 Programme",
      location: "Auckland",
      dates: "2024 - Present",
      description: [
        "Engaged in a 1,000+ hour intensive coding bootcamp specializing in building responsive interfaces with React and Tailwind CSS.",
        "Translated design mockups from Front End Mentor into accessible, pixel-perfect code using modern CSS patterns.",
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
        "Led high-performing teams of 15+ in high-pressure environments, achieving 95%+ satisfaction rates.",
        "Managed complex operational tasks and improved internal processes to increase efficiency.",
      ]
    },
  ],
};

// --- Reusable Icon Components ---

const Icon = ({ path, className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    {path === 'mail' && <path d="M1.5 8.67v8.58a1.5 1.5 0 001.5 1.5h17a1.5 1.5 0 001.5-1.5V8.67l-8.88 5.06a.75.75 0 01-.76 0L1.5 8.67z" />}
    {path === 'phone' && <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />}
    {path === 'code' && <path d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22 6.22 6.22a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 011.06 0zm1.94 0a.75.75 0 000 1.06l6.22 6.22-6.22 6.22a.75.75 0 101.06 1.06l6.75-6.75a.75.75 0 000-1.06l-6.75-6.75a.75.75 0 00-1.06 0z" />}
    {path === 'briefcase' && <path d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c3.864.5 6.75 3.79 6.75 7.645v6.75a3 3 0 01-3 3h-15a3 3 0 01-3-3v-6.75c0-3.855 2.886-7.145 6.75-7.645V5.25z" />}
    {path === 'star' && <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />}
  </svg>
);

const SectionTitle = ({ title, icon }) => (
  <h2 className="text-xl font-bold border-b-2 border-blue-600 pb-1 mb-4 flex items-center space-x-2 text-black pt-6">
    <Icon path={icon} className="w-5 h-5 text-blue-600" />
    <span className="uppercase tracking-wide">{title}</span>
  </h2>
);

// --- Main Tech CV Component ---

const FrontEndCv = () => {
  const { personal, summary, skills, experience, projects } = cvData;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans print:p-0 print:bg-white">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-200 print:shadow-none print:border-none">
        
        {/* Header - Styled for Tech */}
        <header className="bg-blue-100 text-black p-8 border-b-4 border-blue-600">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <h1 className="text-4xl font-black text-blue-700 leading-none">{personal.name}</h1>
              <p className="text-xl font-medium text-blue-600 mt-2 uppercase tracking-tighter">{personal.title}</p>
            </div>
            <div className="mt-4 md:mt-0 text-sm space-y-1 text-black font-medium">
              <div className="flex items-center space-x-2"><Icon path="mail" className="w-4 h-4" /> <span>{personal.email}</span></div>
              <div className="flex items-center space-x-2"><Icon path="phone" className="w-4 h-4" /> <span>{personal.phone}</span></div>
              <div className="flex items-center space-x-2"><span>📍 {personal.location}</span></div>
            </div>
          </div>
        </header>

        <main className="p-8">
          {/* Summary Section */}
          <section className="mb-8">
            <SectionTitle title="Professional Summary" icon="star" />
            <div className="bg-blue-50 p-4 rounded-r-lg border-l-4 border-blue-500 italic text-black text-sm leading-relaxed">
              {summary.map((para, i) => <p key={i} className="mb-2 last:mb-0">{para}</p>)}
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sidebar: Skills & Strengths */}
            <div className="md:col-span-1 space-y-6">
              <section>
                <h3 className="text-sm font-black text-blue-600 uppercase mb-3 tracking-widest">Stack & Tools</h3>
                <ul className="text-sm text-black space-y-2">
                  {skills.technical.map((s, i) => <li key={i} className="pb-1 border-b border-gray-100">{s}</li>)}
                </ul>
              </section>
              <section>
                <h3 className="text-sm font-black text-blue-600 uppercase mb-3 tracking-widest">Key Strengths</h3>
                {skills.core.map((cat, i) => (
                  <div key={i} className="mb-4">
                    <p className="text-xs font-bold text-black mb-1">{cat.category}</p>
                    <ul className="text-xs text-black list-disc ml-4 font-medium">
                      {cat.items.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </section>
              <section className="bg-gray-50 p-3 rounded border border-gray-100">
                <h3 className="text-xs font-black text-black uppercase mb-2">Personal</h3>
                <ul className="text-[10px] text-black space-y-1">
                  {skills.personal.map((p, i) => <li key={i}>• {p}</li>)}
                </ul>
              </section>
            </div>

            {/* Main Column: Projects & Experience */}
            <div className="md:col-span-2">
              {/* Technical Projects Section */}
              <section className="mb-8">
                <SectionTitle title="Technical Projects" icon="code" />
                {projects.map((proj, i) => (
                  <div key={i} className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:border-blue-300 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-black">{proj.name}</h4>
                    </div>
                    <p className="text-xs font-mono text-blue-600 mb-2 font-bold">{proj.tech}</p>
                    <p className="text-sm text-black leading-relaxed">{proj.description}</p>
                    <p className="text-xs text-blue-500 mt-2 font-medium">{proj.link}</p>
                  </div>
                ))}
              </section>

              {/* Professional Experience */}
              <section>
                <SectionTitle title="Experience" icon="briefcase" />
                <div className="space-y-6">
                  {experience.map((job, i) => (
                    <div key={i} className={`relative pl-4 border-l-2 ${job.isHighlight ? 'border-blue-500' : 'border-gray-200'}`}>
                      <div className="flex justify-between items-baseline">
                        <h4 className={`font-bold ${job.isHighlight ? 'text-blue-700 text-base' : 'text-black text-sm'}`}>{job.role}</h4>
                        <span className="text-[10px] font-bold text-black uppercase">{job.dates}</span>
                      </div>
                      <p className="text-xs font-bold text-black mb-2 tracking-wide uppercase">{job.company}</p>
                      <ul className="text-sm text-black list-disc ml-4 space-y-1.5 leading-relaxed">
                        {job.description.map((point, j) => <li key={j}>{point}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FrontEndCv;