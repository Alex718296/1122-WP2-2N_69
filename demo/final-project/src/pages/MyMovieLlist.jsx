import { Link } from 'react-router-dom';
// import { getHome } from '../services/apiHome';
import supabase, { supabaseUrl } from '../services/supabase';

import { useHomeOpen } from './open/features/cabins/useHomeOpen';
import { useState, useEffect } from 'react';


const MyMovieLlist = () => {
  const { movie_name, isLoading } = useHomeOpen();
  console.log('Movie list ', movie_name);

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const addData = async () => {
      if (isClicked) {
        try {
          // 新增資料到Supabase表格
          const { data: movie_name, error } = await supabase
            .from('movie_name')
            .insert([{ name: 'Bad Boys for Life', img: 'https://qfvxjrlpnpxdkvvjlnnu.supabase.co/storage/v1/object/public/project_img/Bad_Boys_for_Life_poster.jpg?t=2024-06-10T16%3A44%3A12.390Z' , user_id:'f2b6d1aa-c734-4a34-b5e6-c214a2ec6e5e'}]);
  
          if (error) {
            console.error(error);
            return;
          }
          console.log('資料新增成功:', movie_name);
        } catch (error) {
          console.error(error);
        }
      }
    };

    addData();
  }, [isClicked]);


  const handleButtonClick = () => {
    setIsClicked(true);
  };

  const [unClicked, setUnClicked] = useState(false);

  useEffect(() => {
    const deleteData = async () => {
      if (unClicked) {
        try {
          // 獲取Supabase表格中的最後一筆資料
          const { data: lastData, error } = await supabase
            .from('movie_name')
            .select('id')
            .order('id', { ascending: false })
            .limit(1);
  
          if (error) {
            console.error(error);
            return;
          }
  
          // 刪除最後一筆資料
          const { data: deletedData, error: deleteError } = await supabase
            .from('movie_name')
            .delete()
            .match({ id: lastData[0].id });
  
          if (deleteError) {
            console.error(deleteError);
            return;
          }
  
          console.log('資料刪除成功:', deletedData);
        } catch (error) {
          console.error(error);
        }
      }
    };

    deleteData();
  }, [unClicked]);

  const handleButtonDleClick = () => {
    setUnClicked(true);
  };

  // useEffect(() => {
  //   getHome.then((data) => console.log('booking(1) data', data));
  // }, []);
  return (
    <>
      
			<div className="movie-list">
				<div className="title-bar">
					<div className="left">
						<p className="bold">Popular Trailers</p>
						<p className="grey">Action / Adventure</p>
					</div> 
					<div className="right">
						<a className="blue" href="#">Rating <i className="fa fa-angle-down"></i></a>
						<a href="#">Newest</a>
						<a href="#">Oldest</a>
					</div> 
				</div> 

				<ul className="list">
                    {movie_name?.map((data)=>{
                        const{id,img,name}=data;
                        return(
                            <li key={id}>
						<img src={img} alt="" className="cover" />
						<p className="title">{name}</p>
						<p className="genre">Action, Crime</p>
					</li>
                        )
                    })}
					
				
				</ul>
				<div>
				<button  onClick={handleButtonClick} className="load-more">Add a new movies  <span className="fa fa-plus"></span></button>
				<button onClick={handleButtonDleClick} className="load-more">Delete a last movies  <span className="fa fa-minus"></span></button>
				</div>
				

			</div> 
    </>
  );
};



export default MyMovieLlist;
