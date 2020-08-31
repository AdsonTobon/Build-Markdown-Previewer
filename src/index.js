import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Markdown from './components/Container';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Markdown />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
