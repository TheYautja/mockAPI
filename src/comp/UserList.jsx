import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto mt-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Usuários</h2>
      
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-lg hover:bg-gray-100 transition">

            <span className="text-lg font-medium text-gray-800">{user.name} - 
              <span className="text-gray-500">{user.email}</span>
            </span>

            <div className="space-x-4">
              <button
                onClick={() => onEdit(user)}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(user.id)}
                className="text-red-500 hover:underline focus:outline-none"
              >
                Deletar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
