import Link from 'next/link';
import { Zap, Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <Link href="#home" className="flex items-center gap-2 text-xl font-bold text-primary mb-2">
              <Zap className="h-6 w-6" />
              <span>Vsquare Digital</span>
            </Link>
            <p className="text-sm text-center md:text-left">Innovate. Integrate. Inspire.</p>
          </div>

          <div className="flex flex-col items-center text-sm">
            <h3 className="font-semibold mb-2 text-foreground">Quick Links</h3>
            <Link href="#services" className="hover:text-primary transition-colors mb-1">Services</Link>
            <Link href="#case-studies" className="hover:text-primary transition-colors mb-1">Case Studies</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact Us</Link>
          </div>

          <div className="flex flex-col items-center md:items-end">
             <h3 className="font-semibold mb-2 text-foreground">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-secondary-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-secondary-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-secondary-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} Vsquare Digital. All rights reserved.</p>
          <p className="mt-1">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link> | <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
