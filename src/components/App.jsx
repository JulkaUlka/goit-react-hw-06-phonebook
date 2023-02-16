import { useState, useEffect } from 'react';
import storage from 'helpers/storage';
import { ContactForm } from './ContactForm /ContactForm ';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

const CONTACTS = [
{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
const [contacts, setContacts] = useState(
() => storage.load('contacts-list') ?? CONTACTS
);
const [filter, setFilter] = useState('');

useEffect(() => {
storage.save('contacts-list', contacts);
}, [contacts]);

const addContact = contact => {
const isExist = contacts.find(({ name }) => {
return contact.name === name;
});
if (isExist) {
alert(`${contact.name} is already in contacts`);
return;
}
setContacts(prevState => [...prevState, { ...contact, id: nanoid() }]);
};

const handleFilter = ({ target: { value } }) => {
setFilter(value);
};

const deleteContact = id => {
setContacts(prevState => prevState.filter(contact => contact.id !== id));
};

const getFilteredContacts = () => {
const normaliseFilter = filter.trim().toLowerCase();
return contacts.filter(contact => {
return contact.name.toLowerCase().includes(normaliseFilter);
});
};

const filteredContacts = getFilteredContacts();
return (
<>
<div>
<h1>Phonebook</h1>
<ContactForm onSubmit={addContact} />
<h2>Contacts</h2>
<Filter value={filter} onChange={handleFilter} />
{contacts.length > 0 && (
<ContactList contacts={filteredContacts} onDelete={deleteContact} />
)}
</div>
</>
);
}
