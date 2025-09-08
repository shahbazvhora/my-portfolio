'use client';

import { Rocket, Award } from 'lucide-react';
import { portfolioData } from '@/app/lib/data'

const achievementIcons = {
  'Project Leadership and Development': Rocket,
  'Ace of Initiative': Award,
};

export default function KeyAchievements() {
  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
        Awards & Recognition
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.keyAchievements.map((achievement, index) => {
            const IconComponent = achievementIcons[achievement.title as keyof typeof achievementIcons] || Award;
            
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                
                <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-300 dark:border-gray-700/50 hover:border-blue-400/30 transition-all duration-300 h-full">
                  <div className="flex justify-center mb-6">
                    <div className="p-3 bg-blue-600/20 rounded-full">
                      <IconComponent className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}