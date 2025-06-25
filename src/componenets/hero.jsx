import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Instagram, ArrowDown, Code, Zap, Globe } from 'lucide-react';

function HeroSection() {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const dynamicTexts = [
    "Full-Stack Developer",
    "Digital Innovator", 
    "Problem Solver",
    "Tech Enthusiast"
  ];

  // Typewriter effect for dynamic text
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll function
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br py-30 from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Main Greeting */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-4">
              <span className="block text-white/90 mb-2">HEY, I'M</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                ADEMOLA
              </span>
              <span className="block text-white/90 text-4xl sm:text-5xl lg:text-6xl mt-2">
                ABDULKAREEM
              </span>
            </h1>
          </div>

          {/* Dynamic Role Text */}
          <div className="mb-8 h-16 flex items-center justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/80">
              <span className="inline-block mr-3">A Competent</span>
              <span className="relative inline-block">
                <span 
                  className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent transition-all duration-500"
                  key={currentText}
                >
                  {dynamicTexts[currentText]}
                </span>
                <span className="absolute -right-1 top-0 w-0.5 h-full bg-purple-400 animate-pulse"></span>
              </span>
            </h2>
          </div>

          {/* Enhanced Description */}
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6">
              I craft exceptional digital experiences from concept to deployment. 
              <span className="text-white font-semibold"> Specializing in modern web technologies</span>, 
              I transform complex problems into elegant solutions that drive business success.
            </p>
            
            {/* Tech Stack Indicators */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { icon: Code, label: "Frontend" },
                { icon: Zap, label: "Backend" },
                { icon: Globe, label: "Full-Stack" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/80 hover:bg-white/20 transition-all duration-300"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-16">
            <button
              onClick={scrollToProjects}
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="mr-2">VIEW MY WORK</span>
              <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
              
              {/* Button Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
            </button>
          </div>

          {/* Social Media Links */}
          <div className="hidden md:flex justify-center space-x-6">
            {[
              { 
                Icon: Linkedin, 
                href: "https://www.linkedin.com/in/ademola-abdulkareem-7a5086282", 
                label: "LinkedIn",
                color: "hover:text-blue-400"
              },
              { 
                Icon: Github, 
                href: "https://github.com/dr-white004/", 
                label: "GitHub",
                color: "hover:text-gray-300"
              },
              { 
                Icon: Twitter, 
                href: "https://twitter.com/AdemolaAbdulka7", 
                label: "Twitter",
                color: "hover:text-blue-400"
              },
              { 
                Icon: Instagram, 
                href: "https://github.com/your-username", 
                label: "Instagram",
                color: "hover:text-pink-400"
              }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/70 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:-translate-y-1`}
                aria-label={social.label}
              >
                <social.Icon className="w-6 h-6" />
                
                {/* Tooltip */}
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {social.label}
                </span>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/50" />
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default HeroSection;