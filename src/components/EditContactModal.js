import React, { Component } from 'react';

class ContactModal extends Component {
    render() {
        return(
            <div id="edit_contact_modal" className="modal fade" tabindex="-1" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">Edit contact</h4>
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
                            <button type="button" className="btn btn-primary" onClick={this._updateContactHandler.bind(this)}>Update</button>
                        </div>
                    </div> 
                </div> 
            </div> 
		);
    }
    
    _updateContactHandler(e) {
		e.preventDefault();

        let name = $('#edit_contact_modal').find('#contact_name').val();
        let number = $('#edit_contact_modal').find('#contact_number').val();
        let email = $('#edit_contact_modal').find('#contact_email').val();
        let address = $('#edit_contact_modal').find('#contact_address').val();
        this.props.editItemAction(this.props.editContactIdx, name, number,email,address);
        
		this._clearContactForm();
	}

    
	_clearContactForm() {
		$('#edit_contact_modal').find('#contact_name').val('');
        $('#edit_contact_modal').find('#contact_number').val('');
        $('#edit_contact_modal').find('#contact_email').val('');
        $('#edit_contact_modal').find('#contact_address').val('');
		$('#edit_contact_modal').modal('hide');
	}
    
}

export default ContactModal;