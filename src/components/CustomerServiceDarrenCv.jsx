import React from 'react';

// --- Data Structure ---
const cvData = {
  personal: {
    name: "Darren Ikinepule",
    title: "Customer Service & Operations Specialist",
    email: "darrenikinepule@outlook.co.nz",
    phone: "0204339983",
    linkedin: "https://www.linkedin.com/in/darren-ikinepule-792914335/"
  },
  summary: [
    "I have spent my career working in busy, high pressure environments where clear communication and staying calm are essential. From leading kitchen teams to managing property portfolios, I know how to handle different personalities and solve problems on the spot.",
    "I am looking for a customer facing role where I can use my experience to help a team run smoothly and ensure people get the service they need without the fuss."
  ],
  skills: {
    admin: [
      { category: "Direct Communication", description: "Clear, professional interaction with clients and contractors" },
      { category: "Digital Tools", description: "Practical use of Excel, AI, and asset tracking systems" },
      { category: "Problem Solving", description: "Resolving maintenance issues and customer feedback quickly" },
      { category: "Technical Basics", description: "Troubleshooting hardware and software faults" }
    ],
    service: [
      "Record of 95%+ guest satisfaction in fast paced environments",
      "Experience handling special requests and resolving complaints professionally",
      "Adaptable and comfortable working with people from all backgrounds",
      "Full Class 1 NZ Driver's Licence",
      "Certified Forklift Operator: Counter Balance (LPG), Reach, Stock Picker, Pallet Truck"
    ],
    habits: [
      "High level of punctuality and team reliability",
      "Hands on approach to daily tasks and independent work",
      "Background in staff scheduling and performance management",
      "Consistent attention to detail with records and inventory"
    ]
  },
  experience: [
    {
      role: "Relief Chef / Operations (Contract)",
      company: "TRN",
      location: "Auckland",
      dates: "2026 - Present",
      description: [
        "Managing operational service delivery across high pressure Auckland environments on short notice.",
        "Ensuring site safety and strict adherence to health, security, and data-sensitive protocols in diverse settings.",
        "Adapting rapidly to new team structures and site layouts while maintaining professional conduct and reliable service.",
        "Responsible for operational oversight and maintaining secure, orderly work zones to ensure service continuity."
      ]
    },
    {
      role: "Property Manager / Operations",
      company: "Gardenia Trust LTD",
      location: "Auckland",
      dates: "10/2024 - 2026",
      description: [
        "Manage 7 properties across New Zealand and the Pacific Islands, including commercial and residential rentals.",
        "Coordinate with owner and a network of tradespeople to ensure repairs and maintenance are done on time.",
        "Keep detailed records and inventory to ensure the portfolio stays compliant and organised.",
        "Fix system faults and technical issues to keep data and records accurate."
      ]
    },
    {
      role: "Executive Chef / Service Management",
      company: "Various",
      location: "NZ & Thailand",
      dates: "1995 - 2022",
      description: [
        "Led teams of 15+ in busy environments, keeping standards high and solving problems as they happened.",
        "Achieved 95%+ guest satisfaction through consistent quality control.",
        "Represented Hyatt Auckland internationally, maintaining high standards of service in diverse settings.",
        "Improved internal processes to cut down on waste and make the team more efficient."
      ]
    }
  ],
  education: [
    {
      title: "Professional Skills & Tech Immersion",
      institution: "Take2 Programme",
      location: "Auckland",
      year: "2024",
      description: [
        "Completed a full time programme focused on industry standard technical skills and professional habits.",
        "Applied logical problem solving to modern digital tools and task management."
      ]
    }
  ]
};

