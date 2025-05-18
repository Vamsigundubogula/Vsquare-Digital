import { HeroSection } from '@/components/landing/hero-section';
import { AboutUsSection } from '@/components/landing/about-us-section';
import { ServicesSection } from '@/components/landing/services-section';
import { IndustriesSection } from '@/components/landing/industries-section';
import { CaseStudiesSection } from '@/components/landing/case-studies-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { ContactUsSection } from '@/components/landing/contact-us-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ContactUsSection />
    </>
  );
}
