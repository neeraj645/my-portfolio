import { ApiResponse, ContactApi, ExperienceApi, HireMeApi, HomepageApi, ProjectApi, TechStackApi } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://my-portfolio-backend-8jly.onrender.com/api';

const fetchData = async <T>(path: string): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}: ${response.status} ${response.statusText}`);
  }

  const result = (await response.json()) as ApiResponse<T>;
  if (!result.success) {
    throw new Error(`API returned success=false for ${path}`);
  }

  return result.data;
};

export const fetchHomePages = async (): Promise<HomepageApi[]> => fetchData<HomepageApi[]>('/homepage');
export const fetchExperiences = async (): Promise<ExperienceApi[]> => fetchData<ExperienceApi[]>('/experiences');
export const fetchTechStacks = async (): Promise<TechStackApi[]> => fetchData<TechStackApi[]>('/techstacks');
export const fetchProjects = async (): Promise<ProjectApi[]> => fetchData<ProjectApi[]>('/projects');
export const fetchHireMe = async (): Promise<HireMeApi[]> => fetchData<HireMeApi[]>('/hireme');
export const fetchContacts = async (): Promise<ContactApi[]> => fetchData<ContactApi[]>('/contacts');
