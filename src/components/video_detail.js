import React from 'react';

const VideoDetail = (props) => {
    const vDetail = props.videoAvailable;

    if (!vDetail) {
        return <div>Loading...</div>;
    }

    //console.log("Step 4 Video Detail populated " + vDetail);
    const videoId = vDetail.id.videoId;
    //const url     = "https://youtube.com/embed/" + videoId;
    const url     = `https://youtube.com/embed/${videoId}`;  // same as above. just using ES6 format of JS
    return (
        <div className= 'video-detail col-md-8'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className='embed-responsive-item' src = {url}></iframe>
            </div>
            <div className='details'>
                <div>{vDetail.snippet.title}</div>
                <div>{vDetail.snippet.description}</div>

            </div>
        </div>

    );


};

export default VideoDetail;
