import Link from 'next/link';
import { ArtworkCard } from './artwork-card';
import { getAllArtworks } from '@/lib/artwork-data';

export function FeaturedArtworks() {
  const featuredArtworks = getAllArtworks().slice(0, 6);

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="lovechild-font text-4xl mb-12">Featured <br className="md:hidden" />Artwork</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredArtworks.map((artwork) => (
            <ArtworkCard key={artwork.id} {...artwork} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/explore"
            className="inline-block py-2 px-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View all artwork
          </Link>
        </div>
      </div>
    </section>
  );
}
