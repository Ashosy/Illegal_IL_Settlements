import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import TextTransition, { presets } from "react-text-transition";
import "./Header.css";

const Header = () => {
  const data = ["ISRAEL", "PALESTINE", "THE MIDDLE EAST", "EUROPE"];
  let i = 0;
  function Loop() {
    while (i < data.length) {
      Maps(data[i]);
      i++;
    }
  }
  var result = "";
  function Maps(value) {
    result = value.split("");
    return result;
  }

  const TEXTS = ["ISRAEL", "PALESTINE", "THE MIDDLE EAST", "EUROPE"];

  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className="header">
        {/* <h3></h3> */}
        <h1>
          LAND OF{" "}
          <span>
            <TextTransition
              text={TEXTS[index % TEXTS.length]}
              springConfig={presets.molasses}
              inline={true}
              style={{ color: "wheat" }}
            />
          </span>
        </h1>
      </div>
    </>
  );
};

const animation = keyframes`
  0% {opacity:0; transform: translateY(50px) skewY(10deg) skewX(10deg) rotateZ(-30deg);filter:blur(10px) }
  25% {opacity:1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter:blur(0px);}
  75% {opacity:1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter:blur(0px);}
  100%{opacity:1;}
`;

const Wrapper = styled.span`
  display: inline-block;
  span {
    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 4s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
  }

  span:nth-child(1) {
    animation-delay: 0.1s;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.3s;
  }
  span:nth-child(4) {
    animation-delay: 0.4s;
  }
  span:nth-child(5) {
    animation-delay: 0.5s;
  }
  span:nth-child(6) {
    animation-delay: 0.6s;
  }
  span:nth-child(7) {
    animation-delay: 0.7s;
  }
  span:nth-child(8) {
    animation-delay: 0.8s;
  }
  span:nth-child(9) {
    animation-delay: 0.9s;
  }
  span:nth-child(10) {
    animation-delay: 1s;
  }
  span:nth-child(11) {
    animation-delay: 1.1s;
  }
  span:nth-child(12) {
    animation-delay: 1.2s;
  }
  span:nth-child(13) {
    animation-delay: 1.3s;
  }
  span:nth-child(14) {
    animation-delay: 1.4s;
  }
  span:nth-child(15) {
    animation-delay: 1.5s;
  }
`;

export default Header;
