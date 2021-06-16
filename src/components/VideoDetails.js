import React from 'react';


const VideoDetails = ({video}) =>{
 if(!video){
     return <div>Loading..</div>
 }

   const    videosrc = `https://www.youtube.com/embed/${video.id.videoId}`;
return (
<div>
    <div className="ui embed">
      <iframe title="video player" src={videosrc}/>
    </div>
    <div className="ui segment">
    <h2>{video.snippet.title}</h2>
    <p>{video.snippet.description}</p>
    </div>
    
    
    </div>
);
}
 export default VideoDetails;