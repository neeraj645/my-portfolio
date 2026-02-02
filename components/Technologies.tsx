
import React from 'react';
import { TECHNOLOGIES } from '../constants';

const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="py-24 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Core Stack & Tooling</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {TECHNOLOGIES.map((tech) => (
            <div key={tech.category} className="group">
              <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-6 flex items-center">
                <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 mr-2"></span>
                {tech.category}
              </h3>
              <ul className="space-y-4">
                {tech.items.map((item) => (
                  <li key={item} className="flex items-center text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors hover:text-purple-600 dark:hover:text-purple-400 cursor-default">
                    <svg className="w-4 h-4 mr-2 text-zinc-300 dark:text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
