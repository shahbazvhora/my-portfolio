'use client';

import { portfolioData } from '@/app/lib/data'

export default function Hero() {
    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {portfolioData.personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-300 mb-8">
            {portfolioData.personalInfo.title}
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-300">
            {portfolioData.personalInfo.summary}
          </p>
  
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-300 hover-lift flex items-center gap-2"
            >
              <span>View My Work</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
  
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300 hover-lift"
            >
              Get In Touch
            </button>
          </div>
  
          {/* Scroll indicator */}
          <div className="mt-16">
            <button
              onClick={() => scrollToSection('about')}
              className="text-blue-300 hover:text-white animate-bounce flex flex-col items-center mx-auto"
            >
              <span className="text-sm mb-2">Scroll down</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    );
  }