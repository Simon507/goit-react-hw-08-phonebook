import { configureStore } from '@reduxjs/toolkit';

import { editingReducer } from './contacts/editingSlice';
import { filterReducer } from './contacts/filterSlice';

export const store = configureStore({
  reducer: {
    contactList: editingReducer,
    filters: filterReducer,
  },
});
