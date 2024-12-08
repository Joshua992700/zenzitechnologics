import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Zenzi Technologics
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li><Link href="/services" className="hover:text-primary">Services</Link></li>
          <li><Link href="/pricing" className="hover:text-primary">Pricing</Link></li>
          <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
          <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
        </ul>
        <Button asChild>
          <Link href="/services">Get Started</Link>
        </Button>
      </nav>
    </header>
  )
}

