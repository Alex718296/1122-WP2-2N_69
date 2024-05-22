import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://qfvxjrlpnpxdkvvjlnnu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmdnhqcmxwbnB4ZGt2dmpsbm51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1MTcxNDQsImV4cCI6MjAyNDA5MzE0NH0.4iPvRy6xJ4W3yElFVC-vXF8dOXG9TW99G89E7k9U-mE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
