import { Avatar } from "@material-ui/core";
import React from "react";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://img.freepik.com/free-photo/gradient-dark-blue-futuristic-digital-grid-background_53876-129728.jpg?auto=format&h=200"
          alt=""
        />
        <Avatar className="sidebar_avatar" />
        <h2>Anirudh Richhariya</h2>
        <h4>anirudh0288@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who Viewed You</p>
          <p className="sidebar_statNumber">1,467</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on Post</p>
          <p className="sidebar_statNumber">1,254</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("developer")}
        {recentItem("softwaredevelopment")}
        {recentItem("design")}
        {recentItem("programming")}
        {recentItem("devops")}
      </div>
    </div>
  );
}

export default Sidebar;
