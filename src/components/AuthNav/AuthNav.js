import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: 25,
  marginRight: 30,
};

export const AuthNav = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
    >
      <NavLink style={linkStyle} to="/goit-react-hw-08-phonebook/register">
        {'Register'}
      </NavLink>
      <NavLink style={linkStyle} to="/goit-react-hw-08-phonebook">
        Log In
      </NavLink>
    </Box>
  );
};
