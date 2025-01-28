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
    shortcut: '/favicon/favicon.ico',
    apple: {
      url: '/favicon/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/safari-pinned-tab.svg',
        color: '#5bbad5'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/favicon/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/favicon/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/favicon/android-chrome-512x512.png',
      }
    ],
  },
  manifest: '/favicon/site.webmanifest',
  applicationName: 'BuildOn Trek Nepal',
  themeColor: '#ffffff',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'BuildOn Trek Nepal',
  },
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
      <head>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </head>
      <body className="min-h-screen bg-white font-sans">
        <div className="mx-auto max-w-6xl px-5">
          {children}
        </div>
      </body>
    </html>
  );
}
