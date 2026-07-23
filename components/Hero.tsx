
import React from 'react';
import { Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full">
        {/* Terminal Command Style */}
        <div className="flex items-center space-x-2 mb-6 font-mono text-sm sm:text-base">
          <span className="text-indigo-500 font-bold">$</span>
          <span className="text-zinc-600 dark:text-zinc-400">whoami</span>
        </div>

        {/* Name Heading - Public Sans & Blue */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display tracking-tight mb-6 text-indigo-600 dark:text-indigo-400">
          NEERAJ RAJPUT
        </h1>

        {/* Roles Line */}
        <div className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-700 dark:text-zinc-300 mb-8 font-mono">
          Backend Engineer <span className="mx-2 text-zinc-400">•</span> Microservices <span className="mx-2 text-zinc-400">•</span> Distributed Systems
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl leading-relaxed">
          Software Engineer passionate about designing scalable backend architectures, developing high-performance APIs, and building reliable distributed systems that prioritize performance, maintainability, and operational excellence.
          {/* <span className="text-zinc-900 dark:text-zinc-100 font-semibold">Go</span>, <span className="text-zinc-900 dark:text-zinc-100 font-semibold">Java</span>, and <span className="text-zinc-900 dark:text-zinc-100 font-semibold">Kubernetes</span>. 
          Currently focusing on high-throughput APIs, performance optimization, and building production-grade reliability for complex systems. */}
        </p>

        {/* Minimalist Links - Blue to Purple hover */}
        <div className="flex items-center space-x-8 font-mono text-sm sm:text-base font-medium">
          <button
            onClick={() => onNavigate('experience')}
            className="text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400 pb-1 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-600 dark:hover:border-purple-400 transition-colors focus:outline-none"
          >
            view experience
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="text-zinc-500 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors focus:outline-none"
          >
            contact me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
