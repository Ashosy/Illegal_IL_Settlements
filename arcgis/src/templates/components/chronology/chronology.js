import React from "react";
import { Chrono } from "react-chrono";
import data from "./chronologydata";
import "./chrono.css";

export default function Chronology() {
  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          height: "auto",
          color: "grey",
        }}
      >
        <Chrono className="items" items={data} mode="VERTICAL" />
      </div>
    </div>
  );
}
