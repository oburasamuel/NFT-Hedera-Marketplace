import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AuthProvider } from '@/lib/auth-context'
import { ThemeProvider } from '@/lib/theme-provider'

export const metadata: Metadata = {
  title: 'Home | Exchange.Art',
  description: 'Exchange Art is the leading digital art marketplace. Browse, create, buy, sell, and auction your artworks using Exchange Art today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AuthProvider>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
