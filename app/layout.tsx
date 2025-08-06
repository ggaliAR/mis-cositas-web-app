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

export const metadata: Metadata = {
  title: 'Decoraciones hechas a mano. – Regalos personalizados para bebés',
  description: 'Carteles personalizados, letras decorativas y regalos hechos a mano con amor. Envíos desde Estepona a toda España.',
  keywords: 'decoraciones handmade, letras personalizadas, regalos bebé, Estepona, decoración infantil',
  authors: [{ name: 'Handmade Decorations' }],
  openGraph: {
    title: 'Decoraciones hechas a mano.',
    description: 'Regalos personalizados para bebés hechos con amor',
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
  },
    generator: 'v0.dev'
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
