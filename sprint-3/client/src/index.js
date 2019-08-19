import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import AppRouter from './components/AppRouter/AppRouter.js';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


ReactDOM.render(<App /> <AppRouter />, document.getElementById('root')
);

serviceWorker.unregister();
