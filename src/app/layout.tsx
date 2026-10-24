import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from 'next';
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '@/lib/constants';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_TITLE}`,
    default: `${SITE_TITLE} - Schoolhouse Sherpas`,
  },
  description: SITE_DESCRIPTION,
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
  applicationName: SITE_TITLE,
  themeColor: '#ffffff',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: SITE_TITLE,
  },
  openGraph: {
    title: `${SITE_TITLE} - Schoolhouse Sherpas`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_TITLE,
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
