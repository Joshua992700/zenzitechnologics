'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function ServiceSelectionPage() {
  const router = useRouter()
  const [selectedService, setSelectedService] = useState<string>('')

  const services = [
    { label: 'Product Photography', value: 'product-photography', icon: '📸' },
    { label: 'Poster Creation', value: 'poster-creation', icon: '🎨' },
    { label: 'Logo Design', value: 'logo-design', icon: '✒️' },
    { label: 'Digital Marketing', value: 'digital-marketing', icon: '📱' },
    { label: 'Photo & Video Editing', value: 'photo-video-editing', icon: '🎬' },
    { label: 'Web & App Development', value: 'web-and-app-development', icon: '💻' },
    { label: 'B2B Marketing', value: 'b2b-marketing', icon: '🤝' },
    { label: 'UI/UX Design', value: 'ui-ux-design', icon: '🎯' },
  ]

  const handleSubmit = () => {
    if (selectedService) {
      router.push(`/requests/${selectedService}`)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8">
      <motion.div
        className="max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Card className="shadow-xl">
          <CardHeader className="space-y-2 text-center">
            <motion.div variants={itemVariants}>
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Zenzi Technologics
              </CardTitle>
            </motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 text-lg"
            >
              Transforming ideas into digital reality
            </motion.p>
          </CardHeader>

          <CardContent className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-4">
              <label className="block text-lg font-medium text-gray-700">
                Select a service that matches your needs:
              </label>
              
              <Select
                value={selectedService}
                onValueChange={setSelectedService}
              >
                <SelectTrigger className="w-full p-4 text-lg bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors duration-200">
                  <SelectValue placeholder="Choose a service..." />
                </SelectTrigger>
                <SelectContent className="max-h-80">
                  {services.map((service) => (
                    <SelectItem 
                      key={service.value} 
                      value={service.value}
                      className="p-3 text-base cursor-pointer hover:bg-blue-50"
                    >
                      <span className="flex items-center gap-2">
                        <span>{service.icon}</span>
                        {service.label}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                onClick={handleSubmit}
                disabled={!selectedService}
                className="w-full p-6 text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-102"
              >
                Continue to Service Details
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
      <div className='flex justify-center align-center'> 
        <br/><br/><br/>
        <Link href='/requests/visit-contact'>
        <Button>Visit the contacts list</Button></Link>
      </div>
    </div>
  )
}