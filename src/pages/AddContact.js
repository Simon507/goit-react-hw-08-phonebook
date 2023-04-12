// import { GlobalStyle } from './GlobalStyle';
// import { Layout } from './Layout';
import { Helmet } from 'react-helmet';
// import { Provider } from 'react-redux';
// import { store } from '../redux/store';

import { ContactForm } from '../components/addContactsForm/ContactForm';

export const AddContact = () => {
  return (
    <>
      <Helmet>
        <title>Add contacts</title>
      </Helmet>
      <h1>Add contacts</h1>
      <ContactForm />
    </>
  );
};
