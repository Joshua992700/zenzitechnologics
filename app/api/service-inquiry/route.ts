import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  const data = await request.json()

  const { error } = await supabase
    .from('service_inquiries')
    .insert([data])

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ message: 'Inquiry submitted successfully' }, { status: 200 })
}

