
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export type ProjectCategory = string; // Made dynamic to support any category from API

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export interface HomepageApi {
  _id: string;
  name: string;
  skillsSet: string[];
  description: string;
  buttons: {
    title: string;
    color: string;
    link: string;
  }[];
}

export interface ExperienceApi {
  _id: string;
  title: string;
  dateOfJoining: string;
  dateOfEnd: string | null;
  companyName: string;
  details: string[];
  techstack: string[];
}

export interface TechStackApi {
  _id: string;
  name: string;
  category: string;
}

export interface ProjectApi {
  _id: string;
  title: string;
  owner: string;
  type: string;
  details: string[];
  tackStack: string[];
  link: string;
}

export interface HireMeApi {
  _id: string;
  resumeLink: string;
  experience: string;
  availibility: string;
  location: string;
}

export interface ContactApi {
  _id: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  type: string; // Made dynamic to support any type from API
  category: ProjectCategory;
}

export type Theme = 'light' | 'dark';

export type Page = 'home' | 'experience' | 'technologies' | 'projects' | 'hire-me' | 'contact';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
