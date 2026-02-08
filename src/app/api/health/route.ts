import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// Public health check endpoint - NO AUTH REQUIRED
// This can be pinged by external monitoring services (UptimeRobot, etc.)
// to prevent Supabase from pausing
export async function GET() {
  try {
    const startTime = Date.now()
    
    // Perform queries to keep database active
    const [profilesCheck, recordsCheck] = await Promise.all([
      supabase.from('profiles').select('id').limit(1),
      supabase.from('land_records').select('id').limit(1)
    ])

    const responseTime = Date.now() - startTime

    const isHealthy = !profilesCheck.error && !recordsCheck.error

    if (!isHealthy) {
      console.error('Health check issues:', {
        profiles: profilesCheck.error?.message,
        records: recordsCheck.error?.message
      })
    }

    return NextResponse.json(
      {
        status: isHealthy ? 'healthy' : 'degraded',
        database: isHealthy ? 'connected' : 'error',
        responseTime: `${responseTime}ms`,
        timestamp: new Date().toISOString(),
        checks: {
          profiles: profilesCheck.error ? 'fail' : 'pass',
          records: recordsCheck.error ? 'fail' : 'pass'
        }
      },
      { status: isHealthy ? 200 : 503 }
    )
  } catch (error) {
    console.error('Health check failed:', error)
    return NextResponse.json(
      { 
        status: 'error', 
        message: error instanceof Error ? error.message : 'Health check failed', 
        timestamp: new Date().toISOString() 
      },
      { status: 500 }
    )
  }
}
