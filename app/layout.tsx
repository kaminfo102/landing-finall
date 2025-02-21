import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'مسابقه محاسبات ذهنی',
  description: 'مسابقه محاسبات ذهنی - تقویت مهارت‌های ریاضی',
  openGraph: {
    title: 'مسابقه محاسبات ذهنی',
    description: 'مسابقه محاسبات ذهنی - تقویت مهارت‌های ریاضی',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background font-vazir antialiased">
        <Providers>
        <Toaster />
          {children}
          
        </Providers>
      </body>
    </html>
  );
}