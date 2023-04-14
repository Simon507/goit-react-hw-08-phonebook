import { useSelector, useDispatch } from 'react-redux';

import { addContacts } from '../../redux/contactList/operations';
import { selectContactList } from '../../redux/contactList/selectors';

import {
  Box,
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
} from '@mui/material';

export const ContactForm = () => {
  const stateValue = useSelector(selectContactList);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    console.log(form);

    if (
      stateValue.some(
        item => item.name.toLowerCase() === form.name.value.toLowerCase()
      )
    ) {
      return alert(`${form.name.value} is already exist in contacts`);
    }

    const addValue = { name: form.name.value, phone: form.phone.value };
    dispatch(addContacts(addValue));

    document.location = '/goit-react-hw-08-phonebook/allContacts';

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
        <DialogTitle
          sx={{
            marginBottom: 5,
          }}
        >
          Please add a new contact
        </DialogTitle>
        <DialogContentText>Enter name</DialogContentText>
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
        <DialogContentText>Enter phone</DialogContentText>
        <TextField
          margin="dense"
          id="phone"
          label="Phone"
          type="text"
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
            Add contact
          </Button>
        </Box>
      </DialogContent>
    </form>
  );
};
