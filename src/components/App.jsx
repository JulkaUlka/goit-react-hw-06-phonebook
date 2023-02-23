import { useSelector, useDispatch } from 'react-redux';
import { setContacts, setFilter } from 'redux/phonebookSlice';

import { ContactForm } from './ContactForm /ContactForm ';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export function App() {
  const contacts = useSelector(state => state.contactData.contacts);
  const filter = useSelector(state => state.contactData.filter);
  const dispatch = useDispatch();

  const addContact = contact => {
    const isExist = contacts.find(({ name }) => {
      return contact.name === name;
    });
    if (isExist) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    dispatch(setContacts([...contacts, { ...contact, id: nanoid() }]));
  };

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  const deleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    dispatch(setContacts(updatedContacts));
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
