// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import VideoPlayer from './components/VideoPlayer';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Navbar />
            <VideoPlayer />
            <Footer />
        </div>
    );
};

export default App;
