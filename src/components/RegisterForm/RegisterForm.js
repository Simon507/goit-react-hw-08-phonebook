import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import {
  Box,
  Button,
  DialogContent,
  DialogContentText,
  TextField,
} from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      register({
        name: form.name.value,
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
        <DialogContentText>Username</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          sx={{
            marginBottom: 5,
          }}
          required
        ></TextField>
        <DialogContentText>E-mail</DialogContentText>
        <TextField
          margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth
          sx={{
            marginBottom: 5,
          }}
          required
        ></TextField>
        <DialogContentText>Password</DialogContentText>
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
            Register
          </Button>
        </Box>
      </DialogContent>
    </form>
  );
};
