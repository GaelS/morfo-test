import { createClient } from "@supabase/supabase-js";

const { SUPABASE_KEY, SUPABASE_URL, SUPABASE_BUCKET } = process.env;
if (!SUPABASE_KEY || !SUPABASE_URL || !SUPABASE_BUCKET) {
  throw "Missing environment variable";
}
export const uploadBucket = SUPABASE_BUCKET;
export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
