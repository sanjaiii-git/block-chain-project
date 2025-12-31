import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// Vercel Cron Job endpoint to prevent Supabase from pausing
export async function GET(request: Request) {
  // Verify the request is from Vercel Cron
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    // Perform multiple lightweight queries to ensure activity
    const [profilesCheck, recordsCheck] = await Promise.all([
      supabase.from('profiles').select('count').limit(1),
      supabase.from('land_records').select('count').limit(1)
    ])

    const results = {
      profiles: profilesCheck.error ? 'error' : 'ok',
      records: recordsCheck.error ? 'error' : 'ok',
      timestamp: new Date().toISOString()
    }

    console.log('Keep-alive cron executed:', results)

    return NextResponse.json({
      status: 'success',
      message: 'Supabase keep-alive executed',
      results
    })
  } catch (error) {
    console.error('Keep-alive cron failed:', error)
    return NextResponse.json(
      { status: 'error', message: 'Keep-alive failed', timestamp: new Date().toISOString() },
      { status: 500 }
    )
  }
}
