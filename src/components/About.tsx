
import React, { useEffect, useRef } from 'react';
import { Zap, Award, Heart } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, isLeft = true }) => {
  return (
    <div className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-16`}>
      <div className={`w-5/12 ${isLeft ? 'text-right pr-10' : 'text-left pl-10'}`}>
        <span className="text-btb-blue font-medium text-lg bg-btb-lightest px-3 py-1 rounded-full inline-block mb-2">{year}</span>
        <h3 className="text-2xl font-bold mb-2 text-btb-navy">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="w-2/12 flex justify-center relative">
        <div className="w-8 h-8 rounded-full bg-btb-accent text-white flex items-center justify-center shadow-lg z-10">
          <span className="text-sm font-bold">{year.substring(2)}</span>
        </div>
        <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-btb-blue via-btb-light to-btb-lightest rounded-full"></div>
      </div>
      
      <div className="w-5/12"></div>
    </div>
  );
};

const ValueCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
  return (
    <div className="p-6 rounded-xl bg-white shadow-lg border border-btb-lightest group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="w-12 h-12 rounded-full bg-btb-accent/10 flex items-center justify-center text-btb-accent mb-4 group-hover:bg-btb-accent group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-2 text-btb-navy">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timelineItems = entry.target.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-fade-in');
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-btb-lightest/50">
      <div className="section-container relative">
        {/* Decorative elements */}
        <div className="absolute -top-20 left-0 w-64 h-64 bg-btb-light/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-btb-accent/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="text-center mb-20">
          <span className="bg-btb-lightest text-btb-blue px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">Our Journey</span>
          <h2 className="section-title">Our Story</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Since our founding, we've been committed to delivering exceptional consulting services and building lasting client relationships that drive meaningful change.
          </p>
        </div>
        
        <div ref={sectionRef} className="max-w-5xl mx-auto">
          <div className="timeline-item opacity-0">
            <TimelineItem
              year="2008"
              title="Our Beginning"
              description="BTB Consulting was founded with a vision to provide strategic solutions that drive meaningful business transformation."
            />
          </div>
          
          <div className="timeline-item opacity-0">
            <TimelineItem
              year="2012"
              title="Expanding Our Expertise"
              description="We expanded our service offerings to include data analytics and financial modeling, addressing the growing needs of our clients."
              isLeft={false}
            />
          </div>
          
          <div className="timeline-item opacity-0">
            <TimelineItem
              year="2016"
              title="Global Reach"
              description="BTB Consulting expanded operations internationally, bringing our strategic solutions to clients across multiple continents."
            />
          </div>
          
          <div className="timeline-item opacity-0">
            <TimelineItem
              year="2020"
              title="Digital Transformation"
              description="We launched our digital transformation practice to help clients navigate the increasingly complex digital landscape."
              isLeft={false}
            />
          </div>
          
          <div className="timeline-item opacity-0">
            <TimelineItem
              year="Today"
              title="Continued Innovation"
              description="We continue to innovate and evolve our services, combining deep industry expertise with cutting-edge methodologies to deliver exceptional results."
            />
          </div>
        </div>
        
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold mb-8 text-btb-navy">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10">
            <ValueCard 
              title="Excellence" 
              description="We are committed to delivering exceptional quality in everything we do."
              icon={<Award size={24} />}
            />
            
            <ValueCard 
              title="Integrity" 
              description="We uphold the highest ethical standards and build trust through transparency."
              icon={<Zap size={24} />}
            />
            
            <ValueCard 
              title="Innovation" 
              description="We constantly seek new and better ways to solve complex business challenges."
              icon={<Heart size={24} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
