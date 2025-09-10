import type { Metadata } from 'next'
import { Inter, Quicksand, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const quicksand = Quicksand({ 
  subsets: ['latin'],
  variable: '--font-quicksand'
})
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Decoraciones hechas a mano – Regalos personalizados para bebés',
    template: '%s | Mis Cositas',
  },
  description: 'Carteles personalizados, letras decorativas y regalos hechos a mano con amor. Envíos desde Estepona a toda España.',
  keywords: [
    'decoraciones handmade',
    'letras personalizadas',
    'regalos bebé',
    'Estepona',
    'decoración infantil',
    'souvenirs',
    'carteles temáticos',
  ],
  authors: [{ name: 'Mis Cositas' }],
  creator: 'Mis Cositas',
  publisher: 'Mis Cositas',
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/',
      'en-US': '/?lang=en',
    },
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Mis Cositas',
    title: 'Decoraciones hechas a mano – Regalos personalizados para bebés',
    description: 'Regalos personalizados hechos con amor. Envíos a toda España.',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    images: [
      {
        url: '/placeholder.jpg',
        width: 1200,
        height: 630,
        alt: 'Mis Cositas – Decoraciones hechas a mano',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mis Cositas – Decoraciones hechas a mano',
    description: 'Regalos personalizados hechos con amor. Envíos a toda España.',
    images: ['/placeholder.jpg'],
    creator: '@miscositas__decoracion',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/placeholder-logo.png',
    shortcut: '/placeholder-logo.png',
    apple: '/placeholder-logo.png',
  },
  referrer: 'origin-when-cross-origin',
  category: 'ecommerce',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${quicksand.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  )
}
