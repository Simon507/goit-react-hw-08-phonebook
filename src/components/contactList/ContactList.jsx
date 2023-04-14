import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import {
  selectContactList,
  selectFindTarget,
  selectError,
  selectIsLoading,
} from '../../redux/contactList/selectors';

import { fetchContacts, deleteContacts } from 'redux/contactList/operations';

import Face6TwoToneIcon from '@mui/icons-material/Face6TwoTone';
import PhoneAndroidTwoToneIcon from '@mui/icons-material/PhoneAndroidTwoTone';

import {
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const value = useSelector(selectContactList);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  const find = useSelector(selectFindTarget);

  const onDelete = item => {
    dispatch(deleteContacts(item));
  };

  return (
    <List
      sx={{
        marginTop: 3,
        padding: 5,
        border: 1,
        borderRadius: 5,
        gap: 15,
        boxShadow: 20,
      }}
    >
      {isLoading && <p>Loading contacts...</p>}
      {isError && <p>{isError}</p>}
      {value.length > 0 ? (
        value.map(
          item =>
            item.name.toLowerCase().includes(find.toString().toLowerCase()) && (
              <ListItem
                sx={{
                  border: 1,
                  marginBottom: 1,
                  borderRadius: 5,
                }}
                key={item.id}
              >
                <Face6TwoToneIcon></Face6TwoToneIcon>
                <ListItemText
                  sx={{
                    marginLeft: 5,
                    maxWidth: 300,
                  }}
                >
                  Name: {item.name}
                </ListItemText>

                <PhoneAndroidTwoToneIcon></PhoneAndroidTwoToneIcon>
                <ListItemText>{item.number}</ListItemText>
                <ListItemButton
                  sx={{
                    flexGrow: 0.2,
                    padding: 1,
                    border: 1,
                    borderRadius: 5,
                    justifyContent: 'center',
                    boxShadow: 5,
                  }}
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </ListItemButton>
              </ListItem>
            )
        )
      ) : (
        <Typography>В записях нет ни одного контакта</Typography>
      )}
    </List>
  );
};
