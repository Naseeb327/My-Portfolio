import { motion } from 'framer-motion'
import { services } from '../../data/services'
import { ArrowRight } from 'lucide-react'

const colorMap = {
  cyan: 'text-accent-cyan border-accent-cyan/30 hover:border-accent-cyan',
  purple: 'text-accent-purple border-accent-purple/30 hover:border-accent-purple',
  green: 'text-accent-green border-accent-green/30 hover:border-accent-green',
}

const glowMap = {
  cyan: 'hover:shadow-[0_0_30px_rgba(0,245,255,0.2)]',
  purple: 'hover:shadow-[0_0_30px_rgba(191,0,255,0.2)]',
  green: 'hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]',
}

export default function Services() {
  return (
    <section id="services" className="bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-2xl mx-auto px-2">
            Specialized services to help you build, automate, and scale your digital presence
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group p-4 sm:p-5 md:p-6 rounded-xl bg-bg-primary border ${colorMap[service.color as keyof typeof colorMap]} ${glowMap[service.color as keyof typeof glowMap]} transition-all duration-300`}
            >
              {/* Icon */}
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-bg-secondary flex items-center justify-center mb-3 sm:mb-4 ${colorMap[service.color as keyof typeof colorMap].split(' ')[0]}`}
              >
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                {service.features.slice(0, 4).map((feature) => (
                  <li
                    key={feature}
                    className="text-text-muted text-xs sm:text-sm flex items-center gap-2"
                  >
                    <span className={colorMap[service.color as keyof typeof colorMap].split(' ')[0]}>
                      &#x2022;
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {service.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-[10px] sm:text-xs font-mono bg-bg-secondary rounded text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 text-sm font-medium ${colorMap[service.color as keyof typeof colorMap].split(' ')[0]} group-hover:gap-3 transition-all`}
              >
                Get Started
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
