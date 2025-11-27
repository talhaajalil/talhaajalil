'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Centralized Monitoring System',
    date: '',
    description: 'A comprehensive monitoring stack for real-time visualization of system logs, container metrics, and Docker performance.',
    details: [
      'Developed a monitoring stack using Grafana, Prometheus, Loki, Promtail, and cAdvisor on AWS EC2 for real-time visualization of system logs, container metrics, and Docker performance',
      'Configured Prometheus and Node Exporter for EC2 AMI metrics and Loki/Promtail for log aggregation',
    ],
    technologies: ['Grafana', 'Prometheus', 'Loki', 'Promtail', 'cAdvisor', 'AWS EC2'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Jenkins Master-Worker CI/CD Setup',
    date: '',
    description: 'A secure Jenkins CI/CD environment on AWS with VPC configuration for scalable workflows.',
    details: [
      'Built a secure Jenkins CI/CD environment on AWS with VPC, public/private subnets, and EC2 instances for master and worker nodes',
      'Ensured secure communication and internet access for worker nodes through security groups',
    ],
    technologies: ['Jenkins', 'AWS VPC', 'EC2', 'Security Groups'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Azure DevOps CI/CD Pipeline',
    date: '',
    description: 'CI/CD pipelines in Azure DevOps for containerized builds and deployment to on-premise servers.',
    details: [
      'Created CI/CD pipelines in Azure DevOps for all applications, integrating Docker for containerized builds and deployment to on-premise servers configuring all the setup',
      'Configured YAML-based pipelines for dependency installation, testing, and artifact creation using a self-hosted agent',
    ],
    technologies: ['Azure DevOps', 'Docker', 'YAML', 'C#', 'Git'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'WattWiseAI – Intelligent Electricity Demand Forecasting System',
    date: '',
    description: 'A modular forecasting system using Python and machine learning for electricity demand prediction.',
    details: [
      'Developed a modular forecasting system using Python, integrating machine learning models for electricity demand prediction',
      'Deployed interactive web interfaces on cloud infrastructure for real-time predictions',
    ],
    technologies: ['Python', 'AWS', 'Web Development', 'Machine Learning'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
