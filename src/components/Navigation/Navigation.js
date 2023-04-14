import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: 25,
  marginRight: 30,
};

const linkActiveStyle = {
  color: 'white',
  textDecoration: 'underline',
  fontSize: 25,
  marginRight: 30,
};

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    isLoggedIn && (
      <nav>
        <NavLink
          style={({ isActive }) => (isActive ? linkActiveStyle : linkStyle)}
          to="/goit-react-hw-08-phonebook/allContacts"
        >
          All contacts
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? linkActiveStyle : linkStyle)}
          to="/goit-react-hw-08-phonebook/addContacts"
        >
          Add contacts
        </NavLink>
      </nav>
    )
  );
};
