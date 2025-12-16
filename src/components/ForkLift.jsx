import React from 'react';

// --- Data Structure ---

const cvData = {
  personal: {
    name: "Darren Ikinepule",
    title: "Logistics & Warehouse Support Specialist",
    email: "darrenikinepule@outlook.co.nz",
    phone: "0204339983",
    location: "Auckland 1072",
  },
  summary: [
    "Reliable and energetic professional with a strong work ethic, transitioning from high volume hospitality management into logistics and warehouse support. Proven ability to remain calm under pressure, solve problems quickly, and maintain high standards in fast paced environments. Committed to accuracy, safety, and providing excellent service during the busy festive season."
  ],
  skills: {
    technical: [
      "Certified Forklift Operator: Counter Balance (LPG), Reach Electric, Stock Picker Electric, Pallet Truck Electric",
      "Inventory & Logistics: Detailed inventory records and accurate asset tracking for multi-location portfolios",
      "Customer Service: Strong interpersonal skills with professional feedback resolution",
      "Full Class 1 NZ Driver's Licence",
      "Safety & Compliance: Committed to accuracy and safety standards"
    ],
    core: [
      { category: "Key Strengths", items: ["Reliable and energetic work ethic", "Ability to remain calm under pressure", "Quick problem-solving skills", "High standard maintenance in fast-paced environments", "Team collaboration and leadership"] },
      { category: "Professional Qualities", items: ["Punctual and organized", "Self disciplined", "Detail oriented", "Safety conscious", "Customer focused"] },
    ],
    personal: ["Full Class 1 NZ Driver's Licence", "Strong team ethic and proactive attitude", "Reliable, punctual, organised, and self disciplined", "Committed to accuracy, safety, and excellent service"],
  },
  education: [
    {
      role: "Forklift Certification",
      company: "Certified Operator",
      location: "Auckland",
      dates: "2024",
      description: [
        "Counter Balance (LPG), Reach Electric, Stock Picker Electric, and Pallet Truck Electric",
      ],
    },
    {
      role: "Take2 Programme",
      company: "Software Development and Professional Skills",
      location: "Auckland",
      dates: "2024",
      description: [
        "Focused on developing professional habits, work ethic, and technical learning",
      ],
    },
  ],
  experience: [
    {
      role: "Property Manager",
      company: "Gardenia Trust LTD",
      location: "Auckland",
      dates: "10/2024 – Present",
      description: [
        "Maintained detailed inventory and records for a diverse portfolio of 7 properties",
        "Ensured accurate asset tracking and compliance across multiple locations",
        "Organized and scheduled a comprehensive network of tradespeople for efficient repairs and maintenance"
      ],
      isHighlight: true,
    },
    {
      role: "Head Chef",
      company: "Kohuora Cafe",
      location: "Auckland",
      dates: "05/2018 – 10/2022",
      description: [
        "Managed high volume, quality driven production standards in a fast paced environment",
        "Oversaw daily operations and staff to ensure consistent quality and customer retention"
      ]
    },
    {
      role: "Gourmet Production Chef",
      company: "Eat My Lunch",
      location: "Auckland",
      dates: "05/2016 – 05/2018",
      description: [
        "Maintained 99%+ quality standards through systematic quality control processes",
        "Resolved customer feedback and special requests efficiently and professionally"
      ]
    },
    {
      role: "Executive & Sous Chef",
      company: "Various Resorts & Hotels",
      location: "Multiple Locations",
      dates: "1995 – 2015",
      description: [
        "Managed teams of 15+ staff and oversaw complex operational tasks",
        "Optimized internal processes to increase efficiency and reduce waste"
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
    {path === 'graduationCap' && (
      <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v1.5L15 4.5V4.75A.75.75 0 0115.75 5h1.5A.75.75 0 0118 5.75V7.5h.75A.75.75 0 0119.5 8.25v2.25a.75.75 0 01-.75.75H18v1.5a.75.75 0 01-1.5 0v-1.5H15V15a.75.75 0 01-.75.75h-3A.75.75 0 0110.5 15v-1.5H9v-1.5H7.5V9.75h-.75A.75.75 0 016 9V7.5a.75.75 0 01.75-.75H9V5.75A.75.75 0 019.75 5h1.5A.75.75 0 0112 5.75V9h1.5V6a.75.75 0 011.5 0v3h-1.5v1.5h1.5v-1.5H18v1.5h-.75A.75.75 0 0116.5 12v-1.5a.75.75 0 01.75-.75h1.5V9H18V7.5a.75.75 0 01-.75-.75H15V5.25A.75.75 0 0114.25 4.5H12V3A.75.75 0 0112 2.25zM1.5 18v1.5a.75.75 0 001.5 0V18a.75.75 0 00-1.5 0zM1.5 15v1.5a.75.75 0 001.5 0V15a.75.75 0 00-1.5 0zM1.5 12v1.5a.75.75 0 001.5 0V12a.75.75 0 00-1.5 0zM1.5 9v1.5a.75.75 0 001.5 0V9a.75.75 0 00-1.5 0zM1.5 6v1.5a.75.75 0 001.5 0V6a.75.75 0 00-1.5 0zM1.5 3v1.5a.75.75 0 001.5 0V3a.75.75 0 00-1.5 0zM21 18v1.5a.75.75 0 001.5 0V18a.75.75 0 00-1.5 0zM21 15v1.5a.75.75 0 001.5 0V15a.75.75 0 00-1.5 0zM21 12v1.5a.75.75 0 001.5 0V12a.75.75 0 00-1.5 0zM21 9v1.5a.75.75 0 001.5 0V9a.75.75 0 00-1.5 0zM21 6v1.5a.75.75 0 001.5 0V6a.75.75 0 00-1.5 0zM21 3v1.5a.75.75 0 001.5 0V3a.75.75 0 00-1.5 0z" clipRule="evenodd" />
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

const ForkLift = () => {
  // Add print styles to limit to 2 pages strictly
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          margin: 0.4in;
          font-size: 10pt;
          line-height: 1.2;
        }
        .forklift-cv {
          max-height: 100%;
          page-break-after: auto;
          background: white !important;
        }
        .forklift-cv * {
          page-break-inside: avoid;
        }
        .forklift-cv .cv-container {
          box-shadow: none !important;
          max-width: 100%;
          background: white !important;
          border: none !important;
        }
        .forklift-cv .cv-wrapper {
          margin: 0;
          padding: 0;
        }
        .forklift-cv header {
          padding: 6px 0 !important;
          margin: 0 0 8px 0 !important;
          background: #374151 !important;
          color: white !important;
          border-radius: 0 !important;
          page-break-inside: avoid;
        }
        .forklift-cv header h1 {
          font-size: 16pt !important;
          margin: 2px 0 !important;
          padding: 0 !important;
        }
        .forklift-cv header p {
          font-size: 10pt !important;
          margin: 2px 0 !important;
          padding: 0 !important;
        }
        .forklift-cv main {
          padding: 0 !important;
          margin: 0 !important;
        }
        .forklift-cv .summary-section,
        .forklift-cv .skills-section,
        .forklift-cv .education-section,
        .forklift-cv .work-history-section {
          margin: 0 0 6px 0 !important;
          padding: 0 !important;
          page-break-inside: avoid;
        }
        .forklift-cv h2 {
          font-size: 11pt !important;
          font-weight: bold !important;
          border-bottom: 1px solid #3b82f6 !important;
          padding-bottom: 2px !important;
          margin: 6px 0 4px 0 !important;
        }
        .forklift-cv h3 {
          font-size: 10pt !important;
          font-weight: bold !important;
          margin: 4px 0 2px 0 !important;
          padding: 0 !important;
        }
        .forklift-cv p {
          margin: 0 !important;
          padding: 0 !important;
          font-size: 10pt !important;
          line-height: 1.2 !important;
        }
        .forklift-cv .text-base {
          font-size: 10pt !important;
        }
        .forklift-cv .text-lg {
          font-size: 10pt !important;
        }
        .forklift-cv .text-sm {
          font-size: 9pt !important;
        }
        .forklift-cv .text-xl {
          font-size: 11pt !important;
        }
        .forklift-cv .text-2xl {
          font-size: 12pt !important;
        }
        .forklift-cv .text-4xl {
          font-size: 14pt !important;
        }
        .forklift-cv .experience-item,
        .forklift-cv .education-item {
          margin: 3px 0 !important;
          padding: 2px 0 !important;
          page-break-inside: avoid;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }
        .forklift-cv ul {
          margin: 1px 0 1px 12px !important;
          padding: 0 !important;
          list-style: disc;
        }
        .forklift-cv li {
          margin: 1px 0 !important;
          padding: 0 !important;
          font-size: 9.5pt !important;
          line-height: 1.1 !important;
        }
        .forklift-cv .flex {
          display: flex;
        }
        .forklift-cv .justify-between {
          justify-content: space-between;
        }
        .forklift-cv .italic {
          font-style: italic;
        }
        .forklift-cv .space-y-3 {
          display: block;
        }
        .forklift-cv .space-y-3 > p {
          margin: 2px 0 !important;
          font-size: 9.5pt !important;
        }
        .forklift-cv .skills-grid {
          display: block !important;
        }
        .forklift-cv .grid-cols-2 {
          display: block !important;
        }
        .forklift-cv .mt-6 {
          margin-top: 3px !important;
        }
        .forklift-cv .mt-4 {
          margin-top: 2px !important;
        }
        .forklift-cv .mt-2 {
          margin-top: 2px !important;
        }
        .forklift-cv .mb-6,
        .forklift-cv .mb-4,
        .forklift-cv .mb-2 {
          margin-bottom: 2px !important;
        }
        .forklift-cv .pt-6,
        .forklift-cv .pt-4,
        .forklift-cv .pt-2 {
          padding-top: 2px !important;
        }
        .forklift-cv .gap-6 {
          gap: 0 !important;
        }
        .forklift-cv .shadow-md,
        .forklift-cv .shadow-xl,
        .forklift-cv .shadow-2xl {
          box-shadow: none !important;
        }
        .forklift-cv .rounded-lg,
        .forklift-cv .rounded-t-lg {
          border-radius: 0 !important;
        }
        .forklift-cv .space-y-1 > * {
          margin: 0.5px 0 !important;
        }
        .forklift-cv .space-y-0.5 > * {
          margin: 0px 0 !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

         const { personal, summary, skills, education, experience } = cvData;

  return (
    <div className="forklift-cv min-h-screen bg-gray-100 p-4 sm:p-8 font-sans">
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
            
            {/* Education Section (Moved above Work History) */}
            <div className="education-section pt-4">
              <SectionTitle title="Education" icon="graduationCap" />
              <div className="space-y-4">
                {education.map((item, index) => (
                  <ExperienceItem key={index} {...item} />
                ))}
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


export default ForkLift;