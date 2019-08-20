import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage.js';
import UploadPage from './UploadPage/UploadPage.js';
import Header from './Header/Header.js';
import './App.scss';

class App extends React.Component {
  render() {  
    return (
      <div>
        
        <Router>
            <Route exact path="/" Component={HomePage} />
            <Route exact path="/UploadPage" Component={UploadPage} />
        </Router> 
      </div>
    );
  }
}
export default App;
