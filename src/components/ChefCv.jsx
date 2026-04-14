import React from "react";

// --- Chef CV Data ---
const cvData = {
  personal: {
    name: "Darren Ikinepule",
    title: "Culinary Professional",
    email: "darrenikinepule@outlook.co.nz",
    phone: "0204339983",
    location: "Auckland 1072",
    linkedin: "https://www.linkedin.com/in/darren-ikinepule-792914335/",
  },

  summary: [
    "Highly accomplished culinary professional with 20+ years of international kitchen leadership. Proven expertise in high volume operations (250–350 daily covers), menu development, staff training, and consistently achieving 95%+ guest satisfaction and 99%+ quality standards. Food Safety Certified (NCEA Level 3) with strong operational and leadership capabilities.",
  ],

  skills: {
    culinary: [
      "Menu Development & Refinement",
      "High Volume Production 250–350 covers",
      "Mise en place & Section Oversight",
      "Hotel & Room Service Operations",
    ],
    operations: [
      "Inventory Management & Stock Rotation",
      "Food Safety & Hygiene (NCEA Level 3 Certified)",
      "Quality Control Systems (99%+ Standard)",
      "Working Under Pressure",
    ],
    certifications: [
      "Food Safety Certificate (NCEA Level 3)",
      "Hospitality Certificates (75/1, 75/2 - A.I.T)",
    ],
    leadership: [
      "Staff Training and Mentorship",
      "Performance Management",
      "Team Leadership (15+ staff)",
      "Conflict Resolution",
    ],
  },

  experience: [
    {
      role: "Relief Chef / Operations (Contract)",
      company: "TRN (The Recruitment Network)",
      location: "Auckland",
      dates: "2026 – Present",
      description: [
        "Managing operational service delivery across high pressure Auckland environments on short notice.",
        "Ensuring site safety and strict adherence to health, security, and data sensitive protocols in diverse settings.",
        "Adapting rapidly to new team structures and site layouts while maintaining professional conduct and reliable service.",
        "Responsible for operational oversight and maintaining secure, orderly work zones to ensure service continuity.",
      ],
    },

    {
      role: "Property Manager / Operations",
      company: "Gardenia Trust LTD",
      location: "Auckland",
      dates: "10/2024 – 2026",
      description: [
        "Serve as the primary point of contact for owner and a diverse range of tenants, resolving service and system issues quickly to keep operations running smoothly.",
        "Maintain high integrity records and compliance documents, ensuring data accuracy for residential and commercial assets.",
        "Coordinate with external contractors and stakeholders to meet project timelines and essential service requirements.",
      ],
    },

    {
      role: "Head Chef",
      company: "Kohuora Cafe",
      location: "Auckland",
      dates: "05/2018 – 10/2022",
      description: [
        "Developed and refined the entire menu, driving product innovation that contributed to an 80% increase in daily lunch covers and significantly improved customer retention.",
        "Supervised kitchen operations, leading staff training and scheduling to ensure smooth service during peak hours.",
      ],
    },
    {
      role: "Gourmet Production Chef",
      company: "Eat My Lunch",
      location: "Auckland",
      dates: "05/2016 – 05/2018",
      description: [
        "Maintained 99%+ quality standards through systematic quality control processes across high volume food production.",
        "Efficiently resolved customer feedback and managed special dietary requests in a professional and timely manner.",
      ],
    },
    {
      role: "Executive Chef",
      company: "Chaweng Blue Lagoon Resort",
      location: "Thailand",
      dates: "01/2005 – 01/2015",
      description: [
        "Led and mentored a team of 15+ staff through comprehensive training and performance management programs.",
        "Achieved and maintained 95%+ guest satisfaction through systematic quality improvement initiatives across all resort dining outlets.",
      ],
    },
    {
      role: "Executive Sous Chef",
      company: "Impiana Resort And Spa",
      location: "Koh Samui, Thailand",
      dates: "06/2002 – 06/2004",
      description: [
        "Managed a high volume of operational tasks and projects simultaneously, handling 250–350 daily covers including all day dining and group set menus.",
        "Oversaw all restaurants mise en place and service, and improved internal processes to significantly increase kitchen efficiency and reduce food waste by 15%.",
      ],
    },
    {
      role: "Sous Chef",
      company: "Auckland Club",
      location: "Auckland",
      dates: "01/2000 – 01/2001",
      description: [
        "Managed private club catering and high end special event dining experiences, ensuring premium standards were met for exclusive clientele.",
        "Developed innovative menu items, which directly contributed to increasing guest return rates.",
      ],
    },
    {
      role: "Sous Chef",
      company: "Hyatt Hotel Auckland",
      location: "Auckland",
      dates: "11/1995 – 01/2000",
      description: [
        "Chef in charge of Crostini Cafe all day dining, lunch and dinner buffet, alacarte, breakfast buffet and room service. Planned and directed high volume food preparation in fast paced environment.",
        "Selected to represent Hyatt Auckland internationally (Saudi Arabia, Taipei, Singapore), showcasing New Zealand cuisine and culinary standards globally.",
      ],
    },

  ],
};

// --- Components (Layout Preserved) ---

