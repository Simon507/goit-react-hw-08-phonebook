// import { GlobalStyle } from './GlobalStyle';
// import { Layout } from './Layout';
import { Layout } from '../components/Layout';

import {
  // useEffect,
  lazy,
} from 'react';

import { Route, Routes } from 'react-router-dom';

// import { Provider } from 'react-redux';
// import { store } from '../redux/store';

// import { ContactForm } from './form/ContactForm';
// import { Filter } from './filter/Filter';
// import { ContactList } from 'components/contactList/ContactList';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  return (
    // <Provider store={store}>
    //   <Layout>
    //     <GlobalStyle />
    //     <h1>Phonebook</h1>
    //     <ContactForm />
    //     <h2>Contacts</h2>
    //     <Filter />
    //     <ContactList />
    //   </Layout>
    // </Provider>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            // <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
            <RegisterPage />
          }
        />
        <Route
          path="/login"
          element={
            <LoginPage />
            // <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            // <PrivateRoute redirectTo="/login" component={<TasksPage />} />
            <Contacts />
          }
        />
      </Route>
    </Routes>
  );
};
