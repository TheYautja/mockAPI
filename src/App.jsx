import React, { useState, useEffect } from 'react';
import { listaUsers, criarUser, updateUser, fimUser } from './services/api';
import UserForm from './comp/UserForm';
import UserList from './comp/UserList';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await listaUsers();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleCreateUser = async (userData) => {
    const newUser = await criarUser(userData);
    setUsers([...users, newUser]);
  };

  const handleEditUser = async (userData) => {
    if (!userToEdit) return;
    const updatedUser = await updateUser(userToEdit.id, userData);
    setUsers(users.map(user => (user.id === userToEdit.id ? updatedUser : user)));
    setUserToEdit(null);
  };

  const handleFimUser = async (id) => {
    await fimUser(id);
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <p className="text-gray-600 mb-4">
        <a href='https://github.com/TheYautja/mockAPI' className="text-blue-500 hover:underline">Código disponível aqui</a>
      </p>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Consumo de API - Augusto</h1>

      <UserForm 
        onSave={userToEdit ? handleEditUser : handleCreateUser} 
        userToEdit={userToEdit} 
      />

      <UserList 
        users={users} 
        onEdit={setUserToEdit} 
        onDelete={handleFimUser} 
      />
    </div>
  );
};

export default App;
