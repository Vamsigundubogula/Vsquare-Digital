import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Industry {
  id: string;
  icon: LucideIcon;
  name: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageHint: string;
  detailsUrl?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientCompany: string;
  avatarUrl?: string;
  avatarHint?: string;
}
