import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// Vercel Cron Job endpoint to prevent Supabase from pausing
// Runs every 6 hours to keep database active
export async function GET(request: Request) {
  try {
    // Verify the request is from Vercel Cron (optional auth)
    const authHeader = request.headers.get('authorization')
    const cronSecret = process.env.CRON_SECRET
    
    // Only enforce auth if CRON_SECRET is set
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      console.warn('Unauthorized cron attempt')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    console.log('🔄 Keep-alive cron started:', new Date().toISOString())

    // Perform multiple queries across different tables to ensure activity
    const [profilesCheck, recordsCheck, authCheck] = await Promise.all([
      supabase.from('profiles').select('id').limit(1).single(),
      supabase.from('land_records').select('id').limit(1).single(),
      // Ping Supabase auth service as well
      supabase.auth.getSession()
    ])

    const results = {
      profiles: profilesCheck.error ? `error: ${profilesCheck.error.message}` : 'ok',
      records: recordsCheck.error ? `error: ${recordsCheck.error.message}` : 'ok',
      auth: authCheck.error ? `error: ${authCheck.error.message}` : 'ok',
      timestamp: new Date().toISOString()
    }

    console.log('✅ Keep-alive cron completed:', results)

    return NextResponse.json({
      status: 'success',
      message: 'Supabase keep-alive executed',
      results,
      nextRun: '6 hours'
    })
  } catch (error) {
    console.error('❌ Keep-alive cron failed:', error)
    return NextResponse.json(
      { 
        status: 'error', 
        message: error instanceof Error ? error.message : 'Keep-alive failed', 
        timestamp: new Date().toISOString() 
      },
      { status: 500 }
    )
  }
}
