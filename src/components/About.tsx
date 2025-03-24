
import React, { useEffect, useRef } from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, isLeft = true }) => {
  return (
    <div className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-12`}>
      <div className={`w-5/12 ${isLeft ? 'text-right pr-10' : 'text-left pl-10'}`}>
        <span className="text-btb-blue font-medium text-lg">{year}</span>
        <h3 className="text-2xl font-bold mb-2 text-btb-navy">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="w-2/12 flex justify-center relative">
        <div className="w-4 h-4 rounded-full bg-btb-blue z-10"></div>
        <div className="absolute top-0 bottom-0 w-px bg-btb-light"></div>
      </div>
      
      <div className="w-5/12"></div>
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
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Story</h2>
          <p className="section-subtitle">
            Since our founding, we've been committed to delivering exceptional consulting services and building lasting client relationships.
          </p>
        </div>
        
        <div ref={sectionRef} className="max-w-4xl mx-auto">
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
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-btb-navy">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-8">
            <div className="p-6 rounded-lg bg-btb-lightest">
              <h4 className="text-xl font-bold mb-2 text-btb-navy">Excellence</h4>
              <p className="text-gray-600">We are committed to delivering exceptional quality in everything we do.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-btb-lightest">
              <h4 className="text-xl font-bold mb-2 text-btb-navy">Integrity</h4>
              <p className="text-gray-600">We uphold the highest ethical standards and build trust through transparency.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-btb-lightest">
              <h4 className="text-xl font-bold mb-2 text-btb-navy">Innovation</h4>
              <p className="text-gray-600">We constantly seek new and better ways to solve complex business challenges.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
