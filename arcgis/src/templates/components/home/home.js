import React from "react";
import Navbar from "./navbar/navbar";
import Video from "./videos/video-background";
import "./home.css";
import Header from "./Heading/Header";
import Modal from "./Modal/modal";

const Home = () => {
  return (
    <>
      <div className="page1-container">
        <Navbar />
        <Video />
        <Header />
        <Modal />
      </div>
    </>
  );
};

export default Home;
