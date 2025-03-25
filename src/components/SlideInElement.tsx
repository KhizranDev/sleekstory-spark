
import React, { useEffect, useRef } from 'react';

type Direction = 'left' | 'right';

interface SlideInElementProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

const SlideInElement: React.FC<SlideInElementProps> = ({ 
  children, 
  direction = 'left', 
  delay = 0,
  className = '' 
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (elementRef.current) {
                elementRef.current.classList.add('translate-x-0', 'opacity-100');
                elementRef.current.classList.remove(
                  direction === 'left' ? '-translate-x-full' : 'translate-x-full',
                  'opacity-0'
                );
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [direction, delay]);

  return (
    <div 
      ref={elementRef}
      className={`transform transition-all duration-1000 ease-out ${
        direction === 'left' ? '-translate-x-full' : 'translate-x-full'
      } opacity-0 ${className}`}
    >
      {children}
    </div>
  );
};

export default SlideInElement;
