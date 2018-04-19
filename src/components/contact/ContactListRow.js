import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ContactListRow = ({contact}) => {
  console.log('contact', contact);
  return (
    <tr>
      <td>&nbsp;</td>
      <td><Link to={'/contact/' + contact.id}>{contact.name}</Link></td>
      <td>{contact.email}</td>
    </tr>
  );
};

ContactListRow.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactListRow;