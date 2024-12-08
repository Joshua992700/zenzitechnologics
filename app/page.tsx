'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Camera, Palette, Aperture, Megaphone, Video, Code, Briefcase } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const teamMembers = [
  { name: 'Lalith Madhavan V', role: 'CEO & Founder', image: 'https://drive.usercontent.google.com/download?id=1uxPWufQYjeQyy2YGQppM0gXTZ2eygk8q&authuser=0' },
  { name: 'Ramakrishnan S', role: 'Managing Director & Co-Founder', image: 'https://drive.usercontent.google.com/download?id=1YQjL8KoLAchy-SBVAMnEv3dGMRAqMZiH&authuser=0' },
  { name: 'Bhubalan S', role: 'Digital Marketing Manager & Co-Founder', image: 'https://drive.usercontent.google.com/download?id=1tnkLMbWiqm32dV3du6ugDe7IHSTTo8zW&authuser=0' },
  { name: 'Joshua Edwin Rajan A', role: 'Technical Head & Co-Founder', image: 'https://drive.usercontent.google.com/download?id=1HNg0yIAWzx-0minG2hpo89Rz2_8xgyOn&authuser=0' },
]

const services = [
  { name: 'Product Photography', icon: Camera, description: 'Transforming your products into visual masterpieces.' },
  { name: 'Poster Creation', icon: Palette, description: 'Creative and impactful designs for promotional success.' },
  { name: 'Logo Design', icon: Aperture, description: 'Crafting unique and memorable brand identities.' },
  { name: 'Digital Marketing', icon: Megaphone, description: 'Boost your brand\'s online presence with tailored strategies.' },
  { name: 'Photo/Video Editing', icon: Video, description: 'Enhancing your visuals for maximum impact.' },
  { name: 'Web & App Development', icon: Code, description: 'Building robust and user-friendly digital solutions.' },
  { name: 'B2B Marketing', icon: Briefcase, description: 'Driving growth with targeted business strategies.' },
  { name: 'UI/UX Design', icon: Palette, description: 'Creating intuitive and visually appealing user interfaces.' },
]

export default function Home() {
  const [currentMember, setCurrentMember] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMember((prevMember) => (prevMember + 1) % teamMembers.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="container mx-auto px-4">
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Empowering Your Digital Journey with Excellence</h1>
        <p className="text-xl mb-8">Zenzi Technologics: Your partner in IT services and digital innovation</p>
        <Button asChild size="lg">
          <Link href="/services">Explore Our Services</Link>
        </Button>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          At Zenzi Technologics, we're committed to delivering cutting-edge IT solutions that drive your business forward. 
          Our team of experts combines creativity with technical expertise to provide services that exceed expectations and 
          help you stay ahead in the digital landscape.
        </p>
      </section>

      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 mb-4">
            <Image
              src={teamMembers[currentMember].image}
              alt={teamMembers[currentMember].name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold">{teamMembers[currentMember].name}</h3>
          <p className="text-gray-600">{teamMembers[currentMember].role}</p>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <service.icon className="mr-2" />
                  {service.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
                <Button asChild variant="link" className="mt-4">
                  <Link href={`/services#${service.name.toLowerCase().replace(/ /g, '-')}`}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Basic', price: 'Rs. 3k - 5k', features: ['Logo design', 'Basic posters', 'Simple photography'] },
            { name: 'Intermediate', price: 'Rs. 10k - 15k', features: ['Advanced photography', 'Multi-poster designs', 'Website development'] },
            { name: 'Enterprise', price: 'Custom', features: ['Fully customized services', 'Enterprise-grade solutions', 'Dedicated support team'] }
          ].map((plan, index) => (
            <Card key={index} className={index === 1 ? 'border-primary' : ''}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-4">{plan.price}</p>
                <ul className="list-disc list-inside space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/contact">
                    {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <p className="italic">"Zenzi Technologics transformed our online presence. Their web development and digital marketing services are top-notch!"</p>
              <p className="mt-4 font-semibold">- John Doe, CEO of TechCorp</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="italic">"The product photography service exceeded our expectations. Our sales have increased significantly since we started using their images."</p>
              <p className="mt-4 font-semibold">- Jane Smith, Marketing Director at FashionBrand</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

