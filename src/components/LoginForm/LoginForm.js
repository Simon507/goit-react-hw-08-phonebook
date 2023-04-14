import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import {
  Box,
  Button,
  DialogContent,
  DialogContentText,
  TextField,
} from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      logIn({
        email: form.email.value,
        password: form.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <DialogContent
        sx={{
          padding: 5,
          border: 1,
          borderRadius: 5,
          gap: 15,
          boxShadow: 20,
        }}
      >
        <DialogContentText>Enter E-mail</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="E-mail adress"
          type="email"
          fullWidth
          sx={{
            marginBottom: 5,
          }}
          required
        ></TextField>
        <DialogContentText>Enter password</DialogContentText>
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          sx={{
            marginBottom: 5,
          }}
          required
        ></TextField>
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Button color="primary" size="large" variant="outlined" type="submit">
            Log In
          </Button>
        </Box>
      </DialogContent>
    </form>
  );
};
