import React, {Component} from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { isEmpty } from 'lodash';

export default class EditContactModal extends Component { 

    constructor(props){
        super(props);
        this.state = {
            email: '',
            name: '',
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            name: nextProps.contact.name,
            email: nextProps.contact.email
        })
    }

    verifyEmailId = () => {
        const { email } = this.state;
        // Regex from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
        return !isEmpty(email) && !(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email))
    }

    verifyName = () => {
        const { name } = this.state;
        return isEmpty(name) 
    }
    
    

    handleOnEmailChange = (event) => {
        this.setState({ email: event.target.value})
    }

    handleOnNameChange = (event) => {
        this.setState({ name: event.target.value})
    }

    render = () => {
        const { isVisible, onCancel, editContact, contact } = this.props;
        const {
             name,
             phone1, 
             phoneType1,
             phone2, 
             phoneType2, 
             phone3, 
             phoneType3, 
             email, 
             address 
        } = contact;

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
                                onChange={this.handleOnNameChange}
                            />
                            {this.verifyName() && <HelpBlock> Name cannot be blank </HelpBlock>}
                        </FormGroup>

                        <FormGroup>
                        <ControlLabel>
                            Phone:
                        </ControlLabel>
                        <FormControl
                            id='contact_number_1'
                            type='number'
                            defaultValue={phone1}
                        />
                       <FormControl 
                            componentClass="select" 
                            defaultValue={phoneType1}
                            id='contact_type_1'
                        >
                        <option value="home"> home </option>
                        <option value="work"> work </option>
                        <option value="mobile"> mobile </option>
                        </FormControl>
                        <FormControl
                            id='contact_number_2'
                            type='number'
                            defaultValue={phone2}
                        />
                       <FormControl 
                            componentClass="select" 
                            defaultValue={phoneType2}
                            id='contact_type_2'
                        >
                            <option value="work"> work </option>
                            <option value="home"> home </option>
                            <option value="mobile"> mobile </option>
                        </FormControl>
                        <FormControl
                            id='contact_number_3'
                            type='number'
                            defaultValue={phone3}
                        />
                        <FormControl 
                            componentClass="select" 
                            defaultValue={phoneType3}
                            id='contact_type_3'>
                            <option value="mobile"> mobile </option>
                            <option value="work"> work </option>
                            <option value="home"> home </option>
                        </FormControl>
                    </FormGroup>

                        <FormGroup>
                            <ControlLabel>
                                Email id:
                            </ControlLabel>
                            <FormControl
                                id='contact_email'
                                type='text'
                                defaultValue={email}
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
                                defaultValue={address}
                            />
                        </FormGroup>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={onCancel}>Cancel</Button>
                    <Button 
                        bsStyle="primary" 
                        onClick={editContact} 
                        disabled={this.verifyEmailId() || this.verifyName()}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        );

    }

}

