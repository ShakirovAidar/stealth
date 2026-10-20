export type ProductSlug = 'amethyst' | 'obsidian' | 'glacier';

export interface Product {
  slug: ProductSlug;
  name: string;
  tagline: string;
  character: string;
  mood: string;
  bestFor: string;
  finish: string;
  description: string;
  price: string;
  image: string;
  /** Mineral photograph used behind the product model shot */
  backgroundImage: string;
  scentNotes: string[];
}

export const products: Product[] = [
  {
    slug: 'amethyst',
    name: 'Amethyst',
    tagline: 'Warm · Mineral · Soft',
    character: 'Warm & soft',
    mood: 'Quiet',
    bestFor: 'Everyday',
    finish: 'Subtle',
    description:
      'Warm and mineral, with a soft floral hush. A quiet, refined scent for everyday wear.',
    price: '$29.50',
    image: '/assets/bottle-clean.png',
    backgroundImage: '/assets/amethyst-campaign-background.png',
    scentNotes: ['Warm', 'Mineral', 'Soft floral'],
  },
  {
    slug: 'obsidian',
    name: 'Obsidian',
    tagline: 'Dark · Smoky · Warm',
    character: 'Dark & warm',
    mood: 'Refined',
    bestFor: 'Evening',
    finish: 'Deeper',
    description:
      'Dark smoked woods with a quiet amber trail. Deeper, warmer, and made for a little more edge.',
    price: '$29.50',
    image: '/assets/bottle-clean.png',
    backgroundImage: '/assets/obsidian-campaign-background.png',
    scentNotes: ['Smoked woods', 'Amber', 'Warm'],
  },
  {
    slug: 'glacier',
    name: 'Glacier',
    tagline: 'Cool · Clean · Marine',
    character: 'Cool & fresh',
    mood: 'Crisp',
    bestFor: 'Hot days',
    finish: 'Fresh',
    description:
      'Cool, clean and marine. Fresh without feeling sharp — built for heat.',
    price: '$29.50',
    image: '/assets/bottle-clean.png',
    backgroundImage: '/assets/glacier-campaign-background.png',
    scentNotes: ['Marine', 'Clean', 'Cool'],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
