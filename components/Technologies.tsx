import React, { useEffect, useState, useMemo } from 'react';
import { TECHNOLOGIES } from '../constants';
import { TechStackApi } from '../types';
import { fetchTechStacks } from '../services/api';

const Technologies: React.FC = () => {
  const [techStacks, setTechStacks] = useState<TechStackApi[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadTechStacks = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTechStacks();
        setTechStacks(data);
      } catch (err) {
        console.error('Tech stack API error:', err);
        setError('Unable to load technology data. Showing defaults.');
      } finally {
        setIsLoading(false);
      }
    };

    loadTechStacks();
  }, []);

  const groupedTech = useMemo(() => {
    if (!techStacks.length) return TECHNOLOGIES;

    return techStacks.reduce(
        (groups: { category: string; items: string[] }[], tech) => {
          const existing = groups.find((group) => group.category === tech.category);
          if (existing) {
            existing.items.push(tech.name);
          } else {
            groups.push({ category: tech.category, items: [tech.name] });
          }
          return groups;
        },
        [] as { category: string; items: string[] }[]
      );
  }, [techStacks]);

  if (isLoading) {
    return (
      <section className="py-24 bg-white dark:bg-black flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-zinc-500 animate-pulse font-mono text-sm">Decoding tech stack architecture...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="technologies" className="py-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Core Stack & Tooling</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
        </div>

        {error && (
            <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-md">
                <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {error}
                </p>
            </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {groupedTech.map((tech) => (
            <div key={tech.category} className="group">
              <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-6 flex items-center group-hover:translate-x-1 transition-transform">
                <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 mr-2"></span>
                {tech.category}
              </h3>
              <ul className="space-y-4">
                {tech.items.map((item) => (
                  <li key={item} className="flex items-center text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-all hover:text-indigo-600 dark:hover:text-indigo-400 cursor-default group/item">
                    <svg className="w-4 h-4 mr-2 text-zinc-300 dark:text-zinc-700 group-hover/item:text-indigo-500/50 group-hover/item:scale-110 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
