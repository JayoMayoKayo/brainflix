import React from 'react';
import './CommentSection.scss';
import UserIcon from '../../Assets/Images/Mohan-muruge.jpg';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      MainVideoData: props.MainVideoData
    }
  }
  render() {
    return (
      <>
        <div className = "commentSection">
          <h2>{this.state.MainVideoData.comments.length} Comments</h2>
          <CommentSectionInput />
          <CommentSectionList MainVideoData = {this.state.MainVideoData}/>
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
    //console.log('henlo' + this.props.MainVideoData.id);
    return (
      <>
        <div className = "commentSectionList">
          {
            this.props.MainVideoData.comments.map(comments =>
            <CommentSectionCard comments = {comments} />)
          }
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
                <li><h4>{this.props.comments.userName}</h4></li>  
                <li><h4>{this.props.comments.usertimestamp}</h4></li>  
              </ul>
            </div>
            <div className ="commentSectionCard__userComment__text">
              <p>{this.props.comments.usertext}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default CommentSection;