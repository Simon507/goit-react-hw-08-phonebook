import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import {
  selectContactList,
  selectFindTarget,
  selectError,
  selectIsLoading,
} from '../../redux/contactList/selectors';

import { fetchContacts, deleteContacts } from 'redux/contactList/operations';

import { ContactCard, ContactLst } from './contactList.styles';

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
    <>
      <ContactLst>
        {isLoading && <p>Loading contacts...</p>}
        {isError && <p>{isError}</p>}
        {value.length > 0 ? (
          value.map(
            item =>
              item.name
                .toLowerCase()
                .includes(find.toString().toLowerCase()) && (
                <ContactCard className="item" key={item.id}>
                  <p>{item.name}</p>
                  <p>{item.number}</p>
                  <button onClick={() => onDelete(item.id)}>Delete</button>
                </ContactCard>
              )
          )
        ) : (
          <p>В записях нет ни одного контакта</p>
        )}
      </ContactLst>
    </>
  );
};
