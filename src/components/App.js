import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component{
   state = {videos: [], selectedVideo:null};
    onTermSearch= async term=>{
//console.log(term);
   const response = await youtube.get('/search',{
       params:{
           q:term
       }
   });
   this.setState({
       videos: response.data.items,
       selectedVideo:response.data.items[0]
    });    
};
   onVideoSelected = (video) => {
     this.setState({selectedVideo: video});
   }
    render(){
        return (
            <div className="ui container">
            
            <SearchBar  onFormSubmit={this.onTermSearch}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                <VideoDetails video={this.state.selectedVideo}/>
                </div>
                <div className="five wide column">
                <VideoList onVideoSelected={this.onVideoSelected} videos={this.state.videos} />
                </div>
            </div>
            </div>



            </div>
        
            );
    }
}
export default App;