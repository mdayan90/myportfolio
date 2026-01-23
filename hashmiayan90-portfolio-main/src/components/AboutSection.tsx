import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Target, Rocket } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'B.Tech at KIET Group of Institutions, 3rd Year (Ongoing)',
    },
    {
      icon: Target,
      title: 'Focus',
      description: 'Android Development with Kotlin, Java & Jetpack Compose',
    },
    {
      icon: Rocket,
      title: 'Goal',
      description: 'Building impact-driven products as an entrepreneur',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background orb */}
      <div className="floating-orb w-[600px] h-[600px] bg-primary/10 -right-60 top-0" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Get to know <span className="gradient-text">who I am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-pink-500/20 rounded-3xl blur-3xl" />
              
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden border border-border bg-card">
                <img
                  src={profilePhoto}
                  alt="Md Ayan Hashmi"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-60 blur-2xl" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Passionate about building{' '}
              <span className="gradient-text">meaningful technology</span>
            </h3>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm Md Ayan Hashmi, a B.Tech 3rd-year student and an aspiring entrepreneur. 
              I work as an Android Developer, building modern apps using Java, Kotlin, and 
              Jetpack Compose. Passionate about solving real-world problems through technology 
              and creating impact-driven products that make a difference in people's lives.
            </p>

            <div className="grid gap-4">
              {cards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <card.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{card.title}</h4>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
