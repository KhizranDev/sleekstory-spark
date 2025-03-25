
import React, { useEffect, useRef } from 'react';
import { ChevronDown, Sparkles, Zap } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

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
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-btb-navy to-btb-blue/90">
        <div className="absolute top-20 left-[10%] animate-float opacity-70">
          <Sparkles className="text-white/30" size={32} />
        </div>
        <div className="absolute bottom-40 right-[15%] animate-float opacity-50" style={{ animationDelay: '2s' }}>
          <Sparkles className="text-white/30" size={48} />
        </div>
        <div className="absolute top-1/3 right-[20%] animate-float opacity-60" style={{ animationDelay: '3s' }}>
          <Zap className="text-btb-accent/40" size={40} />
        </div>
        
        {/* Moving lines across the screen */}
        <div className="moving-line" style={{ top: '20%', animationDuration: '15s' }}></div>
        <div className="moving-line" style={{ top: '40%', animationDuration: '20s', animationDelay: '2s' }}></div>
        <div className="moving-line" style={{ top: '70%', animationDuration: '12s', animationDelay: '5s' }}></div>
      </div>
      
      <div ref={heroRef} className="container mx-auto px-6 z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg slide-in-left opacity-0" 
               style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Strategic Solutions for Business Transformation
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl drop-shadow-md slide-in-right opacity-0"
             style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            We guide organizations through complex challenges with innovative strategies and actionable insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 slide-in-left opacity-0" 
               style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-white text-btb-navy hover:bg-btb-lightest transition-all duration-300 text-center transform hover:-translate-y-1 shadow-lg hover:shadow-xl font-medium group"
            >
              <span className="inline-flex items-center">
                Start a Project
                <Zap size={16} className="ml-2 text-btb-accent transition-transform group-hover:rotate-12" />
              </span>
            </a>
            <a
              href="#services"
              className="px-8 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-btb-navy transition-all duration-300 text-center transform hover:-translate-y-1 font-medium"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToServices}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce z-10"
        aria-label="Scroll down"
      >
        <span className="text-sm font-medium mb-2 drop-shadow-md">Scroll to explore</span>
        <ChevronDown size={24} className="drop-shadow-md" />
      </button>
    </section>
  );
};

export default Hero;
