import React, { useState, useEffect } from 'react';
import { X, FileText, Award, Download, ExternalLink, Code2, Cloud, Database, Zap, Lightbulb, Target } from 'lucide-react';
import cs50w from '../assets/images/CS50W.png';
import cs50x from '../assets/images/CS50x.png'; 
import cv from '../assets/pdf/ADEMOLA ABDULKAREEM resume.pdf';

function AboutMeSection() {
  const [showCvModal, setShowCvModal] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [activeTab, setActiveTab] = useState('story');

  

  const skills = [
    { name: 'HTML', category: 'Frontend', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', category: 'Frontend', level: 90, color: 'from-blue-500 to-purple-500' },
    { name: 'JavaScript', category: 'Frontend', level: 88, color: 'from-yellow-500 to-orange-500' },
    { name: 'React', category: 'Frontend', level: 85, color: 'from-cyan-500 to-blue-500' },
    { name: 'Bootstrap', category: 'Frontend', level: 80, color: 'from-purple-500 to-pink-500' },
    { name: 'Django', category: 'Backend', level: 92, color: 'from-green-500 to-emerald-500' },
    { name: 'Tailwind', category: 'Frontend', level: 87, color: 'from-yellow-600 to-red-600' },
    { name: 'Python', category: 'Backend', level: 90, color: 'from-blue-600 to-green-600' },
    { name: 'Git', category: 'Tools', level: 85, color: 'from-gray-600 to-gray-800' },
    { name: 'AWS', category: 'Cloud', level: 75, color: 'from-orange-600 to-yellow-600' },
    { name: 'Docker', category: 'DevOps', level: 80, color: 'from-blue-600 to-cyan-600' },
    { name: 'GitHub', category: 'Tools', level: 88, color: 'from-gray-700 to-black' },
    { name: 'Linux', category: 'Systems', level: 82, color: 'from-yellow-600 to-red-600' }
  ];

  const certificates = [
    { id: 1, image: cs50w, title: 'CS50W - Web Programming', issuer: 'Harvard University' },
    { id: 2, image: cs50x, title: 'CS50x - Computer Science', issuer: 'Harvard University' }
  ];

  const tabs = [
    { id: 'story', label: 'My Story', icon: Lightbulb },
    { id: 'mission', label: 'Mission', icon: Target },
    { id: 'approach', label: 'Approach', icon: Zap }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSkills(skills.map((_, index) => index));
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleCvShow = () => setShowCvModal(true);
  const handleCvClose = () => setShowCvModal(false);
  const handleCertShow = () => setShowCertModal(true);
  const handleCertClose = () => setShowCertModal(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'ADEMOLA_ABDULKAREEM_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getTabContent = () => {
    switch(activeTab) {
      case 'story':
        return (
          <div className="space-y-4 sm:space-y-6">
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              I'm a passionate <span className="font-semibold text-purple-600">Full-Stack Developer</span> who transforms ideas into digital reality. 
              My journey began with curiosity about how things work behind the scenes, and it evolved into a deep expertise in both frontend elegance and backend robustness.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              With a strong foundation in <span className="font-semibold">Python, Django, and React</span>, I craft solutions that not only function flawlessly but also provide exceptional user experiences. 
              My backend expertise ensures scalable, secure systems, while my frontend skills create interfaces that users love to interact with.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Beyond coding, I'm fascinated by cloud technologies and DevOps practices, constantly exploring how to make applications more efficient, scalable, and maintainable.
            </p>
          </div>
        );
      case 'mission':
        return (
          <div className="space-y-4 sm:space-y-6">
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              My mission is to bridge the gap between complex technical challenges and elegant, user-friendly solutions. 
              I believe that great software should be both powerful and intuitive.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              I'm driven by the opportunity to work on projects that make a real impact. Whether it's building a scalable web application, 
              optimizing database performance, or creating seamless user experiences, I approach each challenge with enthusiasm and precision.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Currently, I'm actively seeking opportunities to contribute to innovative teams where I can apply my full-stack expertise 
              while continuing to learn and grow in emerging technologies.
            </p>
          </div>
        );
      case 'approach':
        return (
          <div className="space-y-4 sm:space-y-6">
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              I believe in the power of <span className="font-semibold text-blue-600">rapid iteration and continuous learning</span>. 
              My approach combines solid engineering principles with agile methodologies to deliver solutions that exceed expectations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-4 sm:my-6">
              {[
                { title: 'Problem-First Thinking', desc: 'Understanding the core challenge before jumping to solutions' },
                { title: 'Clean Architecture', desc: 'Writing maintainable, scalable code that stands the test of time' },
                { title: 'User-Centric Design', desc: 'Ensuring every feature serves a real user need' },
                { title: 'Continuous Innovation', desc: 'Staying current with emerging technologies and best practices' }
              ].map((item, index) => (
                <div key={index} className="p-3 sm:p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200">
                  <h6 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{item.title}</h6>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover my journey, passion for technology, and the skills that drive my development career
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-200/50">
              <div className="flex items-center space-x-2 sm:space-x-4 mb-4 sm:mb-6 overflow-x-auto">
                <div className="flex space-x-1 flex-shrink-0">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <tab.icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="font-medium text-xs sm:text-sm">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="min-h-[250px] sm:min-h-[300px]">
                {getTabContent()}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleCvShow}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <FileText className="w-5 h-5" />
                <span>View Resume</span>
              </button>
              <button
                onClick={handleCertShow}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                <Award className="w-5 h-5" />
                <span>Certificates</span>
              </button>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-200/50">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-purple-600" />
                Technical Skills
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-700 ${
                      visibleSkills.includes(index) ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-800 text-sm sm:text-base">{skill.name}</span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${skill.color} text-white`}>
                          {skill.category}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: visibleSkills.includes(index) ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100 + 300}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { label: 'Projects Completed', value: '15+', icon: Target },
                { label: 'Technologies Mastered', value: '12+', icon: Code2 },
                { label: 'Years Learning', value: '3+', icon: Lightbulb },
                { label: 'Certifications', value: '2', icon: Award }
              ].map((stat, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-gray-200/50">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-purple-600" />
                  <div className="text-lg sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CV Modal */}
      {showCvModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">My Resume</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleDownloadCV}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
                <button
                  onClick={handleCvClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="w-full h-[70vh] border rounded-lg overflow-hidden">
                <iframe
                  src={cv}
                  width="100%"
                  height="100%"
                  title="Resume Preview"
                  className="border-0"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certificates Modal */}
      {showCertModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">My Certificates</h3>
              <button
                onClick={handleCertClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert) => (
                  <div key={cert.id} className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h4 className="font-semibold text-gray-900 mb-2">{cert.title}</h4>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AboutMeSection;