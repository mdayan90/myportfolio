import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'Kotlin', level: 90, color: 'from-primary to-pink-500' },
  { name: 'Java', level: 85, color: 'from-primary to-orange-500' },
  { name: 'Jetpack Compose', level: 80, color: 'from-primary to-pink-500' },
  { name: 'Spring Boot', level: 75, color: 'from-green-500 to-emerald-500' },
  { name: 'Firebase', level: 85, color: 'from-yellow-500 to-orange-500' },
  { name: 'REST APIs', level: 80, color: 'from-green-500 to-teal-500' },
  { name: 'Socket.IO', level: 75, color: 'from-primary to-pink-500' },
  { name: 'Foreground Services', level: 80, color: 'from-blue-500 to-primary' },
];

const technologies = [
  { name: 'Android Studio', icon: '📱' },
  { name: 'Git', icon: '🔀' },
  { name: 'Material Design', icon: '🎨' },
  { name: 'MVVM', icon: '🏗️' },
  { name: 'Room DB', icon: '💾' },
  { name: 'Retrofit', icon: '🔌' },
  { name: 'Spring Boot', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background orbs */}
      <div className="floating-orb w-[400px] h-[400px] bg-pink-500/10 -left-40 top-1/3" />
      <div className="floating-orb w-[300px] h-[300px] bg-primary/10 right-20 bottom-20" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm mb-4">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills with progress bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-6">Core Skills</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technology cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6">Tools & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-card border border-border rounded-xl text-center hover:border-primary/50 transition-all cursor-default"
                >
                  <span className="text-3xl mb-2 block">{tech.icon}</span>
                  <span className="text-sm font-medium text-foreground">{tech.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Android badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-pink-500/10 border border-primary/30 rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">🤖</div>
                <div>
                  <h4 className="font-semibold text-foreground">Android Development Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    Specializing in building scalable, performance-optimized Android applications
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
