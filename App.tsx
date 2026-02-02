
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import HireMe from './components/HireMe';
import Chatbot from './components/Chatbot';
import { Theme, Page } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [activePage, setActivePage] = useState<Page>('home');

  // Load initial theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  // Force class application on document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  const renderPage = () => {
    return (
      <div key={activePage} className="animate-fadeIn min-h-full">
        {activePage === 'home' && <Hero onNavigate={setActivePage} />}
        {activePage === 'experience' && <Experience />}
        {activePage === 'technologies' && <Technologies />}
        {activePage === 'projects' && <Projects />}
        {activePage === 'hire-me' && <HireMe onNavigate={setActivePage} />}
        {activePage === 'contact' && <Contact />}
      </div>
    );
  };

  return (
    <div className="h-screen flex flex-col bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      <Navbar theme={theme} toggleTheme={toggleTheme} activePage={activePage} onNavigate={setActivePage} />
      
      <main className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700">
        <div className="min-h-full flex flex-col">
          <div className="flex-1 max-w-7xl mx-auto w-full">
            {renderPage()}
          </div>
        </div>
      </main>

      <Chatbot />
    </div>
  );
};

export default App;
