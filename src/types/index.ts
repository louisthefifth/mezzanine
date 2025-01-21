// ... existing types ...

export interface HealthUpdate {
  id: string;
  title: string;
  summary: string;
  source: {
    name: string;
    url: string;
    credibilityScore: number;
  };
  category: 'research' | 'clinical' | 'regulatory' | 'product';
  relevanceScore: number;
  datePublished: Date;
  tags: string[];
  status: 'new' | 'read' | 'saved' | 'dismissed';
  relatedBiomarkers: string[];
  relatedConditions: string[];
}

export interface UpdateFilter {
  categories: HealthUpdate['category'][];
  minRelevance: number;
  minCredibility: number;
  dateRange?: {
    start: Date;
    end: Date;
  };
  tags: string[];
}