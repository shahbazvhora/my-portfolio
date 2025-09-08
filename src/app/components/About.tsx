import { portfolioData } from '@/app/lib/data'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-1 rounded-lg">
              <div className="bg-card p-8 rounded-lg">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {portfolioData.personalInfo.about}
                </p>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">7+</div>
                    <div className="text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">20+</div>
                    <div className="text-gray-400">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
            
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                <p className="text-blue-400">{edu.institution}</p>
                <p className="text-gray-400">{edu.period}</p>
                <p className="text-gray-400">{edu.location}</p>
              </div>
            ))}
            
            <h3 className="text-2xl font-semibold text-white mb-6 mt-8">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.languages.map((lang, index) => (
                <span
                  key={index}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {lang.name} ({lang.level})
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}