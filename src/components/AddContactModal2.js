import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const AddContactModal2 = ({isVisible, onCancel, addContact }) => {
    return (
    <Modal id='add_contact_modal' show={isVisible}>
        <Modal.Header>
        <Modal.Title>Add a new contact</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <form>
                <FormGroup>
                <ControlLabel>
                    Name:
                </ControlLabel>
                <FormControl
                id='contact_name'
                type='text'
                placeholder="Enter name"
                />
                <ControlLabel>
                    Phone:
                </ControlLabel>
                <FormControl
                id='contact_number'
                type='text'
                placeholder="Enter phone number"
                />
                <ControlLabel>
                    Email id:
                </ControlLabel>
                <FormControl
                id='contact_email'
                type='text'
                placeholder="Enter email id"
                />
                <ControlLabel>
                    Address:
                </ControlLabel>
                <FormControl
                id='contact_address'
                type='text'
                placeholder="Enter address"
                />
                </FormGroup>
            </form>
        </Modal.Body>

        <Modal.Footer>
        <Button onClick={onCancel}>Cancel</Button>
        <Button bsStyle="primary" onClick={addContact}>Add Contact</Button>
        </Modal.Footer>
  </Modal>
);
}

export default AddContactModal2;


/*class ContactModal extends Component {
    render() {
        return(
            <div id="add_contact_modal" className="modal fade" tabindex="-1" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">Add a new contact</h4>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="contact_name" className="control-label">Name:</label>
                                    <input type="text" className="form-control" id="contact_name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact_number" className="control-label">Phone:</label>
                                    <input type="text" className="form-control" id="contact_number"/>
                                    <button className="btn btn-default btn-sm pull-right" onClick={this._openAddAdditionalContact}><span className="glyphicon glyphicon-plus"></span></button>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact_email" className="control-label">Email_id:</label>
                                    <input type="text" className="form-control" id="contact_email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact_address" className="control-label">Address:</label>
                                    <input type="text" className="form-control" id="contact_address"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this._clearContactForm.bind(this)}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={this._addContactHandler.bind(this)}>Add</button>
                        </div>
                    </div> 
                </div> 
            </div> 
		);
    }
    

    _openAddAdditionalContact(){
    
    }
    _addContactHandler(e) {
		e.preventDefault();
		let name = $('#add_contact_modal').find('#contact_name').val();
        let number = $('#add_contact_modal').find('#contact_number').val();
        let email = $('#add_contact_modal').find('#contact_email').val();
		let address = $('#add_contact_modal').find('#contact_address').val();
        
        
        this.props.addItemAction(name, number);
		
		this._clearContactForm();
	}

	_clearContactForm() {
		$('#add_contact_modal').find('#contact_name').val('');
        $('#add_contact_modal').find('#contact_number').val('');
        $('#add_contact_modal').find('#contact_email').val('');
        $('#add_contact_modal').find('#contact_address').val('');
		$('#add_contact_modal').modal('hide');
	}
}
export default ContactModal;
*/