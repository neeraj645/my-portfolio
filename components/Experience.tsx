
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-zinc-50 dark:bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Professional Trajectory</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-300 dark:before:via-zinc-800 before:to-transparent">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-900 text-indigo-600 dark:text-indigo-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black hover:border-purple-500/50 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="text-xs font-mono px-2 py-1 rounded-sm bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400">
                    {exp.period}
                  </span>
                </div>
                <div className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">{exp.company}</div>
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start">
                      <span className="mr-2 mt-1 text-indigo-500 text-xs">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 text-[10px] font-mono border border-zinc-200 dark:border-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-900">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
