import { usePopularOpen } from "./open/features/moviePage/usePopularOpen";


const Popular = () => {
    const {movie_name, isLoading} =usePopularOpen();
    console.log('Popular Data',movie_name);
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
                            <li>
						<img src={img} alt="" className="cover" />
						<p className="title">{name}</p>
						<p className="genre">Action, Crime</p>
					</li>
                        )
                    })}
					
				
				</ul>
			</div> 
    </>
  );
};

export default Popular;
