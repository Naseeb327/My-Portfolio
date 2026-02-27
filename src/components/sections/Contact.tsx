import { motion } from 'framer-motion'
import { Mail, Linkedin, MapPin, Phone, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-text-secondary text-sm sm:text-base mb-6 sm:mb-8">
              Have a project in mind or want to discuss how I can help automate your workflows?
              Message me directly on WhatsApp or reach out via the channels below.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-3 sm:space-y-4">
              <a
                href="mailto:mirzanaseebali327@gmail.com"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-bg-secondary border border-white/10 hover:border-accent-cyan/50 transition-colors group"
              >
                <div className="p-2.5 sm:p-3 rounded-lg bg-bg-tertiary text-accent-cyan group-hover:bg-accent-cyan/10 transition-colors">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-text-muted text-xs sm:text-sm">Email</div>
                  <div className="text-white font-medium text-sm sm:text-base truncate">mirzanaseebali327@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+923046931174"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-bg-secondary border border-white/10 hover:border-accent-green/50 transition-colors group"
              >
                <div className="p-2.5 sm:p-3 rounded-lg bg-bg-tertiary text-accent-green group-hover:bg-accent-green/10 transition-colors">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-text-muted text-xs sm:text-sm">Phone</div>
                  <div className="text-white font-medium text-sm sm:text-base">+92 304-6931174</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/naseeb-ali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-bg-secondary border border-white/10 hover:border-accent-purple/50 transition-colors group"
              >
                <div className="p-2.5 sm:p-3 rounded-lg bg-bg-tertiary text-accent-purple group-hover:bg-accent-purple/10 transition-colors">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-text-muted text-xs sm:text-sm">LinkedIn</div>
                  <div className="text-white font-medium text-sm sm:text-base truncate">linkedin.com/in/naseeb-ali</div>
                </div>
              </a>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-bg-secondary border border-white/10">
                <div className="p-2.5 sm:p-3 rounded-lg bg-bg-tertiary text-text-secondary">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-text-muted text-xs sm:text-sm">Location</div>
                  <div className="text-white font-medium text-sm sm:text-base">Lahore, Pakistan</div>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent-green/10 border border-accent-green/30">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-green animate-pulse" />
              <span className="text-accent-green text-xs sm:text-sm font-medium">
                Currently available for new projects
              </span>
            </div>
          </motion.div>

          {/* Right Column - WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-bg-secondary border border-white/10 p-6 sm:p-8 h-fit"
          >
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3">
              Chat on WhatsApp
            </h3>
            <p className="text-text-secondary text-sm sm:text-base mb-6">
              Skip the form and message me directly for project inquiries, automation help, or collaborations.
            </p>

            <a
              href="https://wa.me/923046931174?text=Hi%20Naseeb%2C%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-lg font-semibold text-bg-primary hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} />
              Message on WhatsApp
            </a>

            <p className="text-text-muted text-xs sm:text-sm mt-4">
              WhatsApp: +92 304-6931174
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
