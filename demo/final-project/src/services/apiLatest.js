import supabase, { supabaseUrl } from './supabase';
export async function getLatest() {
  let { data: movie_name, error } = await supabase
    .from('movie_name')
    .select('*')
    .eq('formatId', '4');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }
  console.log('getmovie_names()', movie_name);
  return movie_name;
}
