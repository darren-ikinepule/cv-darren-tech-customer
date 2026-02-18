import React from 'react';

// --- Darren Ikinepule CV - Tailored for Owens Tankers ---
const cvData = {
  personal: {
    name: "Darren Ikinepule",
    title: "Warehouse Operative | Certified Forklift Operator",
    email: "darrenikinepule@outlook.co.nz",
    phone: "0204339983",
    location: "Auckland",
    linkedin: "https://www.linkedin.com/in/darren-ikinepule-792914335/",
  },

  summary: [
    "Certified Forklift Operator with a 1 year computing qualification and a background in high volume production. I have experience with industrial cleaning for specialized equipment and logistics support. I am reliable, follow site safety rules strictly, and have a long term zero incident record."
  ],

  skills: {
    technical: [
      "Forklift Certification (Jan 2026): Counterbalance (LPG), Reach Electric, Stock Picker, Pallet Truck",
      "Industrial Cleaning: Experience washing high pressure kitchen equipment, hoods, and vents",
      "Computer Skills: Competent with asset tracking and digital inventory systems",
      "Health & Safety: Practical focus on site safety and hazard awareness"
    ],
    core: [
      { 
        category: "Licences & Certifications", 
        items: [
          "Certified Forklift Operator – Jan 2026",
          "Certificate in Computing 1 Year Program",
          "Full Class 1 NZ Driver’s Licence (Own Transport)"
        ] 
      },
      { 
        category: "Work Readiness", 
        items: [
          "Physically fit and used to heavy manual work",
          "Punctual and comfortable with early morning shifts",
          "A team player who follows site procedures exactly"
        ] 
      }
    ]
  },

  education: [
    {
      role: "Forklift Certification",
      company: "Certified Training Provider",
      location: "Auckland",
      dates: "Jan 2026",
      description: [
        "Certified on Counterbalance (LPG), Reach, Stock Picker, and Pallet Truck operation.",
        "Demonstrated safe load handling and hazard awareness during training."
      ]
    },
    {
      role: "Certificate in Computing 1 Year",
      company: "Auckland Tertiary Provider",
      location: "Auckland",
      dates: "2025",
      description: [
        "Completed a one year course on digital records and data management.",
        "Applied computer skills to inventory tracking and office based tasks."
      ]
    }
  ],

  experience: [
    {
      role: "Relief Chef / Operations (Contract)",
      company: "TRN (The Recruitment Network)",
      location: "Auckland",
      dates: "2026 – Present",
      description: [
        "Managing site operations and keeping services running in busy Auckland venues.",
        "Cleaning specialized industrial equipment, including high pressure hoods and vents.",
        "Getting up to speed quickly with new teams, site layouts, and safety protocols.",
        "Responsible for looking after equipment and keeping work areas safe and tidy."
      ]
    },
    {
      role: "Property Manager / Logistics Support",
      company: "Gardenia Trust LTD",
      location: "Auckland",
      dates: "10/2024 – 2026",
      description: [
        "Organizing logistics and moving stock between different sites.",
        "Keeping digital inventory records up to date and making sure equipment is stored correctly.",
        "Working with delivery schedules to make sure there is no downtime."
      ]
    },
    {
      role: "Production & Operations Lead",
      company: "Hospitality & Production Environments",
      location: "New Zealand & Thailand",
      dates: "2002 – 2022",
      description: [
         "Represented Hyatt Auckland internationally, ensuring service standards were met across diverse geographical locations.",
        "Worked in fast paced production lines requiring steady output and high safety standards.",
        "Handled physical tasks and industrial cleaning while maintaining quality.",
        "Followed all health, safety, and hygiene rules with a zero accident record over 20 years."
      ]
    }
  ]
};

// --- Components (No changes to layout) ---

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
      <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition duration-150 border-b border-transparent hover:border-blue-300">
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

const ExperienceItem = ({ role, company, location, dates, description, isHighlight }) => (
  <div className={`experience-item mb-5 p-5 rounded border break-inside-avoid print:mb-4 print:p-0 print:border-none ${isHighlight ? 'bg-blue-50 border-blue-200 print:bg-transparent' : 'bg-white border-slate-100 shadow-sm'}`}>
    <div className="flex justify-between items-start print:mb-0.5">
      <h3 className="text-xl font-bold text-slate-900 print:text-lg">{role}</h3>
      {dates && <span className="text-sm font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded flex-shrink-0 print:bg-transparent print:px-0 print:py-0 print:text-slate-600">{dates}</span>}
    </div>
    <div className="flex justify-between items-center text-md text-slate-500 mb-3 print:mb-1 print:text-sm print:text-blue-800">
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

const OwensLogisticsCv = () => {
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

          {/* Key Skills */}
          <section className="break-inside-avoid">
            <SectionTitle title="Key Skills" icon="briefcase" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 print:gap-8 print:grid-cols-2">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-tight print:text-sm">Technical & Operational</h3>
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

          {/* Certifications & Education */}
          <section>
            <SectionTitle title="Certifications & Education" icon="star" />
            <div className="space-y-4 print:space-y-3">
              {education.map((item, index) => (
                <ExperienceItem key={index} {...item} isHighlight={item.role.includes("Forklift") || item.role.includes("Computing")} />
              ))}
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
        </main>

        <footer className="bg-slate-50 p-6 text-center text-sm text-slate-400 border-t border-slate-100 print:bg-white print:text-slate-500">
          References available upon request.
        </footer>
      </div>
    </div>
  );
};

export default OwensLogisticsCv;