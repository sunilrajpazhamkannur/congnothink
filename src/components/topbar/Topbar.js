import React from 'react'
import "./topbar.css";
import { Search,Person,Chat,NotificationAdd } from '@mui/icons-material';



function Topbar() {
  return (
    <div className="topbarContainer">
     
        <div className="topbarLeft"> 
        <a href='/' >       
        <span className="logo" >Net-Book</span>  </a>         
        </div>
       

        <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
        </div>
        <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationAdd />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <a href="/profile">
        <img src="/assets/person/0.jpg" alt="" className="topbarImg"/>
        </a>
      </div>


    </div>
  
  );
}

export default Topbar