import React from "react";

const H1 = (props: { children: React.ReactNode }) => {
  return (
    <div style={{ fontSize: "1.5rem", margin: "1.5rem 0" }}>
      {props.children}
    </div>
  );
};

export default H1;
