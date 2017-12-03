import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ContactList from '../components/ContactList';
import AddContactModal from '../components/AddContactModal';
import EditContactModal from '../components/EditContactModal';
import { Modal } from 'react-bootstrap';
import * as actions from '../redux/actions';
import AddContactModal2 from '../components/AddContactModal2'
import EditContactModal2 from '../components/EditContactModal2'

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
    

        
    openAddModal = () => {
        this.setState({isAddContactModalVisible: true})
    }
    onCancelClick = () => {
        this.setState({
        isAddContactModalVisible: false, 
        isEditContactModalVisible: false})
    }

    /*
    * @param index:number of the contact being edited
    * 1. find the contact being edited in the contacts collection
    * 2. shows the editContactModal
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

    handleOnEditContact = () => {
        const {editContactIndex}=this.state;
        const name = $('#edit_contact_modal').find('#contact_name').val();
        const phone = $('#edit_contact_modal').find('#contact_number').val();
        const email = $('#edit_contact_modal').find('#contact_email').val();
        const address = $('#edit_contact_modal').find('#contact_address').val();
        this.props.actions.editItem(editContactIndex,name,phone,email,address)
        this.setState({isEditContactModalVisible: false})
        //get the right index from the state
        //call the save with the index and values from the input fields

        //clear the index on state for editOCntactIndex
        //set isEditContactModalVisible to false
    }

    handleOnAddContact = () => {
    
        const name = $('#add_contact_modal').find('#contact_name').val();
        const phone = $('#add_contact_modal').find('#contact_number').val();
        const email = $('#add_contact_modal').find('#contact_email').val();
        const address = $('#add_contact_modal').find('#contact_address').val();
        this.props.actions.addItem(name,phone,email,address)
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
                        deleteItemAction={this.props.actions.deleteItem}
                        //we need to pass in here the openEditContactModal Action so that we can trigger it on click of the pencil button
                        //this will replace setEditContactIdx
                        setEditContactIdx={this._setEditContactIdx.bind(this)}
                    />
                </div>
            </div>
            {/* <AddContactModal addItemAction={this.props.actions.addItem}/> */}
            {/* lets rebuild this to take in the contact ( so we know what to display initially),
             and the index ( because the editContact actions takes index as a parameter to update the store)
             lets also create a bootstrap component instead */}

            {/* <EditContactModal  editContactIdx={this.state.editContactIdx} editItemAction={this.props.actions.editItem}/> */}
            <AddContactModal2 
                isVisible={isAddContactModalVisible}
                onCancel={this.onCancelClick}
                addContact={this.handleOnAddContact}
            />
            <EditContactModal2
            isVisible={isEditContactModalVisible}
            onCancel={this.onCancelClick}
            editContact={this.handleOnEditContact} 
            contact={contact}  
            />          
        </div>
        );
    }


    
    _setEditContactIdx(idx) {
        // might wanna delete this
        var contacts = this.state.contacts;
        
        this.setState({
            editContactIdx: idx
        });
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
