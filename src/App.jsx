import React, { useState, useEffect, useRef } from 'react';
import Photo from './assets/Photo.jpg';
import Gemini from './assets/Gemini.png';
import Link_up from './assets/Sync-Up.jpg';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('section').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    {
      id: 1,
      title: "Gemini Clone - Chat Bot",
      description: "Built a Gemini AI clone using React.js with a responsive, conversational interface. Integrated OpenAI API for dynamic, context-aware chatbot responses.",
      image: Gemini,
      tech: ["React", "Tailwind CSS", "OpenAI API", "JavaScript"],
      link: "https://divyageminicloneproject.netlify.app/"
    },
    {
      id: 2,
      title: "Chat Application - Sync Up",
      description: "Full-stack real-time chat app using React.js (frontend), Node.js + Express (backend), MongoDB, and Socket.IO for live messaging.",
      image: Link_up,
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "Cloudinary"],
      link: "https://sync-up-chat-app.vercel.app/login"
    }
  ];

  const skills = [
    { name: "React.js", level: 90, color: "from-purple-500 to-violet-500" },
    { name: "Next.js", level: 85, color: "from-purple-500 to-violet-500" },
    { name: "Laravel", level: 80, color: "from-purple-500 to-violet-500" },
    { name: "Node.js & Express.js", level: 75, color: "from-purple-500 to-violet-500" },
    { name: "Tailwind CSS", level: 85, color: "from-purple-500 to-violet-500" },
    { name: "JavaScript", level: 90, color: "from-purple-500 to-violet-500" },
    { name: "MongoDB", level: 75, color: "from-purple-500 to-violet-500" },
    { name: "MySQL", level: 70, color: "from-purple-500 to-violet-500" },
    { name: "Socket.IO", level: 80, color: "from-purple-500 to-violet-500" },
    { name: "Postman", level: 85, color: "from-purple-500 to-violet-500" }
  ];

  const exploring = ["TypeScript", "Next.js", "Laravel", "MySQL", "Antares"];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
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
    const mailtoLink = `mailto:sridivyadharshinisv@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden relative">
   
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}

        <div
          className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{ top: '-50px', left: '-50px', animationDelay: '0s' }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{ top: '50%', right: '-100px', animationDelay: '2s' }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{ bottom: '-100px', left: '50%', animationDelay: '4s' }}
        ></div>
      </div>

      {/* Custom Cursor */}
      <div
        className="fixed w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out transform -translate-x-1/2 -translate-y-1/2 border border-white/30"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      >
        <div className="absolute inset-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-80 animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 px-6 py-4 transition-all duration-500 ${scrollY > 50 ? 'backdrop-blur-md bg-white/10 border-b border-white/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Sri Divya Dharshini SV
          </div>

          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium transition-all duration-500 hover:text-purple-300 relative group ${activeSection === item ? 'text-purple-300' : 'text-white'}`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full ${activeSection === item ? 'w-full' : ''}`}></span>
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/10 backdrop-blur-md rounded-b-lg mt-2 border-t border-white/20 animate-slideDown">
            {['home', 'about', 'projects', 'contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-6 py-3 capitalize font-medium hover:text-purple-300 transition-colors duration-300 border-b border-white/10 last:border-b-0 hover:bg-white/5 transform hover:translate-x-2 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center w-full relative z-10">
          <div className={`mb-6 sm:mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-42 h-42 sm:w-50 sm:h-50 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                <img src={Photo} alt="Sri Divya Dharshini" className="rounded-full w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent animate-fadeIn">
            Hi, I'm
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Sri Divya Dharshini SV
          </h2>

          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 animate-fadeIn" style={{ animationDelay: '300ms' }}>
            Full-Stack Developer skilled in React.js, Next.js, Node.js, Laravel, and MongoDB. Passionate about building scalable, production-grade web applications with real-time features and AI integrations.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/divya-dharshini8405/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-sm sm:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 overflow-hidden"
            >
              <span className="relative z-10">LinkedIn Profile</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
            <a
              href="https://drive.google.com/file/d/1szzk8mvnKm1vLRbRv4ZTZecjVvyODmDA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-400 rounded-full font-semibold text-sm sm:text-lg transition-all duration-500 hover:bg-purple-400 hover:text-slate-900 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">My Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
            </a>
          </div>

          <div className="mt-8 flex justify-center space-x-2 animate-bounce">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-800/50 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent animate-slideIn">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-10 mb-8 sm:mb-10">
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-slate-800 p-6 sm:p-8 rounded-2xl border border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-300 flex items-center">
                  <span className="mr-3">👩‍💻</span> Who I Am
                </h3>
                <div className="space-y-4 sm:space-y-6 text-gray-300">
                  <p className="text-base sm:text-lg leading-relaxed text-justify">
                    I'm pursuing a B.Tech in Information Technology at K.L.N College of Engineering and Technology (2022–Present) with a CGPA of 8.4/10. I'm a passionate Full-Stack Developer with hands-on experience in building real-world applications using modern tech stacks like React, Next.js, Laravel, Node.js, and MongoDB.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-justify">
                    I’ve built a real-time chat app using Socket.IO and an AI-powered chatbot using OpenAI API. I interned at MercuryMinds as a Full-Stack Developer and at IUCS as a Frontend Developer, where I enhanced live web projects and improved UI/UX.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800 p-6 sm:p-8 rounded-2xl border border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-300 flex items-center">
                  <span className="mr-3">🏆</span> Achievements
                </h3>
                <ul className="list-disc pl-4 sm:pl-5 space-y-2 sm:space-y-3 text-gray-300 text-base sm:text-lg">
                  <li>Winner – Project Presentation at SIT College Symposium (2024)</li>
                  <li>Developed production-grade apps used in live environments</li>
                  <li>Strong focus on clean, maintainable, and scalable code</li>
                </ul>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="mb-8 sm:mb-10">
                <div className="bg-slate-800 p-6 sm:p-8 rounded-2xl border border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-300 flex items-center">
                    <span className="mr-3">📊</span> Technical Skills
                  </h3>
                  <div className="space-y-4 sm:space-y-5">
                    {skills.map((skill, index) => (
                      <div key={index} className="space-y-1 sm:space-y-2 group">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-200 text-base sm:text-lg">{skill.name}</span>
                          <span className="text-purple-300 font-medium text-base sm:text-lg">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2 sm:h-3 overflow-hidden">
                          <div
                            className={`h-2 sm:h-3 bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden transform transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-purple-500/30`}
                            style={{ width: isLoaded ? `${skill.level}%` : '0%' }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-shine"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-slate-800 p-6 sm:p-8 rounded-2xl border border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-300 flex items-center">
                    <span className="mr-3">🔬</span> Currently Exploring
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {exploring.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs sm:text-sm font-medium transform hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                  <blockquote className="text-center md:text-right text-base sm:text-xl italic text-gray-300 max-w-md p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                    "I build not just apps—but intelligent, responsive experiences that solve real problems."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent animate-slideIn">
            My Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
                        className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-medium transform hover:scale-110 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated border effect — now working! */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 border-2 border-purple-500 rounded-2xl animate-spin-slow"></div>
                  <div className="absolute inset-1 border-2 border-pink-500 rounded-2xl animate-spin-slow-reverse"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 p-2 sm:mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent animate-slideIn">
              Let's Connect
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2 animate-fadeIn">
              I'm open to internship opportunities and collaborative projects. Feel free to reach out!
            </p>
          </div>

          <div className="w-full max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Contact Details</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4 group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600/30 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Phone</p>
                      <p className="text-white font-medium text-sm sm:text-base">+91 6369495694</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4 group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600/30 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                      <p className="text-white font-medium text-sm sm:text-base">sridivyadharshinisv@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4 group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600/30 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Location</p>
                      <p className="text-white font-medium text-sm sm:text-base">Sivagangai, Tamil Nadu, India</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 sm:pt-6 border-t border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-3 sm:mb-4">Open To</h4>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
                      <div className="flex items-center space-x-2 group">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full group-hover:animate-pulse"></div>
                        <span className="text-gray-300">Full-Stack Internships</span>
                      </div>
                      <div className="flex items-center space-x-2 group">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full group-hover:animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <span className="text-gray-300">Frontend Roles</span>
                      </div>
                      <div className="flex items-center space-x-2 group">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full group-hover:animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <span className="text-gray-300">Remote Collaborations</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6">
                    <h4 className="text-lg font-semibold text-white mb-3 sm:mb-4">Find Me</h4>
                    <div className="flex space-x-3 sm:space-x-4">
                      <a href="https://github.com/DivyaDharshini012" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600/20 rounded-lg flex items-center justify-center hover:bg-purple-600/30 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/divya-dharshini8405/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600/20 rounded-lg flex items-center justify-center hover:bg-purple-600/30 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder:text-gray-400 text-sm group hover:border-purple-400"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder:text-gray-400 text-sm group hover:border-purple-400"
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder:text-gray-400 text-sm group hover:border-purple-400"
                  />
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder:text-gray-400 resize-none text-sm group hover:border-purple-400"
                  ></textarea>
                  <button
                    type="submit"
                    className="group relative w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-sm sm:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 overflow-hidden"
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </button>

                  {submitStatus === 'success' && (
                    <div className="p-2 sm:p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-xs sm:text-sm text-center animate-fadeIn">
                      Your email client should open automatically.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 px-6 border-t border-white/10 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 animate-gradient">
            Sri Divya Dharshini's Portfolio
          </div>
          <p className="text-gray-400 mb-1">
            © 2025 made by Sri Divya Dharshini SV. All rights reserved
          </p>
        </div>
      </footer>

      {/* Custom CSS for animations — FIXED */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(0px) translateX(0px); }
          75% { transform: translateY(10px) translateX(-5px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-blob { animation: blob 7s infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-slow-reverse { animation: spin-slow-reverse 20s linear infinite; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
        .animate-slideIn { animation: slideIn 1s ease-out forwards; }
        .animate-slideDown { animation: slideDown 0.5s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        .animate-shine { animation: shine 2s ease-out infinite; }
        
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
      `}</style>
    </div>
  );
};

export default App;