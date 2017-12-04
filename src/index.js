import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './containers/Root';
import { configureStore } from './redux/configureStore';

import './styles/main.css';

const initialState = {
  contacts: [{
    name: 'rekha',
    number: '13111111191',
    phoneType: 'work',
    email:'rekha@abc.com',
    address: '25 Ave at Port Imperial'
  }, {
    name: 'Will',
    number: '13111191112',
    phoneType: 'mobile',
    email:'will@gv.com',
    address:'57 chedword circle'
  }]
};

const store = configureStore(initialState);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
