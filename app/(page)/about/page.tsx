import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Lalith Madhavan V',
    role: 'CEO &amp; Founder',
    description: 'Visionary leader driving innovation.',
    image: 'https://drive.usercontent.google.com/download?id=1uxPWufQYjeQyy2YGQppM0gXTZ2eygk8q&authuser=0'
  },
  {
    name: 'Ramakrishnan S',
    role: 'Managing Director & Co-Founder',
    description: 'Strategist fostering growth and partnerships.',
    image: 'https://drive.usercontent.google.com/download?id=1YQjL8KoLAchy-SBVAMnEv3dGMRAqMZiH&authuser=0'
  },
  {
    name: 'Bhubalan S',
    role: 'Digital Marketing Manager & Co-Founder',
    description: 'Expert in delivering impactful marketing solutions.',
    image: 'https://drive.usercontent.google.com/download?id=1tnkLMbWiqm32dV3du6ugDe7IHSTTo8zW&authuser=0'
  },
  {
    name: 'Joshua Edwin Rajan A',
    role: 'Technical Head & Co-Founder',
    description: 'Mastermind behind seamless technical executions.',
    image: 'https://drive.usercontent.google.com/download?id=1HNg0yIAWzx-0minG2hpo89Rz2_8xgyOn&authuser=0'
  }
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">About Zenzi Technologics</h1>
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          At Zenzi Technologics, we are committed to innovating digital landscapes with creativity and precision. 
          Our mission is to empower businesses and individuals with cutting-edge IT solutions that drive growth, 
          enhance efficiency, and create lasting impact in the digital world.
        </p>
        <p className="text-lg">
          We believe in the power of technology to transform ideas into reality, and we strive to be at the 
          forefront of this transformation. Our team of experts combines technical expertise with creative 
          thinking to deliver solutions that not only meet but exceed our clients' expectations.
        </p>
      </div>
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index}>
            <CardHeader>
              <Image 
                src={member.image} 
                alt={member.name} 
                width={100} 
                height={100} 
                className="rounded-full mx-auto mb-4"
              />
              <CardTitle>{member.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2">{member.role}</p>
              <p>{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

