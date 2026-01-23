import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Android Developer Intern',
    company: 'Xcentric Technology',
    duration: '1 Month',
    description: [
      'Worked on Android application development using Kotlin and Java',
      'Gained hands-on experience in real-world app workflows and collaboration',
      'Learned industry best practices for mobile app development',
      'Collaborated with team members on feature implementation',
    ],
    current: false,
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background orb */}
      <div className="floating-orb w-[500px] h-[500px] bg-primary/10 -right-40 top-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm mb-4">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="relative pl-20 pb-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center glow-effect">
                  <Briefcase size={16} className="text-primary-foreground" />
                </div>

                {/* Content card */}
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm bg-secondary px-3 py-1 rounded-full">
                      <Calendar size={14} />
                      {exp.duration}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 p-6 bg-gradient-to-r from-card to-secondary border border-border rounded-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-2xl">
                🎓
              </div>
              <div>
                <h3 className="font-bold text-foreground">Education</h3>
                <p className="text-primary">B.Tech - KIET Group of Institutions</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Currently in my 3rd year, pursuing Bachelor of Technology with a focus on software development and entrepreneurship.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
