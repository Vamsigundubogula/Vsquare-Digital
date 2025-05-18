import { SectionWrapper } from '@/components/shared/section-wrapper';
import { AnimatedCard, AnimatedCardContent, AnimatedCardHeader, AnimatedCardTitle, AnimatedCardDescription } from '@/components/shared/animated-card';
import { services } from '@/data/services';

export function ServicesSection() {
  return (
    <SectionWrapper id="services" title="Our Expertise" subtitle="Services We Offer" className="bg-secondary">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <AnimatedCard key={service.id} className={`animate-fade-in [animation-delay:${index * 0.1}s]`}>
            <AnimatedCardHeader className="items-center text-center">
              <div className="p-3 bg-primary/10 rounded-full inline-block mb-4">
                <service.icon className="h-10 w-10 text-primary" />
              </div>
              <AnimatedCardTitle className="text-xl">{service.title}</AnimatedCardTitle>
            </AnimatedCardHeader>
            <AnimatedCardContent className="text-center">
              <AnimatedCardDescription>{service.description}</AnimatedCardDescription>
            </AnimatedCardContent>
          </AnimatedCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
