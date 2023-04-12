// import { GlobalStyle } from './GlobalStyle';
// import { Layout } from './Layout';
import { Helmet } from 'react-helmet';
// import { Provider } from 'react-redux';
// import { store } from '../redux/store';

import { ContactForm } from '../components/addContactsForm/ContactForm';
import { Filter } from '../components/filter/Filter';
import { ContactList } from '../components/contactList/ContactList';

export const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
