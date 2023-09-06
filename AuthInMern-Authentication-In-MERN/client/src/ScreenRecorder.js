import React, { useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import VideoRecorder from 'react-video-recorder'; // For UI components (optional)


function ScreenRecorder() {
    const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({
      video: true, // Enable video recording
      screen: true, // Capture the screen
    });
  
    return (
      <div>
        {/* Optional UI components */}
        <h1 style={{'color':'green'}}>Screen Recorder</h1>
        <VideoRecorder style={{'color':'red', 'height':'500px', 'width':'450px'}}
          onRecordingComplete={(videoBlob) => {
            // Handle the recorded video
            console.log('Video Blob:', videoBlob);
          }}
        />
  
        {/* Display status and buttons */}
        <p>Status: {status}</p>
        {status !== 'recording' ? (
          <button onClick={startRecording}>Start Recording</button>
        ) : (
          <button onClick={stopRecording}>Stop Recording</button>
        )}
  
        {/* Display the recorded video */}
        <h1 style={{'color':'blue'}}>recorded screen</h1>
        {mediaBlobUrl && <video style={{'height': '400px', 'width':'800px', 'border':'5px solid black'}} src={mediaBlobUrl} controls autoPlay />}
      </div>
    );
  }
  
  export default ScreenRecorder;
  