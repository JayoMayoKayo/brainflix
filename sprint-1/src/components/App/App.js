import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import VideoSection from '../VideoSection/VideoSection';
import CommentSection from '../CommentSection/CommentSection';
import SideVideos from '../SideVideos/SideVideos';

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <VideoSection />
      </div> 
      <div>
        <CommentSection />
      </div>
      <div>
        <SideVideos />
      </div>  
{/*   <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </>
  );
}

export default App;
