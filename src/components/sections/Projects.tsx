import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { projects, categoryLabels, ProjectCategory } from '../../data/projects'

const filters: (ProjectCategory | 'all')[] = ['all', 'ai', 'frontend', 'discord']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all')

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-2xl mx-auto px-2">
            A collection of projects showcasing my expertise in AI, frontend development, and Discord bots
          </p>
        </motion.div>

        {/* Filter Tabs - Scrollable on mobile */}
        <div className="flex justify-start sm:justify-center gap-2 mb-8 sm:mb-10 md:mb-12 overflow-x-auto hide-scrollbar pb-2 px-1">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-accent-cyan to-accent-purple text-bg-primary'
                  : 'bg-bg-secondary text-text-secondary hover:text-white border border-white/10'
              }`}
            >
              {filter === 'all' ? 'All Projects' : categoryLabels[filter]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group rounded-xl bg-bg-secondary border border-white/10 overflow-hidden hover:border-accent-cyan/50 transition-all"
              >
                {/* Clickable Card Link */}
                <Link to={`/project/${project.id}`} className="block">
                  {/* Project Image */}
                  <div className="relative aspect-video bg-bg-tertiary overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-text-muted text-xs sm:text-sm">Project Preview</span>
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-3">
                      <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-purple text-white text-sm font-medium flex items-center gap-2">
                        View Details
                        <ArrowRight size={16} />
                      </span>
                    </div>
                    {/* Featured Badge */}
                    {project.featured && (
                      <span className="absolute top-2 right-2 sm:top-3 sm:right-3 px-1.5 py-0.5 sm:px-2 sm:py-1 text-[10px] sm:text-xs font-medium bg-accent-cyan/20 text-accent-cyan rounded">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-4 sm:p-5">
                    <span className="text-[10px] sm:text-xs text-accent-purple font-medium uppercase tracking-wider">
                      {categoryLabels[project.category]}
                    </span>
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-white mt-1 mb-1.5 sm:mb-2 group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies - Show max 3 on mobile */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-[10px] sm:text-xs font-mono bg-bg-tertiary rounded text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-[10px] sm:text-xs font-mono bg-bg-tertiary rounded text-text-muted hidden sm:inline">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>

                {/* External Links - Outside the main link to prevent nested links */}
                {(project.liveUrl || project.githubUrl) && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 flex gap-3 border-t border-white/5 mt-0 pt-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-accent-cyan/10 text-accent-cyan rounded-md hover:bg-accent-cyan/20 transition-colors"
                        aria-label="View live site"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-accent-purple/10 text-accent-purple rounded-md hover:bg-accent-purple/20 transition-colors"
                        aria-label="View source code"
                      >
                        <Github size={14} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                )}
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <a
            href="https://github.com/Naseeb327"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-white/20 rounded-lg text-white hover:bg-white/5 transition-colors text-sm sm:text-base"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
