import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
}

export function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className,
  titleClassName,
  subtitleClassName,
  contentClassName,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto px-4 md:px-6">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {subtitle && (
              <p className={cn('text-base font-semibold uppercase tracking-wider text-primary mb-2', subtitleClassName)}>
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className={cn('text-3xl md:text-4xl font-bold text-foreground', titleClassName)}>
                {title}
              </h2>
            )}
          </div>
        )}
        <div className={cn(contentClassName)}>
          {children}
        </div>
      </div>
    </section>
  );
}
