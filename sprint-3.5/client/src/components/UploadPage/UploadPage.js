import React from 'react';
import Header from '../Header/Header.js';
import UploadVideoPicture from '../../Assets/Images/Upload-video-preview.jpg';
import UploadPageForm from './UploadPageForm.js';
import Axios from 'axios';


class UploadPage extends React.Component {
  uploadVideo = (event) => {
    event.preventDefault();
    console.log(event.target.videoDescripton.value);
    
    Axios.post('http://localhost:8001/mainVideos', {
      title: event.target.videoTitle,
      description: event.target.videoDescription,
      image: {UploadVideoPicture}
    });
  }
  render() {
    return (
      <>
        <Header />
        <UploadPageForm uploadVideo={this.uploadVideo}/>
      </>
    );
  }
}

export default UploadPage;
