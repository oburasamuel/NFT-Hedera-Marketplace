import Link from 'next/link';
import { Button } from './ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

const categories = [
  { name: 'Trending auctions', href: '/explore?sort=most_bids&filters=%7B%22sellingAgreementTypes%22:%5B%22live_auction%22%5D,%22saleStatus%22:%22on_sale%22%7D' },
  { name: 'Fixed price', href: '/explore?sort=newest_listed&filters=%7B%22sellingAgreementTypes%22:%5B%22buy_now%22%5D,%22saleStatus%22:%22on_sale%22%7D' },
  { name: 'Reserve price', href: '/explore?sort=newest_listed&filters=%7B%22saleStatus%22:%22on_sale%22,%22sellingAgreementTypes%22:%5B%22reserve_triggered_auction%22%5D%7D' },
  { name: 'Editions', href: '/explore/editions' },
  { name: 'Under $100', href: '/explore?filters=%7B%22saleStatus%22:%22on_sale%22,%22sellingAgreementTypes%22:%5B%22reserve_triggered_auction%22,%22buy_now%22%5D,%22price%22:%7B%22lte%22:100%7D%7D' },
  { name: 'Curated series', href: '/curated/series' },
  { name: '3D Art', href: '/category/3d%20art' },
  { name: 'AI Art', href: '/category/ai%20art' },
  { name: 'Abstract', href: '/category/abstract' },
  { name: 'Photography', href: '/category/photography' }
];

export function CategoryScroller() {
  return (
    <section className="py-10 bg-background">
      <div className="container">
        <h2 className="lovechild-font text-3xl mb-6">Browse</h2>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {categories.map((category) => (
              <CarouselItem key={category.name} className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                <Link href={category.href} className="block">
                  <Button
                    variant="secondary"
                    className="w-full h-12 whitespace-nowrap text-sm font-medium"
                  >
                    {category.name}
                  </Button>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 bg-background text-foreground" />
          <CarouselNext className="right-0 bg-background text-foreground" />
        </Carousel>
      </div>
    </section>
  );
}
