import React, { useEffect, useRef, useState } from 'react';

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => setExpanded(prev => !prev);
  
  // Close the navbar when clicking outside of it
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Mock profile image for demo
  const pixx = "data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3e%3cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3e%3cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle cx='50' cy='50' r='40' fill='url(%23grad)' /%3e%3ctext x='50' y='58' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='white' text-anchor='middle'%3eA%3c/text%3e%3c/svg%3e";

  return (
    <nav 
      ref={navbarRef} 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50' 
          : 'bg-gradient-to-r from-purple-50/80 to-blue-50/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src={pixx} 
                alt="Profile" 
                className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full ring-2 ring-white/50 group-hover:ring-purple-500/50 transition-all duration-300 transform group-hover:scale-105"
              />
            </div>
            <a 
              href="#home" 
              className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Ademola
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {[
              { href: '#hero', label: 'Home' },
              { href: '#about', label: 'About' },
              { href: '#projects', label: 'Projects' }
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 lg:px-6 lg:py-3 font-semibold text-gray-700 hover:text-purple-600 transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleToggle}
            className="md:hidden relative p-2 rounded-lg hover:bg-gray-100/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span 
                className={`block w-5 h-0.5 bg-gray-600 transform transition-all duration-300 ${
                  expanded ? 'rotate-45 translate-y-1' : '-translate-y-1'
                }`}
              ></span>
              <span 
                className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
                  expanded ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span 
                className={`block w-5 h-0.5 bg-gray-600 transform transition-all duration-300 ${
                  expanded ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-lg rounded-2xl mx-2 mb-4 shadow-xl border border-gray-200/50">
            {[
              { href: '#hero', label: 'Home' },
              { href: '#about', label: 'About' },
              { href: '#projects', label: 'Projects' }
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setExpanded(false)}
                className="block px-6 py-3 font-semibold text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 transform hover:translate-x-2"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: expanded ? 'slideInFromRight 0.3s ease-out forwards' : 'none'
                }}
              >
                <span className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span>{item.label}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle animated border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      
      {/* CSS for mobile menu animation */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}

export default NavigationBar;