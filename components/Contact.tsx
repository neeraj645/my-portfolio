
import React, { useEffect, useState } from 'react';
import { ContactApi } from '../types';
import { fetchContacts } from '../services/api';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
<<<<<<< HEAD
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [contactLinks, setContactLinks] = useState<ContactApi | null>(null);
  const [loadError, setLoadError] = useState<string>('');
=======
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
>>>>>>> parent of 076e4f2 (dynamic form)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  useEffect(() => {
    const loadContacts = async () => {
      try {
        const data = await fetchContacts();
        if (data.length > 0) {
          setContactLinks(data[0]);
        }
      } catch (err) {
        console.error('Contacts API error:', err);
        setLoadError('Unable to load contact links. Showing defaults.');
      }
    };

    loadContacts();
  }, []);

  const activeLinks = contactLinks ?? {
    _id: 'default',
    email: 'neerajrajput.work@gmail.com',
    github: 'https://github.com/neeraj645',
    linkedin: 'https://linkedin.com/in/neerajrajput1',
    twitter: 'https://x.com/neeraj645',
  };

  return (
    <section id="contact" className="py-24 bg-zinc-50 dark:bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Initiate Handshake</h2>
            <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 rounded-full mb-8"></div>
            <p className="text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
              Open for opportunities in backend engineering, distributed systems, and DevOps. Let's discuss system design, performance bottlenecks, or just coffee.
            </p>
            {loadError && <p className="text-sm text-red-600 dark:text-red-400 mb-6">{loadError}</p>}
            <div className="space-y-6">
              {[
                {
                  label: 'Email',
                  value: activeLinks.email,
                  href: `mailto:${activeLinks.email}`,
                  icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                },
                {
                  label: 'GitHub',
                  value: activeLinks.github.replace(/^https?:\/\//, ''),
                  href: activeLinks.github,
                  icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
                },
                {
                  label: 'LinkedIn',
                  value: activeLinks.linkedin.replace(/^https?:\/\//, ''),
                  href: activeLinks.linkedin,
                  icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z',
                },
                {
                  label: 'X (Twitter)',
                  value: activeLinks.twitter.replace(/^https?:\/\//, ''),
                  href: activeLinks.twitter,
                  icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
                },
              ].map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                  <div className="p-3 rounded-md bg-white dark:bg-zinc-900 text-indigo-600 dark:text-indigo-400 shadow-sm group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-500 uppercase">{link.label}</div>
                    <div className="text-zinc-900 dark:text-zinc-100 font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-black p-8 rounded-md border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  // placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  // placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  // placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={status !== 'idle'}
                className="w-full py-4 bg-indigo-600 text-white font-bold rounded-sm hover:bg-purple-600 disabled:opacity-50 transition-colors flex items-center justify-center space-x-2"
              >
                {status === 'sending' ? (
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : status === 'success' ? (
                  <span>Message Sent Successfully</span>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
            <p className="font-mono text-sm text-zinc-400 dark:text-zinc-500">
                Made with AI by Neeraj
            </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