const Icon = ({ path, className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    {path === "mail" && (
      <path d="M1.5 8.67v8.58a1.5 1.5 0 001.5 1.5h17a1.5 1.5 0 001.5-1.5V8.67l-8.88 5.06a.75.75 0 01-.76 0L1.5 8.67z" />
    )}
    {path === "phone" && (
      <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />
    )}
    {path === "location" && (
      <path d="M11.54 22.351l.07.04.28.16a1 1 0 001.22 0l.28-.16.07-.04a41.8 41.8 0 003.525-6.736c.2-.4.2-.9 0-1.3a41.8 41.8 0 00-3.525-6.736l-.07-.04a.75.75 0 00-.76 0l-.07.04a41.8 41.8 0 00-3.525 6.736c-.2.4-.2.9 0 1.3a41.8 41.8 0 003.525 6.736zm-1.04-6.601a3 3 0 114.5-4.5 3 3 0 01-4.5 4.5z" />
    )}
    {path === "briefcase" && (
      <path d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c3.864.5 6.75 3.79 6.75 7.645v6.75a3 3 0 01-3 3h-15a3 3 0 01-3-3v-6.75c0-3.855 2.886-7.145 6.75-7.645V5.25z" />
    )}
    {path === "linkedin" && (
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    )}
    {path === "star" && (
      <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
    )}
  </svg>
);

const Header = ({ personal }) => (
  <header className="bg-blue-600 text-white px-8 py-6 rounded-t-lg shadow-xl border-b-4 border-blue-400 print:shadow-none print:px-0 print:py-6 print:bg-white print:text-slate-900 print:border-blue-600">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center print:flex-row print:items-center">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight print:text-3xl">
          {personal.name}
        </h1>
        <p className="text-xl font-medium text-blue-200 mt-1 uppercase tracking-wider print:text-blue-700 print:text-lg">
          {personal.title}
        </p>
      </div>
      <div className="mt-4 md:mt-0 text-sm md:text-right space-y-1 print:mt-0 print:text-xs font-medium">
        <ContactItem
          icon="mail"
          text={personal.email}
          link={`mailto:${personal.email}`}
        />
        <ContactItem
          icon="phone"
          text={personal.phone}
          link={`tel:${personal.phone}`}
        />
        <ContactItem icon="location" text={personal.location} />
        <ContactItem icon="linkedin" text="LinkedIn" link={personal.linkedin} />
      </div>
    </div>
  </header>
);

const ContactItem = ({ icon, text, link }) => (
  <div className="flex items-center space-x-2 justify-start md:justify-end">
    <Icon
      path={icon}
      className="w-4 h-4 text-blue-200 print:text-blue-600 flex-shrink-0"
    />
    {link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-200 transition duration-150 border-b border-transparent hover:border-blue-200 print:hover:text-blue-600"
      >
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </div>
);

const SectionTitle = ({ title, icon }) => (
  <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-3 flex items-center space-x-2 text-slate-800 pt-6 print:pt-2 print:pb-1 print:text-lg print:border-slate-300 break-after-avoid print:mb-2">
    <Icon path={icon} className="w-6 h-6 text-blue-600 print:w-5 print:h-5" />
    <span>{title}</span>
  </h2>
);

const ExperienceItem = ({ role, company, location, dates, description }) => (
  <div className="experience-item mb-4 p-5 rounded border break-inside-avoid print:mb-2.5 print:p-0 print:border-none bg-white border-blue-100 shadow-sm">
    <div className="flex justify-between items-start print:mb-0">
      <h3 className="text-xl font-bold text-slate-900 print:text-base">{role}</h3>
      {dates && (
        <span className="text-sm font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded flex-shrink-0 print:bg-transparent print:px-0 print:py-0 print:text-xs print:text-slate-600">
          {dates}
        </span>
      )}
    </div>
    <div className="flex justify-between items-center text-md text-slate-500 mb-2 print:mb-0.5 print:text-xs print:text-blue-800">
      <p className="font-bold">{company}</p>
      <p className="italic">{location}</p>
    </div>
    <ul className="list-disc ml-6 text-slate-700 text-md space-y-1 print:text-xs print:ml-4 print:space-y-0.5">
      {description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const SkillBadge = ({ text }) => (
  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm print:bg-transparent print:border print:border-blue-300 print:text-blue-900 print:text-xs">
    {text}
  </span>
);

const ChefCv = () => {
  const { personal, summary, skills, experience } = cvData;

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-12 font-sans text-slate-900 print:bg-white print:p-0">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-200 print:shadow-none print:border-none print:max-w-none print:w-full">
        <Header personal={personal} />

        <main className="p-6 md:p-8 print:p-0 print:pt-1.5">
          {/* Professional Summary */}
          <section className="break-inside-avoid">
            <SectionTitle title="Professional Summary" icon="star" />
            <div className="text-slate-700 leading-relaxed text-lg print:text-xs print:leading-snug space-y-2">
              {summary.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          {/* Skills & Strengths */}
          <section className="break-inside-avoid">
            <SectionTitle
              title="Culinary & Management Skills"
              icon="briefcase"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:gap-3 print:grid-cols-2">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase tracking-tight print:text-xs print:mb-1">
                  Culinary Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.culinary.map((skill, i) => (
                    <SkillBadge key={i} text={skill} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase tracking-tight print:text-xs print:mb-1">
                  Kitchen Operations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.operations.map((skill, i) => (
                    <SkillBadge key={i} text={skill} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase tracking-tight print:text-xs print:mb-1">
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.certifications.map((skill, i) => (
                    <SkillBadge key={i} text={skill} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase tracking-tight print:text-xs print:mb-1">
                  Leadership & Management
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.leadership.map((skill, i) => (
                    <SkillBadge key={i} text={skill} />
                  ))}
                </div>
              </div>


            </div>
          </section>

          {/* Work History */}
          <section>
            <SectionTitle title="Professional Experience" icon="briefcase" />
            <div className="space-y-3 print:space-y-1.5">
              {experience.map((job, index) => (
                <ExperienceItem key={index} {...job} />
              ))}
            </div>
          </section>
        </main>

        <footer className="bg-slate-50 p-4 text-center text-xs text-slate-400 border-t border-slate-100 print:bg-white print:text-slate-500 print:p-2 print:text-xs">
          References available upon request.
        </footer>
      </div>
    </div>
  );
};

export default ChefCv;
