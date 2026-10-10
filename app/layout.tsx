import type { Metadata, Viewport } from 'next';
import '../styles/tokens.css';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Surfari', template: '%s | Surfari' },
  description: 'Own the city. Ride every zone of Dar es Salaam.',
  manifest: '/manifest.json',
  appleWebApp: { capable: true, statusBarStyle: 'black-translucent', title: 'Surfari' },
};

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="h-full">{children}</body>
    </html>
  );
}
