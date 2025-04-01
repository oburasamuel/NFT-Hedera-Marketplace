"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { searchArtworks } from '@/lib/artwork-data';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Search when query changes, with at least 2 characters
    if (query.length >= 2) {
      const foundResults = searchArtworks(query);
      setResults(foundResults.slice(0, 5)); // Limit results to 5
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setOpen(false);
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="w-9 h-9">
          <FaSearch className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Search artworks and creators</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSearch} className="mt-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by artwork name, artist, or description..."
              className="pl-10"
              autoFocus
            />
          </div>
        </form>

        {results.length > 0 && (
          <div className="mt-6 space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">Quick results</h3>
            <div className="space-y-2">
              {results.map(result => (
                <Link
                  key={result.id}
                  href={`/single/${result.id}`}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-muted transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <div className="h-12 w-12 rounded overflow-hidden bg-muted flex-shrink-0">
                    <Image
                      src={result.image}
                      alt={result.title}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{result.title}</p>
                    <p className="text-sm text-muted-foreground truncate">by {result.artist.name}</p>
                  </div>
                  {result.type === 'sale' && result.price && (
                    <div className="text-sm font-medium">
                      {result.price.amount} {result.price.currency}
                    </div>
                  )}
                </Link>
              ))}
            </div>

            {query.length >= 2 && (
              <Button
                variant="outline"
                className="w-full mt-2"
                onClick={handleSearch}
              >
                View all results for "{query}"
              </Button>
            )}
          </div>
        )}

        {query.length >= 2 && results.length === 0 && (
          <div className="mt-6 text-center py-6">
            <p className="text-muted-foreground">No results found for "{query}"</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
