'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Personal Portfolio Website',
    date: 'Nov 2024',
    description: 'A modern, responsive portfolio website showcasing projects and skills with a professional design.',
    details: [
      'Built a responsive portfolio website using Next.js, TypeScript, and Tailwind CSS, showcasing projects and skills with a modern, user-friendly interface',
      'Implemented server-side rendering (SSR) for improved SEO and performance, achieving a 95+ Lighthouse score',
      'Integrated contact form functionality using Nodemailer and form validation with React Hook Form',
      'Deployed on Vercel with CI/CD pipeline, enabling automatic updates and reducing deployment time by 80%',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Hook Form', 'Nodemailer', 'Vercel'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'AI-Powered Study Assistant',
    date: 'Oct 2024',
    description: 'An intelligent web application that helps students generate study materials using AI.',
    details: [
      'Developed a web application using React.js and OpenAI API to help students generate study materials, including flashcards, quizzes, and summaries',
      'Implemented user authentication and data persistence using Firebase, supporting 50+ active users',
      'Designed an intuitive UI/UX with Material-UI, resulting in a 40% increase in user engagement',
      'Optimized API calls and implemented caching strategies, reducing response time by 35%',
    ],
    technologies: ['React.js', 'OpenAI API', 'Firebase', 'Material-UI'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Weather Dashboard Application',
    date: 'Aug 2024',
    description: 'A real-time weather dashboard displaying current conditions and forecasts for multiple cities.',
    details: [
      'Created a real-time weather dashboard using React.js and OpenWeatherMap API, displaying current conditions and 7-day forecasts for multiple cities',
      'Implemented location-based weather detection using browser geolocation API, improving user experience',
      'Utilized Chart.js for data visualization, presenting temperature and precipitation trends in an interactive format',
      'Employed responsive design principles with CSS Grid and Flexbox, ensuring compatibility across all devices',
    ],
    technologies: ['React.js', 'OpenWeatherMap API', 'Chart.js', 'CSS Grid', 'Flexbox'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'E-Commerce Product Catalog',
    date: 'Jun 2024',
    description: 'A full-stack e-commerce application with product listings, reviews, and efficient data handling.',
    details: [
      'Built a full-stack e-commerce product catalog using Node.js, Express.js, and MongoDB, handling product listings and user reviews',
      'Implemented CRUD operations with RESTful APIs, processing 1000+ product entries efficiently',
      'Designed database schemas with proper indexing, improving query performance by 40%',
      'Integrated pagination and filtering features, enhancing user navigation and reducing load times by 25%',
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-[var(--muted)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto rounded-full" />
            <p className="text-[var(--secondary)] mt-4 max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for building great software.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group bg-[var(--card)] rounded-2xl overflow-hidden shadow-lg border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all duration-300 hover:shadow-2xl"
                whileHover={{ y: -5 }}
              >
                {/* Project Header */}
                <div className="p-6 border-b border-[var(--border)] bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/5">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <div className="p-3 bg-[var(--primary)]/10 rounded-xl text-[var(--primary)] mr-4 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--foreground)]">
                          {project.title}
                        </h3>
                        <span className="text-sm text-[var(--secondary)]">{project.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[var(--secondary)] mt-4">
                    {project.description}
                  </p>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {project.details.map((detail, i) => (
                      <li key={i} className="text-sm text-[var(--secondary)] flex items-start">
                        <svg
                          className="w-4 h-4 text-[var(--primary)] mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-[var(--primary)]/10 text-[var(--primary)] rounded-full hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
