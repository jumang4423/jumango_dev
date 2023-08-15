const TitleBar = () => {
  return (
    <a
      href="/"
      style={{
        textDecoration: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "3rem",
          fontSize: "1.3rem",
          fontWeight: "normal",
          display: "flex",
          alignItems: "center",
          padding: "0 0",
          margin: "0 0",
          color: "#000",
        }}
      >
        jumango[dot]dev
      </div>
    </a>
  );
};

export default TitleBar;
