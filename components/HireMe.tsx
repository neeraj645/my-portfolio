import React, { useEffect, useState, useMemo } from 'react';
import { Page, HireMeApi } from '../types';
import { fetchHireMe } from '../services/api';

interface HireMeProps {
  onNavigate: (page: Page) => void;
}

const fallbackHireMe: Omit<HireMeApi, '_id'> = {
  resumeLink: '/resume.pdf',
  experience: '2+ years',
  availibility: 'Immediate',
  location: 'India (Remote)',
};

const HireMe: React.FC<HireMeProps> = ({ onNavigate }) => {
  const [hireMeData, setHireMeData] = useState<HireMeApi | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadHireMe = async () => {
      try {
        setIsLoading(true);
        const data = await fetchHireMe();
        if (data && data.length > 0) {
          setHireMeData(data[0]);
        }
      } catch (err) {
        console.error('Hire me API error:', err);
        setError('Unable to load hire-me data. Showing defaults.');
      } finally {
        setIsLoading(false);
      }
    };

    loadHireMe();
  }, []);

  const profile = useMemo(() => hireMeData || fallbackHireMe, [hireMeData]);

  if (isLoading) {
    return (
      <section className="py-20 bg-white dark:bg-black text-zinc-900 dark:text-white min-h-[85vh] flex items-center justify-center transition-colors duration-500">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-zinc-500 animate-pulse font-mono text-sm">Loading recruitment parameters...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="hire-me" className="py-20 bg-white dark:bg-black text-zinc-900 dark:text-white relative overflow-hidden min-h-[85vh] flex flex-col justify-center transition-colors duration-500">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
               
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready to Scale Your Backend?
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          I'm currently available for freelance projects and full-time roles. 
          If you need robust APIs, microservices architecture, or performance optimization, let's talk.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href={profile.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-purple-600 text-white font-bold rounded-md transition-colors group"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-zinc-200 dark:border-zinc-800 hover:border-purple-500 hover:text-purple-400 text-zinc-600 dark:text-zinc-300 font-bold rounded-md transition-colors"
          >
            Contact Details
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex justify-center space-x-12 text-sm font-mono text-zinc-500">
           <div>
               <span className="block text-zinc-500 dark:text-zinc-400 mb-1">Experience</span>
               {profile.experience}
           </div>
           <div>
               <span className="block text-zinc-500 dark:text-zinc-400 mb-1">Availability</span>
               {profile.availibility}
           </div>
           <div>
               <span className="block text-zinc-500 dark:text-zinc-400 mb-1">Location</span>
               {profile.location}
           </div>
        </div>
        {error && <p className="mt-6 text-xs text-red-500/60 font-mono">{error}</p>}
      </div>
    </section>
  );
};

export default HireMe;
