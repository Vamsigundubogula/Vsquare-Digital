import Image from 'next/image';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { CheckCircle } from 'lucide-react';

export function AboutUsSection() {
  const coreValues = [
    { text: "Innovation at our core" },
    { text: "Client-centric approach" },
    { text: "Unwavering commitment to quality" },
    { text: "Transparent and collaborative processes" },
  ];

  return (
    <SectionWrapper id="about" title="About V-SQUARE" subtitle="Who We Are">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Image
            // src="https://placehold.co/600x450.png"
            src="/images/vsquare-logo.jpg"
            alt="Team collaborating on a project"
            width={600}
            height={450}
            className="rounded-lg shadow-xl object-cover"
            data-ai-hint="team collaboration office"
          />
        </div>
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg text-muted-foreground">
          V-SQUARE is a forward-thinking technology partner dedicated to empowering businesses through innovative digital solutions. We specialize in creating bespoke web and mobile applications, designing intuitive user experiences, and implementing effective digital strategies that drive growth and efficiency.
          </p>
          <p className="text-lg text-muted-foreground">
            Our team of passionate experts combines cutting-edge technology with creative thinking to deliver impactful results. We believe in building long-term partnerships with our clients, founded on trust, transparency, and a shared vision for success.
          </p>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Our Core Values</h3>
            <ul className="space-y-2">
              {coreValues.map((value, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>{value.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
