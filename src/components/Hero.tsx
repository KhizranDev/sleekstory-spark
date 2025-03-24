
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const bannerImages = [
  {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    alt: "Business strategy meeting"
  },
  {
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
    alt: "Financial analysis"
  },
  {
    url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070",
    alt: "Team collaboration"
  },
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    alt: "Market research"
  },
  {
    url: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2070",
    alt: "Corporate leadership"
  },
  {
    url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071",
    alt: "Business professional"
  }
];

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
      <Carousel className="w-full h-full absolute top-0 left-0" opts={{ loop: true, duration: 50 }}>
        <CarouselContent className="h-full">
          {bannerImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-105" 
                  style={{backgroundImage: `url(${image.url})`}}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-btb-navy/80 to-btb-navy/40" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
          <CarouselPrevious className="relative h-10 w-10 rounded-full bg-white/30 hover:bg-white/50 text-white border-0" />
          <CarouselNext className="relative h-10 w-10 rounded-full bg-white/30 hover:bg-white/50 text-white border-0" />
        </div>
      </Carousel>
      
      <div ref={heroRef} className="container mx-auto px-6 z-10 stagger-animate">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-md">
            Strategic Solutions for Business Transformation
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl drop-shadow">
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
              className="px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-btb-navy transition-all duration-300 text-center transform hover:-translate-y-1"
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
        <span className="text-sm font-medium mb-2">Scroll to explore</span>
        <ChevronDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
