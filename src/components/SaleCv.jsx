import React from 'react';

// --- Data Structure ---
const cvData = {
  personal: {
    name: "Sale le mamea",
    title: "Professional Executive Chef | Sales & Business Development",
    email: "darrenikinepule@outlook.co.nz",
    phone: "0204339983",
    location: "Auckland 1072",
  },
  summary: [
    "Accomplished Executive Chef with 20+ years of culinary excellence and demonstrated success in high-volume food production environments. Proven expertise in team leadership, operational management, and strategic business development. Skilled at building profitable F&B operations, driving revenue growth, and delivering exceptional guest experiences in premium hospitality settings. Now leveraging extensive culinary and business acumen to lead sales initiatives and expand market presence in the hospitality sector."
  ],
  skills: {
    technical: [
      "Executive Chef & Menu Development: Award-winning culinary direction and innovative menu creation",
      "F&B Operations Management: Large-scale food production, cost control, and inventory optimization",
      "Team Leadership: Managed teams of 15+ staff across international high-end establishments",
      "Business Development: Revenue growth strategies, P&L management, and operational profitability",
      "Quality Assurance: Consistently maintained 95%+ guest satisfaction and quality standards",
    ],
    core: [
      { 
        category: "Culinary Expertise", 
        items: [
          "Thai & International Cuisine Mastery", 
          "Fine Dining Menu Engineering", 
          "Food Cost Management & Profitability", 
          "Kitchen Operations & Health/Safety Compliance"
        ] 
      },
      { 
        category: "Business & Sales Skills", 
        items: [
          "Strategic Relationship Building & Account Management", 
          "Revenue Optimization & P&L Responsibility", 
          "Cross-functional Team Leadership & Development", 
          "Client Satisfaction & Retention (95%+ success rate)"
        ] 
      },
      { 
        category: "Professional Attributes", 
        items: [
          "Visionary Leadership & Strategic Planning", 
          "Problem Solving Under Pressure", 
          "Adaptability & Cultural Integration", 
          "Reliability, Integrity & Professional Excellence"
        ] 
      },
    ],
    personal: [
      "Strong communicator with proven ability to build lasting client relationships", 
      "Results-driven professional committed to exceeding targets and objectives", 
      "Innovative thinker with track record of implementing successful operational improvements", 
      "Passionate about premium food quality and exceptional service delivery",
      "Multilingual capabilities and international experience across Asia-Pacific regions"
    ],
  },
  experience: [
    {
      role: "Executive Chef & Hospitality Consultant",
      company: "Independent Practice",
      location: "Auckland, New Zealand",
      dates: "2023 - Present",
      description: [
        "Providing strategic F&B consulting to premium hospitality venues and resorts seeking operational excellence.",
        "Developing comprehensive culinary programs and revenue optimization strategies for hospitality partners.",
        "Building strong B2B relationships with venue owners and operators to deliver customized solutions.",
        "Achieved 40% average improvement in F&B profitability for consulting clients."
      ],
      isHighlight: true
    },
    {
      role: "Executive Chef & Operations Director",
      company: "Chaweng Blue Lagoon Resort",
      location: "Koh Samui, Thailand",
      dates: "01/2005 - 01/2015",
      description: [
        "Led culinary team of 25+ staff managing daily food production for 150+ guest capacity resort.",
        "Developed and executed award-winning Thai and international menus generating 35% revenue increase.",
        "Achieved 96% guest satisfaction rating through consistent quality management and team training.",
        "Managed $2.5M+ annual F&B budget with 28% cost efficiency improvement over tenure."
      ]
    },
    {
      role: "Executive Sous Chef",
      company: "Impiana Resort and Spa",
      location: "Koh Samui, Thailand",
      dates: "06/2002 - 06/2004",
      description: [
        "Directed daily kitchen operations for premium 4-star beachfront resort with 200+ seat dining capacity.",
        "Trained and mentored 18-person kitchen brigade on fine dining standards and food safety compliance.",
        "Implemented cost optimization initiatives resulting in 22% reduction in food waste.",
        "Collaborated with front-of-house team to ensure seamless guest experiences and operational excellence."
      ]
    },
    {
      role: "Head Chef",
      company: "Kohuora Cafe",
      location: "Auckland, New Zealand",
      dates: "05/2018 - 10/2022",
      description: [
        "Managed all aspects of kitchen operations for high-volume cafe with 500+ daily covers.",
        "Designed and executed daily menus driving consistent 4.8/5 online ratings and customer loyalty.",
        "Led operational team that increased daily volume by 80% while maintaining quality standards.",
        "Pioneered sustainable sourcing practices and local supplier partnerships reducing costs by 18%."
      ]
    },
    {
      role: "Gourmet Production Chef",
      company: "Eat My Lunch",
      location: "Auckland, New Zealand",
      dates: "05/2016 - 05/2018",
      description: [
        "Oversaw production kitchen managing 5,000+ meals daily for corporate catering and retail distribution.",
        "Maintained 99.2% quality consistency and on-time delivery across multiple distribution channels.",
        "Implemented production process improvements increasing output by 25% without quality compromise.",
        "Built relationships with key corporate clients resulting in $500K+ annual contract renewals."
      ]
    }
  ],
};

// --- Utility Components ---

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

const Header = ({ personal }) => (
  <header className="bg-slate-800 text-white px-8 py-6 rounded-t-lg shadow-xl border-b-4 border-blue-500 print:shadow-none print:px-0 print:py-6 print:bg-white print:text-slate-900 print:border-blue-600">
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
          <Icon path="location" className="w-4 h-4 text-blue-400 print:text-blue-600" />
          <span>{personal.location}</span>
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

// --- Main App Component ---

const SaleCv = () => {
  const { personal, summary, skills, experience } = cvData;

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
            <SectionTitle title="Core Competencies" icon="briefcase" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 print:gap-8 print:grid-cols-2">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-tight print:text-sm">Technical Excellence</h3>
                <ul className="list-disc ml-6 text-md text-slate-700 space-y-2 print:text-sm print:ml-4 print:space-y-1">
                  {skills.technical.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>

                <div className="mt-6 print:mt-4">
                  <h3 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-tight print:text-sm">Key Strengths</h3>
                  <ul className="list-disc ml-6 text-md text-slate-700 space-y-2 print:text-sm print:ml-4 print:space-y-1">
                    {skills.personal.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
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
            <SectionTitle title="Professional Experience" icon="briefcase" />
            <div className="space-y-4 print:space-y-3">
              {experience.map((job, index) => (
                <ExperienceItem key={index} {...job} />
              ))}
            </div>
          </section>
        </main>
        
        <footer className="bg-slate-50 p-6 text-center text-sm text-slate-400 border-t border-slate-100 print:bg-white print:text-slate-500">
          References and detailed portfolio available upon request.
        </footer>
      </div>
    </div>
  );
};

export default SaleCv;
