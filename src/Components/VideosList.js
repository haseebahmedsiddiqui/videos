import React from 'react';
import VideoItem from './VideoItem';


const VideosList = props =>{
   
    const renderList = props.videosLists.map(video=>{
        return (
        
            <VideoItem videos={video} onVideoSelect = {props.onVideoSelect} />
        
        )

    });

    return <div  className="ui relaxed divided list">{renderList}</div>;
}


export default VideosList;
