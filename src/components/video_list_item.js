import React from 'react';
// call back            //1111, es6 new syntex
const VideoListItem = ({video, onVideoSelect}) => {
  // 2222,  const video = props.video;
  // 2222, const onVideoSelect = props.onVideoSelect;
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    // whenever user click this li will treat it as video element selection
    // click event will cause the function onVideoSelect pass particular video to video list item video
    <li onClick={()=> onVideoSelect(video) } className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <image className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
