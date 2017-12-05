import { combineReducers } from 'redux';
import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from './actions';


function contacts(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
          ...state,
          {
            name: action.name,
            phone1: action.phone1,
            phoneType1: action.phoneType1, 
            phone2: action.phone2, 
            phoneType2: action.phoneType2, 
            phone3: action.phone3, 
            phoneType3: action.phoneType3,
            email: action.email,
            address:action.address,
          }
        ];

    case DELETE_ITEM:
      return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1)
        ];

    case EDIT_ITEM:
      return [
          ...state.slice(0, action.index),
          Object.assign({}, { 
            name: action.name,
            phone1: action.phone1,
            phoneType1: action.phoneType1, 
            phone2: action.phone2, 
            phoneType2: action.phoneType2, 
            phone3: action.phone3, 
            phoneType3: action.phoneType3,
            email: action.email,
            address: action.address,
           }),
          ...state.slice(action.index + 1)
        ];

    default:
      return state;
  }
}

const contactApp = combineReducers({
  contacts
});

export default contactApp;
