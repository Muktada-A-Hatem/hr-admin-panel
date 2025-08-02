"use client";

import React from "react";
import styles from "./header.module.css";

import {
  Typography,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  SelectChangeEvent,
  IconButton,
} from "@mui/material";

import Day from "@mui/icons-material/Sunny";
import Night from "@mui/icons-material/Bedtime";

interface HeaderProps {
  Title: string;
}

const Header: React.FC<HeaderProps> = ({ Title }) => {
  const [lang, setLang] = React.useState("0");
  const [theme, setTheme] = React.useState(false);

  function handleLangChange(event: SelectChangeEvent) {
    setLang(event.target.value);
  }

  function handleThemeChange() {
    setTheme(!theme);
  }

  return (
    <div className={styles.header_container}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "1.25rem",
          alignItems: "center",
        }}
      >
        <div className={styles.pfp_container}>
          <img src="images/User.png" className={styles.pfp}></img>
        </div>
        <Typography variant="h2">{Title}</Typography>
      </div>

      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "1.25rem",
          alignItems: "center",
        }}
      >
        <FormControl>
          <InputLabel>Language</InputLabel>
          <Select
            value={lang}
            label="Language"
            onChange={handleLangChange}
            autoWidth
          >
            <MenuItem value={0}>English</MenuItem>
            <MenuItem value={1}>عربي</MenuItem>
          </Select>
        </FormControl>
        <IconButton
          aria-label="fingerprint"
          color="primary"
          size="large"
          onClick={handleThemeChange}
        >
          {theme ? <Night /> : <Day />}
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
