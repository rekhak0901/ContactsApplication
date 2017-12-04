import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { isEmpty } from 'lodash';

export default class AddContactModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            name: '',
        }
    }

    verifyEmailId = () => {
        const { email } = this.state;
        // Regex from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
        return !isEmpty(email) && !(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email))
    }
    
    verifyName = () => {
        const {name} = this.state;
        return isEmpty(name);
        
    }
    

    handleOnEmailChange = (event) => {
        this.setState({ email: event.target.value})
    }

    handleOnNameChange = (event) => {
        this.setState({ name: event.target.value})
    }

        
    render = () => {
        const { isVisible, addContact, onCancel } = this.props;
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
                                type='required'
                                placeholder="Enter name"
                                onChange={this.handleOnNameChange}
                            />
                            {this.verifyName() && <HelpBlock> Name cannot be blank </HelpBlock>}
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>
                                        Phone:
                            </ControlLabel>
                            <FormControl
                                id='contact_number'
                                type='number'
                                placeholder="Enter phone number"
                            />
                           <FormControl 
                                componentClass="select" 
                                placeholder='Phone Type'
                                id='contact_type'>
                                        
                                <option value="home"> home </option>
                                <option value="work"> work </option>
                                <option value="mobile"> mobile </option>
                            </FormControl>
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>
                                Email id:
                            </ControlLabel>
                            <FormControl
                                id='contact_email'
                                type='text'
                                placeholder="Enter email id"
                                onChange={this.handleOnEmailChange}
                            />
                            {this.verifyEmailId() && <HelpBlock> your email is invalid </HelpBlock>}
                        </FormGroup>
                        
                        <FormGroup>
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
                    <Button 
                        bsStyle="primary" 
                        onClick={addContact} 
                        disabled = {this.verifyEmailId() || this.verifyName()}
                    > 
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
      );
    }
}
