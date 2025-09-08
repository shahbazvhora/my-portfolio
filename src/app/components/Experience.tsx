import { portfolioData } from '@/app/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Work Experience
        </h2>
        
        <div className="space-y-12">
          {portfolioData.experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-0 h-full w-6 flex justify-center">
                <div className="h-4 w-4 bg-blue-500 rounded-full"></div>
                {index !== portfolioData.experiences.length - 1 && (
                  <div className="h-full w-0.5 bg-blue-500 mt-4"></div>
                )}
              </div>
              
              <div className="ml-10">
                <div className="bg-gray-900 p-8 rounded-lg border-l-4 border-blue-500">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-blue-400 text-lg">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 bg-gray-700 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}