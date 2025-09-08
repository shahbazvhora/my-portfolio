import { portfolioData } from '@/app/lib/data'

export default function Footer() {
  return (
    <footer className="bg-card py-8 px-4 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href={portfolioData.personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={portfolioData.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${portfolioData.personalInfo.email}`}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}