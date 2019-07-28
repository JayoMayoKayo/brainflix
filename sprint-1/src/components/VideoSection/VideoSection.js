import React from 'react';
import './VideoSection.scss';
import App from '../App/App';
import MainVideo from '../../Assets/Video/BrainStation\ \Sample\ \Video.mp4';
import Poster from '../../Assets/Images/video-list-0.jpg';
import IconViews from '../../Assets/Icons/PNG/Icon-views.png';
import IconLikes from '../../Assets/Icons/PNG/Icon-likes.png';

class VideoSection extends React.Component {
  render() {
    return (
      <>
        <div class = "video-section">
          <div class = "video-section__video">
            <VideoSectionVideo />
          </div>
          <div class = "video-section__description">
            <VideoSectionDescription />
          </div>
        </div>
      </>  
    );
  }
}
class VideoSectionVideo extends React.Component {
  render () {
    return (
      <>
        <video controls 
          width = "100%"
          //autoPlay
          poster = {Poster}
          src = {MainVideo}  
          type = "video/mp4">
        </video>
      </>
    )
  }
}
class VideoSectionDescription extends React.Component {
  render() {
    return (
      <>
        <div class= "video-section__information__title">
          <h2>BMX Rampage: 2018 Highlights</h2>
        </div>
        <div class= "video-section__information__stats">
          <div class= "video-section__information__stats__name-date">
            <ul>
              <li class = "video-section__uploader">
                By Red Cow
              </li>
              <li class = "video-section__date">
                12/18/2018
              </li>
            </ul>
          </div>
          <div class= "video-section__information__stats__views-likes">
            <ul>
              <li class = "video-section__views">
                <img src = {IconViews}></img>
                1,001,023
              </li>
              <li class = "video-section__likes">
                <img src = {IconLikes}></img>
                110,985
              </li>
            </ul>
          </div>
        </div>
        <div class= "video-section__information__description">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a 
            type specimen book. It has survived not only five centuries, but also the 
            leap into electronic typesetting, remaining essentially unchanged. It was 
            popularised in the 1960s with the release of Letraset sheets containing Lorem 
            Ipsum passages, and more recently with desktop publishing software like Aldus 
            PageMaker including versions of Lorem Ipsum.
          </p>
        
        </div>
      </>  
    );
  }
}
export default VideoSection;