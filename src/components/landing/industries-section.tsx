import { SectionWrapper } from '@/components/shared/section-wrapper';
import { industries } from '@/data/industries';
import { Card, CardContent } from '@/components/ui/card';

export function IndustriesSection() {
  return (
    <SectionWrapper id="industries" title="Driving Success Across Industries" subtitle="Sectors We Serve">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {industries.map((industry, index) => (
          <div key={industry.id} className="text-center animate-fade-in group" style={{ animationDelay: `${index * 0.1}s` }}>
            <Card className="p-6 h-full flex flex-col items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:border-primary">
              <industry.icon className="h-12 w-12 text-primary mb-3 transition-transform duration-300 group-hover:scale-110" />
              <p className="font-medium text-foreground text-sm">{industry.name}</p>
            </Card>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
