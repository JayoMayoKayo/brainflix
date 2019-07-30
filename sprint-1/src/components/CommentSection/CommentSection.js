import React from 'react';
import './CommentSection.scss';
import App from '../App/App';
import UserIcon from '../../Assets/Images/Mohan-muruge.jpg';

class CommentSection extends React.Component {
  render() {
    return (
      <>
        <div className = "commentSection">
          <h2>3 Comments</h2>
          <CommentSectionInput />
          <CommentSectionList />
        </div>
      </>  
    );
  }
}
class CommentSectionInput extends React.Component {
  render() {
    return (
      <>
        <div className = "commentSection__inputCard">
          <div className ="commentSection__inputCard__icon">
            <img src = {UserIcon}></img>
          </div>
          <div className ="commentSection__inputCard__inputField">
            <form>
              <h4>JOIN THE CONVERSATION</h4>
              <input type = "text" placeholder = "Search..."></input>
              <button><h3>Comment</h3></button>
            </form>
          </div>
        </div>
      </>
    )
  }
}
class CommentSectionList extends React.Component {
  render() {
    return (
      <>
        <div className = "commentSectionList">
          <CommentSectionCard />
          <CommentSectionCard />
          <CommentSectionCard />
        </div>
      </>
    )
  }
}
class CommentSectionCard extends React.Component {
  render () {
    return (
      <>
        <div className = "commentSectionCard">
          <div className = "commentSectionCard__user-Icon">
            <img src = {UserIcon}></img>
          </div>
          <div className ="commentSectionCard__userComment">
            <div className ="commentSectionCard__userComment__name-date">
              <ul>
                <li><h4>Gary Wong</h4></li>  
                <li><h4>12/18/2018</h4></li>  
              </ul>
            </div>
            <div className ="commentSectionCard__userComment__text">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default CommentSection;