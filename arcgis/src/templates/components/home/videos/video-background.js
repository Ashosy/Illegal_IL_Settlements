import React from "react";
import video from "./Palestine.mp4";
import "./video.css";
const Video = () => {
  return (
    <div className="video-container">
      <video src={video} loop muted autoPlay className="video" />
    </div>
  );
};

export default Video;
