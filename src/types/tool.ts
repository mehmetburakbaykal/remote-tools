export type Tool = {
  id: string;
  name: string;
  description: string;
  category: string;
  website: string;
  rating: number;
  features?: string[];
  tags?: string[];
  image?: string;
  screenshots?: string[];
  launchDate?: string;
  integrations?: string[];
  github?: string | null;
  twitter?: string | null;
};
