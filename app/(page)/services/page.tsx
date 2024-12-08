'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Camera, Palette, Aperture, Megaphone, Video, Code, Briefcase, Figma } from 'lucide-react'
import Link from 'next/link'

const services = [
  { 
    name: 'Product Photography', 
    icon: Camera, 
    description: 'Transforming your products into visual masterpieces to captivate your audience.',
    details: "Our expert photographers use state-of-the-art equipment to showcase your products in the best light. We offer various styles including studio, lifestyle, and contextual shots to suit your brand's needs."
  },
  { 
    name: 'Poster Creation', 
    icon: Palette, 
    description: 'Creative and impactful designs for promotional success.',
    details: 'Our graphic designers create eye-catching posters that effectively communicate your message. We cater to various needs including event promotion, product launches, and brand awareness campaigns.'
  },
  { 
    name: 'Logo Designing', 
    icon: Aperture, 
    description: 'Crafting unique and memorable brand identities.',
    details: "We design logos that encapsulate your brand's essence. Our process involves in-depth research, conceptualization, and refinement to create a logo that stands out in your industry."
  },
  { 
    name: 'Digital Marketing', 
    icon: Megaphone, 
    description: 'Boost your brand\'s online presence with tailored strategies.',
    details: 'Our digital marketing experts develop comprehensive strategies to increase your online visibility. Services include SEO, social media marketing, content marketing, and PPC campaigns.'
  },
  { 
    name: 'Photo Video Editing', 
    icon: Video, 
    description: 'Enhancing your visuals for maximum impact.',
    details: 'We offer professional editing services for both photos and videos. From color correction and retouching to video post-production and special effects, we ensure your visuals are polished and impactful.'
  },
  { 
    name: 'Web & App Development', 
    icon: Code, 
    description: 'Building robust and user-friendly digital solutions.',
    details: 'Our development team creates responsive websites and intuitive mobile apps. We use the latest technologies to ensure your digital platforms are fast, secure, and scalable.'
  },
  { 
    name: 'B2B Marketing', 
    icon: Briefcase, 
    description: 'Driving growth with targeted business strategies.',
    details: 'We specialize in B2B marketing strategies that generate leads and foster long-term business relationships. Our approach includes account-based marketing, content marketing, and LinkedIn strategies.'
  },
  { 
    name: 'UI UX Design', 
    icon: Figma, 
    description: 'Give your website and see how we turn them colorful',
    details: 'Our expert team specializes in web design that not only meets user requirements but also transcends expectations, delivering stunning, innovative websites that captivate users and enhance their experience.'
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card key={index} id={service.name.toLowerCase().replace(/ /g, '-')}>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <service.icon className="mr-2" />
                {service.name}
              </CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{service.details}</p>
              <Button asChild>
                <Link href={`/services/${service.name.toLowerCase().replace(/ /g, '-')}/inquiry`}>Get Started</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

