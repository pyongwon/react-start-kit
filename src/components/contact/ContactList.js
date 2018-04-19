import React from 'react';
import PropTypes from 'prop-types';
import ContactListRow from './ContactListRow';

const ContactList = ({contacts}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => 
          <ContactListRow key={contact.id} contact={contact} />
        )}
      </tbody>
    </table>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired
};

export default ContactList;