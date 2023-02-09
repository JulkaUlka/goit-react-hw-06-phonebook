import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './ContactList.styled';

export class ContactList extends Component {
  render() {
    const { contacts, filter, onDelete } = this.props;
    const filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.trim().toLowerCase());
    });

    return (
      <ul>
        {filteredContacts.map(({ name, number, id }) => {
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
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};