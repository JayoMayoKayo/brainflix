import React from 'react';
import './CommentSection.scss';
import App from '../App/App';

class CommentSection extends React.Component {
  render() {
    return (
      <>
        <div>Comment Section Parent</div>
        <CommentSectionInput />
        <CommentSectionList />
      </>  
    );
  }
}
class CommentSectionInput extends React.Component {
  render() {
    return (
      <>
        <div>Comment Section Input</div>
      </>
    )
  }
}
class CommentSectionList extends React.Component {
    render() {
      return (
        <>
          <div>Comment Section List</div>
        </>
      )
    }
  }
export default CommentSection;