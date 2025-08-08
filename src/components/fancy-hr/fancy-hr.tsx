"use client";

import React from "react";

interface FancyHRprops {
  vertical?: boolean;
  length?: string;
  ballsize?: string;
  thickness?: string;
}

const FancyHR: React.FC<FancyHRprops> = ({
  vertical = false,
  length = "100%",
  ballsize = "10px",
  thickness = "2px",
}) => {
  if (!vertical) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: length,
        }}
      >
        <div
          style={{
            background: "var(--secondary-color)",
            width: ballsize,
            height: ballsize,
            borderRadius: ballsize,
          }}
        />

        <div
          style={{
            border: "none",
            background: "var(--secondary-color)",
            height: thickness,
            width: length,
          }}
        />

        <div
          style={{
            background: "var(--secondary-color)",
            width: ballsize,
            height: ballsize,
            borderRadius: ballsize,
          }}
        />
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: length,
        }}
      >
        <div
          style={{
            background: "var(--secondary-color)",
            width: ballsize,
            height: ballsize,
            borderRadius: ballsize,
          }}
        />

        <div
          style={{
            border: "none",
            background: "var(--secondary-color)",
            height: length,
            width: thickness,
          }}
        />

        <div
          style={{
            background: "var(--secondary-color)",
            width: ballsize,
            height: ballsize,
            borderRadius: ballsize,
          }}
        />
      </div>
    );
  }
};

export default FancyHR;
