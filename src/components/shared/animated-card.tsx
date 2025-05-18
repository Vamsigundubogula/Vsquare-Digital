import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function AnimatedCard({ children, className, onClick }: AnimatedCardProps) {
  return (
    <Card 
      className={cn(
        "h-full transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl focus-within:scale-[1.03] focus-within:shadow-xl overflow-hidden",
        onClick ? "cursor-pointer" : "",
        className
      )}
      onClick={onClick}
      tabIndex={onClick ? 0 : -1}
      onKeyDown={onClick ? (e) => (e.key === 'Enter' || e.key === ' ') && onClick() : undefined}
    >
      {children}
    </Card>
  );
}

// Exporting individual card components for flexibility if needed elsewhere with same animation
export const AnimatedCardHeader = CardHeader;
export const AnimatedCardTitle = CardTitle;
export const AnimatedCardDescription = CardDescription;
export const AnimatedCardContent = CardContent;
export const AnimatedCardFooter = CardFooter;
