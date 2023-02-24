import PropTypes from 'prop-types';
import { Button } from './ContactList.styled';
import { useSelector, useDispatch} from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/phonebookSlice';


export function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <span>
              {name} {number}
            </span>
            <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
          </li>
        );
      })}
    </ul>
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
