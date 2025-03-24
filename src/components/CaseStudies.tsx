
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudyProps {
  title: string;
  category: string;
  image: string;
  slug: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ title, category, image, slug }) => {
  return (
    <Link to={`/case-study/${slug}`} className="case-study-card block h-96">
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-btb-navy/90 to-transparent transition-opacity duration-300"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-10px]">
        <div className="flex flex-col text-white">
          <span className="text-sm font-medium text-btb-light mb-2">{category}</span>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <div className="flex items-center text-btb-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="mr-2">View Case Study</span>
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
};

const CaseStudies = () => {
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

    const cards = document.querySelectorAll('.case-study-card');
    cards.forEach((card) => {
      card.classList.add('opacity-0');
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  const caseStudies = [
    {
      title: "Financial Restructuring for Global Retailer",
      category: "Financial Strategy",
      image: "https://images.unsplash.com/photo-1664575599736-c5197c684128?q=80&w=2070",
      slug: "financial-restructuring"
    },
    {
      title: "Digital Transformation for Healthcare Provider",
      category: "Digital Strategy",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
      slug: "healthcare-transformation"
    },
    {
      title: "Market Expansion Strategy for Tech Startup",
      category: "Growth Strategy",
      image: "https://images.unsplash.com/photo-1661956602868-6ae368943878?q=80&w=2070",
      slug: "market-expansion"
    },
    {
      title: "Operational Efficiency for Manufacturing Company",
      category: "Operations",
      image: "https://images.unsplash.com/photo-1565951565704-da11451375ae?q=80&w=2070",
      slug: "operational-efficiency"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-btb-lightest">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">
            Explore our successful projects and discover how we've helped businesses overcome challenges and achieve their goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudy
              key={index}
              title={study.title}
              category={study.category}
              image={study.image}
              slug={study.slug}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center text-btb-navy hover:text-btb-blue transition-colors"
          >
            <span className="mr-2 font-medium">View All Case Studies</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
