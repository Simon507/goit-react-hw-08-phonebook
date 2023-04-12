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
      <Route path="/" element={<Layout />}>
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/allContacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          index
          element={
            <RestrictedRoute
              redirectTo="/allContacts"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/allContacts"
          element={<PrivateRoute redirectTo="/" component={<HomePage />} />}
        />
        <Route
          path="/addContacts"
          element={<PrivateRoute redirectTo="/" component={<AddContact />} />}
        />
      </Route>
    </Routes>
  );
};
