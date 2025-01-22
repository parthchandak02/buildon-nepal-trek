import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from 'next';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: '%s | BuildOn Trek Nepal',
    default: 'BuildOn Trek Nepal - Schoolhouse Sherpas',
  },
  description: 'A journey of building a school in Basanta, Nepal with BuildOn and the local community.',
  icons: {
    icon: [
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      }
    ],
    apple: {
      url: '/favicon/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    title: 'BuildOn Trek Nepal - Schoolhouse Sherpas',
    description: 'A journey of building a school in Basanta, Nepal with BuildOn and the local community.',
    url: 'https://buildon-nepal-trek.vercel.app',
    siteName: 'BuildOn Trek Nepal',
    images: [
      {
        url: '/assets/blog/buildon-trek-nepal-jan-2025/team-start.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans">
        <div className="mx-auto max-w-6xl px-5">
          {children}
        </div>
      </body>
    </html>
  );
}
