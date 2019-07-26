import React from 'react';
import '../stylings/VideoSection.scss';
import App from './App';

class VideoSection extends React.Component {
  render() {
    return (
      <>
        <div>Video Section Parent</div>
        <VideoSectionVideo />
        <VideoSectionInformation />
      </>  
    );
  }
}
class VideoSectionVideo extends React.Component {
  render() {
    return (
      <>
        <div>Video Section Video</div>
      </>
    )
  }
}
class VideoSectionInformation extends React.Component {
    render() {
      return (
        <>
          <div>Video Section Information</div>
        </>
      )
    }
  }
export default VideoSection;