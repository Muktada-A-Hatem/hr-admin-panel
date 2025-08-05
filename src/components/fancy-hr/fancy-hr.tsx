import React from "react";

interface FancyHRprops {
  width?: string;
  ballsize?: string;
}

const FancyHR: React.FC<FancyHRprops> = ({ width, ballsize }) => {
  return (
    <div
      style={{
        height: "1rem",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "var(--secondary-color)",
          width: "10px",
          height: "10px",
          borderRadius: "10px",
        }}
      />

      <div
        style={{
          border: "none",
          background: "var(--secondary-color)",
          height: "2px",
          width: "100%",
        }}
      />

      <div
        style={{
          background: "var(--secondary-color)",
          width: "10px",
          height: "10px",
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

export default FancyHR;
