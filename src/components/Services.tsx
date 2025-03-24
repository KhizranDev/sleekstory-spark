
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
  image: string;
}

const Service: React.FC<ServiceProps> = ({ title, description, icon, image }) => {
  return (
    <div className="service-card group">
      <div className="relative h-48 mb-6 overflow-hidden rounded-t-lg -mx-6 -mt-6">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-btb-navy/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 p-3 bg-white/90 rounded-full text-btb-blue">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-btb-navy group-hover:text-btb-blue transition-colors">{title}</h3>
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
      icon: <Briefcase size={40} />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights that inform critical business decisions.",
      icon: <BarChart3 size={40} />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
    },
    {
      title: "Organizational Development",
      description: "Optimize your organizational structure and culture to enhance performance and employee engagement.",
      icon: <Users2 size={40} />,
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070"
    },
    {
      title: "Digital Transformation",
      description: "Navigate the digital landscape with innovative solutions that modernize your business processes.",
      icon: <SquareCode size={40} />,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78252?q=80&w=2070"
    },
    {
      title: "Financial Modeling",
      description: "Create robust financial models to forecast performance and evaluate strategic initiatives.",
      icon: <LineChart size={40} />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
    },
    {
      title: "Market Research",
      description: "Gain a deep understanding of your market, competitors, and customers to identify opportunities.",
      icon: <PieChart size={40} />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-btb-lightest text-btb-blue rounded-full text-sm font-medium mb-4">Our Expertise</span>
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
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
