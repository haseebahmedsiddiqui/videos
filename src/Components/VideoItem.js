import './VideoItem.css';
import React from 'react'

const VideoItem = ({videos , onVideoSelect})=>{
    return(
        <div onClick={()=>onVideoSelect(videos)} className="video-item item">
       
            <img className="ui image" src={videos.snippet.thumbnails.default.url} alt={videos.snippet.title} />
            <div className="content">
                <div className="header">{videos.snippet.title}</div>
            </div>
            
        </div>
        );
}


export default VideoItem;