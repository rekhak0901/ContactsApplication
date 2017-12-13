/*
 * actions
 */

import axios from 'axios';

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
/*
 * actions creators
 */
export function addItem(name, phone1, phoneType1, phone2, phoneType2, phone3, phoneType3, email, address,) {
  return {
    type: ADD_ITEM,
    name,
    phone1,
    phoneType1,
    phone2,
    phoneType2,
    phone3,
    phoneType3,
    email,
    address,
  };
}

export function deleteItem(index) {
  return {
    type: DELETE_ITEM,
    index
  };
}

export function editItem(index, name, phone1, phoneType1, phone2, phoneType2, phone3, phoneType3, email, address) {
  return {
    type: EDIT_ITEM,
    index,
    name,
    phone1,
    phoneType1,
    phone2,
    phoneType2,
    phone3,
    phoneType3,
    email,
    address
  };
}
//define action within an action creator
export function FetchRequest() {
  return {
    type: FETCH_REQUEST,
    status: "loading"
  };
}

export function FetchSuccess(contact) {
    return {
      type: FETCH_SUCCESS,
      status: "success",
      contact
    };
  }

export function FetchFailure(error) {
  const FETCH_FAILURE = 'FETCH_FAILURE'
  return {
    type: FETCH_FAILURE,
    status: "error",
    error
  };
}

export function RequestApi() {
  return (dispatch) => {
    //API request
    axios.get('http://localhost:3001/api/contacts')
      .then(response => {
        console.log(response);
        const contacts = response.data.map(function(contactitem) {
          return contactitem;
        });
        //dispatch FetchSuccess, order 2
        //dispatch(FetchSuccess(contacts))
      })
      .catch(e => {
        //dispatch FetchFailure, order 3
        dispatch(FetchFailure(e))
      });
//dispatch FetchRequest, order 1
    //dispatch(FETCH_REQUEST())
  }
}