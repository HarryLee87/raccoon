import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.ITE_SUPABASE_ANNO_KEY;

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);
