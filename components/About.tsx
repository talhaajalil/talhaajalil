'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-[var(--background)]"
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
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* About Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                Who I Am
              </h3>
              <p className="text-[var(--secondary)] leading-relaxed">
                I&apos;m a DevOps Engineer and Computer Science graduate from FAST-NUCES with 
                experience in AWS, Docker, Kubernetes, CI/CD (Jenkins, Azure DevOps), and 
                monitoring tools like Grafana and Prometheus.
              </p>
              <p className="text-[var(--secondary)] leading-relaxed">
                Skilled in automating infrastructure, streamlining deployments, and building 
                scalable, reliable systems in cloud environments. I have hands-on experience 
                designing CI/CD pipelines, configuring AWS infrastructure, and implementing 
                comprehensive monitoring solutions.
              </p>
              <p className="text-[var(--secondary)] leading-relaxed">
                I&apos;m passionate about DevOps best practices, Infrastructure as Code, and 
                continuous improvement in software delivery processes.
              </p>
            </motion.div>

            {/* Education Card */}
            <motion.div variants={itemVariants}>
              <div className="bg-[var(--card)] rounded-2xl shadow-lg p-8 border border-[var(--border)]">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-[var(--primary)]/10 rounded-xl mr-4">
                    <svg
                      className="w-8 h-8 text-[var(--primary)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--foreground)]">Education</h3>
                </div>

                <div className="border-l-4 border-[var(--primary)] pl-6 py-2">
                  <h4 className="text-lg font-semibold text-[var(--foreground)]">
                    FAST National University of Computer and Emerging Sciences
                  </h4>
                  <p className="text-[var(--primary)] font-medium mt-1">
                    Bachelor of Science in Computer Science
                  </p>
                  <p className="text-[var(--secondary)] mt-2">
                    Islamabad, Pakistan
                  </p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <div className="flex items-center text-sm text-[var(--secondary)]">
                      <svg
                        className="w-4 h-4 mr-2 text-[var(--primary)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      2021 – 2025
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[var(--border)]">
                    <p className="text-sm text-[var(--secondary)]">
                      <span className="font-medium text-[var(--foreground)]">Relevant Coursework:</span> Cloud Computing, DevOps, Operating Systems, Computer Networks
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <motion.div
                  variants={itemVariants}
                  className="bg-[var(--card)] rounded-xl p-6 text-center border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
                >
                  <div className="text-3xl font-bold text-[var(--primary)]">4+</div>
                  <div className="text-sm text-[var(--secondary)] mt-1">Projects Completed</div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="bg-[var(--card)] rounded-xl p-6 text-center border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
                >
                  <div className="text-3xl font-bold text-[var(--primary)]">3+</div>
                  <div className="text-sm text-[var(--secondary)] mt-1">Work Experiences</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
