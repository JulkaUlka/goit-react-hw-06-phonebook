import PropTypes from 'prop-types';
import { Button } from './ContactList.styled';

export function ContactList(props) {
  const { contacts, onDelete } = props;

  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <span>
              {name} {number}
            </span>
            <Button onClick={() => onDelete(id)}>Delete</Button>
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
  ).isRequired,  
  onDelete: PropTypes.func,
};
