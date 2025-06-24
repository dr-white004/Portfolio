import React, { useState, useEffect } from 'react';
import { ExternalLink, Eye, Heart, Star, Code, Zap } from 'lucide-react';

function Project() {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);

  // Mock project images for demo
  const projectImg1 = "data:image/svg+xml,%3csvg width='400' height='250' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3e%3cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3e%3cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3e%3c/linearGradient%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grad1)' /%3e%3ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3eEducation Tracker%3c/text%3e%3c/svg%3e";
  const projectImg2 = "data:image/svg+xml,%3csvg width='400' height='250' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3e%3cstop offset='0%25' style='stop-color:%23f093fb;stop-opacity:1' /%3e%3cstop offset='100%25' style='stop-color:%23f5576c;stop-opacity:1' /%3e%3c/linearGradient%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grad2)' /%3e%3ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='28' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3eTimelines%3c/text%3e%3c/svg%3e";
  const projectImg3 = "data:image/svg+xml,%3csvg width='400' height='250' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3e%3cstop offset='0%25' style='stop-color:%234facfe;stop-opacity:1' /%3e%3cstop offset='100%25' style='stop-color:%2300f2fe;stop-opacity:1' /%3e%3c/linearGradient%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grad3)' /%3e%3ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='28' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3eAuction it%3c/text%3e%3c/svg%3e";

  const projects = [
    {
      title: 'Education Tracker',
      description: 'A comprehensive book tracking app built with Django Rest Framework and React. Organize reading into past, present, and future libraries with detailed chapter notes and personalized recommendations.',
      imageUrl: projectImg1,
      link: 'https://education-tracker.onrender.com/',
      tags: ['Django', 'React', 'JWT', 'TailwindCSS','PostgreSQL'],
      color: 'from-purple-500 to-blue-600',
      featured: true
    },
    {
      title: 'Timelines',
      description: 'A social media platform for creating posts, following others, and engaging through likes and comments. Built with Django for seamless social networking.',
      imageUrl: projectImg2,
      link: 'http://timeline-cquq.onrender.com/',
      tags: ['Django', 'Social Media', ],
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Auction it',
      description: 'An online marketplace for listing items, placing bids, and winning auctions. Features real-time updates, comments, and watchlist functionality.',
      imageUrl: projectImg3,
      link: 'https://demola.pythonanywhere.com/',
      tags: ['Django', 'Real-time', 'Marketplace'],
      color: 'from-cyan-500 to-blue-500'
    },
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectIndex = parseInt(entry.target.dataset.index);
            setVisibleProjects(prev => [...new Set([...prev, projectIndex])]);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const projectElements = document.querySelectorAll('.project-observer');
    projectElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent mb-6">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions and creative implementations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className={`project-observer transform transition-all duration-1000 ${
                visibleProjects.includes(index) 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-20 opacity-0 scale-95'
              } ${project.featured ? 'md:col-span-2 xl:col-span-1' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div 
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50 h-full flex flex-col"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[16/10] relative">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    
                    {/* Floating Actions */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-700" />
                      </a>
                    </div>

                    {/* Project Status Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                          <Star className="w-3 h-3 fill-current text-yellow-500" />
                          <span>Featured</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1 space-y-4">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                      {project.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-2 py-1 text-xs font-medium rounded-md bg-gradient-to-r ${project.color} text-white shadow-sm transform transition-all duration-300 hover:scale-105`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* CTA Section */}
                  <div className="pt-4 mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center w-full px-4 py-2.5 bg-gradient-to-r ${project.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group/btn text-sm`}
                    >
                      <span>View Project</span>
                      <ExternalLink className="ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                {/* Hover glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300 -z-10`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Action Cards */}
        <div className="mt-16 relative">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Explore More Button */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <button className="relative px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 text-gray-700 font-semibold hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:bg-clip-text transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="flex items-center space-x-2">
                  <Eye className="w-5 h-5" />
                  <span>Explore Live Demos</span>
                </div>
              </button>
            </div>

            {/* Favorite Projects */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-pink-500 fill-current animate-pulse" />
                  <span className="text-gray-700 font-semibold">Crafted with passion</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">More projects coming soon</span>
            <Star className="w-4 h-4 fill-current" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;