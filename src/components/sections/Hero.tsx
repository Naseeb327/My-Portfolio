import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-cyan/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-accent-purple/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-accent-cyan/20 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-bg-secondary border border-white/10 mb-6 sm:mb-8"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent-cyan" />
            <span className="text-xs sm:text-sm text-text-secondary">Available for new projects</span>
          </motion.div>

          {/* Name & Title */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4">
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">Naseeb Ali</span>
          </h1>

          <h2 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary mb-4 sm:mb-6">
            AI Automation Engineer | Frontend Developer | Machine Learning
          </h2>

          {/* Subheadline */}
          <p className="text-text-secondary text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
            I build <span className="text-accent-cyan">intelligent automation systems</span> using n8n, Zapier & AI agents,
            and craft modern <span className="text-accent-purple">web experiences</span> with React & Vite.
            Also available for <span className="text-accent-green">custom Discord bots</span>.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-lg font-semibold text-bg-primary hover:opacity-90 transition-opacity text-sm sm:text-base"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 border border-white/20 rounded-lg font-semibold text-white hover:bg-white/5 transition-colors text-sm sm:text-base"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.a
            href="#services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 sm:mt-10 inline-flex flex-col items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors"
          >
            <span className="text-xs sm:text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={18} className="sm:w-5 sm:h-5" />
            </motion.div>
          </motion.a>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 sm:mt-16"
          >
            <p className="text-text-muted text-xs sm:text-sm mb-3 sm:mb-4">Technologies I work with</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {['React', 'n8n', 'Python', 'TypeScript', 'Zapier', 'LangChain'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-bg-secondary border border-white/10 text-text-secondary text-xs sm:text-sm font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
