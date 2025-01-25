// src/types/index.ts

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'design' | 'development' | 'marketing';
  imageUrl: string;
}

export interface ServiceItem {
  id: string;
  icon: React.ReactNode; // Using ReactNode for icons
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  excerpt: string;
  link: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface SocialLink {
  id: string;
  icon: React.ReactNode;
  url: string;
}
