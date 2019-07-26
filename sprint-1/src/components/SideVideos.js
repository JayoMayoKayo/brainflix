import React from 'react';
import '../stylings/SideVideos.scss';
import App from './App';

class SideVideos extends React.Component {
  render() {
    return (
      <>
        <div>Side Videos</div>
        <SideVideosCard />
      </>  
    );
  }
}
class SideVideosCard extends React.Component {
  render() {
    return (
      <>
        <div>Side Video Card</div>
      </>
    )
  }
}
export default SideVideos;