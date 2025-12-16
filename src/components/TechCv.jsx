// --- Data Structure Optimized for Tech ---

const cvData = {
  personal: {
    name: "Darren Ikinepule",
    title: "Full-Stack Web Developer",
    email: "darrenikinepule@outlook.co.nz",
    phone: "0204339983",
    location: "Auckland 1072",
  },
  summary: [
    "Full-Stack Developer with a background in high-pressure operations and management. Having transitioned from a career as an Executive Chef, I bring a unique blend of technical proficiency in the MERN stack and the ability to solve complex problems under intense pressure.",
    "Recently completed the intensive Take2 Software Development programme, focusing on building scalable web applications and collaborating in Agile environments. I am passionate about writing clean, efficient code and delivering user-centric digital solutions."
  ],
  projects: [
    {
      name: "Fuel vs Fire",
      tech: "React.js, Node.js, Express.js, MongoDB",
      description: "A full-stack application demonstrating seamless frontend and backend integration. Focused on responsive design and RESTful API architecture.",
      link: "github.com/darrenikinepule"
    }
  ],
  skills: {
    technical: [
      "Frontend: HTML5, CSS3, JavaScript (ES6+), React.js",
      "Backend: Node.js, Express.js, REST APIs",
      "Databases: MongoDB, MySQL",
      "Tools: Git, GitHub, VS Code, AI Prompting",
      "Methodologies: Agile Collaboration, Responsive Web Design"
    ],
    core: [
      { 
        category: "Professional Strengths", 
        items: ["Technical Problem Solving", "Agile Workflow", "Cross-functional Collaboration", "High-Pressure Delivery"] 
      },
      { 
        category: "Leadership & Management", 
        items: ["Team Leadership (15+ staff)", "Operational Optimization", "Performance Management"] 
      },
    ],
    personal: [
      "Reliable, punctual, and self-disciplined",
      "Full Class 1 NZ Driver's Licence",
      "Certified Forklift Operator (Counter Balance, Reach, Stock Picker)"
    ],
  },
  experience: [
    {
      role: "Software Development Immersion",
      company: "Take2 Programme",
      location: "Auckland",
      dates: "2024 - Present",
      description: [
        "Engaged in a 1,000+ hour intensive coding bootcamp focused on industry-standard software development practices.",
        "Developed full-stack applications using JavaScript and the MERN stack.",
        "Collaborated in Agile teams to deliver project milestones and conduct peer code reviews.",
      ],
      isHighlight: true,
    },
    {
      role: "Property Manager / Operations",
      company: "Gardenia Trust LTD",
      location: "Auckland",
      dates: "10/2024 - Present",
      description: [
        "Managed a diverse portfolio of 7 properties, utilizing data tracking for accurate asset management.",
        "Optimized scheduling for a network of tradespeople, improving maintenance efficiency.",
      ]
    },
    {
      role: "Executive Chef / Operations Management",
      company: "Various International & Local Establishments",
      location: "NZ & Thailand",
      dates: "1995 - 2022",
      description: [
        "Led high-performing teams of 15+ in high-pressure environments, achieving 95%+ satisfaction rates.",
        "Managed complex operational tasks and improved internal processes to increase efficiency.",
        "Represented Hyatt Auckland internationally, maintaining high quality standards.",
      ]
    },
  ],
};

// --- Updated Components for Tech Layout ---

