import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/app/app-actions';
import {getVisibleContacts} from '../../redux/app/app-selectors'
import s from './ContactList.module.css';

function ContactList() {

  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(actions.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={s.btn}
          >
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;