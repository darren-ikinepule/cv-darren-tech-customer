import React from 'react';

// --- Updated CV Data (Tailored for Patrol Officer Role) ---
const cvData = {
  personal: {
    name: "Darren Ikinepule",
    title: "Operations & Site Management Professional",
    email: "darrenikinepule@outlook.co.nz",
    phone: "0204339983",
    location: "Auckland",
    linkedin: "https://www.linkedin.com/in/darren-ikinepule-792914335/",
  },

  summary: [
    "Operations professional with extensive experience managing residential and commercial sites across Auckland. I have a track record of staying calm and solving problems in high pressure environments and am fully licensed to drive in NZ. Ready to commit to a 4 on, 4 off roster and provide professional, helpful support to venue visitors and staff."
  ],

  skills: {
    technical: [
      "Site & Safety: Site Patrolling, Incident Response, Public Safety, Conflict Resolution, Professional Conduct, Full NZ Driver Licence",
      "Administrative Systems: Confident use of Excel, digital records, asset tracking, and scheduling tools",
      "Issue Resolution: Identifying problems quickly and following through to resolution",
      "Technical Awareness: Troubleshooting operational tools and digital record systems"
    ],
    core: [
      { 
        category: "Customer Service Strengths", 
        items: [
          "Maintained a 95%+ satisfaction rate by ensuring a professional, welcoming atmosphere in fast paced settings",
          "Experienced in handling complaints, special requests, and time sensitive issues",
          "Comfortable working with people from diverse backgrounds",
          "Calm and respectful approach in stressful situations"
        ] 
      },
      { 
        category: "Work Ethic & Reliability", 
        items: [
          "Highly punctual, dependable, and consistent",
          "Hands on approach with strong ownership of daily tasks",
          "Experience with staff coordination and scheduling",
          "Strong attention to detail with records, inventory, and compliance"
        ] 
      },
    ],
  },

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
      role: "Property Manager / Operations",
      company: "Gardenia Trust LTD",
      location: "Auckland",
      dates: "2024 - 2026",
      description: [
        "Responsible for patrolling and managing 7 residential and commercial properties, ensuring all sites stayed secure and well maintained.",
        "Acted as the first point of contact for incidents, using clear communication to resolve issues for owners and tenants quickly.",
        "Managed all site records and compliance documentation with high attention to detail.",
        "Resolved operational and system issues to keep services running smoothly."
      ]
    },
    {
      role: "Executive Chef / Service & Operations Management",
      company: "Various Establishments",
      location: "New Zealand & Thailand",
      dates: "1995 – 2022",
      description: [
        "Led teams of 15+ in high traffic environments, keeping operations running smoothly while managing public interactions.",
        "Consistently achieved 95%+ customer satisfaction through quality control and team leadership.",
        "Represented Hyatt Auckland, delivering consistent service standards across locations.",
        "Trained in digital tools and workplace problem solving."
      ]
    }
  ],

  education: [
    {
      role: "Professional Skills & Digital Tools Programme",
      company: "Take2 Programme",
      location: "Auckland",
      dates: "2024",
      description: [
        "Completed a full time programme focused on professional workplace skills and modern digital tools.",
        "Applied structured problem solving approaches to administration and task management."
      ],
    }
  ],
};

// --- Components (Layout Preserved) ---

const Icon = ({ path, className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    {path === 'mail' && <path d="M1.5 8.67v8.58a1.5 1.5 0 001.5 1.5h17a1.5 1.5 0 001.5-1.5V8.67l-8.88 5.06a.75.75 0 01-.76 0L1.5 8.67z" />}
    {path === 'phone' && <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />}
    {path === 'location' && <path d="M11.54 22.351l.07.04.28.16a1 1 0 001.22 0l.28-.16.07-.04a41.8 41.8 0 003.525-6.736c.2-.4.2-.9 0-1.3a41.8 41.8 0 00-3.525-6.736l-.07-.04a.75.75 0 00-.76 0l-.07.04a41.8 41.8 0 00-3.525 6.736c-.2.4-.2.9 0 1.3a41.8 41.8 0 003.525 6.736zm-1.04-6.601a3 3 0 114.5-4.5 3 3 0 01-4.5 4.5z" />}
    {path === 'briefcase' && <path d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c3.864.5 6.75 3.79 6.75 7.645v6.75a3 3 0 01-3 3h-15a3 3 0 01-3-3v-6.75c0-3.855 2.886-7.145 6.75-7.645V5.25z" />}
    {path === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
    {path === 'star' && <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />}
  </svg>
);

const Header = ({ personal }) => (
  <header className="bg-slate-800 text-white px-8 py-6 rounded-t-lg shadow-xl border-b-4 border-emerald-500 print:shadow-none print:px-0 print:py-6 print:bg-white print:text-slate-900 print:border-emerald-600">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center print:flex-row print:items-center">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight print:text-3xl">{personal.name}</h1>
        <p className="text-xl font-medium text-emerald-400 mt-1 uppercase tracking-wider print:text-emerald-700 print:text-lg">{personal.title}</p>
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
    <Icon path={icon} className="w-4 h-4 text-emerald-400 print:text-emerald-600 flex-shrink-0" />
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition duration-150 border-b border-transparent hover:border-emerald-300">
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </div>
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
      {dates && <span className="text-sm font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded flex-shrink-0 print:bg-transparent print:px-0 print:py-0 print:text-slate-600">{dates}</span>}
    </div>
    <div className="flex justify-between items-center text-md text-slate-500 mb-3 print:mb-1 print:text-sm print:text-emerald-800">
      <p className="font-bold">{company}</p>
      <p className="italic">{location}</p>
    </div>
    <ul className="list-disc ml-6 text-slate-700 text-md space-y-1.5 print:text-sm print:ml-4 print:space-y-1">
      {description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const PatrolOfficerCV = () => {
  const { personal, summary, skills, experience, education } = cvData;

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

          {/* Skills & Strengths */}
          <section className="break-inside-avoid">
            <SectionTitle title="Skills & Strengths" icon="briefcase" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 print:gap-8 print:grid-cols-2">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-tight print:text-sm">Technical & Administrative</h3>
                <ul className="list-disc ml-6 text-sm text-slate-700 space-y-2 print:text-xs print:ml-4 print:space-y-0.5">
                  {skills.technical.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
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

          {/* Work History */}
          <section>
            <SectionTitle title="Work History" icon="briefcase" />
            <div className="space-y-4 print:space-y-3">
              {experience.map((job, index) => (
                <ExperienceItem key={index} {...job} />
              ))}
            </div>
          </section>

          {/* Training & Education */}
          <section>
            <SectionTitle title="Training & Education" icon="star" />
            <div className="space-y-4 print:space-y-3">
              {education.map((item, index) => (
                <ExperienceItem key={index} {...item} />
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

export default PatrolOfficerCV;