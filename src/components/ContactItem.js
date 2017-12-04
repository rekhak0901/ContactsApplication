import React, { Component, PropTypes } from 'react';
import { deleteItem } from '../redux/actions';

export default class ContactItem extends Component {

    render() {
      const {
          id,
          onEditClick,
          onDeleteClick,
          contact : {
            name,
            number,
            phoneType,
            email,
            address
          }
        } = this.props;

      return (
         <a href="#" className="list-group-item">
            <div className="pull-right">
                <span className="glyphicon glyphicon-pencil" onClick={onEditClick(id)}></span>
                 &nbsp;&nbsp;
                <span className="glyphicon glyphicon-remove" onClick={onDeleteClick(id)}></span>
            </div>
            <address>
                <h3>{name}</h3><br/>
                <strong title="Phone">Phone:</strong> {number}
                &nbsp;&nbsp;
                <strong title="PhoneType">Type:</strong> {phoneType}<br/>
                <strong title="Email">Email:</strong> {email}<br/>
                <strong title="Address">Address:</strong> {address}<br/>
            </address>
        </a>
    );
    }
}
