import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { AddContact } from '../pages/AddContact';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook" element={<Layout />}>
        <Route
          path="/goit-react-hw-08-phonebook/register"
          element={
            <RestrictedRoute
              redirectTo="/goit-react-hw-08-phonebook/allContacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          index
          element={
            <RestrictedRoute
              redirectTo="/goit-react-hw-08-phonebook/allContacts"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/goit-react-hw-08-phonebook/allContacts"
          element={
            <PrivateRoute
              redirectTo="/goit-react-hw-08-phonebook"
              component={<HomePage />}
            />
          }
        />
        <Route
          path="/goit-react-hw-08-phonebook/addContacts"
          element={
            <PrivateRoute
              redirectTo="/goit-react-hw-08-phonebook"
              component={<AddContact />}
            />
          }
        />
      </Route>
    </Routes>
  );
};
