
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = 1 - scrollY / 500;
      const translateY = scrollY * 0.3;
      
      if (heroRef.current) {
        heroRef.current.style.opacity = Math.max(opacity, 0).toString();
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-gradient-to-b from-btb-lightest to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
      </div>
      
      <div ref={heroRef} className="container mx-auto px-6 z-10 stagger-animate">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-btb-navy mb-6 leading-tight tracking-tight">
            Strategic Solutions for Business Transformation
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl">
            We guide organizations through complex challenges with innovative strategies and actionable insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-btb-navy text-white hover:bg-btb-blue transition-all duration-300 text-center transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Start a Project
            </a>
            <a
              href="#services"
              className="px-8 py-3 rounded-full border border-btb-navy text-btb-navy hover:bg-btb-navy hover:text-white transition-all duration-300 text-center transform hover:-translate-y-1"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToServices}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-btb-navy animate-float"
        aria-label="Scroll down"
      >
        <span className="text-sm font-medium mb-2">Scroll to explore</span>
        <ChevronDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
