import React from 'react';

// --- Data Structure ---

const cvData = {
  personal: {
    name: "Darren Ikinepule",
    title: "Client Support & Web Development",
    email: "darrenikinepule@outlook.co.nz",
    phone: "0204339983",
    location: "Auckland 1072",
  },
  summary: [
    "While my background is in hospitality, where I spent years as a chef, I'm now passionate about moving into the tech and client support space. Working in fast paced kitchens taught me to stay calm under pressure, solve problems quickly, and communicate clearly with a team. Skills I know are crucial in client support.",
    "Living in Thailand and extensive travel have given me adaptability and a broad perspective, helping me connect with people from different backgrounds. I'm excited about web development; it combines my love of problem solving with technology. I'm eager to bring my work ethic, attention to detail, and enthusiasm to a team while continuing to grow in this industry."
  ],
  skills: {
    technical: [
      "AI Prompting",
      "Web Development: HTML5, CSS3, JavaScript, React.js, Node.js, Express.js",
      "Databases: MongoDB, MySQL",
      "Tools: Git, GitHub, VS Code",
      "Other: Responsive Web Design, REST APIs, Agile Collaboration"
    ],
    core: [
      { category: "Customer Service & Interpersonal Skills", items: ["Excellent communication and interpersonal skills", "Strong problem solving abilities", "Attention to detail", "Initiative and independent work ethic", "Team collaboration"] },
      { category: "Management Skills", items: ["Team leadership", "Staff scheduling", "Performance management"] },
    ],
    personal: ["A Full Class 1 NZ Driver's Licence", "A strong team ethic and proactive attitude", "Reliable, punctual, organised, and self disciplined", "Completed an intensive programme combining technical learning with professional and personal development."],
  },
  experience: [
    {
      role: "Career Transition & Skills Development",
      company: "Take2 Programme Software Development and Professional Skills",
      location: "Auckland",
      dates: "2024 - Present",
      description: [
        "A full time, project based learning programme designed to help learners gain industry relevant technical skills, develop professional habits, and prepare for meaningful employment.",
        "Hands on coding and web development projects",
        "Built an App: Fuel vs Fire demonstrating frontend and backend capabilities.",
      ],
      isHighlight: true, // Visually highlight this section
    },
    {
      role: "Property Manager",
      company: "Gardenia Trust LTD",
      location: "Auckland",
      dates: "10/2024 - Present",
      description: [
        "Managed a diverse portfolio encompassing eight properties across New Zealand and the Pacific Islands, including: ",
        "4 commercial buildings and 1 residential rental property in Auckland region, 2 international Airbnb properties.",
        "Maintained detailed inventory and records for the multi-location portfolio, ensuring compliance and accurate asset tracking.",
        "Organised and scheduled a comprehensive network of tradespeople for timely and efficient repairs, landscaping, and maintenance.",
        
      ]
    },
    {
      role: "Head Chef",
      company: "Kohuora Cafe",
      location: "Auckland",
      dates: "05/2018 - 10/2022",
      description: [
        "Developed and refined the entire menu, driving product innovation that contributed to an 80% increase in daily lunch covers and significantly improved customer retention.",
      ]
    },
    {
      role: "Gourmet Production Chef",
      company: "Eat My Lunch",
      location: "Auckland",
      dates: "05/2016 - 05/2018",
      description: [
        "Maintained 99%+ quality standards through systematic quality control processes.",
        "Resolved customer feedback and special requests efficiently and professionally.",
      ]
    },
    {
      role: "Executive Chef",
      company: "Chaweng Blue Lagoon Resort",
      location: "Thailand",
      dates: "01/2005 - 01/2008",
      description: [
        "Led a team of 15+ staff through training and performance management programs.",
        "Achieved 95%+ guest satisfaction through systematic quality improvement.",
      ]
    },
    {
      role: "Executive Sous Chef",
      company: "Impiana Resort And Spa",
      location: "Koh Samui, Thailand",
      dates: "06/2002 - 06/2004",
      description: [
        "Managed a high volume of operational tasks with strong multi-tasking skills.",
        "Supported and improved internal processes to increase kitchen efficiency and reduce food waste.",
      ]
    },
    {
      role: "Sous Chef",
      company: "Auckland Club",
      location: "Auckland",
      dates: "01/2000 - 01/2001",
      description: [
        "Managed private club catering and special event dining experiences.",
        "Developed innovative menu items, increasing guest return rates.",
      ]
    },
    {
      role: "Sous Chef",
      company: "Hyatt Hotel Auckland",
      location: "Auckland",
      dates: "11/1995 - 01/2000",
      description: [
        "Selected to represent Hyatt Auckland internationally (Saudi Arabia, Taipei, Singapore), showcasing New Zealand cuisine and culinary standards.",
      ]
    },
  ],
};

// --- Utility Components (using inline SVGs instead of lucide-react) ---

