import React, { Component, PropTypes } from 'react';
import ContactItem from './ContactItem';
//import RequestApi from '../redux/actions';
import { getState } from 'redux';

export default class ContactList extends Component {


    // render() {
    //     const { contacts, deleteItemAction, openEditContactModal } = this.props;

    //    return (
    //         <div className="list-group">
    //             {contacts.map((contact, index) =>
    //                 <ContactItem 
    //                     contact={contact}
    //                     key={index}
    //                     id={index}
    //                     onDeleteClick={deleteItemAction}
    //                     onEditClick={openEditContactModal}
    //                 />
    //             )}
    //         </div>
    //     );
      
    // }
    render() {
        const {contacts, deleteItemAction, openEditContactModal } = this.props;
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