'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'DevOps Engineer',
    company: 'CareCloud',
    location: 'Islamabad, Pakistan',
    period: 'June 2025 – Present',
    description: [
      'Designed and implemented CI/CD pipelines using Azure DevOps, integrating Docker for containerized deployments and pushing images to Docker Hub for streamlined application delivery',
      'Configured Jenkins Master-Worker setup on AWS with VPC, public/private subnets, and security groups to ensure secure and scalable CI/CD workflows',
      'Built comprehensive monitoring dashboards using Grafana, Prometheus, Loki, Promtail, and cAdvisor to visualize CPU, memory, disk, container metrics, and real-time logs',
      'Managed AWS infrastructure, including EC2 instance recovery, S3 static website hosting, Route 53 DNS configuration, and CloudFront for optimized content delivery',
      'Automated infrastructure tasks using AWS CLI and CloudFormation, enhancing deployment efficiency',
      'Handled the whole project and created CI/CD pipelines for .NET applications and deploy the project',
    ],
    achievements: 'Restored EC2 SSH access after simulated PEM file loss; configured Route 53 and S3 for a React-based static website; set up ICMP monitoring with Prometheus and Node Exporter',
    technologies: ['Azure DevOps', 'Docker', 'Jenkins', 'AWS', 'Grafana', 'Prometheus', 'CloudFormation'],
  },
  {
    title: 'DevOps Engineer Intern',
    company: 'CareCloud',
    location: 'Islamabad, Pakistan',
    period: 'May 2025 – June 2025',
    description: [
      'Developed foundational DevOps skills through hands-on labs in Linux CLI, networking (DNS, routing, switching), and containerization with Docker',
      'Completed training on AWS services (IAM, EC2, RDS, Route 53) and practiced resource provisioning using AWS Free Tier',
      'Mastered Git workflows, including branching, merging, pull requests, and conflict resolution',
      'Deployed web applications using Apache HTTP Server, Apache Tomcat, Flask, and Express',
      'Learned configuration file management with YAML and JSON for tools like Ansible and Kubernetes',
    ],
    achievements: 'Configured DNS records and routing policies in Route 53; practiced Docker CLI commands and built containerized environments; studied 2-tier application architecture',
    technologies: ['Linux', 'Docker', 'AWS', 'Git', 'Apache', 'Flask', 'YAML'],
  },
  {
    title: 'Cloud Engineer Intern',
    company: 'RepairDesk',
    location: 'Lahore, Punjab, Pakistan',
    period: 'June 2024 – August 2024',
    description: [
      'Managed AWS cloud resources (EC2, S3, RDS, Lambda, CloudFormation, IAM) to support application deployments and infrastructure optimization',
      'Assisted in provisioning and configuring cloud environments for operational efficiency and security compliance',
      'Gained experience with Infrastructure as Code using CloudFormation templates',
    ],
    achievements: '',
    technologies: ['AWS EC2', 'S3', 'RDS', 'Lambda', 'CloudFormation', 'IAM'],
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
                      <p className="text-sm text-[var(--secondary)]">
                        {exp.location}
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
