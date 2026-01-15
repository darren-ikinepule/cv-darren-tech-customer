import React from 'react';

// --- Data Structure ---
const cvData = {
  personal: {
    name: "Darren Ikinepule",
    title: "Front End Developer",
    email: "darrenikinepule@outlook.co.nz",
    phone: "0204339983",
    location: "Auckland 1072",
    github: "github.com/darren-ikinepule",
    linkedin: "https://www.linkedin.com/in/darren-ikinepule-792914335/",
    liveApp: "https://fuel-and-fire-htsk.vercel.app/"
  },
  summary: [
    "Front End Developer with a strong technical foundation in React.js, Tailwind CSS, and Vite. Transitioning from a career as an Executive Chef, I bring a unique ability to troubleshoot complex UI problems and deliver high quality, user centric solutions under intense pressure.",
    "Recently completed an intensive 1,000+ hour programme focused on building responsive, accessible web applications using modern CSS patterns and Agile collaboration."
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
  education: [
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
  ],
  experience: [
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

// --- Utility Components ---
const Icon = ({ path, className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    {path === 'mail' && <path d="M1.5 8.67v8.58a1.5 1.5 0 001.5 1.5h17a1.5 1.5 0 001.5-1.5V8.67l-8.88 5.06a.75.75 0 01-.76 0L1.5 8.67z" />}
    {path === 'phone' && <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />}
    {path === 'code' && <path d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22 6.22 6.22a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 011.06 0zm1.94 0a.75.75 0 000 1.06l6.22 6.22-6.22 6.22a.75.75 0 101.06 1.06l6.75-6.75a.75.75 0 000-1.06l-6.75-6.75a.75.75 0 00-1.06 0z" />}
    {path === 'briefcase' && <path d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c3.864.5 6.75 3.79 6.75 7.645v6.75a3 3 0 01-3 3h-15a3 3 0 01-3-3v-6.75c0-3.855 2.886-7.145 6.75-7.645V5.25z" />}
    {path === 'github' && <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />}
    {path === 'external' && <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>}
    {path === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
    {path === 'location' && <><path d="M11.54 22.351l.07.04.28.16a1 1 0 001.22 0l.28-.16.07-.04a41.8 41.8 0 003.525-6.736c.2-.4.2-.9 0-1.3a41.8 41.8 0 00-3.525-6.736l-.07-.04a.75.75 0 00-.76 0l-.07.04a41.8 41.8 0 00-3.525 6.736c-.2.4-.2.9 0 1.3a41.8 41.8 0 003.525 6.736zm-1.04-6.601a3 3 0 114.5-4.5 3 3 0 01-4.5 4.5z" /></>}
    {path === 'star' && <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />}
  </svg>
);

const Header = ({ personal }) => (
  <header className="bg-slate-800 text-white px-8 py-8 rounded-t-lg shadow-xl border-b-4 border-blue-500 print:shadow-none print:px-0 print:py-6 print:bg-white print:text-slate-900 print:border-blue-600">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center print:flex-row print:items-center">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight print:text-3xl">{personal.name}</h1>
        <p className="text-xl font-medium text-blue-400 mt-1 uppercase tracking-wider print:text-blue-700 print:text-lg">{personal.title}</p>
      </div>
      <div className="mt-4 md:mt-0 text-sm md:text-right space-y-1 print:mt-0 print:text-xs font-medium">
        <div className="flex items-center space-x-2 justify-start md:justify-end">
          <Icon path="mail" className="w-4 h-4 text-blue-400 print:text-blue-600" />
          <span>{personal.email}</span>
        </div>
        <div className="flex items-center space-x-2 justify-start md:justify-end">
          <Icon path="phone" className="w-4 h-4 text-blue-400 print:text-blue-600" />
          <span>{personal.phone}</span>
        </div>
        <div className="flex items-center space-x-2 justify-start md:justify-end">
          <Icon path="github" className="w-4 h-4 text-blue-400 print:text-blue-600" />
          <a href={`https://${personal.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{personal.github}</a>
        </div>
        <div className="flex items-center space-x-2 justify-start md:justify-end">
          <Icon path="linkedin" className="w-4 h-4 text-blue-400 print:text-blue-600" />
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
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
      {description.map((point, index) => <li key={index}>{point}</li>)}
    </ul>
  </div>
);

const FrontEndCv = () => {
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
            <SectionTitle title="Technical Capabilities" icon="code" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 print:gap-8 print:grid-cols-2">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-tight print:text-sm">Key Skills</h3>
                <ul className="list-disc ml-6 text-md text-slate-700 space-y-2 print:text-sm print:ml-4 print:space-y-1">
                    {skills.technical.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md print:bg-white print:border-slate-200 print:p-2 print:mt-4">
                  <p className="text-sm font-bold text-blue-900 mb-1">Portfolio Project:</p>
                  <a href={personal.liveApp} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-700 font-medium hover:underline cursor-pointer">Fuel vs Fire Live App</a>
                  <p className="text-xs text-slate-500 mt-1 break-all"><a href={personal.liveApp} target="_blank" rel="noopener noreferrer" className="hover:underline">{personal.liveApp}</a></p>
                </div>
              </div>

              <div className="space-y-8 print:space-y-4">
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

          <section>
            <SectionTitle title="Development & Work History" icon="briefcase" />
            <div className="space-y-4 print:space-y-3">
              {education.map((item, index) => (
                <ExperienceItem key={index} {...item} />
              ))}
              {experience.map((job, index) => (
                <ExperienceItem key={index} {...job} />
              ))}
            </div>
          </section>
        </main>
        
        <footer className="bg-slate-50 p-6 text-center text-sm text-slate-400 border-t border-slate-100 print:bg-white print:text-slate-500">
          Full Portfolio available at: <a href={`https://${personal.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{personal.github}</a>
        </footer>
      </div>
    </div>
  );
};

export default FrontEndCv;
