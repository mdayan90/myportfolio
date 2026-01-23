import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Timer, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'MedistCallAmbulance',
    subtitle: 'Real-time Emergency Response System',
    duration: 'June 2025 – July 2025',
    techStack: ['Kotlin', 'Firebase', 'Socket.IO', 'REST API', 'Overlay UI', 'Foreground Services'],
    description: 'A comprehensive real-time ambulance booking system designed to save lives by reducing emergency response times.',
    highlights: [
      'Developed real-time ambulance booking with live location tracking',
      'Built background overlay for drivers to accept/reject emergency calls within 2 seconds',
      'Improved response efficiency by 30% across 500+ test cases',
      'Implemented secure authentication and online/offline toggle features',
      'Reduced average emergency response time by 10 minutes',
      'Improved backend reliability by 40%',
    ],
    metrics: [
      { value: '30%', label: 'Response Efficiency' },
      { value: '10min', label: 'Time Saved' },
      { value: '40%', label: 'Reliability Boost' },
    ],
    github: 'https://github.com/mdayan90',
    featured: true,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background orbs */}
      <div className="floating-orb w-[400px] h-[400px] bg-primary/10 -left-40 top-20" />
      <div className="floating-orb w-[300px] h-[300px] bg-pink-500/10 right-0 bottom-20" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm mb-4">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Projects that demonstrate my ability to solve real-world problems and create impactful solutions
          </p>
        </motion.div>

        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-card border border-border rounded-3xl overflow-hidden group hover:border-primary/50 transition-all">
              {/* Gradient accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-pink-500" />

              <div className="p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">{project.title}</h3>
                      {project.featured && (
                        <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-medium">{project.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Timer size={16} />
                    {project.duration}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-muted-foreground text-sm rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">{project.description}</p>

                {/* Highlights */}
                <div className="space-y-3 mb-8">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Zap size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center p-4 bg-secondary/50 rounded-xl">
                      <p className="text-2xl md:text-3xl font-bold gradient-text">{metric.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={18} className="mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                  <Button variant="outline" className="border-border hover:bg-secondary">
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
