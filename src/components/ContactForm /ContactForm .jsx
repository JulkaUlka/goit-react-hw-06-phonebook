import { useSelector, useDispatch } from 'react-redux'; 

import { setName, setNumber } from 'redux/phonebookSlice';
import { Button, Input, Form, Label } from './ContactForm .styled';

export function ContactForm({ onSubmit }) { 
  const name = useSelector(state => state.contactData.name);
  const number = useSelector(state => state.contactData.number);
  const dispatch = useDispatch();
  
  const inputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        dispatch(setName(value));
        break;
      case 'number':
        dispatch(setNumber(value));
        break;
      default:
        break;
    }
  };
  const resetForm = () => {
    dispatch(setName(''));
    dispatch(setNumber(''));
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
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
