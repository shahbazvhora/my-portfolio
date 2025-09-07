import { portfolioData } from '@/app/lib/data'

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-4 bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
                            <div className="p-6 flex-1 grid grid-rows-[auto_auto_auto_1fr_auto] gap-4">
                                {/* Header */}
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-semibold text-white line-clamp-2 flex-1 pr-2">
                                        {project.title}
                                    </h3>
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-blue-400 font-medium mb-2 text-sm">Technologies:</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="overflow-y-auto pr-2">
                                    <h4 className="text-blue-400 font-medium mb-2 text-sm">Key Achievements:</h4>
                                    <div className="space-y-2">
                                        {project.achievements.map((achievement, achIndex) => (
                                            <div key={achIndex} className="text-gray-300 text-xs flex items-start">
                                                <span className="text-blue-400 mr-1 mt-1 flex-shrink-0">•</span>
                                                <span className="leading-tight">{achievement}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-2 pt-4 border-t border-gray-700">
                                    <a
                                        href={project.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors text-sm text-center"
                                    >
                                        View Details
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Additional Projects Section */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-center mb-8 text-white">
                        Other Notable Projects
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {portfolioData.otherNotableProjects.map((project, index) => (
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
            </div>
        </section>
    );
}