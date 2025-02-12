import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown } from 'lucide-react';

const projects = [
  {
    title: "Expense Tracker",
    description: "A full-featured e-commerce mobile application built with React Native and Firebase, featuring real-time updates, user authentication, and payment integration.",
    technologies: ["Flutter", "Firebase"],
    link: "https://github.com/Adhokshajan/expense_tracker"
  },
  {
    title: "Quiz App",
    description: "A collaborative task management solution developed using Flutter and Supabase, enabling teams to organize and track projects efficiently.",
    technologies: ["Flutter", "Firebase"],
    link: "https://github.com/Adhokshajan/quizz_app"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-70"></div>
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 animate-fade-up">
            Hi, I'm <span className="text-indigo-600">Adhokshajan Ranganath</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 animate-fade-up animate-delay-100">
            App Developer | Hardware Enthusiast | Problem Solver
          </p>
          <div className="flex justify-center space-x-4 mb-12 animate-fade-up animate-delay-200">
            <a href="https://github.com/Adhokshajan" className="text-gray-600 hover:text-indigo-600 transition-colors hover-lift">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/adhokshajan-ranganath-00b534308/" className="text-gray-600 hover:text-indigo-600 transition-colors hover-lift">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors hover-lift">
              <Mail size={24} />
            </a>
          </div>
          <a href="adhokshajan.official@gmail.com" className="animate-bounce inline-block animate-fade-up animate-delay-300">
            <ChevronDown size={32} className="text-gray-600" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 animate-fade-left">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
                alt="Profile"
                className="rounded-lg shadow-xl hover-lift"
              />
            </div>
            <div className="flex-1 animate-fade-right">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <User className="text-indigo-600" />
                About Me
              </h2>
              <p className="text-gray-600 mb-6">
                I'm a passionate App developer with 1 year of experience building Mobile applications.
                I specialize in React Native, Flutter
                When I'm not coding,
                you can find me exploring new technologies or contributing to open-source projects.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg hover-lift">
                  <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
                  <p className="text-gray-600">React Native, TypeScript,CSS</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg hover-lift">
                  <h3 className="font-semibold text-gray-900 mb-2">Backend</h3>
                  <p className="text-gray-600">Firebase,Supabase, PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-2 justify-center animate-scale">
            <Code2 className="text-indigo-600" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 flex-wrap">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} className="text-indigo-600 hover:text-indigo-700 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2 justify-center animate-scale">
            <Briefcase className="text-indigo-600" />
            Let's Work Together
          </h2>
          <p className="text-gray-600 mb-8 animate-fade-up">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors hover-lift animate-fade-up animate-delay-100"
          >
            <Mail size={20} />
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors hover-lift">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors hover-lift">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors hover-lift">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;