import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Routing} from './routing';
import {store} from './redux/store';

//Import Js
import './js';

//Import Css
import './css';

ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById('root') as HTMLElement
);