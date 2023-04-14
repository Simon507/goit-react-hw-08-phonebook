// import { GlobalStyle } from './GlobalStyle';
// import { Layout } from './Layout';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { Provider } from 'react-redux';
// import { store } from '../redux/store';

import { ContactForm } from '../components/addContactsForm/ContactForm';

export const AddContact = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Add contacts</title>
      </Helmet>

      <ContactForm />
    </HelmetProvider>
  );
};
