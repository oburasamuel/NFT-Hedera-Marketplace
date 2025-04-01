"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaDiscord, FaYoutube, FaInstagram } from 'react-icons/fa';
import { useTheme } from '@/lib/theme-provider';

export function Footer() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <footer className="bg-[#1d1e26] pt-12 pb-6 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://ext.same-assets.com/1288399759/3783633550.svg"
                alt="Exchange.art Logo"
                width={40}
                height={40}
              />
              <div>
                <span className="font-medium">exchange</span>
                <span className="font-medium text-primary">art</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">Collect & sell digital fine art</p>

            <div className="flex items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={theme === 'dark'}
                  onChange={toggleTheme}
                />
                <div className="w-9 h-5 bg-muted rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all" />
                <span className="ml-3 text-sm text-muted-foreground">Dark</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Marketplace</h3>
            <ul className="space-y-2">
              <li><Link href="/explore" className="text-sm text-muted-foreground hover:text-foreground">Artworks</Link></li>
              <li><Link href="/explore/editions" className="text-sm text-muted-foreground hover:text-foreground">Editions</Link></li>
              <li><Link href="/search/series" className="text-sm text-muted-foreground hover:text-foreground">Series</Link></li>
              <li><Link href="/search/profiles" className="text-sm text-muted-foreground hover:text-foreground">Profiles</Link></li>
              <li><Link href="/leaderboards/creators" className="text-sm text-muted-foreground hover:text-foreground">Leaderboards</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/artdrop" className="text-sm text-muted-foreground hover:text-foreground">ArtDrop</Link></li>
              <li><Link href="https://blog.exchange.art/" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="https://helpdesk.exchange.art" className="text-sm text-muted-foreground hover:text-foreground">Helpdesk</Link></li>
              <li><Link href="https://exchange-art.canny.io/feature-requests" className="text-sm text-muted-foreground hover:text-foreground">Suggest a feature</Link></li>
              <li><Link href="/branding" className="text-sm text-muted-foreground hover:text-foreground">Branding</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Account</h3>
            <ul className="space-y-2">
              <li><Link href="/login" className="text-sm text-muted-foreground hover:text-foreground">Sign in</Link></li>
              <li><Link href="/register" className="text-sm text-muted-foreground hover:text-foreground">Sign up</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <Link href="https://twitter.com/exchgART" className="bg-muted p-2 rounded-full">
            <FaTwitter className="w-5 h-5 text-foreground" />
          </Link>
          <Link href="https://discord.gg/2ambwf3z4A" className="bg-muted p-2 rounded-full">
            <FaDiscord className="w-5 h-5 text-foreground" />
          </Link>
          <Link href="https://youtube.com/channel/UC6cF2yeb9YmyGQrxNzjGQ0w" className="bg-muted p-2 rounded-full">
            <FaYoutube className="w-5 h-5 text-foreground" />
          </Link>
          <Link href="https://www.instagram.com/exchange.art/" className="bg-muted p-2 rounded-full">
            <FaInstagram className="w-5 h-5 text-foreground" />
          </Link>
        </div>

        <div className="text-center text-xs text-muted-foreground border-t border-border pt-6">
          <p>Copyright © 2025 EXCHANGE.ART, All rights reserved</p>
          <div className="flex justify-center gap-6 mt-2">
            <Link href="https://app.termly.io/document/terms-of-use-for-online-marketplace/cd60f9e7-2465-404f-99a5-5bad33e38f1c" className="hover:text-foreground">
              Terms of service
            </Link>
            <Link href="https://app.termly.io/document/privacy-policy/160356e1-4c75-4d9a-bc7a-4ac6692dd597" className="hover:text-foreground">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
