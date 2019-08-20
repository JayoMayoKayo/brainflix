import React from 'react';
import './App.scss';
import AppRouter from '../AppRouter/AppRouter.js';
import HomePage from '../HomePage/HomePage.js';

class App extends React.Component {
  render() {  
    return (
      <>
        <AppRouter />
        <HomePage />
           
      </>
    );
  }
}
export default App;
