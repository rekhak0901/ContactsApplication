import { combineReducers } from 'redux';
import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from './actions';


function contacts(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
          ...state,
          {
            name: action.name,
            number: action.number,
            phoneType: action.phoneType,
            email: action.email,
            address:action.address
                    // reduce the new phone type into the store
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
          Object.assign({}, { 'name': action.name, 'number': action.number, 'phoneType': action.phoneType, 'email':action.email, 'address':action.address }),
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
