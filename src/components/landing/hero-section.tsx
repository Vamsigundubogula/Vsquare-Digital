import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary/10 via-background to-background min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 md:py-32">
      <div className="absolute inset-0 opacity-5">
        {/* Optional: subtle background pattern or image */}
        {/* <Image src="https://placehold.co/1920x1080.png" alt="Abstract background" layout="fill" objectFit="cover" /> */}
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s' }}>
          Innovate. <span className="text-primary">Integrate</span>. Inspire.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in"
           style={{ animationDelay: '0.4s' }}>
          Vsquare Digital delivers cutting-edge digital solutions to transform your business.
          Partner with us to unlock your full potential in the ever-evolving digital landscape.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
             style={{ animationDelay: '0.6s' }}>
          <Button asChild size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-primary/50 transition-shadow">
            <Link href="#contact">
              Get In Touch <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-accent/50 transition-shadow">
            <Link href="#services">
              Explore Services
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
