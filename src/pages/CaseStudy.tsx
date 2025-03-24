
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Mock data - in a real application, this would come from an API or CMS
  const caseStudies = {
    "financial-restructuring": {
      title: "Financial Restructuring for Global Retailer",
      category: "Financial Strategy",
      image: "https://images.unsplash.com/photo-1664575599736-c5197c684128?q=80&w=2070",
      client: "Global Retail Corporation",
      duration: "8 months",
      challenge: "The client was facing significant financial challenges due to changing market conditions and increased competition from e-commerce platforms. Their existing financial structure was not sustainable in the long term, with high debt levels and declining profitability.",
      solution: "Our team conducted a comprehensive financial analysis and developed a restructuring plan that included debt refinancing, cost optimization, and revenue enhancement strategies. We worked closely with the client's leadership team to implement the plan in phases.",
      results: [
        "Reduced overall debt by 35% through strategic refinancing",
        "Improved EBITDA margin by 12% through cost optimization",
        "Increased cash flow by $25 million annually",
        "Successfully negotiated terms with lenders and stakeholders",
        "Implemented new financial reporting and forecasting systems"
      ],
      testimonial: {
        quote: "The BTB Consulting team provided invaluable guidance during a critical period for our company. Their strategic approach to financial restructuring not only improved our balance sheet but positioned us for sustainable growth.",
        author: "CFO, Global Retail Corporation"
      }
    },
    "healthcare-transformation": {
      title: "Digital Transformation for Healthcare Provider",
      category: "Digital Strategy",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
      client: "Regional Healthcare Network",
      duration: "12 months",
      challenge: "The client was struggling with outdated systems and processes that were impacting patient care quality and operational efficiency. They needed a comprehensive digital transformation strategy to modernize their operations and improve patient experience.",
      solution: "We developed a multi-phase digital transformation roadmap that included implementing a new electronic health record system, developing a patient portal, and optimizing clinical workflows. Our team facilitated change management and provided training to ensure successful adoption.",
      results: [
        "Reduced patient wait times by 40%",
        "Increased physician productivity by 25%",
        "Improved patient satisfaction scores by 30%",
        "Achieved 98% electronic health record adoption rate",
        "Reduced administrative costs by $1.8 million annually"
      ],
      testimonial: {
        quote: "BTB Consulting's approach to our digital transformation was thorough and thoughtful. They understood our unique challenges and worked with us to implement solutions that have truly transformed our operations and patient care.",
        author: "CEO, Regional Healthcare Network"
      }
    },
    "market-expansion": {
      title: "Market Expansion Strategy for Tech Startup",
      category: "Growth Strategy",
      image: "https://images.unsplash.com/photo-1661956602868-6ae368943878?q=80&w=2070",
      client: "Innovative Tech Startup",
      duration: "6 months",
      challenge: "The client had achieved success in their domestic market and was looking to expand internationally, but lacked the strategy and infrastructure to enter new markets effectively.",
      solution: "Our team developed a comprehensive market expansion strategy, including market prioritization, entry models, localization requirements, and partnering strategies. We also assisted with building the organizational capabilities needed to support international operations.",
      results: [
        "Successfully launched in 3 new international markets",
        "Achieved 120% ROI on market expansion investment",
        "Increased total addressable market by 300%",
        "Developed strategic partnerships in key markets",
        "Built scalable international operations framework"
      ],
      testimonial: {
        quote: "The market expansion strategy developed by BTB Consulting was instrumental in our successful international growth. Their analysis was thorough, and their recommendations were practical and tailored to our specific situation.",
        author: "Founder & CEO, Innovative Tech Startup"
      }
    },
    "operational-efficiency": {
      title: "Operational Efficiency for Manufacturing Company",
      category: "Operations",
      image: "https://images.unsplash.com/photo-1565951565704-da11451375ae?q=80&w=2070",
      client: "Global Manufacturing Enterprise",
      duration: "10 months",
      challenge: "The client was experiencing declining margins due to operational inefficiencies across their manufacturing facilities. They needed to optimize their operations while maintaining product quality and meeting delivery timelines.",
      solution: "We conducted a comprehensive operational assessment across all facilities and implemented a lean manufacturing program. This included process redesign, supply chain optimization, and the implementation of a new production planning system.",
      results: [
        "Improved manufacturing efficiency by 28%",
        "Reduced inventory holding costs by $4.2 million",
        "Decreased production lead times by 35%",
        "Improved on-time delivery rate from 82% to 97%",
        "Enhanced product quality metrics by 15%"
      ],
      testimonial: {
        quote: "BTB Consulting's operational efficiency program transformed our manufacturing operations. Their hands-on approach and industry expertise were evident throughout the project, and the results have significantly improved our competitiveness.",
        author: "COO, Global Manufacturing Enterprise"
      }
    }
  };
  
  const caseStudy = slug ? caseStudies[slug as keyof typeof caseStudies] : null;
  
  useEffect(() => {
    if (!caseStudy) {
      navigate('/not-found');
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [caseStudy, navigate]);
  
  if (!caseStudy) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <div className="pt-24 md:pt-28">
        {/* Hero Section */}
        <div 
          className="relative h-[40vh] md:h-[60vh] bg-cover bg-center" 
          style={{ backgroundImage: `url(${caseStudy.image})` }}
        >
          <div className="absolute inset-0 bg-btb-navy/70"></div>
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-6 pb-12">
              <button 
                onClick={() => navigate(-1)} 
                className="mb-8 inline-flex items-center text-btb-light hover:text-white transition-colors"
              >
                <ArrowLeft size={18} className="mr-2" />
                <span>Back to Case Studies</span>
              </button>
              
              <span className="inline-block px-3 py-1 bg-btb-blue/30 text-btb-light rounded-full text-sm mb-4">
                {caseStudy.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
                {caseStudy.title}
              </h1>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-btb-navy">Challenge</h2>
                <p className="text-gray-600">{caseStudy.challenge}</p>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-btb-navy">Solution</h2>
                <p className="text-gray-600">{caseStudy.solution}</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-btb-navy">Results</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {caseStudy.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-12 p-8 bg-btb-lightest rounded-xl">
                <blockquote className="text-lg italic text-gray-700">
                  "{caseStudy.testimonial.quote}"
                </blockquote>
                <p className="mt-4 text-sm font-medium text-btb-navy">
                  — {caseStudy.testimonial.author}
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-28">
                <h2 className="text-xl font-bold mb-6 text-btb-navy border-b border-gray-200 pb-4">
                  Project Details
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">Client</h3>
                    <p className="font-medium">{caseStudy.client}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">Industry</h3>
                    <p className="font-medium">{caseStudy.category}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">Project Duration</h3>
                    <p className="font-medium">{caseStudy.duration}</p>
                  </div>
                  
                  <div className="pt-6">
                    <a
                      href="#contact"
                      className="block w-full py-3 px-4 bg-btb-navy text-white rounded-lg text-center hover:bg-btb-blue transition-colors duration-300"
                    >
                      Start a Similar Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CaseStudy;
