
import React, { useEffect, useRef } from 'react';
import { 
  BarChart3, 
  Briefcase, 
  LineChart, 
  PieChart, 
  SquareCode, 
  Users2 
} from 'lucide-react';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Service: React.FC<ServiceProps> = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <div className="text-btb-blue mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-btb-navy">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card) => {
      card.classList.add('opacity-0');
      observer.observe(card);
    });

    return () => {
      serviceCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  const services = [
    {
      title: "Strategic Consulting",
      description: "Develop actionable strategies to address complex business challenges and drive sustainable growth.",
      icon: <Briefcase size={40} />
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights that inform critical business decisions.",
      icon: <BarChart3 size={40} />
    },
    {
      title: "Organizational Development",
      description: "Optimize your organizational structure and culture to enhance performance and employee engagement.",
      icon: <Users2 size={40} />
    },
    {
      title: "Digital Transformation",
      description: "Navigate the digital landscape with innovative solutions that modernize your business processes.",
      icon: <SquareCode size={40} />
    },
    {
      title: "Financial Modeling",
      description: "Create robust financial models to forecast performance and evaluate strategic initiatives.",
      icon: <LineChart size={40} />
    },
    {
      title: "Market Research",
      description: "Gain a deep understanding of your market, competitors, and customers to identify opportunities.",
      icon: <PieChart size={40} />
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We provide comprehensive solutions tailored to your specific business needs, helping you navigate complexity and achieve sustainable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
