import React from "react"
import { Chrono } from "react-chrono";
import data from './ChronologyData';
import "./index.css";

export default function Home() {
    return (
      <div className="App">
        <div style={{ width: "100%", height: "auto" }}>
          <Chrono items={data} mode="VERTICAL" />
        </div>
      </div>
    );
  }