import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div>

      <h2>usuarios:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.name} - {user.email}</span>
            <button onClick={() => onEdit(user)}>editar</button>
            <button onClick={() => onDelete(user.id)}>deletar</button>
          </li>

        ))}
      </ul>
    </div>

  );
};

export default UserList;
