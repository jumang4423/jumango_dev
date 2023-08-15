import React from "react";

const LispCode = (props: { children: React.ReactNode }) => {
  return (
    <code
      style={{
        padding: "0 0.2rem",
        borderRadius: "0.2rem",
        fontFamily: "Iosevka Web",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {props.children}
    </code>
  );
};

export default LispCode;
