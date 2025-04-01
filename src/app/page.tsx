import { HeroSection } from '@/components/hero-section';
import { FeaturedArtworks } from '@/components/featured-artworks';
import { CategoryScroller } from '@/components/category-scroller';
import { TrendingAuctions } from '@/components/trending-auctions';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedArtworks />
      <CategoryScroller />
      <TrendingAuctions />
    </>
  );
}
