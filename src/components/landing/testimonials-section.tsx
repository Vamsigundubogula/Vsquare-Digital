import Image from 'next/image';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { testimonials } from '@/data/testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" title="What Our Clients Say" subtitle="Testimonials">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={testimonial.id} className="flex flex-col p-6 shadow-lg animate-fade-in transition-all duration-300 hover:shadow-primary/20" style={{ animationDelay: `${index * 0.1}s` }}>
            <Quote className="h-8 w-8 text-primary/50 mb-4" />
            <CardContent className="flex-grow p-0">
              <p className="text-muted-foreground italic mb-6">&quot;{testimonial.quote}&quot;</p>
            </CardContent>
            <div className="flex items-center mt-auto pt-4 border-t border-border/50">
              <Avatar className="h-12 w-12 mr-4">
                {testimonial.avatarUrl && <AvatarImage src={testimonial.avatarUrl} alt={testimonial.clientName} data-ai-hint={testimonial.avatarHint} />}
                <AvatarFallback>{testimonial.clientName.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">{testimonial.clientName}</p>
                <p className="text-sm text-muted-foreground">{testimonial.clientCompany}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
