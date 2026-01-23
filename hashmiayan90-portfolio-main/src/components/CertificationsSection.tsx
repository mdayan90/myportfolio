import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Eye, Download, Award, Calendar, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  filePath: string;
  viewUrl: string;
}

const certificates: Certificate[] = [
  {
    id: '1',
    title: 'AWS Certification',
    issuer: 'Amazon Web Services',
    year: '2026',
    filePath: '/certificates/AWS_Certified_Cloud_Practitioner.pdf',
    viewUrl: 'https://drive.google.com/file/d/1r4Q8VTdMXpxMV0RcY0OVO3chx-aaR4JN/view',
  },
  {
    id: '2',
    title: 'MongoDB Certification',
    issuer: 'MongoDB',
    year: '2025',
    filePath: '/certificates/MongoDB_Certificate.pdf',
    viewUrl: 'https://drive.google.com/file/d/1zwTzy7zQK5DWiVZny_NNS-90rx5-T1DM/view',
  },
  {
    id: '3',
    title: 'NoSQL Course Training – MongoDB Developer',
    issuer: 'Infosys',
    year: '2025',
    filePath: '/certificates/Infosys_MongoDB_Developer.pdf',
    viewUrl: 'https://drive.google.com/file/d/1sasQxaZg18_3w8dzYqkCMEPo30b-YuaL/view',
  },
  {
    id: '4',
    title: 'Forward Thinking Certificate',
    issuer: 'McKinsey & Company',
    year: '2025',
    filePath: '/certificates/McKinsey_Certificate.pdf',
    viewUrl: 'https://drive.google.com/file/d/1_PJqNMTvtqc3Ik0Fcrv_5yb0H6I_D426/view',
  },
  {
    id: '5',
    title: 'Oracle Generative AI Professional',
    issuer: 'Oracle',
    year: '2025',
    filePath: '/certificates/Oracle_GenAI_Certificate.pdf',
    viewUrl: 'https://drive.google.com/file/d/1dC0DJeH4S0fcD2x11BhU2FGZHDey5IYc/view',
  },
  {
    id: '6',
    title: 'Oracle AI Foundations Associate',
    issuer: 'Oracle',
    year: '2025',
    filePath: '/certificates/Oracle_AI_Foundation.pdf',
    viewUrl: 'https://drive.google.com/file/d/1olbs-CpRkK_6vJHjoUxk0_HpqjmGHFB7/view',
  },
];

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background orbs */}
      <div className="floating-orb w-64 h-64 bg-primary/20 top-20 -right-32" />
      <div className="floating-orb w-48 h-48 bg-accent/20 bottom-20 -left-24" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses that validate my skills and commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                
                <CardContent className="p-6 relative z-10">
                  {/* Certificate icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Award className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h3>

                  {/* Issuer and Year */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Building2 className="w-4 h-4" />
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.year}</span>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a href={cert.viewUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a href={cert.filePath} download>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
