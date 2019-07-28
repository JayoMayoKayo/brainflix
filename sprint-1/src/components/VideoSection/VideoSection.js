import React from 'react';
import './VideoSection.scss';
import App from '../App/App';
import MainVideo from '../../Assets/Video/BrainStation\ \Sample\ \Video.mp4';
import Poster from '../../Assets/Images/video-list-0.jpg';

class VideoSection extends React.Component {
  render() {
    return (
      <>
        <div class = "video-section">
          <video controls 
            width = "100%"
            //autoPlay
            poster = {Poster}
            src = {MainVideo}  
            type = "video/mp4">
          </video>
        </div>
      </>  
    );
  }
}
export default VideoSection;