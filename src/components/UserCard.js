
import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => (
  <div className="user-card">
    <img src={user.picture.medium} alt="User" />
    <h3>{`${user.name.first} ${user.name.last}`}</h3>
  </div>
);

export default UserCard;
