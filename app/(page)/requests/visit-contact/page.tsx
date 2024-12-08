'use client'

import { useEffect, useState } from 'react'
import { Phone, Mail } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'

interface Contact {
  id: number
  name: string
  phonenumber: string
  email: string
  message: string
}

export default function VisitContactPage() {
  const [contacts, setContacts] = useState<Contact[]>([])

  useEffect(() => {
    fetchContacts()
  }, [])

  async function fetchContacts() {
    const { data, error } = await supabase
      .from('contact')
      .select('*')
    
    if (error) {
      console.error('Error fetching contacts:', error)
    } else {
      setContacts(data || [])
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header>
        <h1 className="font-bold text-3xl text-center font-red">Zenzi Techologics</h1>
      </header>
      <h1 className="align-center text-3xl font-bold mb-6">Visit Contacts</h1>
    
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.message}</TableCell>
              <TableCell>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <a href={`tel:${contact.phonenumber}`} className="text-blue-600">
                        <Button variant="outline" size="icon">
                          <Phone className="h-4 w-4" />
                        </Button>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{contact.phonenumber}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
              <TableCell>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <a href={`mailto:${contact.email}`} className="text-blue-600">
                        <Button variant="outline" size="icon">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{contact.email}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
