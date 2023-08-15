import React from "react";
import TitleBar from "./components/TitleBar";
import PageContents from "./components/PageContents";
import "./font.css";

function App() {
  return (
    <div
      style={{
        fontFamily: "Iosevka Web, Transparent",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          margin: "0 auto",
          padding: "0 0rem",
        }}
      >
        <TitleBar />
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#ddd",
          }}
        ></div>

        <PageContents />
      </div>
    </div>
  );
}

export default App;
