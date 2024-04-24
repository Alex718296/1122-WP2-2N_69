import { useState, useEffect } from 'react';
import axios from 'axios';
// let api_url = `http://localhost:5000/api/card_xx`;
let api_url ='https://qfvxjrlpnpxdkvvjlnnu.supabase.co/rest/v1/card_69?id=eq.11';

// import { supabase } from '../db/clientSupabase';

const SupaDeleteBlog_69 = () => {
  const [name, setName] = useState('Tao Shao Yu');
  const [id, setId] = useState(210410469);
  const [blogs, setBlogs] = useState([]);

  const fetchBlogsFromSupabase = async () => {
    try {

      const response = await axios.delete(
      api_url, 
      {
        headers:{
          apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmdnhqcmxwbnB4ZGt2dmpsbm51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1MTcxNDQsImV4cCI6MjAyNDA5MzE0NH0.4iPvRy6xJ4W3yElFVC-vXF8dOXG9TW99G89E7k9U-mE',
          Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmdnhqcmxwbnB4ZGt2dmpsbm51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1MTcxNDQsImV4cCI6MjAyNDA5MzE0NH0.4iPvRy6xJ4W3yElFVC-vXF8dOXG9TW99G89E7k9U-mE',
          'Content-Type':'application/json',
          'Prefer':'resolution=merge-duplicates',
        }
      });

      console.log('blogs data', response.data);
      // setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogsFromSupabase();
  }, []);

  return (
    <section className='blogs'>
      <div className='section-title'>
        <h2> Get Blogs Using  </h2>
        <h3>
          {name}, {id}
        </h3>
      </div>
      <div className='blogs-center'>
        {blogs.map((item) => {
          const { id, img, remote_url, title, category, descrip } = item;
          return (
            <article key={id} className='blog'>
              <img src={img} alt='Coffee photo' className='img blog-img' />
              <div className='blog-content'>
                <span>
                  {' '}
                  {category} <i className='fa-solid fa-mug-saucer'></i>
                </span>
                <h3>{title}</h3>
                <p>{descrip}</p>
                <a href='#'>read more</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SupaDeleteBlog_69;