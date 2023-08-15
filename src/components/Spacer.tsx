import React from "react";

interface SpacerProps {
  sizePx: number;
}

const Spacer = ({ sizePx }: SpacerProps) => {
  return (
    <div
      style={{
        width: `100%`,
        height: `${sizePx}px`,
        margin: "0 0",
        padding: "0 0",
      }}
    ></div>
  );
};

export default Spacer;
