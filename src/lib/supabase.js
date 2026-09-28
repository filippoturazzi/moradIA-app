import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Defina VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY no arquivo .env.local (veja .env.example).');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function entrarCom(provedor) {
    return supabase.auth.signInWithOAuth({
        provider: provedor,
        options: { redirectTo: window.location.origin },
    });
}

export function sair() {
    return supabase.auth.signOut();
}
