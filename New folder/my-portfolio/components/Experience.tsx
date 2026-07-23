import React, { useEffect, useState, useMemo } from 'react';
import { EXPERIENCES } from '../constants';
import { Experience as ExperienceUI } from '../types';
import { fetchExperiences } from '../services/api';

const formatPeriod = (start: string, end: string | null) => {
  const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : null;

  const startLabel = startDate.toLocaleDateString('en-US', options);
  const endLabel = endDate ? endDate.toLocaleDateString('en-US', options) : 'Present';
  return `${startLabel} - ${endLabel}`;
};

const Experience: React.FC = () => {
  const [experiences, setExperiences] = useState<ExperienceUI[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadExperiences = async () => {
      try {
        setIsLoading(true);
        const data = await fetchExperiences();
        const mappedData = data.map((exp) => ({
          company: exp.companyName,
          role: exp.title,
          period: formatPeriod(exp.dateOfJoining, exp.dateOfEnd),
          description: exp.details,
          skills: exp.techstack,
        }));
        setExperiences(mappedData);
      } catch (err) {
        console.error('Experience API error:', err);
        setError('Unable to load experience data. Showing defaults.');
      } finally {
        setIsLoading(false);
      }
    };

    loadExperiences();
  }, []);

  const experienceList = useMemo(() => {
    return experiences.length ? experiences : EXPERIENCES;
  }, [experiences]);

  if (isLoading) {
    return (
      <section className="py-24 bg-zinc-50 dark:bg-black flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-zinc-500 animate-pulse font-mono text-sm">Loading professional trajectory...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-24 bg-zinc-50 dark:bg-black transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Professional Trajectory</h2>
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

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-300 dark:before:via-zinc-800 before:to-transparent">
          {experienceList.map((exp, idx) => (
            <div key={`${exp.role}-${idx}`} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-900 text-indigo-600 dark:text-indigo-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="text-xs font-mono px-2 py-1 rounded-sm bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400">
                    {exp.period}
                  </span>
                </div>
                <div className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">{exp.company}</div>
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start leading-relaxed">
                      <span className="mr-2 mt-1.5 text-indigo-500 text-[6px]">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 text-[10px] font-mono border border-zinc-200 dark:border-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900 hover:border-indigo-500/30 transition-colors">
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
