import React from 'react';
import '../stylings/Header.scss';
import App from './App';
import BrainflixLogo from '../stylings/assets/Logo-brainflix.svg';

class Header extends React.Component {
  render() {
    return (
      <>
        <div class = "header">
          <div class = "header__brainflix-logo">
            <img src = {BrainflixLogo}></img>
          </div>
          <div class = "header__search-upload-user">
            <ul>
              <li class = ""><input class = "header__search-bar__bar"type="text" id="video-name" name="video-name" size="20" placeholder="Please type here..."></input></li>
              <li><button>upload</button></li>
              <li>User Icon</li>
            </ul>
          </div>
        </div>
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