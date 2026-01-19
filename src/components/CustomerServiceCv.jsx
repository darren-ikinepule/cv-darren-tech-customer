import React from 'react';

// --- Authenticity-Focused Data Structure ---
const cvData = {
  personal: {
    name: "Darren Ikinepule",
    title: "Customer Service & Operations Professional",
    email: "darrenikinepule@outlook.co.nz",
    phone: "0204339983",
    location: "Auckland 1072",
  },
  summary: [
    "I am a reliable professional with a background in high pressure operations and international hospitality. I have a practical, common sense approach to solving problems and a track record of staying calm when things get busy. My experience ranges from leading large teams to managing property portfolios, and I am comfortable communicating with people from all walks of life whether I'm explaining a technical issue or resolving a customer concern."
  ],
  skills: {
    technical: [
      "Digital Literacy: Proficient with Excel, asset tracking, and AI prompting tools",
      "Technical Support: Hands on experience with hardware setup and system troubleshooting",
      "Data Management: Competent in maintaining accurate records and basic database use (MongoDB/MySQL)",
    ],
    core: [
      { 
        category: "Service & Communication", 
        items: [
          "Consistent 95%+ satisfaction rates in demanding environments",
          "Direct experience resolving complex customer complaints and requests",
          "Able to explain technical details clearly to non technical users",
          "Adaptable and culturally aware from years of international work"
        ] 
      },
      { 
        category: "Operations", 
        items: [
          "Logical approach to troubleshooting and fixing issues",
          "Managed and trained teams of 15+ staff",
          "Strong record of punctuality and self discipline",
          "Focused on improving workflows to get better results"
        ] 
      },
    ],
    personal: [
      "Practical and team-oriented mindset",
      "Consistent and dependable",
      "Straightforward, clear communicator",
      "Strong attention to detail and work ethic"
    ],
  },
  education: [
    {
      role: "Software Development Immersion",
      company: "Take2 Programme",
      location: "Auckland",
      dates: "2024 - Present",
      description: [
        "A 1,000 hour intensive course focused on technical skills and professional habits.",
        "Built full stack applications with a focus on stability and clean code.",
        "Worked in Agile teams to meet deadlines and improve project quality."
      ],
    }
  ],
  experience: [
    {
      role: "Property Manager / Operations",
      company: "Gardenia Trust LTD",
      location: "Auckland",
      dates: "10/2024 - Present",
      description: [
        "Manage a portfolio of 8 properties across New Zealand and the Pacific Islands.",
        "Solve technical and database issues to keep property records accurate.",
        "Main point of contact for owners and tradespeople to ensure repairs are done on time.",
        "Use digital tools to track assets and keep operations running smoothly."
      ],
      isHighlight: true
    },
    {
      role: "Executive Chef / Operations Management",
      company: "Various International & Local Establishments",
      location: "NZ & Thailand",
      dates: "1995 - 2022",
      description: [
        "Led teams of 15+ in high pressure kitchens while maintaining high service standards.",
        "Turned complex health and safety requirements into clear instructions for staff.",
        "Streamlined internal processes to reduce waste and improve consistency.",
        "Represented Hyatt Auckland in international assignments across Asia and the Middle East."
      ]
    },
    {
      role: "Head Chef",
      company: "Kohuora Cafe",
      location: "Auckland",
      dates: "05/2018 - 10/2022",
      description: [
        "Introduced new menu items that led to an 80% increase in daily customers.",
        "Handled all customer feedback and special requests professionally."
      ]
    }
  ],
};

// --- Logic-Preserved Components ---

