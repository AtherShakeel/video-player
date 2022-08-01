import React from 'react';


const VideoListItem = (props) => {
    //console.log("Step3 Video List Item populated " + props.vListItem);
    const vSelect = props.vListItem;
    const vSelectedVideo = props.onVideoSelect;
    const imageUrl = vSelect.snippet.thumbnails.default.url;
    //console.log(vSelect.snippet.title)
    return (
        <li onClick={() => vSelectedVideo(vSelect)} className = "list-group-item" >
            <div className = "video-list media" >
                <div className = "media-left" >
                    <img className = "media-object"  src = {imageUrl} />
                </div>
                <div className = "media-body" >
                     <div className = "media-heading" > {vSelect.snippet.title} </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;