// --- Utility Components ---
const Icon = ({ path, className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    {path === 'mail' && <path d="M1.5 8.67v8.58a1.5 1.5 0 001.5 1.5h17a1.5 1.5 0 001.5-1.5V8.67l-8.88 5.06a.75.75 0 01-.76 0L1.5 8.67z" />}
    {path === 'phone' && <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />}
    {path === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
    {path === 'star' && <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />}
    {path === 'briefcase' && <path d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c3.864.5 6.75 3.79 6.75 7.645v6.75a3 3 0 01-3 3h-15a3 3 0 01-3-3v-6.75c0-3.855 2.886-7.145 6.75-7.645V5.25z" />}
    {path === 'graduation' && <path d="M4.26 10.147a60.436 60.436 0 00-2.625.027A48.864 48.864 0 013.751 20.848c4.972 4.923 10.952 7.82 17.552 7.82c1.675 0 3.31-.184 4.907-.577l-4.069-3.341A6 6 0 00 6 6.75a6 6 0 00-2.683 11.397M9 12.75h4.5M12 15h3" />}
    {path === 'checkmark' && <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 15l-5-5 1.414-1.414L10 14.172l7.071-7.071L18.485 8.515 10 17z" />}
  </svg>
);

const Header = ({ personal }) => (
  <header className="bg-slate-800 text-white px-8 py-8 shadow-xl border-b-4 border-blue-500 print:shadow-none print:px-0 print:py-6 print:bg-white print:text-slate-900 print:border-blue-600">
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

const ExperienceItem = ({ role, company, location, dates, description }) => (
  <div className="experience-item mb-6 p-5 rounded border break-inside-avoid print:mb-4 print:p-0 print:border-none bg-white border-slate-100 shadow-sm print:bg-transparent">
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

const CustomerServiceDarrenCv = () => {
  const { personal, summary, skills, experience, education } = cvData;

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-12 font-sans text-slate-900 print:bg-white print:p-0">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-200 print:shadow-none print:border-none print:max-w-none print:w-full">
        <Header personal={personal} />

        <main className="p-8 md:p-12 print:p-0 print:pt-4">
          {/* Profile Section */}
          <section className="break-inside-avoid">
            <SectionTitle title="Professional Profile" icon="star" />
            <div className="text-slate-700 leading-relaxed text-lg print:text-sm print:leading-normal space-y-3">
              {summary.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </section>

          {/* Skills Section */}
          <section className="break-inside-avoid">
            <SectionTitle title="Skills & Experience" icon="checkmark" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print:gap-4 print:grid-cols-3">
              {/* Admin & Technical */}
              <div className="bg-slate-50 p-5 rounded border border-slate-200 print:bg-white print:p-3 print:border-none">
                <h3 className="font-bold text-slate-700 mb-3 border-b border-slate-300 pb-2 uppercase text-sm print:text-xs print:mb-2">Admin & Technical</h3>
                <ul className="text-sm text-slate-700 space-y-2 print:text-xs print:space-y-1">
                  {skills.admin.map((item, i) => (
                    <li key={i}>
                      {item.category}: {item.description}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Experience */}
              <div className="bg-slate-50 p-5 rounded border border-slate-200 print:bg-white print:p-3 print:border-none">
                <h3 className="font-bold text-slate-700 mb-3 border-b border-slate-300 pb-2 uppercase text-sm print:text-xs print:mb-2">Service Experience</h3>
                <ul className="text-sm text-slate-700 space-y-2 print:text-xs print:space-y-1">
                  {skills.service.map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </div>

              {/* Work Habits */}
              <div className="bg-slate-50 p-5 rounded border border-slate-200 print:bg-white print:p-3 print:border-none">
                <h3 className="font-bold text-slate-700 mb-3 border-b border-slate-300 pb-2 uppercase text-sm print:text-xs print:mb-2">Work Habits</h3>
                <ul className="text-sm text-slate-700 space-y-2 print:text-xs print:space-y-1">
                  {skills.habits.map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </div>
            </div>
          </section>

          {/* Work History */}
          <section>
            <SectionTitle title="Work History" icon="briefcase" />
            <div className="space-y-6">
              {experience.map((job, index) => (
                <ExperienceItem key={index} {...job} />
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="break-inside-avoid">
            <SectionTitle title="Training & Education" icon="graduation" />
            {education.map((edu, index) => (
              <div key={index} className="p-5 rounded border bg-white border-slate-100 shadow-sm print:p-0 print:border-none print:bg-transparent print:shadow-none">
                <div className="flex justify-between items-start print:mb-0.5">
                  <h3 className="text-lg font-bold text-slate-900 print:text-base">{edu.title}</h3>
                  <span className="text-sm font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded flex-shrink-0 print:bg-transparent print:px-0 print:py-0 print:text-slate-600">{edu.year}</span>
                </div>
                <div className="flex justify-between items-center text-md text-slate-500 mb-3 print:mb-1 print:text-sm print:text-blue-800">
                  <p className="font-bold">{edu.institution}</p>
                  <p className="italic">{edu.location}</p>
                </div>
                <ul className="list-disc ml-6 text-slate-700 text-md space-y-1.5 print:text-sm print:ml-4 print:space-y-1">
                  {edu.description.map((point, idx) => <li key={idx}>{point}</li>)}
                </ul>
              </div>
            ))}
          </section>

          <footer className="text-center text-gray-400 text-xs pt-8 italic border-t border-slate-50 print:text-slate-500 print:pt-4">
            References available upon request.
          </footer>
        </main>
      </div>
    </div>
  );
};

export default CustomerServiceDarrenCv;