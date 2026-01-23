import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/mdayan90', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/md-ayan-hashmi-b72821289', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hashmiayan90@gmail.com', label: 'Email' },
];

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold gradient-text">
              Ayan.dev
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Android Developer | Aspiring Entrepreneur
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            {/* <Heart size={14} className="text-primary" /> */}
            Made with by Md Ayan Hashmi © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};
