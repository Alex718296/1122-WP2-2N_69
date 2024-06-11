import supabase, { supabaseUrl } from './supabase';
export async function getMovie() {
  
let { data: movie_name, error } = await supabase
.from('movie_name')
.select('*')
        

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }
  console.log('getMovie()', movie_name);
  return movie_name;
}
