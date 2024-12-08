'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { supabase } from "@/lib/supabase"

const serviceSpecificFields = {
  'product-photography': [
    { name: 'productType', label: 'Product Type', type: 'text' },
    { name: 'numberOfItems', label: 'Number of Items', type: 'number' },
    { name: 'preferredStyle', label: 'Preferred Style', type: 'select', options: ['Studio', 'Lifestyle', 'Both'] },
  ],
}

export default function ServiceInquiryPage({ params }: { params: { service: string } }) {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [userType, setUserType] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    industry: '',
    website: '',
    message: '',
    productType: '',
    numberOfItems: '',
    preferredStyle: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Prepare the data to insert into productphotography table
    const dataToInsert = {
      name: formData.name,
      email: formData.email,
      phonenumber: formData.phone,
      product_type: formData.productType,
      company_name: userType === 'company' ? formData.companyName : null,
      industry: userType === 'company' ? formData.industry : null,
      bussiness_website: userType === 'company' ? formData.website : null,
      count: parseInt(formData.numberOfItems, 10),
      preferred_style: formData.preferredStyle,
      additional_info: formData.message,
    }

    try {
      // Insert data into the productphotography table in Supabase
      const { data, error } = await supabase
        .from('productphotography')
        .insert(dataToInsert)

      if (error) throw error
      console.log("Successful!")
      router.push('/thank-you')
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const renderField = (field: any) => {
    switch (field.type) {
      case 'text':
      case 'number':
      case 'email':
        return (
          <Input
            id={field.name}
            name={field.name}
            type={field.type}
            value={formData[field.name as keyof typeof formData] || ''}
            onChange={handleInputChange}
            required
          />
        )
      case 'textarea':
        return (
          <Textarea
            id={field.name}
            name={field.name}
            value={formData[field.name as keyof typeof formData] || ''}
            onChange={handleInputChange}
            required
          />
        )
      case 'select':
        return (
          <Select name={field.name} onValueChange={(value) => handleInputChange({ target: { name: field.name, value } } as any)}>
            <SelectTrigger>
              <SelectValue placeholder={`Select ${field.label}`} />
            </SelectTrigger>
            <SelectContent>
              {field.options.map((option: string) => (
                <SelectItem key={option} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Service Inquiry: {params.service.replace(/-/g, ' ')}</CardTitle>
          <CardDescription>Please provide the following information to get started.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <Label>I am a:</Label>
                  <RadioGroup onValueChange={setUserType} className="flex space-x-4 mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="individual" id="individual" />
                      <Label htmlFor="individual">Individual</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="company" id="company" />
                      <Label htmlFor="company">Company</Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button type="button" onClick={() => setStep(2)} disabled={!userType}>Next</Button>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required />
                </div>
                {userType === 'company' && (
                  <>
                    <div>
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input id="companyName" name="companyName" value={formData.companyName} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <Input id="industry" name="industry" value={formData.industry} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="website">Business Website (optional)</Label>
                      <Input id="website" name="website" type="url" value={formData.website} onChange={handleInputChange} />
                    </div>
                  </>
                )}
                {serviceSpecificFields[params.service as keyof typeof serviceSpecificFields]?.map((field) => (
                  <div key={field.name}>
                    <Label htmlFor={field.name}>{field.label}</Label>
                    {renderField(field)}
                  </div>
                ))}
                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} />
                </div>
                <Button type="submit">Submit Inquiry</Button>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
