import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage.js';
import UploadPage from '../UploadPage/UploadPage.js';

class AppRouter extends React.Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact Component={HomePage} />
                <Route path="/UploadPage" Component={UploadPage} />
            </Switch>
        </Router>
    );
  }
}
export default AppRouter;
