import React from "react";
import { useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import Button from "../ButtonFold/Button";
import ModalVideo from "react-modal-video";
import "../ButtonFold/Button.css";
import "./modal.css";
import "../navbar/navbar.css";
import "react-modal-video/scss/modal-video.scss";
import Video from "../videos/Palestine.mp4";

function Modal() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div>
        <ModalVideo
          // url={Video}
          videoId="CUBQ6WNBRS4"
          isOpen={isOpen}
          allowFullScreen="true"
          fs="0"
          controls="0"
          color="green"
          theme="dark"
          onClose={() => setOpen(false)}
        />
      </div>
      <Button onClick={() => setOpen(true)}>
        <BsPlayFill className="play-btn" />
      </Button>
    </>
  );
}

export default Modal;
