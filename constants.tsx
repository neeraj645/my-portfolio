import React from 'react';
import { Experience, Project } from './types';

export const EXPERIENCES: Experience[] = [
  {
    company: 'CloudSystems Inc.',
    role: 'Backend Engineer',
    period: 'Jan 2023 - Present',
    description: [
      'Architected and implemented a high-performance API Gateway handling 10M+ daily requests using Go and gRPC.',
      'Optimized database queries in PostgreSQL, reducing average latency by 45% through strategic indexing and query refactoring.',
      'Containerized microservices using Docker and orchestrated deployments on Kubernetes (EKS).',
      'Developed a distributed locking mechanism using Redis to ensure data consistency across multiple service instances.'
    ],
    skills: ['Go', 'gRPC', 'PostgreSQL', 'Kubernetes', 'Redis']
  },
  {
    company: 'DataStream Solutions',
    role: 'Junior Backend Developer',
    period: 'Jun 2022 - Dec 2022',
    description: [
      'Developed RESTful APIs using Python/FastAPI for a real-time monitoring dashboard.',
      'Integrated Kafka as a message broker for asynchronous data processing pipelines.',
      'Implemented OAuth2 and JWT-based authentication flows for internal tooling.',
      'Collaborated on migrating legacy monolithic applications to a more scalable microservices architecture.'
    ],
    skills: ['Python', 'FastAPI', 'Kafka', 'Docker', 'PostgreSQL']
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Distributed Log Aggregator',
    description: 'A custom tool designed to collect and parse logs from multiple servers in real-time using Go and NATS. Includes a centralized dashboard for log visualization.',
    tech: ['Go', 'NATS', 'InfluxDB', 'Grafana'],
    type: 'Infrastructure',
    category: 'Company'
  },
  {
    title: 'Inventory Cache Sync',
    description: 'An eventual consistency engine that synchronizes primary SQL databases with high-speed Redis caches, handling race conditions and ensuring minimal stale data.',
    tech: ['Node.js', 'Redis', 'RabbitMQ', 'PostgreSQL'],
    type: 'Infrastructure',
    category: 'Freelance'
  },
  {
    title: 'AuthGuard Middleware',
    description: 'A lightweight, pluggable authentication middleware for Express.js supporting RBAC and dynamic policy evaluation via OPA.',
    tech: ['TypeScript', 'Express', 'Open Policy Agent'],
    type: 'API',
    category: 'Personal'
  },
  {
    title: 'Scalable Image Processor',
    description: 'A worker-based image processing service that handles asynchronous resizing and optimization using AWS S3 and Lambda.',
    tech: ['Python', 'AWS S3', 'Lambda', 'Serverless Framework'],
    type: 'Tool',
    category: 'Freelance'
  }
];

export const TECHNOLOGIES = [
  { category: 'Languages', items: ['Go', 'Python', 'TypeScript', 'Node.js', 'SQL'] },
  { category: 'Databases', items: ['PostgreSQL', 'Redis', 'MongoDB', 'InfluxDB', 'Elasticsearch'] },
  { category: 'Infrastructure', items: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Nginx'] },
  { category: 'Messaging', items: ['Kafka', 'RabbitMQ', 'gRPC', 'NATS', 'REST API'] },
  { category: 'Tools', items: ['Git', 'CI/CD', 'Linux', 'Prometheus', 'Grafana'] }
];

export const ICONS = {
  Terminal: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Database: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  Server: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  Globe: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  Code: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  )
};