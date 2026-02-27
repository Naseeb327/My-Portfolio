import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, CheckCircle2, AlertCircle, Trophy } from 'lucide-react'
import { projects, categoryLabels } from '../data/projects'

const colorMap: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  ai: {
    bg: 'bg-accent-cyan/10',
    text: 'text-accent-cyan',
    border: 'border-accent-cyan/30',
    glow: 'shadow-[0_0_30px_rgba(0,245,255,0.3)]'
  },
  frontend: {
    bg: 'bg-accent-purple/10',
    text: 'text-accent-purple',
    border: 'border-accent-purple/30',
    glow: 'shadow-[0_0_30px_rgba(191,0,255,0.3)]'
  },
  discord: {
    bg: 'bg-accent-green/10',
    text: 'text-accent-green',
    border: 'border-accent-green/30',
    glow: 'shadow-[0_0_30px_rgba(0,255,136,0.3)]'
  }
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-text-primary mb-4">Project Not Found</h1>
          <p className="text-text-secondary mb-8">The project you're looking for doesn't exist.</p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  const colors = colorMap[project.category]

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <Link to="/" className="text-xl font-heading font-bold gradient-text">
            Naseeb Ali
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            {/* Category Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text} border ${colors.border}`}>
                {categoryLabels[project.category]}
              </span>
              {project.featured && (
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-500/10 text-yellow-500 border border-yellow-500/30">
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
              {project.title}
            </h1>

            {/* Short Description */}
            <p className="text-xl text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`relative rounded-2xl overflow-hidden mb-12 ${colors.glow}`}
          >
            <div className="aspect-video bg-bg-secondary flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  target.parentElement!.innerHTML = `<div class="flex items-center justify-center h-full"><span class="text-6xl">${project.category === 'ai' ? '🤖' : project.category === 'frontend' ? '🌐' : '🎮'}</span></div>`
                }}
              />
            </div>
          </motion.div>

          {/* Action Buttons */}
          {(project.liveUrl || project.githubUrl) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Project
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-bg-tertiary border border-white/10 rounded-lg text-text-primary font-medium hover:bg-white/5 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Source Code
                </a>
              )}
            </motion.div>
          )}

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-2 space-y-8"
            >
              {/* About Section */}
              <div className="bg-bg-secondary rounded-2xl p-6 md:p-8 border border-white/5">
                <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                  About This Project
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Features Section */}
              <div className="bg-bg-secondary rounded-2xl p-6 md:p-8 border border-white/5">
                <h2 className="text-2xl font-heading font-semibold text-text-primary mb-6">
                  Key Features
                </h2>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${colors.text}`} />
                      <span className="text-text-secondary">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Challenges Section */}
              {project.challenges && (
                <div className="bg-bg-secondary rounded-2xl p-6 md:p-8 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-yellow-500" />
                    <h2 className="text-2xl font-heading font-semibold text-text-primary">
                      Challenges & Solutions
                    </h2>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              )}

              {/* Outcome Section */}
              {project.outcome && (
                <div className="bg-bg-secondary rounded-2xl p-6 md:p-8 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Trophy className="w-6 h-6 text-accent-green" />
                    <h2 className="text-2xl font-heading font-semibold text-text-primary">
                      Outcome & Impact
                    </h2>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Tech Stack */}
              <div className="bg-bg-secondary rounded-2xl p-6 border border-white/5">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-5 h-5 text-text-muted" />
                  <h3 className="text-lg font-heading font-semibold text-text-primary">
                    Tech Stack
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-bg-tertiary rounded-lg text-sm text-text-secondary border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="bg-bg-secondary rounded-2xl p-6 border border-white/5">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-text-muted" />
                  <h3 className="text-lg font-heading font-semibold text-text-primary">
                    Project Info
                  </h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-text-muted text-sm">Category</span>
                    <p className="text-text-primary">{categoryLabels[project.category]}</p>
                  </div>
                  <div>
                    <span className="text-text-muted text-sm">Status</span>
                    <p className="text-accent-green">Completed</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
                  Interested in similar work?
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Let's discuss how I can help with your project.
                </p>
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Back to Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to All Projects
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
