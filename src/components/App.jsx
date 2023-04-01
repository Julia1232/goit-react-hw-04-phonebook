import ContactForm from './ContactForm/ContactForm';

import shortid from 'shortid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useState, useEffect, useMemo } from 'react';

export default function App() {
  const [state, setState] = useState({
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  });

  // useEffect(() => {
  //   const stateContact = localStorage.getItem('contacts');
  //
  //   const parsedContacts = JSON.parse(stateContact);
  //   console.log(4433 + stateContact);
  //
  //   //  if (parsedContacts) {
  //   //    setState.contacts = parsedContacts;
  //   //  }
  // }, [state.contacts]);
  //
  // useEffect(() => {
  //   if (state.contacts !== setState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(state.contacts));
  //   }
  // }, [state.contacts]);

  const addContact = task => {
    const searchSameName = state.contacts
      .map(cont => cont.name)
      .includes(task.name);

    if (searchSameName) {
      alert(`${task.name} is already in contacts`);
      Event.preventDefault();
    } else if (task.name.length === 0) {
      alert('Fields must be filled!');
    } else {
      const contact = {
        ...task,
        id: shortid.generate(),
      };

      state.contacts = [...state.contacts, contact];

      localStorage.setItem('todos', JSON.stringify(contact));
    }
  };

  const changeFilter = filter => {
    state({ ...state, filter });
  };

  const getVisibleContacts = () => {
    const { contacts, filter } = state;
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const removeContact = ({ contactId }) => {
    return (setState.contacts = state.contacts.filter(contactId));
  };

  const { filter } = state;

  const visibleContacts = getVisibleContacts();

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm onAddContact={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={changeFilter} />

      {visibleContacts.length > 0 && (
        <ContactList
          contacts={visibleContacts}
          onRemoveContact={removeContact}
        />
      )}
    </div>
  );
}
