import { Bot, Code, Cpu } from 'lucide-react'

export const services = [
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'Transform your workflows with intelligent automation. I build automation systems using n8n, Zapier, Make, APIs, and AI agents to streamline operations and reduce manual effort.',
    icon: Cpu,
    features: [
      'Workflow Automation (n8n, Zapier, Make)',
      'API Integrations & Webhooks',
      'CRM Syncing & Lead Generation',
      'WhatsApp & Messaging Automation',
      'AI Agents & LangChain',
    ],
    technologies: ['n8n', 'Zapier', 'Make', 'Python', 'LangChain'],
    color: 'cyan',
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description: 'Creating fast, responsive, and modern web applications using React, Vite, and Tailwind CSS with seamless CMS integration for dynamic content management.',
    icon: Code,
    features: [
      'React & Vite Applications',
      'Responsive Web Design',
      'Directus CMS Integration',
      'SEO Optimization',
      'Performance Optimization',
    ],
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Directus'],
    color: 'purple',
  },
  {
    id: 'discord-bots',
    title: 'Custom Discord Bots',
    description: 'Powerful, reliable bots tailored to your community needs. From moderation to custom commands, economy systems, and third-party integrations.',
    icon: Bot,
    features: [
      'Custom Command Systems',
      'Moderation & Auto-mod',
      'Economy & Leveling Systems',
      'API Integrations',
      'Database Management',
    ],
    technologies: ['Discord.js', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL'],
    color: 'green',
  },
]
