import React from "react";

// ==============================
// TAILORED CV DATA - AUCKLAND TRANSPORT
// ==============================

const cvData = {
  personal: {
    name: "Darren Ikinepule",
    title:
      "Customer Service & Operations Specialist | Certified Forklift Operator (F Endorsed)",
    email: "darrenikinepule@outlook.co.nz",
    phone: "0204339983",
    location: "Auckland, New Zealand",
    linkedin: "https://www.linkedin.com/in/darren-ikinepule-792914335/",
    linkedinDisplay: "linkedin.com/in/darren-ikinepule",
  },

  summary: [
    "I have spent over 20 years managing daily operations and leading teams in some of Auckland’s most demanding environments. My background in hospitality and property management has built a practical, customer first mindset focused on solving problems as they arise.",
    "I am comfortable working with a wide range of people and stay calm under pressure, with a goal of providing clear, helpful support to every person using our transport network."
  ],

  skillGroups: [
    {
      title: "Customer & Community Support",
      skills: [
        "Conflict Resolution & De escalation",
        "Public Interaction",
        "End to End Problem Solving",
        "Interpersonal Communication",
        "Team Leadership (15+ Staff)",
        "Operational Safety & Compliance",
      ],
    },
    {
      title: "Operations & Logistics",
      skills: [
        "Forklift Operator (F Endorsed)",
        "Inventory Management",
        "Workflow Coordination",
        "Resource Procurement",
        "Asset Tracking",
        "Digital Tool Proficiency",
      ],
    },
  ],

  experience: [
    {
      role: "Relief Chef / Operations Support",
      company: "TRN (The Recruitment Network)",
      location: "Auckland",
      dates: "2026 – Present",
      highlight: true,
      description: [
        "Quickly adapt to different teams and high pressure environments across Auckland, maintaining high standards of service and safety during peak times.",
        "Manage operational workflows at multiple sites to ensure efficient service delivery and workplace organization.",
        "Maintain strict health, safety, and compliance standards in fast paced settings.",
      ],
    },
    {
      role: "Property Manager / Operations",
      company: "Gardenia Trust LTD",
      location: "Auckland",
      dates: "10/2024 – 2026",
      description: [
        "Serve as the primary point of contact for a diverse range of owners and tenants, resolving service and system issues quickly to keep operations running smoothly.",
        "Maintain high integrity records and compliance documents, ensuring data accuracy for residential and commercial assets.",
        "Coordinate with external contractors and stakeholders to meet project timelines and essential service requirements.",
      ]
    },
    {
      role: "Head Chef / Operations Leader",
      company: "Kohuora Cafe",
      location: "Auckland",
      dates: "05/2018 – 10/2022",
      description: [
        "Took full responsibility for staff and workflow in a high volume setting, ensuring the team stayed focused on providing a positive experience for every customer.",
        "Led recruitment, training, and performance management for a diverse frontline team.",
        "Improved operational efficiency to manage increased production volumes while maintaining safety standards.",
      ],
    },
    {
      role: "Executive Chef / Operations Manager",
      company: "Chaweng Blue Lagoon Resort",
      location: "Thailand",
      dates: "01/2005 – 01/2015",
      description: [
        "Managed end to end operational workflows, including logistics, staffing, and inventory for high volume service outlets.",
        "Supervised a team of 15+ staff, focusing on consistent service quality and operational planning.",
      ],
    },
    {
      role: "Executive Sous Chef",
      company: "Hyatt Hotel / Impiana Resort",
      location: "Auckland & International",
      dates: "11/1995 – 01/2005",
      description: [
        "Selected to represent Hyatt Hotels Corporation internationally, upholding brand standards and operational excellence across global locations.",
        "Managed high volume production (250–350 covers daily) and service operations in luxury hotel environments.",
      ],
    },
  ],

  education: [
    {
      title: "Forklift Certification with F Endorsement",
      provider: "Certified Training Provider",
      date: "Jan 2026",
      details: "Fully compliant with NZ safety standards for Reach Truck, Counterbalance, and Stock Pickers.",
    },
    {
      title: "Professional Skills & Digital Tools Programme",
      provider: "Take2 Programme",
      date: "2024",
      details: "Training in digital systems, workplace workflows, and operational efficiency.",
    },
    {
      title: "Food Safety Certificate (Level 3)",
      provider: "NZQA",
      date: "Current",
      details: "Advanced compliance and safety certification.",
    },
  ],
};

// ==============================
// COMPONENTS
// ==============================

