'use client';

import Image from 'next/image';
import { portfolioData } from '@/app/lib/data';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 text-gray-900 dark:text-white px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {portfolioData.personalInfo.name}
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-400 mb-8 font-medium">
              {portfolioData.personalInfo.title}
            </h2>

            <div className="max-w-2xl mx-auto lg:mx-0">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {portfolioData.personalInfo.summary}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">7+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">20+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-3 text-lg font-medium hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                View My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300 text-lg font-medium hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center p-1">
                <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                  <div className="w-60 h-60 md:w-76 md:h-76 bg-gray-700 rounded-full flex items-center justify-center text-4xl text-gray-400">
                    <span>📷</span>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm animate-bounce">
                ⚡
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-sm animate-pulse">
                💼
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('about')}
            className="text-blue-300 hover:text-white transition-colors flex flex-col items-center group"
          >
            <span className="text-sm mb-2 opacity-80 group-hover:opacity-100">Scroll to explore</span>
            <svg 
              className="w-6 h-6 animate-bounce group-hover:animate-none" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}