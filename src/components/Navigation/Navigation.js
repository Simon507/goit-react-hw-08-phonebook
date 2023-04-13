import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    isLoggedIn && (
      <nav>
        <NavLink
          className={css.link}
          to="/goit-react-hw-08-phonebook/allContacts"
        >
          All contacts
        </NavLink>
        <NavLink
          className={css.link}
          to="/goit-react-hw-08-phonebook/addContacts"
        >
          Add contacts
        </NavLink>
      </nav>
    )
  );
};
