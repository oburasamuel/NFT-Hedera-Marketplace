import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export interface ArtworkCardProps {
  id: string;
  title: string;
  image: string;
  artist: {
    name: string;
    avatar: string;
    verified?: boolean;
  };
  type?: 'auction' | 'sale' | 'reserve';
  price?: {
    amount: number;
    currency: string;
  };
  auction?: {
    reserve: number;
    currency: string;
    duration: string;
  };
  description?: string;
  category?: string;
}

export function ArtworkCard({ id, title, image, artist, type, price, auction, category }: ArtworkCardProps) {
  return (
    <article className="artwork-card group">
      <Link href={`/single/${id}`} className="block relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full aspect-square object-cover rounded-t-lg"
        />
        {type && (
          <div className="artwork-tag">
            {type === 'auction' && 'Auction'}
            {type === 'sale' && 'Sale'}
            {type === 'reserve' && 'Reserve'}
          </div>
        )}
        {category && (
          <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs py-1 px-2 rounded">
            {category}
          </div>
        )}
      </Link>

      <div className="artwork-card-info">
        <Link href={`/single/${id}`} className="block mb-2 hover:underline">
          <h3 className="font-medium text-md truncate">{title}</h3>
        </Link>

        <div className="flex items-center justify-between">
          <Link href={`/${artist.name.toLowerCase().replace(/\s+/g, '')}/nfts`} className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={artist.avatar} alt={artist.name} />
              <AvatarFallback>{artist.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">@{artist.name.replace(/\s+/g, '')}</span>
            {artist.verified && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#748cfc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </Link>

          <div className="text-right">
            {price && (
              <div className="text-sm font-medium">
                {price.amount} {price.currency}
              </div>
            )}
            {auction && (
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Reserve price</span>
                <span className="text-sm font-medium">{auction.reserve} {auction.currency}</span>
                <span className="text-xs text-muted-foreground">Duration {auction.duration}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
