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
    "I am an IT professional with a background in operations and 1,000+ hours of full stack technical training. I have spent 20 years managing busy, high pressure environments where clear communication and following strict processes were essential to getting the job done. I am ready to apply that experience to resolving technical issues and supporting users at the Skills Institute.",
  ],

  skills: {
    technical: [
      "Microsoft 365 & Windows OS Support",
      "IT Support & Troubleshooting (Hardware, Systems, Networking)",
      "Ticket Logging, Categorisation & Prioritisation",
      "JavaScript (ES6+), React, Node.js, Express",
      "Databases: MongoDB, MySQL",
      "REST APIs, Git & GitHub Version Control",
      "Asset tracking, documentation, and process control",
    ],
    core: [
      {
        category: "Professional Strengths",
        items: [
          "Clear communication & customer focused support",
          "Calm under pressure in high volume environments",
          "Adherence to SLAs and structured workflows",
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
        "Designed and deployed a full stack web application focusing on clean data handling and error management. Applied structured problem solving to resolve technical bugs during development.",
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
        "Handled fast paced service delivery across various Auckland venues, following strict security and safety protocols.",
        "Adapted quickly to new site layouts and teams while maintaining professional conduct and reliable service.",
        "Responsible for equipment oversight and maintaining secure, orderly work zones under tight time constraints.",
      ]
    },
    {
      role: "Software Development Immersion",
      company: "Take2 Programme",
      location: "Auckland",
      dates: "2024 – Present",
      description: [
        "Completed 1,000+ hours of project based software development training focusing on the MERN stack.",
        "Built and maintained full stack applications while documenting technical processes and troubleshooting system issues.",
        "Worked in Agile teams using peer reviews and structured problem solving to meet project deadlines.",
      ],
    },
    {
      role: "Property Manager / Operations Support",
      company: "Gardenia Trust LTD",
      location: "Auckland",
      dates: "2024 – 2026",
      description: [
        "Provided technical and operational support across a multi property portfolio, serving as a primary point of contact.",
        "Maintained accurate digital asset and inventory tracking systems to ensure data reliability.",
        "Troubleshot system and process issues to maintain smooth daily operations.",
      ],
    },
    {
      role: "Executive Chef / Operations Manager",
      company: "Various Employers",
      location: "NZ & Thailand",
      dates: "1995 – 2022",
      description: [
        "Led teams of 15+ staff in high volume, high pressure international environments.",
        "Optimised workflows and maintained strong safety records through disciplined process control.",
        "Applied professional communication and logistics skills to ensure consistent service delivery.",
      ],
    },
  ],

  education: [
    "Software Development & Professional Skills – Take2 Programme (2024–Present)",
    "Forklift Certification (F, W, O, T, R) – Jan 2026",
    "Full Class 1 NZ Driver Licence",
  ],
};

