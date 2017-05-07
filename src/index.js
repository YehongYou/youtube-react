import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDFSKp4Fk_ubJJBU-AbZeVIKNaXcBZsEn4';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    YTSearch({key: API_KEY, term: 'surfbords'}, (videos) => {
      console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  };

  render(){
    return (
      <div>
         <SearchBar />
         <VideoDetail video={this.state.selectedVideo} />
         <VideoList     //denfine a function => just update app state (take video update selectedVideo)
           onVideoSelect={selectedVideo => this.setState({selectedVideo}) }   // this is a function
          //  onVideoSelect={ function(selectedVideo) {
          //     this.setState({selectedVideo: selectedVideo})
          //   }
          //  !!!! onVideoSelect as the videolist props property pass data to videolistitem
          videos={this.state.videos}/>
      </div>
    );
  };
};

ReactDOM.render(<App />, document.querySelector(".container"));
