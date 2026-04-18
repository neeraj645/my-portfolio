import React, { useEffect, useState, useMemo } from 'react';
import { Page, HomepageApi } from '../types';
import { fetchHomePages } from '../services/api';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const fallbackHero: HomepageApi = {
  _id: 'fallback',
  name: 'NEERAJ RAJPUT',
  skillsSet: ['Backend Engineer', 'Microservices', 'Distributed Systems'],
  description:
    'I architect scalable backend infrastructures using Go, Java, and Kubernetes. Currently focusing on high-throughput APIs, performance optimization, and building production-grade reliability for complex systems.',
  buttons: [
    { title: 'Hire Me', color: '#6366f1', link: 'hire-me' },
    { title: 'Projects', color: '#3b82f6', link: 'projects' },
  ],
};

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [heroData, setHeroData] = useState<HomepageApi | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadHero = async () => {
      try {
        setIsLoading(true);
        const data = await fetchHomePages();
        if (data && data.length > 0) {
          setHeroData(data[0]);
        }
      } catch (err) {
        console.error('Home page API error:', err);
        setError('Unable to load homepage data. Showing defaults.');
      } finally {
        setIsLoading(false);
      }
    };

    loadHero();
  }, []);

  const hero = useMemo(() => heroData || fallbackHero, [heroData]);

  if (isLoading) {
    return (
      <section className="min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto w-full">
            <div className="w-12 h-1 bg-indigo-600/20 rounded-full mb-8 animate-pulse"></div>
            <div className="h-16 w-3/4 bg-zinc-100 dark:bg-zinc-900 rounded-md mb-6 animate-pulse"></div>
            <div className="h-6 w-1/2 bg-zinc-100 dark:bg-zinc-900 rounded-md mb-8 animate-pulse"></div>
            <div className="h-24 w-full bg-zinc-100 dark:bg-zinc-900 rounded-md mb-12 animate-pulse"></div>
            <div className="flex gap-4">
                <div className="h-10 w-32 bg-zinc-100 dark:bg-zinc-900 rounded-md animate-pulse"></div>
                <div className="h-10 w-32 bg-zinc-100 dark:bg-zinc-900 rounded-md animate-pulse"></div>
            </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full relative">
        {/* Decorative background element */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="flex items-center space-x-2 mb-6 font-mono text-sm sm:text-base animate-in fade-in slide-in-from-left-4 duration-700">
          <span className="text-indigo-500 font-bold">$</span>
          <span className="text-zinc-600 dark:text-zinc-400">whoami</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display tracking-tight mb-6 text-indigo-600 dark:text-indigo-400 animate-in fade-in slide-in-from-left-6 duration-1000 delay-150">
          {hero.name}
        </h1>

        <div className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-700 dark:text-zinc-300 mb-8 font-mono animate-in fade-in slide-in-from-left-8 duration-1000 delay-300">
          {hero.skillsSet.join(' • ')}
        </div>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-left-10 duration-1000 delay-500">
          {hero.description}
        </p>

        <div className="flex flex-wrap gap-6 font-mono text-sm sm:text-base font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
          {hero.buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => onNavigate(button.link as Page)}
              style={{ '--btn-color': button.color } as React.CSSProperties}
              className="group relative flex items-center py-2 text-[color:var(--btn-color)] hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <span className="relative z-10 transition-transform group-hover:-translate-y-0.5">{button.title}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {error && (
          <p className="mt-8 text-xs font-mono text-red-600 dark:text-red-400 animate-pulse">
            // {error}
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero;