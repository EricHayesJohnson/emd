import { createClient } from '@supabase/supabase-js';

export enum DBTable {
    SUMMARY_PAGE = 'summaryPageData',
}

const supabaseUrl = 'https://eaapkwtevvgvmxxzetoz.supabase.co';
const supabaseKey = process.env.REACT_APP_DB_PUBLIC_KEY || '';
export const supabase = createClient(supabaseUrl, supabaseKey);
