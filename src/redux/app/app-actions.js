import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addContact = createAction('app/add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number
  },
}));

export const deleteContact = createAction('app/delete');

export const changeFilter = createAction('app/changeFilter')