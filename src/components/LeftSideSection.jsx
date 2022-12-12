import React from "react";
import "../styles/LeftSideSection.css";
import shilouette from "./shilouette-7347044.jpg";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/UserSlice";

const LeftSideSection = () => {
  const user = useSelector(selectUser);

  //const { email, displayName, photoUrl } = user;
  const recentItem = (topic) => {
    return (
      <div className="leftSection__recentItem">
        <span className="leftSection__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="LeftSideSection">
      <div className="leftSection__top">
        <img src={shilouette} alt="" />
        <Avatar src={user?.photoUrl} className="leftSection__avatar">
          {user?.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4> {user.email}</h4>
      </div>

      <div className="leftSection__stats">
        <div className="leftSection__stat">
          <p>Who viewed you</p>
          <p className="leftSection__statNumber">2,543</p>
        </div>

        <div className="leftSection__stat">
          <p>Views on post</p>
          <p className="leftSection__statNumber">2,468</p>
        </div>
      </div>

      <div className="leftSection__bottom">
        <p className="recent">Recent</p>
        {recentItem("react Js")}
        {recentItem("Programming")}
        {recentItem("Softwareenginnering")}
        {recentItem("Design")}
        {recentItem("Developer")}
      </div>
    </div>
  );
};

export default LeftSideSection;
