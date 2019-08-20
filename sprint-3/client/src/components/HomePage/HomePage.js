import React from 'react';
import Header from '../Header/Header.js';
import VideoSection from '../VideoSection/VideoSection';
import CommentSection from '../CommentSection/CommentSection';
import SideVideos from '../SideVideos/SideVideos';
import SideVideoData from '../Data/SideVideoData.js';
import MainVideoData from '../Data/MainVideoData.js';

class HomePage extends React.Component {
  state = {
    SideVideoData: SideVideoData,
    MainVideoData: MainVideoData
  };
  render() {
    return (
      <>
        <p>hello world</p>
        <div>
          <Header />
        </div>
        <div>
          <VideoSection MainVideoData = {this.state.MainVideoData} />
        </div> 
        <div>
          <CommentSection MainVideoData = {this.state.MainVideoData}/>
        </div>
        <div>
          <SideVideos />
        </div>  
      </> 
    );
  }
}
export default HomePage;