import React from 'react';
import '../stylings/Header.scss';
import App from './App';

class Header extends React.Component {
  render() {
    return (
      <>
        <div>Header Parent<HeaderChild /></div>
      </>  
    );
  }
}
class HeaderChild extends React.Component {
  render() {
    return (
      <>
        <div>Header Child</div>
      </>
    )
  }
}
export default Header;