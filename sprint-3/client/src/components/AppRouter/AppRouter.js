import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App/App.js';
import UploadVideoPage from '../UploadVideoPage/UploadVideoPage.js';

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={App} />
        <Route path="/UploadVideo" component={UploadVideoPage} />
      </Router>
    );
  }
} 
export default AppRouter;