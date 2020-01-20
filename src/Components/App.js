import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideosList from './VideosList';
import VideoDetail from './VideoDetail';


export default class App extends React.Component{
    state = {videos : [], selectedVideo : null};
    onTermSubmit = async term => {
        const response = await youtube.get('/search',{
            params : {
                q : term
            }
        });
        
        this.setState({videos : response.data.items})
       
    };

     
    onVideoSelect = (video)=>{
        this.setState({
            selectedVideo : video,
        });
    }

    render(){
        return(
            <div className="ui container">
            <SearchBar onTermSubmit={this.onTermSubmit}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideosList onVideoSelect = {this.onVideoSelect} videosLists={this.state.videos} />
            </div>
        )
    }
}

