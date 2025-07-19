import React, { useState, useEffect } from 'react';
import { listaUsers, criarUser, updateUser, fimUser } from './services/api';
import UserForm from './comp/UserForm';
import UserList from './comp/UserList';
import "./App.css"

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
    <div>
      <h1>consumo de API -- Augusto</h1>
      <UserForm onSave={userToEdit ? handleEditUser : handleCreateUser} userToEdit={userToEdit} />
      <UserList users={users} onEdit={setUserToEdit} onDelete={handleFimUser} />
    </div>
  );
};

export default App
