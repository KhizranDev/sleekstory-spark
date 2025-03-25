
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AnimatedLine from '../components/AnimatedLine';
import SlideInElement from '../components/SlideInElement';

const AnimatedSectionDivider = () => {
  return (
    <div className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center">
          <AnimatedLine color="bg-btb-accent" height={3} duration={2.5} />
        </div>
      </div>
      
      {/* Animated elements moving across the screen */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 slide-across opacity-30">
        <div className="flex items-center space-x-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-16 h-16 rounded-full bg-btb-accent/20 backdrop-blur-sm" />
          ))}
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  useEffect(() => {
    // Add a class to body when component mounts
    document.body.classList.add('smooth-scroll');
    
    // Cleanup function
    return () => {
      document.body.classList.remove('smooth-scroll');
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <NavBar />
      <Hero />
      <AnimatedSectionDivider />
      <SlideInElement direction="left">
        <Services />
      </SlideInElement>
      <AnimatedSectionDivider />
      <SlideInElement direction="right">
        <CaseStudies />
      </SlideInElement>
      <AnimatedSectionDivider />
      <SlideInElement direction="left">
        <About />
      </SlideInElement>
      <AnimatedSectionDivider />
      <SlideInElement direction="right">
        <Contact />
      </SlideInElement>
      <Footer />
    </div>
  );
};

export default Index;
