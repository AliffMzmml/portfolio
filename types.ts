import React from 'react';

export interface ProcessStep {
  title: string;
  description: string;
  highlight?: boolean;
}

export interface ProcessPhase {
  title: string;
  steps: ProcessStep[];
}

export interface EvidenceItem {
  title: string;
  category: string;
  imageAlt: string;
  caption: string;
  imageUrl?: string;
  videoUrl?: string;
  beforeImageUrl?: string;
  beforeVideoUrl?: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
  year: string;
  client: string;
  role: string;
  challenge: string;
  solution: string;
  process?: ProcessPhase[];
  evidence?: EvidenceItem[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  icon: React.ComponentType<any>;
  url: string;
}