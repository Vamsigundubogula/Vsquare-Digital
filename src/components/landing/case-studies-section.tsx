import Image from 'next/image';
import Link from 'next/link';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { AnimatedCard, AnimatedCardContent, AnimatedCardHeader, AnimatedCardTitle, AnimatedCardDescription, AnimatedCardFooter } from '@/components/shared/animated-card';
import { caseStudies } from '@/data/case-studies';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export function CaseStudiesSection() {
  return (
    <SectionWrapper id="case-studies" title="Our Success Stories" subtitle="Impactful Solutions" className="bg-secondary">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <AnimatedCard key={study.id} className="flex flex-col animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="relative h-48 w-full">
              <Image
                src={study.imageUrl}
                alt={study.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={study.imageHint}
              />
            </div>
            <AnimatedCardHeader>
              <AnimatedCardTitle className="text-xl">{study.title}</AnimatedCardTitle>
              <AnimatedCardDescription>Client: {study.client}</AnimatedCardDescription>
            </AnimatedCardHeader>
            <AnimatedCardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-3">{study.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {study.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </AnimatedCardContent>
            <AnimatedCardFooter>
              {study.detailsUrl && (
                <Button variant="link" asChild className="p-0 h-auto text-primary">
                  <Link href={study.detailsUrl}>
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </AnimatedCardFooter>
          </AnimatedCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
