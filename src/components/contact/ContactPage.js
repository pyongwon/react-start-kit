import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as contactActions from '../../actions/contactActions';
import ContactList from './ContactList';

class ContactPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.loadContacts();
  }

  contactRow(contact, index) {
    return <div key={index}>{contact.name}</div>;
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <ContactList contacts={this.props.contacts} />
      </div>
    );
  }
}

ContactPage.propTypes = {
  actions: PropTypes.object.isRequired,
  contacts: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contactActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);