import React from 'react';
import './SideVideos.scss';
import PreviewVideos from '../../Assets/Images/video-list-5.jpg';

class SideVideos extends React.Component {
  render() {
    return (
      <>
        <div className = "sideVideos">
          <h3>NEXT VIDEO</h3>
          <SideVideosCard />
          <SideVideosCard />
          <SideVideosCard />
          <SideVideosCard />
          <SideVideosCard />
          <SideVideosCard />
          <SideVideosCard />
          <SideVideosCard />
        </div>
      </>  
    );
  }
}
class SideVideosCard extends React.Component {
  render() {
    return (
      <>
        <div className ="sideVideoCard">
          <div className = "sideVideoCard__preview">
            <img src = {PreviewVideos}></img>
          </div>
          <div className = "sideVideoCard__text">
            <h5>Become A Travel Pro In 8 Easy Lesson...</h5>
            <p>Scotty Cranmer</p>
          </div>
        </div>
      </>
    )
  }
}
export default SideVideos;