import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import VideoSection from '../VideoSection/VideoSection';
import CommentSection from '../CommentSection/CommentSection';
import SideVideos from '../SideVideos/SideVideos';
import SideVideoData from '../Data/SideVideoData.js';
import MainVideoData from '../Data/MainVideoData.js';

class App extends React.Component {
  state = {
    SideVideoData: SideVideoData,
    MainVideoData: MainVideoData
  };
  render() {
    //console.log(this.state.MainVideoData.id);
    return (
      <>
        <div>
          <Header />
        </div>
        <div>
          <VideoSection MainVideoData = {this.state.MainVideoData} />
        </div> 
        <div>
          <CommentSection />
        </div>
        <div>
          <SideVideos />
        </div>  
      </>
    );
  }
}
export default App;
