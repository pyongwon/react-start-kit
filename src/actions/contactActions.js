import * as types from './actionTypes';
import contactApi from '../api/mockContactApi';

export function loadContactsSuccess(contacts) {
  return { type: types.LOAD_CONTACTS_SUCCESS, contacts };
}

export function loadContacts() {
  return function(dispatch) {
    return contactApi.getAllContacts()
      .then(contacts => {
          dispatch(loadContactsSuccess(contacts));
      })
      .catch(error => {
          throw(error);
      });
  };
}