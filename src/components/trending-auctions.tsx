import Link from 'next/link';
import { ArtworkCard } from './artwork-card';
import { getAllArtworks } from '@/lib/artwork-data';

export function TrendingAuctions() {
  // Get only auction items
  const trendingAuctions = getAllArtworks().filter(
    artwork => artwork.type === 'auction'
  ).slice(0, 4);

  return (
    <section className="py-16 bg-[#1a1a23]">
      <div className="container">
        <h2 className="lovechild-font text-4xl mb-6">Trending Auctions</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {trendingAuctions.map((artwork) => (
            <ArtworkCard key={artwork.id} {...artwork} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/explore?sort=ending_soonest&filters=%7B%22saleStatus%22:%22on_sale%22,%22sellingAgreementTypes%22:%5B%22live_auction%22%5D%7D"
            className="inline-block py-2 px-6 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
          >
            View all ongoing auctions
          </Link>
        </div>
      </div>
    </section>
  );
}
