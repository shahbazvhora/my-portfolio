'use client';

import { useTheme } from '@/context/ThemeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 animate-theme-switch"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-5 h-5">
        <SunIcon className={`w-5 h-5 text-yellow-500 absolute transition-all duration-300 ${
          theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
        }`} />
        <MoonIcon className={`w-5 h-5 text-blue-400 absolute transition-all duration-300 ${
          theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
        }`} />
      </div>
    </button>
  );
}