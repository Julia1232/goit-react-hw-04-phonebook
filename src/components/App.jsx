import ContactForm from './ContactForm/ContactForm';

import shortid from 'shortid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useState, useEffect } from 'react';

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  function addContact({ name, number }) {
    const newContact = { id: shortid.generate(), name: name, number: number };
    setContacts([...contacts, newContact]);
  }

  const getVisibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  function changeFilter(evt) {
    setFilter(evt.currentTarget.value);
  }

  function removeContact(contactId) {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm onAddContact={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={changeFilter} />

      <ContactList
        contacts={getVisibleContacts}
        onRemoveContact={removeContact}
      />
    </div>
  );
};

export default App;
