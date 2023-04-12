import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
        All contacts
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Add contacts
        </NavLink>
      )}
    </nav>
  );
};
