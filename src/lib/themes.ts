export interface Theme {
  id: string;
  name: string;
  image: string;
  preview: string;
}

export const THEMES: Theme[] = [
  {
    id: 'theme-elegant-dark',
    name: 'Elegant Dark',
    image: 'https://images.unsplash.com/photo-1589309736402-263aecd40b2a?q=80&w=2000&auto=format&fit=crop',
    preview: '#D4AF37'
  },
  {
    id: 'theme-ocean-blue',
    name: 'Ocean Blue',
    image: 'https://images.unsplash.com/photo-1518991043280-1a7bc8ba6b41?q=80&w=2000&auto=format&fit=crop',
    preview: '#4299E1'
  },
  {
    id: 'theme-tropical-light',
    name: 'Tropical Light',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2000&auto=format&fit=crop',
    preview: '#319795'
  },
  {
    id: 'theme-sunset-resort',
    name: 'Sunset Resort',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2000&auto=format&fit=crop',
    preview: '#ED8936'
  },
  {
    id: 'theme-forest-retreat',
    name: 'Forest Retreat',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop',
    preview: '#D69E2E'
  }
];
