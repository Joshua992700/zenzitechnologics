import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const pricingTiers = [
  {
    name: 'Basic',
    price: 'Rs. 3k - 5k',
    description: 'Perfect for small projects and individuals',
    features: [
      'Logo design',
      'Basic posters',
      'Simple photography'
    ]
  },
  {
    name: 'Intermediate',
    price: 'Rs. 10k - 15k',
    description: 'Ideal for growing businesses',
    features: [
      'Advanced photography',
      'Multi-poster designs',
      'Website development'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom Pricing',
    description: 'Tailored solutions for large organizations',
    features: [
      'Fully customized services',
      'Enterprise-grade solutions',
      'Dedicated support team'
    ]
  }
]

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier, index) => (
          <Card key={index} className={index === 1 ? 'border-primary' : ''}>
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">{tier.price}</p>
              <ul className="list-disc list-inside space-y-2">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/contact">
                  {tier.name === 'Enterprise' ? 'Contact Us for a Quote' : 'Get Started'}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

