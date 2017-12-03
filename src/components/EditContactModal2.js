import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const EditContactModal2 = ({isVisible, onCancel, editContact, contact }) => {

const { name, number, email, address } = contact

return (
<Modal id='edit_contact_modal' show={isVisible}>
        <Modal.Header>
        <Modal.Title>Edit {name} </Modal.Title>
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
                defaultValue={name}
                />
                <ControlLabel>
                    Phone:
                </ControlLabel>
                <FormControl
                id='contact_number'
                type='text'
                defaultValue={number}
                />
                <ControlLabel>
                    Email id:
                </ControlLabel>
                <FormControl
                id='contact_email'
                type='text'
                defaultValue={email}
                />
                <ControlLabel>
                    Address:
                </ControlLabel>
                <FormControl
                id='contact_address'
                type='text'
                defaultValue={address}
                />
                </FormGroup>
            </form>
        </Modal.Body>

        <Modal.Footer>
        <Button onClick={onCancel}>Cancel</Button>
        <Button bsStyle="primary" onClick={editContact}>Update</Button>
        </Modal.Footer>
  </Modal>
);

}

export default EditContactModal2;