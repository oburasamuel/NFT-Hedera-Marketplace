"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArtworkCard } from '@/components/artwork-card';
import { searchArtworks } from '@/lib/artwork-data';
import { User } from '@/lib/auth-context';
import { FaTwitter, FaInstagram, FaGlobe } from 'react-icons/fa';

// Mock function to get user by username (in a real app, this would be an API call)
const getUserByUsername = (username: string): User | null => {
  const mockUsers: User[] = [
    {
      id: '1',
      username: 'johndoe',
      name: 'John Doe',
      avatar: 'https://ext.same-assets.com/1148739856/713842244.jpeg',
      verified: true,
      bio: 'Digital artist specializing in contemporary abstract art.',
      joinedDate: 'May 2023'
    },
    {
      id: '2',
      username: 'janedoe',
      name: 'Jane Doe',
      avatar: 'https://ext.same-assets.com/1148739856/1542636484.jpeg',
      bio: 'Art collector and NFT enthusiast.',
      joinedDate: 'January 2024'
    }
  ];

  return mockUsers.find(user => user.username.toLowerCase() === username.toLowerCase()) || null;
};

export default function ProfilePage({ params }: { params: { username: string } }) {
  const [user, setUser] = useState<User | null>(null);
  const [userArtworks, setUserArtworks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch user data
    const foundUser = getUserByUsername(params.username);
    setUser(foundUser);

    // Get artworks by artist name if user exists
    if (foundUser) {
      // In a real app, you'd have a proper API call to fetch user's artworks
      // For this demo, we'll just filter existing artworks by artist name
      const artworks = searchArtworks(foundUser.name);
      setUserArtworks(artworks);
    }

    setLoading(false);
  }, [params.username]);

  if (loading) {
    return (
      <div className="container py-20 text-center">
        <p>Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Profile Not Found</h1>
        <p>The user you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Profile header */}
      <div className="bg-muted py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative">
              <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-background">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              {user.verified && (
                <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-muted-foreground mb-4">@{user.username}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                <div className="text-sm text-muted-foreground">
                  Joined {user.joinedDate}
                </div>

                <div className="flex gap-3">
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <FaTwitter size={18} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <FaInstagram size={18} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <FaGlobe size={18} />
                  </a>
                </div>
              </div>

              {user.bio && (
                <p className="max-w-2xl">{user.bio}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Profile content */}
      <div className="container py-12">
        <Tabs defaultValue="created">
          <TabsList className="mb-8">
            <TabsTrigger value="created">Created ({userArtworks.length})</TabsTrigger>
            <TabsTrigger value="collected">Collected (0)</TabsTrigger>
            <TabsTrigger value="favorited">Favorited (0)</TabsTrigger>
          </TabsList>

          <TabsContent value="created">
            {userArtworks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {userArtworks.map(artwork => (
                  <ArtworkCard key={artwork.id} {...artwork} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No artworks created yet</h3>
                <p className="text-muted-foreground">This user hasn't created any artworks yet.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="collected">
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No collected artworks</h3>
              <p className="text-muted-foreground">This user hasn't collected any artworks yet.</p>
            </div>
          </TabsContent>

          <TabsContent value="favorited">
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No favorited artworks</h3>
              <p className="text-muted-foreground">This user hasn't favorited any artworks yet.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