// --- Icon Component ---
const Icon = ({ path, className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    {path === 'mail' && <path d="M1.5 8.67v8.58a1.5 1.5 0 001.5 1.5h17a1.5 1.5 0 001.5-1.5V8.67l-8.88 5.06a.75.75 0 01-.76 0L1.5 8.67z" />}
    {path === 'phone' && <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />}
    {path === 'briefcase' && <path d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c3.864.5 6.75 3.79 6.75 7.645v6.75a3 3 0 01-3 3h-15a3 3 0 01-3-3v-6.75c0-3.855 2.886-7.145 6.75-7.645V5.25z" />}
    {path === 'star' && <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />}
    {path === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
    {path === 'location' && <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z" />}
  </svg>
);

// --- Header Component ---
const Header = ({ personal }) => (
  <header className="bg-slate-800 text-white px-8 py-6 rounded-t-lg shadow-xl border-b-4 border-indigo-500 print:shadow-none print:px-0 print:py-2 print:bg-white print:text-slate-900 print:border-indigo-600">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center print:flex-row print:items-center">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight print:text-3xl">{personal.name}</h1>
        <p className="text-xl font-medium text-indigo-400 mt-1 uppercase tracking-wider print:text-indigo-700 print:text-lg">{personal.title}</p>
      </div>
      <div className="mt-4 md:mt-0 text-sm md:text-right space-y-0.5 print:mt-0 print:text-xs font-medium">
        <ContactItem icon="mail" text={personal.email} link={`mailto:${personal.email}`} />
        <ContactItem icon="phone" text={personal.phone} link={`tel:${personal.phone}`} />
        <ContactItem icon="linkedin" text="LinkedIn" link={personal.linkedin} />
        <ContactItem icon="location" text={personal.location} />
      </div>
    </div>
  </header>
);

const ContactItem = ({ icon, text, link }) => (
  <div className="flex items-center space-x-2 justify-start md:justify-end">
    <Icon path={icon} className="w-4 h-4 text-indigo-400 print:text-indigo-600 flex-shrink-0" />
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition duration-150 border-b border-transparent hover:border-indigo-300">
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </div>
);

// --- Section Title Component ---
const SectionTitle = ({ title, icon }) => (
  <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4 flex items-center space-x-2 text-slate-800 pt-8 print:pt-2 print:mb-2 print:text-lg print:pb-1 print:border-slate-300 break-after-avoid">
    <Icon path={icon} className="w-6 h-6 text-indigo-600 print:w-5 print:h-5" />
    <span>{title}</span>
  </h2>
);

// --- Experience Item Component ---
const ExperienceItem = ({ role, company, location, dates, description, highlight }) => (
  <div className={`experience-item mb-5 p-5 rounded border break-inside-avoid print:mb-2 print:p-0 print:border-none ${highlight ? 'bg-indigo-50 border-indigo-200 print:bg-transparent' : 'bg-white border-slate-100 shadow-sm'}`}>
    <div className="flex justify-between items-start print:mb-0">
      <h3 className="text-xl font-bold text-slate-900 print:text-base">{role}</h3>
      <span className="text-sm font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded flex-shrink-0 print:bg-transparent print:px-0 print:py-0 print:text-xs print:text-slate-600">{dates}</span>
    </div>
    <div className="flex justify-between items-center text-md text-slate-500 mb-3 print:mb-0.5 print:text-xs print:text-indigo-800">
      <p className="font-bold">{company}</p>
      <p className="italic">{location}</p>
    </div>
    <ul className="list-disc ml-6 text-slate-700 text-md space-y-1.5 print:text-xs print:ml-3 print:space-y-0">
      {description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

// --- Main Component ---
const ItCv = () => {
  const { personal, summary, skills, experience, education, projects } = cvData;

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-12 font-sans text-slate-900 print:bg-white print:p-0">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-200 print:shadow-none print:border-none print:max-w-none print:w-full">
        <Header personal={personal} />

        <main className="p-8 md:p-12 print:p-3 print:pt-2">
          <section className="break-inside-avoid">
            <SectionTitle title="Professional Summary" icon="star" />
            <div className="text-slate-700 leading-relaxed text-lg print:text-xs print:leading-tight">
              {summary.map((para, i) => (
                <p key={i} className="mb-3 print:mb-1">{para}</p>
              ))}
            </div>
          </section>

          <section className="break-inside-avoid">
            <SectionTitle title="Key Skills" icon="briefcase" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:gap-3 print:grid-cols-2">
              <div className="break-inside-avoid">
                <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-tight print:text-xs print:mb-1">Technical Skills</h3>
                <ul className="list-disc ml-6 text-md text-slate-700 space-y-2 print:text-xs print:ml-3 print:space-y-0">
                  {skills.technical.map((skill, j) => (
                    <li key={j}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="break-inside-avoid">
                {skills.core.map((group, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-tight print:text-xs print:mb-1">{group.category}</h3>
                    <ul className="list-disc ml-6 text-md text-slate-700 space-y-2 print:text-xs print:ml-3 print:space-y-0">
                      {group.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <SectionTitle title="Professional Experience" icon="briefcase" />
            <div className="space-y-4 print:space-y-1">
              {experience.map((job, index) => (
                <ExperienceItem key={index} {...job} />
              ))}
            </div>
          </section>

          <section className="break-inside-avoid">
            <SectionTitle title="Education & Certifications" icon="star" />
            <ul className="list-disc ml-6 text-slate-700 text-md space-y-2 print:text-xs print:ml-3 print:space-y-0">
              {education.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        </main>

        <footer className="bg-slate-50 p-6 text-center text-sm text-slate-400 border-t border-slate-100 print:bg-white print:p-1 print:text-xs print:text-slate-600 print:border-slate-200">
          Portfolio: <a href={`https://${personal.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{personal.github}</a> | <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        </footer>
      </div>
    </div>
  );
};

export default ItCv;