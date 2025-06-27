import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { personalInfo, achievements, projects, skills } from '@/lib/constants';

// Typing Animation Component
function TypingAnimation({ texts, className = '' }: { texts: string[], className?: string }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = texts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < text.length) {
          setCurrentText(text.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <span className={`typing-cursor ${className}`}>
      {currentText}
    </span>
  );
}

// Matrix Background Component
function MatrixBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden opacity-20">
      <div className="matrix-rain">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="matrix-column"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} className="mb-2">
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// Floating Navigation Component
function FloatingNav() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'achievements', label: 'Achievements', icon: 'trophy' },
    { id: 'projects', label: 'Projects', icon: 'code' },
    { id: 'skills', label: 'Skills', icon: 'cogs' },
    { id: 'contact', label: 'Contact', icon: 'envelope' }
  ];

  return (
    <motion.nav
      className="fixed top-8 right-8 z-50"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="glass-morphism rounded-full p-2">
        <div className="flex flex-col space-y-2">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-12 h-12 rounded-full bg-cyber-slate hover:bg-cyber-blue/20 text-cyber-blue hover:text-white transition-all duration-300 flex items-center justify-center group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 1.2 }}
            >
              <i className={`fas fa-${item.icon} text-sm`}></i>
              <span className="absolute right-16 bg-cyber-dark text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

// Achievement Card Component
function AchievementCard({ achievement, index }: { achievement: any, index: number }) {
  return (
    <motion.div
      className="glass-morphism p-6 rounded-xl hover-glow"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="text-center">
        <div className={`text-cyber-blue text-4xl mb-4`}>
          <i className={`fas fa-${achievement.icon}`}></i>
        </div>
        
        <h3 className="font-orbitron text-xl font-bold mb-2 text-white">
          {achievement.platform}
        </h3>
        
        <div className="space-y-2">
          {achievement.problemsSolved && (
            <div className={`text-2xl font-bold text-cyber-green`}>
              {achievement.problemsSolved}+
            </div>
          )}
          
          <div className={`text-lg font-semibold text-cyber-blue`}>
            Rating: {achievement.rating}
          </div>
          
          {achievement.rank && (
            <div className="text-gray-300">
              Rank: {achievement.rank}
            </div>
          )}
          
          <p className="text-gray-400 text-sm mt-2">
            {achievement.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Project Card Component
function ProjectCard({ project, index }: { project: any, index: number }) {
  return (
    <motion.div
      className="glass-morphism p-6 rounded-xl hover-glow"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start space-x-4">
        <div className={`text-cyber-blue text-3xl`}>
          <i className={`fas fa-${project.icon}`}></i>
        </div>
        
        <div className="flex-1">
          <h3 className="font-orbitron text-xl font-bold mb-2 text-white">
            {project.title}
          </h3>
          
          <p className="text-gray-300 mb-4 leading-relaxed">
            {project.description}
          </p>
          
          {project.accuracy && (
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Accuracy</span>
                <span className="text-cyber-green font-semibold">{project.accuracy}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="progress-bar h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${project.accuracy}%` }}
                  transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, techIndex: number) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-cyber-slate text-cyber-blue text-xs font-medium rounded-full border border-cyber-blue/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Skill Progress Component
function SkillProgress({ name, level, delay = 0 }: { name: string, level: number, delay?: number }) {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{name}</span>
        <span className="text-cyber-blue font-semibold">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          className="progress-bar h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, delay: delay + 0.3 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
}

export default function Home() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Abhishek_Kumar_Gupta_Resume.pdf';
    link.click();
  };

  return (
    <div className="bg-cyber-gradient text-white overflow-x-hidden">
      {/* Matrix Background */}
      <MatrixBackground />
      
      {/* Floating Navigation */}
      <FloatingNav />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-slate to-cyber-midnight opacity-90" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-8">
              <h1 className="font-orbitron text-6xl md:text-8xl font-black mb-4">
                {personalInfo.name.split(' ').slice(0, 2).join(' ')}<br />
                <span className="text-cyber-blue">
                  {personalInfo.name.split(' ').slice(2).join(' ')}
                </span>
              </h1>
              
              <div className="font-rajdhani text-2xl md:text-4xl font-light text-gray-300 mb-8">
                <TypingAnimation 
                  texts={personalInfo.subtitles} 
                  className="text-cyber-blue font-semibold"
                />
              </div>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button
                onClick={downloadResume}
                className="neon-border px-8 py-4 rounded-lg font-rajdhani text-lg font-semibold text-cyber-blue hover:text-white hover:bg-cyber-blue/10 transition-all duration-300"
              >
                <i className="fas fa-download mr-2"></i>
                Download Resume
              </button>
              
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-cyber-blue hover:bg-cyber-blue/80 text-white rounded-lg font-rajdhani text-lg font-semibold transition-all duration-300"
              >
                <i className="fas fa-envelope mr-2"></i>
                Get In Touch
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="font-orbitron text-4xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-cyber-blue">ACHIEVEMENTS</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <AchievementCard key={achievement.platform} achievement={achievement} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="font-orbitron text-4xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-cyber-blue">PROJECTS</span>
          </motion.h2>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="font-orbitron text-4xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-cyber-blue">TECH STACK</span>
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Programming Languages */}
            <motion.div 
              className="glass-morphism p-8 rounded-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-rajdhani text-2xl font-bold mb-6 text-cyber-blue">Programming Languages</h3>
              {skills.programming.map((skill, index) => (
                <SkillProgress key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </motion.div>

            {/* Machine Learning */}
            <motion.div 
              className="glass-morphism p-8 rounded-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-rajdhani text-2xl font-bold mb-6 text-cyber-blue">Machine Learning</h3>
              {skills.machineLearning.map((skill, index) => (
                <SkillProgress key={skill.name} {...skill} delay={index * 0.1 + 0.2} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="font-orbitron text-4xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-cyber-blue">GET IN TOUCH</span>
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="glass-morphism rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Ready to bring innovative AI solutions to your team? Let's connect and explore opportunities to collaborate on cutting-edge projects.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 neon-border px-6 py-3 rounded-lg text-cyber-blue hover:text-white hover:bg-cyber-blue/10 transition-all duration-300"
                >
                  <i className="fas fa-envelope"></i>
                  <span className="font-rajdhani font-semibold">{personalInfo.email}</span>
                </a>
                
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-cyber-blue hover:bg-cyber-blue/80 text-white rounded-lg transition-all duration-300"
                >
                  <i className="fab fa-linkedin"></i>
                  <span className="font-rajdhani font-semibold">LinkedIn</span>
                </a>
                
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300"
                >
                  <i className="fab fa-github"></i>
                  <span className="font-rajdhani font-semibold">GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}