import React from "react";
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    //console.log("Step2 Video List populated " + props.vList);
    const videoItems = props.vList.map((video) => {
        return <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        vListItem = {video}
        key = {video.etag} />


    })

    return(
        <ul className="col-md-4 list-group">
          {videoItems}
        </ul>
    );
};

export default VideoList;