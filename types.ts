
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export type ProjectCategory = 'Company' | 'Freelance' | 'Personal' | 'Open Source';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  type: 'API' | 'Tool' | 'Infrastructure' | 'Database';
  category: ProjectCategory;
}

export type Theme = 'light' | 'dark';

export type Page = 'home' | 'experience' | 'technologies' | 'projects' | 'hire-me' | 'contact';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
