import artworksData from './artworks.json';

export interface Artwork {
  id: string;
  title: string;
  image: string;
  category: 'autodesk' | 'ai-gen';
  tool?: string;
  prompt?: string;
  whatISee?: string;
  whatIdChange?: string;
  projectContext?: string;
  subject?: string;
  composition?: string;
  lighting?: string;
  color?: string;
  style?: string;
}

export const artworks: Artwork[] = artworksData as Artwork[];
