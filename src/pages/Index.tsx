
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
      <Services />
      <CaseStudies />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
