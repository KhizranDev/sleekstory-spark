
import React, { useEffect, useRef } from 'react';

interface AnimatedLineProps {
  color?: string;
  height?: number;
  duration?: number;
  delay?: number;
}

const AnimatedLine: React.FC<AnimatedLineProps> = ({
  color = 'bg-btb-accent',
  height = 2,
  duration = 2,
  delay = 0
}) => {
  const lineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (lineRef.current) {
                lineRef.current.classList.add('w-full');
                lineRef.current.classList.remove('w-0');
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={lineRef}
      className={`w-0 ${color} h-[${height}px] transition-all duration-[${duration}s] ease-in-out`}
      style={{ transitionDuration: `${duration}s` }}
    />
  );
};

export default AnimatedLine;
