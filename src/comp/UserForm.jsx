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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">{userToEdit ? 'alterar' : 'cadastrar'}</button>
    </form>
  );
};

export default UserForm;
