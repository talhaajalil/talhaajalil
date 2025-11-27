'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'FDM Group',
    period: 'May 2024 - Aug 2024',
    description: [
      'Collaborated with a team of 5 to design and develop a full-stack banking application using Java, SQL, and React.js, handling 50+ concurrent users in a simulated production environment',
      'Implemented RESTful APIs for account management and transaction processing, improving data retrieval speed by 30% through query optimization',
      'Conducted unit and integration testing using JUnit and Mockito, achieving 90% code coverage and reducing production bugs by 25%',
      'Participated in Agile ceremonies including daily stand-ups, sprint planning, and retrospectives, contributing to a 20% increase in team velocity',
    ],
    technologies: ['Java', 'SQL', 'React.js', 'RESTful APIs', 'JUnit', 'Mockito', 'Agile'],
  },
  {
    title: 'IT Support Intern',
    company: 'York University',
    period: 'Jan 2024 - Apr 2024',
    description: [
      'Provided technical support to 200+ students and staff, resolving hardware and software issues with a 95% first-contact resolution rate',
      'Maintained and troubleshot computer labs, ensuring 99% uptime across 10+ lab spaces with 300+ workstations',
      'Assisted in network configuration and security implementations, contributing to a 15% reduction in security incidents',
      'Created and updated technical documentation and user guides, improving issue resolution time by 20%',
    ],
    technologies: ['Technical Support', 'Hardware Troubleshooting', 'Network Configuration', 'Documentation'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-[var(--background)]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto rounded-full" />
            <p className="text-[var(--secondary)] mt-4 max-w-2xl mx-auto">
              My journey in the tech industry, from internships to building real-world solutions.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)] to-[var(--accent)]" />

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                variants={itemVariants}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-1/2'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--primary)] rounded-full border-4 border-[var(--background)] shadow-lg z-10" />

                {/* Content Card */}
                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="bg-[var(--card)] rounded-2xl p-6 shadow-lg border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all duration-300 hover:shadow-xl">
                    {/* Header */}
                    <div className={`mb-4 ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-[var(--primary)]/10 text-[var(--primary)] rounded-full mb-2">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold text-[var(--foreground)]">
                        {exp.title}
                      </h3>
                      <p className="text-[var(--primary)] font-medium">
                        {exp.company}
                      </p>
                    </div>

                    {/* Description */}
                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-left' : 'text-left'}`}>
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-[var(--secondary)] flex items-start"
                        >
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
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-[var(--muted)] text-[var(--secondary)] rounded-md border border-[var(--border)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
