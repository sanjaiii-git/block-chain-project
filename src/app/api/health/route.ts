import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// This endpoint keeps Supabase active by performing a lightweight query
export async function GET() {
  try {
    // Perform a simple query to keep the database active
    const { data, error } = await supabase
      .from('profiles')
      .select('count')
      .limit(1)

    if (error) {
      console.error('Health check error:', error)
      return NextResponse.json(
        { status: 'error', message: error.message, timestamp: new Date().toISOString() },
        { status: 500 }
      )
    }

    return NextResponse.json({
      status: 'ok',
      message: 'Supabase is active',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Health check failed:', error)
    return NextResponse.json(
      { status: 'error', message: 'Health check failed', timestamp: new Date().toISOString() },
      { status: 500 }
    )
  }
}
