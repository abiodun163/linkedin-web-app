import React from 'react';
import "../styles/Posts.css";
import { Avatar } from "@mui/material";
import {  BsShareFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { BiMessageDetail, BiSend } from "react-icons/bi";
//import { MdSend } from "react-icon/";

import InputOptions from './InputOptions';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/UserSlice';


const Posts = ({ name, description, message, photoURL }) => {

  const user = useSelector(selectUser)
    
      const icons = [
        {
          icon: AiOutlineLike,
          title: "Like",
          color: "gray",
          id: 1,
        },
        {
          icon: BiMessageDetail,
          title: "Comment",
          color: "gray",
          id: 2,
        },
        {
          icon: BsShareFill,
          title: "Share",
          color: "gray",
          id: 3,
        },
        {
          icon: BiSend,
          title: "Send",
          color: "gray",
          id: 4,
        },
      ];
    

  return (
    <div className="posts">
      <div className="posts__header">
        <Avatar src={photoURL}>{name[0].toUpperCase()}</Avatar>

        <div className="posts__info">
          <h2> {name}</h2>
          <p> {description}</p>
        </div>
      </div>

      <div className="posts__body">
        <p> {message}</p>
      </div>

      <div className="posts__buttons">
        {icons.map((iconic) => {
          const { icon, title, color, id } = iconic;

          return (
            <InputOptions key={id} Icon={icon} title={title} color={color} />
          );
        })}
      </div>
    </div>
  );
}

export default Posts