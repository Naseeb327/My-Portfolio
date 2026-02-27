export type ProjectCategory = 'ai' | 'frontend' | 'discord'

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  category: ProjectCategory
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  features: string[]
  challenges?: string
  outcome?: string
}

export const projects: Project[] = [
  {
    id: 'whatsapp-crm',
    title: 'WhatsApp CRM Automation',
    description: 'Automated WhatsApp lead capture & response flow using webhooks. Synced lead data to Google Sheets/CRM with contact tagging and follow-up sequences.',
    longDescription: 'A comprehensive WhatsApp automation system designed to streamline lead management and customer communication. This project integrates WhatsApp Cloud API with custom webhook handlers to automatically capture incoming leads, categorize them based on message content, and trigger appropriate response sequences. The system maintains a real-time sync with Google Sheets for lead tracking and integrates with existing CRM workflows.',
    image: '/projects/whatsapp-crm.jpg',
    category: 'ai',
    technologies: ['n8n', 'WhatsApp Cloud API', 'Google Sheets', 'Webhooks'],
    featured: true,
    features: [
      'Automated lead capture from WhatsApp messages',
      'Intelligent message parsing and categorization',
      'Real-time sync with Google Sheets',
      'Custom follow-up sequence triggers',
      'Contact tagging based on conversation context',
      'Multi-step response workflows'
    ],
    challenges: 'The main challenge was handling rate limits from the WhatsApp Cloud API while ensuring no leads were missed. Implemented a queue-based system with retry logic to handle API throttling gracefully.',
    outcome: 'Reduced manual lead processing time by 80% and improved response time to new leads from hours to minutes.'
  },
  {
    id: 'construction-website',
    title: 'Construction Company Website',
    description: 'Modern, fully responsive construction company website with Directus Headless CMS for dynamic content management without code changes.',
    longDescription: 'A professional construction company website built with modern web technologies. The site features a fully responsive design that looks great on all devices, from mobile phones to large desktop screens. Integrated with Directus Headless CMS to allow the client to easily update content, manage projects, and add new portfolio items without any coding knowledge.',
    image: '/projects/construction.jpg',
    category: 'frontend',
    technologies: ['React', 'Vite', 'Directus CMS', 'Tailwind CSS'],
    liveUrl: 'https://myconstruction.octumate.com/',
    featured: true,
    features: [
      'Fully responsive design for all devices',
      'Headless CMS integration for easy content updates',
      'Dynamic project portfolio section',
      'Contact form with email notifications',
      'SEO optimized structure',
      'Fast loading with Vite optimization'
    ],
    challenges: 'Integrating Directus CMS with a React frontend required careful API design and caching strategies to ensure fast page loads while keeping content fresh.',
    outcome: 'Delivered a professional website that the client can manage independently, reducing their reliance on developers for content updates.'
  },
  {
    id: 'instantly-lead-sync',
    title: 'Instantly.ai Lead Sync',
    description: 'Integrated Instantly.ai API with Google Sheets for real-time lead sync. Built error-handling & retry logic for API reliability.',
    longDescription: 'A robust integration system that bridges Instantly.ai email outreach platform with Google Sheets for seamless lead data synchronization. The system monitors campaign activities in real-time, capturing lead responses, email opens, and engagement metrics. Built with enterprise-grade error handling and retry mechanisms to ensure data consistency even during API outages.',
    image: '/projects/instantly.jpg',
    category: 'ai',
    technologies: ['n8n', 'Instantly.ai API', 'Google Sheets', 'Automation'],
    featured: true,
    features: [
      'Real-time bidirectional data sync',
      'Automatic retry logic for failed API calls',
      'Lead status tracking and updates',
      'Campaign performance metrics collection',
      'Error logging and alerting system',
      'Scheduled batch processing for large datasets'
    ],
    challenges: 'Handling API rate limits and ensuring data consistency during network failures required implementing a sophisticated queue system with exponential backoff retry logic.',
    outcome: 'Achieved 99.9% data sync reliability and eliminated manual data entry, saving the team approximately 15 hours per week.'
  },
  {
    id: 'asp-consulting',
    title: 'ASP Strategic Consulting Website',
    description: 'Developed two distinct demo versions of a corporate website for ASP strategic consulting firm with modern responsive design.',
    longDescription: 'A corporate website project for ASP Strategic Consulting firm where I developed two distinct design variations to give the client options. Both versions feature modern, professional aesthetics with smooth animations and fully responsive layouts. The project showcases my ability to translate business requirements into compelling visual designs.',
    image: '/projects/asp.jpg',
    category: 'frontend',
    technologies: ['React', 'Vite', 'Responsive Design', 'UI/UX'],
    liveUrl: 'https://asp-v2-dev.octumate.com/',
    featured: false,
    features: [
      'Two distinct design variations',
      'Professional corporate aesthetic',
      'Smooth scroll animations',
      'Mobile-first responsive design',
      'Service showcase sections',
      'Team member profiles'
    ],
    challenges: 'Creating two visually distinct versions while maintaining brand consistency and ensuring both met the professional standards expected by a consulting firm.',
    outcome: 'Client selected their preferred version and praised the flexibility of having design options to choose from.'
  },
  {
    id: 'lung-cancer-detection',
    title: 'Lung Cancer Detection System',
    description: 'Web-based lung cancer detection using ensemble deep learning with VGG19 and ResNet101. Classifies X-ray and CT scans with high accuracy.',
    longDescription: 'My Final Year Project - a sophisticated medical imaging analysis system that uses ensemble deep learning to detect lung cancer from X-ray and CT scan images. The system combines the power of VGG19 and ResNet101 architectures to achieve high accuracy in classification. Built with a Flask backend serving the ML models and a user-friendly web interface for medical professionals to upload and analyze scans.',
    image: '/projects/lung-cancer.jpg',
    category: 'ai',
    technologies: ['Python', 'PyTorch', 'Flask', 'OpenCV', 'Deep Learning'],
    githubUrl: 'https://github.com/Naseeb327/Lung-Cancer-Detection-fyp',
    featured: true,
    features: [
      'Ensemble deep learning with VGG19 and ResNet101',
      'Support for both X-ray and CT scan images',
      'Real-time image preprocessing and analysis',
      'Confidence scores for predictions',
      'User-friendly web interface',
      'Detailed classification reports'
    ],
    challenges: 'Balancing model accuracy with inference speed was challenging. Optimized the ensemble approach to provide accurate results while maintaining reasonable processing times for medical workflows.',
    outcome: 'Achieved 94% accuracy on the test dataset and received recognition from the university for innovative application of deep learning in healthcare.'
  },
  {
    id: 'email-automation',
    title: 'Email Outreach Automation',
    description: 'Automated email outreach systems using Instantly.ai with campaign performance tracking and lead engagement analytics.',
    longDescription: 'An end-to-end email outreach automation system built on top of Instantly.ai platform. The system handles everything from lead list management to campaign execution and performance tracking. Integrated analytics dashboard provides real-time insights into open rates, reply rates, and lead engagement patterns.',
    image: '/projects/email.jpg',
    category: 'ai',
    technologies: ['n8n', 'Instantly.ai', 'API Integration', 'Automation'],
    featured: false,
    features: [
      'Automated lead list management',
      'Multi-step email campaign sequences',
      'Real-time performance analytics',
      'A/B testing for email templates',
      'Automatic follow-up triggers',
      'Lead scoring based on engagement'
    ],
    challenges: 'Designing email sequences that feel personal while being fully automated required careful attention to timing, personalization tokens, and response handling.',
    outcome: 'Increased email response rates by 35% compared to manual outreach and enabled scaling campaigns to thousands of leads without additional manpower.'
  },
]

export const categoryLabels: Record<ProjectCategory, string> = {
  ai: 'AI & Automation',
  frontend: 'Frontend',
  discord: 'Discord Bots',
}
