import { motion } from 'framer-motion'
import { Code, Cpu, Bot, Zap, Users, Award } from 'lucide-react'

const stats = [
  { icon: Zap, value: '10+', label: 'Projects Completed' },
  { icon: Users, value: '5+', label: 'Happy Clients' },
  { icon: Award, value: '1+', label: 'Years Experience' },
]

const skills = [
  { category: 'AI & Automation', items: ['n8n', 'Zapier', 'Make', 'LangChain', 'Python'] },
  { category: 'Frontend', items: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Directus'] },
  { category: 'AI/ML', items: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'OpenCV', 'Hugging Face'] },
  { category: 'Backend & Tools', items: ['Python', 'Flask', 'Node.js', 'MongoDB', 'Docker'] },
]

export default function About() {
  return (
    <section id="about" className="bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              About <span className="gradient-text">Me</span>
            </h2>

            <div className="space-y-3 sm:space-y-4 text-text-secondary text-sm sm:text-base">
              <p>
                I'm <strong className="text-white">Naseeb Ali</strong>, a committed and goal-oriented AI Automation Engineer
                with hands-on experience in workflow automation, modern web development, and applied AI.
              </p>
              <p>
                I build automation systems using n8n, Zapier, Make, APIs, and AI agents, and develop fast,
                scalable interfaces with React, Vite, Tailwind, and Directus CMS. I also have practical
                experience in Data Science, Machine Learning, and Deep Learning.
              </p>
              <p>
                I enjoy transforming manual processes into intelligent automated systems and delivering
                efficient, scalable solutions. Currently working as an Automation Engineer & Frontend
                Developer at Octacer.
              </p>
            </div>

            {/* Education */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg bg-bg-primary border border-white/10">
              <h4 className="font-heading font-semibold text-white text-sm sm:text-base mb-1 sm:mb-2">Education</h4>
              <p className="text-text-secondary text-xs sm:text-sm">
                BS Computer Science - NCBA&E, Lahore (2025)
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-2 sm:p-4 rounded-lg bg-bg-primary border border-white/10"
                >
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-cyan mx-auto mb-1 sm:mb-2" />
                  <div className="font-heading text-lg sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-text-muted text-[10px] sm:text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-3 sm:p-4 rounded-lg bg-bg-primary border border-white/10"
                >
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    {skillGroup.category === 'AI & Automation' && (
                      <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-cyan" />
                    )}
                    {skillGroup.category === 'Frontend' && (
                      <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-purple" />
                    )}
                    {skillGroup.category === 'AI/ML' && (
                      <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-green" />
                    )}
                    {skillGroup.category === 'Backend & Tools' && (
                      <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-cyan" />
                    )}
                    <h4 className="font-heading font-semibold text-white text-xs sm:text-sm">
                      {skillGroup.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-[10px] sm:text-xs font-mono bg-bg-secondary rounded text-text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-3 sm:mt-4 p-3 sm:p-4 rounded-lg bg-bg-primary border border-white/10"
            >
              <h4 className="font-heading font-semibold text-white text-sm sm:text-base mb-2 sm:mb-3">IBM Certifications</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {[
                  { name: 'Python for Data Science, AI & Development', file: 'python-data-science-ai.pdf' },
                  { name: 'Databases and SQL for Data Science', file: 'databases-sql-python.pdf' },
                  { name: 'Tools for Data Science', file: 'tools-data-science.pdf' },
                  { name: 'Data Science Methodology', file: 'data-science-methodology.pdf' },
                  { name: 'Python Project for Data Science', file: 'python-project-data-science.pdf' },
                  { name: 'What is Data Science', file: 'what-is-data-science.pdf' },
                ].map((cert) => (
                  <li key={cert.name}>
                    <a
                      href={`/certificates/${cert.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary text-xs sm:text-sm hover:text-accent-cyan transition-colors flex items-center gap-1"
                    >
                      <span className="text-accent-cyan">•</span>
                      {cert.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-4 sm:mt-6 text-center sm:text-left"
            >
              <a
                href="/resume.docx"
                download="Naseeb_Ali_Resume.docx"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-lg font-semibold text-bg-primary hover:opacity-90 transition-opacity text-sm sm:text-base"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
