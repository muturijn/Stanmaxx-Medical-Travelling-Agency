export interface Service {
  title: string;
  description: string;
  icon: any;
}

export interface Destination {
  country: string;
  image: string;
  specialties: string[];
  description: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
}

export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  CONTACT = 'contact'
}