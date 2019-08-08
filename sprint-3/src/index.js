import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import UploadVideoThumbnail from './components/UploadVideoThumbnail/UploadVideoThumbnail.js';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Route path = "/" component = {home} />
    <Route path = "/about" component = {UploadVideoThumbnail} />
  </BrowserRouter>
  ,<App />, document.getElementById('root')
);

serviceWorker.unregister();
