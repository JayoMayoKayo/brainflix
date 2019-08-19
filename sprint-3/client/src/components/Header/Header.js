import React from 'react';
import './Header.scss';
import '../App/App.scss';
import BrainflixLogo from '../../Assets/Icons/PNG/Logo-brainflix.png';
import UserIcon from '../../Assets/Images/Mohan-muruge.jpg';
import SearchIcon from '../../Assets/Icons/PNG/Icon-search.png';
import Upload from '../../Assets/Icons/PNG/Icon-upload.png';

class Header extends React.Component {
  render() {
    return (
      <>
        <div className = "header">
          <div className = "header__brainflix-logo">
            <img src = {BrainflixLogo} alt = "BrainFlix Logo"></img>
          </div>
          <div className = "header__search-upload-user">
            <div className = "header__search-upload-user__search-bar">
              <form>
                <input type = "text" placeholder = "Search..."></input>
              </form>
            </div>
            <div className = "header__search-upload-user__upload-button">
              <button>Upload</button>
            </div>
            <div className = "header__search-upload-user__user-icon">
              <img src = {UserIcon} alt = "User Icon"></img>
            </div>
          </div>
        </div>
      </>  
    );
  }
}
export default Header;