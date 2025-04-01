import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArtworkCardProps } from '@/components/artwork-card';
import { getArtworkById } from '@/lib/artwork-data';


import { getAllArtworkIds } from '@/lib/artwork-data'; // Assume this function fetches all artwork IDs
import { Metadata } from 'next';

export async function generateStaticParams() {
  const ids = await getAllArtworkIds(); // Fetch all artwork IDs
  return ids.map((id: string) => ({ id }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const artwork = getArtworkById(params.id);
  if (!artwork) {
    return {
      title: 'Artwork Not Found',
    };
  }
  return {
    title: artwork.title,
    description: artwork.description || 'View this amazing artwork.',
  };
}


export default function ArtworkPage({ params }: { params: { id: string } }) {
  const artwork = getArtworkById(params.id);

  if (!artwork) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Artwork Not Found</h1>
        <p className="mb-8">The artwork you're looking for doesn't exist or has been removed.</p>
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#f8f8f8] dark:bg-[#1a1a23] py-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="relative">
              <div className="bg-[#f0f0f0] dark:bg-[#232330] rounded-lg overflow-hidden">
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-bold mb-4">{artwork.title}</h1>

              <div className="flex items-center mb-6">
                <Link href={`/${artwork.artist.name.toLowerCase().replace(/\s+/g, '')}/nfts`} className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={artwork.artist.avatar} alt={artwork.artist.name} />
                    <AvatarFallback>{artwork.artist.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <span className="text-sm text-muted-foreground">@{artwork.artist.name.replace(/\s+/g, '')}</span>
                    {artwork.artist.verified && (
                      <span className="ml-1 inline-block">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#748cfc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    )}
                  </div>
                </Link>
              </div>

              <div className="mb-6 bg-background p-6 rounded-lg">
                {artwork.type === 'sale' && artwork.price && (
                  <div>
                    <h3 className="text-sm font-medium mb-2">Price</h3>
                    <p className="text-2xl font-bold mb-4">{artwork.price.amount} {artwork.price.currency}</p>

                    <div className="flex gap-4">
                      <Button className="flex-1">Buy now</Button>
                      <Button variant="outline" className="flex-1">Make offer</Button>
                    </div>
                  </div>
                )}

                {artwork.type === 'auction' && artwork.auction && (
                  <div>
                    <h3 className="text-sm font-medium mb-2">Auction</h3>
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground">Reserve price</p>
                      <p className="text-2xl font-bold">{artwork.auction.reserve} {artwork.auction.currency}</p>
                      <p className="text-sm text-muted-foreground">Time left: {artwork.auction.duration}</p>
                    </div>

                    <div className="flex gap-4">
                      <Button className="flex-1">Place bid</Button>
                      <Button variant="outline" className="flex-1">Make offer</Button>
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Description</h3>
                <p className="text-muted-foreground">
                  {artwork.description || 'This artwork has no description yet.'}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Details</h3>

                <Tabs defaultValue="provenance">
                  <TabsList className="w-full mb-4">
                    <TabsTrigger value="provenance" className="flex-1">Provenance</TabsTrigger>
                    <TabsTrigger value="properties" className="flex-1">Properties</TabsTrigger>
                    <TabsTrigger value="history" className="flex-1">History</TabsTrigger>
                  </TabsList>

                  <TabsContent value="provenance" className="p-4 bg-muted rounded-lg">
                    <p className="text-sm mb-4">Minted by {artwork.artist.name} on the Solana blockchain</p>
                    <div className="flex justify-between text-sm">
                      <span>Token Address</span>
                      <code className="bg-background p-1 rounded text-xs">{artwork.id.substring(0, 10)}...{artwork.id.substring(artwork.id.length - 4)}</code>
                    </div>
                  </TabsContent>

                  <TabsContent value="properties" className="p-4 bg-muted rounded-lg">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-background p-3 rounded">
                        <p className="text-xs text-muted-foreground">Category</p>
                        <p className="text-sm">{artwork.category || 'Digital Art'}</p>
                      </div>
                      <div className="bg-background p-3 rounded">
                        <p className="text-xs text-muted-foreground">Created</p>
                        <p className="text-sm">2023</p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="history" className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-center text-muted-foreground">No transaction history yet</p>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

