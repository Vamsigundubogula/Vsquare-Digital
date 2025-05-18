import type { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'E-commerce Platform Modernization',
    client: 'Global Retail Inc.',
    description: 'Revamped an outdated e-commerce site, resulting in a 40% increase in sales and improved user engagement.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'AWS'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'retail online shopping',
    detailsUrl: '#',
  },
  {
    id: 'cs2',
    title: 'Healthcare Data Analytics Solution',
    client: 'MediCare Solutions',
    description: 'Developed a secure data analytics platform for patient records, enhancing diagnostic accuracy and operational efficiency.',
    technologies: ['Python', 'React', 'HL7/FHIR', 'Azure'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'medical data',
    detailsUrl: '#',
  },
  {
    id: 'cs3',
    title: 'Fintech Mobile Application',
    client: 'AlphaInvest',
    description: 'Launched a user-friendly mobile app for investment tracking and management, attracting 50k+ users in 6 months.',
    technologies: ['React Native', 'Node.js', 'GraphQL', 'Firebase'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'finance app',
    detailsUrl: '#',
  },
];
