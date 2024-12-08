import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zenzi Technologics - Empowering Your Digital Journey with Excellence',
  description: 'Zenzi Technologics offers IT services including product photography, poster creation, logo design, digital marketing, photo/video editing, web & app development, and B2B marketing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  )
}
