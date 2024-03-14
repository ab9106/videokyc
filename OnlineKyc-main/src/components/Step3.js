import React, { useRef } from 'react';
import '../index.css';

function Step3({ onNextStep, onPreviousStep, onVideoDataChange }) {
  const videoRef = useRef(null);

  const handleCaptureVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
    }).catch((error) => {
      console.error('Error accessing webcam:', error);
    });
  };

  const handleStopCapture = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach((track) => {
      track.stop();
    });

    videoRef.current.srcObject = null;
  };

  const handleNext = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      onVideoDataChange(blob);
      onNextStep();
    }, 'video/mp4');
  };

  const handlePrevious = () => {
    handleStopCapture();
    onPreviousStep();
  };

  return (
    <div className="step3-container">
      <h1 className="step3-title">Step 3: Video Capture</h1>
      <div className="video-container">
        <video ref={videoRef} className="video" autoPlay muted />
      </div>
      <div className="buttons-container">
        <button className="button" onClick={handleCaptureVideo}>Start Video</button>
        <button className="button" onClick={handleStopCapture}>Stop Video</button>
        <button className="button" onClick={handlePrevious}>Previous</button>
        <button className="button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Step3;
