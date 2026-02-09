import React from "react";

const cvData = {
  personal: {
    name: "Darren Ikinepule",
    title: "IT Support & Operations Professional",
    email: "darrenikinepule@outlook.co.nz",
    phone: "0204339983",
    location: "Auckland 1072",
    linkedin: "https://www.linkedin.com/in/darren-ikinepule-792914335",
    github: "github.com/darren-ikinepule",
    liveApp: "https://fuel-and-fire-htsk.vercel.app",
  },

  summary: [
    "Reliable and adaptable IT professional transitioning from operations and logistics into technical support and software development. Strong foundation in IT support, full stack web development (MERN), and system troubleshooting, backed by over 20 years of experience in high pressure environments. Known for learning new systems quickly, following structured processes, and communicating clearly with both technical and non technical users.",
  ],

  skills: {
    technical: [
      "IT Support & Troubleshooting (hardware, systems, basic networking)",
      "JavaScript (ES6+), React, Node.js, Express",
      "Databases: MongoDB, MySQL",
      "REST APIs, Git & GitHub version control",
      "Asset tracking, documentation, and process control",
    ],
    core: [
      {
        category: "Professional Strengths",
        items: [
          "Clear communication & customer focused support",
          "Calm under pressure in high volume environments",
          "Strong reliability, punctuality, and work ethic",
          "Fast learner with structured training",
          "Team collaboration and leadership experience",
        ],
      },
    ],
  },

  projects: [
    {
      name: "Fuel vs Fire – Full Stack Web Application",
      tech: "React, Node.js, Express, MongoDB",
      description:
        "Designed and deployed a full stack web application with responsive UI and RESTful backend. Focused on clean data handling, error management, and maintainable code.",
      live: "https://fuel-and-fire-htsk.vercel.app",
      github: "https://github.com/darren-ikinepule/fuel-and-fire",
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
      role: "Software Development Immersion",
      company: "Take2 Programme",
      location: "Auckland",
      dates: "2024 – Present",
      description: [
        "Completed 1,000+ hours of project based software development training",
        "Built and maintained full stack applications following SDLC principles",
        "Worked in Agile teams using peer review and structured problem solving",
      ],
    },
    {
      role: "Property Manager / Operations Support",
      company: "Gardenia Trust LTD",
      location: "Auckland",
      dates: "2024 – Present",
      description: [
        "Provided technical and operational support across a multi property portfolio",
        "Maintained accurate digital asset and inventory tracking systems",
        "Troubleshot system and process issues to ensure data reliability",
      ],
    },
    {
      role: "Executive Chef / Operations Manager",
      company: "Various Employers",
      location: "NZ & Thailand",
      dates: "1995 – 2022",
      description: [
        "Led teams of up to 15+ staff in fast paced, high pressure environments",
        "Optimised workflows, reduced waste, and maintained strong safety records",
        "Developed transferable skills in leadership, logistics, and process control",
      ],
    },
  ],

  education: [
    "Software Development & Professional Skills – Take2 Programme (2024–Present)",
    "Forklift Certification – Counterbalance, Reach, Stock Picker, Pallet Truck (Jan 2026)",
    "Full Class 1 NZ Driver Licence | Own Reliable Transport",
  ],
};

const Icon = ({ path, className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {path === 'mail' && <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>}
    {path === 'phone' && <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>}
    {path === 'github' && <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>}
    {path === 'code' && <path d="M16 18l2-2-2-2M8 6l-2 2 2 2M14.5 4l-5 16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>}
    {path === 'briefcase' && <path d="M20 7l-2-2H6L4 7m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0H4m6-3v4m4-4v4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>}
    {path === 'external' && <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>}
    {path === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
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

const IntegratedTechOpsCV = () => {
  const { personal, summary, skills, projects, experience, education } = cvData;

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
                <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-tight print:text-sm">Stack & Tech</h3>
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
            <SectionTitle title="Projects" icon="code" />
            <div className="space-y-4 print:space-y-3">
              {projects.map((proj, index) => (
                <div key={index} className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r break-inside-avoid print:bg-white print:border-l-2 print:p-0">
                  <div className="flex justify-between items-start print:mb-0.5">
                    <h4 className="text-xl font-bold text-slate-900 print:text-lg">{proj.name}</h4>
                  </div>
                  <p className="text-sm font-bold text-blue-700 mb-2 print:text-slate-600">{proj.tech}</p>
                  <p className="text-slate-700 text-md mb-3 print:text-sm">{proj.description}</p>
                  <div className="flex gap-2">
                    <a href={proj.live} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-blue-700 hover:underline flex items-center gap-1">
                      Live App <Icon path="external" className="w-3 h-3" />
                    </a>
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-blue-700 hover:underline flex items-center gap-1">
                      GitHub <Icon path="external" className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle title="Professional Experience" icon="briefcase" />
            <div className="space-y-4 print:space-y-3">
              {experience.map((job, index) => (
                <ExperienceItem key={index} {...job} />
              ))}
            </div>
          </section>

          <section>
            <SectionTitle title="Education & Certifications" icon="star" />
            <ul className="list-disc ml-6 text-slate-700 text-md space-y-2 print:text-sm print:ml-4 print:space-y-1">
              {education.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        </main>
        
        <footer className="bg-slate-50 p-6 text-center text-sm text-slate-400 border-t border-slate-100 print:bg-white print:text-slate-500">
          Full Portfolio available at: <a href={`https://${personal.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{personal.github}</a>
        </footer>
      </div>
    </div>
  );
};

export default IntegratedTechOpsCV;
