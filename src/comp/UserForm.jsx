import React, { useState, useEffect } from 'react';

const UserForm = ({ onSave, userToEdit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.name);
      setEmail(userToEdit.email);
    }
  }, [userToEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userDados = { name, email };
    onSave(userDados);
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto mb-6">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        {userToEdit ? 'Alterar Usuário' : 'Cadastrar Usuário'}
      </h2>
      
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      

      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      

      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        {userToEdit ? 'Alterar' : 'Cadastrar'}
      </button>
    </form>
  );
};

export default UserForm;
