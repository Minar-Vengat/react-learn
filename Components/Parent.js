import React from 'react';
import UserTable from './Child';
import { data } from 'react-router-dom';

function Parent() {
  const User = [
    { id: 1, name: 'Minar', age: 20 },
    { id: 2, name: 'Partha', age: 23 },
    { id: 3, name: 'Prakash', age: 25 }
  ];

  return (
    <div>
      <h2>User List</h2>
      <UserTable data={User} />
    </div>
  );
}

export default Parent;