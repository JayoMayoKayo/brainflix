import React from 'react';
import './VideoSection.scss';
//import MainVideo from '../../Assets/Video/BrainStation\ \Sample\ \Video.mp4';
import Poster from '../../Assets/Images/video-list-0.jpg';
import IconViews from '../../Assets/Icons/PNG/Icon-views.png';
import IconLikes from '../../Assets/Icons/PNG/Icon-likes.png';

class VideoSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      MainVideoData: props.MainVideoData
    }
  }
  render() {
    return (
      <>
        <div className = "video-section">
          <div className = "video-section__video">
            <VideoSectionVideo video = {this.state.MainVideoData.video}/>
          </div>
          <div className = "video-section__description">
            <VideoSectionDescription MainVideoData = {this.state.MainVideoData} />
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
          src = {this.props.video}  
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
        <div className= "video-section__information__title">
          <h2>{this.props.MainVideoData.title}</h2>
        </div>
        <div className= "video-section__information__stats">
          <div className= "video-section__information__stats__name-date">
            <ul>
              <li className = "video-section__uploader">
                {this.props.MainVideoData.channel}
              </li>
              <li className = "video-section__date">
              {this.props.MainVideoData.timestamp}
              </li>
            </ul>
          </div>
          <div className= "video-section__information__stats__views-likes">
            <ul>
              <li className = "video-section__views">
                <img src = {IconViews}></img>
                {this.props.MainVideoData.views}
              </li>
              <li className = "video-section__likes">
                <img src = {IconLikes}></img>
                {this.props.MainVideoData.likes}
              </li>
            </ul>
          </div>
        </div>
        <div className= "video-section__information__description">
          <p>
          {this.props.MainVideoData.description}
          </p>
        
        </div>
      </>  
    );
  }
}
export default VideoSection;