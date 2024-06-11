import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar';
import Header from './Header';
import styled from 'styled-components';



const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <>
    <div className="window-margin">
    <div className="window">
  
      <aside className="sidebar">
        <div className="top-bar">
          <p className="logo">Final-Project-69</p>
        </div>
  
        <div className="search-box">
          <input type="text" placeholder="Search..."/>
          <p className="fa fa-search"></p>
        </div>
  
        <menu className="menu">
          <p className="menu-name">Movie trailers</p>
          <ul>
            <li className="active">
              <a href="#">Action / Adventure</a>
              <ul>
              {/* className="active" */}
                <li><a href="/Latest">Latest</a></li>
                <li><a href="/popular">Popular</a></li>
                <li><a href="/ComingSoon">Coming soon</a></li>
                <li><a href="/StaffPicks">Staff picks</a></li>
              </ul>
            </li>
            <li><a href="#">Animation</a></li>
            <li><a href="#">Comedy</a></li>
            <li><a href="#">Documentaries</a></li>
              {/* <li><a href="#">Drama</a></li>
              <li><a href="#">Horror</a></li>
              <li><a href="#">Sci-Fi  / Fantasy</a></li>
              <li><a href="#">List A-Z</a></li> */}
          </ul>
  
          <div className="separator"></div>
  
          {/* <ul className="no-bullets">
            <li><a href="#">Latest news</a></li>
            <li><a href="#">Critic reviews</a></li>
            <li><a href="#">Box office</a></li>
            <li><a href="#">Top 250</a></li>
          </ul> */}
  
          <div className="separator"></div>
        </menu>
      </aside>
  
  
      <div className="main" role="main">
  
        <div className="top-bar">
  
          <div className="profile-box">
          <div onClick={handleClick}>
     
        
           <Link  to='/login'><div className="circle"><img width='48px' height='36px' src='./login.png' /></div></Link>

    </div>
           
            
           
            {/* <span className="arrow fa fa-angle-down"></span> */}
          </div>
  
          <ul className="top-menu">
            <li className="menu-icon trigger-sidebar-toggle">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </li>
            <li><a href="#">Headlines</a></li>
            <li><a href="#">Articles</a></li>
            <li className="active"><a href="#">Movies & Films</a></li>
            <li><a href="#">Television</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Celebrities</a></li>
          </ul>
  
        </div>
  
  
        <div className="featured-movie">
          <img className="cover" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/backdrop_ggwxvq_1.jpg" alt="" class="cover" />
          <p className="corner-title">Staff pick</p>
  
          <div className="bottom-bar">
            <div className="title-container">
            <a href="https://youtu.be/nODrjQUR5YU?si=6_OrkutrXIr_LOtB" target="_blank">
              <span className="fa fa-play-circle" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/22043/backdrop_ggwxvq_1.jpg"></span>
              <b>Non-stop</b> Trailer #1
              </a>
            </div>
  
            <div className="right">
              <div className="stars">
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star-half-o"></span>
                <span className="fa fa-star-o"></span>
              </div>
              <div className="share">
                <icon className="fa fa-share-square"></icon> Share
              </div>
            </div> 
          </div> 
        </div> 
        <Outlet/>
  
      </div> 
  
    </div> 
  </div>
  
   </>
    
  );
}

export default AppLayout;
