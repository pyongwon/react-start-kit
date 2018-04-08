import {combineReducers} from 'redux';
import contacts from './contactReducer';

const rootReducer = combineReducers({
  contacts // contacts: contacts
});

export default rootReducer;