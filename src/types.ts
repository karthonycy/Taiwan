export interface ProjectBasicInfo {
  name: string;
  format: string;
  episodesCount: number;
  episodeDuration: string;
  totalDuration: string;
  historicalBackground: string;
  positioning: string;
  targetAudience: string;
  slogan: string;
}

export interface HighlightCard {
  id: string;
  number: string;
  title: string;
  items: string[];
  icon: string;
}

export interface MarketMetric {
  label: string;
  value: string;
  description: string;
}

export interface BusinessPhase {
  phase: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface BudgetCategory {
  name: string;
  amount: number; // in ten thousand RMB (万元)
  percentage: number;
  description: string;
  details: string[];
}

export interface RevenueForecastItem {
  source: string;
  amount: string;
  percentage: number;
  description: string;
}

export interface ReturnTier {
  range: string;
  investorRatio: number; // percentage
  producerRatio: number; // percentage
  phaseName: string;
  description: string;
}

export interface Milestone {
  id: string;
  title: string;
  timeline: string;
  description: string;
  details: string[];
}

export interface ContactSubmission {
  id: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  amount?: number; // expected investment
  message: string;
  createdAt: string;
}
