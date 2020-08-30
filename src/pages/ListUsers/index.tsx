import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import UserItem from '../../components/UserItem';

import './style.css';

interface UserProps {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Users: React.FC<UserProps> = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('users').then(response => {
      const { data } = response.data;
      setUsers(data);
    });
  }, []);

  return (
    <div>
      {users.map((user: UserProps, index) => {
        return <UserItem user={user} />;
      })}
    </div>
  );
};
export default Users;
