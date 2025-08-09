import React from "react";
import styles from "./infobox.module.css";

import { Typography } from "@mui/material";

interface InfoBoxProps {
  info: string[][];
}

const InfoBox: React.FC<InfoBoxProps> = ({ info = [["", ""]] }) => {
  return (
    <div className={styles.infobox_container}>
      {info.map((line, lineNumber) => (
        <div className={styles.line_container}>
          <Typography variant="subtitle1">{line[0]}</Typography>
          <Typography variant="subtitle1">{line[1]}</Typography>
        </div>
      ))}
    </div>
  );
};

export default InfoBox;
