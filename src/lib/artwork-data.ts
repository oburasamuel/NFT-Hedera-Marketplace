import { ArtworkCardProps } from '@/components/artwork-card';

// Extended artwork data with descriptions
export interface ArtworkData extends ArtworkCardProps {
  description?: string;
  category?: string;
}

export const artworks: ArtworkData[] = [
  {
    id: 'uVavqLqWTadCBTRo3Cfzbv4nyDvMv2SBSKhbEZHeaDd',
    title: 'Cosmic dance of finite&infinite',
    image: 'https://ext.same-assets.com/1148739856/1754385388.jpeg',
    artist: {
      name: 'Ghazal Abbasi',
      avatar: 'https://ext.same-assets.com/1148739856/1542636484.jpeg',
      verified: true
    },
    type: 'sale',
    price: {
      amount: 0.33,
      currency: 'SOL'
    },
    description: 'The crescent of your eyes is infinite. You may believe that your infinity is finite, but your infinity is truly infinite. You are the only finite entity suspended within the infinite expanse, the only finite being amongst endless galaxies. In creating this collection, I aimed to evoke by highlighting the disconnect between people, their selves, and the natural world caused by modern society.',
    category: 'Photography'
  },
  {
    id: 'Ap54HML54b6ucGUMdc5omC8MpcBiNa3nKrA2UzKpkL2S',
    title: 'Spectrum',
    image: 'https://ext.same-assets.com/1148739856/3195926925.jpeg',
    artist: {
      name: 'Heartspace Ave',
      avatar: 'https://ext.same-assets.com/1148739856/3195926925.jpeg'
    },
    type: 'sale',
    price: {
      amount: 1,
      currency: 'SOL'
    },
    description: 'Spectrum is a vibrant exploration of color theory and visual perception. This piece challenges the viewer to experience the full range of the color spectrum in a harmonious arrangement that creates both tension and balance.',
    category: 'Abstract'
  },
  {
    id: '7iWaPLZQSQJwHGRUdX1FDjqhzcyhfh58ZVdQW1qwYkdi',
    title: 'Lost My Marbles',
    image: 'https://ext.same-assets.com/1148739856/820403445.jpeg',
    artist: {
      name: 'Kaeli Van Fossen',
      avatar: 'https://ext.same-assets.com/1148739856/1200471963.jpeg',
      verified: true
    },
    type: 'auction',
    auction: {
      reserve: 2,
      currency: 'SOL',
      duration: '1d'
    },
    description: 'A whimsical yet profound visual meditation on the concept of losing control. The marbles represent fragments of consciousness scattered across a dreamlike landscape, inviting viewers to piece together their own narrative.',
    category: 'Illustration'
  },
  {
    id: '3SpbK64LUuVA9T4rpe129A3Y6f6HSBtzexdSG78tN4e1',
    title: 'Sometimes Overexposed',
    image: 'https://ext.same-assets.com/1148739856/3446257333.jpeg',
    artist: {
      name: 'Elfilter A',
      avatar: 'https://ext.same-assets.com/1148739856/2746353970.jpeg',
      verified: true
    },
    type: 'auction',
    auction: {
      reserve: 0.5,
      currency: 'SOL',
      duration: '1d'
    },
    description: 'This piece plays with the concept of photographic overexposure as a metaphor for emotional vulnerability. The blinding light and faded edges create a sense of transience and ephemerality, commenting on the fleeting nature of memory and experience.',
    category: 'Photography'
  },
  {
    id: '7Z3vRgMMR4WjNNAWR8N5KsFffRpgGtrAy7pd1svrn1AX',
    title: 'An Uncle\'s Tale',
    image: 'https://ext.same-assets.com/1148739856/2729828328.jpeg',
    artist: {
      name: 'Luciana Guerra',
      avatar: 'https://ext.same-assets.com/1148739856/605703069.jpeg',
      verified: true
    },
    type: 'sale',
    price: {
      amount: 4.3,
      currency: 'SOL'
    },
    description: 'An Uncle\'s Tale is a narrative piece that explores family heritage and the oral tradition of storytelling. The layered imagery represents the way stories transform across generations, becoming rich with both personal and collective meaning.',
    category: 'Mixed Media'
  },
  {
    id: '9fQD6WkatShJQic2hKL8VW6g2prEGCA734JziLyyVjgn',
    title: 'Brine Depths #9',
    image: 'https://ext.same-assets.com/1148739856/371351554.jpeg',
    artist: {
      name: 'Zen0',
      avatar: 'https://ext.same-assets.com/1148739856/4251970423.jpeg',
      verified: true
    },
    type: 'auction',
    auction: {
      reserve: 50,
      currency: 'BONK',
      duration: '1d 10h 56m'
    },
    description: 'Brine Depths #9 is part of a series exploring marine ecosystems through a surrealist lens. This particular work focuses on the mysterious middle depths of the ocean where light begins to fade and the strange and beautiful creatures that have adapted to this liminal space.',
    category: 'Digital Art'
  },
  {
    id: 'D8rfrfc4qWjCWXqUfUBq11TGN3cRK9j2JDwTqY7FFkzm',
    title: 'Warrior 031',
    image: 'https://ext.same-assets.com/1148739856/3912717342.jpeg',
    artist: {
      name: 'Laurence Antony',
      avatar: 'https://ext.same-assets.com/1148739856/385813830.jpeg'
    },
    type: 'auction',
    auction: {
      reserve: 50,
      currency: 'BONK',
      duration: '1d 11h 11m'
    },
    description: 'Warrior 031 is part of a generative series exploring archetypes of strength across cultures and history. Each warrior embodies different qualities and aesthetics, all unified by their representation of resilience and determination.',
    category: 'Generative Art'
  },
  {
    id: '2LCMUeaR1JPtqdTYkwHJoHnkaDbf6NiMXuK7XgAsrY1L',
    title: 'Bad News Forever',
    image: 'https://ext.same-assets.com/1148739856/1787567688.jpeg',
    artist: {
      name: 'Joe Tamponi',
      avatar: 'https://ext.same-assets.com/1148739856/1787567688.jpeg',
      verified: true
    },
    type: 'auction',
    auction: {
      reserve: 3,
      currency: 'SOL',
      duration: '12h'
    },
    description: 'Bad News Forever is a satirical commentary on the 24-hour news cycle and its effects on our collective psyche. The chaotic composition and contrasting elements create a sense of information overload that many experience in today\'s media landscape.',
    category: 'Collage'
  },
  {
    id: 'nU5ZagRe9oiywhm2Ga1Uis3ZeDEw6mftzHU3AEL9LRF',
    title: 'Astra',
    image: 'https://ext.same-assets.com/1148739856/1321846914.jpeg',
    artist: {
      name: 'Ryan Was Here',
      avatar: 'https://ext.same-assets.com/1148739856/713842244.jpeg',
      verified: true
    },
    type: 'auction',
    auction: {
      reserve: 8.5,
      currency: 'SOL',
      duration: '7d'
    },
    description: 'Astra is a celestial exploration of light and form. Inspired by astronomical phenomena, the piece creates a sense of cosmic scale and wonder, inviting the viewer to contemplate their place in the universe.',
    category: 'Digital Art'
  }
];

export function getArtworkById(id: string): ArtworkData | undefined {
  return artworks.find(artwork => artwork.id === id);
}

export function getAllArtworks(): ArtworkData[] {
  return artworks;
}

export function getArtworksByCategory(category: string): ArtworkData[] {
  return artworks.filter(artwork =>
    artwork.category?.toLowerCase() === category.toLowerCase()
  );
}

export function searchArtworks(query: string): ArtworkData[] {
  const lowercaseQuery = query.toLowerCase();
  return artworks.filter(artwork =>
    artwork.title.toLowerCase().includes(lowercaseQuery) ||
    artwork.artist.name.toLowerCase().includes(lowercaseQuery) ||
    artwork.category?.toLowerCase().includes(lowercaseQuery) ||
    artwork.description?.toLowerCase().includes(lowercaseQuery)
  );
}
