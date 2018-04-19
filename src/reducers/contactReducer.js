import * as types from '../actions/actionTypes';
import InitialState from './InitialState';

export default function contactReducer(state = InitialState.contacts, action) {
  switch(action.type) {
    case types.LOAD_CONTACTS_SUCCESS:
      return action.contacts;
     default:
      return state;
  }
}