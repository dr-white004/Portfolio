import React, { useState, useEffect } from 'react';
import { ExternalLink, Eye, Heart, Star } from 'lucide-react';

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
      description: 'Education Tracker is a comprehensive book tracking app built with Django Rest Framework and React. It allows users to organize their reading into past, present, and future libraries, add detailed notes per chapter, and get personalized book recommendations. The app features secure authentication with SimpleJWT, a modern interface styled with Tailwind CSS, and seamless integration with OpenLibrary for discovering new reads.',
      imageUrl: projectImg1,
      link: 'https://education-tracker.onrender.com/',
      tags: ['Django', 'React', 'JWT', 'TailwindCSS'],
      color: 'from-purple-500 to-blue-600'
    },
    {
      title: 'Timelines',
      description: 'Explore Timelines, a social media platform that allows users to create posts, follow others, and engage through likes and comments. Built with Django, it offers a clean, user-friendly interface for seamless social networking.',
      imageUrl: projectImg2,
      link: 'http://timeline-cquq.onrender.com/',
      tags: ['Django', 'Social Media', 'PostgreSQL'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Auction it',
      description: 'Dive into Auctions, an online marketplace where users can list items, place bids, and win auctions. With real-time updates on bids, comments, and watchlist features, this Django-powered platform delivers a smooth, dynamic auction experience.',
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
        <div className="space-y-8 lg:space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className={`project-observer transform transition-all duration-1000 ${
                visibleProjects.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div 
                className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image Section */}
                <div className="lg:w-2/5 relative overflow-hidden">
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    
                    {/* Floating Action Button */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-700" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                      {project.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r ${project.color} text-white shadow-sm transform transition-all duration-300 hover:scale-105`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                      {project.description}
                    </p>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${project.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group/btn`}
                      >
                        <span>View Project</span>
                        <ExternalLink className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
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