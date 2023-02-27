import PropTypes from 'prop-types';
import { Button, List, Item } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {contacts
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ name, phone, id }) => {
          return (
            <Item key={id}>
              <p>
                <b>{name}:</b>{' '}
              </p>{' '}
              <p>{phone}</p>
              <Button onClick={() => handleDelete(id)}>Delete</Button>
            </Item>
          );
        })}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
