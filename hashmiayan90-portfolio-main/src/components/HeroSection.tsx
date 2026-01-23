import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Orbs */}
      <div className="floating-orb w-[500px] h-[500px] bg-primary/30 top-20 -left-60 animate-pulse-glow" />
      <div className="floating-orb w-[400px] h-[400px] bg-pink-500/20 bottom-20 right-20 animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-[300px] h-[300px] bg-primary/20 top-1/2 left-1/3 animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm mb-6"
            >
              👋 Hello!
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              I'm <span className="gradient-text">Md Ayan Hashmi,</span>
              <br />
              <span className="text-foreground">Android Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg mb-8 max-w-lg"
            >
              Building modern Android apps to solve real-world problems and create impact-driven products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a href="/resume.pdf" download="Md_Ayan_Hashmi_Resume.pdf">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 text-primary"
                >
                  <Download className="mr-2" size={18} />
                  Download Resume
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com/mdayan90"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/md-ayan-hashmi-b72821289"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hashmiayan90@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-pink-500 blur-2xl opacity-30 animate-pulse-glow" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full gradient-border p-1">
                <img
                  src={profilePhoto}
                  alt="Md Ayan Hashmi"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
                className="absolute top-8 right-0 bg-card border border-border rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="text-primary text-2xl">⭐</div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">3rd</p>
                    <p className="text-xs text-muted-foreground">Year B.Tech</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
