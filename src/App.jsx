import React, { useState, useEffect } from 'react';
import Photo from './assets/Photo.jpeg'
import Gemini from './assets/Gemini.png'
import Link_up from './assets/Link-up.png'

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 1,
      title: "Gemini Clone",
      description: "Gemini Clone built with React, powered by Google Gemini API.",
      image: Gemini,
      tech: ["React", "CSS3", "Gemini API"],
      link: "https://achu-gemini.netlify.app/"
    },
    {
      id: 2,
      title: "Link Up",
      description: "Real time chat web application - One to One conversation",
      image: Link_up,
      tech: ["React", "CSS3", "Firebase", "Redux", "Router"],
      link: "https://link-up-8ohv.vercel.app/"
    },
    // {
    //   id: 3,
    //   title: "Weather Dashboard",
    //   description: "Interactive weather application with beautiful animations and API integration",
    //   image: "https://placehold.co/400x300/4ade80/ffffff?text=Weather+App",
    //   tech: ["React", "API", "Tailwind CSS"],
    //   link: "https://github.com/yourusername/ecommerce-project"
    // }
  ];

  const skills = [
    { name: "React", level: 85 },
    { name: "Router", level: 95 },
    { name: "Redux", level: 75 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Node js & Express js", level: 50 },
    { name: "Mongo DB", level: 50 },
    { name: "MERN Stack", level: 60 },
    { name: "JAVA", level: 75 },
    { name: "Postman", level: 80 },
    { name: "Canva", level: 70 },

  ];
  const exploring = ["Next.js", "TypeScript", "Framer Motion", "SQL","PHP"];

  {/*Contact section*/ }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );
    const mailtoLink = `mailto:achuthan302004@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background Circles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
          style={{
            top: '-50px',
            left: '-50px',
            animationDelay: '0s'
          }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
          style={{
            top: '50%',
            right: '-100px',
            animationDelay: '2s'
          }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
          style={{
            bottom: '-100px',
            left: '50%',
            animationDelay: '4s'
          }}
        ></div>
      </div>

      {/* Custom Cursor */}
      <div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          mixBlendMode: 'difference'
        }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-4 backdrop-blur-md bg-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Achuthan KS
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium transition-all duration-300 hover:text-purple-300 ${activeSection === item ? 'text-purple-300' : 'text-white'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/10 backdrop-blur-md rounded-b-lg mt-2">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-6 py-3 capitalize font-medium hover:text-purple-300 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center w-full">
          <div className="mb-6 sm:mb-8 mt-10 sm:mt-20">
            <div className="w-42 h-42 sm:w-50 sm:h-50 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <img src={Photo} alt="Achuthan" className="rounded-full w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r  p-2 from-white to-purple-200 bg-clip-text text-transparent">
            Hy!, I'm a
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            MERN-Stack Developer
          </h2>

          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            I build scalable, full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js).
             As a fresher, I bring fresh ideas, creativity, and modern development approaches to every project I work on.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/achuthan-ks-2a97a427a/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
            >
              LinkedIn Profile
            </a>
            <a
              href="https://drive.google.com/file/d/1z2J1nMRt5F9oGZQo2WnghDjOu2PQNnmK/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-400 rounded-full font-semibold text-sm sm:text-lg transition-all duration-300 hover:bg-purple-400 hover:text-slate-900 transform hover:scale-105 inline-block"
            >
              My Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            About Me
          </h2>

          {/* First Row — 2 Columns */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10 mb-8 sm:mb-10">
            <div>
              <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 shadow-xl hover:shadow-2xl transition-shadow duration-500">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-300">👨‍💻 Who I Am</h3>
                <div className="space-y-4 sm:space-y-6 text-gray-300">
                  <p className="text-base sm:text-lg leading-relaxed text-justify">
                    I'm currently pursuing a B.Tech in Information Technology at KLN College of Engineering with a CGPA of 7.4. Along with my academics, I’m a passionate Frontend Developer specializing in React and modern UI frameworks like Tailwind CSS. As a fresher, I bring enthusiasm, creativity, and a strong drive to learn and grow in the ever-evolving world of web development.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-justify">
                    I love transforming ideas into beautiful, responsive interfaces that users enjoy interacting with. Clean code, pixel-perfect design, and smooth user experience are my top priorities, and I am continuously improving my skills in React.js, MERN stack, and modern web development tools.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 shadow-xl mt-6 sm:mt-10 hover:shadow-2xl transition-shadow duration-500">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-300 flex items-center">
                  <span>🚀</span>
                  <span className="ml-2">What Drives Me</span>
                </h3>
                <ul className="list-disc pl-4 sm:pl-5 space-y-2 sm:space-y-3 text-gray-300 text-base sm:text-lg">
                  <li>Building meaningful digital experiences</li>
                  <li>Continuous learning and skill mastery</li>
                  <li>Solving real problems with elegant code</li>
                  <li>Collaborating and growing with great teams</li>
                </ul>
              </div>
            </div>
            <div>
              {/* Second Row — 1 Column */}
              <div className="mb-8 sm:mb-10">
                <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 shadow-xl hover:shadow-2xl transition-shadow duration-500">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-300 flex items-center">
                    <span>📊</span>
                    <span className="ml-2">Skills & Progress</span>
                  </h3>
                  <div className="space-y-4 sm:space-y-5">
                    {skills.map((skill, index) => (
                      <div key={index} className="space-y-1 sm:space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-200 text-base sm:text-lg">{skill.name}</span>
                          <span className="text-purple-300 font-medium text-base sm:text-lg">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 sm:h-3 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Third Row — 1 Column */}
          <div>
            <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 shadow-xl">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-300 flex items-center">
                    <span>🔬</span>
                    <span className="ml-2">Currently Exploring</span>
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {exploring.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-end mt-6 md:mt-0">
                  <blockquote className="text-center md:text-right text-base sm:text-xl italic text-gray-300 max-w-md">
                    "I code not just to build websites — but to build experiences that matter."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent p-2">
            My Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-purple-300 group-hover:text-pink-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
            View More Projects
          </button>
        </div> */}
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 p-2 sm:mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">
              I'm currently looking for new opportunities and would love to hear from you.
              Let's create something amazing together!
            </p>
          </div>

          <div className="w-full max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Contact Information */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Contact Information</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Phone</p>
                      <p className="text-white font-medium text-sm sm:text-base">+91 7092579973</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                      <p className="text-white font-medium text-sm sm:text-base">achuthan302004@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Location</p>
                      <p className="text-white font-medium text-sm sm:text-base">Madurai, TamilNadu, India</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 sm:pt-6 border-t border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-3 sm:mb-4">Available For</h4>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300">Front-end Dev Internship</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300">Full-time Roles</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300">Remote Work</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6">
                    <h4 className="text-lg font-semibold text-white mb-3 sm:mb-4">Connect With Me</h4>
                    <div className="flex space-x-3 sm:space-x-4">
                      <a href="https://github.com/Achuthan84" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600/20 rounded-lg flex items-center justify-center hover:bg-purple-600/30 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/achuthan-ks-2a97a427a/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600/20 rounded-lg flex items-center justify-center hover:bg-purple-600/30 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      {/* <a href="https://twitter.com/AchuthanKs" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600/20 rounded-lg flex items-center justify-center hover:bg-purple-600/30 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.184-.896-.957-2.173-1.555-3.591-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .388.045.768.127 1.132-4.09-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.054 0 13.999-7.496 13.999-13.985 0-.21 0-.42-.015-.63A10.96 10.96 0 0024 4.557z" />
                        </svg>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder:text-gray-400 text-sm"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder:text-gray-400 text-sm"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder:text-gray-400 text-sm"
                    required
                  />
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder:text-gray-400 resize-none text-sm"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                  >
                    Send Message
                  </button>

                  {submitStatus === 'success' && (
                    <div className="p-2 sm:p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-xs sm:text-sm text-center">
                      Your email client should open automatically. If not, please check your email settings.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-4 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
            Achuthan's Portfolio
          </div>
          <p className="text-gray-400 mb-1">
            © 2025 made by Achuthan. All rights reserved
          </p>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </div>
  );
};

export default App;