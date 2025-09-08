'use client';

import { useState } from 'react';
import { portfolioData } from '@/app/lib/data';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Get all unique technologies for filtering
  const allTechnologies = Array.from(
    new Set(portfolioData.projects.flatMap(project => project.technologies))
  );

  const filteredProjects = selectedFilter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => 
        project.technologies.includes(selectedFilter)
      );

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Featured Projects
        </h2>
        
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in full-stack development and team leadership.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All Projects
          </button>
          
          {allTechnologies.slice(0, 8).map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedFilter === tech
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="p-6 flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 min-h-[3rem]">
                  <h3 className="text-xl font-semibold text-white line-clamp-2 flex-1 pr-2">
                    {project.title}
                  </h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                </div>
                
                {/* Description */}
                <div className="mb-4 min-h-[4.5rem]">
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
                
                {/* Technologies */}
                <div className="mb-4 min-h-[3.5rem]">
                  <h4 className="text-blue-400 font-medium mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-600 text-white px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Achievements */}
                <div className="mb-4 flex-1 min-h-[8rem]">
                  <h4 className="text-blue-400 font-medium mb-2 text-sm">Key Achievements:</h4>
                  <div className="space-y-2 h-32 overflow-y-auto pr-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="text-gray-300 text-xs flex items-start">
                        <span className="text-blue-400 mr-1 mt-1 flex-shrink-0">•</span>
                        <span className="leading-tight">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Action Button - Only Live Demo */}
                <div className="pt-4 border-t border-gray-700 mt-auto">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg transition-colors text-xs font-medium text-center block"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Notable Projects Section - From your original code */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-white">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "NeoinventReporting",
                description: "Complex web application with customizable reporting and dynamic visualization tools",
                tech: ["C#", "ADO.NET", "Angular 6", "ChartJS", "D3.js"]
              },
              {
                title: "My Seller Pal (MSP)",
                description: "SaaS-based web application for Amazon sellers analytics",
                tech: ["AngularJS", "TypeScript", "ASP.NET MVC", "WebAPI"]
              },
              {
                title: "Heidelberg PricingApp",
                description: "Pricing management application for beverage stores across the U.S.",
                tech: [".NET Core", "C#", "ADO.NET", "SQL Server"]
              },
              {
                title: "CancelOn CRM",
                description: "Robust ticket management system with automated email processing",
                tech: [".NET WebAPI", "AWS S3", "AngularJS", "SQL Server"]
              }
            ].map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-400 mb-2">8+</div>
              <div className="text-gray-300 text-sm">Projects Completed</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-400 mb-2">12+</div>
              <div className="text-gray-300 text-sm">Team Members Led</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Technologies Used</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-400 mb-2">8+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}