"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArtworkCard } from '@/components/artwork-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FaSearch } from 'react-icons/fa';
import { searchArtworks } from '@/lib/artwork-data';
import { ArtworkData } from '@/lib/artwork-data';
import Link from 'next/link';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(query);
  const [results, setResults] = useState<ArtworkData[]>([]);

  useEffect(() => {
    if (query) {
      setSearchQuery(query);
      const foundResults = searchArtworks(query);
      setResults(foundResults);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const foundResults = searchArtworks(searchQuery);
      setResults(foundResults);

      // Update URL without full page reload
      const url = new URL(window.location.href);
      url.searchParams.set('q', searchQuery);
      window.history.pushState({}, '', url);
    }
  };

  return (
    <div className="container py-16">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-8">Search Results</h1>

        <form onSubmit={handleSearch}>
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search artworks, artists, or descriptions..."
              className="pl-10 pr-24"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              type="submit"
              size="sm"
              className="absolute right-1.5 top-1/2 transform -translate-y-1/2"
            >
              Search
            </Button>
          </div>
        </form>
      </div>

      {query && (
        <div className="mb-6">
          <h2 className="text-xl font-medium mb-2">Results for "{query}"</h2>
          <p className="text-muted-foreground mb-8">Found {results.length} {results.length === 1 ? 'result' : 'results'}</p>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {results.map(artwork => (
                <ArtworkCard key={artwork.id} {...artwork} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-muted/50 rounded-lg">
              <h3 className="text-xl font-medium mb-2">No results found</h3>
              <p className="text-muted-foreground mb-4">
                We couldn't find any artworks matching your search. Try a different search term or browse our categories.
              </p>
              <Button asChild>
                <Link href="/explore">Browse all artworks</Link>
              </Button>
            </div>
          )}
        </div>
      )}

      {!query && (
        <div className="text-center py-16 bg-muted/50 rounded-lg">
          <h3 className="text-xl font-medium mb-2">Enter a search query</h3>
          <p className="text-muted-foreground mb-4">
            Search for artworks, artists, or browse our categories.
          </p>
          <Button asChild>
            <Link href="/explore">Browse all artworks</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
