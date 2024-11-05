// src/components/VideoPlayer.js
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
    const [videoId, setVideoId] = useState('u_nK7VAphY0sON1F'); // Example Video ID

    const changeVideo = (newVideoId) => {
        setVideoId(newVideoId);
    };

    return (
        <div className="text-center">
            <ReactPlayer
                url={`https://www.youtu.be/9vyoezhwCYY?si=${videoId}`}
                controls
                width="640px"
                height="360px"
            />
            <div className="mt-4">
                <button className="btn btn-primary mx-2" onClick={() => changeVideo('u_nK7VAphY0sON1F')}>Video 1</button>
                <button className="btn btn-primary mx-2" onClick={() => changeVideo('u_nK7VAphY0sON1F')}>Video 2</button>
                <button className="btn btn-primary mx-2" onClick={() => changeVideo('u_nK7VAphY0sON1F')}>Video 3</button>
            </div>
        </div>
    );
};

export default VideoPlayer;
