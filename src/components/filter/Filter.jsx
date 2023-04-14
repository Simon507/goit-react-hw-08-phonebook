import { findTarget } from '../../redux/contactList/filterSlice';
import { useDispatch } from 'react-redux';

import { TextField, Box } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Box
        sx={{
          padding: 3,
          border: 1,
          borderRadius: 5,
          boxShadow: 20,
        }}
      >
        <TextField
          margin="dense"
          id="filter"
          label="Please enter name to find..."
          type="text"
          fullWidth
          sx={{
            marginBottom: 1,
          }}
          onChange={e => {
            dispatch(findTarget(e.target.value));
          }}
        ></TextField>
      </Box>
    </>
  );
};
