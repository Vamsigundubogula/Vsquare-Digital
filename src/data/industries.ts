import type { Industry } from '@/types';
import { HeartPulse, Landmark, GraduationCap, ShoppingCart, Cpu, Building } from 'lucide-react';

export const industries: Industry[] = [
  {
    id: 'healthcare',
    icon: HeartPulse,
    name: 'Healthcare',
  },
  {
    id: 'finance',
    icon: Landmark,
    name: 'Finance & Banking',
  },
  {
    id: 'education',
    icon: GraduationCap,
    name: 'Education',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    name: 'E-commerce',
  },
  {
    id: 'technology',
    icon: Cpu,
    name: 'Technology',
  },
  {
    id: 'real-estate',
    icon: Building,
    name: 'Real Estate',
  },
];
