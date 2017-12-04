import React, { Component, PropTypes } from 'react';
import ContactItem from './ContactItem';

class ContactList extends Component {

    render() {
        const { contacts, deleteItemAction, openEditContactModal } = this.props;
       return (
            <div className="list-group">
                {contacts.map((contact, index) =>
                    <ContactItem 
                        contact={contact}
                        key={index}
                        id={index}
                        onDeleteClick={deleteItemAction}
                        onEditClick={openEditContactModal}
                    />
                )}
            </div>
        );
    }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default ContactList;
