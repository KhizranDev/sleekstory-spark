
import React, { useEffect, useRef } from 'react';
import { Award, Heart, Zap, Briefcase, Clock, Users } from 'lucide-react';

const IconCard = ({ icon, title, description, delay = 0 }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay?: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (cardRef.current) {
                cardRef.current.classList.add('opacity-100', 'translate-y-0');
                cardRef.current.classList.remove('opacity-0', 'translate-y-4');
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-lg shadow-md p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg border border-btb-lightest/50 opacity-0 translate-y-4"
    >
      <div className="w-14 h-14 rounded-full bg-btb-accent/10 text-btb-accent flex items-center justify-center mb-4 mx-auto transform transition-transform duration-300 hover:scale-110 hover:rotate-3">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-btb-navy text-center mb-3">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const About = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-btb-lightest/30">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <span className="bg-btb-lightest text-btb-blue px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-btb-navy mb-6">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 2008, we've been committed to delivering exceptional consulting services and building 
            lasting client relationships that drive meaningful change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <IconCard
            icon={<Briefcase size={28} />}
            title="Humble Beginnings"
            description="Founded in 2008 with a vision to provide strategic solutions that drive meaningful business transformation."
            delay={100}
          />
          <IconCard
            icon={<Users size={28} />}
            title="Growing Team"
            description="Expanded globally with talented professionals delivering exceptional service across multiple continents."
            delay={300}
          />
          <IconCard
            icon={<Clock size={28} />}
            title="Constant Evolution"
            description="Continually adapting our services to meet the changing needs of businesses in a digital world."
            delay={500}
          />
        </div>

        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold mb-10 text-btb-navy">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <IconCard
              icon={<Award size={28} className="animate-pulse" />}
              title="Excellence"
              description="We are committed to delivering exceptional quality in everything we do."
              delay={200}
            />
            <IconCard
              icon={<Zap size={28} className="animate-pulse" />}
              title="Integrity"
              description="We uphold the highest ethical standards and build trust through transparency."
              delay={400}
            />
            <IconCard
              icon={<Heart size={28} className="animate-pulse" />}
              title="Innovation"
              description="We constantly seek new and better ways to solve complex business challenges."
              delay={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
