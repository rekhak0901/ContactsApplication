import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ContactList from '../components/ContactList';
import AddContactModal from '../components/AddContactModal';
import EditContactModal from '../components/EditContactModal';
import { Modal } from 'react-bootstrap';
import * as actions from '../redux/actions';



export class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isAddContactModalVisible: false,
            isEditContactModalVisible: false,
            editContactIndex: undefined,
            contact : {}
        };
    }
    

    /*
    * The isAddContactModalVisible is set to true only when the Add button (+) is clicked
    */
    openAddModal = () => {
        this.setState({isAddContactModalVisible: true})
    }

    /*
    * addContactModal and editContactModal disappear when cancel button is clicked
    */
    onCancelClick = () => {
        this.setState({
        isAddContactModalVisible: false, 
        isEditContactModalVisible: false})
    }

    /*
    * 1. find the contact being edited in the contacts collection with index
    * 2. show the editContactModal
    * 3. set the index to the state to be used by the editContact action to edit the right contact 
    * 4. set the contact being edited to the state to be used as default values for the edit contact modal
    */
    openEditContactModal = (index) => () => {
        const { contacts } = this.props;
        const contact = contacts[index];
        this.setState({
            isEditContactModalVisible:  true,
            contact,
            editContactIndex:index
        });
    }

    deleteItemAction = (index) => () => {
        const { deleteItem } = this.props.actions
        deleteItem(index);
    }

    /*
    *get the right index from the state
    *call the save with the index and values from the input fields
    *passing into action creator
    *set isEditContactModalVisible to false
    */
    handleOnEditContact = () => {
        const {editContactIndex}=this.state;
        const name = $('#edit_contact_modal').find('#contact_name').val();
        const phone = $('#edit_contact_modal').find('#contact_number').val();
        const phoneType = $('#edit_contact_modal').find('#contact_type').val();
        const email = $('#edit_contact_modal').find('#contact_email').val();
        const address = $('#edit_contact_modal').find('#contact_address').val();
        this.props.actions.editItem(editContactIndex,name,phone,phoneType,email,address)
        this.setState({isEditContactModalVisible: false})
        
    }

    handleOnAddContact = () => {
        const name = $('#add_contact_modal').find('#contact_name').val();
        const phone = $('#add_contact_modal').find('#contact_number').val();
        const phoneType =$('#add_contact_modal').find('#contact_type').val();
        const email = $('#add_contact_modal').find('#contact_email').val();
        const address = $('#add_contact_modal').find('#contact_address').val();
        this.props.actions.addItem(name,phone,phoneType,email,address)
        this.setState({isAddContactModalVisible: false})
    }

    render() {
        const {contacts }= this.props;
        const { isAddContactModalVisible, contact, isEditContactModalVisible } =  this.state;

        return (
        <div className="row">
            <div id="main-content" className="panel panel-info" >
                <div className="panel-heading">
                    <span className="panel-title">Contacts Manager</span>
                    <button className="btn btn-default btn-sm pull-right" onClick={this.openAddModal}><span className="glyphicon glyphicon-plus"></span></button>
                </div>
                <div className="panel-body">
                    <ContactList contacts={contacts} 
                        openEditContactModal={this.openEditContactModal}
                        deleteItemAction={this.deleteItemAction}
                    />
                </div>
            </div>

            <AddContactModal 
                isVisible={isAddContactModalVisible}
                onCancel={this.onCancelClick}
                addContact={this.handleOnAddContact}
            />
            <EditContactModal
                isVisible={isEditContactModalVisible}
                onCancel={this.onCancelClick}
                editContact={this.handleOnEditContact} 
                contact={contact}  
            />          
        </div>
        );
    }
}

var mapStateToProps = function (state) {
    return state;
};

var mapDispatchToProps = function (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
