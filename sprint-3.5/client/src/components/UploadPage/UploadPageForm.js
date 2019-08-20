import React from 'react';
import UploadVideoPicture from '../../Assets/Images/Upload-video-preview.jpg';

class UploadPageForm extends React.Component {
  render() {
    return (
      <>
        <form onSubmit={() => this.props.uploadVideo}>
          <div className="uploadForm__body">
            <div className="uploadForm__body__header">
              <h1>Upload Video</h1>
            </div>
            <div className="uploadForm__body__videoThumbNail">
              <h2>VIDEO THUMBNAIL</h2>
              <img src={UploadVideoPicture} />
            </div>
            <div className="uploadForm__body__title">
              <h2>TITLE YOUR VIDEO</h2>
              <input className="uploadForm__body__title__input"
                type="text"
                name="videoTitle"
                placeholder="Add a title to your video"></input>  
            </div>
            <div className="uploadForm__body__description">
              <h2>ADD A VIDEO DESCRIPTION</h2>
              <input className="uploadForm__body__description__input"
                type="text"
                name="videoDescription"
                placeholder="Add a description of your video"></input>
            </div>
            <div className="uploadForm__body__publish">
              <button className="uploadForm__body__publish__button" type="submit">PUBLISH</button>
            </div>
            <div className="uploadForm__body__delete">
            <button className="uploadForm__body__delete__button" type="button">DELETE</button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default UploadPageForm;
