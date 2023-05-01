import React from "react";

const MyComponent = () => {
  return (
    <div style={{ position: "relative", height: "400px", width: "400px" }}>
      <div
        style={{
          position: "absolute",
          top: "50px",
          left: "50px",
          height: "100px",
          width: "100px",
          backgroundColor: "blue",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "100px",
          left: "100px",
          height: "100px",
          width: "100px",
          backgroundColor: "red",
          zIndex: 2,
        }}
      />
    </div>
  );
};

export default MyComponent;