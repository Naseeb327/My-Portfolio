import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/Naseeb327', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/naseeb-ali', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:mirzanaseebali327@gmail.com', label: 'Email' },
]

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-secondary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 text-center sm:text-left">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <a href="#home" className="text-xl sm:text-2xl font-heading font-bold">
              <span className="gradient-text">Naseeb</span>
              <span className="text-white">.dev</span>
            </a>
            <p className="text-text-secondary text-sm sm:text-base mt-3 sm:mt-4 max-w-xs mx-auto sm:mx-0">
              AI Automation Engineer & Frontend Developer building intelligent solutions
              with n8n, React, and cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm sm:text-base mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm sm:text-base mb-3 sm:mb-4">Connect</h4>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 sm:p-2 rounded-lg bg-bg-tertiary text-text-secondary hover:text-accent-cyan hover:bg-bg-primary transition-all min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center"
                >
                  <social.icon className="w-5 h-5 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
            <p className="text-text-muted text-xs sm:text-sm mt-3 sm:mt-4">
              Lahore, Pakistan
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex justify-center">
          <p className="text-text-muted text-xs sm:text-sm">
            &copy; {currentYear} Naseeb Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
