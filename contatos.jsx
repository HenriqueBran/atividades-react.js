import React, { useState, useEffect } from 'react';

const ContactForm = ({ addContact, editContact, contactToEdit, setContactToEdit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name);
      setPhone(contactToEdit.phone);
      setEmail(contactToEdit.email);
    }
  }, [contactToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contactToEdit) {
      editContact({ id: contactToEdit.id, name, phone, email });
    } else {
      addContact({ id: Date.now(), name, phone, email });
    }

    setName('');
    setPhone('');
    setEmail('');
    setContactToEdit(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Telefone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">{contactToEdit ? 'Atualizar' : 'Adicionar'}</button>
    </form>
  );
};

export default ContactForm;
