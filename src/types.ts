export interface Publication {
  id: string;
  slug: string;
  title: string;
  authors: string[];
  venue: string;
  venueShort: string;
  year: number;
  type: 'journal' | 'conference' | 'workshop' | 'preprint';
  area: 'precision-ag' | 'medical-imaging';
  areaLabel: string;
  abstract?: string;
  doi?: string;
  paperUrl?: string;
  codeUrl?: string;
  datasetUrl?: string;
  bibtex: string;
  metrics?: string[];
  fieldTested?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  ranking?: string;
  thesisOrDissertationTitle: string;
  thesisOrDissertationType: 'Dissertation' | 'Thesis';
  highlights?: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  badge?: string;
  link?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  labOrGroup?: string;
  organization: string;
  location: string;
  period: string;
  type: 'postdoc' | 'industry-research' | 'academic' | 'internship';
  points: string[];
  skills?: string[];
}

export interface TeachingItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  courseOrEvent: string;
  description: string;
  details?: string[];
}

export interface MentorshipItem {
  id: string;
  target: string;
  organization: string;
  period: string;
  description: string;
}
