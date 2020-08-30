import React from 'react';

import './style.css';

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <div className='container'>
      <div className='img'>
        <img src={user.avatar} alt={user.first_name} />
      </div>
      <div className='info'>
        <span>
          {user.first_name} {user.last_name}
        </span>
        <span>{user.email}</span>
      </div>
    </div>
  );
};
export default UserItem;
