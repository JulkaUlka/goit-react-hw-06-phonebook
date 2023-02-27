import { ContactForm } from './ContactForm /ContactForm ';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from'redux/operations';
import {getIsloading} from 'redux/selectors';
import {Loader} from 'components/Loader/Loader';

export function App() {
  const isLoading = useSelector(getIsloading);
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(getContacts())
  }, [dispatch]);

  return (
    <>
      <div style={{marginLeft: "30px"}} >
      {isLoading && <Loader />}
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
         <ContactList />
      </div>
    </>
  );
}