const Icon = ({ path, className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    {path === 'mail' && <path d="M1.5 8.67v8.58a1.5 1.5 0 001.5 1.5h17a1.5 1.5 0 001.5-1.5V8.67l-8.88 5.06a.75.75 0 01-.76 0L1.5 8.67z" />}
    {path === 'phone' && <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />}
    {path === 'code' && <path d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22 6.22 6.22a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 011.06 0zm1.94 0a.75.75 0 000 1.06l6.22 6.22-6.22 6.22a.75.75 0 101.06 1.06l6.75-6.75a.75.75 0 000-1.06l-6.75-6.75a.75.75 0 00-1.06 0z" />}
    {path === 'briefcase' && <path d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c3.864.5 6.75 3.79 6.75 7.645v6.75a3 3 0 01-3 3h-15a3 3 0 01-3-3v-6.75c0-3.855 2.886-7.145 6.75-7.645V5.25z" />}
  </svg>
);

const SectionTitle = ({ title, icon }) => (
  <h2 className="text-xl font-bold border-b-2 border-blue-600 pb-1 mb-4 flex items-center space-x-2 text-gray-800 pt-6">
    <Icon path={icon} className="w-5 h-5 text-blue-600" />
    <span className="uppercase tracking-wide">{title}</span>
  </h2>
);

// --- Main App Component ---

const TechCv = () => {
  const { personal, summary, skills, experience, projects } = cvData;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-200">
        
        {/* Header */}
        <header className="bg-gray-900 text-white p-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <h1 className="text-4xl font-black text-blue-400 leading-none">{personal.name}</h1>
              <p className="text-xl font-medium text-gray-300 mt-2">{personal.title}</p>
            </div>
            <div className="mt-4 md:mt-0 text-sm space-y-1 text-gray-400">
              <div className="flex items-center space-x-2"><Icon path="mail" className="w-4 h-4" /> <span>{personal.email}</span></div>
              <div className="flex items-center space-x-2"><Icon path="phone" className="w-4 h-4" /> <span>{personal.phone}</span></div>
              <div className="flex items-center space-x-2"><span>📍 {personal.location}</span></div>
            </div>
          </div>
        </header>

        <main className="p-8">
          {/* Summary */}
          <div className="mb-8 bg-blue-50 p-4 rounded-r-lg border-l-4 border-blue-500 italic text-gray-700">
            {summary.map((para, i) => <p key={i} className="mb-2 last:mb-0">{para}</p>)}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sidebar: Skills */}
            <div className="md:col-span-1 space-y-6">
              <section>
                <h3 className="text-sm font-black text-blue-600 uppercase mb-3">Stack & Tools</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  {skills.technical.map((s, i) => <li key={i} className="pb-1 border-b border-gray-100">{s}</li>)}
                </ul>
              </section>
              <section>
                <h3 className="text-sm font-black text-blue-600 uppercase mb-3">Key Strengths</h3>
                {skills.core.map((cat, i) => (
                  <div key={i} className="mb-4">
                    <p className="text-xs font-bold text-gray-500 mb-1">{cat.category}</p>
                    <ul className="text-xs text-gray-600 list-disc ml-4">
                      {cat.items.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </section>
            </div>

            {/* Main Column: Projects & Experience */}
            <div className="md:col-span-2">
              {/* Projects Section - CRITICAL FOR TECH */}
              <section className="mb-8">
                <SectionTitle title="Technical Projects" icon="code" />
                {projects.map((proj, i) => (
                  <div key={i} className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:border-blue-300 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-900">{proj.name}</h4>
                    </div>
                    <p className="text-xs font-mono text-blue-600 mb-2">{proj.tech}</p>
                    <p className="text-sm text-gray-600">{proj.description}</p>
                  </div>
                ))}
              </section>

              {/* Work History */}
              <section>
                <SectionTitle title="Professional Experience" icon="briefcase" />
                <div className="space-y-6">
                  {experience.map((job, i) => (
                    <div key={i} className={`relative pl-4 border-l-2 ${job.isHighlight ? 'border-blue-500' : 'border-gray-200'}`}>
                      <div className="flex justify-between items-baseline">
                        <h4 className={`font-bold ${job.isHighlight ? 'text-blue-700' : 'text-gray-900'}`}>{job.role}</h4>
                        <span className="text-xs font-bold text-gray-500">{job.dates}</span>
                      </div>
                      <p className="text-sm italic text-gray-500 mb-2">{job.company}</p>
                      <ul className="text-sm text-gray-600 list-disc ml-4 space-y-1">
                        {job.description.map((point, j) => <li key={j}>{point}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};



export default TechCv;