
import React from 'react';
import { Page } from '../types';

interface HireMeProps {
  onNavigate: (page: Page) => void;
}

const HireMe: React.FC<HireMeProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-zinc-900 dark:bg-black text-white relative overflow-hidden min-h-[85vh] flex flex-col justify-center">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Let's Engineer Systems That Scale.
        </h2>
        <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Available for freelance and full-time opportunities. If you're building scalable backend systems, let's connect.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-purple-600 text-white font-bold rounded-md transition-colors group"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-zinc-700 hover:border-purple-500 hover:text-purple-400 text-zinc-300 font-bold rounded-md transition-colors"
          >
            Contact Details
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex justify-center space-x-12 text-sm font-mono text-zinc-500">
          <div>
            <span className="block text-zinc-400 mb-1">Experience</span>
            2+ Years
          </div>
          <div>
            <span className="block text-zinc-400 mb-1">Availability</span>
            30 Days Notice
          </div>
          <div>
            <span className="block text-zinc-400 mb-1">Location</span>
            India (Remote)
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
