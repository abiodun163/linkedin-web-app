import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/UserSlice';
import "../styles/HeaderOptions.css";


const HeaderOptions = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar src={user?.photoUrl} className="headerOption__icon">
          {user?.email[0].toUpperCase()}
        </Avatar>
      )}
      <h3 className="headerOptions__title">{title}</h3>
    </div>
  );
}


export default HeaderOptions