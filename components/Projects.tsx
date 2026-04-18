import React, { useEffect, useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import { fetchProjects } from '../services/api';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setIsLoading(true);
        const data = await fetchProjects();
        setProjects(
          data.map((project) => ({
            title: project.title,
            description: project.details.join(' • '),
            tech: project.tackStack,
            link: project.link,
            type: project.type,
            category: project.owner,
          }))
        );
      } catch (err) {
        console.error('Projects API error:', err);
        setError('Unable to load project data. Showing defaults.');
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

  const projectList = projects.length ? projects : PROJECTS;

  // Dynamically derive categories from the data
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(projectList.map(p => p.category)));
    return ['All', ...uniqueCategories];
  }, [projectList]);

  // Derive filtered projects
  const filteredProjects = useMemo(() => {
    return activeCategory === 'All'
      ? projectList
      : projectList.filter(p => p.category === activeCategory);
  }, [activeCategory, projectList]);

  if (isLoading) {
    return (
      <section className="py-24 bg-white dark:bg-black flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-zinc-500 animate-pulse font-mono text-sm">Initializing system architectures...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">System Architectures</h2>
            <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
          </div>
          <p className="max-w-md text-zinc-500 dark:text-zinc-400 text-sm">
            Scalable, high-throughput systems designed for performance and reliability.
          </p>
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

        {/* Filter Buttons */}
        <div className="flex space-x-2 mb-12 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-sm text-sm font-medium transition-all duration-300 whitespace-nowrap border ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/25'
                  : 'bg-transparent text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div 
              key={`${project.title}-${idx}`} 
              className="group relative flex flex-col bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden transition-all duration-500 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5"
            >
              {/* Window Header Style */}
              <div className="h-9 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center px-4 space-x-2 justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                </div>
                <div className="flex items-center space-x-3">
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                    {project.category}
                    </span>
                    <span className="w-px h-3 bg-zinc-300 dark:bg-zinc-700"></span>
                    <span className="font-mono text-[10px] text-indigo-500/80 uppercase tracking-wider">
                    {project.type}
                    </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-full transition-colors group/link"
                        title="View Project"
                      >
                        <svg className="w-5 h-5 text-zinc-400 group-hover/link:text-indigo-500 transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                </div>
                
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800/50 border-dashed">
                  {project.tech.map((t) => (
                    <span 
                        key={t} 
                        className="px-2 py-1 text-[10px] font-mono font-medium rounded text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-900/30"
                    >
                      {t}
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

export default Projects;
