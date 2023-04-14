import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import { Box, Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box sx={{ display: 'flex' }}>
      <Typography
        sx={{
          color: 'white',
          textDecoration: 'none',
          fontSize: 25,
          marginRight: 10,
        }}
      >
        Welcome, {user.name}
      </Typography>
      <Button
        variant="contained"
        color="info"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
