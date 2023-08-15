import React from "react";
import LispCode from "./LispCode";

interface LinkProps {
  linkName: string;
  link: string;
  description: string;
  disabled?: boolean;
}

const str2lisp = (strv: string) => {
  const str = strv.split(" ").join("-").toLowerCase();

  return `'${str}`;
};

const Link = ({ linkName, link, description, disabled = false }: LinkProps) => {
  return (
    <a
      href={disabled ? undefined : link}
      style={{
        textDecoration: "none",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: "0 0",
        padding: "0 0",
        color: disabled ? "#000" : "green",
        textDecorationLine: disabled ? "line-through" : "none",
      }}
      target="_blank"
    >
      <LispCode>
        ({linkName} {str2lisp(description)})
      </LispCode>
    </a>
  );
};

export default Link;
