import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LinkedIn from "./LinkedIn.png";
import { Avatar } from "@mui/material";
import HeaderOptions from "./HeaderOptions";
import "../styles/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/UserSlice";
import { auth } from "./Firebase";

const Header = () => {

  const user = useSelector(selectUser)

  const dispatch = useDispatch()
  const icons = [
    {
      icon: HomeIcon,
      title: "Home",
      id: "1"
    },
    {
      icon: SupervisorAccountIcon,
      title: "My Network",
      id: "2",
    },
    {
      icon: BusinessCenterIcon,
      title: "Jobs",
      id: "3",
    },
    {
      icon: ChatIcon,
      title: "Messaging",
      id: "4",
    },
    {
      icon: NotificationsIcon,
      title: "Notifications",
      id: "5",
    },
    {
      avatar: true,
      title: "Me",
      id: "6",
    },
  ];

  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className="header">
      <div className="header__left">
        <img src={LinkedIn} alt="" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        {icons.map(iconic => {
          const { icon, title, avatar, id } = iconic;
          return (
            <HeaderOptions
              key={id}
              avatar={avatar}
              Icon={icon}
              title={title}
              onClick={logOutOfApp}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
