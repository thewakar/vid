// src/components/VideoPlayer.js
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
    const [videoId, setVideoId] = useState('dQw4w9WgXcQ'); // Example Video ID

    const changeVideo = (newVideoId) => {
        setVideoId(newVideoId);
    };

    return (
        <div className="text-center">
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoId}`}
                controls
                width="640px"
                height="360px"
            />
            <div className="mt-4">
                <button className="btn btn-primary mx-2" onClick={() => changeVideo('dQw4w9WgXcQ')}>Video 1</button>
                <button className="btn btn-primary mx-2" onClick={() => changeVideo('3JZ_D3ELwOQ')}>Video 2</button>
                <button className="btn btn-primary mx-2" onClick={() => changeVideo('hY7m5jjJ9mI')}>Video 3</button>
            </div>
        </div>
    );
};

export default VideoPlayer;
