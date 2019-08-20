import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage.js';
import UploadPage from './components/UploadPage/UploadPage.js';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Route path="/" exact component={HomePage} />
          <Route path="/UploadPage" component={UploadPage} />
        </Router>
      </>
    );
  }
}

export default App;
