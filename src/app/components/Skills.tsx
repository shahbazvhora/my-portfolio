import { portfolioData } from '@/app/lib/data'

export default function Skills() {
  const { skills } = portfolioData;

  const SkillCategory = ({ title, items }: { title: string; items: string[] }) => (
    <div className="bg-card p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {items.map((skill, index) => (
          <span
            key={index}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">8+</div>
            <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">20+</div>
            <div className="text-gray-600 dark:text-gray-300">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
            <div className="text-gray-600 dark:text-gray-300">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">12+</div>
            <div className="text-gray-600 dark:text-gray-300">Team Members Led</div>
          </div>
        </div>

        <div className="space-y-8">
          <SkillCategory title="Programming Languages" items={skills.languages} />
          <SkillCategory title="Frameworks & Libraries" items={skills.frameworks} />
          <SkillCategory title="Tools & Platforms" items={skills.tools} />
          <SkillCategory title="Methodologies" items={skills.methodologies} />
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-white">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.certifications.map((cert, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{cert}</h4>
                    <p className="text-green-400">Verified</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}