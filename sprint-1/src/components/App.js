import React from 'react';
import logo from '../stylings/logo.svg';
import '../stylings/App.css';
import Header from './Header';
import VideoSection from './VideoSection'
import CommentSection from './CommentSection';
import SideVideos from './SideVideos';

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
