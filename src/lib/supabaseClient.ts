import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://ndwtzfddjaouabbddflg.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kd3R6ZmRkamFvdWFiYmRkZmxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2MzQ0MDAsImV4cCI6MjA3NzIxMDQwMH0.x62PNDs3OYDrV-HnJMiVwU6zy6ikqdNW71wblnUZHKA'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)


