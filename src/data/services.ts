import type { Service } from '@/types';
import { Codepen, Smartphone, Palette, Megaphone, Cloud, Users } from 'lucide-react';

export const services: Service[] = [
  {
    id: 'web-dev',
    icon: Codepen,
    title: 'Web Development',
    description: 'Crafting responsive, high-performance websites and web applications tailored to your business needs.',
  },
  {
    id: 'mobile-dev',
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Building intuitive and engaging mobile applications for iOS and Android platforms.',
  },
  {
    id: 'ui-ux',
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Designing user-centric interfaces that enhance usability and provide a seamless user experience.',
  },
  {
    id: 'digital-marketing',
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to boost your online presence and drive growth.',
  },
  {
    id: 'cloud-solutions',
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Leveraging cloud technologies for scalable, secure, and efficient business operations.',
  },
  {
    id: 'it-consultancy',
    icon: Users,
    title: 'IT Consultancy',
    description: 'Expert IT consultancy to help you navigate the complexities of the digital landscape.',
  },
];
