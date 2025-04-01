"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useTheme } from '@/lib/theme-provider';
import { useAuth } from '@/lib/auth-context';
import { FaSearch, FaBars, FaSun, FaMoon, FaUser } from 'react-icons/fa';

export function Header() {
  const { theme, setTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border py-3">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <Image
              src="https://ext.same-assets.com/1288399759/3783633550.svg"
              alt="Exchange.art Logo"
              width={40}
              height={40}
            />
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <FaBars className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-background">
              <div className="flex flex-col gap-4 pt-10">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <nav className="flex flex-col gap-2">
                  <Link className="hover:text-primary" href="/category/3d-art">3D Art</Link>
                  <Link className="hover:text-primary" href="/category/ai-art">AI Art</Link>
                  <Link className="hover:text-primary" href="/category/abstract">Abstract</Link>
                  <Link className="hover:text-primary" href="/category/algorithmic-art">Algorithmic Art</Link>
                  <Link className="hover:text-primary" href="/category/animation">Animation</Link>
                  <Link className="hover:text-primary" href="/category/audio-visual">Audio Visual</Link>
                  <Link className="hover:text-primary" href="/category/collage">Collage</Link>
                  <Link className="hover:text-primary" href="/category/photography">Photography</Link>
                  <Link className="hover:text-primary" href="/category/pixel-art">Pixel Art</Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/register" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Marketplace
            </Link>
            <Link href="/register" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </Link>
            <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Account
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex items-center">
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px] pl-8 bg-muted"
            />
            <FaSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <FaSearch className="h-5 w-5" />
          </Button>

          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hidden md:flex"
          >
            {theme === 'dark' ? <FaSun className="h-[1.2rem] w-[1.2rem]" /> : <FaMoon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>

          {/* User account */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <span className="font-medium">{user.name}</span>
                    <span className="text-xs text-muted-foreground">@{user.username}</span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={`/profile/${user.username}`}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="outline" size="sm" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button size="sm" className="hidden md:flex" asChild>
                <Link href="/register">Register</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
