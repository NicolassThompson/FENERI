export interface NavItem {
  label: string;
  href: string;
}

export interface IndicatorItem {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
}

export interface ValueCardItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

export interface PartnerItem {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  category: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