const Icon = ({ path, className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    {path === 'mail' && <path d="M1.5 8.67v8.58a1.5 1.5 0 001.5 1.5h17a1.5 1.5 0 001.5-1.5V8.67l-8.88 5.06a.75.75 0 01-.76 0L1.5 8.67z" />}
    {path === 'phone' && <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />}
    {path === 'location' && <path d="M11.54 22.351l.07.04.28.16a1 1 0 001.22 0l.28-.16.07-.04a41.8 41.8 0 003.525-6.736c.2-.4.2-.9 0-1.3a41.8 41.8 0 00-3.525-6.736l-.07-.04a.75.75 0 00-.76 0l-.07.04a41.8 41.8 0 00-3.525 6.736c-.2.4-.2.9 0 1.3a41.8 41.8 0 003.525 6.736zm-1.04-6.601a3 3 0 114.5-4.5 3 3 0 01-4.5 4.5z" />}
    {path === 'briefcase' && <path d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c3.864.5 6.75 3.79 6.75 7.645v6.75a3 3 0 01-3 3h-15a3 3 0 01-3-3v-6.75c0-3.855 2.886-7.145 6.75-7.645V5.25z" />}
    {path === 'graduationCap' && <path d="M11.7 2.805a.75.75 0 01.6 0l9.75 4.125a.75.75 0 010 1.38l-9.75 4.125a.75.75 0 01-.6 0L2.35 8.435V15a.75.75 0 01-1.5 0V7.935a.75.75 0 01.4-.67l10.45-4.46z" />}
    {path === 'star' && <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />}
  </svg>
);

const Header = ({ personal }) => (
  <header className="bg-slate-800 text-white px-8 py-8 rounded-t-lg shadow-xl border-b-4 border-blue-500">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight">{personal.name}</h1>
        <p className="text-xl font-medium text-blue-300 mt-1 uppercase tracking-wide">{personal.title}</p>
      </div>
      <div className="mt-4 md:mt-0 text-sm md:text-right space-y-1">
        <div className="flex items-center space-x-2 justify-start md:justify-end">
          <Icon path="mail" className="w-4 h-4 text-blue-300" />
          <span>{personal.email}</span>
        </div>
        <div className="flex items-center space-x-2 justify-start md:justify-end">
          <Icon path="phone" className="w-4 h-4 text-blue-300" />
          <span>{personal.phone}</span>
        </div>
        <div className="flex items-center space-x-2 justify-start md:justify-end">
          <Icon path="location" className="w-4 h-4 text-blue-300" />
          <span>{personal.location}</span>
        </div>
      </div>
    </div>
  </header>
);

const SectionTitle = ({ title, icon }) => (
  <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4 flex items-center space-x-2 text-slate-800 pt-8">
    <Icon path={icon} className="w-6 h-6 text-blue-600" />
    <span>{title}</span>
  </h2>
);

const ExperienceItem = ({ role, company, location, dates, description, isHighlight }) => (
  <div className={`mb-5 p-5 rounded-lg border ${isHighlight ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-100 shadow-sm'}`}>
    <div className="flex justify-between items-start">
      <h3 className="text-xl font-bold text-slate-900">{role}</h3>
      <span className="text-sm font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded flex-shrink-0">{dates}</span>
    </div>
    <div className="flex justify-between items-center text-md text-slate-500 mb-3">
      <p className="font-bold">{company}</p>
      <p className="italic">{location}</p>
    </div>
    <ul className="list-disc ml-6 text-slate-700 text-md space-y-1.5">
      {description.map((point, index) => <li key={index}>{point}</li>)}
    </ul>
  </div>
);

const CustomerServiceCv = () => {
  const { personal, summary, skills, education, experience } = cvData;

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-12 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-200">
        <Header personal={personal} />

        <main className="p-8 md:p-12">
          <section>
            <SectionTitle title="Summary" icon="star" />
            <div className="text-slate-700 leading-relaxed text-lg italic bg-slate-50 p-4 rounded">
              {summary.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </section>

          <section>
            <SectionTitle title="Skills" icon="briefcase" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-tight">Technical Ability</h3>
                <ul className="list-disc ml-6 text-md text-slate-700 space-y-2">
                    {skills.technical.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
              </div>
              <div className="space-y-6">
                {skills.core.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-tight">{section.category}</h3>
                    <ul className="list-disc ml-6 text-md text-slate-700 space-y-2">
                      {section.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <SectionTitle title="Experience" icon="briefcase" />
            <div className="space-y-2">
              {experience.map((job, index) => (
                <ExperienceItem key={index} {...job} />
              ))}
            </div>
          </section>

          <section>
            <SectionTitle title="Education" icon="graduationCap" />
            <div className="space-y-2">
              {education.map((item, index) => (
                <ExperienceItem key={index} {...item} />
              ))}
            </div>
          </section>
        </main>
        
        <footer className="bg-slate-50 p-6 text-center text-sm text-slate-400 border-t border-slate-100">
          Professional references and technical portfolio available upon request.
        </footer>
      </div>
    </div>
  );
};

export default CustomerServiceCv;