const Icon = ({ path, className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    {path === 'mail' && <path d="M1.5 8.67v8.58a1.5 1.5 0 001.5 1.5h17a1.5 1.5 0 001.5-1.5V8.67l-8.88 5.06a.75.75 0 01-.76 0L1.5 8.67z" />}
    {path === 'phone' && <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />}
    {path === 'location' && <path d="M11.54 22.351l.07.04.28.16a1 1 0 001.22 0l.28-.16.07-.04a41.8 41.8 0 003.525-6.736c.2-.4.2-.9 0-1.3a41.8 41.8 0 00-3.525-6.736l-.07-.04a.75.75 0 00-.76 0l-.07.04a41.8 41.8 0 00-3.525 6.736c-.2.4-.2.9 0 1.3a41.8 41.8 0 003.525 6.736zm-1.04-6.601a3 3 0 114.5-4.5 3 3 0 01-4.5 4.5z" />}
    {path === 'star' && <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />}
    {path === 'briefcase' && <path d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c3.864.5 6.75 3.79 6.75 7.645v6.75a3 3 0 01-3 3h-15a3 3 0 01-3-3v-6.75c0-3.855 2.886-7.145 6.75-7.645V5.25z" />}
    {path === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
  </svg>
);

const Header = ({ personal }) => (
  <header className="bg-slate-800 text-white px-8 py-6 rounded-t-lg shadow-xl border-b-4 border-indigo-500 print:shadow-none print:px-0 print:py-6 print:bg-white print:text-slate-900 print:border-indigo-600">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center print:flex-row print:items-center">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight print:text-3xl">{personal.name}</h1>
        <p className="text-xl font-medium text-indigo-400 mt-1 uppercase tracking-wider print:text-indigo-700 print:text-lg">{personal.title}</p>
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

const SectionTitle = ({ title, icon }) => (
  <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4 flex items-center space-x-2 text-slate-800 pt-8 print:pt-4 print:text-xl print:border-slate-300 break-after-avoid">
    <Icon path={icon} className="w-6 h-6 text-indigo-600 print:w-5 print:h-5" />
    <span>{title}</span>
  </h2>
);

const ExperienceItem = ({ role, company, location, dates, description, highlight }) => (
  <div className={`experience-item mb-5 p-5 rounded border break-inside-avoid print:mb-4 print:p-0 print:border-none ${highlight ? 'bg-indigo-50 border-indigo-200 print:bg-transparent' : 'bg-white border-slate-100 shadow-sm'}`}>
    <div className="flex justify-between items-start print:mb-0.5">
      <h3 className="text-xl font-bold text-slate-900 print:text-lg">{role}</h3>
      <span className="text-sm font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded flex-shrink-0 print:bg-transparent print:px-0 print:py-0 print:text-slate-600">{dates}</span>
    </div>
    <div className="flex justify-between items-center text-md text-slate-500 mb-3 print:mb-1 print:text-sm print:text-indigo-800">
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

// ==============================
// MAIN COMPONENT
// ==============================

const CustomerCV = () => {
  const { personal, summary, skillGroups, experience, education } = cvData;

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-12 font-sans text-slate-900 print:bg-white print:p-0">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-200 print:shadow-none print:border-none print:max-w-none print:w-full">
        <Header personal={personal} />

        <main className="p-8 md:p-12 print:p-0 print:pt-4">
          <section className="break-inside-avoid">
            <SectionTitle title="Professional Summary" icon="star" />
            <div className="text-slate-700 leading-relaxed text-lg print:text-sm print:leading-normal">
              {summary.map((para, i) => (
                <p key={i} className="mb-3 print:mb-2">{para}</p>
              ))}
            </div>
          </section>

          <section className="break-inside-avoid">
            <SectionTitle title="Key Skills" icon="briefcase" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:gap-6 print:grid-cols-2">
              {skillGroups.map((group, i) => (
                <div key={i} className="break-inside-avoid">
                  <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-tight print:text-sm print:mb-2">{group.title}</h3>
                  <ul className="list-disc ml-6 text-md text-slate-700 space-y-2 print:text-xs print:ml-4 print:space-y-0.5">
                    {group.skills.map((skill, j) => (
                      <li key={j}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle title="Professional Experience" icon="briefcase" />
            <div className="space-y-5 print:space-y-4">
              {experience.map((job, i) => (
                <ExperienceItem key={i} {...job} />
              ))}
            </div>
          </section>

          <section>
            <SectionTitle title="Education & Certifications" icon="star" />
            <div className="space-y-5 print:space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="break-inside-avoid p-4 rounded border bg-white border-slate-100 shadow-sm print:p-0 print:border-none print:shadow-none print:mb-3">
                  <div className="flex justify-between items-start print:mb-1">
                    <h3 className="text-lg font-bold text-slate-900 print:text-base">{edu.title}</h3>
                    <span className="text-sm font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded flex-shrink-0 print:bg-transparent print:px-0 print:py-0 print:text-slate-600">{edu.date}</span>
                  </div>
                  <p className="text-indigo-700 font-bold text-sm print:text-xs print:text-indigo-800">{edu.provider}</p>
                  <p className="text-slate-600 text-sm mt-2 italic print:text-xs print:mt-1">{edu.details}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="bg-slate-50 p-6 text-center text-sm text-slate-400 border-t border-slate-100 print:bg-white print:text-slate-500 print:p-0 print:text-xs">
          References available upon request.
        </footer>
      </div>
    </div>
  );
};

export default CustomerCV;