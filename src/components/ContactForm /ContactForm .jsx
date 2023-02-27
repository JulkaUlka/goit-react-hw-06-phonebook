import { useDispatch, useSelector } from 'react-redux'; 
import { useState } from 'react';
import { addContact } from 'redux/operations';
import { Button, Input, Form, Label } from './ContactForm .styled';
import { getContacts } from 'redux/selectors';

export function ContactForm({ onSubmit }) { 
  const contacts = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  
  const inputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const resetForm = () => {
  setName('');
    setNumber('');
  };
  const handleSubmit = event => {
    event.preventDefault();
    const isExist = contacts.find(contact => {
      return contact.name === name;
    });
    if (isExist) {
      alert('This contact is existed!!!!');
      return;
    }

    dispatch(addContact({ name, number, }));
    resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          onChange={inputChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          onChange={inputChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