const Icon = ({ path, className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    {path === 'mail' && (
      <>
        <path d="M1.5 8.67v8.58a1.5 1.5 0 001.5 1.5h17a1.5 1.5 0 001.5-1.5V8.67l-8.88 5.06a.75.75 0 01-.76 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </>
    )}
    {path === 'phone' && (
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    )}
    {path === 'location' && (
      <path fillRule="evenodd" d="M11.54 22.351l.07.04.28.16a1 1 0 001.22 0l.28-.16.07-.04a41.8 41.8 0 003.525-6.736c.2-.4.2-.9 0-1.3a41.8 41.8 0 00-3.525-6.736l-.07-.04a.75.75 0 00-.76 0l-.07.04a41.8 41.8 0 00-3.525 6.736c-.2.4-.2.9 0 1.3a41.8 41.8 0 003.525 6.736zm-1.04-6.601a3 3 0 114.5-4.5 3 3 0 01-4.5 4.5z" clipRule="evenodd" />
    )}
    {path === 'briefcase' && (
      <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c3.864.5 6.75 3.79 6.75 7.645v6.75a3 3 0 01-3 3h-15a3 3 0 01-3-3v-6.75c0-3.855 2.886-7.145 6.75-7.645V5.25zM15 6a1.5 1.5 0 00-1.5-1.5h-3A1.5 1.5 0 009 6v.205c3.864.5 6.75 3.79 6.75 7.645v6.75a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-6.75c0-3.855 2.886-7.145 6.75-7.645V6z" clipRule="evenodd" />
    )}
    {path === 'star' && (
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    )}
  </svg>
);

// --- Main Components ---

const Header = ({ personal }) => (
  <header className="bg-gray-700 text-white px-8 py-6 rounded-t-lg shadow-xl">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight font-serif">{personal.name}</h1>
        <p className="text-xl font-light text-blue-300 mt-1">{personal.title}</p>
      </div>
      <div className="mt-4 md:mt-0 text-sm md:text-right space-y-1">
        <ContactItem icon="mail" text={personal.email} link={`mailto:${personal.email}`} />
        <ContactItem icon="phone" text={personal.phone} link={`tel:${personal.phone}`} />
        <ContactItem icon="location" text={personal.location} />
      </div>
    </div>
  </header>
);

const ContactItem = ({ icon, text, link }) => (
  <div className="flex items-center space-x-2">
    <Icon path={icon} className="w-4 h-4 text-blue-300 flex-shrink-0" />
    {link ? (
      <a href={link} className="hover:text-blue-200 transition duration-150">
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </div>
);

const SectionTitle = ({ title, icon }) => (
  <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-1 mb-4 flex items-center space-x-2 text-gray-800 pt-6">
    <Icon path={icon} className="w-5 h-5 text-blue-600" />
    <span>{title}</span>
  </h2>
);

const TechnicalSkills = ({ skills }) => (
  <ul className="mt-2 list-disc ml-5 text-sm text-gray-700 space-y-1">
    {skills.map((skill) => (
      <li key={skill}>{skill}</li>
    ))}
  </ul>
);

const ExperienceItem = ({ role, company, location, dates, description, isHighlight }) => (
  <div className={`experience-item mb-6 p-4 rounded-lg shadow-md transition duration-300 ${isHighlight ? 'bg-blue-50 border-l-4 border-blue-600' : 'bg-white border-l-4 border-gray-200'}`}>
    <div className="flex justify-between items-start">
      <h3 className={`text-lg font-bold ${isHighlight ? 'text-blue-800' : 'text-gray-800'}`}>{role}</h3>
      <span className={`text-sm font-semibold ${isHighlight ? 'text-blue-600' : 'text-gray-600'} flex-shrink-0`}>{dates}</span>
    </div>
    <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
      <p className="font-medium italic">{company}</p>
      <p>{location}</p>
    </div>
    <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
      {description.map((point, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
      ))}
    </ul>
  </div>
);

// --- Main App Component ---

const App = () => {
  const { personal, summary, skills, experience } = cvData;

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 font-sans">
      <div className="cv-container max-w-4xl mx-auto bg-white rounded-lg shadow-2xl">
        <div className="cv-wrapper">
        
          {/* Header */}
          <Header personal={personal} />

          <main className="p-6 md:p-8">

            {/* Professional Summary */}
            <div className="summary-section">
              <SectionTitle title="Professional Summary" icon="star" />
              <div className="space-y-3 text-gray-700 leading-relaxed text-base italic">
                {Array.isArray(summary) ? (
                  summary.map((para, i) => <p key={i}>{para}</p>)
                ) : (
                  <p>{summary}</p>
                )}
              </div>
            </div>

            {/* Skills Section */}
            <div className="skills-section">
              <SectionTitle title="Skills" icon="briefcase" />
              
              <div className="skills-grid grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Technical Skills */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Technical Skills</h3>
                  <TechnicalSkills skills={skills.technical} />

                  {/* General & Personal */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-1">General & Personal</h3>
                    <ul className="list-disc ml-5 text-sm text-gray-700 space-y-0.5">
                      {skills.personal.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                </div>

                {/* Core Skills */}
                <div className="space-y-4">
                  {skills.core.map((section, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold text-gray-700 mb-1">{section.category}</h3>
                      <ul className="list-disc ml-5 text-sm text-gray-700 space-y-0.5">
                        {section.items.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Work History */}
            <div className="work-history-section pt-4">
              <SectionTitle title="Work History" icon="briefcase" />
              <div className="space-y-4">
                {experience.map((job, index) => (
                  <ExperienceItem key={index} {...job} />
                ))}
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default App;

