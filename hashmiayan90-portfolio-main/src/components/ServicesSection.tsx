import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, Code, Zap, Shield } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Android App Development',
    description: 'End-to-end Android app development using modern tools like Kotlin, Jetpack Compose, and Material Design 3.',
    features: ['Native Android Apps', 'Modern UI/UX', 'Performance Optimized'],
  },
  {
    icon: Code,
    title: 'Backend Integration',
    description: 'Seamless integration with Firebase, Spring Boot, REST APIs, and real-time services for robust app functionality.',
    features: ['Firebase Integration', 'Spring Boot', 'REST APIs', 'Real-time Data'],
  },
  {
    icon: Zap,
    title: 'Real-time Features',
    description: 'Implementation of real-time features using Socket.IO, foreground services, and live tracking.',
    features: ['Live Updates', 'Background Services', 'Location Tracking'],
  },
  {
    icon: Shield,
    title: 'Secure Solutions',
    description: 'Building secure applications with proper authentication, data encryption, and privacy-focused design.',
    features: ['Authentication', 'Data Security', 'Privacy First'],
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background orbs */}
      <div className="floating-orb w-[500px] h-[500px] bg-primary/10 left-1/2 -translate-x-1/2 top-0" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Scalable, performance-optimized, and real-world-ready Android applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <service.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
